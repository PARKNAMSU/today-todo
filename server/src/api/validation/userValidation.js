const userModel = require('../../model/user');
const JwtMethod = require('../method/jwtMethod');
const bcrypt = require('bcrypt');
const env = require('../../config/envConfig');
class UserValidation {
    static Instance = null;

    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    insertUser = async (req, res, next) => {
        let email = req.params.email;
        let { password, name } = req.body;
        try {
            password = await bcrypt.hash(password, Number(env.SALT_ROUND));
            let findUser = await userModel.findOne({ email });
            if (findUser) {
                req.sendData = {
                    status: 400,
                    data: {
                        message: 'aleady exist',
                    },
                };
                next();
                return;
            }
            await userModel.create({
                email,
                password,
                name,
            });
            req.sendData = {
                status: 201,
                data: {
                    message: 'ok',
                    user: {
                        email,
                        name,
                    },
                },
            };
            next();
        } catch (e) {
            console.log(e);
            req.sendData = {
                status: 400,
                data: {
                    message: 'invalid access',
                    err: e,
                },
            };
            next();
        }
    };
    updateUser = async (req, res, next) => {
        let { email } = req.params;
        let { password, name, new_password, type } = req.body;

        let findUser = await userModel.findOne({
            email: req.params.email,
        });
        let compare = await bcrypt.compare(password, findUser.password);

        if (!findUser || !compare) {
            req.status(400).send({ message: 'email or password not correct' });
            return;
        }
        let chgData =
            type === 'password'
                ? {
                      password: bcrypt.hashSync(
                          new_password,
                          Number(env.SALT_ROUND),
                      ),
                  }
                : { name };

        await userModel.updateOne({ email }, { ...chgData });

        if (type === 'password') {
            res.status(200).send({
                message: 'ok',
            });
            next();
            return;
        }
        this.getUser(req, res, next);
    };
    getUser = async (req, res, next) => {
        if (req.params.email) {
            let { password } = req.body;
            let findUser = await userModel.findOne({
                email: req.params.email,
            });

            let compare = null;
            if (findUser)
                compare = await bcrypt.compare(password, findUser.password);

            if (!findUser || !compare) {
                res.status(400).send({
                    message: 'email or password not correct',
                });
                return;
            }
            let data = {
                email: findUser.email,
                name: findUser.name,
                create_date: findUser.create_date,
            };
            let accessToken = await JwtMethod.makeToken(res, data, false);
            await JwtMethod.makeToken(res, data, true);
            req.sendData = {
                token: accessToken,
                data,
                message: 'ok',
                status: 200,
            };
            next();
            return;
        }
        let refresh = req.cookies.refreshToken;
        let verifyData = await JwtMethod.verifyToken(req.headers.auth, false);
        if (verifyData.message !== 'ok') {
            verifyData = await JwtMethod.verifyToken(refresh, true);
            let accessToken = await JwtMethod.makeToken(
                res,
                verifyData.data,
                false,
            );
            req.sendData = { ...verifyData, accessToken };
        } else req.sendData = verifyData;
        next();
    };
    logout = async (req, res, next) => {
        console.log('logout');
        res.clearCookie('refreshToken');
        res.status(200).send({ message: 'ok' });
    };
}

module.exports = UserValidation.getInstance();

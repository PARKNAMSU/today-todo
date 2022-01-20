const userModel = require('../../model/user');
const JwtMethod = require('../method/jwtMethod');
class UserValidation {
    static Instance = null;

    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    async insertUser(req, res, next) {
        let email = req.params.email;
        let { password, name } = req.body;

        let findUser = await userModel.findOne({ email });
        console.log(_id);
        console.log(findUser);
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
    }
    async updateUser(req, res, next) {}
    async getUser(req, res, next) {
        if (req.params.email) {
            let findUser = await userModel.findOne({
                email: req.params.email,
                password: req.body.password,
            });
            if (!findUser) {
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
    }
    async logout(req, res, next) {
        res.clearCookie('refreshToken');
        res.status(200).send({ message: 'ok' });
    }
}

module.exports = UserValidation.getInstance();

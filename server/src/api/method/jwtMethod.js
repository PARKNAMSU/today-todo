const jwt = require('jsonwebtoken');
const env = require('../../config/envConfig');
class JwtMethod {
    static Instance = null;
    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    async makeToken(res, data, isRefresh) {
        try {
            if (isRefresh) {
                await res.cookie(
                    'refreshToken',
                    jwt.sign(data, env.JWT_SECRET_KEY),
                    {
                        maxAge: 60 * 60 * 1000,
                        httpOnly: true,
                        path: '/',
                    },
                );
                return;
            }
            return jwt.sign(data, env.JWT_SECRET_KEY, {
                expiresIn: '15m',
                issuer: 'today-todo',
            });
        } catch (e) {
            console.log(e);
            return 'sign err';
        }
    }
    async verifyToken(token, isRefresh) {
        try {
            let data = await jwt.verify(token, env.JWT_SECRET_KEY);
            return {
                data,
                message: isRefresh ? 'make new accessToken' : 'ok',
                status: 200,
            };
        } catch (e) {
            console.log(e);
            return {
                message: e.name,
                status: e.name === 'TokenExpiredError' ? 419 : 401,
            };
        }
    }
}

module.exports = JwtMethod.getInstance();

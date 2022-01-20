const userModel = require('../../model/user');
class UserController {
    static Instance = null;

    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    async insertUser(req, res) {
        let { status, data } = req.sendData;
        res.status(status).send(data);
    }
    getUser(req, res) {
        let { status } = req.sendData;
        res.status(status).send(req.sendData);
    }
}

module.exports = UserController.getInstance();

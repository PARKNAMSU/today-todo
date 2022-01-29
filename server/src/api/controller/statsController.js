class StatsController {
    static Instance = null;
    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    getTodoByDate = async (req, res) => {
        res.status(req.sendData.status).send(req.sendData);
    };
}

module.exports = StatsController.getInstance();

class CustomDate {
    static Instance = null;
    static getInstance() {
        if (!this.Instance) this.Instance = new this();
        return this.Instance;
    }
    setSeoulTimeZone = () => {
        const curr = new Date();
        const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
        const KR_TIME_DIFF = 9 * 60 * 60 * 2000;
        const kr_curr = new Date(utc + KR_TIME_DIFF);
        return kr_curr;
    };
}

module.exports = CustomDate.getInstance();

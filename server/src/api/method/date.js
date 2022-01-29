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
    dateToString(date, format = '', needTime = false) {
        let dd = date.getDate();
        let mm = date.getMonth() + 1; //January is 0!

        let yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }

        yyyy = yyyy.toString();
        mm = mm.toString();
        dd = dd.toString();

        let m = date.getHours();
        let s = date.getMinutes();

        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        m = m.toString();
        s = s.toString();

        let s1 = yyyy + format + mm + format + dd;
        let s2 = yyyy + format + mm + format + dd + ' ' + m + ':' + s;
        return needTime ? s2 : s1;
    }
    allDateForMonth = (date) => {
        let [year, month] = date.split('-');
        return new Date(Number(year), Number(month), 0).getDate();
    };
}

module.exports = CustomDate.getInstance();

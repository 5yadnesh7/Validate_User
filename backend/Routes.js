// const getDb = require('./database').getDb;

export async function registerUser(req, res) {
    try {
        const db = getDb();
        const { fname, lname, email, number, pass, cpass, sucque, sucans } = req.body;
        res.send({ status: true, message: "User Created Successfully", data: "" });
    }
    catch (e) {
        console.log(e);
        res.send({ status: false, message: "Fail", data: e.toString() });
    }
}

export async function loginUser(req, res) {
    try {
        const db = getDb();
        const { email, pass } = req.body;
        res.send({ status: true, message: "User Login Successfully", data: "" });
    }
    catch (e) {
        console.log(e);
        res.send({ status: false, message: "Fail", data: e.toString() });
    }
}
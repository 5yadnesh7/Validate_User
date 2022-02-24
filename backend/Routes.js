const getDb = require('./database').getDb;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TOKEN_KEY = 'DummyTextForPrivateOrPublicKey';

module.exports.registerUser = async function (req, res) {
    try {
        const db = getDb();
        var { fname, lname, email, number, pass, sucque, sucans } = req.body;
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        pass = await bcrypt.hash(pass, salt);

        // Create token
        const token = jwt.sign(
            { fname, lname, email, number, sucque, sucans },
            TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        let obj = { fname, lname, email, number, pass, sucque, sucans, token }
        var insertUser = await db.collection("validate_user").insertOne(obj)

        res.send({ status: true, message: "User Created Successfully", data: "" });
    }
    catch (e) {
        console.log(e);
        res.send({ status: false, message: "Fail", data: e.toString() });
    }
}

module.exports.loginUser = async function (req, res) {
    try {
        const db = getDb();
        const { email, pass } = req.body;

        const getUser = await db.collection("validate_user")
            .findOne({ email })
        if (getUser) {
            // In compare first argument is unhash password were second argument is hash password form database
            const validPassword = await bcrypt.compare(pass, getUser.pass);
            if (validPassword) {
                // Create token
                const token = jwt.sign(
                    { ...getUser },
                    TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                res.send({ status: true, message: "User Found Successfully", data: token });
            } else {
                res.send({ status: true, message: "Invalid Credentials", data: {} });
            }
        } else {
            res.send({ status: true, message: "User Not Found", data: {} });
        }
    }
    catch (e) {
        console.log(e);
        res.send({ status: false, message: "Fail", data: e.toString() });
    }
}

module.exports.fetchUser = async function (req, res) {
    try {
        const db = getDb();
        const { email } = req.body;

        const getUser = await db.collection("validate_user")
            .findOne({ email })
        delete getUser.pass;
        delete getUser._id;
        if (getUser) {
            res.send({ status: true, message: "User Fetch Successfully", data: getUser });
        } else {
            res.send({ status: true, message: "User Not able to Fetch", data: {} });
        }
    }
    catch (e) {
        console.log(e);
        res.send({ status: false, message: "Fail", data: e.toString() });
    }
}
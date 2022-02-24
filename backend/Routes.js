const getDb = require('./database').getDb;
const bcrypt = require('bcryptjs')

module.exports.registerUser = async function (req, res) {
    try {
        const db = getDb();
        var { fname, lname, email, number, pass, sucque, sucans } = req.body;
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        pass = await bcrypt.hash(pass, salt);
        let obj = { fname, lname, email, number, pass, sucque, sucans }
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
                res.send({ status: true, message: "User Found Successfully", data: getUser });
            } else {
                res.send({ status: true, message: "Invalid Credentials", data: {} });
            }
        } else {
            res.send({ status: true, message: "User Not Found", data: getUser });
        }
    }
    catch (e) {
        console.log(e);
        res.send({ status: false, message: "Fail", data: e.toString() });
    }
}




// login route
module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            res.status(200).json({ message: "Valid password" });
        } else {
            res.status(400).json({ error: "Invalid Password" });
        }
    } else {
        res.status(401).json({ error: "User does not exist" });
    }
}

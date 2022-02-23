const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./Routes')

const port = process.env.PORT || 2121;
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// home
app.get('/', async function (req, res) {
    res.send("<center><h1>Hello Yadnesh</h1></center")
})
app.post("/register", route.registerUser);
app.post("/login", route.loginUser);

app.listen(port, () => {
    console.log(`Backend is running on ${port}`)
})
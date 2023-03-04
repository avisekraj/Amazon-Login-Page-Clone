const dotenv = require("dotenv");
const path = require("path");
const express = require("express");

const app = express();

const static_path = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));


// app.set("view engine", "html")

dotenv.config({ path: "./config.env" });
require("../db/conn");
const User = require("../model/userScheme");
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.render('/index.html');
});

app.post("/login", async(req, res) => {
    try {
        const registernewusers = new User({
            email: req.body.email,
            password: req.body.password
        })
        const registered = await registernewusers.save();
        res.redirect("/");

    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(PORT, () => {
  console.log(`server is listening ON ${PORT}`);
});

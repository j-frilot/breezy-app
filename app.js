const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/index");
});

app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.get("/projects", (req, res) => {
    res.render("pages/projects");
});

app.get("/contact", (req, res) => {
    res.render("pages/contact");
});

//get static files (public fies) NEED THIS FOR THE CSS
app.use(express.static("public"));

app.listen(port, () => console.log(`Listening at port ${port}`));
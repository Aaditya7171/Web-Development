import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Heyy, Good Evening!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h2>I am an Engineering student.");
});

app.get("/contact", (req, res) => {
    res.send("<h4>Email: xyz@gmail.com</h4>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


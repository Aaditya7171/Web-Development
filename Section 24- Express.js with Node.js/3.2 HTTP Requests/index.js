import express from 'express';
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//     console.log(req);
// });

// app.get("/", (req, res) => {
//     console.log(req.rawHeaders);
// });

// app.get("/", (req, res) => {
//     res.send("Hello, Bot!");
// });

app.get("/", (req, res) => {
    res.send("<h1>Hello, Kuni!</h1>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
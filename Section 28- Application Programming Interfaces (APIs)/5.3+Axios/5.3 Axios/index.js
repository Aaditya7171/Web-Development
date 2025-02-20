import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { advice: null });
});

app.post("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = response.data.slip.advice;
    res.render("index", { advice });
  }
  catch (error) {
    console.error(error);
    res.render("index", { advice: "Oops! Couldn't fetch advice. Try again!" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

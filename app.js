const express = require("express");
const app = express();
const PostBusiness = require("./business/business");
const postBusiness = new PostBusiness();
const router = express.Router();
const postController = require("./controller/emp");

const cors = require("cors");
app.use(cors());
app.options("*", cors());

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Middleware to parse JSON body
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello");
  res.json({ success: true, message: "welcome to backend" });
});

app.post("/email", async (req, res) => {
  try {
    const { email } = req.body;
    console.log("the email", email);

    const emailValue = await postBusiness.FetchMail(email);

    if (emailValue) {
      res.json(emailValue);
    } else {
      return res
        .status(400)
        .json({ status: false, message: "Failed to fetch data" });
    }
  } catch (e) {
    return res.status(500).json({ status: false, message: "Technical error" });
  }
});

//require("dotenv").config();
const PostBusiness = require("../business/business");
const postBusiness = new PostBusiness();

exports.fetchEmail = async (req, res) => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  try {
    console.log("222");
    const { email } = req.body;

    const emailValue = await postBusiness.FetchMail(email);
    console.log("####################", emailValue);
    if (emailValue) {
      res.json(emailValue);
    } else {
      return res
        .status(400)
        .json({ status: false, message: "dint fetch data" });
    }
  } catch (e) {
    return res.status(500).json({ status: false, message: "technical error" });
  }
};

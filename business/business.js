const Post = require("../model/model");
const model = new Post();
//require("dotenv").config();

const decryptMailId = (encryptedMailId) => {
  let decryptedMail = "";
  console.log(encryptedMailId, "Inside decryption");
  for (let i = 0; i < encryptedMailId.length; i++) {
    const encryptedChar = encryptedMailId[i];

    const encryptedAsciiCode = encryptedChar.charCodeAt(0); // Get ASCII code

    const decryptedAsciiCode = encryptedAsciiCode - 2; // Subtract 5 from ASCII code

    const decryptedChar = String.fromCharCode(decryptedAsciiCode); // Convert back to character

    decryptedMail += decryptedChar;
  }
  console.log(decryptedMail);
  return decryptedMail;
};

class PostBusiness {
  constructor() {
    this.post = [];
  }

  FetchMail = async (email) => {
    console.log("inside the business", email);
    const decryptedEmail = decryptMailId(email);
    console.log("the decryptewd emil is", decryptedEmail);

    return await model.fetchValue(decryptedEmail);
  };
}

module.exports = PostBusiness;

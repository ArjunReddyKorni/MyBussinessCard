import React, { useRef } from "react";
import image from "./asset/img.png";
import tata from "./asset/tcp-logo.svg";
import logo from "./asset/pngwing.com.png";

import styles from "./card.css";
const App = () => {
  const downloadVCF = () => {
    const vcfData = generateVCF(); // Function to generate VCF data
    const element = document.createElement("a");
    const file = new Blob([vcfData], { type: "text/vcard" });
    element.href = URL.createObjectURL(file);
    element.download = "contacts.vcf";
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element);
  };
  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("name");
  const location = queryParameters.get("location");
  const phone_number = queryParameters.get("number");
  const email = queryParameters.get("email");
  const generateVCF = () => {
    // Generate VCF data here
    const vcfData =
      `BEGIN:VCARD\r\n` +
      `VERSION:3.0\r\n` +
      `N:Surya;Prakash;;;\r\n` +
      `FN:Surya Prakash\r\n` +
      `ORG:OpenAI;\r\n` +
      `TITLE:Assistant\r\n` +
      `EMAIL;TYPE=INTERNET:surya@gmail.com\r\n` +
      `TEL;TYPE=CELL:9164790726\r\n` +
      `END:VCARD\r\n`;

    return vcfData;
  };

  const viewRef = useRef(null);

  return (
    <>
      {/* Contact form showing */}

      <div className="card">
        <div className="image-container">
          <img src={logo} alt="" className="logo"></img>

          <img src={tata} alt="" className="tata"></img>
        </div>
        <img src={image} alt="" className="img"></img>
        <h1 className="name">{name}</h1>
        {/* <h1 className="name">Surya Prakash</h1> */}
        <p className="title">
          <strong>{location}</strong>
        </p>
        <div className="desc">
          <p>call-{phone_number}</p>
          <p>Mail-{email}</p>
          {/* <p>call-123456765432</p>
          <p>Mail-surya@gmial.com</p> */}
        </div>
        <button className="btn" onClick={downloadVCF}>
          Export Card
        </button>
      </div>

      <div ref={viewRef} style={styles.buttonContainer}></div>
    </>
  );
};
export default App;

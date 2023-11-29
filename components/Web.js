import React, {useRef} from 'react';
import image from './asset/image.png';
import tata from './asset/tcp-logo.svg';
import logo from './asset/pngwing.com.png';

import styles from './card.css';
const Web = () => {
  const downloadVCF = () => {
    const vcfData = generateVCF(); // Function to generate VCF data
    const element = document.createElement('a');
    const file = new Blob([vcfData], {type: 'text/vcard'});
    element.href = URL.createObjectURL(file);
    element.download = 'contacts.vcf';
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element);
  };

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

      {/* <div className="Parent">
        <div className="card">
          <p className="name">SuryaPrakash</p>
          <p className="role">Full-stack developer</p>

          <p className="company">Tata Consumer Product Limited</p>

          <div ref={viewRef} style={styles.contactContainer}>
            <span>
              <strong>Call</strong>
            </span>
            -
            <span>
              <strong>9164790726</strong>
            </span>
          </div>

          <div ref={viewRef} style={styles.contactContainer}>
            <span>
              <strong>Mail</strong>
            </span>
            -
            <span>
              <strong>suryaPrakash.tata@gmail.com</strong>
            </span>
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "5px",
                borderColor: "wheat",
              }}
              onClick={downloadVCF}
            >
              Export Card
            </button>
          </div>
        </div>
      </div> */}
      <div className="card">
        <div className="image-container">
          <img src={logo} alt="" className="logo"></img>

          <img src={tata} alt="" className="tata"></img>
        </div>
        <img src={image} alt="" className="img"></img>
        <h1 className="name">SuryaPrakash</h1>
        <p className="title">
          <strong>Web Developer</strong>
        </p>
        <div className="desc">
          <p>call-9164790726</p>
          <p>Mail-suryaprakash@gmail.com</p>
        </div>
        <button className="btn" onClick={downloadVCF}>
          Export Card
        </button>
      </div>

      <div ref={viewRef} style={styles.buttonContainer}></div>
    </>
  );
};
export default Web;

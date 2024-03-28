import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState ('');
  const [color, setColor] = useState('#00000000');

  const generateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        light: color
      }
    }, (err, url) => {
      if(err)
        return console.log(err)
        console.log(url)
        setQrcode(url)
    })
  }

  return (
      <div className='app'>
        <h1>QR Code Generator</h1>

        <div className="color-qrcode">
        <label>Background-Color: </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-input"
        />

        <input
          type="text"
          placeholder="e.g. https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="url-input"
        />
        <button onClick={generateQRCode}>Generate</button>
        </div>
        {qrcode && <>
          <img src={qrcode} alt="QR Code"/>
          <a href={qrcode} download="qrcode.png">Download</a>
        </>}
      </div>
  )
}

export default App

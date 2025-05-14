import React, { useState } from 'react';
import Label from './Label';
import './Btn.css';

function Btn({ type, btnType, btnSize, text, disabled }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (type === "copy") {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Oculta el Label después de 2s
      });
    }
  };

  return (
    <button 
      type="button" 
      className={`btn my-1 btn-${btnType}`} 
      disabled={disabled} 
      onClick={handleCopy}
    >
      {type === "copy" && <Label visible={copied} />}  
      {text}
    </button>
  );
}

export default Btn;

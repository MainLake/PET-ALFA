import React, { useEffect, useState } from 'react';
import '../css/footer.css';

const Footer = () => {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
      setContentHeight(height - window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='footer' style={{ marginTop: contentHeight }}>

      <div className="container footer-main">
        <p className="mb-6">Desarrollado por PABED 2024.</p>
      </div>
    </div>
  );
};
 main

export default Footer;

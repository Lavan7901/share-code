
import React, { useState } from 'react';
import { FaShare } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  TelegramIcon,
} from 'react-share';

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShareButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
        <h2 style={{color: "purple"}}> SHARE </h2>
        <input type="text" placeholder='Enter URL' />
      <button onClick={handleShareButtonClick}><FaShare size={16}/>&nbsp;Share</button>

      {showPopup && (
        <div className='container'>
        <div className="icons">
          <div className="close" onClick={handleClosePopup}><IoClose size={20} /></div>
          <div className="items">
            <FacebookShareButton url={'https://www.example.com'}>
              <FacebookIcon size={50} round />
              <p>Facebook</p>
            </FacebookShareButton>
          </div>
          <div className="items">
            <TwitterShareButton url={'https://www.example.com'}>
              <TwitterIcon size={50} round />
              <p>Twitter</p>
            </TwitterShareButton>
          </div>
          <div className="items">
            <WhatsappShareButton url={'https://www.example.com'}>
              <WhatsappIcon size={50} round />
              <p>Whatsapp</p>
            </WhatsappShareButton>
          </div>
          <div className="items">
            <EmailShareButton url={'https://www.example.com'}>
              <EmailIcon size={50} round />
              <p>&nbsp;Email</p>
            </EmailShareButton>
          </div>
          <div className="items">
            <TelegramShareButton url={'https://www.example.com'}>
              <TelegramIcon size={50} round />
              <p>Telegram</p>
            </TelegramShareButton>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
/*
import React, { useState } from 'react';
import { FaShare, FaHeart } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import share1 from '../Assetee/share1.jpeg';
import share2 from '../Assetee/share2.jpeg';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  TelegramIcon,
} from 'react-share';

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShareButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <h2 style={{ color: 'purple' }}> SHARE </h2>
      <div className="post">
        <div className="post-content">
          <p>This is a sample post content This is a sample post content This is a sample post content This is a sample post content </p>
        </div>
        <div className="post-image">
          <img src={share1} alt="Post" width="80%" />
        </div>
        < FaHeart size={20} color='darkred' />
        <FaShare size={16} onClick={handleShareButtonClick} />
        <p>Share</p>
      </div>
      <div className="post">
        <div className="post-content">
          <p>This is a sample post content This is a sample post content This is a sample post content This is a sample post content </p>
        </div>
        <div className="post-image">
          <img src={share2} alt="Post" width="80%" />
        </div>
        < FaHeart size={20} color='darkred' />
        <FaShare size={16} onClick={handleShareButtonClick} />
        <p>Share</p>
      </div>

      {showPopup && (
        <div className="icons">
          <div className="close" onClick={handleClosePopup}>
            <IoClose size={20} />
          </div>
          <div className="items">
            <FacebookShareButton url={'https://www.example.com'}>
              <FacebookIcon size={40} round />
              <p>Facebook</p>
            </FacebookShareButton>
          </div>
          <div className="items">
            <TwitterShareButton url={'https://www.example.com'}>
              <TwitterIcon size={40} round />
              <p>Twitter</p>
            </TwitterShareButton>
          </div>
          <div className="items">
            <WhatsappShareButton url={'https://www.example.com'}>
              <WhatsappIcon size={40} round />
              <p>Whatsapp</p>
            </WhatsappShareButton>
          </div>
          <div className="items">
            <EmailShareButton url={'https://www.example.com'}>
              <EmailIcon size={40} round />
              <p>Email</p>
            </EmailShareButton>
          </div>
          <div className="items">
            <TelegramShareButton url={'https://www.example.com'}>
              <TelegramIcon size={40} round />
              <p>Telegram</p>
            </TelegramShareButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
*/

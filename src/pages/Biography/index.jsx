import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BiographyContainer from '../../components/BiographyContainer';
import SelectLanguage from '../../components/SelectLanguage';
import ImagesContainer from '../../components/ImagesContainer';
import './style.css';

const Biography = () => {
  const [language, setLanguage] = useState('EN');
  const artistDetails = useSelector((state) => state.artistDetails);
  return (
    <div className="Biography">
      <div className="back">
        <ImagesContainer />
      </div>
      <div className="text">
        <h2>Biography</h2>
        <SelectLanguage setLanguage={setLanguage} objectItems={artistDetails} keyOption="strBiography" />
        <BiographyContainer language={language} />
      </div>
    </div>
  );
};

export default Biography;

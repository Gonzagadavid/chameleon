import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BiographyContainer from '../../components/BiographyContainer';
import SelectLanguage from '../../components/SelectLanguage';

const Biography = () => {
  const [language, setLanguage] = useState('EN');
  const artistDetails = useSelector((state) => state.artistDetails);

  return (
    <div>
      <h2>Biography</h2>
      <SelectLanguage setLanguage={setLanguage} objectItems={artistDetails} />
      <BiographyContainer language={language} />
    </div>
  );
};

export default Biography;

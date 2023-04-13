import {useEffect, useState} from 'react';

const Typed = ({texts}) => {
  const [placeHolder, setPlaceHolder] = useState('');

  useEffect(() => {
    texts?.map((string) => {
      setTimeout(() => {
        setPlaceHolder(string);
      }, 3000);
    });
  });

  return <input type="text" placeholder={placeHolder} readOnly />;
};

export default Typed;

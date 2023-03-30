import {useEffect, useState} from 'react';

export const Typed = ({texts}) => {
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

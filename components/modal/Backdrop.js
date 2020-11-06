import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import '../../sass/style.scss';

const backdrop = (props) => {
  const onClick = () => {
    dispatch(props.toggleBackdrop({ name: props.type, value: false }))
  }

  const onKeyDown = (e) => {
    if (e && e.keyCode) {
      if (e.keyCode === 27) dispatch(props.toggleBackdrop({ name: props.type, value: false }));
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  });
  
  const dispatch = useDispatch();

  const Component = props.show 
    ? (<div onClick={onClick} className="backdrop"></div>) 
    : null;

  return Component;
}

export default backdrop;
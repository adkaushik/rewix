import React from 'react';

import Backdrop from './Backdrop';
import '../../sass/style.scss';


export default function Modal(props) {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${
      props.movie.backdrop_path || props.movie.poster_path
    })`,
  };

  return (
    <>
      <Backdrop show={props.show} toggleBackdrop={props.setShowModal} type={props.type}/>
      <div
        style={backgroundStyle}
        className={props.show ? 'modal show' : 'modal hide'}
      >
        {props.childElement}
      </div>
      s
    </>
  );
}

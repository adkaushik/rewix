import * as React from 'react';
import { useEditor, useNode } from "@craftjs/core";
import lz from 'lzutf8';
import copy from 'copy-to-clipboard';

import './styles.module.css';

import moviesList from '../../../utils/movies';

interface Movie {
  id: string,
  title: string
  vodImagePath: string
  hlsVideoPath: string 
}

const MovieCard = ({ movie: props }):any  => {
  const { actions, query } = useEditor((state, query) => ({...state}));

  return (
    <div 
      onClick={() => {
        const json = query.serialize();
        console.log('json \n', json);
        const base = lz.encodeBase64(lz.compress(json));
        copy(base, { debug: true });
        console.log("base 65", base);
      }}
     className="card-container">
      <span className="title">{props.title}</span>
      <img className="movie-image" src={props.vodImage} />
    </div>
  );
};

interface TProps {
  backgroundColor?: string,
  style?: any
};

const Section1 = ({ backgroundColor="", style = {}, title }): any => {
  console.log('style ', style);
  const { connectors: {connect, drag} } = useNode();
  return (
    <div ref={ ref => connect(drag(ref))} className="section-container" style={{ backgroundColor, ...style }}>
      <span contentEditable="true" style={{ margin: '12px', fontWeight: 800, color: 'white', fontSize: '20px' }}>{title}</span>
      <div className="list-container">
        {moviesList.map((movie) => {
          return (
            <MovieCard
                key={movie.id}
                movie={movie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section1;

Section1.craft = {
  displayName: 'Section1'
};


import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useNode } from "@craftjs/core";

import { Swiper, SwiperSlide } from 'swiper/react';

import { setSelectedMovie } from '../../redux/actions/movie';
import { setShowModal } from '../../redux/actions/modal';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../../sass/style.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CustomSwiper = (props) => {
  const { connectors: { connect, drag } } = useNode();
  const movies = useSelector(state => state.movie.list);
  const dispatch = useDispatch();

  const onClick = (movie) => {
    return () => {
      dispatch(setSelectedMovie(movie));
      dispatch(setShowModal({ name: 'moviePreview', value: true }));
    }
  }

  return (
    <div ref={(ref) => connect(drag(ref))} style={{ position: 'relative' }}>
      <div style={{ cursor: 'grab', backgroundColor: 'red', width: '100px', height: '50px', color: 'white', fontSize: '30px', fontWeight: 600, position: 'absolute', top: 20, left: 40, zIndex: 100, textAlign: 'center' }}>
        MOVE
      </div>
      <Swiper
        className="movieShowcase__container"
        navigation={true}
        grabCursor={false}
        draggable={false}
        loop={false}
        loopAdditionalSlides={
          window.innerWidth >= 1378 ? 4 :
            window.innerWidth >= 998 ? 3 :
              window.innerWidth >= 625 ? 2 : 2
        }
        breakpoints={{
          1378: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        preventClicksPropagation={true}
        preventClicks={true}
        scrollbar={{ draggable: false, hide: true }}
        slideToClickedSlide={false}
        pagination={{ clickable: true }}
      >
        {movies.map((movie, idx) => {
          let movieImageUrl =
            'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;

          if (movie.poster_path && movie.backdrop_path !== null) {
            return (
              <SwiperSlide
                onClick={onClick(movie)}
                key={idx}
                className={
                  'movieShowcase__container--movie'
                }
              >
                <img
                  src={movieImageUrl}
                  className="movieShowcase__container--movie-image"
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;

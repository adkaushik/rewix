import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Editor, Frame, Element, useEditor, useNode } from '@craftjs/core';
import { createMuiTheme } from '@material-ui/core';

import Swiper from '../components/swiper';

import SingleRowContainer from '../components/selectors/SingleRowContainer';

import { setShowModal } from '../redux/actions/modal';

import lz from 'lzutf8';
import '../styles/app.css';

import Section1 from '../components/movies/Section1';
import Modal from '../components/modal';
import MovieDetails from '../components/movieDetails';

import { ThemeContext, FLIX_DARK_THEME, FLIX_LIGHT_THEME } from '../themes/index';

import { setTheme } from '../redux/actions/preferences';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'acumin-pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

const Button = (props) => {
  const { actions, query } = useEditor((state, query) => ({ ...state }));

  return (
    <button ref={props.ref} style={{ width: '220px', height: '40px', backgroundColor: 'white' }}>Drag and drop to create Section</button>
  );
}

Button.craft = {
  displayName: 'Button'
}

const MainContent = () => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div ref={(node) => connect(drag(node))} style={{ width: '100%', height: '500px', position: 'relative' }}>
      <img style={{ position: 'absolute', zIndex: 1, top: 0, left: 0, right: 0, bottom: 0, alignSelf: 'center', width: '100%', height: '100%', objectFit: 'cover' }} src="https://static.toiimg.com/photo/72975551.cms" />
      <span style={{ position: 'absolute', zIndex: 2, color: 'white', fontSize: '30px', fontWeight: 'bold', top: 60, left: 40 }}>New Movie Please Watch this now!!!</span>
    </div>
  );
}

const Footer = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div style={{ width: '100%', height: '200px', backgroundColor: theme.background }}>
        <div style={{ color: theme.foreground, fontSize: '30px', fontWeight: 'bold', margin: '0 auto' }}>Footer</div>
      </div>
    )}
  </ThemeContext.Consumer>

);

const ToolBar = () => {
  const { connectors, query } = useEditor();
  const { connectors: { connect, drag } } = useNode();
  
  const dispatch = useDispatch();
  const activeTheme = useSelector(state => state.preferences.theme.active);

  const draggerStyle: any = {
    cursor: 'grab', width: 'auto', minWidth: '190px', height: '40px', backgroundColor: 'white', marginBottom: '16px', textAlign: 'center', display: 'flex', alignItems: 'center', paddingLeft: '8px', paddingRight: '8px', color: 'black', fontWeight: 600, fontSize: '16px', borderRadius: '8px'
  };

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        console.log('theme =>', theme);
        return (
          <div style={{ width: '100%', height: '100%', paddingLeft: '12px', paddingRight: '12px', backgroundColor: '#0f171e', paddingTop: '24px', paddingBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>

            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', marginBottom: '16px' }}>Toolbar</span>

            <div onClick={() => dispatch(setTheme( activeTheme == FLIX_DARK_THEME ? FLIX_LIGHT_THEME : FLIX_DARK_THEME))} style={{ ...draggerStyle, backgroundColor: theme.primary, color: theme.foreground }}>
              Toggle theme
        </div>

            <div
              style={{ ...draggerStyle, backgroundColor: theme.primary, color: theme.foreground }}
              ref={(ref) => connectors.create(ref, <Section1 title="New Section Draggable" style={{ paddingBottom: '12px', paddingTop: '12px' }} />)}>
              Drag to create a section
      </div>

            <div
              style={draggerStyle}
              ref={(ref) => connectors.create(ref, <Swiper />)}
            >
              Drag to create a Slider
      </div>

            <div
              style={draggerStyle}
              ref={(ref) => connectors.create(ref, <MainContent />)}
            >
              Drag to create a Hero Section
      </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

function App() {
  const base64 =
    'eyJST09UIjp7InR5cGUiOiJkaXYiLCJpc0NhbnZhcyI6ZmFsc2UsInByb3BzxCdzdHlsZcQJd2lkdGgiOiIxMDAlIiwiZGlzcGxheSI6ImZsZXgiLMUHRGlyZWN0aW9uIjoicm93In19ySlOYW3Kb2N1c3RvbSI6e30sImhpZGRlbsl5bm9kZXMiOlsiTUltZ1dyWWdtYiIsIjA0QmtuTGljdXlLIl0sImxpbmtlZE7GK3vEZssu/wDc9ADc/wDNOiJjb2x1bW4iLOkBBjgwJf8A3v4A3nN0c2VwbC1aZkkiLCJSdnRYN0pNdy3EDXNFeWNIVG1kZVXzAOosInBhcmVudCI65gHIfSzMSv8A+vQA+vkA6WFsaWduSXRlbXPEFmVudGVyIiwianVzdGlmeUNvbnTmAIZzcGFjZS1iZXR3ZWVu/wES/gESWUY5SU50ZFZjX/4A+OsB6n0szDb6AP50cnXrAP3yAKRl/wCj6ACjR1IwT1NwQWpsLf4Ao+sBk30szDbpAKN7InJlc29sdmVk5wCETWFpbugBVn37AbrxAL3MOf8AxuYAxv0AuusBT33tApj/AlvzAlv/Agz9AWkxT3hqRDFWTklp/wIM7QIMyzb/Agz/Agz/AKPlAKNJNnBobzF1a2M5IiwidjZabWMxYk85NyIsInRVTjlFT1RnSDUiLCI1NDdpWmFGV2vkAZ50TWwzZHpGVHl1IiwiTlQ4S3pOdTNDNCIsIjZsckVZZ0lTblYiLCJDQWRvVUFyTS1Z/wQC6gGffSzsAJH6AmdTd2lwZXL9AmIidGl05AHBInPFLCAxxC7uASVD5QEgx0z/AS//AnXkAMjrAbh97QFM+wDI5gSx5QCc/wDKyi4gMSBDYXJhb3VzZWwgRHJhZ2dhYmzkAfDpBQ5wYWRkaW5nQm905QDRIjEycOQGDscXVG9wyBTyAt3HZDH/ARD/ARDzARDrAk//Adj+Adj/Acb/ALb/ALbxALbrAvj/Acb/AcbyAcYy5AHG/wHF/wHF/wHF/wHF/wEP9QHF6gP6/wHF/wHF/wHF/wC2/wC28AC26wSj/wHF/wHF8gHFM/8Bxf8Bxf8Bxf8Bxf8BD/gBD+sFpf8BD/8BD/IBDzT/AQ//AQ//AQ//AQ//AQ/4AQ/rBqf/AtT/AtT/AtT/ALb/ALbwALbrC1//CNT/Cy//Cy//Cy//Cy//API6WyJqRnVod3lxRHJZdv8JJO0JJMw3+wG2aW5nbGVSb3fkALphaW7wAcL/CUX/CUXqAMVTdWFpRDN2U0hJMv8LUuoBtn0szTf6AMVGb2/kAYb/AnvuALrHNP8Avv8CdeQAsewBaH3uDsD/Anf8D3wy5Q97bWFyZ2luTGVmxGkyNOUECvEOwmhlaWdoxCHnD7BiYWNrZ3JvdW5kQ29sb3IiOiIjMGYxNzHkAattaW5IyC8zMDDFUecC0W3kANrqAtH5AwBwb3NpxxRzdGlja3nkCu/kBJcxMDD/Auf9AiJhV2RGbHZKZE1lSv8LDecPD8wx/wwG/wLB/wCf5QCfQk5JODNqRVNzdGj+AJ/sAgF9LM04+gLCVG9vbEJh/wLD8AC8yDX/AMH/AsTkALTsAUt9fQ==';
  const uint8array = lz.decodeBase64(base64);
  const json = lz.decompress(uint8array);
  console.log('json', json);

  const { modal, movie: { selectedMovie } } = useSelector(state => ({ modal: state.modal, movie: state.movie }));

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div style={{ width: '100%', height: 'auto', minHeight: '100vh', marginTop: '80px', backgroundColor: theme.background, position: 'relative' }}>
          <Modal
            show={modal['moviePreview'].show}
            type="moviePreview"
            setShowModal={setShowModal}
            movie={selectedMovie}
            childElement={<MovieDetails movie={selectedMovie} />}
          />
          <Editor
            enabled={false}
            resolver={{ Section1, MainContent, SingleRowContainer, Swiper, Footer, ToolBar, Button, Modal, MovieDetails }}>
            <div style={{ width: '100%', height: 'auto', minHeight: '100vh', backgroundColor: theme.background, padding: '24px' }}>
              <Frame >
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>

                  <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Element
                        is="div"
                        canvas
                      >
                        {/* <Section1 title="Main Content Non Draggable" style={{ paddingBottom: '12px', paddingTop: '12px', border: '1px solid blue' }} /> */}
                        <MainContent />
                      </Element>
                    </div>
                    <div style={{}}>
                      <Element
                        is="div"
                        canvas
                      >
                        <Swiper title="swiper 1" />
                        <Section1 title="Section 1 Caraousel Draggable" style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                        <Swiper />
                        <Section1 title="Section 2 Carousel Draggable" style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                        <Swiper />
                        <Section1 title="Section 3 Carousel Draggable" style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                        <Section1 title="Section 4 Carousel Draggable" style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                        <Swiper />
                      </Element>
                    </div>
                    <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Element
                        is={SingleRowContainer}
                        canvas>
                        <Footer />
                      </Element>
                    </div>
                  </div>

                  <div style={{ width: '20%', marginLeft: '24px', display: 'flex', height: '100%', backgroundColor: theme.background, minHeight: '300px', alignItmes: 'center', flexDirection: 'column', position: 'sticky', top: 100 }}>
                    <Element is="div" canvas>
                      <ToolBar />
                    </Element>
                  </div>

                </div>
              </Frame>
            </div>
          </Editor>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;

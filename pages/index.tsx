import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NextSeo } from 'next-seo';
import { Editor, Frame, Element, useEditor, useNode } from '@craftjs/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { Container, Text } from '../components/selectors';
import { Custom1, OnlyButtons } from '../components/selectors/Custom1';
import { Custom2, Custom2VideoDrop } from '../components/selectors/Custom2';
import { Custom3, Custom3BtnDrop } from '../components/selectors/Custom3';
// import { Button } from '../components/selectors/Button';

import Swiper from '../components/swiper';

import SingleRowContainer from '../components/selectors/SingleRowContainer';

import { setShowModal } from '../redux/actions/modal';

import lz from 'lzutf8';
import '../styles/app.css';

import Section1 from '../components/movies/Section1';
import Modal from '../components/modal';
import MovieDetails from '../components/movieDetails';

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
  const { actions, query } = useEditor((state, query) => ({...state}));
  // const { connectors: {connect, drag} } = useNode();

  return (
    <button ref={props.ref} style={{ width: '220px', height: '40px', backgroundColor: 'white' }}>Drag and drop to create Section</button>
  );
}

Button.craft = {
  displayName: 'Button'
}

const MainContent = () => {
  const {connectors: {connect, drag}} = useNode();
  return (
    <div ref={(node) => connect(drag(node))} style={{ width: '100%', height: '500px', position: 'relative' }}>
      <img style={{ position: 'absolute', zIndex: 1, top: 0, left: 0, right: 0, bottom: 0, alignSelf: 'center', width: '100%', height: '100%', objectFit: 'cover' }} src="https://static.toiimg.com/photo/72975551.cms" />
      <span style={{ position: 'absolute', zIndex: 2, color: 'white', fontSize: '30px', fontWeight: 'bold', top: 60, left: 40 }}>New Movie Please Watch this now!!!</span>
    </div>
  );
}

const Footer = () => (
  <div style={{ width: '100%', height: '200px', backgroundColor: '#0f171e' }}>
    <div style={{  color: '#8197a4', fontSize: '30px', fontWeight: 'bold', margin: '0 auto' }}>Footer</div>
  </div>
);

const ToolBar = () => {
  const { connectors, query } = useEditor();
  const { connectors: {connect, drag} } = useNode();

  const draggerStyle:any = {
     cursor: 'grab', width: 'auto', minWidth: '190px', height: '40px', backgroundColor: 'white', marginBottom: '16px', textAlign: 'center', display: 'flex', alignItems: 'center', paddingLeft: '8px', paddingRight: '8px', color: 'black', fontWeight: 600, fontSize: '16px', borderRadius: '8px'
  };


  return (
    <div style={{ width: '100%', height: '100%', paddingLeft: '12px', paddingRight: '12px', backgroundColor: '#0f171e', paddingTop: '24px', paddingBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>

      <span style={{color: 'white', fontWeight: 'bold', fontSize: '16px', marginBottom: '16px' }}>Toolbar</span>

      <div
       style={draggerStyle}
       ref={(ref)=> connectors.create(ref, <Section1 title="New Section Draggable" style={{ paddingBottom: '12px', paddingTop: '12px' }} />)}
      >
        Drag to create a section
      </div>

      <div
       style={draggerStyle}
       ref={(ref)=> connectors.create(ref, <Swiper />)}
      >
        Drag to create a Slider
      </div>

      <div
       style={draggerStyle}
       ref={(ref)=> connectors.create(ref, <MainContent />)}
      >
        Drag to create a Hero Section
      </div>
    </div>
  );
}

function App() {
  const base64 =
    'eyJST09UIjp7InR5cGUiOiJkaXYiLCJpc0NhbnZhcyI6ZmFsc2UsInByb3BzxCdzdHlsZcQJd2lkdGgiOiIxMDAlIiwiZGlzcGxheSI6ImZsZXgiLMUHRGlyZWN0aW9uIjoicm93In19ySlOYW3Kb2N1c3RvbSI6e30sImhpZGRlbsl5bm9kZXMiOlsiMVJwM242T3F1ZiIsIjE0QmNrRkllVk0iXSwibGlua2VkTsYqe8Rlyy3/ANv0ANv/AMw6ImNvbHVtbiIs6QEFODAl/wDd/gDdbzdJVUluVGtzQuQA3U8zWFdsNWpKYyIsImFqcVRwZjhXS0nzAOosInBhcmVudCI65gHHfSzMSv8A+vQA+vkA6WFsaWduSXRlbXPEFmVudGVyIiwianVzdGlmeUNvbnTmAIZzcGFjZS1iZXR3ZWVu/wES/gESd1NrN0Zwa0FCZf4A+OsB6n0szDb6AP50cnXrAP3yAKRl/wCj6ACjald6M25oU0FROf4Ao+sBk30szDbpAKN7InJlc29sdmVk5wCETWFpbugBVn37AbrxAL3MOf8AxuYAxv0AuusBT+QDVeoCmP8CW/MCW/8CDP0BaUFVZkxwVmo3enH/AgztAgzLNv8CDP8CDP8Ao+UAozQzWFRXRms3SXciLCJaWUxXbFVQWG00/wCw6gFRfSzMQ/oCGVN3aXBlcv0CFCJ0aXTkAXMic8UsIDHELu4A18dG/wDb/wIh5ADC6wFkfe0A+PsAwuYEXeUAlv8AxMouIDEgQ2FyYW91c2VsIERyYWdnYWJs5AGc6QS6cGFkZGluZ0JvdOUA0SIxMnDkBbrHF1RvcMgU8gKJx2Qx/wEQ/wEQ8wEQ6wW8/wMx/wWM/wWM/wWM/wWM/wDyOlsiMDBiZWlrNXRqWP8C0O0DgMs2+wIOaW5nbGVSb3fkALhhaW7wAtz/A6D/A6DqAMN2U2puajVPS1FQ/gDD6wGzfSzMNvoAw0Zvb+QBgv8Fp+4AuMc0/wC8/wJx5ACw6wFl5AWi6gkX/wJx/AnSMuUJ0W1hcmdpbkxlZsRnMjTlA07xCRloZWlnaMQh5woGYmFja2dyb3VuZENvbG9yIjoiIzBmMTcx5AGnbWluSMgvMzAwxVHnAstt5ADY6gLL+QL6cG9zaccUc3RpY2t5IiwidOQD2zEwMP8C4f0CHmlCR1pHOGdkd3X/CWXnCWXLMP8GW/8Cu/8AneUAnS00VGxCX0ZT/wkK7AH9fSzMNvoCu1Rvb2xCYf8CvPAAucg1/wC+/wK95ACy6wFHfX0=';
  const uint8array = lz.decodeBase64(base64);
  const json = lz.decompress(uint8array);
  console.log('json',json);

  const { modal, movie: { selectedMovie } } = useSelector(state => ({ modal: state.modal, movie: state.movie }));

  return (
    <div style={{ width: '100%', height: 'auto', minHeight: '100vh', marginTop: '80px', backgroundColor: '#0f171e', position: 'relative' }}>
      <Modal 
        show={modal['moviePreview'].show}
        type="moviePreview"
        setShowModal={setShowModal}
        movie={selectedMovie}
        childElement={<MovieDetails movie={selectedMovie} />}
      />
      <Editor
        enabled
        resolver={{ Section1, MainContent, SingleRowContainer, Swiper, Footer, ToolBar, Button, Modal, MovieDetails }}>
        <div style={{ width: '100%', height: 'auto', minHeight: '100vh', backgroundColor: 'black', padding: '24px' }}>
          <Frame>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
              
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
                <div style={{ }}>
                  <Element
                    is="div"
                    canvas
                  >
                    <Swiper title="swiper 1"/>
                    <Section1 title="Section 1 Caraousel Draggable" style={{ paddingBottom: '12px', paddingTop: '12px' }}/>
                    <Swiper/>
                    <Section1 title="Section 2 Carousel Draggable"  style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                    <Swiper/>
                    <Section1 title="Section 3 Carousel Draggable"  style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                    <Section1 title="Section 4 Carousel Draggable"  style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                    <Swiper/>
                  </Element>
                </div>
                <div style={{  flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Element
                    is={SingleRowContainer}
                    canvas>
                    <Footer />
                  </Element>
                </div>
              </div>
            
              <div style={{width: '20%', marginLeft: '24px', display: 'flex', height: '100%', backgroundColor: '#0f171e', minHeight: '300px', alignItmes: 'center', flexDirection: 'column', position: 'sticky', top: 100}}>
                <Element is="div" canvas>
                      <ToolBar />
                </Element>
              </div>

          </div>
          </Frame>
        </div>
      </Editor>
    </div>
  );
}

export default App;

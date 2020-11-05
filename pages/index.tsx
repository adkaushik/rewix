import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import { Editor, Frame, Element, useEditor, useNode } from '@craftjs/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { Container, Text } from '../components/selectors';
import { Custom1, OnlyButtons } from '../components/selectors/Custom1';
import { Custom2, Custom2VideoDrop } from '../components/selectors/Custom2';
import { Custom3, Custom3BtnDrop } from '../components/selectors/Custom3';
// import { Button } from '../components/selectors/Button';
import { Video } from '../components/selectors/Video';
import { Viewport, RenderNode } from '../components/editor';

import Swiper from '../components/swiper';

import SingleRowContainer from '../components/selectors/SingleRowContainer';

import lz from 'lzutf8';
import '../styles/app.css';

import Section1 from '../components/movies/Section1';

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
    // 'eyJST09UIjp7InR5cGUiOiJkaXYiLCJpc0NhbnZhcyI6ZmFsc2UsInByb3BzIjp7InN0eWxlIjp7ImRpc3BsYXkiOiJmbGV4In19LCJkaXNwbGF5TmFtZSI6ImRpdiIsImN1c3RvbSI6e30sImhpZGRlbiI6ZmFsc2UsIm5vZGVzIjpbInZieFVYRUp3NnkiLCJFMUFlSWNQcHpuIl0sImxpbmtlZE5vZGVzIjp7fX0sInZieFVYRUp3NnkiOnsidHlwZSI6ImRpdiIsImlzQ2FudmFzIjpmYWxzZSwicHJvcHMiOnsic3R5bGUiOnsiZmxleCI6M319LCJkaXNwbGF5TmFtZSI6ImRpdiIsImN1c3RvbSI6e30sImhpZGRlbiI6ZmFsc2UsIm5vZGVzIjpbIkM1OGVLUmROUHUiXSwibGlua2VkTm9kZXMiOnt9LCJwYXJlbnQiOiJST09UIn0sIkM1OGVLUmROUHUiOnsidHlwZSI6e30sImlzQ2FudmFzIjp0cnVlLCJwcm9wcyI6eyJmbGV4RGlyZWN0aW9uIjoiY29sdW1uIiwiYWxpZ25JdGVtcyI6ImNlbnRlciIsImp1c3RpZnlDb250ZW50IjoiY2VudGVyIiwiZmlsbFNwYWNlIjoibm8iLCJwYWRkaW5nIjpbIjAiLCIyMCIsIjAiLCIwIl0sIm1hcmdpbiI6WyIyMCIsIjAiLCIyMCIsIjAiXSwiYmFja2dyb3VuZCI6eyJyIjowLCJnIjoyNTAsImIiOjAsImEiOjI1NX0sImNvbG9yIjp7InIiOjAsImciOjAsImIiOjAsImEiOjF9LCJ3aWR0aCI6IjEwMSUiLCJoZWlnaHQiOiI0OSUiLCJtYXJnaW5Cb3R0b20iOjIwfSwiZGlzcGxheU5hbWUiOiJDb250YWluZXIiLCJjdXN0b20iOnt9LCJoaWRkZW4iOmZhbHNlLCJub2RlcyI6W10sImxpbmtlZE5vZGVzIjp7fSwicGFyZW50IjoidmJ4VVhFSnc2eSJ9LCJQZElHa21TQmk0Ijp7InR5cGUiOnsicmVzb2x2ZWROYW1lIjoiU2VjdGlvbjEifSwiaXNDYW52YXMiOmZhbHNlLCJwcm9wcyI6eyJiYWNrZ3JvdW5kQ29sb3IiOiJ3aGl0ZSJ9LCJkaXNwbGF5TmFtZSI6IlNlY3Rpb24xIiwiY3VzdG9tIjp7fSwiaGlkZGVuIjpmYWxzZSwibm9kZXMiOltdLCJsaW5rZWROb2RlcyI6e30sInBhcmVudCI6IjFSQV9MSmpxWEoifSwiV3JkajFJdEY2SiI6eyJ0eXBlIjp7InJlc29sdmVkTmFtZSI6IlNlY3Rpb24xIn0sImlzQ2FudmFzIjpmYWxzZSwicHJvcHMiOnsiYmFja2dyb3VuZENvbG9yIjoiYmxhY2sifSwiZGlzcGxheU5hbWUiOiJTZWN0aW9uMSIsImN1c3RvbSI6e30sImhpZGRlbiI6ZmFsc2UsIm5vZGVzIjpbXSwibGlua2VkTm9kZXMiOnt9LCJwYXJlbnQiOiIxUkFfTEpqcVhKIn0sIkUxQWVJY1Bwem4iOnsidHlwZSI6ImRpdiIsImlzQ2FudmFzIjpmYWxzZSwicHJvcHMiOnsic3R5bGUiOnsiZmxleCI6MSwiZmxleERpcmVjdGlvbiI6ImNvbHVtbiIsImFsaWduSXRlbXMiOiJjZW50ZXIiLCJqdXN0aWZ5Q29udGVudCI6InNwYWNlLWJldHdlZW4ifX0sImRpc3BsYXlOYW1lIjoiZGl2IiwiY3VzdG9tIjp7fSwiaGlkZGVuIjpmYWxzZSwibm9kZXMiOlsiMVJBX0xKanFYSiJdLCJsaW5rZWROb2RlcyI6e30sInBhcmVudCI6IlJPT1QifSwiMVJBX0xKanFYSiI6eyJ0eXBlIjp7fSwiaXNDYW52YXMiOnRydWUsInByb3BzIjp7ImZsZXhEaXJlY3Rpb24iOiJjb2x1bW4iLCJhbGlnbkl0ZW1zIjoiY2VudGVyIiwianVzdGlmeUNvbnRlbnQiOiJjZW50ZXIiLCJmaWxsU3BhY2UiOiJubyIsInBhZGRpbmciOlsiMCIsIjIwIiwiMCIsIjAiXSwibWFyZ2luIjpbIjIwIiwiMCIsIjIwIiwiMCJdLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImEiOjI1NX0sImNvbG9yIjp7InIiOjAsImciOjAsImIiOjAsImEiOjF9LCJ3aWR0aCI6IjEwMCUiLCJoZWlnaHQiOiIxMDAlIiwibWFyZ2luQm90dG9tIjoyMH0sImRpc3BsYXlOYW1lIjoiQ29udGFpbmVyIiwiY3VzdG9tIjp7fSwiaGlkZGVuIjpmYWxzZSwibm9kZXMiOlsiV3JkajFJdEY2SiIsImN2TlZoWUMwMU8iLCJQZElHa21TQmk0Il0sImxpbmtlZE5vZGVzIjp7fSwicGFyZW50IjoiRTFBZUljUHB6biJ9LCJjdk5WaFlDMDFPIjp7InR5cGUiOnsicmVzb2x2ZWROYW1lIjoiU2VjdGlvbjEifSwiaXNDYW52YXMiOmZhbHNlLCJwcm9wcyI6eyJiYWNrZ3JvdW5kQ29sb3IiOiJibHVlIn0sImRpc3BsYXlOYW1lIjoiU2VjdGlvbjEiLCJjdXN0b20iOnt9LCJoaWRkZW4iOmZhbHNlLCJub2RlcyI6W10sImxpbmtlZE5vZGVzIjp7fSwicGFyZW50IjoiMVJBX0xKanFYSiJ9fQ==';
    'eyJST09UIjp7InR5cGUiOiJkaXYiLCJpc0NhbnZhcyI6ZmFsc2UsInByb3BzxCdzdHlsZcQJZGlzcGxheSI6ImZsZXgiLMUHRGlyZWN0aW9uIjoiY29sdW1uIn19LMgsTmFtymNjdXN0b20iOnt9LCJoaWRkZW7JbW5vZGVzIjpbInhjdWpjendtcmYiLCI3RTZsd2V5T2dZIiwiT19jaWlMQnN6TCJdLCJsaW5rZWROxjd7xHLLOv8A3PQA3OUA0jox+QDULCJhbGlnbkl0ZW1zxBZlbnRlciIsImp1c3RpZnlDb250ZW50Ijoic3BhY2UtYmV0d2Vl/wEL/wELTWVDaGdaMGRhVvMA8SwicGFyxnLlAc99LMww+gEBdHJ16wEA8gCeZf8AnecAnf0AkesBin0sImFKZTdxUnBIX2jqAJd7InJlc29sdmVkx3hNYWlu6AFEffsBsfEAscw5/wC6/wC65AC6ang0TlBWdzRQ5QC66wJ//wJS+wJS/wIC/QIC6wCP/wIC5gICyzD/AgL/AgL/AJ3lAJ1SdkxDQ0NrZmpUIiwiRktJRU1FN21WcSIsIkNTV0ZRXzR4csR56wH/LCIxVWJDNjMyOERwIiwiaEtzUzRnTVAySCIsIkhlcW5ERUtQbUUiLCI1NVhBZnFlMEhC5AP4dXNpOWVEaTI1/gEF6wGufSzsAJ76AnZTd2lwZXL/AnHvASDHNP8BJP8CbPICbOsBNPsAsOYEljH9ALIidGl05AKCyC4gMSBDYXJhb3VzZWwgRHJhZ2dhYmzkAeXpAqpwYWRkaW5nQm905QDRIjEycOQF3scXVG9wyBTyAszHZDH/ARD/ARDzARDrAlH/AcD/AcD/AcD/ALD/ALDqALDrAtr/AcD/AcDyAcAy5AHA/wG//wG//wG//wG//wEP9AEP6wPc/wG//wG//wG//wCw/wCw6gCw6wRl/wG//wG/8gG/M/8Bv/8Bv/8Bv/8Bv/8BD/gBD+sFgf8BD/8BD/IBDzT/AQ//AQ//AQ//AQ//AQ/4AQ/rBp3/As7/As7/As7/ALD/ALDrAs7qCyv/CLn/Cwv/Cwv/Cwv/Cwv/CQnsCGx0d3VsRERvTHZU/wkJ5wkJyzD7AbFpbmdsZVJvd+QAsmFpbvABvf8JKf8JKesJxlBvWC01dGt6LUH+AL7rAbfkCc3LN/oAxUZvb+QBfv8Cdu4Ausc0/wC+/wJ25ACx6wFnfX0=';
  const uint8array = lz.decodeBase64(base64);
  const json = lz.decompress(uint8array);
  console.log('json',json);
  return (
    <div style={{ width: '100%', height: 'auto', minHeight: '100vh', marginTop: '80px', backgroundColor: '#0f171e', position: 'relative' }}>
    <Editor
      enabled
      resolver={{ Section1, MainContent, SingleRowContainer, Swiper, Footer, ToolBar, Button }}>
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
                  <Swiper />
                  <Section1 title="Section 1 Caraousel Draggable" style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                  <Swiper />
                  <Section1 title="Section 2 Carousel Draggable"  style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                  <Swiper />
                  <Section1 title="Section 3 Carousel Draggable"  style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                  <Section1 title="Section 4 Carousel Draggable"  style={{ paddingBottom: '12px', paddingTop: '12px' }} />
                  <Swiper />
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

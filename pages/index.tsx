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

const Button = () => {
  const { actions, query } = useEditor((state, query) => ({...state}));
  // const { connectors: {connect, drag} } = useNode();

  return (
    <button style={{ width: '220px', height: '40px', backgroundColor: 'white' }} onClick={() => {
      const json = query.serialize();
      const base = lz.encodeBase64(lz.compress(json));
      // console.log("base 65", base);
    }}>Log the saved state</button>
  );
}

Button.craft = {
  displayName: 'Button'
}


const MainContent = () => (
  <div style={{ width: '100%', height: '500px', position: 'relative' }}>
    <img style={{ position: 'absolute', zIndex: 1, top: 0, left: 0, right: 0, bottom: 0, alignSelf: 'center', width: '100%', height: '100%', objectFit: 'cover' }} src="https://static.toiimg.com/photo/72975551.cms" />
    <span style={{ position: 'absolute', zIndex: 2, color: 'white', fontSize: '30px', fontWeight: 'bold', top: 80, left: 60 }}>New Movie Please Watch this now!!!</span>
  </div>
);

const Footer = () => (
  <div style={{ width: '100%', height: '200px', backgroundColor: 'whitesmoke' }}>
    <span style={{  color: 'black', fontSize: '30px', fontWeight: 'bold' }}>Footer</span>
  </div>
);

function App() {
  const base64 =
    // 'eyJST09UIjp7InR5cGUiOiJkaXYiLCJpc0NhbnZhcyI6ZmFsc2UsInByb3BzIjp7InN0eWxlIjp7ImRpc3BsYXkiOiJmbGV4In19LCJkaXNwbGF5TmFtZSI6ImRpdiIsImN1c3RvbSI6e30sImhpZGRlbiI6ZmFsc2UsIm5vZGVzIjpbInZieFVYRUp3NnkiLCJFMUFlSWNQcHpuIl0sImxpbmtlZE5vZGVzIjp7fX0sInZieFVYRUp3NnkiOnsidHlwZSI6ImRpdiIsImlzQ2FudmFzIjpmYWxzZSwicHJvcHMiOnsic3R5bGUiOnsiZmxleCI6M319LCJkaXNwbGF5TmFtZSI6ImRpdiIsImN1c3RvbSI6e30sImhpZGRlbiI6ZmFsc2UsIm5vZGVzIjpbIkM1OGVLUmROUHUiXSwibGlua2VkTm9kZXMiOnt9LCJwYXJlbnQiOiJST09UIn0sIkM1OGVLUmROUHUiOnsidHlwZSI6e30sImlzQ2FudmFzIjp0cnVlLCJwcm9wcyI6eyJmbGV4RGlyZWN0aW9uIjoiY29sdW1uIiwiYWxpZ25JdGVtcyI6ImNlbnRlciIsImp1c3RpZnlDb250ZW50IjoiY2VudGVyIiwiZmlsbFNwYWNlIjoibm8iLCJwYWRkaW5nIjpbIjAiLCIyMCIsIjAiLCIwIl0sIm1hcmdpbiI6WyIyMCIsIjAiLCIyMCIsIjAiXSwiYmFja2dyb3VuZCI6eyJyIjowLCJnIjoyNTAsImIiOjAsImEiOjI1NX0sImNvbG9yIjp7InIiOjAsImciOjAsImIiOjAsImEiOjF9LCJ3aWR0aCI6IjEwMSUiLCJoZWlnaHQiOiI0OSUiLCJtYXJnaW5Cb3R0b20iOjIwfSwiZGlzcGxheU5hbWUiOiJDb250YWluZXIiLCJjdXN0b20iOnt9LCJoaWRkZW4iOmZhbHNlLCJub2RlcyI6W10sImxpbmtlZE5vZGVzIjp7fSwicGFyZW50IjoidmJ4VVhFSnc2eSJ9LCJQZElHa21TQmk0Ijp7InR5cGUiOnsicmVzb2x2ZWROYW1lIjoiU2VjdGlvbjEifSwiaXNDYW52YXMiOmZhbHNlLCJwcm9wcyI6eyJiYWNrZ3JvdW5kQ29sb3IiOiJ3aGl0ZSJ9LCJkaXNwbGF5TmFtZSI6IlNlY3Rpb24xIiwiY3VzdG9tIjp7fSwiaGlkZGVuIjpmYWxzZSwibm9kZXMiOltdLCJsaW5rZWROb2RlcyI6e30sInBhcmVudCI6IjFSQV9MSmpxWEoifSwiV3JkajFJdEY2SiI6eyJ0eXBlIjp7InJlc29sdmVkTmFtZSI6IlNlY3Rpb24xIn0sImlzQ2FudmFzIjpmYWxzZSwicHJvcHMiOnsiYmFja2dyb3VuZENvbG9yIjoiYmxhY2sifSwiZGlzcGxheU5hbWUiOiJTZWN0aW9uMSIsImN1c3RvbSI6e30sImhpZGRlbiI6ZmFsc2UsIm5vZGVzIjpbXSwibGlua2VkTm9kZXMiOnt9LCJwYXJlbnQiOiIxUkFfTEpqcVhKIn0sIkUxQWVJY1Bwem4iOnsidHlwZSI6ImRpdiIsImlzQ2FudmFzIjpmYWxzZSwicHJvcHMiOnsic3R5bGUiOnsiZmxleCI6MSwiZmxleERpcmVjdGlvbiI6ImNvbHVtbiIsImFsaWduSXRlbXMiOiJjZW50ZXIiLCJqdXN0aWZ5Q29udGVudCI6InNwYWNlLWJldHdlZW4ifX0sImRpc3BsYXlOYW1lIjoiZGl2IiwiY3VzdG9tIjp7fSwiaGlkZGVuIjpmYWxzZSwibm9kZXMiOlsiMVJBX0xKanFYSiJdLCJsaW5rZWROb2RlcyI6e30sInBhcmVudCI6IlJPT1QifSwiMVJBX0xKanFYSiI6eyJ0eXBlIjp7fSwiaXNDYW52YXMiOnRydWUsInByb3BzIjp7ImZsZXhEaXJlY3Rpb24iOiJjb2x1bW4iLCJhbGlnbkl0ZW1zIjoiY2VudGVyIiwianVzdGlmeUNvbnRlbnQiOiJjZW50ZXIiLCJmaWxsU3BhY2UiOiJubyIsInBhZGRpbmciOlsiMCIsIjIwIiwiMCIsIjAiXSwibWFyZ2luIjpbIjIwIiwiMCIsIjIwIiwiMCJdLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImEiOjI1NX0sImNvbG9yIjp7InIiOjAsImciOjAsImIiOjAsImEiOjF9LCJ3aWR0aCI6IjEwMCUiLCJoZWlnaHQiOiIxMDAlIiwibWFyZ2luQm90dG9tIjoyMH0sImRpc3BsYXlOYW1lIjoiQ29udGFpbmVyIiwiY3VzdG9tIjp7fSwiaGlkZGVuIjpmYWxzZSwibm9kZXMiOlsiV3JkajFJdEY2SiIsImN2TlZoWUMwMU8iLCJQZElHa21TQmk0Il0sImxpbmtlZE5vZGVzIjp7fSwicGFyZW50IjoiRTFBZUljUHB6biJ9LCJjdk5WaFlDMDFPIjp7InR5cGUiOnsicmVzb2x2ZWROYW1lIjoiU2VjdGlvbjEifSwiaXNDYW52YXMiOmZhbHNlLCJwcm9wcyI6eyJiYWNrZ3JvdW5kQ29sb3IiOiJibHVlIn0sImRpc3BsYXlOYW1lIjoiU2VjdGlvbjEiLCJjdXN0b20iOnt9LCJoaWRkZW4iOmZhbHNlLCJub2RlcyI6W10sImxpbmtlZE5vZGVzIjp7fSwicGFyZW50IjoiMVJBX0xKanFYSiJ9fQ==';
    'eyJST09UIjp7InR5cGUiOiJkaXYiLCJpc0NhbnZhcyI6ZmFsc2UsInByb3BzxCdzdHlsZcQJZGlzcGxheSI6ImZsZXgiLMUHRGlyZWN0aW9uIjoiY29sdW1uIn19LMgsTmFtymNjdXN0b20iOnt9LCJoaWRkZW7JbW5vZGVzIjpbIkp2eXNIQS11V1YiLCI0Ymt1OGpXVzlDIl0sImxpbmtlZE7GKnvEZcst/wDP9ADP5QDFOjH5AMcsImFsaWduSXRlbXPEFmVudGVyIiwianVzdGlmeUNvbnRlbnQiOiJzcGFjZS1iZXR3ZWX/AP7/AP52ejVONmFvbGlG8wDxLCJwYXLGcuUBwn0szDDpAQHEKeoA/nRydesA/fIAm2X/AJrGfVsiOEtfeUZFS3BQM/4AmusBk30szDbqAKAicmVzb2x2ZWTnAIRT5gF5McQx+gG3dGl05AG3Ik1haW4g5wF8IE5vbiBEcmFnZ2FibOQAyukB3HBhZGRpbmdCb3TlANoiMTJw5AKxxxdUb3DKFGJvcmRlcsQQcHggc29saWQgYmx1ZfMByOkAqf8BM+YBM/0BJ+sBuX3tAuj/Asj7Asj/Anj9Ad5mNmFRSmxnb1I0/wJ45wJ4yzD6ALH/Anv/AnvqAJ1ZZENvYUJSRWNTIiwiaHJEanpyOHR1MyIsIkNPam9UOVB6dUwiLCJROE9ZQi0tUy10/gDE6wFtfc1D/wKi/wKi6gKixy4gMSBDYXJhb3VzZWz/AqX/AqX2AqV3aGl0/wKm/wFe/wKmOuwB530s7AGI/wEr/wEr8gErMuQBK/8BKv8BKvsBKnBpbmv/ASn/ASn/ASnvASnrAqT/ASn/ASnyASkz/wEp/wEp/wEp/wEp/wEp/wEp8wEp6wOz/wEp/wEp8gEpNP8BKf8BKf8BKf8BKf8BKf8BKfEBKX0=';
  const uint8array = lz.decodeBase64(base64);
  const json = lz.decompress(uint8array);
  console.log('json',json);
  return (
    <div style={{ width: '100%', height: 'auto', minHeight: '100vh', marginTop: '100px' }}>
    <Editor
      enabled
      resolver={{ Section1 }}>
      <div style={{ width: '100%', height: 'auto', minHeight: '100vh', backgroundColor: 'black', padding: '24px', overflow: 'hidden' }}>
        <Frame>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <Element
                is={SingleRowContainer}
                canvas
              >
                {/* <Section1 title="Main Content Non Draggable" style={{ paddingBottom: '12px', paddingTop: '12px', border: '1px solid blue' }} /> */}
                <MainContent />
              </Element>
            </div>
            <div style={{ flex: 1 }}>
              <Element
                is="div"
                canvas
              >
                <Section1 title="Section 1 Caraousel Draggable" style={{ paddingBottom: '12px', paddingTop: '12px', border: '1px solid white' }} />
                <Section1 title="Section 2 Carousel Draggable"  style={{ paddingBottom: '12px', paddingTop: '12px', border: '1px solid pink' }} />
                <Section1 title="Section 3 Carousel Draggable"  style={{ paddingBottom: '12px', paddingTop: '12px', border: '1px solid pink' }} />
                <Section1 title="Section 4 Carousel Draggable"  style={{ paddingBottom: '12px', paddingTop: '12px', border: '1px solid pink' }} />
              </Element>
            </div>
            <div style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <Element
                is={SingleRowContainer}
                canvas>
                <Footer />
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













// return (
  //   <ThemeProvider theme={theme}>
  //     <div className="h-full h-screen">
  //       {/* <NextSeo
  //         title="Craft.js"
  //         description="A React framework for building drag-n-drop page editors."
  //         canonical="https://craft.js.org/"
  //         twitter={{
  //           site: 'craft.js.org',
  //           cardType: 'summary_large_image',
  //         }}
  //       /> */}
  //       <Editor
  //         resolver={{
  //           Section1,
  //           Container,
  //           Text,
  //           Custom1,
  //           Custom2,
  //           Custom2VideoDrop,
  //           Custom3,
  //           Custom3BtnDrop,
  //           OnlyButtons,
  //           Button,
  //           Video,
  //         }}
  //         enabled={enabled}
  //         onRender={RenderNode}
  //       >
  //         <Viewport>
  //           <Frame data={json}>
  //             <Element
  //               canvas
  //               is={Container}
  //               width="100%"
  //               height="auto"
  //               background={{ r: 255, g: 255, b: 255, a: 1 }}
  //               padding={['40', '40', '40', '40']}
  //             >
  //               <Element
  //                 canvas
  //                 is={Container}
  //                 flexDirection="row"
  //                 width="100%"
  //                 height="auto"
  //                 padding={['40', '40', '40', '40']}
  //                 margin={['0', '0', '40', '0']}
  //               >
  //                 <Element
  //                   canvas
  //                   is={Container}
  //                   width="40%"
  //                   height="100%"
  //                   padding={['0', '20', '0', '20']}
  //                 >
  //                   <Text
  //                     fontSize="23"
  //                     fontWeight="400"
  //                     text="Craft.js is a React framework for building powerful &amp; feature-rich drag-n-drop page editors."
  //                   ></Text>
  //                 </Element>
  //                 <Element
  //                   canvas
  //                   is={Container}
  //                   width="60%"
  //                   height="100%"
  //                   padding={['0', '20', '0', '20']}
  //                 >
  //                   <Text
  //                     fontSize="14"
  //                     fontWeight="400"
  //                     text="Everything you see here, including the editor, itself is made of React components. Craft.js comes only with the building blocks for a page editor; it provides a drag-n-drop system and handles the way user components should be rendered, updated and moved, among other things. <br /> <br /> You control the way your editor looks and behave."
  //                   ></Text>
  //                 </Element>
  //               </Element>

  //               <Element
  //                 canvas
  //                 is={Container}
  //                 background={{ r: 39, g: 41, b: 41, a: 1 }}
  //                 flexDirection="column"
  //                 width="100%"
  //                 height="auto"
  //                 padding={['40', '40', '40', '40']}
  //                 margin={['0', '0', '40', '0']}
  //               >
  //                 <Element
  //                   canvas
  //                   background={{
  //                     r: 76,
  //                     g: 78,
  //                     b: 78,
  //                     a: 0,
  //                   }}
  //                   is={Container}
  //                   flexDirection="row"
  //                   margin={['0', '0', '0', '0']}
  //                   width="100%"
  //                   height="auto"
  //                   alignItems="center"
  //                 >
  //                   <Element
  //                     canvas
  //                     background={{
  //                       r: 0,
  //                       g: 0,
  //                       b: 0,
  //                       a: 0,
  //                     }}
  //                     is={Container}
  //                     alignItems="center"
  //                     padding={['0', '0', '0', '0']}
  //                     flexDirection="row"
  //                     width="350px"
  //                     height="250px"
  //                   >
  //                     <Element
  //                       canvas
  //                       is={Container}
  //                       justifyContent="center"
  //                       alignItems="center"
  //                       background={{
  //                         r: 76,
  //                         g: 78,
  //                         b: 78,
  //                         a: 1,
  //                       }}
  //                       shadow={25}
  //                       width="90%"
  //                       height="90%"
  //                       padding={['10', '20', '10', '20']}
  //                     >
  //                       <Element
  //                         canvas
  //                         is={Container}
  //                         justifyContent="center"
  //                         alignItems="center"
  //                         background={{
  //                           r: 76,
  //                           g: 78,
  //                           b: 78,
  //                           a: 1,
  //                         }}
  //                         shadow={50}
  //                         width="80%"
  //                         height="80%"
  //                         padding={['10', '20', '10', '20']}
  //                       >
  //                         <Element
  //                           canvas
  //                           is={Container}
  //                           justifyContent="center"
  //                           alignItems="center"
  //                           background={{
  //                             r: 76,
  //                             g: 78,
  //                             b: 78,
  //                             a: 1,
  //                           }}
  //                           shadow={50}
  //                           width="60%"
  //                           height="60%"
  //                           padding={['10', '20', '10', '20']}
  //                         />
  //                       </Element>
  //                     </Element>
  //                   </Element>
  //                   <Element
  //                     canvas
  //                     background={{
  //                       r: 0,
  //                       g: 0,
  //                       b: 0,
  //                       a: 0,
  //                     }}
  //                     is={Container}
  //                     padding={['0', '0', '0', '20']}
  //                     flexDirection="column"
  //                     width="55%"
  //                     height="100%"
  //                     fillSpace="yes"
  //                   >
  //                     <Text
  //                       color={{
  //                         r: '255',
  //                         g: '255',
  //                         b: '255',
  //                         a: '1',
  //                       }}
  //                       margin={['0', '0', '18', '0']}
  //                       fontSize="20"
  //                       text="Design complex components"
  //                     ></Text>
  //                     <Text
  //                       color={{
  //                         r: '255',
  //                         g: '255',
  //                         b: '255',
  //                         a: '0.8',
  //                       }}
  //                       fontSize="14"
  //                       fontWeight="400"
  //                       text="You can define areas within your React component which users can drop other components into. <br/><br />You can even design how the component should be edited — content editable, drag to resize, have inputs on toolbars — anything really."
  //                     ></Text>
  //                   </Element>
  //                 </Element>
  //               </Element>
  //               <Element
  //                 canvas
  //                 is={Container}
  //                 background={{
  //                   r: 234,
  //                   g: 245,
  //                   b: 245,
  //                   a: 1,
  //                 }}
  //                 flexDirection="column"
  //                 width="100%"
  //                 height="auto"
  //                 padding={['40', '40', '40', '40']}
  //                 margin={['0', '0', '40', '0']}
  //               >
  //                 <Element
  //                   canvas
  //                   background={{
  //                     r: 76,
  //                     g: 78,
  //                     b: 78,
  //                     a: 0,
  //                   }}
  //                   is={Container}
  //                   flexDirection="column"
  //                   margin={['0,', '0', '20', '0']}
  //                   width="100%"
  //                   height="auto"
  //                 >
  //                   <Text
  //                     color={{
  //                       r: '46',
  //                       g: '47',
  //                       b: '47',
  //                       a: '1',
  //                     }}
  //                     fontSize="23"
  //                     text="Programmatic drag &amp; drop"
  //                   ></Text>
  //                   <Text
  //                     fontSize="14"
  //                     fontWeight="400"
  //                     text="Govern what goes in and out of your components"
  //                   ></Text>
  //                 </Element>
  //                 <Element
  //                   canvas
  //                   background={{
  //                     r: 76,
  //                     g: 78,
  //                     b: 78,
  //                     a: 0,
  //                   }}
  //                   is={Container}
  //                   flexDirection="row"
  //                   margin={['30', '0', '0', '0']}
  //                   width="100%"
  //                   height="auto"
  //                 >
  //                   <Element
  //                     canvas
  //                     background={{
  //                       r: 0,
  //                       g: 0,
  //                       b: 0,
  //                       a: 0,
  //                     }}
  //                     is={Container}
  //                     padding={['0', '20', '0', '0']}
  //                     flexDirection="row"
  //                     width="45%"
  //                   >
  //                     <Custom1
  //                       background={{
  //                         r: 119,
  //                         g: 219,
  //                         b: 165,
  //                         a: 1,
  //                       }}
  //                       height="auto"
  //                       width="100%"
  //                       padding={['20', '20', '20', '20']}
  //                       margin={['0', '0', '0', '0']}
  //                       shadow={40}
  //                     />
  //                   </Element>
  //                   <Element
  //                     canvas
  //                     background={{
  //                       r: 0,
  //                       g: 0,
  //                       b: 0,
  //                       a: 0,
  //                     }}
  //                     is={Container}
  //                     padding={['0', '0', '0', '20']}
  //                     flexDirection="column"
  //                     width="55%"
  //                   >
  //                     <Custom2
  //                       background={{
  //                         r: 108,
  //                         g: 126,
  //                         b: 131,
  //                         a: 1,
  //                       }}
  //                       height="125px"
  //                       width="100%"
  //                       padding={['0', '0', '0', '20']}
  //                       margin={['0', '0', '0', '0']}
  //                       shadow={40}
  //                       flexDirection="row"
  //                       alignItems="center"
  //                     />
  //                     <Custom3
  //                       background={{
  //                         r: 134,
  //                         g: 187,
  //                         b: 201,
  //                         a: 1,
  //                       }}
  //                       height="auto"
  //                       width="100%"
  //                       padding={['20', '20', '20', '20']}
  //                       margin={['20', '0', '0', '0']}
  //                       shadow={40}
  //                       flexDirection="column"
  //                     />
  //                     {/* <Section1 /> */}
  //                   </Element>
  //                   {/* <Element
  //                     canvas
  //                     background={{
  //                       r: 0,
  //                       g: 0,
  //                       b: 0,
  //                       a: 0,
  //                     }}
  //                     is={Container}
  //                     padding={['0', '0', '0', '20']}
  //                     flexDirection="column"
  //                     width="100%"
  //                   >

  //                   </Element> */}
  //                 </Element>
  //               </Element>
  //             </Element>
  //           </Frame>
  //         </Viewport>
  //       </Editor>
  //     </div>

  //   </ThemeProvider>
  // );
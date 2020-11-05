import React from 'react';
import { Container } from '../Container';
import { Element, useNode } from '@craftjs/core';
import { Button } from '../Button';

import Section1 from '../../movies/Section1';

export const SingleRowContainerDrop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div ref={connect} className="w-full h-full">
      {children}
    </div>
  );
};

SingleRowContainerDrop.craft = {
  rules: {
    canMoveOut: (target, self, helpers) => {
      const {
        data: { nodes },
      } = self;
      const btnNodes = nodes.filter(
        (id) => helpers(id).get().data.type == Section1
      );
      if (target.data.type == Section1 && btnNodes.length == 1) return false;
      return true;
    },

    canMoveIn: (target, self, helpers) => {
      const {
        data: { nodes }
      } = self;

      const sectionNodes = nodes.filter(
        (id) => {
          return helpers(id).get().data.type == Section1;
        }
      );

      console.log('targe *******************', target.data);

      return false;
    }
  },
};
// export const SingleRowContainer = (props: any) => {
//   console.log('props ====> ')
//   return (
//       <Element canvas is={SingleRowContainerDrop} id="drop-inside-single-container">{props.childer}</Element>        
//   );
// };

// SingleRowContainer.craft = {
//   displayName: 'SingleRowContainer'
// };

export default SingleRowContainerDrop;
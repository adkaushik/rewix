import React, { useState } from 'react';
import { Container } from '../Container';
import { Element, useNode } from '@craftjs/core';
import { Video } from '../Video';

export const Custom2VideoDrop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} className="flex-1 ml-5 h-full">
      {children}
    </div>
  );
};
Custom2VideoDrop.craft = {
  rules: {
    canMoveIn: (incoming, self, helper) => {
      return (
        incoming.data.type == Video && helper(self.id).decendants().length == 0
      );
    },
  },
};
export const Custom2 = (props: any) => {
  const [text, setText] = useState('You can only drop');
  return (
    <Container {...props} className="overflow-hidden">
      <div className="w-24">
        <h2 onKeyUp={(e: any) => setText(e.target.value)} className="text-xs text-white">
          ${text}
          <br />
          one video here.
        </h2>
      </div>
      <Element canvas is={Custom2VideoDrop} id="wow">
        <Video />
      </Element>
    </Container>
  );
};

Custom2.craft = {
  ...Container.craft,
  displayName: 'Custom 2',
};

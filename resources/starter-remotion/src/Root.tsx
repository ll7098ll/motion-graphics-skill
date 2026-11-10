import React from 'react';
import { Composition } from 'remotion';
import { Main } from './Main';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={60 * 15} // 15 seconds at 60fps = 900 frames
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};

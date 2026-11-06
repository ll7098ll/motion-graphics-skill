import React from 'react';
import { Composition } from 'remotion';
import { Main } from './Main';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={30 * 15} // 15s at 30fps or 60fps
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};

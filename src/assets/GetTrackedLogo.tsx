// import React from 'react';
// import { Tabs } from '@chakra-ui/react';
/** @jsxRuntime classic */
/** @jsx jsx */
import SvgWrapper from '@/components/wrappers/SvgWrapper.tsx';
import { jsx} from '@emotion/react';
import getTrackedLogoSvg from './getTrackedLogo.svg';

function GetTrackedLogo(props: {height: string}) {
  
  return (
    <SvgWrapper height={props.height}>
      <img
        css={{
          objectFit: 'contain',
          height: '100%',
        }}
        src={getTrackedLogoSvg}
      />
    </SvgWrapper>
  );
}

export default GetTrackedLogo;
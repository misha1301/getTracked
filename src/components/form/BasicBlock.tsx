// import React from 'react';
// import { Tabs } from '@chakra-ui/react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { PropsWithChildren } from 'react';

function BasicBlock(props: PropsWithChildren) {
  const blockStyle = css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    padding: '28px 22px',
    borderRadius: '15px',
    background: 'var(--color-component-background)',
  });

  return <div css={blockStyle}>{props.children}</div>;
}

export default BasicBlock;

// import React from 'react';
// import { Tabs } from '@chakra-ui/react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { PropsWithChildren } from 'react';

function DividerLine(props: PropsWithChildren) {
  const dividerLine = css({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  });

  const line = css({
    borderBottom: 'solid 1px #464646',
    flexGrow: 1,
  });

  return (
    <div css={dividerLine}>
      <div css={line}></div>
      {props.children}
      <div css={line}></div>
    </div>
  );
}

export default DividerLine;

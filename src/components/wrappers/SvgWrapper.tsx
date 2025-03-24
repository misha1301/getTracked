/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Box } from '@chakra-ui/react';

import { PropsWithChildren } from 'react';

type SvgWrapperProps = PropsWithChildren & {
  height?: string | undefined;
};

function SvgWrapper({ children, height, ...props }: SvgWrapperProps) {
  const wrapperStyle = css({
    height: height ? height : 'auto',
    width: 'fit-content',
  });

  return (
    <Box css={wrapperStyle} {...props}>
      {children}
    </Box>
  );
}

export default SvgWrapper;

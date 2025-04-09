import React, { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

type TLoginProps = PropsWithChildren;

const Root: React.FC<TLoginProps> = ({ children }) => {
  return (
    <Box
      w='100%'
      bg='#181818'
      overflow="hidden"
      roundedTopLeft='20px'
      roundedTopRight='20px'
      flexGrow='1'
      height="100%"
      display='flex'
      borderTop="0.5px solid #2F2F2F"
    >
      {children}
    </Box>
  );
};

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      height='100%'
      flexGrow='1'
      overflowY='auto'
      display='flex'
      flexDirection='column'
      padding={'24px'}
      backgroundColor='#181818'
      scrollBehavior="smooth"
    >
      {children}
    </Box>
  );
};

const Drawer: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box as='nav' width={"300px"}>{children}</Box>;
};

export default { Root, Content, Drawer };

import {
  ContentFrame,
  ContentBoard,
  BoardHeader,
  HeaderIcon,
  BoardContent,
  LogicBox,
  LogicBoxLabel,
  LogicBlock,
  ContentGroup,
  ErrorLabel,
  BoardFooter, ContentSection,
  SectionTitle,
  SectionUtils,
} from '@/components/ui/content-board.tsx';
import { InfoBlock, InfoRow, RowBadgeContainer } from '@/components/ui/info-block.tsx';

import { useNavigate } from "react-router-dom"

import { Button } from '@/components/ui/button.tsx';
import { NavLink } from 'react-router-dom';



export const NotFoundPage = () => {

  const navigation = useNavigate();
  
  return (
    <ContentFrame maxFrameWidth='1200px'>
      <ContentSection>
        <SectionUtils>
          <Button onClick={() => navigation(-1)} variant='link' size='none' className='text-(--gtr-color-warning-foreground)'>
            Go back
          </Button>
        </SectionUtils>
      </ContentSection>

      <ContentBoard>
        <BoardContent>
          <LogicBox>
            <LogicBoxLabel muted className='mt-[8px]'>Not found</LogicBoxLabel>
            <InfoBlock>
              <InfoRow>
                
              </InfoRow>
            </InfoBlock>
          </LogicBox>
        </BoardContent>
      </ContentBoard>

    </ContentFrame>
  );
};

export default NotFoundPage;

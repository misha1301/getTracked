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
import { Badge } from '@/components/ui/badge.tsx';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { Button } from '@/components/ui/button.tsx';



export const NotFoundPage = () => {

  return (
    <ContentFrame maxFrameWidth='1200px'>
      <ContentSection>
        <SectionUtils>
          <Button variant='link' size='none' className='text-(--gtr-color-warning-foreground)'>
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

                gege
                <RowBadgeContainer>
                  <Badge
                    className='h-5 min-w-5 rounded-full px-1 font-mono tabular-nums'
                    variant='destructive'
                  >
                    deleted
                  </Badge>
                </RowBadgeContainer>
              </InfoRow>
            </InfoBlock>
          </LogicBox>
        </BoardContent>
      </ContentBoard>

    </ContentFrame>
  );
};

export default NotFoundPage;

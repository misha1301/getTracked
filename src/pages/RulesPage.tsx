import React from 'react';

import { Outlet } from 'react-router-dom';

import { Check, ChevronsUpDown } from "lucide-react";

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


const frameworks = [
  {
    id: "jdfhlfeiauhuifhuhr371",
    value: "Rule 1",
    label: "Description of rule 1",
  },{
    id: "jdfhlfeiauhuifhuhr372",
    value: "Rule 2",
    label: "Description of rule 2",
  },{
    id: "jdfhlfeiauhuifhuhr373",
    value: "Rule 3",
    label: "Description of rule 3",
  },{
    id: "jdfhlfeiauhuifhuhr374",
    value: "Rule 4",
    label: "Description of rule 4",
  },{
    id: "jdfhlfeiauhuifhuhr375",
    value: "Rule 5",
    label: "Description of rule 5",
  },{
    id: "jdfhlfeiauhuifhuhr376",
    value: "Rule 6",
    label: "Description of rule 6",
  },
]

const RulesPageLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const RulesList = () => {

  return (
    <ContentFrame maxFrameWidth='1200px'>
      <ContentSection>
        <SectionUtils>
          <Button variant='link' size='none' className='text-(--gtr-color-warning-foreground)'>
            Edit tracker
          </Button>
        </SectionUtils>
      </ContentSection>

      <ContentBoard>
        <BoardContent>
          <LogicBox>
            <LogicBoxLabel muted className='mt-[8px]'>Total number</LogicBoxLabel>
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
              <InfoRow>gege</InfoRow>
              <InfoRow>gege</InfoRow>
            </InfoBlock>
          </LogicBox>
        </BoardContent>
      </ContentBoard>

      <ContentSection>
        <SectionTitle>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </SectionTitle>
      </ContentSection>

    </ContentFrame>
  );
};

export default RulesPageLayout;

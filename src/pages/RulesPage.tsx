import React from 'react';

import { Outlet } from 'react-router-dom';

import { Textarea } from '@/components/ui/textarea';
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


import { Button } from '@/components/ui/button.tsx';


import { JsonTextarea } from "../components/textArea";

import { InputCustom } from '@/components/inputs/input';
import { IndicatorStatus, StatusIndicator } from '@/components/ui/statusIndicator';

const EXAMPLE_DATA = {
  user: {
    id: "usr_01HXYZ",
    name: "Ada Lovelace",
    email: "ada@example.com",
    roles: ["admin", "editor"],
    metadata: {
      created_at: "2024-01-15T08:30:00Z",
      last_login: "2025-03-14T22:11:44Z",
      preferences: { theme: "dark", language: "en", notifications: true },
    },
  },
  pagination: { page: 1, per_page: 25, total: 1042 },
};

const RulesPageLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const RulesList = () => {

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [editValue, setEditValue] = React.useState<string | object>(EXAMPLE_DATA);

  return (
    <ContentFrame maxFrameWidth='1200px'>
      <ContentSection>
        <SectionUtils>
          <Button variant='link' size='none' className='text-(--gtr-color-link-active)'>
            + Add rule
          </Button>
        </SectionUtils>
      </ContentSection>

      <ContentBoard>
        <BoardHeader className='p-0'>
          <ContentSection className='my-0 px-0'>
            <SectionTitle >
              <LogicBoxLabel muted className='mt-[8px]'>Total number</LogicBoxLabel>
              <LogicBoxLabel muted className='mt-[8px]'>Per page</LogicBoxLabel>
            </SectionTitle>
          </ContentSection>
        </BoardHeader>
        <BoardContent>
          <LogicBox>
            <InfoBlock>
              <InfoRow>
                <LogicBoxLabel muted className='mt-[8px]'>Total number <span>6</span></LogicBoxLabel>
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

      <ContentBoard>
        <BoardContent>
          <LogicBox aria-invalid="false" className='group'>
            {/* <TextAreaBadge>JSON</TextAreaBadge> */}
            <JsonTextarea value={EXAMPLE_DATA} maxHeight={300} />
            <ErrorLabel>Недопустиме значення електронної адреси!</ErrorLabel>
          </LogicBox>
        </BoardContent>
        <BoardFooter>Last updated / 13.11.2024</BoardFooter>
      </ContentBoard>
    </ContentFrame>
  );
};


export default RulesPageLayout;

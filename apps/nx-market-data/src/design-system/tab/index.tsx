import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Label } from '../label';

type TabProps = {
  items: string[];
  onTabSelected: (index: number) => void;
};

export function Tab(props: TabProps) {
  const { items, onTabSelected } = props;

  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    onTabSelected && onTabSelected(itemId);
  }, [itemId, onTabSelected]);

  return (
    <TabContainer>
      {items.map((item, index) => (
        <TabItem
          key={index}
          selected={itemId === index}
          onClick={() => setItemId(index)}
        >
          <Label>{item}</Label>
        </TabItem>
      ))}
    </TabContainer>
  );
}

type TabItemProps = {
  children: ReactNode;
  selected?: boolean;
  onClick: () => void;
};

export function TabItem(props: TabItemProps) {
  const { children, selected = false, onClick } = props;

  return (
    <TabItemWrapped selected={selected} onClick={onClick}>
      {children}
    </TabItemWrapped>
  );
}

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
`;

const selectedColor = '#333';
const defaultColor = 'transparent';

type TabItemWrappedProps = {
  selected: boolean;
};

const TabItemWrapped = styled.div<TabItemWrappedProps>`
  background-color: ${({ selected }) => (selected ? '#ff9a3c' : defaultColor)};
  width: 100%;
  padding: 4px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: ${({ selected }) => (selected ? '4px' : '1px')} solid #333;
  border-top: 1px solid
    ${({ selected }) => (selected ? selectedColor : defaultColor)};
  border-left: 1px solid
    ${({ selected }) => (selected ? selectedColor : defaultColor)};
  border-right: 1px solid
    ${({ selected }) => (selected ? selectedColor : defaultColor)};
`;

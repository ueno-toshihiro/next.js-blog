import Search from '@/components/ui/icons/search';
import styled from 'styled-components';

export const SearchGroup = styled.div`
  position: relative;
`;

export const SearchBoxWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 0;
  justify-content: flex-end;
  position: relative;
  margin-left: 120px;
  margin-right: 4px;
  max-width: 400px;
  min-width: 160px;
  transition: flex 0.6s;

  :focus-within {
    flex: 1;
    svg {
      left: 0;
    }
  }
`;

export const SearchBox = styled.input`
  border-radius: 6px;
  border: 1px solid ${(props): string => props.theme.colors.grey};
  font-size: 1rem;
  height: 40px;
  padding-left: 48px;
  padding-right: 48px;
  min-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :focus {
    flex: 1;
    outline: none;
  }

  :not(:focus) {
    flex: 0;
  }

  ::placeholder {
    font-size: 1rem;
  }
`;

export const SearchIcon = styled(Search)<{ focus: boolean }>`
  bottom: 20px;
  left: ${(props) => props.focus ? '65px' : 'unset'};
  margin-left: 8px;
  margin-right: 8px;
  position: absolute;
  right: ${(props) => props.focus ? 'unset' : '154px'};
  transform: translateY(50%) !important;
`;

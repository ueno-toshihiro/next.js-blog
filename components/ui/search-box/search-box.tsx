import * as React from 'react';
import * as Styled from './search-box.styled';
import { useDebounce } from 'react-use';
import defaultTheme from '@/components/theme';

type Props = {
  onChange: (text: string) => void;
};

const SearchBox: React.FC<Props> = ({ onChange }) => {

  const [focusBox, setFocusBox] = React.useState(false);
  const [debouncedQuery, setDebouncedQuery] = React.useState('');

  useDebounce(
    () => {
      onChange(debouncedQuery);
    },
    1000,
    [debouncedQuery],
  );

  return (
    <Styled.SearchGroup>
      <Styled.SearchBoxWrapper>
        <Styled.SearchBox
          type="text"
          value={debouncedQuery}
          onChange={(e) => setDebouncedQuery(e.target.value)}
          onFocus={() => setFocusBox(true)}
          onBlur={() => setFocusBox(false)}
          placeholder={'Search'}
        />
        <Styled.SearchIcon
          diameter={32}
          focus={focusBox}
          color={
            focusBox
              ? defaultTheme.colors.primary
              : defaultTheme.colors.grey
          }
        />
      </Styled.SearchBoxWrapper>
    </Styled.SearchGroup>
  );
};

SearchBox.displayName = 'SearchBox';

export default SearchBox;

import React from 'react';
import SearchBox from '@/components/ui/search-box/search-box';
import * as Styled from './search-box.styled';

const SearchField: React.FC = () => {
  const [searchText, setSearchText] = React.useState<string>();

  const onChange  = React.useCallback((text: string) => {
    setSearchText(text);
  }, []);

  return (
    <Styled.SearchWrapper>
      <SearchBox onChange={onChange} />
      <Styled.DebouncedText>入力結果： {searchText}</Styled.DebouncedText>
    </Styled.SearchWrapper>
  );
};

export  default SearchField;
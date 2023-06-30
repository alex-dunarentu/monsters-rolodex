import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onSearchHandler,
  placeholder,
  className,
}: SearchBoxProps) => (
  <input
    type="search"
    placeholder={placeholder}
    className={`search-box ${className}`}
    onChange={onSearchHandler}
  />
);

export default SearchBox;

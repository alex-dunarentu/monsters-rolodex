import './search-box.styles.css';

const SearchBox = ({ onSearchHandler, placeholder, className }) => (
  <input
    type="search"
    placeholder={placeholder}
    className={`search-box ${className}`}
    onChange={onSearchHandler}
  />
);

export default SearchBox;

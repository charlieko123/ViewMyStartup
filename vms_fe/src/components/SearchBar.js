import searchIcon from "../assets/images/ic_search.svg";
import deleteIcon from "../assets/images/ic_delete_circle_small.svg";
import "./SearchBar.css";

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="검색어를 입력해주세요"
      />
      <img
        src={searchIcon}
        alt="Search button"
        className={`search-icon ${value ? "active" : ""}`}
      />
      {value && (
        <img
          src={deleteIcon}
          alt="Delete button"
          className="delete-button"
          onClick={onClear}
        />
      )}
    </div>
  );
};

export default SearchBar;

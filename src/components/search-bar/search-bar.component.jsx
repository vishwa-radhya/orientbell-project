import './search-bar.styles.scss';
import PropTypes from 'prop-types';

const SearchBar = ({handleFilterData}) => {
    return ( 
      <div className="search-bar-div">
  <button className="icon"> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
      <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5"  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
      <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5"  d="M22 22L20 20"></path>
    </svg>
  </button>
  <input placeholder="search.." className="input" name="text" type="search" onChange={e=>handleFilterData(e.target.value)} />
</div>
     );
}
SearchBar.propTypes={
  handleFilterData:PropTypes.func,
}
 
export default SearchBar;
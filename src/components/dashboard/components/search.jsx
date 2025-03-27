import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../components/comp.css'
const SearchBar = () => {
  return (
    <div class="search-box">
      <button class="btn-search"><SearchIcon /></button>
      <input type="text" class="input-search" placeholder="Type to Search..." />
    </div>
  )
}

export default SearchBar
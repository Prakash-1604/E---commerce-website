import React from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [searchTerm, setsearchTerm] = React.useState('');
    const navigate = useNavigate();

    React.useEffect(()=>{
        const delay= setTimeout(()=>{
            if(searchTerm){
                navigate('/search?s=' +searchTerm);
            }
        },500);
        return()=>clearTimeout(delay);
    },[searchTerm,navigate]);

    const handleChange= ev =>{
        setsearchTerm(ev.target.value);
    }
  return (
    <div id='search'>
        <label>Search</label>
        <input name='search' type='text' onChange={handleChange}/>
    </div>
  )
}

export default Search;
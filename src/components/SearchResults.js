import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { getSearchByQuery } from './fetcher';
import Products from './Products';

const SearchResults = () => {
    const [products, setproducts] = React.useState({errmsg:'',data:[]});
    const [SearchParams]=useSearchParams();
    const query=SearchParams.get('s');

    React.useEffect(() =>{
        const fetcherdata = async () =>{
            const resObject = await getSearchByQuery(query);
  
            setproducts(resObject);
        }
        fetcherdata();
    },[query])
    
    const renderProduct=()=>{
    if(products.data.length>0){
      return products.data.map(p=>
        <Products key={p.id} {...p}>{p.title}</Products>    ) 
    }
    else{
        return <h3>Results Not Found</h3>
    } 
    }
  return (
    <div>
    {products.errmsg && <div>Error: {products.errmsg}</div>}
    <div>{products.data && renderProduct()}</div>
    </div>
  )
}

export default SearchResults
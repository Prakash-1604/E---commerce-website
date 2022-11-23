import React from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products';
import {getProd} from './fetcher'

const Categories = () => {
  const [product,setproduct]= React.useState({errmsg:'',data: []});
  let  {categoryId} = useParams();

  React.useEffect(() =>{
      const fetcherdata = async () =>{
          const resObject = await getProd(categoryId);

          setproduct(resObject);
      }
      fetcherdata();
  },[categoryId])
  

  const renderProduct=()=>{
    return product.data.map(p=>
      <Products key={p.id} {...p}>{p.title}</Products>  
  )}
  return (
    <div>
    <h1>Product</h1>
    {product.errmsg && <div>Error: {product.errmsg}</div>}
    <div>{product.data && renderProduct()}</div>
    </div>
  )
}


export default Categories;
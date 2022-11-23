import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { getProductbyId } from './fetcher';
import styled from 'styled-components'
import { CartContext } from './Cartcontext';


const ProdDetails = () => {
    const Descrp=styled.div`
        margin-top:300px;
        padding:10px;`;
    const {addProduct}=useContext(CartContext);
    const creative=()=>{
        return {__html:product.data?.description};
    }
    const [product,setproduct]= React.useState({errmsg:'',data: {}});
    let  {productId} = useParams();

    React.useEffect(() =>{
        const fetcherdata = async () =>{
            const resObject = await getProductbyId(productId);
            setproduct(resObject);
        }
        fetcherdata();
    },[productId])
    
  return (
    <article>
        <div className='category-product-title'>
            {product.data.title}
        </div>

        <figure>
            <div className='category-product-image-container'>
                <img src={`/assets/${product.data.image}`} alt={product.data.title}/>
            </div>
        </figure>

        <aside className='category-info'>
        <div className='category-product-info-dimentions'>
                <h3>Dimentions</h3>
                <label>{product.data.specs?.dimensions}</label>

            </div>
            {
            product.data.specs?.capacity &&
            <div className='category-product-info-capacity'>
                <h3>Capacity</h3>
                <label>{product.data.specs?.capacity}</label>
            </div>
            }
            <div className='category-product-info-features'>
                <h3>Features</h3>
                <ul>{product.data.features?.map((f,i)=>{
                    return <li key={`features${i}`}>{f}</li>
                })}
                </ul>
            </div>
        </aside>

        <aside className='category-product-finance'>
            <div className='category-product-finance-price'>
                <h3>Price</h3>
                &pound;{product.data.price}
            </div>
            <div className='category-product-finance-stock'>
                <label>Stock Level: {product.data.stock}</label>
                <label>Free delivery</label>
            </div>
            <div className='category-product-finance-action'>
                <button onClick={()=>addProduct({id:product.data.id,title:product.data.title,price:product.data.price})}>Add to Cart</button>
            </div>
        </aside>
        <Descrp dangerouslySetInnerHTML={creative()}></Descrp>
    </article>

  )
}

export default ProdDetails;
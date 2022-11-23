import React,{useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { CartContext } from './Cartcontext';

const Products = ({id,title,image,specs,features,price,stock}) => {
    const {addProduct}=useContext(CartContext);
    const navigate = useNavigate();
  return (
    <article>
        <div className='category-product-title'>
            <Link to={`/products/${id}`}>{title}</Link>
        </div>

        <figure>
            <div className='category-product-image-container'>
                <img src={`/assets/${image}`} alt={title}/>
            </div>
        </figure>

        <aside className='category-info'>
            <div className='category-product-info-dimentions'>
                <h3>Dimentions</h3>
                <label>{specs.dimensions}</label>
            </div>
            {specs.capacity &&
            <div className='category-product-info-capacity'>
                <h3>Capacity</h3>
                <label>{specs.capacity}</label>
            </div>
            }
            <div className='category-product-info-features'>
                <h3>Features</h3>
                <ul>{features?.map((f,i)=>{
                    return <li key={`features${i}`}>{f}</li>
                })}
                </ul>
            </div>
        </aside>

        <aside className='category-product-finance'>
            <div className='category-product-finance-price'>
                <h3>Price</h3>
                &pound;{price}
            </div>
            <div className='category-product-finance-stock'>
                <label>Stock Level: {stock}</label>
                <label>Free delivery</label>
            </div>
            <div className='category-product-finance-action'>
                <button onClick={()=>navigate(`/products/${id}`)}>View Product</button>
                <button onClick={()=>addProduct({id,title,price})}>Add to Cart</button>
            </div>
        </aside>

    </article>
  )
}

export default Products;
import React from 'react'

const Category_Product=({title,image,specs,features,price,stock})=> {
  return (
    <article>
    <div className='category-product-title'>
    {title}
    </div>

    <figure>
        <div className='category-product-image-container'>
      <img src={`./assets/${image}`} alt={title}/>
        </div>
    </figure>

    <aside>
        <div className='category-product-info-dimensions'>
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
        </div>

       {specs.capacity &&
        <div className='category-product-info-capacity'>
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
        </div>
       }

       { <div className='category-product-info-features'>
        <h3>features</h3>
        <label>{features}</label>
       </div>
        }
    </aside>

    <aside className='category-product-finance'>
        <div className='category-product-finance-price'>
        ₹{price}
        </div>

   <div className='category-product-info-stock'>
    <label>Stock Level:{stock}</label>
    <label>FREE Delivery</label>
   </div>

   <div className='category-product-action'>
   <button>View Product</button>
   <button>ADD to Cart</button>
   </div>
    </aside>
    </article>
  )
}

export default Category_Product
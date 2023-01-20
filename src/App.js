import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Category from './Components/Category';
import Category_Product from './Components/Category_Product';


function App() {
  const [results,setResults]=useState([]);
  const [products,setProducts]=useState([]);

  const fetchData=async()=>{
    const response=await axios.get("http://localhost:3000/categories");
    setResults(response.data);
  }
  useEffect(()=>{
    fetchData();
  },[])

  const handleCategoryClick=(id)=>{
     const fetchProduct=async()=>{
      const response=await axios.get("http://localhost:3000/products?cartId="+id);
      console.log(response);
      setProducts(response.data);
  }
    fetchProduct();
  
}

  const renderCatagories=()=>{
    return results.map(result =>
      <Category key={result.id} id={result.id} title={result.title}
           onCategoryClick={()=>{handleCategoryClick(result.id)}}/>
    );
     
    }
  
    const renderProducts =()=>{
      return products.map(p=>
        <Category_Product {...p}>{p.title}</Category_Product>
        )
    }
    

  return (
    <>
    <header>AMAZON</header>

    <section>
    <nav>
      { results && renderCatagories()}
    </nav>
    <article>
       <h1>products</h1>
       { products && renderProducts()}
    </article>
    </section>

    <footer>
      footer
    </footer>

    
    </>
  );
}


export default App;

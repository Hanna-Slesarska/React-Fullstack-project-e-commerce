import { popularProducts } from '../../data/dataProducts'
import Product from './Product'
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/productSlice';


const Products = () => {
  const slectedCategory = useSelector(getSelectedCategory);

  return (
      <div className="container-products" >
          <div className="products">
          {popularProducts
          .filter(product =>{
              if(slectedCategory === 'View all') return true;
              return slectedCategory === product.category;
          })
          .map(product => <Product product={product} key={product.id}/>)}
      </div>
      </div>
      
  )

}

export default Products;

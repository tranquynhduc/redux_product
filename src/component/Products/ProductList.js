
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProduct } from '../../redux/actions/Action';
import '../productCss/Product.css';



export const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const products = useSelector(state => state.ProductReducer.products)
  console.log('products',products);

  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((Err) => {
      console.log('err:', Err);
    })
    dispatch(setProduct(response.data))
    
  }
  useEffect(() => {
    fetchProduct();
  }, [])

  const handleClick = (id) => {
    navigate(`/ProductList/${id}`)
  }

    return (
      // <Container key={product.id} className='productContainer'>
      //   <Link to={`/ProductList/${product.id}`}>
      //     <Row xs={1} md={4} >
      //       <Col className='productColumn'>
      //         <Card>
      //           <Card.Img variant="top" src={product.image} alt={product.title} />
      //           <Card.Body>
      //             <Card.Title>{product.title}</Card.Title>
      //             <Card.Text>$ {product.price}</Card.Text>
      //             <Card.Text>{product.category}</Card.Text>
      //           </Card.Body>
      //         </Card>
      //       </Col>
      //     </Row>
      //   </Link>
      // </Container>
      <div className="products">
        {
          products.map(item => (
            <div className='product' onClick={()=>handleClick(item.id)}>
              <img src={item.image} alt="" className="product__image" />
              <h3 className="product__title">{item.title}</h3>
              <span className="product__price">${item.price}</span>
              <span className="product__category">{item.category}</span>
            </div>        
          ))
        }
      </div>
    )
}

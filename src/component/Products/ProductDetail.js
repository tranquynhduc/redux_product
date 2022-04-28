import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {  selectedProduct,removeProduct } from '../../redux/actions/Action';


export const ProductDetail = () => {

  const product = useSelector(state => state.selectdProduct)
  const [dataId,setDataId]= useState([])
  const dispatch = useDispatch()
  const { productId } = useParams()
  console.log('productId:', productId);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
      console.log('err:', err);
    })
    // dispatch(selectedProduct(reponse.data))
    setDataId([response.data])
    console.log('reponseDetail:', response.data);
  }
  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail()
    return (
      dispatch(removeProduct())
    )

  }, [productId])
  return (
    <div>
      {Object.keys(product).length === 0 ?
      (<div>loading....</div>)
      :
      (<div >
        <div>
            <img src={product.image}alt ={product.title}/>
            <h3>{product.title}</h3>
            <span> ${product.price}</span>
            <p>{product.description}</p>
        </div>
      </div>
      )}
    </div>
  )
}

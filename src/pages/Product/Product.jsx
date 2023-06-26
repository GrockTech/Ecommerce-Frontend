import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
// import useFetch from '../../hooks/useFetch';
// import useFetch from '../../hooks/useFetch'
const Product = () => {

  const id = useParams().id;  
  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)
  
  // const {data, loading, error} = useFetch(`/products/${id}?populate=*`)

  const {data, loading, error } = useFetch(`/products/${id}?populate=*`)
  // console.log(data)

  /// we gonna use useDispatch hook to dispatch our action and which action...AddtoCart 
  const dispatch = useDispatch()
  


  ///******************INITIAL DAYA */
  // const images = [
  //   "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  // ]
  
  return (
    <div className='product'>
      
   {loading ? "loading" : <> <div className="left">
      <div className="images">
        <img src={
          process.env.REACT_APP_UPLOAD_URL + 
          data?.attributes?.img?.data?.attributes?.url}alt="" onClick={e=>setSelectedImg("img")}/>

        <img src={
          process.env.REACT_APP_UPLOAD_URL + 
          data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=>setSelectedImg("img2")}/>
      </div>
{/*       
       <div className="mainImage">
       
           <img src={
          process.env.REACT_APP_UPLOAD_URL + 
          data?.attributes[selectedImg].data?.attributes?.url} alt=""/>

      </div> */}
      <div className="mainImage">
  {data && data.attributes && selectedImg && data.attributes[selectedImg]?.data?.attributes?.url ? (
    <img src={process.env.REACT_APP_UPLOAD_URL + data.attributes[selectedImg].data.attributes.url} alt="" />
  ) : (
    <p>No image available</p>
  )}
</div>

    </div>
    <div className="right">
      <h1>{ data?.attributes?.title}</h1>
      <span  className='price'>¢{ data?.attributes?.price}</span>
      <p>{data?.attributes?.desc}</p>

        <div className="quantity">
        <button onClick={()=>setQuantity((prev) => prev === 1 ?  1 :  prev - 1)}>-</button >
              {quantity}
        <button onClick={()=> setQuantity( (prev) => prev + 1)}> + </button>
        
        </div>
        <button className='add' onClick={()=>dispatch(addToCart({
            id:data.id,
            title:data.attributes.title,
            desc:data.attributes.desc,
            price:data.attributes.price,
            img: process.env.REACT_APP_UPLOAD_URL +data.attributes.img.data.attributes.url,
            quantity

        }))}>  
        {/* we are sending action payload and its gonna be our product information  */}

        

      <AddShoppingCartIcon/> ADD TO CART  
        </button>

        <div className="linkContainer">
          <div className="item">
            <FavoriteIcon/> ADD TO WISH LIST 
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE 
          </div>
        </div>

        <div className="info">
            
           <span>Vendor Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
          
        </div>  
        <hr/>
          <div className="info">
            
            <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
       </div>        
    </div>
    </>}
    </div>
  )
}

export default Product

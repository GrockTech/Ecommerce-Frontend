import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
const Cart = () => {
/// products from our state; if i say state.cart we reach our reducer and if is I say cart.product i will be to reach products in state 
    const products = useSelector(state=> state.cart.products)
    const dispatch = useDispatch()
   

    ///calculate quantity nd price 

    const toalPrice = () =>{
      let total = 0
      products.forEach(item => total += item.quantity * item.price)
      return total.toFixed(2)
    }

//// dummy data for UI**************************
    // const data =[
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/9558762/pexels-photo-9558762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2: "https://images.pexels.com/photos/9545891/pexels-photo-9545891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Long sleeve Graphic Tshirt",
    //         isNew: true,
    //         desc: "long lasting ",
    //         oldPrice:19,
    //         price: 12,  
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/9558762/pexels-photo-9558762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2: "",
    //         title: "Long sleeve Graphic Tshirt",
    //         isNew: true,
    //         desc: "long lasting ",
    //         oldPrice:19,
    //         price: 12,  
    //     },
    // ]

    const stripePromise = loadStripe('pk_test_51N5cjeAkYNvvs8rwBxisMqSbSpqPVlCesizHy5uSi8GzrYOln3GGtNvwHu47izUruPGrmBCHO4pO90YvoFBYDxe300tkjtOmhK')
    /// yarn add loadstrpe library 

    const handlePayment =  async () =>{
      try {
        
        const stripe = await stripePromise;
        ///after this we gonna make our request 

        const res = await makeRequest.post("/orders", {
          products

          
        });

        if(res){
          console.log("data is coming through")
        } else{
          console.log("no data posted")
        }
        

        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,

        })
      } catch (error) {
        console.log(error)
        
      }
    }

  return (
    <div className='cart'>
     <h1>Products in your Cart</h1>
     {products?.map(item => (
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />

        <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0, 100)}</p>

                <div className="price">
               {item.quantity} x ¢{item.price}   
                </div>
        </div >
            <DeleteOutlineIcon onClick={()=>dispatch(removeItem(item.id))} className='delete ' />
        </div>
     ))}
     <div className="total">
        <span>SUBTOTAL</span>
        <span>¢{toalPrice()}</span>
     </div>
     <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
     <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>

    </div>
  )
}

export default Cart

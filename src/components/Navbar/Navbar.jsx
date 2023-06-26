import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PageviewIcon from '@mui/icons-material/Pageview';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './Navbar.scss'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';



const Navbar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector(state=> state.cart.products)
    return (
    <div className='navbar'>
        <div className="wrapper">
        <div className="left">
            
            <div className="item">
                <img src="../img/flag.png" style={{width: "50px"}} alt="" />
                <KeyboardArrowDownIcon/>
            </div>

            <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon/>
            </div>

            <div className="item">
                
                <Link className='link' to="/products/1">Women </Link>
            </div>

            <div className="item">
                
                <Link className='link' to="/products/2">Men </Link>
            </div>

            <div className="item">
                
                <Link className='link' to="/products/3">Children  </Link>
            </div>    
        </div>

        <div className="center">
            <Link className='link' to="/"> GIDSTORE </Link>
         </div> 
      

        <div className="right">
        
                <div className="item">
                <Link className='link' to="/"> About </Link>
                </div>

                <div className="item">
                <Link className='link' to="/"> Contact </Link>
                </div>

                <div className="item">
                <Link className='link' to="/"> Stores </Link>
                </div>
                
                <div className="icons">
                    <PageviewIcon/>
                    <PersonOutlineIcon/>
                   < FavoriteBorderIcon/>
                
                    <div className="cartIcons" onClick={()=>setOpen(!open)}>
                    <ShoppingCartCheckoutIcon />
                    <span>{products.length}</span>                    
                    </div>
                     
                </div>
        </div>
            


        </div>
        {open && <Cart/>}
      
    </div>
  )
}

export default Navbar

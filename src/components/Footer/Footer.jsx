import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Children</span>
            <span>Shoes</span>
            <span>Accessoiries</span>
            <span>New Arrivals</span>

            </div>

            <div className="item"> 
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Pages</span>
            <span>Compare</span>
            <span>Cookies</span>

            </div>
            <div className="item"> 
            <h1>About</h1>
            <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sunt, 
                dolor eum rem error pariatur ducimus doloribus qui excepturi neque.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit asperiores modi molestias tempora nisi. Ad laboriosam assumenda at fuga in quaerat debitis,
                 doloremque laudantium minus, perspiciatis blanditiis sit facilis enim.
            </span>
            </div>
            <div className="item">
            <h1>Contact</h1>
            <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sunt, 
                dolor eum rem error pariatur ducimus doloribus qui excepturi neque.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit asperiores modi molestias tempora nisi. Ad laboriosam assumenda at fuga in quaerat debitis,
                 doloremque laudantium minus, perspiciatis blanditiis sit facilis enim.
            </span>
                
             </div>
          
        </div>

        <div className="bottom">

            <div className="left">
                <span className='logo'>GidStore</span>
                <span className='copyright'> Copyright 2023. All Rigths Reserved</span>
            </div>
            <div className="right">
                <img src="../img/Momo.jpg" alt="" width={350} height={150} />

            </div>
        </div>
      
    </div>
  )
}

export default Footer

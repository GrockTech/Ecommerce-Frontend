import React from 'react'
import './Categories.scss'
import {Link} from "react-router-dom"


const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/3253492/pexels-photo-3253492.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <button>
            <Link className='link' to={`/products/2`}>Sale</Link>
        </button>
        </div>

        <div className="row">
        <img src="https://images.pexels.com/photos/12837963/pexels-photo-12837963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <button>
            <Link className='link' to={`/product/1`}>Men</Link>
        </button>    
        </div>

      </div>

      <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/1055686/pexels-photo-1055686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <button>
            <Link className='link' to={`/products/1`}>New Season</Link>
        </button>

            </div>
      </div>
     
      <div className="col col-l">
        
        <div className="row">
            <div className="col">
              <div className="row">
                    <img src="https://images.pexels.com/photos/12837963/pexels-photo-12837963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to={`/product/1`}>Sale</Link>
                </button>

              </div>

              <div className="col">
              <div className="row">
                        <img src="https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to={`/product/1`}>Sale</Link>
                    </button>
              </div>
            </div>

            </div>
            

            <div className="row">
            <img src="https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="" />
                <button>
                    <Link className='link' to={`/product/1`}>Shoe</Link>
                </button>

            </div>
        </div>

       
      </div>

    </div>
  )
}

export default Categories

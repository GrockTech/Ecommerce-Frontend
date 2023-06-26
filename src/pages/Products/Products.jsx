import React, { useState } from 'react'
import './products.scss'
// import {useParams} from React-router-dom

import List from '../../components/List/List'
import {useParams} from  "react-router-dom"
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const [maxPrice, setMaxPrice] = useState(500)
/// this how we reach id in the for every chewckbox //url 
  const CatId = parseInt(useParams().id)

const [sort, setSort] = useState(null)
const [selectedSubCats, setSubSelectedCat] = useState([])  /// this check our selected cat 

const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${CatId}`)   
/// we filter subCats and match it wiht  its categories according
  
const handleChange = (e) =>{
  const value = e.target.value 
  const isChecked = e.target.checked  /// when we check item we gonna add catId to a list and when we uncheck we delete
  setSubSelectedCat(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item )=> item !== value))
}

console.log(selectedSubCats)

  return (
    <div className='products'> 
    <div className="left">
      <div className="filterItem">
        <h2>Product Categories</h2>
      {data?.map((item)=>(
        <div className="pItem" key={item.id}>
        <input type="checkbox" id={item.id} value={item.id}  onChange={handleChange}/>
        <label htmlFor={item.id}>{item.attributes.title}</label>
        </div>
      ))}
        

        {/* <div className="pItem">
          <input type="checkbox" id='2' value={2}  />
          <label htmlFor="2">Skirts</label>
        </div>

        <div className="pItem">
          <input type="checkbox" id='3' value={3}  />
          <label htmlFor="3">Coats</label>
        </div> */}
      </div>

      <div className="filterItem">
      <h2>Filter by Price</h2>
      <div className="inputItem">
      <span>0</span>
      <input type="range" className="range" min={50} max={5000} onChange={(e)=>setMaxPrice(e.target.value)}/>
      <span>{maxPrice}</span>
      </div>

      <h2>Sort by</h2>

      <div className="inputItem">
        <input type="radio" id='asc ' value="asc"  name='price' onChange={e=>setSort("asc")}/>
        <label htmlFor="asc"> Price (Lowest first) </label>
      </div>

      <div className="inputItem">
        <input type="radio" id='desc ' value="desc"  name='price' onChange={e=>setSort("desc")}/>
        <label htmlFor="asc"> Price (Highest first) </label>
      </div>


      </div>

     
      

      
    </div>


    <div className="right">
      <img 
      className='catimg'
      src="https://images.pexels.com/photos/1004021/pexels-photo-1004021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <List CatId={CatId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
    </div>
      
    </div>
  )
}

export default Products

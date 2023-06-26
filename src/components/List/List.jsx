import React from 'react'
import Card from '../Card/Card'
import CardComp from '../Card/CardComp'
import './List.scss'
import useFetch from '../../hooks/useFetch'

const List = ({subCats, maxPrice, sort, CatId}) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${CatId}${subCats.map( 
   (item)=>`&[filters][sub_categories][id][$eq]=${item}`
   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`) 
  /// we fetch all products and match it with catID  || we map through selected cats to return sub cateogries item according to its ID


  ////initial mapping*******
  // const data =[
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/9558762/pexels-photo-9558762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2: "https://images.pexels.com/photos/9545891/pexels-photo-9545891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Long sleeve Graphic Tshirt",
    //         isNew: true,
    //         oldPrice:19,
    //         price: 12,  
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/9558762/pexels-photo-9558762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2: "",
    //         title: "Long sleeve Graphic Tshirt",
    //         isNew: true,
    //         oldPrice:19,
    //         price: 12,  
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.pexels.com/photos/9558762/pexels-photo-9558762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2: "",
    //         title: "Long sleeve Graphic Tshirt",
    //         isNew: true,
    //         oldPrice:19,
    //         price: 12,  
    //     },
    //     {
    //         id: 4,
    //         img: "https://images.pexels.com/photos/9558762/pexels-photo-9558762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2: "",
    //         title: "Long sleeve Graphic Tshirt",
    //         isNew: true,
    //         oldPrice:19,
    //         price: 12,  
    //     },
    // ]
  return (
    <div className='list'>
      {loading ? "is loading ....." : data?.map(item =>(
        <CardComp item={item} key={item.id} />
      ))}

    </div>
  )
}

export default List

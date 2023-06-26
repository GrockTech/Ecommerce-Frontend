
import './featured.scss'
import Card from '../Card/Card'
import CardComp from '../Card/CardComp'
import useFetch from '../../hooks/useFetch'
// import axios from 'axios'

const FeaturedProduct = ({type}) => {
  
    ////initial way of fetching before usefetch hook //////
    // const [data, setData] = useState([])
     
    // useEffect(()=>{
    //     const fetchData = async () =>{
    //                 try {
    //                     const res = await axios.get(
    //                         process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,    ///populate show media from db 
    //                         {
    //                        headers: {
    //                         Authorization: "bearer " + process.env.REACT_APP_API_TOKEN, 
    //                        },
    //                     }); 
    //                     setData(res.data.data)
    //                     console.log(res)
    //                 } catch (err) {
    //                     console.log(err)
    //                 }
    //     }; 
    //     fetchData()
    
    // },[])

    const {loading, data, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    
  return (
    <div className='FeaturedProduct'>
        <div className="top">
        <h1>{type} Products</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nostrum nulla facilis ducimus consequuntur unde. 
            Eligendi vel recusandae vero sit quas sed inventore nulla maxime?</p>
        </div>
        
        <div className="bottom">
            {error ? "something went wrong!" : (loading ? "loading " :
             data.map(item => (
                <CardComp item={item} key={item.id}/>
            )))}

                
        </div>

      
    </div>
  )
}

export default FeaturedProduct

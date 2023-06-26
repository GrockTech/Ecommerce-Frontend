import { createSlice} from '@reduxjs/toolkit'


/// so we create cartSlice and its initial state is an empty array 

export const cartSlice = createSlice({

    name: 'cart',
  initialState: {
  products: []
  },

  ///using reducers we gonna create our first action thus addToCart 
  /// basicaly using this action we can change our initial state thus product[], we gonna add a new item 
  /// we will acton to dispatch and get the product from our page to initial state fo 
  reducers: {
    addToCart: (state, action ) => {
        /// we are check to find if the product exist already in our products 
        const item = state.products.find(item => item.id === action.payload.id)
       

        if(item){
            item.quantity+=action.payload.quantity   /// so basic we increase the quantity if of the item if it already exist in our payload 
        } else{
            state.products.push(action.payload)     
        }
    
    },
    //// we are gonna send product ID as payload e.g. if we click on delete we gonna send product ID as a payload action and we gona filter our product 
    removeItem:( state, action) => {
        state.products=state.products.filter(item => item.id !== action.payload)
    },
    resetCart:( state) => {
        state.products = []
       
            }

  }
})

export const { addToCart, removeItem, resetCart } = cartSlice.actions
export default cartSlice.reducer; 


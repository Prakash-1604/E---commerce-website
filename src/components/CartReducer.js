const Storage=(cartItems)=>{
    localStorage.setItem('cart',JSON.stringify(cartItems.length>0 ? cartItems : []));
}

export const CartReducer = (state,action)=>{
    debugger;
    let index=-1;
    if(action.payload)
        index=state.cartItems.findIndex(x=>x.id===action.payload.id);

    let newItems=[...state.cartItems];
    switch(action.type){
        case "ADD":
        case "INCR":
            if(index ===-1){
               // state.cartItems.push({...action.paylad,quantity:1});// badway
               newItems.push({ ...action.payload,quantity:1});
               
            }
            else{
                //state.cartItems[index].quantity++;
                newItems[index].quantity++;
            }
            break;
        case "REMOVE":
            if(index>-1){
                newItems=state.cartItems.filter(x=> x.id!==action.payload.id);
            }
            break;
        case "DECR":
            if(index>-1){
                if(newItems[index].quantity>2)
                   newItems[index].quantity--;
                //state.cartItems[index].quantity--;
            }
            break;
        case "CLEAR":
            newItems=[];
            break;
            
        default:
    }
    state.cartItems=newItems;
    Storage(newItems);
    return state;

}
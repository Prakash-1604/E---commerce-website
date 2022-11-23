const base_url="http://localhost:3001"


export const fetcher= async (url)=>{
   let respObj=[{errmsg:'',data:[]}]
try{
const response= await fetch (base_url + url);
if(!response.ok){
    throw new Error("HTTP Error " +(response.status))
}
const responseData = await response.json();
respObj.errmsg='';
respObj.data= responseData;

}
catch(err){
    respObj.errmsg=err.message
}
return respObj;
}

export const getCateg=()=>{
   return fetcher("/categories")
}

export const getProd=(id)=>{
    return fetcher("/products?catId="+id)
 }
 export const getProductbyId=(id)=>{
    return fetcher("/products/"+id)
 } 
 export const getSearchByQuery=(query)=>{
   return fetcher("/products?q="+query)
} 
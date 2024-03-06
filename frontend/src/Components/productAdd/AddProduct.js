import { useState } from "react";
import "./AddProduct.css";
const Addproducts = () => {
  const [ userEmail, setemail ] = useState("");
  const  [productName, setpName]  = useState("");
  const [ productPrice, setpPrice ] = useState("");
  const [ pUrl, setpUrl ] = useState("");
  const [message,setMessage]=useState("")


  const pSubmitptn=  async  ()=> {
    let pData={productName,productPrice,userEmail,pUrl}
    console.log(pData)
    let resp= await fetch("http://localhost:3001/product/add",{method:"post",
  body: JSON.stringify(pData),
  headers: {
    "Content-Type": "application/json"}
})
    // console.log(resp);
    if(resp.status==404){

      setMessage(resp.status) 
    }
    else{
       resp=await resp.json()
      setMessage(resp.message)
    }
    
  }

  return (
    <div className="addproduct">
      <div>
        <h1>Add Product</h1>
        <input type="email" placeholder="User Email" onChange={(e)=>{ setemail(e.target.value)}} />
        <input type="text" placeholder="Product Name" onChange={(e)=>{ setpName(e.target.value)}} />
        <input type="url" placeholder="img url" onChange={(e)=>{ setpUrl(e.target.value)}}/>
        <input type="number" placeholder="Price" onChange={(e)=>{ setpPrice(e.target.value)}}/>
        {/* <input type="file" accept="image/*"></input> */}
        <button  onClick={pSubmitptn} className="addbtn">Submit</button>
        {message && <p> {message}</p>} 
      </div>
    </div>
  );
};
export default Addproducts;
// { name: "aanand", price: 100,img:"https://source.unsplash.com/random/200x200?sig=1" },
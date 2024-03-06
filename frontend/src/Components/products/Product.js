import "./Products.css";
import { useState, useEffect } from "react";
const Products = () => {

  let count = 0;
  
  const [x, setx] = useState([]);
  const resp = async () => {
    console.log(count);

    let responce = await fetch("http://localhost:3001/product");
    let data = await responce.json();
    setx(data);
  };

  useEffect(() => {
    count++;
    resp();
  },[] );
  return (
    <>
      {x &&
        x.map((i) => {
          return <Product data={i} />;
        })}
    </>
  );
};
const Product = (props) => {
  const [display,setDisplay]=useState("")
  const [hide,setHide]=useState("")
  // Check if props.data is defined before accessing its properties
  // if (!props.data&&!props.data.name&&!props.data.price) {
  //   return <div >No data available</div>;
  // }
  try {
    return (
      <div   id="products">
        <img   style={{display:display}} src={props.data.pUrl} />

        <div>
          <h3>{props.data.productName}</h3>
          <h1>
            <span  > Price</span> {props.data.productPrice}
          </h1>
          <h1  className="buy">Buy</h1>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in Products component:", error);
    return <div style={{ display: "none" }}>No data available</div>;
  }
};
export default Products;
{
  /* <img src="https://source.unsplash.com/random/200x200?sig=2" />
<img src="https://source.unsplash.com/random/200x200?sig=3" /> */
}

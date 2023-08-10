"use client"
import Image from "next/image";
import Link from 'next/link';
import  productData from '/app/components/data.json';
import "./product.css";
const Product = () => {
  return (
  
    <div className="ui_kit2">
    <div className="ui_kit">
      
      {productData.products.map((data) => {
        return (
          <div className="products">
            <div>
              <Image
                src={data.product_image}
                alt="products"
                height={100}
                width={100}
              />
              <div>{data.product_name}</div>
              <p>$ {data.product_price}.</p>
              <div>{data.product_description}</div>
              <Link className="color" href={{pathname:'/components/purchase',
              query:{personn:JSON.stringify(data.product_name)}}}>Buy Now</Link>
            </div>
          </div>
        );
      })}
    </div>
   
    </div>
    
   
  );
};
export default Product;


// import Link from 'next/link';
// const product =()=>{
//   const person={
//     name:"mouni",
//     age:22,
//   }
//   return(
//     <div>
//       <Link className="color" href={{pathname:'/components/formlayout',
//       query:{person:JSON.stringify(person)}}}>hello</Link>
//     </div>
//   )
// }
// export default product;
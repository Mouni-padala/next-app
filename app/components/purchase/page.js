"use client"
import {useSearchParams} from 'next/navigation';
import './purchase.css';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../footer/page'
import  productData from '/app/components/data.json';
const PurchaseProduct = () => {

  const searchparams=useSearchParams()
 const person=searchparams.get('personn')
 const results=JSON.parse(person)
  const product = productData.products.find((data) => data.product_name === results);

  return (
   
    <div className="purchase-product">
        <div className="purchase">
      {product ? (
        <div className="product-details">
          <Image className="img" src={product.product_image} alt="img" height="200" width="200"/>
          <h1>{product.product_name}</h1>
          <p>Price: ${product.product_price}</p>
          <p>Product Code: {product.product_code}</p>
          <p>{product.product_description}</p>
         <Link
                  className="confirm"
                  href={{
                    pathname: '/components/invoice',
                    query: {
                      productName: product.product_name, // First string value in the query
                      productPrice: product.product_price,
                      productCode: product.product_code, // Second string value in the query
                    },
                  }}
                >
                  Confirm Order
                </Link>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      </div>
    </div>

   
  );
};

export default PurchaseProduct;


// "use client"
// import  '/app/components/formlayout/formlayout.css'
// import {useSearchParams} from 'next/navigation';
// const PurchaseProduct=()=>{
//     const name="T-shirt"
//     const searchparams=useSearchParams()
//     const person=searchparams.get('personn')
//     const results=JSON.parse(person)
//     return(
//         <div className="ui_kit">
//             purchase product 
//             {results === name ? (
//         <div className="ui_kit">{results}</div>
//       ) : "hii"}
//         </div>
//     )
// }
// export default PurchaseProduct;
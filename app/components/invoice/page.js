"use client";
import Image from "next/image";
import img from "/public/imag8.PNG";
import twittericon from "/public/twitter.svg";
import giticon from "/public/github.svg";
import "./invoice.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import {useSearchParams} from 'next/navigation';
import { useState, useEffect } from 'react';
const Invoice = () => {
    const searchparams=useSearchParams()
    const productName = searchparams.get('productName');
    const productCode = searchparams.get('productCode')
    const productPriceString = searchparams.get('productPrice');
    const productPrice = parseFloat(productPriceString); 
    const total = productPrice - (productPrice * 0.15) + 1 + 1 + 1 + 1;
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
      const today = new Date();
      const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      setCurrentDate(formattedDate);
    }, []);
    return (
      <div>
    <div className="invoice">
      <div className="header">
        <div>
          <div className="icon-tag">
            <div>
              <Image src={img} alt="img" height={50} width={50} />
            </div>
            <div className="title">PRIME</div>
          </div>
          <div>
            <p className="address">9137 3rd Lane California City, CA 93504.</p>
          </div>
        </div>
        <div>
          <h1 className="invoice-title">INVOICE</h1>
          <h6 className="date-tag">{currentDate}</h6>
        </div>
      </div>
      <div>
        <table className="table-tag">
          <tr>
            <th>Description Of Goods</th>
            <th>Product Code</th>
            <th>Amount</th>
            <th>Discount</th>
            <th>CGST</th>
            <th>SGST</th>
            <th>IGST</th>
            <th>CESS</th>
            <th>Total</th>
          </tr>
          <tr className="table-values">
            <td>{productName}</td>
            <td>{productCode}</td>
            <td>{ productPrice}</td>
            <td>15%</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>{total}</td>
          </tr>
          <tr className="total">
            <td>total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
          </tr>
          <tr>
            <th colspan="8">TOTAL</th>
            <th>{total}.00</th>
          </tr>
        </table>
      </div>
      <div className="footer-tag">
        <div className="footer-title">AVALON</div>
        <div className="footer-icons">
          <div>
            <FacebookRoundedIcon />
          </div>
          <div>
            <Image className="twitter-img" src={twittericon} alt="twitter" />
          </div>
          <div>
            <Image className="git-img" src={giticon} alt="git" />
          </div>
        </div>
      </div>
    </div>
    
    
 
    </div>
  );
};
export default Invoice;

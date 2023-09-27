import { useRef,useState,useEffect } from "react";

import ReactToPrint from "react-to-print";

import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle,DialogContent } from "@mui/material";

import Barcode from "react-barcode";

 import { Link } from "react-router-dom";


function Pdftemplete({setCreate}) {

  const ref = useRef();
    const [Popup, setPopup] = useState(false);


    const [Item, setItem] = useState('');
    const [Amount, setAmount] = useState(0);
    const [Total, setTotal ] = useState(0);

    
    const [List, setList] = useState([]);

    const addData = () => {
        List.push({
            product: Item,
            amount: Amount,
        })
        console.log(List);
        setItem('')
        setAmount('')
        setPopup(false);
    }


// useEffect(()=>{addData()},[])
let sum = 0;
    List.forEach(am => {
        sum += parseInt(am.amount)
    })
    // setTotal(sum)
    console.log(`Sum is = ${sum}`);

	return (
		<div className="border-2 border-red-600 w-[100vw] h-[100vh] flex justify-center items-center ">
        <div>
    <Link to ="/"><span onClick={()=>setCreate(true)}>X</span></Link>

        <table className="table-auto">
  <thead>
    <tr>
      <th>Product</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Total Amount:</th>
      <td >$0</td>
    </tr>
    <tr>
      <th>Total Payable:</th>
      <td >$0</td>
    </tr>
    <tr>
      <th className="text-blue-900">Total</th>
      <th className="text-blue-900">$0</th>
    </tr>
  </tbody>
</table>
    </div>
			
		</div>
	)
}

export default Pdftemplete



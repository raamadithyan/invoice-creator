import { useRef,useState,useEffect } from "react";

import ReactToPrint from "react-to-print";

import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle,DialogContent } from "@mui/material";

import Barcode from "react-barcode";



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
		<div ref={ref}className="border-2 border-red-600 w-[100vw] h-[100vh] flex flex-col justify-center items-center ">
        <div className="w-[50%]">
        
      {/*++++++++ BARCODE AND COMPANY NAME +++++++*/}

      <div className="flex justify-between border border-purple-600 ">
      <div>barcode</div>
      
      <div>
        <h3 className="font-bold">Company Name:</h3>
        <p>+91-5646746747</p>
        <p>sample@gmail.com</p>
      </div>
        
      </div>

      {/*++++++++ INDEX ID +++++++*/}

      <div className="flex flex-col items-center">
        <div className="font-bold text-blue-800">INVOICE</div>
        <div>id:1234</div>

      </div>



        <div className="border border-green-600">
    <span onClick={()=>setCreate(true)}>X</span>

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
		</div>
	)
}

export default Pdftemplete



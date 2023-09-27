import { useRef,useState,useEffect } from "react";

import ReactToPrint from "react-to-print";

import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle,DialogContent } from "@mui/material";

import Barcode from "react-barcode";

 import { Link } from "react-router-dom";


function Pdftemplete({setCreate}) {
	return (
		<div className="border-2 border-red-600 w-[100vw] h-[100vh] flex justify-center items-center ">
        <div>

        <table className="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
    <Link to ="/"><span onClick={()=>setCreate(true)}>X</span></Link>
    </div>
			
		</div>
	)
}

export default Pdftemplete



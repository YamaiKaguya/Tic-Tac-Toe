import { useState } from "react";

export default function Square({ value, onSquareClick, winnerObj, winnerObjIndex }) {
   if (winnerObj) {
      for (let list of winnerObj.line)
         console.log(list);
   }
   return (
      <>
         <button
            className="square"
            onClick={onSquareClick}
         >{value}</button>
      </>
   )



}

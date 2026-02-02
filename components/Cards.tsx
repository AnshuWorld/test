"use client";
import { useState } from "react";
export default function Cards({productImageLink,cost}:{productImageLink:string; cost:string;}){
    const [a,setA] = useState(0);
    return(
        <div className="rounded mx-auto my-5 max-w-sm bg-gradient-to-r from-blue-400 to-purple-400 text-blue-950 flex flex-col shadow-lg">
            <img src={productImageLink} className="object-cover w-80 h-40 md:h-80"/>
            <button className="px-7 py-4 text-green-950 bg-amber-400">{cost}</button>
            <div className="flex flex-row">
                <button onClick={()=>setA(a+1)} className="px-9 py-2 shadow-lg bg-blue-500 rounded hover:bg-green-500 text-4xl">+</button>
                <button className="px-15 py-2 shadow-lg bg-white font-semibold text-4xl">{a}</button>
                <button onClick={()=>{
                    if(a>0){
                        setA(a-1)
                     }
                    else{
                        setA(0)
                    }
                }} className="px-9 py-2 shadow-lg bg-blue-500 rounded hover:bg-red-500 text-4xl">-</button>
            </div>
        </div>
    );
}
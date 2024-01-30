'use client';

import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Un simple contador",
};

export default function CounterPage() {
  
  const [counter, setCounter] = useState(3);
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <span className="text-9xl"> {counter} </span>
      <div className="flex gap-4">
        <button onClick={() => setCounter(counter + 1)} className="flex p-3 items-center justify-center rounded-2xl border-blue-500 border-2 w-28 hover:bg-blue-100 transition-all">➕</button>
        <button onClick={() => setCounter(counter - 1)} className="flex p-3 items-center justify-center rounded-2xl border-blue-500 border-2 w-28 hover:bg-blue-100 transition-all">➖</button>
      </div>
    </div>
  );
}
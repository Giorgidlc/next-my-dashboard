'use client'

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0}: Props) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
    <span className="text-9xl text-red-900"> {counter} </span>
      <div className="flex gap-4">
        <button onClick={() => setCounter(counter + 1)} className="flex p-3 items-center justify-center rounded-2xl border-blue-500 border-2 w-28 hover:bg-blue-100 transition-all">➕</button>
        <button onClick={() => setCounter(counter - 1)} className="flex p-3 items-center justify-center rounded-2xl border-blue-500 border-2 w-28 hover:bg-blue-100 transition-all">➖</button>
      </div>
    </>
  )
}

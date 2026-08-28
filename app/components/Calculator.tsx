"use client";

import { useState } from "react";

type MathFunction =(a: number, b: number)=> number;

export default function Calculator() {
  const [result, setResult] = useState(0);

  const add: MathFunction = (a, b) => {
    return a + b;
  };

  function subtract(a: number, b: number): number {
    return a - b;
  }

  function multiply(a: number, b: number): number {
    return a * b;
  }

  function divide(a: number, b: number): number {
    return a / b;
  }

  return (
    <div>
      <h2>Calculator</h2>

      <p>Result: {result}</p>

      <button onClick={() => setResult(add(10, 5))}>
        Add 10 + 5
      </button>

      <button onClick={() => setResult(subtract(10, 5))}>
        Subtract 10 - 5
      </button>

      <button onClick={() => setResult(multiply(10, 5))}>
        Multiply 10 * 5
      </button>

      <button onClick={() => setResult(divide(10, 5))}>
        Divide 10 / 5
      </button>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState(0);

  function add(a: number, b: number): number {
    return a + b;
  }

  function subtract(a: number, b: number): number {
    return a - b;
  }

  function multiply(a: number, b: number): number {
    return a * b;
  }

  function devide(a: number, b: number): number {
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

      <button onClick={() => setResult(devide(10, 5))}>
        Devide 10 / 5
      </button>
    </div>
  );
}
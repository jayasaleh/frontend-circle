import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useSuhuCounterStore } from "@/stores/suhu";
import { stat } from "fs";
import { count } from "console";

function MyCounter() {
  // const [suhu, setSuhu] = useState<number>(27);
  const {
    counter,
    increment,
    decrement,
    reset,
    incrementByAmound,
    decrementByAmound,
  } = useSuhuCounterStore((state) => state);
  const [background, setBackground] = useState<string>("#00b3ffd7");

  useEffect(() => {
    if (counter > 25) {
      setBackground("#fff200");
    } else if (counter < 20) {
      setBackground("#97ff5c");
    } else {
      setBackground("#00b3ffd7");
    }
  }, [counter]);
  // const tambah = () => {
  //   if (suhu < 30) {
  //     setSuhu(suhu + 1);
  //   } else {
  //     alert("suhu tidak bisa lebih dari 30");
  //   }
  // };
  // const kurang = () => {
  //   if (suhu > 16) {
  //     setSuhu(suhu - 1);
  //   } else {
  //     alert("suhu tidak bisa kurang dari 16");
  //   }
  // };
  return (
    <div
      id="my-counter"
      style={{
        backgroundColor: background,
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>My Counter Component</h1>
      <h1>{counter}</h1>
      <Button onClick={increment}>Tambah</Button>
      <br />
      <Button onClick={decrement}>Kurang</Button>
      <br />
      <Button onClick={() => incrementByAmound(3)}>Tambah 3</Button>

      <br />
      <Button onClick={() => decrementByAmound(3)}>Kurang 3</Button>
      <br />
      <Button onClick={() => reset()}>Reset</Button>
    </div>
  );
}
export default MyCounter;

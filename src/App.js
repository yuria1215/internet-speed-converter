// import logo from './logo.svg';
import "./App.css";
import "./Counter.css";

// STEP 1：匯入 useState 方法
import React, { useState } from "react";

import UnitControl from "./components/UnitControl";
import CardFooter from "./components/CardFooter";
import UnitConverter from "./components/UnitConverter";
import Counter from "./components/Counter";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, far);

function App() {
  //定義state，取得預設值為0的inputValue和修改狀態的setInputValue方法
  const [inputValue, setInputValue] = useState(0);

  //定義事件處理器
  const handleInputChange = (e) => {
    console.log(e);
    const { value } = e.target;
    setInputValue(value);
  };

  // 計數器
  // let count = 0;
  // const [count, setCount] = useState(0);

  // const click = (direction) => {
  //   if (direction === "-") {
  //     setCount(count - 1);
  //   } else {
  //     setCount(count + 1);
  //   }

  //   console.log("count", count);
  // };
  const counters = Array.from({ length: 5 });

  return (
    <div>
      <div className="container">
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
          <UnitControl />

          <UnitConverter
            inputValueKey={inputValue}
            handleInputChangeKey={handleInputChange}
          />
        </div>

        {/* STEP 1 : 把想要傳入 CardFooter 的資料透過 key={value} 的方式傳入 */}
        <CardFooter inputValueKey={inputValue} />
      </div>

      {/* 計數器 */}
      {/* <div className="container countNumber" style={{ marginTop: "30px" }}>
        <div className="chevron chevron-down" onClick={() => click("-")}>
          -
        </div>
        <div className="number">{count}</div>
        <div className="chevron chevron-up" onClick={() => click("+")}>
          +
        </div>
      </div> */}
      <div className="container" style={{ margin: '30px 0px 0px',minHeight: 'unset' }}>
        <div className="card-header">Counter</div>

        <div className="counter-block">
          {
            counters.map((_, index) => (
              <Counter key={index} />
            ))
          }

        </div>
      </div>

    </div>
  );
}

export default App;

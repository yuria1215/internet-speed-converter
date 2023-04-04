// import logo from './logo.svg';
import './App.css';

// STEP 1：匯入 useState 方法
import React, { useState } from 'react';

import UnitControl from './components/UnitControl';
import CardFooter from './components/CardFooter';
import UnitConverter from './components/UnitConverter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, far);





function App() {
  //定義state，取得預設值為0的inputValue和修改狀態的setInputValue方法
  const [inputValue, setInputValue] = useState(0);

  //定義事件處理器
  const handleInputChange = (e) => {
    console.log(e)
    const { value } = e.target;
    setInputValue(value);
  }

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">

        <UnitControl />

        <UnitConverter
          inputValueKey={inputValue}
          handleInputChangeKey={handleInputChange} />

      </div>

      {/* STEP 1 : 把想要傳入 CardFooter 的資料透過 key={value} 的方式傳入 */}
      <CardFooter inputValueKey={inputValue} />

    </div>
  );
}

export default App;

import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(3);

    //   const handCLickUp = () => {
    //     setCount(count + 1)
    //      }

    //   const handCilckDown = () => {
    //     setCount(count - 1)
    //   }


    // const handleClick = (type) => () => {
    //   if (type === 'Up') {
    //     setCount(count + 1);
    //   }
    //   if (type === 'Down') {
    //     setCount(count - 1);
    //   }
    // };

    // const handClick = (type) =>{
    //   return () => {
    //     setCount( type === 'Up' ? count+1 : count-1)
    //   }
    // }

    const handClick = (type) =>
        () => setCount(type === 'Up' ? count + 1 : count - 1)


    return (
        <div className="counter">

            <div
                className={`chevron chevron-up ${count >= 5 && 'visibility-hidden'}`}
                // style={{
                //   visibility: count >= 10 && "hidden"
                // }}
                onClick={handClick('Up')}
            />

            <div className="number">{count}</div>

            <div
                className="chevron chevron-down"
                style={{
                    visibility: count <= 0 && "hidden"
                }}
                onClick={handClick('ADD')}
            />
        </div>
    );
};

const counters = Array.from({ length: 5 });
            counters.map((_, index) => (
                <Counter key={index} />
            ))
// root.render(
//     <div style={{
//         display: 'flex', flexDirection: 'row',
//         justifyContent: 'center'
//     }}>

//         {
//             counters.map((_, index) => (
//                 <Counter key={index} />
//             ))
//         }



//     </div>
// );

export default Counter;

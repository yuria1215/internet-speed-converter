import React from 'react'
 
// STEP 2 : 透過 props 取得從父層傳入的資料
const CardFooter = ({ inputValueKey }) => {

// const { inputValueKey } = props;
    // console.log(props)

    let criteria = {};

    if (!inputValueKey) {
        criteria = {
            title: '---',
            backgroundColor: '#d3d8e2',
        };
    }
    else if (inputValueKey < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: '#ee362d',
        };
    }
    else if (inputValueKey < 40) {
        criteria = {
            title: 'GOOD',
            backgroundColor: '#1b82f1',
        };
    }
    else if (inputValueKey >= 40) {
        criteria = {
            title: 'FAST',
            backgroundColor: '#13d569',
        };
    }


    return (
        <div className="card-footer"
            style={{ backgroundColor: criteria.backgroundColor }}>
            {criteria.title}
        </div>
    )

}


export default CardFooter;
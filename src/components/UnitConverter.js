import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const UnitConverter = (props) => {
//     const { handleInputChangeKey, inputValueKey } = props;

// return


const UnitConverter = ({ handleInputChangeKey, inputValueKey }) => (

    <div className="converter">
        <div className="flex-1">
            <div className="converter-title">Set</div>
            <input id="keyIn" type="number" onChange={handleInputChangeKey} className="input-number" min="0" />
        </div>
        <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
            <FontAwesomeIcon icon={['fas', 'angle-right']} />
        </span>
        <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input value={inputValueKey / 8} type="text" className="input-number text-right" disabled />
        </div>
    </div>
)

export default UnitConverter;
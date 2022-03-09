import React from 'react';
import './Button.css';

function Button({emoticon, buttonDisabled, fruitType, changeAmountNeg, changeAmountPos, fruitAmountCounter}) {

    return (

        <section className="button-layout">
            <div className="fruit-emoji">{emoticon}</div>
            <p>{fruitType}</p>
            <button
                type="button"
                disabled={buttonDisabled}
                onClick={changeAmountNeg}
            >-
            </button>
            <p>{fruitAmountCounter}</p>
            <button
                type="button"
                onClick={changeAmountPos}
            >+
            </button>
        </section>
    )

}

export default Button;

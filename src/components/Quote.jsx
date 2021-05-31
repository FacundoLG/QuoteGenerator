import React from 'react';
import '../assets/components/Quote.css'
const Quote = ({text}) =>{
    return(
        <div className="quoteContainer">
            <p className="quoteText">"{text}"</p>
        </div>
    )
}

export default Quote
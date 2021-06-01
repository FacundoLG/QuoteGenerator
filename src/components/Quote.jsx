import React from 'react';
import '../assets/components/Quote.css'
import '../assets/pages/DarkTheme.css'
const Quote = ({text,qid,isDark}) =>{   
    return(
        <div id={qid} className="quoteContainer">
            <p className="quoteText">"{text}"</p>
        </div>
    )
}

export default Quote
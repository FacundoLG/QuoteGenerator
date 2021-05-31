import React, { useEffect } from 'react';
import '../assets/components/Quote.css'
import '../assets/pages/DarkTheme.css'
const Quote = ({text,qid,isDark}) =>{
    
    useEffect(()=>{
        var dark = document.getElementById(`${qid}`) 
        dark.classList.toggle("darkTheme")
    },[isDark,qid])
    return(
        <div id={qid} className="quoteContainer darkTheme">
            <p className="quoteText">"{text}"</p>
        </div>
    )
}

export default Quote
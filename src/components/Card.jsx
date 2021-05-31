import React from 'react';
import {BsFillForwardFill} from 'react-icons/bs'
import '../assets/components/Card.css'
import '../assets/pages/DarkTheme.css'
const Card = ({author,description,theme}) =>{
    if(theme){
       var quote = document.body
       quote.classList.toggle("darkTheme")
    }
    return(
        <div className="cardContainer">
            <div>
                <h3 className="author">{author}</h3>
                <p className="desc">{description}</p>
            </div>
            <BsFillForwardFill className="arrow"/>
        </div>
    )
}

export default Card
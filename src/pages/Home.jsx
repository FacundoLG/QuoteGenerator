import React, { useState } from 'react';
import { BsArrowRepeat } from "react-icons/bs";
import Quote from '../components/Quote';
import '../assets/pages/Home.css'
const Home = () =>{
    
    const [quote,setQuote] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sequi esse minima iste possimus tenetur neque in eos vel odio nihil maiores architecto, doloribus eum. Repudiandae architecto ipsam commodi reprehenderit!")
    return(
        <div>
            <div className="buttonContainer">
                <button className="randomButton">random <BsArrowRepeat className="icon"/></button>
            </div>
            <div className="container">
                <Quote text={quote}/>
                <Quote text={quote}/>
            </div>
        </div>
    )
}

export default Home
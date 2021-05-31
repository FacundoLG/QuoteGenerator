import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BsArrowRepeat } from "react-icons/bs";
import Quote from '../components/Quote';
var authorQuotes
const Quotes = () =>{
    var authorName = useParams().name
    const [quotes,setQuotes] = useState([])

    useEffect(() => {
        fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}&limit=20`)
        .then(res => res.json())
        .then(json => {
            authorQuotes = json.data
            console.log(authorQuotes)
            setQuotes(authorQuotes)
        })
    },[authorName])

    return(
        <>
        <Link className="buttonContainer" to="/">
            <button className="randomButton">random <BsArrowRepeat className="icon"/></button>
        </Link>
        {authorQuotes ?
        <div className="container">
            <h2>{authorName}</h2>
            {quotes.map((data) => <Quote key={data._id} qid={data._id}text={data.quoteText}/>)}
        </div>: ""}
        </>
    )
}
export default Quotes
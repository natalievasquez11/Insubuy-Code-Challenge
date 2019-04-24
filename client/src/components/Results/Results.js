import React from 'react';
import './style.css';

function Results(props) {
    return(
        <div className='allQuotes'>
            {props.quotes.map(quote => {
                return (
                    <div>
                        <div className='quoteDiv'>
                            <input type='checkbox' className='compareBox'/>
                            <p className='quoteName'>{quote.name}</p>
                            <p className='quoteDesc'>{quote.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Results;
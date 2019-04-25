import React, { Component } from 'react';
import './style.css';

class Results extends Component {
    state = {
        view: 'gridView'
    }

    render() {
        return (
            <div className='mainQuoteDiv'>
                {this.props.quotes.length > 0 ?
                    <div className='viewBtn'>
                        <button className='viewGrp'>Grid <i className='fas fa-th'></i></button>
                        <button className='viewGrp'>List <i className='fas fa-list'></i></button>
                        <br />
                        <br />
                    </div>
                    :
                    null}
                <div className='allQuotes'>
                {this.props.quotes.map((quote, index) => {
                    return (
                        <div key={index}>
                            <div className='quoteDiv'>
                                <input type='checkbox' className='compareBox' />
                                <p className='quoteName'>{quote.name}</p>
                                <p className='quoteDesc'>{quote.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}

export default Results;
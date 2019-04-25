import React, { Component } from 'react';
import './style.css';

class Results extends Component {
    state = {
        view: 'gridView',
        sort: ''
    }

    handleViewBtn = event => {
        event.preventDefault();

        let name = event.target.name;

        this.setState({
            view: name
        })
    }

    handleSort = event => {
        let value = event.target.value;

        if (value === 'price') {
            this.props.quotes.sort((a, b) => {
                return a.price - b.price;
            })
        } else if (value === 'name') {
            this.props.quotes.sort((a, b) => {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();

                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0;
            })
        }

        this.setState({
            sort: value
        })
    }

    render() {
        return (
            <div className='mainQuoteDiv'>
                {this.props.quotes.length > 0 ?
                    <div>
                        <div className='viewBtn'>
                            <input
                                type='button'
                                className='viewGrp'
                                name='gridView'
                                value='GRID'
                                onClick={this.handleViewBtn}
                            />
                            <input
                                type='button'
                                className='viewGrp'
                                name='listView'
                                value='LIST'
                                onClick={this.handleViewBtn}
                            />
                            <br />
                            <br />
                        </div>
                        <select
                            type='text'
                            className='sortInput'
                            value={this.state.sort}
                            onChange={this.handleSort}>
                            <option value=''>Sort By</option>
                            <option value='price'>Price</option>
                            <option value='name'>Name</option>
                        </select>
                    </div>
                    :
                    null}
                <div className={this.state.view}>
                    {this.props.quotes.map((quote, index) => {
                        return (
                            <div key={index}>
                                <div className='quoteInfo'>
                                    <input type='checkbox' className='compareBox' />
                                    <p className='quoteName'>{quote.name}</p>
                                    <p className='quotePrice'>${quote.price}</p>
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
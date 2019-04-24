import React, { Component } from 'react';
import Results from '../Results/Results';
import './style.css';
import axios from 'axios';

class Form extends Component {
    state = {
        startDate: '',
        endDate: '',
        citizenShip: '',
        policyMax: '',
        age: '',
        mailingState: '',
        quotes: []
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        let formInputs = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            citizenShip: this.state.citizenShip,
            policyMax: this.state.policyMax,
            age: this.state.age,
            mailingState: this.state.mailingState
        };

        axios.post('/quotes/', formInputs)
            .then(res => {
                console.log(res);

                axios.get('/quotes/')
                    .then(res => {

                        this.setState({
                            quotes: res.data.quotes
                        })
                    });
            });
    }

    //Function clears form when reset link is clicked.
    handleReset = event => {
        event.preventDefault();

        this.setState({
            startDate: '',
            endDate: '',
            citizenShip: '',
            policyMax: '',
            age: '',
            mailingState: ''
        });
    }

    render() {
        return (
            <div>
                <div className='mainDiv'>
                    <form>
                        <div className='formTop'>
                            <p>Travel Insurance</p>
                        </div>
                        <div className='formRow'>
                            <label>Policy Maximum <i className='far fa-question-circle'></i>
                                <br />
                                <select
                                    type='text'
                                    value={this.state.policyMax}
                                    name='policyMax'
                                    onChange={this.handleInputChange}>
                                    <option value="">Choose your policy maximum</option>
                                    <option value="50">50,000</option>
                                    <option value="100">100,000</option>
                                    <option value="250">250,000</option>
                                    <option value="500">500,000</option>
                                </select>
                            </label>
                            <label>Age <i className='far fa-question-circle'></i>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Choose your age'
                                    value={this.state.age}
                                    name='age'
                                    onChange={this.handleInputChange} />
                            </label>
                        </div>
                        <br />
                        <div className='formRow'>
                            <label>Travel Dates (mm/dd/yyyy) <i className='far fa-question-circle'></i>
                                <br />
                                <input
                                    className='travelInput'
                                    type='text'
                                    placeholder='Start date'
                                    value={this.state.startDate}
                                    name='startDate'
                                    onChange={this.handleInputChange} />
                                <input
                                    className='travelInput'
                                    type='text'
                                    placeholder='End date'
                                    value={this.state.endDate}
                                    name='endDate'
                                    onChange={this.handleInputChange} />
                            </label>
                            <label>Citizenship <i className='far fa-question-circle'></i>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Choose your country of citizenship'
                                    value={this.state.citizenShip}
                                    name='citizenShip'
                                    onChange={this.handleInputChange} />
                            </label>
                        </div>
                        <br />
                        <div className='formRow'>
                            <label>Mailing State <i className='far fa-question-circle'></i>
                                <br />
                                <input
                                    type='text'
                                    placeholder='Choose state'
                                    value={this.state.mailingState}
                                    name='mailingState'
                                    onChange={this.handleInputChange} />
                            </label>
                        </div>
                        <div className='submit'>
                            <button
                                onClick={this.handleSubmit}>
                                GET QUOTES
                            </button>
                        </div>
                        <div className='reset'>
                            <a href='#' onClick={this.handleReset} >RESET FORM</a>
                        </div>
                    </form>
                </div>
                < Results quotes={this.state.quotes} />
            </div>
        )
    }
}

export default Form;
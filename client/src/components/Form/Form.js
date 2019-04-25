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
        quotes: [],
        error: ''
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
            error: ''
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
        let currentYear = new Date().getFullYear();

        //Validating policy max has a value
        if(formInputs.policyMax === '') {
            this.setState({
                error: 'Please choose a value for Policy Maximum.'
            })
            return;
        }

        //Validating citizenship has a value and does not include numbers or special characters.
        if(!formInputs.citizenShip) {
            this.setState({
                error: 'Please enter a value for Citizenship.'
            })
            return;
        } else if (!formInputs.citizenShip.match(/^[a-zA-Z]*$/)) {
            this.setState({
                error: 'Error: Citizenship does not allow numbers or special characters.'
            })
            return;
        }

        //Validating mailing state has a value and does not include numbers or special characters.
        if(!formInputs.mailingState) {
            this.setState({
                error: 'Please enter a value for Mailing State.'
            })
            return;
        } else if (!formInputs.mailingState.match(/^[a-zA-Z]*$/)) {
            this.setState({
                error: 'Error: Mailing State does not allow numbers or special characters.'
            })
            return;
        }

        //Validating age 1 to 100 using age or birthyear only and has a value
        if(!formInputs.age) {
            this.setState({
                error: 'Please enter a value for Age.'
            })
            return;
        } else if(formInputs.age.match(/[0-9]\d\d\d/)) {
            if(formInputs.age > currentYear || formInputs.age < currentYear - 100) {
                this.setState({
                    error: 'Error: Please enter a valid year, age must be no older than 100.'
                })
                return;
            }
        } else if(!formInputs.age.match(/^[1-9][0-9]?$|^100$/)) {
            this.setState({
                error: 'Error: Please enter a valid age, no older than 100.'
            })
            return;
        } 

        console.log(new Date(formInputs.startDate));
        //Validate start date has a value and has mm/dd/yyyy format
        if(!formInputs.startDate) {
            this.setState({
                error: 'Please enter a value for Start Date.'
            })
            return;
        } else if (new Date(formInputs.startDate) === 'Invalid Date') {
            this.setState({
                error: 'Error: Please enter a valid start date format.'
            })
            return;
        }

        //Validate end date has a value, has mm/dd/yyyy format and is after start date
        if(!formInputs.endDate) {
            this.setState({
                error: 'Please enter a value for End Date.'
            })
            return;
        } else if (new Date(formInputs.endDate) === 'Invalid Date') {
            this.setState({
                error: 'Error: Please enter a valid end date format.'
            })
            return;
        } else if(formInputs.endDate <= formInputs.startDate) {
            this.setState({
                error: 'Error: Please enter an end date that is after the start date.'
            })
            return;
        }

        axios.post('/quotes/', formInputs)
            .then(res => {
                console.log(res);

                axios.get('/quotes/')
                    .then(res => {

                        this.setState({
                            quotes: res.data.quotes
                        })
                    });
            })
            .catch(error => {
                console.log(error.message);
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
            mailingState: '',
            error: ''
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
                        {this.state.error ? <p className='errorMessage'>{this.state.error}</p> : null}
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
                                    onChange={this.handleInputChange}/>
                            </label>
                        </div>
                        <br />
                        <div className='formRow'>
                            <label>Travel Dates (mm/dd/yyyy) <i className='far fa-question-circle'></i>
                                <br />
                                <input
                                    className='travelInput'
                                    type='date'
                                    placeholder='Start date'
                                    value={this.state.startDate}
                                    name='startDate'
                                    onChange={this.handleInputChange} />
                                <input
                                    className='travelInput'
                                    type='date'
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
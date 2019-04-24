import React, { Component } from 'react';
import './style.css';
import logo from './logo.png';

class Form extends Component {
    state = {
        startDate: '',
        endDate: '',
        citizenShip: '',
        policyMax: '',
        age: '',
        mailingState: ''
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className='mainDiv'>
                <form>
                    <div className='formTop'>
                        <img src={logo} alt='logo' /><p>Travel Insurance</p>
                    </div>
                    <div className="formRow">
                        <label>Policy Maximum <i class="far fa-question-circle"></i>
                            <br />
                            <input
                            type='text'
                            placeholder='Choose your policy maximum'
                            value={this.state.policyMax}
                            name='policyMax'
                            onChange={this.handleInputChange}/>
                        </label>
                        <label>Age <i class="far fa-question-circle"></i>
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
                    <div className="formRow">
                        <label>Travel Dates (mm/dd/yyyy) <i class="far fa-question-circle"></i>
                            <br />
                            <input 
                            className='travelInput'
                            type='text'
                            placeholder='Start date'
                            value={this.state.startDate}
                            name='startDate'
                            onChange={this.handleInputChange}/>
                            <input
                            className='travelInput'
                            type='text'
                            placeholder='End date'
                            value={this.state.endDate}
                            name='endDate'
                            onChange={this.handleInputChange}/>
                        </label>
                        <label>Citizenship <i class="far fa-question-circle"></i>
                            <br />
                            <input
                            type='text'
                            placeholder='Choose your country of citizenship'
                            value={this.state.citizenShip}
                            name='citizenShip'
                            onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <br />
                    <div className="formRow">
                        <label>Mailing State <i class="far fa-question-circle"></i>
                            <br />
                            <input
                            type='text'
                            placeholder='Choose state'
                            value={this.state.mailingState}
                            name='mailingState'
                            onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="submit">
                        <button>GET QUOTES</button>
                    </div>
                    <div className="reset">
                        <a href="/" >RESET FORM</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
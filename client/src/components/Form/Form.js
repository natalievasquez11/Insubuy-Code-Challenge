import React, { Component } from 'react';
import './style.css';

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
            <div>
                <form>
                    <label>Policy Maximum &#63;
                        <input
                        type='text'
                        placeholder='Choose your policy maximum'
                        value={this.state.policyMax}
                        name='policyMax'
                        onChange={this.handleInputChange}/>
                    </label>
                    <label>Age &#63;
                        <input
                        type='text'
                        placeholder='Choose your age'
                        value={this.state.age}
                        name='age'
                        onChange={this.handleInputChange}/>
                    </label>
                    <br />
                    <label>Travel Dates &#63;
                        <input
                        type='text'
                        placeholder='Start date'
                        value={this.state.startDate}
                        name='startDate'
                        onChange={this.handleInputChange}/>
                        <input
                        type='text'
                        placeholder='End date'
                        value={this.state.endDate}
                        name='endDate'
                        onChange={this.handleInputChange}/>
                    </label>
                    <label>Citizenship &#63;
                        <input
                        type='text'
                        placeholder='Choose your country of citizenship'
                        value={this.state.citizenShip}
                        name='citizenShip'
                        onChange={this.handleInputChange}/>
                    </label>
                    <br />
                    <label>Mailing State &#63;
                        <input
                        type='text'
                        placeholder='Choose state'
                        value={this.state.mailingState}
                        name='mailingState'
                        onChange={this.handleInputChange}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default Form;
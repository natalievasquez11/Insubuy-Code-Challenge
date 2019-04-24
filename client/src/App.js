import React, { Component } from 'react';
import Form from './components/Form/Form';
import Results from './components/Results/Results';

class App extends Component {

    render() {
        return (
            <div>
                < Form />
                < Results />
            </div>
        );
    }
}

export default App;

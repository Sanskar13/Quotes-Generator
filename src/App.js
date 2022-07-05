import React from 'react';
import axios from 'axios';

import './App.css';

class app extends React.Component{

    state = {
        advice : ''
    }

    componentDidMount(){
        // console.log('Component did mount');
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        // Get request in axios
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice} = response.data.slip;
            this.setState({advice:advice});
            console.log(advice);
        })
        .catch((error) => {
            console.log(error);
        }); 
    }

    render() {
        // Destructuring
        const {advice} = this.state
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='btn' onClick={this.fetchAdvice}>
                        <span>Give me Advice</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default app;
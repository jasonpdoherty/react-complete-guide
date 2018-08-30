import React, { Component } from 'react';
import './App.css';
import Person from "./Person/person"

class App extends Component {
    state = {
        persons: [
            { name: 'Jason', age: 37 },
            { name: 'Jack', age: 7 },
            { name: 'Harry', age: 4 }
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 39 },
                { name: 'Jack', age: 7 },
                { name: 'Harry', age: 4 }
            ]
        });
    };

    namedChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Jason', age: 39 },
                { name: event.target.value, age: 7 },
                { name: 'Harry', age: 4 }
            ]
        });
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a react App</h1>
                <p>This is really working</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Lornaaa')}>Switch</button>
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />
                    <Person
                        name={this.state.persons[1].name} changed={this.namedChangedHandler}
                        age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Lorna!')}>Hobbies : football</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age} />
                </div>
            </div>
        );
    }
}

export default App;
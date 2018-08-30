import React, { Component } from 'react';
import './App.css';
import Person from "./Person/person"

class App extends Component {
    state = {
        persons: [
            { name: 'Jason', age: 37 },
            { name: 'Jack', age: 7 },
            { name: 'Harry', age: 4 }
        ],
        showPersons: false
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

    togglePersonHandler = () => {
        const currentShowing = this.state.showPersons;
        this.setState({ showPersons: !currentShowing });
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (<div>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name} changed={this.namedChangedHandler}
                    age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Lorna!')}>Hobbies : football</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>);
        }

        return (
            <div className="App">
                <h1>Hi, I'm a react App</h1>
                <p>This is really working</p>
                <button style={style} onClick={this.togglePersonHandler}>Switch</button>
                {persons}
            </div>
        );
    }
}

export default App;
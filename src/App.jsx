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

    namedChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Jason', age: 39 },
                { name: event.target.value, age: 7 },
                { name: 'Harry', age: 4 }
            ]
        });
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
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
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)}/>;
                    })}
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
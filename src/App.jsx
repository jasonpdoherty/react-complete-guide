import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/person"

class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'Jason', age: 37 },
            { id: 2, name: 'Jack', age: 7 },
            { id: 3, name: 'Harry', age: 4 }
        ],
        showPersons: false
    };

    namedChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = { ...this.state.persons[personIndex] }; // copy into new object as to not mutate state directly
        person.name = event.target.value;

        const people = [...this.state.persons]; // copy of collection rather than original
        people[personIndex] = person;

        this.setState({ persons: people });
    }

    deletePersonHandler = (personIndex) => {

        //const persons = this.state.persons; // references state directly which will mutate it - WRONG!!
        //const persons = this.state.persons.slice(); // pre ES6 fix to this issue

        const persons = [...this.state.persons]; // ES6

        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonHandler = () => {
        const currentShowing = this.state.showPersons;
        this.setState({ showPersons: !currentShowing });
    }

    render() {

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person key={person.id}
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.namedChangedHandler(event, person.id)}
                            click={() => this.deletePersonHandler(index)} />;
                    })}
                </div>);
                btnClass = classes.red;
        }

        let assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (

            <div className={classes.App}>
                <h1>Hi, I'm a react App</h1>
                <p className={assignedClasses.join(' ')}>This is really working</p>
                <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
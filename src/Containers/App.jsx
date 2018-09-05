import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../Components/Persons/Persons"
import Cockpit from '../Components/Cockpit/cockpit';

class App extends Component {
    constructor(props)
    {
        super(props);
        console.log("App.jsx - inside constructor", props);
    }

    componentWillMount()
    {
        console.log("App.jsx - inside componentWillMount");

    }

    componentDidMount()
    {
        console.log("App.jsx - inside componentDidMount");

    }

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
        console.log("App.jsx - inside render");

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.namedChangedHandler} />
                </div>);
        }

        return (
            <div className={classes.App}>
                <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.togglePersonHandler} />
                {persons}
            </div>
        );
    }
}

export default App;
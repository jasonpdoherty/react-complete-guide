import React, { Component } from 'react';
import Person from './Person/person';


class Persons extends Component {
    constructor(props)
    {
        super(props);
        console.log("Persons.jsx - inside constructor", props);
    }

    componentWillMount()
    {
        console.log("Persons.jsx - inside componentWillMount");

    }

    componentDidMount()
    {
        console.log("Persons.jsx - inside componentDidMount");

    }
    render() {
        console.log("Persons.jsx - inside render");

        return this.props.persons.map((person, index) => {
            return <Person key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.clicked(index)} />;
        });
    }
}

export default Persons;
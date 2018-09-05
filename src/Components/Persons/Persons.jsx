import React, { Component } from 'react';
import Person from './Person/person';


class Persons extends Component {

    render() {
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
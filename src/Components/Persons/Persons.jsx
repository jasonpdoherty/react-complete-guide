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

    componentWillReceiveProps(nextProps)
    {
        console.log("Update Persons.jsx - inside componentWillReceiveProps", nextProps);

    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("Update Persons.jsx - inside shouldComponentUpdate", nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState)
    {
        console.log("Update Persons.jsx - inside componentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate()
    {
        console.log("Update Persons.jsx - inside componentDidUpdate");
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
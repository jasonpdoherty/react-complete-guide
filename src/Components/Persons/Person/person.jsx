import React, { Component } from 'react';
import classes from './person.css'
import propTypes from 'prop-types'

class Person extends Component {

    constructor(props) {
        super(props);
        console.log("Person.jsx - inside constructor", props);
    }

    componentWillMount() {
        console.log("Person.jsx - inside componentWillMount");

    }

    componentDidMount() {
        console.log("Person.jsx - inside componentDidMount");
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        console.log("Person.jsx - inside render");

        return <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}</p>
            <p>{this.props.children}</p>
            <input
                type="text"
                ref={(inp) => { this.inputElement = inp }}
                onChange={this.props.changed}
                value={this.props.name} />
        </div>
    }
}

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
}

export default Person;
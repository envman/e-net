import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class CallGetOk extends Component {
    constructor() {
        super()
        this.state = { response: [] }
    }

    componentDidMount() {
        fetch('http://localhost:8080/test')
            .then(res => res.json())
            .then(response => { this.setState({ response }) })
    }

    render() {
        return (
            <span >
                {
                    this.state.response.length ?
                        this.state.response.map(resp => <p>{resp}</p>) :
                        <p>No response yet.</p>
                }
            </span >
        )
    }
}

export default CallGetOk
import React, { Component } from 'react'

class CallGetOk extends Component {
    constructor() {
        super()
        this.state = { response: [] }
    }

    componentDidMount() {
        fetch('http://localhost:8080/test')
            .then(res => res.json())
            .then(response => {
                this.setState({response })
                console.log(this.state)
            })
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
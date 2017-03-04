import React, { Component } from 'react'

class CallGetOk extends Component {
    render() {
        return $.getJSON('http://localhost/api/test')
            .then(function (data) {
                return data.results;
            });
    }
}
export default CallGetOk
import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class FileUpload extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = { applicantid: props.applicantid }
  }

    onDrop = (acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach(function (element) {
            fetch('http://localhost:8080/applicants/upload/' + element.name + '/' + this.state.applicantid, {
                method: 'POST',
                body: element
            })
                .then(() => { console.log("Done") })
                .catch((err) => {
                    console.log("Error FileUpload: " + err + " file: " + element.name);
                })
        }, this);
    }

    render() {
        return (
            <div>
                <Dropzone onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            </div>
        )
    }
}

export default FileUpload

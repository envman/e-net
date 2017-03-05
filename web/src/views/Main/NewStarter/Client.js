import React, { Component } from 'react'
import './NewStarter.css'

class Client extends Component {
  render() {
    return (

        <div>
          <div className="row tableStyle ">
            <div className="col-md-3"><img src="../Anesco.png" alt="Anesco" /></div>
            <div className="col-md-3"><img src="../be-insulated_etech1.png" alt="Be Insulated" /></div>
            <div className="col-md-3"><img src="../british-gas.png" alt="British Gas" /></div>
            <div className="col-md-3"><img src="../city-energy.png" alt="City Energy" /></div>
          </div>
          <div className="row tableStyle">
            <div className="col-md-3"><img src="../cornerstone1.png" alt="Corner Stone" /></div>
            <div className="col-md-3"><img src="../dodd_group_etech.png" alt="Dodd Group" /></div>
            <div className="col-md-3"><img src="../dyson.png" alt="Dyson" /></div>
            <div className="col-md-3"><img src="../eco_home_alternatives_logo_etech.png" alt="Eco Home Alternatives" /></div>
          </div>
          <div className="row tableStyle">
           <div className="col-md-3"><img src="../eco_residential_etech.png" alt="Eco Residential" /></div>
            <div className="col-md-3"><img src="../egnida-logo.png" alt="Egnida" /></div>
            <div className="col-md-3"><img src="../enhance-energy.png" alt="Enhance Energy" /></div>
            <div className="col-md-3"><img src="../ernest-hawk-surveyor-etech.jpg" alt="Ernest Hawk" /></div>
          </div>
        </div>
    )
  }
}

export default Client

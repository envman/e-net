import React, { Component } from 'react'
import './NewStarter.css'
import GridList from 'material-ui/GridList';


class Product extends Component {
  render() {
    return (

      <div className="container-fluid">
        <div className="row tableStyle ">
          <div className="col-md-4"><img src="./Gradient_Survey-Hub.jpg" alt="Survey Hub" /></div>
          <div className="col-md-4"><img src="./Gradient_Eco-Hub.png" alt="Survey Hub" /></div>
          <div className="col-md-4"><img src="./Gradient_Property-Hub.png" alt="Survey Hub" /></div>
        </div>
        <div className="row tableStyle">
          <div className="col-md-4"><h2>Survey Hub</h2></div>
          <div className="col-md-4"><h2>Eco Hub</h2></div>
          <div className="col-md-4"><h2>Property Hub</h2></div>
        </div>
        <div className="row tableStyle">
          <div className="col-md-4">Our web based desktop software supports Panel Managers delivering powerful, fully
    integrated and configurable practice management tools.</div>
          <div className="col-md-4">ECO Hub enables Energy Suppliers to manage ECO obligations and Ofgem reporting. Controlling the movement
    and validation of data and documentation every step of the way.</div>
          <div className="col-md-4">Desktop based CRM, workflow and storage system, to support the management of customers involved in ‘Energy Efficiency’
    journeys such as ECO, Green Deal and Able to Pay.</div>
        </div>
        <div className="row tableStyle">
          <div className="col-md-4"><button><a href="http://www.etech.net/products/survey-hub/"> See more <i class="fa fa-angle-right"></i> </a></button></div>
          <div className="col-md-4"><button><a href="http://www.etech.net/products/eco-hub/"> See more <i class="fa fa-angle-right"></i> </a></button></div>
          <div className="col-md-4"><button><a href="http://www.etech.net/products/property-hub/"> See more <i class="fa fa-angle-right"></i> </a></button></div>
        </div>

        <div className="row tableStyle ">
          <div className="col-md-4"><img src="./Gradient_Eco-Portal.png" alt="Eco Portal" /></div>
          <div className="col-md-4"><img src="./Gradient_Smart-Survey-App.png" alt="Smart Survey App" /></div>
          <div className="col-md-4"><img src="./Gradient_Technical-Monitoring-Portal.png" alt="Technical Monitoring Portal" /></div>
        </div>
        <div className="row tableStyle">
          <div className="col-md-4"><h2>Eco Portal</h2></div>
          <div className="col-md-4"><h2>Smart Survey App</h2></div>
          <div className="col-md-4"><h2>Technical Monitoring Portal</h2></div>
        </div>
        <div className="row tableStyle">
          <div className="col-md-4">ECO Portal is a validation tool which is controlled by a supplier, the Portal validates scores and
    information within the measure reports and provides a real-time outcome of a submission.</div>
          <div className="col-md-4">Our mobile software enables RICS Chartered Surveyors to carry out residential
    Mortgage Valuation Reports and RICS HomeBuyer Reports.</div>
          <div className="col-md-4">The Technical Monitoring Portal allows technical monitoring agents working with a supplier to generate their own work
    and upload work that has already taken place.</div>
        </div>
        <div className="row tableStyle">
          <div className="col-md-4"><button><a href="http://www.etech.net/products/eco-portal/"> See more <i class="fa fa-angle-right"></i> </a></button></div>
          <div className="col-md-4"><button><a href="http://www.etech.net/products/smart-survey-app/"> See more <i class="fa fa-angle-right"></i> </a></button></div>
          <div className="col-md-4"><button><a href="http://www.etech.net/products/technical-monitoring-portal/"> See more <i class="fa fa-angle-right"></i> </a></button></div>
        </div>

        <div className="row tableStyle">
          <div className="col-md-4"><img src="./Gradient_Property-Assesment-App.png" alt="Eco Portal" /></div>
          <div className="col-md-4"><img src="./Gradient_Installer-App.png" alt="Smart Survey App" /></div>
          <div className="col-md-4"><img src="./Gradient_Floor-Plan-App.png" alt="Technical Monitoring Portal" /></div>
        </div>
        <div className="row tableStyle">
          <div className="col-md-4"><h2>Property Assessment App</h2></div>
          <div className="col-md-4"><h2>Installer App</h2></div>
          <div className="col-md-4"><h2>Floor Plan App</h2></div>
        </div>
        <div className="row tableStyle">
          <div className="col-md-4">The Property Assessment App enables efficient execution of property assessments and the sale of measures, capturing
    evidence through photos, electronic sketch tools and site notes.</div>
          <div className="col-md-4">The Installer App enables Installers to receive clear site note data and installation instructions. Installer obtains
    customer sign-off and photo evidence once installation is complete.</div>
          <div className="col-md-4">In conjunction with The Mobile Agent, the Floor Plan App enables Energy Assessors to generate comprehensive floor plans with
     full property descriptions which can be used with the EPC App.</div>
        </div>
        <div className="row tableStyle">
          <div className="col-md-4"><button><a href="http://www.etech.net/products/property-assessment-app/"> See more <i class="fa fa-angle-right"></i> </a></button></div>
          <div className="col-md-4"><button><a href="http://www.etech.net/products/installer-app/"> See more <i class="fa fa-angle-right"></i> </a></button></div>
          <div className="col-md-4"><button><a href="http://www.etech.net/products/floor-plan-app/"> See more <i class="fa fa-angle-right"></i> </a></button></div>
        </div>





      </div>
    )
  }
}

export default Product

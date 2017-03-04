import React, { Component } from 'react'
import './NewStarter.css'
import GridList from 'material-ui/GridList';
import { Link } from 'react-router'

class NewStarter extends Component {
  render() {
    return (

      <div>
        <b>Who is Etech?</b>
        <br /><br />

        Founded in 2005 and privately owned, eTech is the UK’s leading provider of mobile surveying and workflow management software, currently
         working in the property services industry for the Energy and Lending  Surveying markets.
        <br /><br />
        Our clients include leading UK Energy Suppliers and Chartered Surveyors, providing them with integrated operational business management
         platforms that streamline workflow and data exchange, significantly reducing workload whilst mitigating risk.
        <br /><br />
        We employ over 140 people, delivering both software development and client support functions from our offices in Solihull. We are committed to investment
          in both people and technology, which are at the heart of our business and continued growth.
<br /><br />
        <div></div>

        <div className="container-fluid">
          <div className="row tableStyle ">
            <div className="col-md-4"><h2>Products</h2></div>
            <div className="col-md-4"><h2>Clients</h2></div>
            <div className="col-md-4"><h2>Travel Directions</h2></div>
          </div>
          <div className="row tableStyle">
            <div className="col-md-4">We have worked on a range of products for Energy Suppliers and Chartered Surveyors</div>
            <div className="col-md-4">We have worked on a range of products for Energy Suppliers and Chartered Surveyors</div>
            <div className="col-md-4">We have worked on a range of products for Energy Suppliers and Chartered Surveyors</div>
          </div>
          <div className="row tableStyle">
            <div className="col-md-4"><button><Link to="/product">See more</Link></button></div>
            <div className="col-md-4"><button><Link to="/client">See more</Link></button></div>
            <div className="col-md-4"><button><Link to="/travelDirection">See more</Link></button></div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewStarter

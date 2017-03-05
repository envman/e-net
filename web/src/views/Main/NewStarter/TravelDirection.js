import React, { Component } from 'react'
import './NewStarter.css'
import GridList from 'material-ui/GridList';
import { Link } from 'react-router'

class TravelDirection extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading"><h3>Contact Details</h3></div>
              <div className="panel-body">
                <div className="col-md-6"><h4>Main Office</h4></div>
                <div className="col-md-6"><h4>Address</h4></div>
                <div className="col-md-6">0333 123 1414</div>
                <div className="col-md-6">eTech Solutions Limited,</div>
                <div className="col-md-6">info@etech.net</div>
                <div className="col-md-6">2 Huskisson Way,</div>
                <div className="col-md-6"></div>
                <div className="col-md-6">Shirley,</div>
                <div className="col-md-6"></div>
                <div className="col-md-6">Solihull, B90 4SS</div>

              </div>

            </div>
          </div>
          <div className="col-md-7">
            <div className="panel panel-default">
              <div className="panel-heading"><h3>Bus Service</h3></div>
              <br />
              <div className="col-md-12">Monday to Friday (Excluding Bank Holidays with exception of Good Friday)</div>
              <br />
              <div className="panel-body">
                <table className="table table-bordered table-hover">
                  <tbody>
                    <tr>
                      <td>Birmingham International Station</td>
                      <td>07:20</td>
                      <td>07:50</td>
                      <td>08:25</td>
                      <td>08:50</td>
                    </tr>
                    <tr>
                      <td>St James Place, Central Boulevard</td>
                      <td>07:34 </td>
                      <td>08:04</td>
                      <td>08:39</td>
                      <td>09:04</td>
                    </tr>
                    <tr>
                      <td>Blythe Valley, Bus Terminal</td>
                      <td>07:36</td>
                      <td>08:06</td>
                      <td>08:41</td>
                      <td>09:06</td>
                    </tr>
                    <tr>
                      <td>The FORE</td>
                      <td>07:40</td>
                      <td>08:10</td>
                      <td>08:45</td>
                      <td>09:10</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <table className="table table-bordered table-hover">
                  <tbody>
                    <tr>
                      <td>St James Place, Central Boulevard</td>
                      <td>16:10</td>
                      <td>17:05</td>
                      <td>17:55</td>
                      <td>18:35</td>
                    </tr>
                    <tr>
                      <td>Blythe Valley, Bus Terminal</td>
                      <td>16:12</td>
                      <td>17:07</td>
                      <td>17:57</td>
                      <td>18:37</td>
                    </tr>
                    <tr>
                      <td>The FORE</td>
                      <td>16:16</td>
                      <td>17:11</td>
                      <td>18:01</td>
                      <td>18:41</td>
                    </tr>
                    <tr>
                      <td>Birmingham International Station</td>
                      <td>16:30</td>
                      <td>17:25</td>
                      <td>18:15</td>
                      <td>18:55</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TravelDirection

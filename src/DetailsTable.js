import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./actions/actionsDetailsTable";

const DetailsTable = (props) => {
    return(
      <div className="col-xs-12">  
        <div>
          <table className="table table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Effective Date</th>
                  <th>Bid</th>
                  <th>Ask</th>
                </tr>
              </thead>
              <tbody>
                {/* {props.data.map(data => 
                  <tr>
                    <td>{data[1]}</td> 
                    <td>dsfsdswvwv</td>
                    <td>dsgdgsdgsgsdgsgdsd</td>
                    <td>Ajfdngjsd</td>
                  </tr>
                )} */}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default connect(mapStateToProps, mapDispatchToProps)(DetailsTable);
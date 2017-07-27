import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

const mapStateToProps = state => {
  return {
    history: state.history.splitterHistory
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};


class History extends React.Component {

  render() {
    return (
      <div>
        <h3 className="homeWelcome">History</h3>
        <div className="container-fluid">
          { this.props.history.map((data, index) => (
            <div className= "split-history" key={index}>
              <div className="row">
                <label className="col-xs-6">Split Name: </label>
                <p className="col-xs-6">{data.split_name}</p>
              </div>
              <div className="row">
                <label className="col-xs-6">Date: </label>
                <p className="col-xs-6">{data.created_at.slice(0, 10)}</p>
              </div>
              <hr />
              <label>Items:</label>
              {
                data.items.map( (item, index) => (
                  <div key={index}>
                    <div className="row">
                      <label className="col-xs-6">Item Name: </label>
                      <p className="col-xs-6">{item.item_name}</p>
                    </div>
                    <div className="row">
                      <label className="col-xs-6">Price: </label>
                      <p className="col-xs-6">{item.price}</p>
                    </div>
                    <div className="row">
                      <label className="col-xs-6">Quantity: </label>
                      <p className="col-xs-6">{item.quantity}</p>
                    </div>
                    <hr />
                  </div>
                ))
              }
              <div className="row">
                <label className="col-xs-6">Tax: </label>
                <p className="col-xs-6">{data.tax}</p>
              </div>
              <div className="row">
                <label className="col-xs-6">Tip: </label>
                <p className="col-xs-6">{data.tip}</p>
              </div>
              <div className="row">
                <label className="col-xs-6">Total: </label>
                <p className="col-xs-6">{numeral(data.total).format('$0,0.00')}</p>
              </div>
              <hr className="history-line"/>
            </div>
          ))
          }  
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
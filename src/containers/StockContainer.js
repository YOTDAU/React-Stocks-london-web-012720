import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {/* add stocks here  */}
          {this.props.stocks.map( stock => <Stock stock={stock} key={stock.id} addToPortfolio={this.props.addToPortfolio} /> )}
      </div>
    );
  }

}

export default StockContainer;

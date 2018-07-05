import React from 'react';
import numeral from 'numeral';

import mockData from '../api/data';
import {getCryptoData} from '../api/api';

const css = require('./CryptoCcyList.css');

const Row = props => {
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.currency}{` ${numeral(props.data.price).format("0,0.00")}`}</td>
            <td className={props.color}>{`${props.data.percent_change_24h}%`}</td>
        </tr>
    );
};

export default class CryptoCcyList extends React.Component {
  constructor() {
      super();
      this.state = {
          data: [],
          value: 'sgd'
      };
  }

  getCyptoData(value = "sgd") {
    getCryptoData(value).then(data => {
      const tempData = data.map((currency, i) => {
        return (data[i]["price"] =
          data[i]["price_" + this.state.value]);
      });
      this.setState({
        data
      });
    });
  }

  componentDidMount () {
    this.getCyptoData();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })

    this.getCyptoData(event.target.value);
    
  }
  
  render() {
    const row = this.state.data.map((el, i) => {
    let currency = this.state.value;
    return (
      <Row
        key = { el.name }
        data = { el }
        color = {
          el.percent_change_24h > 0 ? css.positive : css.negative
        }
        currency = { currency.toUpperCase() }
      />
    );
  });
  return (           
    <div className={css.mainContainer}>
     <h1>Top 5 Crypto Currency data in the world</h1>
     <div className={css.selectWrapper}>
        <span>Select the value to view in different currency</span>
        <select value={this.state.value} onChange={this.handleChange.bind(this)}>
          <option value="sgd">SGD</option>
          <option value="aud">AUD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="usd">USD</option>
          <option value="vnd">VND</option>
        </select>
     </div>
     <div className={css.cyptoWrapper}>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>%Change</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </table>
    </div>
 </div>
);
}
}

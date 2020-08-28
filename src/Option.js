import React from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat';



class Option extends React.Component {

    render() {
          return (
            <div key={this.props.itemHash} className="feature__item">
            <input
              type="radio"
              id={this.props.itemHash}
              className="feature__option"
              name={this.props.name}
              checked={this.props.item.name === this.props.selected.name}
              onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
            />
            <label htmlFor={this.props.itemHash} className="feature__label">
              {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
          )
    }

}

export default Option
import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';

class SummaryOption extends React.Component{

    render(){
        return (
            <div className="summary__option" key={this.props.featureHash}>
                  <div className="summary__option__label">{this.props.feature} </div>
                  <div className="summary__option__value">{this.props.selected.name}</div>
                  <div className="summary__option__cost">
                    {USCurrencyFormat.format(this.props.selected.cost)}
                  </div>
                </div>
        )
    }
}

export default SummaryOption
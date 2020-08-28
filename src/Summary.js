import React from 'react';
import SummaryOption from './SummaryOption';

class Summary extends React.Component {

    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            return (
                <SummaryOption 
                    key={featureHash}
                    featureHash={featureHash}
                    feature={feature}
                    selected={selectedOption} />
              )
            });
    return (
        summary
    )
  }
}

export default Summary;
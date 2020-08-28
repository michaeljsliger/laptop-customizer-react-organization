import React from 'react';
import Summary from './Summary';
import SummaryTotal from './SummaryTotal';

class Main_Summary extends React.Component {

    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary selected={this.props.selected} />
                <SummaryTotal selected={this.props.selected} />
            </section>
        )
    }
}

export default Main_Summary;
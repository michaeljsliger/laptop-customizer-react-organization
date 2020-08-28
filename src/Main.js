import React from 'react';
import Header from './Header';
import Features from './Features';

import MainSummary from './Main_Summary';

class Main extends React.Component {
    // All keys and key generators are retained
    render() {
        return (
        <div>
            <Header />
            <main>
            <Features 
                features={this.props.features}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}
                />
            <MainSummary selected={this.props.selected}/>
            </main>
        </div>
        )
    }
}

export default Main;
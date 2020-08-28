import React from 'react';
import Option from './Option';
import slugify from 'slugify';




class Features extends React.Component {
    

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            // for each feature, 
            // map into options
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <Option 
                itemHash={itemHash}
                feature={feature /* NOT this.props.features[feature]*/ } 
                item={item}
                name={slugify(feature)}
                selected={this.props.selected[feature]}
                updateFeature={this.props.updateFeature}

                />
              );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });

          return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
                {features}
             </form>
          )
    }
       
}

export default Features;
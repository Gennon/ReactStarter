import React from 'react';
import { Button } from 'react-bootstrap';

class CoverContent extends React.Component{
  
  static defaultProps = {
    heading: "Cover your page."
  }
  
  static propTypes = {
    heading: React.PropTypes.string.isRequired 
  }
 
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }
 
  render() {
    return (
    <div className="inner cover">
      <h1 className="cover-heading">Cover your page.</h1>
      <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
      <p className="lead">
        <Button bsSize="large">Learn more</Button>
      </p>
    </div>
    );
  }
}

export default CoverContent;





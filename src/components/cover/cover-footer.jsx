import React from 'react';
import { Button } from 'react-bootstrap';

class CoverFooter extends React.Component{
  
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
    <div className="mastfoot">
		<div className="inner">
			<p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
		</div>
	</div>
    );
  }
}

export default CoverFooter;
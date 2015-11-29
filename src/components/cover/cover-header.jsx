import React from 'react';
import CoverNav from './cover-nav';

class CoverHeader extends React.Component{
  
  static defaultProps = {
    title: "Your cover title"
  }
  
  static propTypes = {
    title: React.PropTypes.string.isRequired 
  }
 
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }
 
  render() {
    return (
    <div className="masthead clearfix">
      <div className="inner">
        <h3 className="masthead-brand">{ this.props.title}</h3>
        <CoverNav />
      </div>
    </div>
    );
  }
}

export default CoverHeader;



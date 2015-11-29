import React from 'react';

class CoverNavItem extends React.Component{
  
  static defaultProps = {
    name: "Item",
    link: "#",
    active: false
  }
  
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired
  }
  
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }
 
  render() {
    return (
		<li className={this.props.active ? "active" : ""}>
		    <a href={this.props.link}>{this.props.name}</a>
		</li>	
    );
  }
}

export default CoverNavItem;



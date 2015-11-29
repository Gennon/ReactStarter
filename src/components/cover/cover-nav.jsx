import React from 'react';
import CoverNavItem from './cover-nav-item';

class CoverNav extends React.Component{
  
  state = {
	  navItems: []
  }
  
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
	
	this.state.navItems = [
		{name: "Home", active: true, link: "#"},
		{name: "Features", active: false, link: "#"},
		{name: "Contact", active: false, link: "#"}
	]
  }
 
  render() {
    return (
		<nav>
			<ul className="nav masthead-nav">
				{this.renderNavItems()}
			</ul>
		</nav>
    );
  }
  
  renderNavItems(){
	  return this.state.navItems.map((item, index) => 
		  <CoverNavItem name={item.name} active={item.active} link={item.link} key={index}/>
	  );
	  
  }
}

export default CoverNav;



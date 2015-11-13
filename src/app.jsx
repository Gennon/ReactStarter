import React from 'react';
import ReactDOM from 'react-dom';
import Navigator from './components/navigator';
import Content from './components/content';

class Main extends React.Component{
  render() {
    return (
    <div>
      <Navigator />      
      <Content />
    </div>
    );
  }
};

ReactDOM.render(<Main />, document.querySelector('.container'));

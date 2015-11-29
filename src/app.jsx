import React from 'react';
import ReactDOM from 'react-dom';
import CoverHeader from './components/cover/cover-header';
import CoverContent from './components/cover/cover-content';
import CoverFooter from './components/cover/cover-footer';

class Main extends React.Component{
  render() {
    return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <CoverHeader title="My Cover" />
          <CoverContent />
          <CoverFooter />
        </div>
      </div>
    </div>
    );
  }
};

ReactDOM.render(<Main />, document.querySelector('.container'));

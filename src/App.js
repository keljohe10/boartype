import React from 'react';
import './App.css';
import CourseExpirarionRules from './components/pages/courseExpirationRules';
import Header from './components/common/Header/Header';
const queryString = require('query-string');

class App extends React.Component {
  constructor(props) {
    super(props);
    
    const parsed = queryString.parse(props.location.search);
      this.state = {
      boardprov: parsed.boardProvId,
      nmBoard: parsed.boardName
    };
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">             
              <CourseExpirarionRules params={this.state}  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

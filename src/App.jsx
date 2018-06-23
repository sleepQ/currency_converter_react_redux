import React from 'react'
import Header from './components/Header';
import { withRouter } from 'react-router'

class App extends React.Component {
  render() {
    return (<div>
      <Header/>
      <div className="container ml10">
          {this.props.children}
      </div>
    </div>)
  }
}

export default withRouter(App);

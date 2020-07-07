import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './Components/Layout';
import {NavigationBar} from './Components/NavigationBar';
import {Jumbotron} from './Components/Jumbotron';

class App extends Component{
  render(){
    return (      
      <React.Fragment>
        <NavigationBar/>
        <Jumbotron/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>      
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       Test
//     </div>
//   );
// }

export default App;
import React from 'react'
import './App.css'
import Home from './Components/Home'
import Main from './Components/Main'
import ThankYou from './Components/ThankYou'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class  App extends React.Component{
  render(){
  return(
    <Router>
     <div className='routes'>

       <nav>
         <ul>
           <li>
           <Link to ="/Home">Home </Link>
           </li>
           <li>
           <Link to ="/Main">Main </Link>
           </li>
           <li>
           <Link to ="/ThankYou"> Special Thanks </Link>
           </li>
         </ul>
       </nav>
     <Switch>
     <Route exact path="/Home" component={Home}/>
     <Route path="/Main" component={Main}/>
     <Route path="/ThankYou" component={ThankYou}/>
     </Switch>
       </div>
   </Router>
   );

}
}



export default App;

import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Landing from './components/layouts/Landing'
import Home from './components/layouts/Home'
import Product from './components/layouts/Product'
import Price from './components/layouts/Price'
import Review from './components/layouts/Review'
import Stock from './components/layouts/Stock'
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// redux
import {Provider} from 'react-redux'
import store from './redux/store/store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Router>
    <Header></Header>
      <Route exact path="/" component={Landing}></Route>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/Product" component={Product}></Route>
      <Route exact path="/Price" component={Price}></Route>
      <Route exact path="/Stock" component={Stock}></Route>
      <Route exact path="/Review" component={Review}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Register" component={Register}></Route>
    <Footer></Footer>
    </Router> 
    </div>
    </Provider>
  );
}

export default App;






const postList=[
  {
    id:1,
    content : 'this world will be out of the pandemic soon',
    user:'abhi'
  },
  {
    id:2,
    content : 'hello from abhi',
    user:'advik'
  },
  {
    id:3,
    content : 'How r u',
    user:'abhi'
  },
  {
    id:4,
    content : 'this world will be out of the pandemic soon',
    user:'abhi'
  }
]

import {Route,Routes} from 'react-router-dom';


import Signin from './screens/Signin';
import Registration from './screens/Registration';
import Shorten from './screens/Shorten';
import Account from './screens/Account';
import Home from './screens/Home';
import Urls from './screens/Urls'
import Shortened from './screens/Shortened'


function App() {
  return (
    <Routes>
      <Route path = '/' element = {< Signin/>} />
      <Route path = '/registration' element = {<Registration/>} />
      <Route path = '/shorten' element = {< Shorten/>} />
      <Route path = '/home' element = {< Home/>} />
      <Route path = '/urls' element = {< Urls/>} />
      <Route path = '/shortened' element = {< Shortened/>} />
      <Route path = '/account' element = {< Account/>} />
      
      <Route />
      <Route />
    </Routes>
  );
}

export default App;

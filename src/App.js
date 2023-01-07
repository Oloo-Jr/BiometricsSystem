import { Registration } from './Screens/Registry';
import { Login } from './Screens/Login';
import { View } from './Screens/View';
import { Search } from './Screens/Search';
import Pic from './Screens/Pic';
import { StyledContainer } from './Components/style';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './Database/auth';
// import PrivateRoute from './Screens/route';

function App() {
  return (
    <>
      <Router>
        <StyledContainer>
          <Routes>
            <Route path='/' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search' element={<Search />} />
            <Route path='/view' element={<View />} />
            <Route path='/pic' element={<Pic />} />
          </Routes>
        </StyledContainer>
      </Router>
    </>
  )
}

export default App;

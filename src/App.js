import { Registration } from './Screens/Registry';
import Login from './Screens/Login'
import { StyledContainer } from './Components/style';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </StyledContainer>
    </Router>
  )
}

export default App;

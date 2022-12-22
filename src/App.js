import { Registration } from './Screens/Registry';
import { Login } from './Screens/Login';
import { View } from './Screens/View';
import { Search } from './Screens/Search';
import { StyledContainer } from './Components/style';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </StyledContainer>
    </Router>
  )
}

export default App;

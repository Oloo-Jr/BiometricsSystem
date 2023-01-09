import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
  Company,
  Blues,
  StyledTitle,
  CopyrightText,
  StyledFormButton
} from '../Components/style';
import { auth } from '../Database/config';


export const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
              <Link to='/search' />
          }
      })
      return unsubscribe
  }, [])

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log( 'Logged in with:', user.email);
       })
       .catch(error => alert(error.message))
}

  return (
    <>
      <Company width={50}>
        <StyledTitle size={48}>
          COMPANY NAME
        </StyledTitle>
        <CopyrightText>
          SLOGAN
        </CopyrightText>
      </Company>
      <Blues>
        <form>
          <label>EMAIL
            <input 
              type='text'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
              placeholder="USERNAME"
            />
          </label>

          <label>PASSWORD
            <input 
             type='password'
               value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
            />
          </label>
          <Link to='/search'>
            <StyledFormButton onClick={handleLogin} >
              Login
            </StyledFormButton>
            </Link>
          
        </form>
      </Blues>
    </>
  );
};

import React from 'react';
import {
  Company,
  Blues,
  StyledTitle,
  CopyrightText,
  StyledFormButton
} from '../Components/style';
import { Link } from 'react-router-dom';

export const Login = () => {
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
          <label>USERNAME
            <input 
              // type={text}
              // value={}
              // onChange={(e) => set(e.target.value)}
              placeholder="USERNAME"
            />
          </label>

          <label>PASSWORD
            <input 
              // type={password}
              // value={}
              // onChange={(e) => set(e.target.value)}
              placeholder="PASSWORD"
            />
          </label>

          <Link to='/search'>
            <StyledFormButton>
              Login
            </StyledFormButton>
          </Link>

        </form>
      </Blues>
    </>
  );
};

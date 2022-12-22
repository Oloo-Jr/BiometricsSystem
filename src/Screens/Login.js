import React from 'react';
import {
  Company,
  Blues,
  StyledTitle,
  CopyrightText
} from '../Components/style';

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
        </form>
      </Blues>
    </>
  );
};

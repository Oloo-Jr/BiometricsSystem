import styled from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7E8",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626",
    secondary: "#adadad"
}

export const StyledContainer = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flexDirection: row;
    background-color: #e2e3ea;
    font-family: 'Mulish', sans-serif;
    justify-content: center;
    align-items: center;
`;

export const Company = styled.div `
    min-height: 100vh;
    width: ${(props) => props.width}%;
    left: 0px;
    top: 0px;
    background-color: #007e94;
`;

export const Blues = styled.div `
    max-height: 100vh;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const StyledTitle = styled.h2 `
    font-family: 'Mulish';
    font-style: normal;
    font-size: ${(props) => props.size}px;
    font-weight: 200;
    line-height: 66px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
    height: 66px;
    width: 369px;
`;

export const CopyrightText = styled.p `
    color: #ffffff;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    left: 160px;
    width: 131px;
    height: 56px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 40px;
    font-weight: 300;
    line-height: 56px;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }

`;

export const ButtonGroup = styled.div `
    display: flex;
    justify-content: space-around;
    flex-direction:row;
    margin-top: 25px;
`;

export const StyledFormButton = styled.button `
    padding: 10px;
    background: #007e94;
    border: 2px solid;
    border-radius: 15px;
    color: #ffffff;
    width: 342.33px;
    height: 34px;
    top: 912px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;
`;

export const StyledFormArea = styled.div `
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 10px;0
`;

export const Text = styled.p `
    font-style: normal;
    text-transform: capitalize;
`;

export const Label = styled.label `
    font-family: Mulish;
    font-style: normal;
    font-size: 16px;
    letter-spacing: 0.3px;
    text-transform: uppercase:
    color: #5f5f5f;
    padding-left: 10px;
    font-weight: 2000;
`;
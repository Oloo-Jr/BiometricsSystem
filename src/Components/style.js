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
    justify - content: center;
    align - items: center;
`;

export const Company = styled.div `
    height: 100vh;
    width: ${(props) => props.width}%;
    left: 0px;
    top: 0px;
    background-color: #007e94;
`;

export const Blues = styled.div `
    height: 100vh;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-wrap: wrap;
`;

export const StyledTitle = styled.h2 `
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
    font-weight: 200;
`;

export const CopyrightText = styled.p `
    color: ${colors.light2};
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 160px;
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
    cursor: pointer
    width: 150px;
    background-color: #007e94;
    font-size: 16px;
    border: 2px solid;
    border-radius: 25px;
    color: #ffffff;
    transition: ease-in-out 0.3s;
    outline: 0;
    font-family: 'Roboto', sans-serif;
`;
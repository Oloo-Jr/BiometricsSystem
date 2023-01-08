import React from "react";
import { Blues, Company, CopyrightText, StyledTitle, Label, ButtonGroup, StyledFormArea, Test, StyledButton, StyledFormButton} from "../Components/style";
import Table from "react-bootstrap/Table"
import { Button } from "react-bootstrap";
import { Tp } from "../Components/State";
import './style.css';

export const View = () => {
    return (
        <>
            <Company width={30}>
                <StyledTitle size={48}>
                    COMPANY NAME
                </StyledTitle>

                <ButtonGroup>
                    {/* <Tp></Tp> */}
                </ButtonGroup>

                <CopyrightText>
                    SLOGAN
                </CopyrightText>
            </Company>
            <Blues>
                <>
                    <div className="view">
                        <div className="one"> 
                            <Test>
                                <input 
                                    placeholder="First name"
                                />
                            </Test>
                            <Test>
                                <input 
                                    placeholder="Middle Name"
                                />
                            </Test>
                            <Test>
                                <input 
                                    placeholder="Surname"
                                />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="date of birth"
                                />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Gender"
                                />
                            </Test>
                                                                                    <Test>
                                <input 
                                    placeholder="Ethnicity"
                                />
                            </Test>
                                                                                    <Test>
                                <input 
                                    placeholder="Number of children"
                                />
                            </Test>

                            <Test>
                                <div><label> Marital Status</label></div>
                                <div>                                
                                    <select>
                                        <option>...</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Divorced</option>
                                        <option>Widow</option>
                                        <option>Widower</option>
                                    </select>
                                </div>
                            </Test>
                            <Test className="drop">
                                <div>
                                    <label> Disability</label>
                                </div>
                                <div>                                
                                    <select>
                                        <option>...</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Divorced</option>
                                        <option>Widow</option>
                                        <option>Widower</option>
                                    </select> 
                                </div>

                            </Test>
                            <Test>
                                <div>
                                    <label>EDUCATION STANDARD</label>
                                </div>
                                <div>
                                    <select>
                                        <option>...</option>
                                    </select>
                                </div>div
                            
                            </Test>
                        </div>
                        <div className="two">
                            <Test>
                                <input 
                                    placeholder="Nationality"
                                />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Residence"
                                />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="County"
                                />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Constituency"
                                />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Ward"
                                />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Occupation"
                                />
                            </Test>
                            <div className="three">
                                <StyledFormButton>
                                    Picture
                                </StyledFormButton>
                            </div>
                            <div className="three">
                                <StyledFormButton>
                                    Fingerprint
                                </StyledFormButton>
                            </div>
                        </div>
                        <div className="button">
                            <StyledFormButton>
                                Register
                            </StyledFormButton>
                        </div>
                    </div>
                </>
            </Blues>
        </>
    )
}

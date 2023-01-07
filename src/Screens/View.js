import React from "react";
import { Blues, Company, CopyrightText, StyledTitle, Label, ButtonGroup, StyledFormArea} from "../Components/style";
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
                        <div>
                            <Label>First Name: 
                                <p>Peter</p>
                            </Label>
                            <Label>Middle Name: 
                                <p>Okello</p>
                            </Label>
                            <Label>Surname: 
                                <p>Maxwel</p>
                            </Label>
                            <Label>Date OF Birth: 
                                <p>21/12/1999</p>
                            </Label>
                            <Label>Gender: 
                                <p>Male</p>
                            </Label>
                            <Label>Ethnicity: 
                                <p>African</p>
                            </Label>
                            <Label>County: 
                                <p>Nairobi</p>
                            </Label>
                            <Label>Constituency: 
                                <p>Westlands</p>
                            </Label>
                            <Label>Ward: 
                                <p>Kangemi</p>
                            </Label>
                        </div>
                        <div>
                            <Label>Occupation: 
                                <p>Lawyer</p>
                            </Label>
                            <Label>Residence: 
                                <p>Kenya</p>
                            </Label>
                            <Label>Marital Status: 
                                <p>Single</p>
                            </Label>
                            <Label>Number Of Children: 
                                <p>0</p>
                            </Label>
                            <Label>Disability: 
                                <p>None</p>
                            </Label>
                            <Label>Nationality: 
                                <p>Kenyan</p>
                            </Label>
                            <Label>Education Standard: 
                                <p>Masters</p>
                            </Label>
                            <Label>Single Parent: 
                                <p>No</p>
                            </Label>
                            <Label>Nation Of Originality: 
                                <p>Kenya</p>
                            </Label>
                            <Label></Label>
                        </div>
                    </div>
                </>
            </Blues>
        </>
    )
}

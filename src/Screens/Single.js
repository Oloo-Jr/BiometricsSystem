import React from "react";
import './style.css';
import { 
    Test,
    Company,
    Blues,
    StyledTitle, 
    CopyrightText
} from "../Components/style";

export const Single = () => {
    return (
        <>
            <Company width={30}>
                <StyledTitle size={48}>
                    Company name
                </StyledTitle>
                <CopyrightText>
                    slogan
                </CopyrightText>
            </Company>
            <Blues>
                <>
                    <div className="view">
                        <div>
                            <label>First Name
                                <p>Peter</p>
                            </label>
                            <label>Middle Name
                                <p>Max</p>
                            </label>
                            <label>Surname
                                <p>Gole</p>
                            </label>
                            <label>Date of Birth
                                <p>12/21/1999</p>
                            </label>
                            <label>Gender
                                <p>Male</p>
                            </label>
                            <label>Ethnicity
                                <p>African</p>
                            </label>
                            <label>Number of Children
                                <p>0</p>
                            </label>
                            <label>Marital Status
                                <p>Single</p>
                            </label>
                            <label>Disability
                                <p>No</p>
                            </label>
                        </div>
                        <div>
                            <label>Education Standard
                                <p>Master</p>
                            </label>
                            <label>Nationality
                                <p>Kenyan</p>
                            </label>
                            <label>Residence
                                <p>Kenya</p>
                            </label>
                            <label>County
                                <p>Nairobi</p>
                            </label>
                            <label>Constituency
                                <p>RUARAKA</p>
                            </label>
                            <label>Ward
                                <p>UTALII</p>
                            </label>
                            <label>Occupation
                                <p>Lawyer</p>
                            </label>
                            <label></label>
                            <label></label>
                        </div>
                    </div>
                </>
            </Blues>
        </>
    )
}
import React from "react";
import { Blues, Company, CopyrightText, StyledTitle, StyledContainer} from "../Components/style";
import Table from "react-bootstrap/Table"

export const View = () => {
    return (
        <>
            <Company width={30}>
                <StyledTitle size={48}>
                    COMPANY NAME
                </StyledTitle>
                <CopyrightText>
                    SLOGAN
                </CopyrightText>
            </Company>
            <Blues>
                <StyledContainer>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Middle Name</th>
                                    <th>Surname</th>
                                    <th>Date Of Birth</th>
                                    <th>Gender</th>
                                    <th>Ethnicity</th>
                                    <th>County</th>
                                    <th>Constituency</th>
                                    <th>Ward</th>
                                    <th>Occupation</th>
                                    <th>Residence</th>
                                    <th>Marital Status</th>
                                    <th>Number Of Children</th>
                                    <th>Disability</th>
                                    <th>Nationality</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </Table>
                    </div>
                </StyledContainer>
            </Blues>
        </>
    )
}

import React, {useState, useEffect, Component} from "react";
// import { Blues, Company, CopyrightText, StyledTitle } from "../Components/style";
// import db from "../Database/config";
// import firebase from "firebase/app";
// import "firebase/firestore";

import Table from "react-bootstrap/Table";


// export const Search = () => {
//     const [citizens, setCitizens] = useState([]);
//     const citizensRef = db.collection("Citizens");

//     useEffect(() => {
//         const getCitizens = async () => {
//             const data = citizensRef.doc;
//             setCitizens(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
//         }

//         getCitizens()
//     }, [])
//     return (
//         <>
//             <Company width={30}>
//                 <StyledTitle>
//                     COMPANY
//                 </StyledTitle>
//                 <CopyrightText>
//                     SLOGAN
//                 </CopyrightText>
//             </Company>
//             <Blues>
//                 <div>
//                     {citizens.map((citizen) => {
//                         return (
//                             <div>
//                                 {""}
//                                 <h1>Name: {citizen.Fname}</h1>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </Blues>
//         </>
//     );
// };

export const Search = () => {
    return(
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
    );
};
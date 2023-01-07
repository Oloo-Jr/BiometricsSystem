import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import './style.css'

export const Search = () => {
    return(
        <div className="table">
            <table>
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
                        <th>Education Standard</th>
                        <th>Single Parent</th>
                        <th>Nation of originality</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Peter</td>
                        <td>Max</td>
                        <td>Polen</td>
                        <td>12/21/1999</td>
                        <td>Male</td>
                        <td>African</td>
                        <td>Nairobi</td>
                        <td>Westlands</td>
                        <td>Kangemi</td>
                        <td>Lawyer</td>
                        <td>Kenya</td>
                        <td>Single</td>
                        <td>0</td>
                        <td>None</td>
                        <td>Kenyan</td>
                        <td>Masters</td>
                        <td>No</td>
                        <td>Kenya</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};
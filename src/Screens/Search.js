import React, { Component } from "react";
import './style.css'

export const Search = () => {
    return(
        <div className="table">
            <div>
                <title>Taita Taveta human rights network</title>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Surname</th>
                        <th>Date Of Birth</th>
                        <th>Gender</th>
                        <th>Ethnicity</th>
                        <th>Number Of Children</th>
                        <th>Marital Status</th>
                        <th>Disability</th>
                        <th>Education Standard</th>
                        <th>Nationality</th>
                        <th>Residence</th>
                        <th>County</th>
                        <th>Constituency</th>
                        <th>Ward</th>
                        <th>Occupation</th>
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
                        <td>0</td>
                        <td>None</td>
                        <td>Single</td>
                        <td>Masters</td>
                        <td>Kenyan</td>
                        <td>Kenya</td>
                        <td>Nairobi</td>
                        <td>Westlands</td>
                        <td>Kangemi</td>
                        <td>Lawyer</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};
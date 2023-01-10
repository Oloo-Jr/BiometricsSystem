import React, { Component, useState, useEffect } from "react";
import { getCitizens } from "../Database/dbmethods";
import Table from "react-bootstrap/Table";
import './style.css'
import { db } from "../Database/config";
import { all } from "axios";
import Header from "../Components/Header";

export const Search = () => {
    const [alldata, setData] = useState('')

    const getCitizens = () => {

        const alldata = [];
    return db.collection("Citizen").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const info = doc.data();
            alldata.push({id: doc.id, ...doc.data()})
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            setData([...alldata]);
        });
    });
    }
    const info = [...alldata];


  useEffect(() => {
    getCitizens();
  }, [])
  

    return(
        <div className="table">
            <Header/>
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
                    </tr>
                </thead>
                <tbody>
                {info.map(child => (
                    <tr key={[child.id]}>
                    <td>{[child.firstName]}</td>
                    <td>{[child.middleName]}</td>
                    <td>{[child.surName]}</td>
                    <td>{[child.dateofbirth]}</td>
                    <td>{[child.gender]}</td>
                    <td>{[child.ethnicity]}</td>
                    <td>{[child.county]}</td>
                    <td>{[child.constituency]}</td>
                    <td>{[child.ward]}</td>
                    <td>{[child.occupation]}</td>
                    <td>{[child.residence]}</td>
                    <td>{[child.maritalStatus]}</td>
                    <td>{[child.numberofChildren]}</td>
                    <td>{[child.disability]}</td>
                    <td>{[child.nationality]}</td>
                    <td>{[child.educationStandard]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};
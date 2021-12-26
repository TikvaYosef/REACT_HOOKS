
import React, { useState } from "react";

function Form() {
    let [firstName, setfirstName] = useState(0);
    let [lastName, setlastName] = useState(0);
    let [yearOfBirth, setyear] = useState(0);
    let [gender, setgender] = useState(0);
    let [Guided, setGuided] = useState(0);

 

    let inpF = (event) => { firstName = event.target.value };
    let inpL = (event) => { lastName = event.target.value };
    let inpY = (event) => { yearOfBirth = event.target.value };
    let inpg = (event) => { gender = event.target.value };
    let inpGu = (event) => { Guided = event.target.value };

    function btnButton() {
        setfirstName(firstName),
        setlastName(lastName),
        setyear(yearOfBirth),
        setgender(gender),
        setGuided(Guided)       
    }


    // function showDitels(func, parameter) {
    //     func(parameter)
    // }

    // let array = [{ firstName: inpF() }, { lastName: inpL() }, { yearOfBirth: inpY() }, { gender: inpg() }, { Guided: inpGu() }];

    // function showArray(array) {
    //     for (let i = 0; i < array.length; i++) {
    //        let user =  array[i];
    //     }
    // }





    return (
        <div>
            <lable>first name</lable><br />
            <input onChange={inpF}></input><br />
            <label>last name</label><br />
            <input onChange={inpL}></input><br />
            <label>year Of Birth</label><br />
            <input onChange={inpY}></input><br />
            <label>gender</label><br />
            <input onChange={inpg}></input><br />
            <label>Guided</label><br />
            <input onChange={inpGu}></input><br />

            <button onClick={() => { btnButton() }}>click</button>

            <h1>employees list</h1>
            <p>{firstName} {lastName} {yearOfBirth} {gender} {Guided}</p>

            <ul>
                <li> <p>{firstName} {lastName} {yearOfBirth} {gender} {Guided}</p></li>
            </ul>


        </div>
    );

}

export default Form;
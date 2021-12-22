
import React, { useState } from "react";

function Form() {
    let [firstName, setfirstName] = useState(0);
    // let [lastName, setlastName] = useState(0);
    // let [yearOfBirth, setyear] = useState(0);
    // let [gender, setgender] = useState(0);
    // let [Guided, setGuided] = useState(0);

    let inp = (event) => { firstName = event.target.value };
    let btn  = (func,name) =>{func(name)}

    return (
        <div>
            <lable> add employee:</lable>
            <input onChange={inp}></input>
            <button onClick={btn(setfirstName(),firstName)}>click</button>

            <h1>employees list</h1>
            <ul>
                <li>{firstName}</li>
                {/* <li>{lastName}</li>
                <li>{yearOfBirth}</li>
                <li>{gender}</li>
                <li>{Guided}</li> */}
            </ul>

        </div>
    );

}

export default Form;
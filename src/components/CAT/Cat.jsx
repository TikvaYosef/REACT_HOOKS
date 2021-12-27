import React, { useEffect, useState } from "react";

function Cat() {
    let [Cat, setCat] = useState({});

    const showCat = (event) => {
        Cat[event.target.name] = event.target.value
    };

    const btn = () => {
        setCat({ ...Cat });
    };

    useEffect(

        () => {alert("initalizion") }
        , [Cat]
    )

    return (
        <div>
            <label htmlFor="text">name</label>
            <input name="name" type="text" onChange={showCat} />

            <label htmlFor="number">age</label>
            <input name="age" type="number" onChange={showCat} />

            <label htmlFor="text">color</label>
            <input name="color" type="text" onChange={showCat} />

            <label htmlFor="text">gender</label>
            <input name="gender" type="text" onChange={showCat} />
            <button onClick={btn}>click</button>

        </div>
    )


}

export default Cat;

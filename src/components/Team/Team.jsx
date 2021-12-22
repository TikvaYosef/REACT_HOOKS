import React, {useState} from "react";




function Team(){
    let[Employee, setEmployee] = useState(0);
    let[days, setdays] = useState(0);
    let[hour, sethour] = useState(0);
    let [class_,setclass_] = useState(0);


    function upButton(func,somthing){
        func(somthing+1)
    }
 
    let myinput = (event)=>{class_ = event.target.value}

   

    return(
        <div>
            
           
            
           {/* employees */}
           <p>employees: {Employee}</p>
            <button onClick={ ()=>{upButton(setEmployee,Employee)}}>Up </button>
            <input onChange={(event)=>{setEmployee(event.target.value)}}></input>
            <button onClick={ ()=>setEmployee(Employee-1)}>down </button>
            <button onClick={ ()=>setEmployee(0)}>Reset </button>
           
           {/* days */}
           <p>days:{days}</p>
           <button onClick={ ()=>{upButton(setdays,days)}}>Up</button>
           <button onClick={ ()=>setdays(days-1)}>down</button>
           <button onClick={ ()=>setdays(0)}>Reset</button>


           {/* hour */}
           <p>hour:{hour}</p>
           <button onClick={ ()=>upButton(sethour,hour)}>Up</button>
           <button onClick={ ()=>sethour(hour-1)}>down</button>
           <button onClick={ ()=> sethour(0)}>Reset</button>

           

           <p>calculation:{hour*days}</p> 
           <button onClick={()=>sethour(0)}>Reset</button>


           <h1>class: {class_}</h1>

 
           <input onChange={myinput}></input>
           <button onClick={()=>{setclass_(class_)}}>click</button>


        









        </div>
    )
}



export default Team;
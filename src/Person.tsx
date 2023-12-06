import {ChangeEvent} from "react";

type PersonProps = {
    firstname:string,
    lastname:string,
    age:number
    input:(s:string) => void
}

export default function Person (props:PersonProps){


    function inputCallback(s:ChangeEvent<HTMLInputElement>){
        props.input(s.target.value)
    }

    return(
        <>
            <h1>{props.firstname}</h1>
            <h1>{props.lastname}</h1>
            <h1>{props.age}</h1>
            <input onChange={inputCallback}/>
        </>
    )
}
import './App.css'
import Person from "./Person.tsx";
import {useState} from "react";

function App() {

    const [exaxmple, setExample] = useState<string>("")

    const persons = [
        {
            firstname:"Max",
            lastname:"Mustermann",
            age:52
        },
        {
            firstname:"Helga",
            lastname:"Bauer",
            age:61
        },
        {
            firstname:"Unknown",
            lastname:"Unknown",
            age:22
        }
    ]



  return (
    <>
        <h1>{exaxmple}</h1>
        {persons.map((person) =>
        <Person firstname={person.firstname} lastname={person.lastname} age={person.age} input={setExample}/>)}

    </>
  )
}

export default App

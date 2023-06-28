import { useState, useContext } from "react";
import userContext from "./userContext";

const UserState = ({ children }) => {
    const [users, setUsers] = useState([])
        
    // const host = "../../../db";

    const getUsers = async () => {
        // const res = await fetch(`${host}/users.json`,{
        //     method: 'GET'
        // })
        // if(res.ok){
        //     const json = await res.json()
        //     setUsers(json);
        //     console.log("Users Updated");
        // }
        setUsers([
            {
                "fname": "Bhavanshu",
                "lname": "Dalwadi",
                "phone": "+917383537838",
                "email": "bhavanshu.programer@gmail.com",
                "gender": "Male",
                "dob": "08/11/2002"
            },
            {
                "fname": "Dhruv",
                "lname": "Dalwadi",
                "phone": "+918487843494",
                "email": "dhruvdalwadi4a@gmail.com",
                "gender": "Male",
                "dob": "29/10/1995"
            }
        ]);
    }

    

    const updateUser = (newUser) => {
        // console.log(newUser);
        setUsers([...users, JSON.parse(newUser)]);
    }

    // // Add a Note
    // const addNote = async (title, description, tag) => {
    //     // API Call
    //     setLoading(true)
    //     const res = await fetch(`${host}/api/notes/`,{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Auth-Token': token
    //         },
    //         body: JSON.stringify({title, description, tag})
    //     })
    //     const json = await res.json()
    //     if(res.ok){
    //         if(json._id){
    //             // setNotes(notes.concat(json)) //Add Note To End
    //             setNotes([json, ...notes]) //Add Note To Start
    //             setLoading(false)
    //             setSnakMsg('Note Added Successfully')
    //         }
    //     }else{
    //         setLoading(false)
    //         setError(json)
    //     }
    //     setLoading(false)
    // }
    // // Update a Note
    // const updateNote = async (title, description, tag) => {
    //     // API Call
    //     setLoading(true)
    //     const res = await fetch(`${host}/api/notes/${edit._id}`,{
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Auth-Token': token
    //         },
    //         body: JSON.stringify({title, description, tag})
    //     })
    //     const json = await res.json()
    //     if(res.ok){
    //         if(json._id === edit._id){
    //             setLoading(true)
    //             // Change on Client Side
    //             let newNotes = JSON.parse(JSON.stringify(notes))
    //             for(let i=0; i<notes.length; i++) {
    //                 if(notes[i]._id == edit._id){
    //                     newNotes[i].title = title
    //                     newNotes[i].description = description
    //                     newNotes[i].tag = tag?tag:'Genral'
    //                     break;
    //                 }
    //             }
    //             setNotes(newNotes)
    //             setLoading(false)
    //             setSnakMsg('Note Updated Successfully')
    //         }
    //     }else{
    //         setLoading(false)
    //         setError(json)
    //     }
    //     setLoading(false)
    // }
    // // Delete a Note
    // const deleteNote = async (id) => {
    //     // API Call
    //     setLoading(true)
    //     const res = await fetch(`${host}/api/notes/${id}`,{
    //         method: 'DELETE',
    //         headers: {
    //             'Auth-Token': token
    //         }
    //     })
    //     const json = await res.json()
    //     if(res.ok){
    //         if(json._id) {
    //             // Change on Client Side
    //             const newNotes = notes.filter((note) => note._id!==id)
    //             setNotes(newNotes)
    //             setLoading(false)
    //             setSnakMsg('Note Deleted Successfully')
    //         }
    //     }else{
    //         console.log(json)
    //         setLoading(false)
    //         setSnakMsg('Something Wants Wrong')
    //     }
    //     setLoading(false)
    // }

    return (
        <userContext.Provider value={{ users, getUsers, updateUser }}>
            { children }
        </userContext.Provider>
    );
};

export default UserState;

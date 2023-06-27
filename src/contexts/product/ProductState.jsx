import { useState, useContext } from "react";
import ProductContext from "./productContext";

const ProductState = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const host = "../../../db";

    const getProducts = async () => {
        setLoading(true)
        const res = await fetch(`${host}/products.json`,{
            method: 'GET'
        })
        if(res.ok){
            const json = await res.json()
            setProducts(json);
            console.log("Products Updated");
        }
        setLoading(false)
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
        <ProductContext.Provider value={{ products, setProducts, getProducts, loading }}>
            { children }
        </ProductContext.Provider>
    );
};

export default ProductState;

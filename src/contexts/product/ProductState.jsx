import { useState, useContext } from "react";
import ProductContext from "./productContext";

const ProductState = ({ children }) => {
    const [products, setProducts] = useState([
        {
            "id": "6305d4ece0683dca97dc5dca",
            "img": "amul-butter-500-g-carton.jpg",
            "name": "Amul Butter 500g (Carton)",
            "qty": 1,
            "product_type": "Combo",
            "qty_per_unit": 5,
            "single_product_type": "Carton",
            "qty_options": [
                {
                    "qty": 1,
                    "qty_per_unit": 10
                },
                {
                    "qty": 2,
                    "qty_per_unit": 10
                }
            ],
            "price": 1225.00,
            "mrp": 1300.00,
            "seller": "Pratham Dairy",
            "brand": "Amul",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "6305db8fe0683dca97dc5dd5",
            "img": "amul-pure-ghee-1-l-pouch.jpg",
            "name": "Amul Pure Ghee 1 L (Pouch)",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 10,
            "single_product_type": "Pouch",
            "price": 4890.00,
            "mrp": 5050.00,
            "seller": "Pratham Dairy",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "6305e515e0683dca97dc5de8",
            "img": "maggi-2-minute-masala-instant-noodles-560-g.jpg",
            "name": "Maggi 2-Minute Masala Instant Noodles 560g",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 36,
            "single_product_type": "Pack",
            "price": 3132.00,
            "mrp": 3780.00,
            "seller": "Shriji Maggi",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "631c2cefdaee871f90ddb8e2",
            "img": "super-sarvottam-physically-refined-100-rice-bran-oil-1-l.jpg",
            "name": "Super Sarvottam Physically Refined 100 Ricebran Oil 1L",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 10,
            "single_product_type": "Pack",
            "price": 1600.00,
            "mrp": 1990.00,
            "seller": "Arihant Oil",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "635d0b7d4d290dc7d370fc1b",
            "img": "surf-excel-easy-wash-detergent-powder-5-kg.jpg",
            "name": "Surf Excel Easy Wash Detergent Powder 5Kg",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 5,
            "single_product_type": "Pack",
            "price": 2585.00,
            "mrp": 3450.00,
            "seller": "Ravi Enterprise",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "63733e26965e615280786147",
            "img": "thumps-up-600-ml.jpg",
            "name": "Thumps Up 600 ml",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 20,
            "single_product_type": "Pack",
            "price": 600.00,
            "mrp": 760.00,
            "seller": "Subham Coca Cola",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "6305920eaa14761101b3cb3c",
            "img": "sprite-600-ml.jpg",
            "name": "Sprite 600 ml",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 20,
            "single_product_type": "Pack",
            "price": 600.00,
            "mrp": 760.00,
            "seller": "Subham Coca Cola",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "6305b30f90074238690ee3cf",
            "img": "amul-butter-500-g-carton.jpg",
            "name": "Amul Butter 500g (Carton)",
            "qty": 1,
            "product_type": "Combo",
            "qty_per_unit": 5,
            "single_product_type": "Carton",
            "price": 1225.00,
            "mrp": 1300.00,
            "seller": "Pratham Dairy",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "6305d4c6e0683dca97dc5dc7",
            "img": "amul-pure-ghee-1-l-pouch.jpg",
            "name": "Amul Pure Ghee 1 L (Pouch)",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 10,
            "single_product_type": "Pouch",
            "price": 4890.00,
            "mrp": 5050.00,
            "seller": "Pratham Dairy",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "6305db7de0683dca97dc5dce",
            "img": "maggi-2-minute-masala-instant-noodles-560-g.jpg",
            "name": "Maggi 2-Minute Masala Instant Noodles 560g",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 36,
            "single_product_type": "Pack",
            "price": 3132.00,
            "mrp": 3780.00,
            "seller": "Shriji Maggi",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "6305db8be0683dca97dc5dd2",
            "img": "super-sarvottam-physically-refined-100-rice-bran-oil-1-l.jpg",
            "name": "Super Sarvottam Physically Refined 100 Ricebran Oil 1L",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 10,
            "single_product_type": "Pack",
            "price": 1600.00,
            "mrp": 1990.00,
            "seller": "Arihant Oil",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
        {
            "id": "6305e50ce0683dca97dc5de5",
            "img": "surf-excel-easy-wash-detergent-powder-5-kg.jpg",
            "name": "Surf Excel Easy Wash Detergent Powder 5Kg",
            "qty": 1,
            "product_type": "Carton",
            "qty_per_unit": 5,
            "single_product_type": "Pack",
            "price": 2585.00,
            "mrp": 3450.00,
            "seller": "Ravi Enterprise",
            "manufacturer": {
                "name": "GCMMF Ltd.",
                "email": "customercare@amul.coop",
                "website": "www.amul.com",
                "country_of_origin": "India",
                "address": "Gujarat Co -Operative Milk Marketing Federation Ltd. Anand 388001, India.Kaira District Co -Op. Milk Producers' Union Ltd. Anand 388001, Gujarat, India Satellite Dairy Vill. Jibhaipura, P. O. Devkivansol, Mehmedabad 387130"
            }
        },
    ])
    const [loading, setLoading] = useState(false)

    const [edit, setEdit] = useState({
        _id: '',
        title: '',
        description: '',
        tag: ''
    })
    const [error, setError] = useState({
        error: '',
        emptyFields: [],
        invalidFields: []
    })

    // const getNotes = async () => {
    //     // API Call
    //     setLoading(true)
    //     const res = await fetch(`${host}/api/notes/`,{
    //         method: 'GET',
    //         headers: {
    //             'Auth-Token': token
    //         }
    //     })
    //     if(res.ok){
    //         const json = await res.json()
    //         setNotes(json)
    //     }
    //     setLoading(false)
    // } 

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
        <ProductContext.Provider value={{ products, setProducts }}>
            { children }
        </ProductContext.Provider>
    );
};

export default ProductState;

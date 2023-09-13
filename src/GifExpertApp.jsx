import { useState } from "react";
import { AddCategory } from "./components/AddCategory";



export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) =>{
    //    console.log(newCategory)
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={(event) => onAddCategory(event)}
            />

            {/* listado de Gif */}
                <button onClick={onAddCategory}>Agregar</button>
                <ol>
                    {
                    categories.map(category=> {
                        return <li key={category}> {category} </li>
                    
                     })
                    }
                </ol>


                {/* Gif Item */}


        </>
        )
}
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['one Punch','Dragon Ball']);
    
    const onAddCategory = () => {
        setCategories(['Valorant',...categories ])
    }
    return(
        <>
        {/*Titulo*/}
            <h1>GifExpertApp</h1>

        {/*input*/}    
        <AddCategory/>
        {/*Listado de Gif*/} 
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {
            categories.map(category  => {
                return <li key={category}>{category}</li>
            })}
            </ol>   
        {/*Gif item*/}   
        </>
    )
}
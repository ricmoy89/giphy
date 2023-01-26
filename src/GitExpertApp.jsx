import { useState } from "react"
import { AddCategory, GifGrid } from "./components"



export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball'])

    const agregar = () => {
    }

    const onAddCategory = (value) => {
        if (categories.includes(value)) {
            return
        }

        setCategories([value, ...categories])
    }

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onAddCategory={onAddCategory}
            />
            <button onClick={agregar}>Agregar</button>

            {categories.map((category, idx) =>
                <GifGrid
                    key={`${category}_${idx}`}
                    category={category}
                />
            )}
        </>
    )
}

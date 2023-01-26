import { useEffect, useState } from "react"
import { giphy } from "../helpers"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        setImages(await giphy(category))
    }

    useEffect(() => {
        getImages()
        setIsLoading(false)
    }, [])


    return {
        images,
        isLoading
    }


}

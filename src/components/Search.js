import { useState, useEffect } from 'react'
import colours from '../constants/colours'

import '../assets/styles/Search.css'

const Search = ({setBackground}) => {

    const [searchText, setSearchText] = useState(null)

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        if (colours.includes(searchText)) {
            setBackground(searchText)
        }

        if (!searchText) {
            setBackground('white')
        }
    }, [searchText])

    return (
        <>
            <input type="text" onChange={handleChange} placeholder="Search or jump to..."></input>
        </>
    )
}


export default Search
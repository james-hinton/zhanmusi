import { useState, useEffect } from 'react'
import colours from '../constants/colours'
import Dropdown from './Dropdown.js'

import poke from '../utils/pokeapi'

import '../assets/styles/Search.css'

const Search = ({setBackground, setpokeData}) => {

    const [searchText, setSearchText] = useState(null)
    const [showDropdown, setShowDropdown] = useState(false)


    
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    // Show dropdown
    useEffect(() => {
        if (searchText) setShowDropdown(true)
        else setShowDropdown(false)

        poke(searchText, setpokeData, setShowDropdown)

    }, [searchText])



    // Random thing to change background colour
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
            
            {showDropdown && (
                <Dropdown 
                    searchText={searchText}    
                />
            )}
        </>
    )
}


export default Search
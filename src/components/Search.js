import { useState, useEffect } from 'react'
import colours from '../constants/colours'
import Dropdown from './Dropdown.js'

import poke from '../utils/pokeapi'

import '../assets/styles/Search.css'

const Search = ({setBackground, setpokeData}) => {

    const [searchText, setSearchText] = useState(null)
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            setShowDropdown(false)
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);
    
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleFocus = ()=> {
        if (searchText) setShowDropdown(true)
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
            <input type="text" onFocus={handleFocus} onChange={handleChange} value={searchText && searchText} placeholder="Enter a pokemon..."></input>
            
            {showDropdown && (
                <Dropdown 
                    searchText={searchText}    
                    setSearchText={setSearchText}
                />
            )}
        </>
    )
}


export default Search
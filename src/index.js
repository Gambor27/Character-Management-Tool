import React from "react";
import './characterSheet.css'
import page1 from '../data/Page1.png'
import page2 from '../data/Page2.png'

const CharacterSheet = () => {
    return(
        <div className="character-sheet">
            <div className="page-container">
                <img src={page1} alt="Sheet" className="page-image" />
            </div>
        </div>
    )
}

export default CharacterSheet
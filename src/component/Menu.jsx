import React, { useState } from "react";
import styles from './Menu.module.css';

function Menu(props){

    const [selectedOption, setSelectedOption] = useState("cat");

    const getOption = (event) =>{
        setSelectedOption(event.target.id);
        props.onSelect(event.target.id);
    }

    return(
        <div className={styles.container}>
           {props.options.map((option) => 
           <div key={option} className={styles.options} >
            <input type="radio" id={option} onChange={getOption} checked={selectedOption === option} name="videoOption" /> 
            <label htmlFor={option} >{option}</label>
            </div>
            )} 
        </div>
    );
};

export default Menu;
import React from 'react'
import Card from './Card';
//import { robots } from '../robots';

const CardList = ({robots}) => {
    return (
        <div className="">
        { robots.map((user , i) => {
                    return ( <Card 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} /> )}
        )}
                    
        </div>
    )};

export default CardList;
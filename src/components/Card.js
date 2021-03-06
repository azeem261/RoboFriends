import React from 'react';

const Card = (props) => {
    const { id, name, email } = props;
    return (
        <div className="bg-light-green grow dib br3 pa3 ma2 bw2 shadow-5">
           <img src={`https://robohash.org/${id}?200x200`} alt="Robo" />
           <div>
               <h2>{name}</h2>
               <p>{email}</p>
           </div>
        </div>
    );
};

export default Card;
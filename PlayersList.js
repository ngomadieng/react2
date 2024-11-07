// src/PlayersList.js  
import React from 'react';  
import Player from './Play';  
import players from './player';  

const PlayersList = () => {  
    return (  
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>  
            {players.map((player, index) => (  
                <Player key={index} {...player} />  
            ))}  
        </div>  
    );  
};  

export default PlayersList;
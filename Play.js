// src/Player.js  
import React from 'react';  
import { Card } from 'react-bootstrap';  

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {  
    return (  
        <Card style={{ width: '18rem', margin: '10px' }}>  
            <Card.Img variant="top" src={imageUrl} />  
            <Card.Body>  
                <Card.Title>{name}</Card.Title>  
                <Card.Text>  
                    Équipe: {team}<br />  
                    Nationalité: {nationality}<br />  
                    Numéro de maillot: {jerseyNumber}<br />  
                    Âge: {age}  
                </Card.Text>  
            </Card.Body>  
        </Card>  
    );  
};  

// Valeurs par défaut pour les props  
Player.defaultProps = {  
    imageUrl: "https://via.placeholder.com/150",  
    age: 0,  
};  

export default Player;
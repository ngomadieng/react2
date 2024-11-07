// src/App.js  
import React from 'react';  
import PlayersList from './PlayersList';  
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
    return (  
        <div className="App">  
            <h1>Liste des Joueurs de Football</h1>  
            <PlayersList />  
        </div>  
    );  
}  

export default App;

import logo from './logo.svg';
import './App.css';
// import {Container, Card} from 'react-bootstrap'
import Card from './Card/Card.js';

function App() {
  return (
    <div className="App">
      <h2>
        <u>
          ...Would You Rather...
        </u>
      </h2>
      <div class='row'>
        <div class="column">
          <Card 
            title='Card Title'
            imgURL='https://cdn.ndtv.com/tech/images/gadgets/thumbs/pikachu_hi_pokemon_thumb.jpg'
            trait = 'happy'
            food='popcorn'
            song = 'Party in the USA'
            hero='superman'
          />
        </div>
        <div class="column">
          <Card 
            title='Card Title 2'
            imgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHuGltoqiUSh-zkD6KXnVTIBBsDNq6yR-AQ&usqp=CAU'
            trait = 'spicy'
            food='pasta'
            song='Sorry not Sorry'
            hero='batman'
          />
        </div>
        
      </div>      

    </div>
  );
}

export default App;

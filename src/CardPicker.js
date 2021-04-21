import { Component } from "react";
import './App.css';
import Card from './Card/Card';
import axios from 'axios';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // state for Left Card
            leftPokeName: "Pikachu",
            leftPokeSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            leftSpecialAbility: "heal",
            leftAnimeQuote: "I will never forget his name.",
            leftTaylorswft: "Why'd I have to break what I love so much?",
            leftKanyewst: "I'm going to personally see to it that Taylor Swift gets her masters back. Scooter is a close family friend",

            // state for Right Card
            rightPokeName: "Charmander",
            rightPokeSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            rightSpecialAbility: "fireball",
            rightAnimeQuote: "Step on him like he is an ant!",
            rightTaylorswft: "Life isn't how to survive the storm, it's about how to dance in the rain.",
            rightKanyewst: "Sometimes you have to get rid of everything",
            points: 0,
            mostPoints: 0,
            chosenPokemon: "none",
            winningPokemon: "none",
        };
    }

    randomPokemonID = () => {
        return (Math.floor(Math.random() * 898) + 1);
    }

    fetchLeftPokeData = async () => {
        let pokeID = this.randomPokemonID();
        try {
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
            let responseData = await response.data;
            // console.log(responseData);
            let pokemonName = await responseData.name;
            let pokemonSprite = await responseData.sprites.front_default;
            // console.log(pokemonName);
            // console.log(pokemonSprite);
            let capitalizedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
            // console.log(capitalizedPokemonName);

            this.setState({
                leftPokeName: capitalizedPokemonName,
                leftPokeSprite: pokemonSprite,
            });
        } catch (error) {
            console.log(error);
        }
    }

    fetchRightPokeData = async () => {
        let pokeID = this.randomPokemonID();
        try {
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
            let responseData = await response.data;
            // console.log(responseData);
            let pokemonName = await responseData.name;
            let pokemonSprite = await responseData.sprites.front_default;
            // console.log(pokemonName);
            // console.log(pokemonSprite);
            let capitalizedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
            // console.log(capitalizedPokemonName);

            this.setState({
                rightPokeName: capitalizedPokemonName,
                rightPokeSprite: pokemonSprite,
            });
        } catch (error) {
            console.log(error);
        }
    }

    randomSpellIndex = () => {
        return Math.floor(Math.random() * 318);
    }

    fetchLeftAbility = async () => {
        let randomSpellIndex = this.randomSpellIndex();
        console.log(randomSpellIndex);
        try {
            let response = await axios.get(`https://www.dnd5eapi.co/api/spells`);
            // console.log(response);
            let responseData = await response.data.results[randomSpellIndex];
            // console.log(responseData);
            let randomSpellName = await responseData.name;
            // console.log(randomSpellName);

            this.setState({
                leftSpecialAbility: randomSpellName,
            })
        } catch (error) {
            console.log(error);
        }
    }

    fetchRightAbility = async () => {
        let randomSpellIndex = this.randomSpellIndex();
        try {
            let response = await axios.get(`https://www.dnd5eapi.co/api/spells`);
            // console.log(response);
            let responseData = await response.data.results[randomSpellIndex];
            // console.log(responseData);
            let randomSpellName = await responseData.name;
            // console.log(randomSpellName);

            this.setState({
                rightSpecialAbility: randomSpellName,
            })
        } catch (error) {
            console.log(error);
        }
    }

    changePoints = (name) => {
        let newPoints = this.state.points + 1;
        //changes if different card is picked
        if (this.state.chosenPokemon != name) {
            newPoints = 1;
        }
        //handles changing winning pokemon
        if (this.state.mostPoints < newPoints) {
            this.setState({
                mostPoints: newPoints,
                winningPokemon: name,
            })
        }
        this.setState({
            points: newPoints,
            chosenPokemon: name,
        })
    }

    fetchLeftAnimeQuote = async () => {
        try {
            let response = await axios.get(`https://animechan.vercel.app/api/random`);
            // let responseData = await response.data.results[qu]
            let randomQuote = await response.data.quote;
            console.log(response);
            this.setState({
                leftAnimeQuote: randomQuote,
            })
        } catch (error) {
            console.log(error);
        }
    }

    fetchRightAnimeQuote = async () => {
        try {
            let response = await axios.get(`https://animechan.vercel.app/api/random`);
            // console.log(response);
            let randomQuote = await response.data.quote;
            this.setState({
                rightAnimeQuote: randomQuote,
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChangeLeftCard = () => {
        this.changePoints(this.state.rightPokeName);
        this.fetchLeftPokeData();
        this.fetchLeftAbility();
        this.fetchLeftAnimeQuote();
        this.fetchLeftTaylorswft();
        this.fetchLeftKanyewst();
    }

    handleChangeRightCard = () => {
        this.changePoints(this.state.leftPokeName);
        this.fetchRightPokeData();
        this.fetchRightAbility();
        this.fetchRightAnimeQuote();
        this.fetchRightTaylorswft();
        this.fetchRightKanyewst();  
    }

    fetchLeftKanyewst = async () => {
        try {
            let response = await axios.get(`https://api.kanye.rest/`);
            let randomQuoteswft = await response.data.quote;
            this.setState({
                leftKanyewst: randomQuoteswft,
            });
        } catch (error) {
            console.log(error);
        }
    }

    fetchRightKanyewst = async () => {
        try {
            let response = await axios.get(`https://api.kanye.rest/`);
            let randomQuoteswft = await response.data.quote;
            this.setState({
                rightKanyewst: randomQuoteswft,
            });
        } catch (error) {
            console.log(error);
        }
    }

    fetchLeftTaylorswft = async () => {
        try {
            let response = await axios.get(`https://api.taylor.rest/`);
            let randomQuoteswft = await response.data.quote;
            this.setState({
                leftTaylorswft: randomQuoteswft,
            });
        } catch (error) {
            console.log(error);
        }
    }

    fetchRightTaylorswft = async () => {
        try {
            let response = await axios.get(`https://api.taylor.rest/`);
            let randomQuoteswft = await response.data.quote;
            this.setState({
                rightTaylorswft: randomQuoteswft,
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="App">
                <h2>
                    <u>
                    ...Would You Rather...
                    </u>
                </h2>
                <div className='pointcontainer'>
                    <p className="point">Points for {this.state.chosenPokemon}: {this.state.points} </p>
                    <p className="point">Winning pokemon: {this.state.winningPokemon} with {this.state.mostPoints} points</p>
                </div>
                <div className='row'>
                    <div className="column">
                        <Card 
                            title={this.state.leftPokeName}
                            imgURL={this.state.leftPokeSprite}
                            ability={this.state.leftSpecialAbility}
                            quote ={this.state.leftAnimeQuote}
                            taylorswft = {this.state.leftTaylorswft} 
                            kanyewst = {this.state.leftKanyewst}
                            handleChangeCard={this.handleChangeCard}

                        />
                        <button className="btn" type="button" onClick={this.handleChangeRightCard}>
                            I want this one!
                        </button>
                    </div>

                    <div className="column">
                        <Card 
                            title={this.state.rightPokeName}
                            imgURL={this.state.rightPokeSprite}
                            ability={this.state.rightSpecialAbility}
                            quote ={this.state.rightAnimeQuote}
                            taylorswft = {this.state.rightTaylorswft}
                            kanyewst = {this.state.rightKanyewst}
                            handleChangeCard={this.handleChangeCard}
                        />
                        <button className="btn" type="button" onClick={this.handleChangeLeftCard}>
                            I want this one!
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default MainPage;
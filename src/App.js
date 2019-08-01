import React from 'react';
import CharacterCard from './components/cards/CharacterCard'
import StrengthCard from './components/cards/StrengthCard'
import WeaknessCard from './components/cards/WeaknessCard'
import LocationCard from './components/cards/LocationCard'
import ScenarioCard from './components/cards/ScenarioCard'
import Nav from './components/Nav'
import { characters, human, subhuman, superhuman, strengths, weaknesses, locations, scenarios } from './data'
import { ToggleButton, ButtonGroup } from 'react-bootstrap'

class App extends React.Component {
  state = {
    C1backText: '',
    S1backText: '',
    W1backText: '',
    C2backText: '',
    S2backText: '',
    W2backText: '',
    LbackText: '',
    SbackText: '',
    characters: []
  }

  handleRadioChange = (e) => {
    if(e.target.value === "1"){
      this.setState({ characters: [...human, ...subhuman, ...superhuman] })
    } else if(e.target.value === "2"){
      this.setState({ characters: human })
    } else if(e.target.value === "3"){
      this.setState({ characters: subhuman })
    } else if(e.target.value === "4"){
      this.setState({ characters: superhuman })
    }
  }

  handleBackText = (type) => {
    switch(type){
      case "C1":
        this.setState({ C1backText: this.state.characters[Math.floor(Math.random() * this.state.characters.length)] })
        break;
      case "S1":
          this.setState({ S1backText: strengths[Math.floor(Math.random() * strengths.length)] })
          break;
      case "W1":
          this.setState({ W1backText: weaknesses[Math.floor(Math.random() * weaknesses.length)] })
          break;
      case "C2":
          this.setState({ C2backText: this.state.characters[Math.floor(Math.random() * this.state.characters.length)] })
          break;
      case "S2":
          this.setState({ S2backText: strengths[Math.floor(Math.random() * strengths.length)] })
          break;
      case "W2":
          this.setState({ W2backText: weaknesses[Math.floor(Math.random() * weaknesses.length)] })
          break;
      case "L":
          this.setState({ LbackText: locations[Math.floor(Math.random() * locations.length)] })
          break;
      case "S":
          this.setState({ SbackText: scenarios[Math.floor(Math.random() * scenarios.length)] })
          break;
      default:
        break;
    }
  }


  render(){
    console.log(this.state.characters)

    return (
      <>
        <div className="nav" style={{margin: '0 auto'}}>
          <Nav handleRefresh={this.handleRefresh} />
        </div>
        <div className="d-flex flex-column radios">
          <ButtonGroup toggle className="mt-3">
            <ToggleButton className="mx-2 radio" onClick={this.handleRadioChange} type="radio" name="radio" defaultChecked value="1">
              All
            </ToggleButton>
            <ToggleButton className="mx-2 radio" onClick={this.handleRadioChange} type="radio" name="radio" value="2">
              Human
            </ToggleButton>
            <ToggleButton className="mx-2 radio" onClick={this.handleRadioChange} type="radio" name="radio" value="3">
              Subhuman
            </ToggleButton>
            <ToggleButton className="mx-2 radio" onClick={this.handleRadioChange} type="radio" name="radio" value="4">
              Superhuman
            </ToggleButton>
          </ButtonGroup>
        </div>
        <div className="App">
          <div className="row card-row"> 
            <CharacterCard type="C1" handleBackText={this.handleBackText} backText={this.state.C1backText} />
            <StrengthCard  type="S1" handleBackText={this.handleBackText} backText={this.state.S1backText} />
            <WeaknessCard  type="W1" handleBackText={this.handleBackText} backText={this.state.W1backText} />
            <LocationCard  type="L" handleBackText={this.handleBackText} backText={this.state.LbackText} />
          </div>
          <hr></hr>
          <div className="row card-row"> 
            <CharacterCard type="C2" handleBackText={this.handleBackText} backText={this.state.C2backText} />
            <StrengthCard type="S2" handleBackText={this.handleBackText} backText={this.state.S2backText} />
            <WeaknessCard type="W2" handleBackText={this.handleBackText} backText={this.state.W2backText} />
            <ScenarioCard type="S" handleBackText={this.handleBackText} backText={this.state.SbackText} />
          </div>
        </div>
      </>
    );

  }
}

export default App;

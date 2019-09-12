import React from 'react';
import {Container,Button,Segment} from 'semantic-ui-react';



class App extends React.Component{
  state = {};

  render() {
    return (
      <Container style={{margin: "25px"}}>   
        <Header as="h1" style={{textAlign: "center"}} >Rock, Paper, Scissors</Header>
        <Checkbox onClick={this.toggleCheckBox} toggle/>


        <div>
          Computer : Two Player
        </div>
        <hr />
        <br />


        <Header as="h3">{this.state.twoPlay ? "Second Player's Choice. " : ""}What will you throw?</Header> 
        <br />

        <Choices 
          choices={this.state.options}
          userChoiceFunc={this.userChoiceFunc}
          twoPlay={this.state.twoPlay}
          secondUserChoiceFunc={this.secondUserChoiceFunc}
        />
        <br />




      
        <div> 
          {this.state.twoPlayer ? "Player One " : "You"} threw { this.state.twoPlay ? "" : this.twoPlayerSecret()}
        </div>


        <div>
          {this.state.twoPlayer ? "Player Two " : "Comp"} threw {this.state.options.map( option => 
              { if (option.id === this.state.compChoice)
              return (option.name)
            }
          )}
        </div>
        



        {this.state.twoPlayer ? this.displyWinComp() : this.displayWinTwo() } 





          

      </Container>
    )
  }
}

export default App;

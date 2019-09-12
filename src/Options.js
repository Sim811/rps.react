import React from "react";
import { Card, Grid } from "semantic-ui-react";


const Options = (props) => {

  return (
    <Grid columns={3} >
    <Grid.Row >
      {props.choices.map( option => (
        <Grid.Column key={option.id}>
          <Card /> 
        </Grid.Column>
      ))} 
    </Grid.Row>
  </Grid>

  )
}

export default Options;
import React from 'react'
import { connect } from 'react-redux';
import { Grid, Image, Button, Header } from 'semantic-ui-react'
// Remove into redux
import adapter from '../adapter.js'
const memoryEndpoint = "http://localhost:3000/api/v1/memories"
const memoryAdapter = adapter(memoryEndpoint)

export default class Memories extends React.Component {
    state = {
        memories: []
    }

    getMemories = async () => {
        const memoriesFromApi = await memoryAdapter.getAll()
        this.setState({memories: memoriesFromApi}, () => console.log("state:", this.state))
    };

    componentDidMount() {
        this.getMemories()
    }


    // const mapStateToProps = state => {
    //     return {
    //         items: state.items
    //     };
    // };
     
    // const mapDispatchToProps = dispatch => {
    //     return {
    //         increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
    //     };
    // };

    render() {
        return(
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
      <Header as='h1' color='blue' textAlign='center'>
          YOU ARE IN YOUR MEMORIES
        </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' fluid size='large'>
              ADD A NEW MEMORY
            </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header color='teal' size='huge'>
              Memories
            </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      {/* Fetch memories, put them in a container in this bottom grid... */}
      {/* First thing is first - fetch them and put them in state here... then get into redux */}
{/* Memory list here */}
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
}
}

// export default connect(mapStateToProps, mapDispatchToProps)(Memories);
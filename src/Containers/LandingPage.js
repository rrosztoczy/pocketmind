import React from 'react'
import { Grid, Image, Button, Header } from 'semantic-ui-react'
import '../index.css';

const LandingPage = () => (
  <>
  <div class="sky" height='200px'>
  <div class="cloudtwo" />
  </div>
  <Grid padded relaxed stackable>
      <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header size='huge' color='blue' textAlign='center'>
          pocket mind
        </Header>
        <Header size='medium' color='blue' textAlign='center'>
          keep your head in the cloud
        </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1} divided>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' size='massive' circular>
              SIGN UP FOR FREE
            </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Button color='teal' size='massive' circular>
              GET THE APP NOW
            </Button>
      </Grid.Column>
    </Grid.Row>


    <Grid.Row columns={1} divided>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>
      <div className="bg">
  <div className="mountain">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="mountain-two">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
   <div className="mountain-three">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="cloud"></div>
</div>
</>
)

export default LandingPage
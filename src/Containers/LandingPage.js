import React from 'react'
import { Grid, Image, Button, Header } from 'semantic-ui-react'
import '../index.css';

const LandingPage = () => (
  <>
  <div class="sky"/>
  <div class="skytwo">
  <div class="cloudtwo" />
  </div>
  <div className="cloudthree"></div>
  <div class="skyfour"/>
  <div class="spacing"/>
  <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Row centered>
      <Image style={{width: '200px', height: '200px'}} src='Pocket-White.png'/>
      </Grid.Row>
      </Grid>
  <Grid padded relaxed stackable>
      <Grid.Row columns={1}>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column>
      <Header size='huge' color='blue' textAlign='center'>
          POCKET MIND
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
</div>
</>
)

export default LandingPage
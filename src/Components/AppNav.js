import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class AppNav extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  state = { activeItem: 'login' }

  render() {
  const { activeItem } = this.state

  return (
      <div>
        <Menu pointing secondary>
        <Image src={require('../pmlogo.jpeg')} as='a' href='/landing-page' style={{width: '50px', height: 'auto', margin: '10px'}} floated="left" circular/>
          <Menu.Item as={NavLink} name='HOME' to='/home' active={activeItem === 'HOME'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='MEMORIES' to='/profile' active={activeItem === 'MEMORIES'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='THOUGHTS' to='/thoughts' active={activeItem === 'THOUGHTS'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='ACTIVITIES' to='/activities' active={activeItem === 'ACTIVITIES'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='EMOTIONS' to='/emotions' active={activeItem === 'EMOTIONS'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='TIMELINE' to='/timeline' active={activeItem === 'TIMELINE'} onClick={this.handleItemClick} />
          {/* <Menu.Item as={NavLink} name='LEFT BRAIN' to='/left-brain' active={activeItem === 'LEFT BRAIN'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='RIGHT BRAIN' to='/right-brain' active={activeItem === 'RIGHT BRAIN'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='TOOLS' to='/tools' active={activeItem === 'TOOLS'} onClick={this.handleItemClick} /> */}
          <Menu.Menu position='right'>
          {/* <Menu.Item as={NavLink} name='ACCOUNT SETTINGS' to='/account-settings' active={activeItem === 'Account Settings'} onClick={this.handleItemClick} /> */}
          <Menu.Item            
            name='LOGOUT'
            active={activeItem === 'LOGOUT'}
            onClick={this.props.handleLogout} 
            />
          </Menu.Menu>
        </Menu>
      </div>
)
}
}
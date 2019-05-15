import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class AppNav extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  state = { activeItem: 'login' }

  render() {
  const { activeItem } = this.state

  return (
      <div>
        <Menu pointing secondary>
          <Menu.Item as={NavLink} name='Home' to='/home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='Memories' to='/memories' active={activeItem === 'Memories'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='Left Brain' to='/left-brain' active={activeItem === 'Left Brain'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='Right Brain' to='/right-brain' active={activeItem === 'Right Brain'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='Tools' to='/tools' active={activeItem === 'Tools'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          <Menu.Item as={NavLink} name='Account Settings' to='/account-settings' active={activeItem === 'Account Settings'} onClick={this.handleItemClick} />
          <Menu.Item            
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.props.handleLogout} 
            />
          </Menu.Menu>
        </Menu>
      </div>
)
}
}
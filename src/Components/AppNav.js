import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class AppNav extends Component {

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   state = { activeItem: 'login' }

  render() {
//   const { activeItem } = this.state

  return (
      <div>
        <Menu pointing secondary>
          <Menu.Item as={NavLink} name='Home' to='/Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='Memories' to='/Memories' active={activeItem === 'Memories'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='LeftBrain' to='/LeftBrain' active={activeItem === 'LeftBrain'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='RightBrain' to='/RightBrain' active={activeItem === 'RightBrain'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='Tools' to='/Tools' active={activeItem === 'Tools'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          <Menu.Item as={NavLink} name='account settings' to='/account-settings' active={activeItem === 'account settings'} onClick={this.handleItemClick} />
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
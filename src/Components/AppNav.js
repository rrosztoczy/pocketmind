import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { updateThoughtSelection, updateActivitySelection } from '../actions'

class AppNav extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleThoughtMenuClick = (e, { name }) => {
    this.props.updateThoughtSelection({target: {value: 'journal'}})
    this.handleItemClick(e, { name })
  }

  handleActivityMenuClick = (e, { name }) => {
    this.props.updateActivitySelection({target: {value: 'work'}})
    this.handleItemClick(e, { name })
  }

  state = { activeItem: 'login' }

  render() {
  const { activeItem } = this.state

  return (
      <div>
        <Menu pointing secondary>
        <Image style={{width: '40px', height: '40px'}} src='Pocket-White.png'/>
        <Menu.Item  />
          <Menu.Item as={NavLink} name='HOME' to='/home' active={activeItem === 'HOME'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='TIMELINE' to='/timeline' active={activeItem === 'TIMELINE'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='MEMORIES' to='/memories' active={activeItem === 'MEMORIES'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='THOUGHTS' to='/thoughts' active={activeItem === 'THOUGHTS'} onClick={this.handleThoughtMenuClick} />
          <Menu.Item as={NavLink} name='ACTIVITIES' to='/activities' active={activeItem === 'ACTIVITIES'} onClick={this.handleActivityMenuClick} />
          <Menu.Item as={NavLink} name='EMOTIONS' to='/emotions' active={activeItem === 'EMOTIONS'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
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

export default connect(null, { updateThoughtSelection, updateActivitySelection })(AppNav)
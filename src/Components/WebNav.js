import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class WebNav extends Component {

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  state = { activeItem: 'login' }

  render() {
  const { activeItem } = this.state

  return (
      <div>
        <Menu pointing secondary>
          {/* Put logo here */}
          <Menu.Menu position='right'>
          <Menu.Item as={NavLink} name='Pocket Mind' to='/landing-page' active={activeItem === 'Pocket Mind'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='About' to='/about' active={activeItem === 'About'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='Blog' to='/blog' active={activeItem === 'Blog'} onClick={this.handleItemClick} />
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
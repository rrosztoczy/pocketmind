import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class WebNav extends Component {

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  state = { activeItem: 'login' }

  render() {
  const { activeItem } = this.state

  return (
      <div>
        <Menu pointing secondary>
          <Image src={require('../pmlogo.jpeg')} as='a' href='/landing-page' style={{width: '50px', height: 'auto', margin: '10px'}} floated="left" circular/>

          <Menu.Menu position='right'>
          <Menu.Item as={NavLink} name='POCKET MIND' to='/landing-page' active={activeItem === 'POCKET MIND'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='ABOUT' to='/about' active={activeItem === 'ABOUT'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='BLOG' to='/blog' active={activeItem === 'BLOG'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='LOG IN' to='/login' active={activeItem === 'LOG IN'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} name='SIGN UP FREE' to='/signup' active={activeItem === 'SIGN UP FREE'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
)
}
}
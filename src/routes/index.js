import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import {
  Menu,
  Sidebar,
  Icon
} from 'semantic-ui-react'

import GuestRoute from './GuestRouter/GuestRoute'
import AuthRoute from './AuthRouter/AuthRoute'
import Navbar from '../components/Navbar'
import Home from '../containers/Home'
import HomePage from '../containers/HomePage'

export class Routes extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
  }
  handleVisible = () => {
    this.setState({ visible: !this.state.visible })
  }
  render() {
    const { location, match, history } = this.props
    const { visible } = this.state
    //  let email, role
    return (
      <div>
        <Sidebar.Pushable style={{ minHeight: window.innerHeight }}>
          <Sidebar as={Menu} animation='push' visible={visible} width='wide' icon='labeled' vertical inverted>
            <Menu.Item header>
              <p>
                <Icon name='user'/>
                {/* TODO: poner email role */}
              </p>
            </Menu.Item>
            <Menu.Item as={Link} to='/' name='home' onClick={this.handleVisible}>
              <Icon name='home'/>
                Home
            </Menu.Item> 
          </Sidebar>
          <Sidebar.Pusher>
            <Navbar visible={visible} handleVisible={this.handleVisible} />
            <GuestRoute location={location} exact path='/' component={Home} />
            <AuthRoute location={location} exact path='/HomePage' component={HomePage} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Routes

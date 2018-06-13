import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeItem: 'home',
            visible: false,
        }
    }
    handleItemClick = (e, { name }) => {
        if(e.target.text === 'Logout'){
            this.props.logout()
        }
        else{
            this.setState({activeItem: name})
        }
    }
    toggleVisibility = () => {
        this.setState({visible: !this.state.visible});
        this.props.sidePusher(!this.props.visible)
    }
    render(){
        const { isAuthenticated } = this.props
				const { activeItem } = this.state
        const { handleVisible } = this.props
        return(
            <div>
              <Menu>
                <Menu.Item
                    position='left'
                    active={activeItem === 'Menu'}
                    onClick={handleVisible}
                    icon='bars'
                />
                {isAuthenticated ? 
                    <Menu.Item 
                        name='Logout'
                        position='right'
                        active={activeItem === 'Logout'}
                        onClick={this.handleItemClick}
                            />
                    :
                    <Menu.Item
                        as={Link}
                        to='/signin'
                        position='right'
                        color='blue'
                        name='Signin'
                        active={activeItem === 'Signin'}
                        onClick={this.handleItemClick} />
                    }
              </Menu>
            </div>
        )
    }
}

Navbar.propTypes = {
	visible: PropTypes.bool.isRequired,
	handleVisible: PropTypes.func.isRequired
}

export default Navbar


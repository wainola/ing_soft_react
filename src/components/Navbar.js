import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../actions/index'

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeItem: 'home',
            visible: false,
        }
    }
    handleItemClick = (e, { name }) => {
        console.log('e.target.text', e.target.text)
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
                        name='Cerrar Sesión'
                        position='right'
                        active={activeItem === 'Logout'}
                        onClick={this.handleItemClick}
                            />
                    :
                    <Menu.Item
                        as={Link}
                        to='/'
                        position='right'
                        color='blue'
                        name='Cerrar Sesión'
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

function mapStateToProps({ auth }){
    return { auth }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


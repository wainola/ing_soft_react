import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Grid,
  Responsive,
  Container,
  Header,
  Form,
  Button
} from 'semantic-ui-react'

import { login } from '../../actions/index'

class AlumnoForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggged: false
    }
  }
  onSubmitAlumno = e => {
    e.preventDefault()
    const alumno = e.target[0].value
    const password = e.target[1].value
    console.log('submit alumno', alumno, password)
    this.props.login({alumno, password})
    this.setState({ logged: true})
  }
  render() {
    console.log('this.props.Alumno', this.props)
    if(this.state.logged){
      this.props.history.push('/HomePage')
    }
    return (
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2'>Ingreso Alumno</Header>
                <Form onSubmit={this.onSubmitAlumno}>
                  <Form.Field>
                    <label>Alumno</label>
                    <input type="text" placeholder='alumno'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Clave</label>
                    <input type="password" placeholder='clave'/>
                  </Form.Field>
                  <Form.Field>
                    <Button color='red' inverted>Ingresar</Button>
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AlumnoForm)

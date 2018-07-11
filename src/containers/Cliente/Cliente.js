import React, { Component } from 'react'
import {
  Grid,
  Responsive,
  Container,
  Header,
  Form,
  Button
} from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../actions/index'

export class Cliente extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged: false
    }
  }
  onSubmit = e => {
    e.preventDefault()
    const alumno = e.target[0].value
    const password = e.target[1].value
    this.props.login({alumno, password})
    this.setState({ logged: true })
  }
  render() {
    if(this.state.logged){
      this.props.history.push('/HomePage')
    }
    return (
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2'>Ingreso Cliente</Header>
                <Form onSubmit={this.onSubmit}>
                  <Form.Field>
                    <label>Cliente</label>
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

function mapStateToProps({auth}){
  return { auth }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({login}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cliente)

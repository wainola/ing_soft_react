import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withSwalInstance } from 'sweetalert2-react'
import swal from 'sweetalert2'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPayments, logout } from '../actions/index'
import {
  Grid,
  Responsive,
  Container,
  Form,
  Header,
  Segment,
  Button,
  Message,
  Icon
} from 'semantic-ui-react'
import * as lodash from 'lodash'

import GetStudents from './GetStudents'
import MyPayments from './MyPayments'

const SweetAlert = withSwalInstance(swal)

export class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      countLogged: 0
    }
  }
  onSubmitHomePage = e => {
    e.preventDefault()
    this.setState({
      show: !this.state.show
    })
  }
  closeSwal = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const role = !lodash.isUndefined(this.props.auth.role) ? this.props.auth.role : 'NO_ROLE'
    return (
      <Responsive>
        <Container>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Segment raised>
                  <Header as='h3'>Ingreso de Pagos</Header>
                  <Link to='/'>Logout</Link>
                  <Form onSubmit={this.onSubmitHomePage}>
                    <Form.Field>
                      <label>Fecha de Pago</label>
                      <input type="text" placeholder='dd/mm/yyyy'/>
                    </Form.Field>
                    <Form.Field>
                      <label>Monto</label>
                      <input type="text" placeholder='monto en pesos'/>
                    </Form.Field>
                    <Form.Field>
                      <label>Descripción</label>
                      <input type="text" placeholder='descripcion'/>
                    </Form.Field>
                    <Form.Field>
                      <Button color='blue' inverted>Generar Pago</Button>
                    </Form.Field>
                  </Form>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                { role === 'STUDENT' ? <MyPayments /> : <div></div>}
                  <SweetAlert
                      show={this.state.show}
                      title={'Éxito al generar pago'}
                      onConfirm={() => { this.closeSwal() }}
                      type={'success'}
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    )
  }
}

function mapStateToProps({pago, auth}){
  return { pago, auth }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getPayments, logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

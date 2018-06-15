import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withSwalInstance } from 'sweetalert2-react'
import swal from 'sweetalert2'
import {
  Grid,
  Responsive,
  Container,
  Form,
  Header,
  Segment,
  Button
} from 'semantic-ui-react'

const SweetAlert = withSwalInstance(swal)

export class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false
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

export default HomePage

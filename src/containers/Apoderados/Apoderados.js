import React, { Component } from 'react'
import {
  Grid,
  Responsive,
  Container,
  Header,
  Form,
  Button
} from 'semantic-ui-react'

export class ApoderadoForm extends Component {
  render() {
    return (
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2'>Ingreso Apoderado</Header>
                <Form>
                  <Form.Field>
                    <label>Apoderado</label>
                    <input type="text" placeholder='apoderado'/>
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

export default ApoderadoForm

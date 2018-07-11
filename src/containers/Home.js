import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Responsive,
  Container,
  Grid,
  Segment,
  Tab,
  Image
} from 'semantic-ui-react'

import Alumno from './Alumno/Alumno'
import Apoderados from './Apoderados/Apoderados'
import Cliente from './Cliente/Cliente'

import imagen from '../assets/adult-book-business.jpg'

export class Home extends Component {
  render() {
    const panes = [
      {
        menuItem: 'Cliente', render: () => <Tab.Pane><Cliente {...this.props}  /></Tab.Pane>
      },
      {
        menuItem: 'Ejecutivo', render: () => <Tab.Pane><Cliente /></Tab.Pane>
      }
    ]
    return (
      <Responsive>
        <Container>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Segment basic>
                  <Image src={imagen} />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Tab panes={panes}/>
                </Segment>
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
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

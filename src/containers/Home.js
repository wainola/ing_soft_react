import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Responsive,
  Container,
  Grid,
  Segment,
  Tab
} from 'semantic-ui-react'


const panes = [
  {
    menuItem: 'Alumnos', render: () => <Tab.Pane>Alumno</Tab.Pane>
  },
  {
    menuItem: 'Apoderados', render: () => <Tab.Pane>Apoderados</Tab.Pane>
  },
  {
    menuItem: 'Ejecutivo', render: () => <Tab.Pane>Ejecutivo</Tab.Pane>
  }
]

export class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Segment basic>
                  Image
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  Login
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

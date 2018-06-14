import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Responsive,
  Container,
  Grid
} from 'semantic-ui-react'

export class Home extends Component {
  render() {
    return (
      <Responsive>
        <Container>
          <Grid>
            <Grid.Column>
              <Grid.Row>
                Image
              </Grid.Row>
              <Grid.Row>
                Login
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
      </Responsive>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Home)

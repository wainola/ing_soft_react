import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Responsive,
  Container,
  Grid,
  Segment
} from 'semantic-ui-react'

export class Home extends Component {
  render() {
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

export default connect(mapStateToProps)(Home)

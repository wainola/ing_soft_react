import React, { Component } from 'react'
import { Segment, Container, Grid, Responsive } from 'semantic-ui-react'
import {
  Line,
  Bar,
  Doughnut
} from 'react-chartjs-2'
import { data } from './data'

const dataBar = {
  labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
  datasets: [{
    label: 'Cursos/Ventas',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

const dona = {
  labels: [
    'Particulares',
    'Particular Subvencionado',
    'Municipales'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

export class Metricas extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Segment raised>
                  <Line data={data} />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                 <Bar
                data={dataBar}
                width={100}
                height={500}
                options={{
                  maintainAspectRatio: false
                }}
                />
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment raised>
                  <Doughnut data={dona} />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    )
  }
}

export default Metricas

import React, { Component } from 'react'
import { Grid, Responsive, Card, Image, Icon, Segment, Form, Button, Container } from 'semantic-ui-react'
import personImagen from '../../person.png'
import { setAlumno, getAlumnos } from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withSwalInstance } from 'sweetalert2-react'
import swal from 'sweetalert2'

const SweetAlert = withSwalInstance(swal)

export class ShowAlumno extends Component {
  constructor(props){
    super(props)
    this.state = {
      alumno: {},
      show: false
    }
  }
  componentWillMount(){
    this.props.getAlumnos()
  }
  onChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      alumno:{
        ...this.state.alumno,
        [e.target.name]: e.target.value
      }
    })
  }
  onSubmit = e => {
    e.preventDefault()
    this.setState({
      show: !this.state.show
    })
    const body = this.state.alumno
    this.props.setAlumno(body)
    document.forms[0].reset()
  }
  closeSwal = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    console.log('this.props', this.props)
    const firstAlumno = this.props.alumno.students[0]
    console.log('firstAlumbo', firstAlumno)
    return (
      <Responsive>
        <Container>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment basic>
                <Card centered>
                  <Image fluid src={personImagen} />
                  <Card.Content>
                    <Card.Header>{firstAlumno.nombre_alumno} {firstAlumno.apellido_alumno}</Card.Header>
                    <Card.Meta>
                      <span className='date'>Registrado en marzo del 2018</span>
                    </Card.Meta>
                    <Card.Description>Email: {firstAlumno.correo_alumno}.</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      31 compañeros
                    </a>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
                <Form onSubmit={this.onSubmit}>
                  <Form.Field>
                    <Form.Input fluid label='Nombre Alumno' placeholder='' name='nombre_alumno' onChange={this.onChange}/>
                  </Form.Field>
                  <Form.Field>
                    <Form.Input fluid label='Apellido Alumno' placeholder='' name='apellido_alumno' onChange={this.onChange}/>
                  </Form.Field>
                  <Form.Field>
                    <Form.Input fluid label='Correo alumno' placeholder='' name='correo_alumno' onChange={this.onChange}/>
                  </Form.Field>
                  <Form.Field>
                    <Button inverted color='green'>Guardar Datos</Button>
                  </Form.Field>
                </Form>
                <SweetAlert
                      show={this.state.show}
                      title={'Éxito al cambiar los datos'}
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

function mapStateToProps({ alumno }){
  return { alumno }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setAlumno, getAlumnos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAlumno)

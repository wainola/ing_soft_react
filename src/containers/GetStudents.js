import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAlumnos } from '../actions/index'
import { Table, Header } from 'semantic-ui-react'

export class GetStudents extends Component {
  componentWillMount(){
    this.props.getAlumnos()
  }
  render() {
    return (
      <div>
        <Header as='h3'>Alumnos registrados</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Rut Alumno</Table.HeaderCell>
              <Table.HeaderCell>Nombre</Table.HeaderCell>
              <Table.HeaderCell>Correo</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.alumno.students !== undefined ? 
              this.props.alumno.students.map(item => 
                <Table.Row key={item.cod_cliente}>
                  <Table.Cell>
                    {item.rut_alumno}
                  </Table.Cell>
                  <Table.Cell>
                    {item.nombre_alumno} {item.apellido_alumno}
                  </Table.Cell>
                  <Table.Cell>
                    {item.correo_alumno}
                  </Table.Cell>
                </Table.Row>
              )
              :
              <div>No hay alumnos</div>
            }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

function mapStateToProps({ alumno }){
  return { alumno }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getAlumnos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GetStudents)

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMyPayments } from '../actions/index'
import {
  Table,
  Header
} from 'semantic-ui-react'
 
export class MyPayments extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    this.props.getMyPayments()
  }
  render() {
    return (
      <div>
        <Header as='h3'>Sus pagos</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id Transaccion</Table.HeaderCell>
              <Table.HeaderCell>Rut Alumno</Table.HeaderCell>
              <Table.HeaderCell>Monto Pagado</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.payments.myPayments !== undefined ? 
              this.props.payments.myPayments.map(item => 
            <Table.Row key={item.cod_contrato}>
              <Table.Cell>
                {item.id_pago}
              </Table.Cell>
              <Table.Cell>
                {item.rut_alumno}
              </Table.Cell>
              <Table.Cell>
                {item.monto_pagado}
              </Table.Cell>
            </Table.Row>
            )
            :
            <div>No hay pagos</div>
            }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

function mapStateToProps({ payments }){
  return { payments }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getMyPayments}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPayments)

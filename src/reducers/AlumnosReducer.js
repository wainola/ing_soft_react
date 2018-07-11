import {
    CREATE_STUDENT,
    GET_STUDENTS
} from '../actions/types'

import uuid from 'uuid'

const initialState = {
    students: [
        {
            rut_alumno: '11.111.111-1',
            nombre_alumno: 'Juan',
            apellido_alumno: 'Perez',
            correo_alumno: 'juan@mail.com',
            rut_apoderado: '1.111.111-1',
            cod_cliente: uuid.v1()
        },
        {
            rut_alumno: '22.222.222-2',
            nombre_alumno: 'Pedro',
            apellido_alumno: 'Perez',
            correo_alumno: 'pedro@mail.com',
            rut_apoderado: '2.222.222-2',
            cod_cliente: uuid.v1()
        },
        {
            rut_alumno: '33.333.333-3',
            nombre_alumno: 'Tomás',
            correo_alumno: 'González',
            rut_apoderado: '3.333.333-3',
            cod_cliente: uuid.v1()
        }
    ]
}

export default function(state=initialState, action){
    switch(action.type){
        case CREATE_STUDENT:
            initialState.students.push(action.payload)
            return { ...initialState }
        case GET_STUDENTS:
            return initialState
        default:
            return initialState
    }
}
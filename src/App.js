import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { useState } from 'react';
import { TableWithBrowserPagination, Column } from 'react-rainbow-components';
import Image from './imagenes/user.png';


function App() {
    var img = < img src = { Image } > < /img>
    const empleados = [
        { id: 1, foto: img, nombre: "Juan", edad: 26, sexo: "Masculino", salario: 10500 },
        { id: 2, foto: img, nombre: "Daniel", edad: 28, sexo: "Masculino", salario: 12800 },
        { id: 3, foto: img, nombre: "Jorge", edad: 26, sexo: "Masculino", salario: 11800 },
        { id: 4, foto: img, nombre: "Jose", edad: 24, sexo: "Masculino", salario: 13300 },
        { id: 5, foto: img, nombre: "Pedro", edad: 29, sexo: "Masculino", salario: 11200 },
        { id: 6, foto: img, nombre: "Humberto", edad: 25, sexo: "Masculino", salario: 14100 },
        { id: 7, foto: img, nombre: "Aldair", edad: 30, sexo: "Masculino", salario: 11800 },
        { id: 8, foto: img, nombre: "Laura", edad: 32, sexo: "Femenino", salario: 9800 },
        { id: 9, foto: img, nombre: "Ana", edad: 30, sexo: "Femenino", salario: 12000 },
        { id: 10, foto: img, nombre: "Maria", edad: 29, sexo: "Femenino", salario: 10100 },
        { id: 11, foto: img, nombre: "Marcos", edad: 27, sexo: "Masculino", salario: 17500 },
        { id: 12, foto: img, nombre: "Benito", edad: 31, sexo: "Masculino", salario: 11300 },
        { id: 13, foto: img, nombre: "Simon", edad: 33, sexo: "Masculino", salario: 10200 },

    ];

    const [data, setData] = useState(empleados);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);

    const [empSelec, setPaisSeleccionado] = useState({
        id: '',
        foto: '',
        nombre: '',
        edad: '',
        sexo: '',
        salario: ''
    });

    const seleccionarEmp = (elemento, caso) => {
        setPaisSeleccionado(elemento);
        (caso === 'Editar') ? setModalEditar(true): setModalEliminar(true)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setPaisSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const editar = () => {
        var dataNueva = data;
        dataNueva.map(emp => {
            if (emp.id === empSelec.id) {
                emp.foto = empSelec.foto;
                emp.nombre = empSelec.nombre;
                emp.edad = empSelec.edad;
                emp.sexo = empSelec.sexo;
                emp.salario = empSelec.salario;
            }
        });
        setData(dataNueva);
        setModalEditar(false);
    }
    const abrirModalInsertar = () => {
        setPaisSeleccionado(null);
        setModalInsertar(true);
    }

    const eliminar = () => {
        setData(data.filter(emp => emp.id !== empSelec.id));
        setModalEliminar(false);
    }

    return ( <
        div className = "App" >
        <
        TableWithBrowserPagination className = "table table-striped"
        data = { data }
        variant = "listview"
        pageSize = { 4 } >
        <
        Column header = "Clave"
        field = { data.map(element => (element.id)) }
        /> <
        Column header = "Foto"
        field = "foto" / >
        <
        Column header = "Nombre"
        field = "nombre" / >
        <
        /TableWithBrowserPagination>


        <
        table className = "table table-striped" >
        <
        thead >
        <
        tr >
        <
        th > Clave < /th> <
        th > Foto < /th> <
        th > Nombre < /th> <
        th > Edad < /th> <
        th > Sexo < /th> <
        th > Salario < /th> <
        th colSpan = '2' > Acciones < /th>

        <
        /tr> < /
        thead > <
        tbody > {
            data.map(element => ( <
                tr >
                <
                td > { element.id } < /td> <
                td > { element.foto } < /td> <
                td > { element.nombre } < /td> <
                td > { element.edad } < /td> <
                td > { element.sexo } < /td> <
                td > { element.salario } < /td> <
                td > < button className = "btn btn-primary"
                onClick = {
                    () => seleccionarEmp(element, 'Editar')
                } > Modificar < /button></td > { "   " } <
                td > < button className = "btn btn-danger"
                onClick = {
                    () => seleccionarEmp(element, 'Eliminar')
                } > Eliminar < /button></td >

                <
                /tr>
            ))
        } <
        /tbody> < /
        table >


        <
        Modal isOpen = { modalEditar } >
        <
        ModalHeader >
        <
        div >
        <
        h3 > Editar Empleado < /h3> < /
        div > <
        /ModalHeader> <
        ModalBody >
        <
        div className = "form-group" >
        <
        label > ID < /label> <
        input className = "form-control"
        readOnly type = "text"
        name = "id"
        value = { empSelec && empSelec.id }
        /> <
        br / >

        <
        label > Foto < /label> <
        input className = "form-control"
        type = "text"
        name = "foto"
        value = { empSelec && empSelec.foto }
        onChange = { handleChange }
        /> <
        br / >

        <
        label > Nombre < /label> <
        input className = "form-control"
        type = "text"
        name = "nombre"
        value = { empSelec && empSelec.nombre }
        onChange = { handleChange }
        /> <
        br / >

        <
        label > Edad < /label> <
        input className = "form-control"
        type = "number"
        name = "edad"
        value = { empSelec && empSelec.edad }
        onChange = { handleChange }
        /> <
        br / >

        <
        label > Sexo < /label> <
        input className = "form-control"
        type = "text"
        name = "sexo"
        value = { empSelec && empSelec.sexo }
        onChange = { handleChange }
        /> <
        br / >

        <
        label > Salario < /label> <
        input className = "form-control"
        type = "number"
        name = "salario"
        value = { empSelec && empSelec.salario }
        onChange = { handleChange }
        /> <
        br / >
        <
        /div> < /
        ModalBody > <
        ModalFooter >
        <
        button className = "btn btn-primary"
        onClick = {
            () => editar()
        } >
        Actualizar <
        /button> <
        button className = "btn btn-danger"
        onClick = {
            () => setModalEditar(false)
        } >
        Cancelar <
        /button> < /
        ModalFooter > <
        /Modal> <
        Modal isOpen = { modalEliminar } >
        <
        ModalBody >
        Estas seguro que lo deseas eliminar ? { empSelec && empSelec.nombre } <
        /ModalBody> <
        ModalFooter >
        <
        button className = "btn btn-danger"
        onClick = {
            () => eliminar()
        } >
        Si <
        /button> <
        button className = "btn btn-secondary"
        onClick = {
            () => setModalEliminar(false)
        } >
        No <
        /button> < /
        ModalFooter > <
        /Modal> < /
        div >
    );
}

export default App;
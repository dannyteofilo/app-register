import React , { Component } from 'react'
import FormRow from '../formRow/FormRow'

class Form extends Component{
  constructor(){
    super()
    this.state={
      users:[],
      refresh:''
    }
    this.onSubmit=this.onSubmit.bind(this)
    this.onClear=this.onClear.bind(this)
  }

  componentWillMount(){
    let array=localStorage.getItem('users')
    if(array){
      this.setState({users:JSON.parse(array)})
    }
  }
  onSubmit(e){
    e.preventDefault()
    let add={
      name:this.refs.name.getValue(),
      email:this.refs.email.getValue(),
      birthdate:this.refs.birthdate.getValue(),
      street:this.refs.street.getValue(),
      number:this.refs.number.getValue(),
      colony:this.refs.colony.getValue(),
      city:this.refs.city.getValue()
    }
    this.state.users.push(add)
    this.setState({refresh:''})
    localStorage.setItem('users',JSON.stringify(this.state.users));
    this.refs.name.setValue(),
    this.refs.email.setValue(),
    this.refs.birthdate.setValue(),
    this.refs.street.setValue(),
    this.refs.number.setValue(),
    this.refs.colony.setValue(),
    this.refs.city.setValue()
  }
  onClear(){
    localStorage.clear()
    this.setState({users:[]})
  }
  render(){
    let tableUsers
    if(this.state.users.length>0){
      tableUsers=<div className="card">
        <h2>Usuarios Registrados</h2>
        <div className="card-body">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Fecha de nacimiento</th>
                <th scope="col">Calle</th>
                <th scope="col">Número Ext.</th>
                <th scope="col">Colonia</th>
                <th scope="col">Cuidad</th>
              </tr>
            </thead>
            <tbody>

                {
                  this.state.users.map((i,index)=>{
                    return (
                      <tr key={index}>
                        <th scope="row">{i.name}</th>
                        <td>{i.email}</td>
                        <td>{i.birthdate}</td>
                        <td>{i.street}</td>
                        <td>{i.number}</td>
                        <td>{i.colony}</td>
                        <td>{i.city}</td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </div>
        <button type="button" className="btn btn-link" onClick={this.onClear}>Eliminar Usuarios</button>
      </div>
    }else{
      tableUsers=''
    }
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Registro</h2>
          <FormRow inputType='text' labelText='Nombre' isRequired={true} ref='name'/>
          <FormRow inputType='email' labelText='Email' isRequired={true} ref='email'/>
          <FormRow inputType='date' labelText='Fecha de nacimiento' isRequired={false} ref='birthdate'/>
          <FormRow inputType='text' labelText='Calle' isRequired={false} ref='street'/>
          <FormRow inputType='number' labelText='Número Exterior' isRequired={false} ref='number'/>
          <FormRow inputType='text' labelText='Colonia' isRequired={false} ref='colony'/>
          <FormRow inputType='text' labelText='Cuidad' isRequired={false} ref='city'/>
          <button  className="btn btn-primary mb-2">Registrar</button>
        </form>
        <hr></hr>
        {tableUsers}
      </div>
    )
  }
}

export default Form;

import React , { Component } from 'react'
import PropTypes from 'prop-types'

class FormRow extends Component {
  constructor(props) {
    super(props)
    this.state={
      inputValue:''
    }
    this.onChange=this.onChange.bind(this)
    this.getValue=this.getValue.bind(this)
  }
  onChange(e){
    this.setState({inputValue:e.target.value})
  }
  getValue(){
    return this.state.inputValue
  }
  setValue(){    
    this.setState({inputValue:''})
  }
  render(){
    return(
      <div className='form-group row'>
        <label className='col-sm-2 col-form-label col-form-label-md'>{this.props.labelText}</label>
        <div className='col-sm-10'>
          <input className='form-control form-control-md' type={this.props.inputType} value={this.state.inputValue} onChange={this.onChange} required={this.props.isRequired}></input>
        </div>
      </div>
    )
  }
}

FormRow.propTypes={
  inputType: PropTypes.string,
  labelText: PropTypes.string,
  isRequired: PropTypes.bool
}

export default FormRow;

import React,{Component} from 'react'
//import PropTypes from 'prop-types'
import Page from '../Page'

export default class FormPage extends Page{
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  saveFormRef(form){
    this.form = form;
  }
  onSubmit(actionType){
    // console.log(arguments)
    if(actionType ==='handleSubmit'){
      this.form.validateFieldsAndScroll({force:true,first:true},(err,values) => {
         if (err) {
           return;
         }
          this.handleSubmit(values)
       });
    }else{
      this[actionType].apply(this,[this.form.getFieldsValue()])
    }
  }
  handleSubmit(values){
    let {actions} = this.props;
  }
  render() {
    // Normally, just render children
    return this.props.children;
  }
}

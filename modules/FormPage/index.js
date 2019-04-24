import React,{Component} from 'react'
//import PropTypes from 'prop-types'
import Page from '../Page'

export default class FormPage extends Page{
  constructor(props) {
    super(props);
  }
  saveFormRef(form){
    this.form = form;
  }
  onSubmit(actionType){
    if(actionType ==='handleSubmit'){
      this.form.validateFieldsAndScroll({force:true},(err,values) => {
         if (err) {
           return;
         }
          this.handleSubmit(values)
       });
    }else{
      this[actionType].apply(this,[this.form.getFieldsValue()])
    }
  }
  render() {
    // Normally, just render children
    return this.props.children;
  }
}

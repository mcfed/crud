import React,{Component} from 'react'
//import PropTypes from 'prop-types'
import Page from '../Page'

export default class FormPage extends Component{
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  goBack(){
    const {history} = this.props
    history.goBack()
  }
  goAdd(){
    this.goRoutes(`add`)
  }
  goEdit(route){
    this.goRoutes(`edit/${route}`)
  }
  goRoutes(route){
    const {history,match} = this.props
    history.push(`${match.path}/${route}`)
  }
  componentDidCatch(error, errorInfo) {
    // Display fallback UI
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log the error to an error reporting service
    // console.log(error, errorInfo);
  }
  saveFormRef (form){
    console.log(form)
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

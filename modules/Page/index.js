import React,{Component} from 'react'
//import PropTypes from 'prop-types'

export default class Page extends Component{
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
}

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
    this.goRoutes(`${route}/edit`)
  }
  goDetail(route){
    this.goRoutes(`${route}`)
  }
  goRoutes(route){
    const {history,match} = this.props
    history.push(`${match.url}/${route}`)
  }
  componentDidCatch(error, errorInfo) {
    // Display fallback UI
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }
}

import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export default class Page extends Component {
  componentWillMount(){
    const { history, match } = this.props
    // console.log(history,match)
  }
  goBack() {
    const { history } = this.props
    history.goBack()
  }
  goAdd() {
    this.goRoutes(`add`)
  }
  goEdit(route) {
    this.goRoutes(`${route}/edit`)
  }
  goList(route){
    this.goRoutes(`${route}`)
  }
  goDetail(route) {
    this.goRoutes(`${route}`)
  }
  goRoutes(route) {
    const { history, match } = this.props
    // console.log(route,match.url)
    history.push(`${match.url}/${route}`)
  }
  render(){
    return undefined
  }
}

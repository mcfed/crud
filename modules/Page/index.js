import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export default class Page extends Component {
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
  goDetail(route) {
    this.goRoutes(`${route}`)
  }
  goRoutes(route) {
    const { history, match } = this.props
    history.push(`${match.url}/${route}`)
  }
  addListener = (type, listener) => {
    if (this.props.eventEmitter) {
      this.props.eventEmitter.removeAllListeners(type)
      this.props.eventEmitter.addListener(type, listener.bind(this))
    }
  }
  removeListener = (type) => {
    if (this.props.eventEmitter) {
      this.props.eventEmitter.removeAllListeners(type)
    }
  }
  componentDidCatch(error, errorInfo) {
    // Display fallback UI
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }
}
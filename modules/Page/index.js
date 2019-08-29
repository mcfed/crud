/**
 * @module Page
 */
import React, { Component } from "react";
//import PropTypes from 'prop-types'

export default class RPage extends Component {
  componentWillMount() {
    const { history, match } = this.props;
    // console.log(history,match)
  }
  /**
   * 返回到上一步路由
   */
  goBack() {
    const { history } = this.props;
    history.goBack();
  }
  /**
   * 路由跳转到新增列表项
   */
  goAdd() {
    this.goRoutes(`add`);
  }
  /**
   * 路由跳转到列表项修改路由
   * @param {string} route 当前路由
   */
  goEdit(route) {
    this.goRoutes(`${route}/edit`);
  }
  /**
   * 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route) {
    this.goRoutes(`${route}`);
  }
  /**
   * 路由跳转到列表项详情
   * @param {string} route 目标路由
   */
  goDetail(route) {
    this.goRoutes(`${route}`);
  }
  /**
   * 跳转到指定路由
   * @param {string} route 目标路由
   */
  goRoutes(route) {
    const { history, match } = this.props;
    // console.log(route,match.url)
    history.push(`${match.url}/${route}`);
  }
  /**
   * 添加监听器
   * @param {string} type 事件类型
   * @param {function} listener 监听器回聊函数
   */
  addListener = (type, listener) => {
    if (this.props.eventEmitter) {
      this.props.eventEmitter.removeAllListeners(type);
      this.props.eventEmitter.addListener(type, listener.bind(this));
    }
  };
  /**
   * 移除监听器
   * @param {string} type 事件类型
   */
  removeListener = type => {
    if (this.props.eventEmitter) {
      this.props.eventEmitter.removeAllListeners(type);
    }
  };

  /**
   * @returns {undefined} undefined
   */
  render() {
    return undefined;
  }
}

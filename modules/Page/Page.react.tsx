import React,{Component} from 'react'

export default class RPage extends Component implements IPage{
  private props:any
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
  render(){

  }

}
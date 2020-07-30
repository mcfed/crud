import React, {Component, ReactNode} from 'react';
import IPage, {IRouter, IProps, IState, PK} from './IPage';


/**
 * @class RPage
 * @interface Ipage,IRouter 
 * @description React页面实现基类
 */

export default abstract class RPage<P extends IProps, S extends IState>
  extends Component<P, S>
  implements IPage, IRouter{
  /**
   * @deprecated componentDidMount 请使用 viewMount 代替 
   * @description componentDidMount 
   * @example 
   * componentDidMount(){
   *    const {actions} = this.props;
   *    actions.fetchPage()
   * }
   */
  componentDidMount(){
    this.viewMount()
  }
  /**
   * @description 返回到上一步路由
   */
  public goBack(): void {
    const {history} = this.props;
    history.goBack();
  }
  /**
   * @description 路由跳转到新增列表项
   */
  public goAdd(): void {
    this.goRoutes(`add`);
  }
  /**
   * @description 路由跳转到列表项修改路由
   * @param {PK} route 当前路由
   */
  goEdit(route: PK): void {
    this.goRoutes(`${route}/edit`);
  }
  /**
   * @description 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route?: string): void {
    this.goRoutes(`${route}`);
  }
  /**
   * @description 路由跳转到列表项详情
   * @param {PK} route 目标路由
   */
  goDetail(route: PK): void {
    this.goRoutes(`${route}`);
  }
  /**
   * @description 跳转到指定路由
   * @param {string} route 目标路由
   * @todo 去除 match 依赖
   */
  goRoutes(route: string): void {
    const {history, match} = this.props;
    const baseUrl = match.url && (match.url.endsWith('/') ? match.url.slice(0, -1) : match.url)
    history.push(`${baseUrl}/${route}`);
  }
  /**
   * @description viewMount
   * @since 0.5.0
   * @example viewMount(){
   *    const {actions} = this.props;
   *    actions.fetchPage()
   * }
   */
   viewMount(): void{

   };

   /**
    * @description render
    */
  abstract render(): ReactNode;
}

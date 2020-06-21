import React, {Component, ReactNode} from 'react';
import IPage, {IRouter, IProps, IState, PK} from './IPage';

export default abstract class RPage<P extends IProps, S extends IState>
  extends Component<P, S>
  implements IPage, IRouter{

  /**
   * 返回到上一步路由
   */
  public goBack(): void {
  }
  /**
   * 路由跳转到新增列表项
   */
  public goAdd(): void {
    this.goRoutes(`add`);
  }
  /**
   * 路由跳转到列表项修改路由
   * @param {PK} route 当前路由
   */
  goEdit(route: PK): void {
    this.goRoutes(`${route}/edit`);
  }
  /**
   * 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route?: string): void {
    this.goRoutes(`${route}`);
  }
  /**
   * 路由跳转到列表项详情
   * @param {PK} route 目标路由
   */
  goDetail(route: PK): void {
    this.goRoutes(`${route}`);
  }

  componentDidMount(){
    this.ready()
  }

  /**
   * 跳转到指定路由
   * @param {string} route 目标路由
   */
  abstract goRoutes(route: string): void
  /**
   * alias compomentsDidMount for react
   */
  abstract ready(): void;
  abstract render(): ReactNode;
}

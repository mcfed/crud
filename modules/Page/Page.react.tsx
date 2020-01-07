import React, {Component, ReactNode} from 'react';
import IPage, {IRouter} from './IPage';
import {IProps, IState, IPageProps, IPageState} from '../../types/global.d';
import Model from 'redux-orm';

export default abstract class RPage<P extends IProps, S extends IState>
  extends Component<P, S>
  implements IPage, IRouter {
  constructor(props: P, state: S) {
    super(props, state);
  }

  /**
   * 返回到上一步路由
   */
  public goBack(): void {
    const {history} = this.props;
    history.goBack();
  }
  /**
   * 路由跳转到新增列表项
   */
  public goAdd(): void {
    this.goRoutes(`add`);
  }
  /**
   * 路由跳转到列表项修改路由
   * @param {string} route 当前路由
   */
  goEdit(route: string): void {
    this.goRoutes(`${route}/edit`);
  }
  /**
   * 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route: string): void {
    this.goRoutes(`${route}`);
  }
  /**
   * 路由跳转到列表项详情
   * @param {string} route 目标路由
   */
  goDetail(route: string): void {
    this.goRoutes(`${route}`);
  }
  /**
   * 跳转到指定路由
   * @param {string} route 目标路由
   */
  goRoutes(route: string): void {
    const {history, match} = this.props;
    // console.log(route,match.url)
    history.push(`${match.url}/${route}`);
  }

  abstract componentDidMount(): void;
  abstract render(): ReactNode;
}

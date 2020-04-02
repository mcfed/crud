import {Location, History} from 'history';
import {match} from 'react-router';
import Model from 'redux-orm';
import { AnyModel } from 'redux-orm/Model';

export type IValues = {
  [extraProps: string]: any
}

export interface IActions {
  [extraProps: string]: Function
}

export type PK = number | string


export type IProps<Props = IPageProps<Model>> = {
  [P in keyof Props]: Props[P];
};

export type IState<State = IPageState<Model>> = {
  [S in keyof State]: State[S];
};

export type IParams<Params = {}> = {
  [S in keyof Params]?: Params[S];
};

export interface IPageProps<M> {
  history: History;
  match: match<M>;
  location: Location;
  locale: Function;
  querys: Function;
  spins: Function;
}

export interface IPageState<M> {}


export default interface IPage {
  /**
   * 路由跳转到新增列表项
   */
  goAdd(): void;
  /**
   * 路由跳转到列表项修改路由
   * @param {string} route 当前路由
   */
  goEdit(route: string): void;
  /**
   * 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route: string): void;
  /**
   * 路由跳转到列表项详情
   * @param {string} route 目标路由
   */
  goDetail(route: string): void;

  /**
   * @returns {undefined} undefined
   */
  render(): void;
}

export interface IRouter {

  /**
   * 跳转到指定路由
   * @param {string} route 目标路由
   */
  goRoutes(route: string): void;
  /**
   * 返回到上一步路由
   */
  goBack(): void;
}


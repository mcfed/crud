import {Location, History} from 'history';
import {match} from 'react-router';

export type IValues = {
  [extraProps: string]: any
}

export interface IActions {
  [extraProps: string]: Function
}

export type PK = number | string


export type IProps<Props = IPageProps> = {
  [P in keyof Props]: Props[P];
};

export type IState<State = IPageState> = {
  [S in keyof State]: State[S];
};

export type IParams<Params = {}> = {
  [S in keyof Params]?: Params[S];
};

export interface IPageProps{
  history: History;
  match: match<any>;
  location: Location;
  locale: Function;
  querys: Function;
  spins: Function;
}

export interface IPageState {}


export default interface IPage {
  /**
   * 路由跳转到新增列表项
   */
  goAdd(): void;
  /**
   * 路由跳转到列表项修改路由
   * @param {string} route 当前路由
   */
  goEdit(route: PK): void;
  /**
   * 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route: string): void;
  /**
   * 路由跳转到列表项详情
   * @param {string} route 目标路由
   */
  goDetail(route: PK): void;

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


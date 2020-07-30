import { Location, History } from 'history';


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

export interface IPageProps {
  intl: any;
  history: History;
  match: any;
  location: Location;
  locale: Function;
  dicts: Function;
  querys: Function;
  spins: Function;
}

export interface IPageState { }


/**
 * @module Page 页面接口描述信息
 * @
 */
export default interface IPage {
  /**
   * @description 路由跳转到新增列表项
   */
  goAdd(): void;
  /**
   * @description 路由跳转到列表项修改路由
   * @param {string} route 当前路由
   */
  goEdit(route: PK): void;
  /**
   * @description 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route: string): void;
  /**
   * @description 路由跳转到列表项详情
   * @param {string} route 目标路由
   */
  goDetail(route: PK): void;

  /**
   *  @description viewMount
   */
  viewMount():void 
}

export interface IRouter {

  /**
   * @description 跳转到指定路由
   * @param {string} route 目标路由
   */
  goRoutes(route: string): void;
  /**
   * @description 返回到上一步路由
   */
  goBack(): void;
}


import React,{Component, ReactNode} from 'react'
import IPage from './IPage';

const defaultIPageProps={
  match: {},
  actions:{},
  item:{},
  history:{},
  location:{},
  reducer:{},
  children:[],
  items:[]
}

export interface IPageProps{
  match: any;
  actions:any,
  item:object,
  history:any,
  location:any,
  reducer:any,
  // children:any,
  items:Array<object>
}

export interface IPageState{

}

export default abstract class RPage extends Component<IPageProps,IPageState> implements IPage{
  public props:IPageProps = defaultIPageProps
  public state:IPageState ={}
  /**
   * 返回到上一步路由
   */
  goBack():void{
    const { history } = this.props;
    history.goBack();
  }
  /**
   * 路由跳转到新增列表项
   */
  goAdd():void {
    this.goRoutes(`add`);
  }
  /**
   * 路由跳转到列表项修改路由
   * @param {string} route 当前路由
   */
  goEdit(route:string) :void{
    this.goRoutes(`${route}/edit`);
  }
  /**
   * 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route:string) :void{
    this.goRoutes(`${route}`);
  }
  /**
   * 路由跳转到列表项详情
   * @param {string} route 目标路由
   */
  goDetail(route:string) :void{
    this.goRoutes(`${route}`);
  }
  /**
   * 跳转到指定路由
   * @param {string} route 目标路由
   */
  goRoutes(route:string) :void{
    const { history, match } = this.props;
    // console.log(route,match.url)
    history.push(`${match.url}/${route}`);
  }
  abstract render():ReactNode

}
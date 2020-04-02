import { URLSearchParams } from "url";
import {PK, IParams, IPageState, IPageProps, IActions} from '../Page/IPage';
import Model, { AnyModel, SessionBoundModel } from "redux-orm/Model";
import { match } from "react-router";

interface Selectable{
  onSelectChange(selectRowKey:string[],selectedRows:Object):void
  isSelectMultiple():Boolean
  isSelectSingle():Boolean
  selectMultiple():Boolean
  selectSingle():Boolean
  getSelectLength():Number
  getSelectKeys():string[]
  clearSelectRows():void
}

interface Tableable{
  onChange(pagination:any, filters:Object, sorter:Object):void
  handleFilter(value:Object):void
}


export default interface IList<M> extends Selectable,Tableable{
  getSearchParams():URLSearchParams
  handleAddRoute():void
  handleEditRoute(id:string):void
  handleDetailRoute(id:string):void
  handleBackRoute():void
  searchParams(): IParams<M>
  renderSearchBar():void
}

export interface IRListState<M extends Model> extends IPageState<M> {
  selectedRows: SessionBoundModel<M>[];
  selectedRowKeys: string[];
}

export interface IRListProps<M extends Model> extends IPageProps<M> {
  actions: IActions;
  match: match<any>;
  items: SessionBoundModel<M>[];
}

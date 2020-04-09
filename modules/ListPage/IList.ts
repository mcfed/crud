import { URLSearchParams } from "url";
import {PK, IParams, IPageState, IPageProps, IActions} from '../Page/IPage';

interface Selectable{
  onSelectChange(selectRowKey:string[],selectedRows:Object):void
  isSelectMultiple():Boolean
  isSelectSingle():Boolean
  selectMultiple():Boolean
  selectSingle():Boolean
  getSelectLength():Number
  getSelectKeys():PK[]
  clearSelectRows():void
}

interface Tableable{
  onChange(pagination:any, filters:Object, sorter:Object):void
  handleFilter(value:Object):void
}


export default interface IList extends Selectable,Tableable{
  getSearchParams():URLSearchParams
  handleAddRoute():void
  handleEditRoute(id:PK):void
  handleDetailRoute(id:PK):void
  handleBackRoute():void
  searchParams(): IParams<any>
  renderSearchBar():void
}

export interface IRListState extends IPageState {
  selectedRows: any[];
  selectedRowKeys: PK[];
}

export interface IRListProps extends IPageProps{
  actions: any;
}

import { URLSearchParams } from "url";

export default interface IList {
  onSelectChange(selectRowKey:Array<String>,selectedRows:Object):void
  isSelectMultiple():Boolean
  isSelectSingle():Boolean
  selectMultiple():Boolean
  selectSingle():Boolean
  getSelectLength():Number
  getSelectKeys():Array<string>
  getSelectRows():Object
  getSearchParams():URLSearchParams
  clearSelectRows():void
  handleAddRoute():void
  handleEditRoute(id:string):void
  handleDetailRoute(id:string):void
  handleBackRoute():void
  handleFilter(value:Object):void
  onChange(pagination:any, filters:Object, sorter:Object):void
  searchParams():Object
  renderSearchBar():void
}
import { URLSearchParams } from "url";

interface Selectable{
  onSelectChange(selectRowKey:Array<String>,selectedRows:Object):void
  isSelectMultiple():Boolean
  isSelectSingle():Boolean
  selectMultiple():Boolean
  selectSingle():Boolean
  getSelectLength():Number
  getSelectKeys():Array<string>
  clearSelectRows():void
}

interface Tableable{
  onChange(pagination:any, filters:Object, sorter:Object):void
  handleFilter(value:Object):void
}


export default interface IList extends Selectable,Tableable{
  getSearchParams():URLSearchParams
  handleAddRoute():void
  handleEditRoute(id:string):void
  handleDetailRoute(id:string):void
  handleBackRoute():void
  searchParams():Object
  renderSearchBar():void
}
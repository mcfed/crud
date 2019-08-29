
interface IList extends IPage{
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
  handleEditRoute(id:string|number):void
  handleDetailRoute(id:string|number):void
  handleBackRoute():void
  handleDeleteRoute(id:string|number):void
  handleFilter(value:Object):void
  onChange(pagination:any, filters:Object, sorter:Object):void
  searchParams():Object
  renderSearchBar()
}
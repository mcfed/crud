import Vue from 'vue'
import VPage from '../Page/Page.vue'

export default class VList extends VPage implements IList{
  onSelectChange(selectRowKey: String[], selectedRows: Object): void {
    throw new Error("Method not implemented.");
  }    
  isSelectMultiple(): Boolean {
    throw new Error("Method not implemented.");
  }
  isSelectSingle(): Boolean {
    throw new Error("Method not implemented.");
  }
  selectMultiple(): Boolean {
    throw new Error("Method not implemented.");
  }
  selectSingle(): Boolean {
    throw new Error("Method not implemented.");
  }
  getSelectLength(): Number {
    throw new Error("Method not implemented.");
  }
  getSelectKeys(): string[] {
    throw new Error("Method not implemented.");
  }
  getSelectRows(): Object {
    throw new Error("Method not implemented.");
  }
  getSearchParams(): URLSearchParams {
    throw new Error("Method not implemented.");
  }
  clearSelectRows(): void {
    throw new Error("Method not implemented.");
  }
  handleAddRoute(): void {
    throw new Error("Method not implemented.");
  }
  handleEditRoute(id: string | number): void {
    throw new Error("Method not implemented.");
  }
  handleDetailRoute(id: string | number): void {
    throw new Error("Method not implemented.");
  }
  handleBackRoute(): void{
    
  };
  handleDeleteRoute(id: string | number): void {
    throw new Error("Method not implemented.");
  }
  handleFilter(value: Object): void {
    throw new Error("Method not implemented.");
  }
  onChange(pagination: any, filters: Object, sorter: Object): void {
    throw new Error("Method not implemented.");
  }
  searchParams(): Object {
    throw new Error("Method not implemented.");
  }
  renderSearchBar() {
      throw new Error("Method not implemented.");
  }
}
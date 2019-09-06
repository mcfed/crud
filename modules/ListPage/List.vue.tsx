import VPage from '../Page/Page.vue'
import {URLSearchParams} from "url"
import IList from './IList';

export default abstract class VList extends VPage implements IList{
  onSelectChange(selectRowKey: String[], selectedRows: Object): void {
    throw new Error("Method not implemented.");
  }  isSelectMultiple(): Boolean {
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
  handleEditRoute(id: string): void {
    throw new Error("Method not implemented.");
  }
  handleDetailRoute(id: string): void {
    throw new Error("Method not implemented.");
  }
  handleBackRoute(): void {
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
  renderSearchBar(): void {
    throw new Error("Method not implemented.");
  }

 
}
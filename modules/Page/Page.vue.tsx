import Vue from 'vue'

export default class VPage extends Vue implements IPage{
  goBack(): void {
    throw new Error("Method not implemented.");
  }  goAdd(): void {
    throw new Error("Method not implemented.");
  }
  goEdit(route: string): void {
    throw new Error("Method not implemented.");
  }
  goList(route: string): void {
    throw new Error("Method not implemented.");
  }
  goDetail(route: string): void {
    throw new Error("Method not implemented.");
  }
  goRoutes(route: string): void {
    throw new Error("Method not implemented.");
  }
  render(): void {
    throw new Error("Method not implemented.");
  }

 

}
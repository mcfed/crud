import Vue from 'vue'


export default class VPage extends Vue implements IPage{
  goBack() {
    throw new Error("Method not implemented.");
  }    
  goAdd() {
    throw new Error("Method not implemented.");
  }
  goEdit(route: any) {
    throw new Error("Method not implemented.");
  }
  goList(route: any) {
    throw new Error("Method not implemented.");
  }
  goDetail(route: any) {
    throw new Error("Method not implemented.");
  }
  goRoutes(route: any) {
    throw new Error("Method not implemented.");
  }
  render() {
    throw new Error("Method not implemented.");
  }
}
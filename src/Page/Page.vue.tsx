import Vue, { VNode } from 'vue'
import IPage from './IPage';

export default abstract class VPage extends Vue implements IPage{

  goBack(): void {

  }
  goAdd(): void {
    this.goRoutes('add')
  }
  goEdit(route: string): void {
    this.goRoutes(`${route}/edit`)
  }
  goList(route: string): void {
    this.goRoutes(`${route}`)
  }
  goDetail(route: string): void {
    this.goRoutes(`${route}`)
  }
  /*
  goRoutes(route: string): void {
    const {history,push} = this.$router
    push([history.current.path,route].join("/"))
  }
  */

  created(){
    this.ready()
  }
  abstract goRoutes(route:string):void
  abstract ready():void
  abstract render():VNode
}

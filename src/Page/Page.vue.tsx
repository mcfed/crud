import Vue, { VNode } from 'vue'
import IPage from './IPage';

export default abstract class VPage extends Vue implements IPage{
  protected $router:any
  mount(){
    this.viewMount()
  }
  goBack(): void {
    this.$router.go(-1)
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
  goRoutes(route: string): void {
    const {history,push} = this.$router
    push([history.current.path,route].join("/"))
  }
  
  abstract viewMount():void
  abstract render():VNode
}
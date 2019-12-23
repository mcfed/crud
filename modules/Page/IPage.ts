export default interface IPage {
  /**
   * 路由跳转到新增列表项
   */
  goAdd(): void;
  /**
   * 路由跳转到列表项修改路由
   * @param {string} route 当前路由
   */
  goEdit(route: string): void;
  /**
   * 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route: string): void;
  /**
   * 路由跳转到列表项详情
   * @param {string} route 目标路由
   */
  goDetail(route: string): void;

  /**
   * @returns {undefined} undefined
   */
  render(): void;
}

export interface IRouter {

  /**
   * 跳转到指定路由
   * @param {string} route 目标路由
   */
  goRoutes(route: string): void;
  /**
   * 返回到上一步路由
   */
  goBack(): void;
}


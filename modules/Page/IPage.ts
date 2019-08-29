
interface IPage{
  /**
   * 返回到上一步路由
   */
  goBack() 
  /**
   * 路由跳转到新增列表项
   */
  goAdd() 
  /**
   * 路由跳转到列表项修改路由
   * @param {string} route 当前路由
   */
  goEdit(route) 
  /**
   * 路由跳转到列表页
   * @param {string} route 目标路由
   */
  goList(route) 
  /**
   * 路由跳转到列表项详情
   * @param {string} route 目标路由
   */
  goDetail(route) 
  /**
   * 跳转到指定路由
   * @param {string} route 目标路由
   */
  goRoutes(route) 

  /**
   * @returns {undefined} undefined
   */
  render() 

}

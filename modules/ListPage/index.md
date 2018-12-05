#ListPage

> ListPage是为列表页提供父类继承于｀Page｀，并为数据列表页方向扩展



| 参数 | 说明 | 参数 |  | 返回值 |
| - | :-: | -: | -:| -: |
| selectMultiple | 列表是否多选中 |  － | －  | boolean  |
| selectSingle | 列表是否单一选中 |  － | － | boolean  |
| getSelectLength | 获取列表选中数量 |  － | － | number  |
| getSelectKeys | 获取列表选中数据keys |  － | － | array<string>  |
| getSelectRows | 获取列表选中数据对象 |  － | － | array<object>  |
| clearSelectRows | 清空已选列清数据记录 |  － | － | number  |
| handleAddRoute | 新增路由监听 |  － | － | － |
| handleEditRoute | 编辑路由监听 |  id | － | -  |
| handleBackRoute | 取消或回退路由监听 |  － | － |  －  |
| handleDeleteRoute | 删除路由监听 |  id | － | －  |
| handleFilter | 监听过滤方法，即搜索提交 |  object | － | －  |
| searchParams | 获取查询条件参数回调 |  － | － | object  |



##USEAGE

```javascript

import {ListPage} from 'mcf-component'

class EditPage extends ListPage{
  handleFilter(values){
    const { actions } = this.props
		actions.listAction(values)
  }
  render(){
    return (
      {
        this.renderSearch()
        this.renderDataTable()
      }
    )
  }
}

```

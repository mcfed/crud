import {ReactNode} from 'react';
import {URLSearchParams} from 'url';
import RPage from '../Page/Page.react';
import IList from './IList';
import {IProps, IState, PK, IParams} from '../Page/IPage';
import {IRListProps, IRListState} from '../ListPage/IList';

const defaultState = {
  selectedRows: [],
  selectedRowKeys: []
};

/**
 * @class RList
 * @extends RPage
 * @implements IList
 * @description 列表页抽象实现，页面数据交换衔接
 */

export default abstract class RList<P extends IRListProps, S extends IRListState> extends RPage<IProps<P>,IState<S>> implements IList {

  //@ts-ignore
  readonly state: IState<S> = defaultState;
  

  /**
   * @description 获取查询条件参数
   * @returns {object} 查询条件
   */
  abstract searchParams(): IParams<any>;

  /**
   * @description 监听过滤方法，即搜索提交
   * @param  {object} value 过滤数据条件对象
   */
  abstract handleFilter(value: any): void;

  /**
   * @description 合并表格配置信息 （此方法仅为浅合并，深度合并暂未支持）
   * @param {object} config 表格配置信息
   */
  abstract mergeTableConfig(config: any): Object;

  /**
   * @description 选择的列表项监听
   * @param {Array} selectedRowKeys 已选择的列表项 key 值数组
   * @param {string} selectedRowKeys[].index 选择的列表项的 key
   * @param {Array} selectedRows    已选择的列表项数组
   * @param {object} selectedRows[].index 选择的单个列表项
   */
  onSelectChange(selectedRowKeys: PK[], selectedRows: any[]): void {
    this.setState({selectedRowKeys, selectedRows});
  }

  /**
   * @description 判断当前是否多选
   * @returns {boolean} Desc: 是否多选状态
   */
  isSelectMultiple(): boolean {
    return this.getSelectLength() >= 1;
  }

  /**
   * @description 判断当前是否单选
   * @returns {boolean} Desc: 是否为单选状态
   */
  isSelectSingle(): boolean {
    return this.getSelectLength() == 1;
  }

  /**
   * @description 判断当前是否多选
   * @deprecated 方法反实现过时处理,建议使用isSelectMultiple
   * @returns {boolean} Desc: 返回是否多选状态
   */
  selectMultiple(): boolean {
    return this.getSelectLength() <= 0;
  }
  /**
   * @description 判断当前是否单选
   * @deprecated 方法反实现过时处理,建议使用isSelectSingle
   * @returns {boolean} Desc: 返回当前是否单选状态
   */
  selectSingle(): boolean {
    return this.getSelectLength() != 1;
  }
  /**
   * @description 获取当前列表选中记录数量
   * @returns {number} Desc: 返回选中记录数量
   */
  getSelectLength(): number {
    return this.getSelectKeys().length;
  }
  /**
   * @description 获取选中列表的RowKeys
   * @returns {PK} Desc: 返回 keys 数组
   */
  getSelectKeys(): PK[] {
    return this.state.selectedRowKeys;
  }

  /**
   * @description 获取选中列表行数据
   * @returns {object} Desc: 返回选中记录数据
   */
  getSelectRows(): any[] {
    return this.state.selectedRows;
  }
  /**
   * @description 获取路径参数对象
   * @returns {URLSearchParams} Desc: URLSearchParams 实例对象
   */
  getSearchParams(): URLSearchParams {
    const {
      location: {search}
    } = this.props;
    return new URLSearchParams(search.substring(1));
  }

  /**
   * @description 清空已选列清数据记录
   */
  clearSelectRows(): void {
    this.setState({selectedRowKeys: [], selectedRows: []});
  }

  /**
   * @description 新增路由监听
   */
  handleAddRoute(): void {
    this.goAdd();
  }

  /**
   * @description 编辑路由监听
   * @param  {key} id description:
   */
  handleEditRoute(id: PK): void {
    let key = id || this.getSelectKeys()[0];
    this.goEdit(key);
  }

  /**
   * @description 编辑路由监听
   * @param  {key} id 目标路由
   */
  handleDetailRoute(id: PK): void {
    let key = id || this.getSelectKeys()[0];
    this.goDetail(key);
  }

  /**
   * @description 取消或回退路由监听
   */
  handleBackRoute(): void {
    this.goBack();
  }

  /**
   * @description 删除路由监听
   * @param  {rowskey} id description:
   */
  handleDeleteRoute(id: string): void {
    let {actions} = this.props;
    let key = id || this.getSelectKeys()[0];
    actions.deleteRoute(key);
  }

  /**
   * @description 表格分页排序发生变化
   * @param  {object} pagination description:
   * @param  {unknown} filters    description:
   * @param  {object} sorter     description:
   */
  onChange(pagination: any, filters: any, sorter: any): void {
    // let {reducer}=this.props
    // this.querys()
    var object = Object.assign({}, this.searchParams(), pagination, sorter);
    this.handleFilter(object);
  }

  /**
   * @description 渲染搜索组件
   * @returns {null} [description]
   */
  renderSearchBar(): ReactNode {
    return null;
  }
}

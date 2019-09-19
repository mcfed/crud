(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('url')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'url'], factory) :
    (factory((global.CRUD = {}),global.react,global.url));
}(this, (function (exports,react,url) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var defaultIPageProps = {
        match: {},
        actions: {},
        item: {},
        history: {},
        location: {},
        reducer: {},
        children: [],
        items: []
    };
    var RPage = /** @class */ (function (_super) {
        __extends(RPage, _super);
        function RPage() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.props = defaultIPageProps;
            _this.state = {};
            return _this;
        }
        /**
         * 返回到上一步路由
         */
        RPage.prototype.goBack = function () {
            var history = this.props.history;
            history.goBack();
        };
        /**
         * 路由跳转到新增列表项
         */
        RPage.prototype.goAdd = function () {
            this.goRoutes("add");
        };
        /**
         * 路由跳转到列表项修改路由
         * @param {string} route 当前路由
         */
        RPage.prototype.goEdit = function (route) {
            this.goRoutes(route + "/edit");
        };
        /**
         * 路由跳转到列表页
         * @param {string} route 目标路由
         */
        RPage.prototype.goList = function (route) {
            this.goRoutes("" + route);
        };
        /**
         * 路由跳转到列表项详情
         * @param {string} route 目标路由
         */
        RPage.prototype.goDetail = function (route) {
            this.goRoutes("" + route);
        };
        /**
         * 跳转到指定路由
         * @param {string} route 目标路由
         */
        RPage.prototype.goRoutes = function (route) {
            var _a = this.props, history = _a.history, match = _a.match;
            // console.log(route,match.url)
            history.push(match.url + "/" + route);
        };
        return RPage;
    }(react.Component));

    var defaultRListProps = {
        actions: {},
        item: {},
        match: {},
        history: {},
        location: {},
        items: [],
        reducer: {}
    };
    var defaultRListState = {
        selectedRows: [],
        selectedRowKeys: []
    };
    var RList = /** @class */ (function (_super) {
        __extends(RList, _super);
        function RList() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = defaultRListState;
            _this.props = defaultRListProps;
            return _this;
        }
        /**
         * 选择的列表项监听
         * @param {Array} selectedRowKeys 已选择的列表项 key 值数组
         * @param {string} selectedRowKeys[].index 选择的列表项的 key
         * @param {Array} selectedRows    已选择的列表项数组
         * @param {object} selectedRows[].index 选择的单个列表项
         */
        RList.prototype.onSelectChange = function (selectedRowKeys, selectedRows) {
            this.setState({ selectedRowKeys: selectedRowKeys, selectedRows: selectedRows });
        };
        /*
        selectRowShow(reactNode){
          const {selectedRowKeys}=this.state
          return selectedRowKeys.length>0 ? (<div className="ant-table-title-toolbar" style={{textAlign:'left'}}><span>已选<span className="countNum">{selectedRowKeys.length}</span>条数据</span>{reactNode}</div>) :null
        }
        */
        /**
         * 判断当前是否多选
         * @returns {boolean} Desc: 是否多选状态
         */
        RList.prototype.isSelectMultiple = function () {
            return this.getSelectLength() >= 1;
        };
        /**
         * 判断当前是否单选
         * @returns {boolean} Desc: 是否为单选状态
         */
        RList.prototype.isSelectSingle = function () {
            return this.getSelectLength() == 1;
        };
        /**
         * 判断当前是否多选
         * 方法反实现过时处理
         * 建议使用isSelectMultiple
         * @returns {boolean} Desc: 返回是否多选状态
         */
        RList.prototype.selectMultiple = function () {
            return this.getSelectLength() <= 0;
        };
        /**
         * 判断当前是否单选
         * 方法反实现过时处理
         * 建议使用isSelectSingle
         * @returns {boolean} Desc: 返回当前是否单选状态
         */
        RList.prototype.selectSingle = function () {
            return this.getSelectLength() != 1;
        };
        /**
         * 获取当前列表选中记录数量
         * @returns {number} Desc: 返回选中记录数量
         */
        RList.prototype.getSelectLength = function () {
            return this.getSelectKeys().length;
        };
        /**
         * 获取选中列表的RowKeys
         * @returns {string} Desc: 返回 keys 数组
         */
        RList.prototype.getSelectKeys = function () {
            return this.state.selectedRowKeys;
        };
        /**
         * 获取选中列表行数据
         * @returns {object} Desc: 返回选中记录数据
         */
        RList.prototype.getSelectRows = function () {
            return this.state.selectedRows;
        };
        /**
         * 获取路径参数对象
         * @returns {URLSearchParams} Desc: URLSearchParams 实例对象
         */
        RList.prototype.getSearchParams = function () {
            var search = this.props.location.search;
            return new url.URLSearchParams(search.substring(1));
        };
        /**
         * 清空已选列清数据记录
         */
        RList.prototype.clearSelectRows = function () {
            this.setState({ selectedRowKeys: [], selectedRows: [] });
        };
        /**
         * 新增路由监听
         */
        RList.prototype.handleAddRoute = function () {
            this.goAdd();
        };
        /**
         * 编辑路由监听
         * @param  {key} id description:
         */
        RList.prototype.handleEditRoute = function (id) {
            var key = id || this.getSelectKeys()[0];
            this.goEdit(key);
        };
        /**
         * 编辑路由监听
         * @param  {key} id 目标路由
         */
        RList.prototype.handleDetailRoute = function (id) {
            var key = id || this.getSelectKeys()[0];
            this.goDetail(key);
        };
        /**
         * 取消或回退路由监听
         */
        RList.prototype.handleBackRoute = function () {
            this.goBack();
        };
        /**
         * 删除路由监听
         * @param  {rowskey} id description:
         */
        RList.prototype.handleDeleteRoute = function (id) {
            var actions = this.props.actions;
            var key = id || this.getSelectKeys()[0];
            actions.deleteRoute(key);
        };
        /**
         * 表格分页排序发生变化
         * @param  {object} pagination description:
         * @param  {unknown} filters    description:
         * @param  {object} sorter     description:
         */
        RList.prototype.onChange = function (pagination, filters, sorter) {
            // let {reducer}=this.props
            // this.querys()
            var object = Object.assign({}, this.searchParams(), pagination, sorter);
            this.handleFilter(object);
        };
        /**
         * 渲染搜索组件
         * @returns {null} [description]
         */
        RList.prototype.renderSearchBar = function () {
            return (null);
        };
        return RList;
    }(RPage));

    var RForm = /** @class */ (function (_super) {
        __extends(RForm, _super);
        function RForm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RForm.prototype.saveFormRef = function (form) {
            this.form = form;
        };
        /**
         * 提交表单信息
         * @param {string} actionType 提交表单的动作类型
         */
        RForm.prototype.onSubmit = function (actionType) {
            var _this = this;
            if (actionType === 'handleSubmit') {
                this.form.validateFieldsAndScroll({ force: true }, function (err, values) {
                    if (err) {
                        return;
                    }
                    _this.handleSubmit(values);
                });
            }
            else {
                //@ts-ignore
                this[actionType].apply(this, [this.form.getFieldsValue()]);
            }
        };
        /**
         * 渲染表单
         * @returns {object} Desc: Form 子节点
         */
        RForm.prototype.render = function () {
            // Normally, just render children
            //@ts-ignore
            return this.props.children;
        };
        return RForm;
    }(RPage));

    exports.ListPage = RList;
    exports.FormPage = RForm;
    exports.ViewPage = RPage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
  (factory((global.CRUD = {}),global.React,global.PropTypes));
}(this, (function (exports,React,PropTypes) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var Page =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Page, _Component);

    function Page() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = Page.prototype;

    _proto.goBack = function goBack() {
      var history = this.props.history;
      history.goBack();
    };

    _proto.goAdd = function goAdd() {
      this.goRoutes("add");
    };

    _proto.goEdit = function goEdit(route) {
      this.goRoutes("edit/" + route);
    };

    _proto.goRoutes = function goRoutes(route) {
      var _this$props = this.props,
          history = _this$props.history,
          match = _this$props.match;
      history.push(match.path + "/" + route);
    };

    _proto.componentDidCatch = function componentDidCatch(error, errorInfo) {
      // Display fallback UI
      this.setState({
        error: error,
        errorInfo: errorInfo
      }); // You can also log the error to an error reporting service
      // console.log(error, errorInfo);
    };

    return Page;
  }(React.Component);

  /**
   * 列表页的父类组件
   * @type {component}
   */

  var ListPage =
  /*#__PURE__*/
  function (_Page) {
    _inheritsLoose(ListPage, _Page);

    //  static childContextTypes = {
    //        appConfig : PropTypes.object
    //  }
    //
    //  getChildContext(){
    //   var { appConfig } =this.props;
    //   return {
    //       appConfig: appConfig
    //   };
    // }
    function ListPage(props) {
      var _this;

      _this = _Page.call(this, props) || this;
      _this.state = {
        selectedRows: [],
        selectedRowKeys: []
      };
      return _this;
    } //缺失深度合并，只做一级合并


    var _proto = ListPage.prototype;

    _proto.mergeTableConfig = function mergeTableConfig(config) {
      return Object.assign({
        size: 'middle',
        pagination: {
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50', '100'],
          showTotal: this.showTotal.bind(this)
        },
        // rowSelection:{
        //   onChange: this.onSelectChange.bind(this)
        // },
        style: {
          width: '100%'
        }
      }, config);
    };
    /**
     * 组件开始请求获取数据
     * @return {[type]} [description]
     */


    _proto.componentWillMount = function componentWillMount() {
      var actions = this.props.actions; //  actions.listAction();
    };
    /**
     * [onSelectChange ]
     * @param  {[type]} selectedRowKeys [description]
     * @param  {[type]} selectedRows    [description]
     * @return {[type]}                 [description]
     */


    _proto.onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
      this.setState({
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      });
    };
    /*
    selectRowShow(reactNode){
      const {selectedRowKeys}=this.state
      return selectedRowKeys.length>0 ? (<div className="ant-table-title-toolbar" style={{textAlign:'left'}}><span>已选<span className="countNum">{selectedRowKeys.length}</span>条数据</span>{reactNode}</div>) :null
    }
    */

    /**
     * [selectMultiple 判断当前是否多选]
     * @return {[boolean]} [返回是否多选状态]
     */


    _proto.selectMultiple = function selectMultiple() {
      return this.getSelectLength() <= 0;
    };
    /**
     * [selectSingle 判断当前是否单选]
     * @return {[type]} [返回当前是否单选状态]
     */


    _proto.selectSingle = function selectSingle() {
      return this.getSelectLength() != 1;
    };
    /**
     * [getSelectLength 获取当前列表选中记录数量]
     * @return {[number]} [返回选中记录数量]
     */


    _proto.getSelectLength = function getSelectLength() {
      return this.getSelectRows().length;
    };
    /**
     * [getSelectKeys 获取选中列表的RowKeys]
     * @return {[array[string]]} [返回数组 keys]
     */


    _proto.getSelectKeys = function getSelectKeys() {
      return this.state.selectedRowKeys;
    };
    /**
     * [getSelectRows 获取选中列表行数据]
     * @return {[array[object]]} [返回选中记录数据]
     */


    _proto.getSelectRows = function getSelectRows() {
      return this.state.selectedRows;
    };
    /**
     * 新增路由监听
     * @return {无}
     */


    _proto.handleAddRoute = function handleAddRoute() {
      this.goAdd();
    };
    /**
     * 编辑路由监听
     * @param  {key} id [description]
     * @return {[type]}    [description]
     */


    _proto.handleEditRoute = function handleEditRoute(id) {
      var key = id || this.getSelectKeys();
      this.goEdit(key);
    };
    /**
     * 取消或回退路由监听
     * @return {[null]}
     */


    _proto.handleBackRoute = function handleBackRoute() {
      this.goBack();
    };
    /**
     * [handleDeleteRoute 删除路由监听]
     * @param  {[rowskey]} id [description]
     * @return {[null]}    [description]
     */


    _proto.handleDeleteRoute = function handleDeleteRoute(id) {
      var _this$props = this.props,
          actions = _this$props.actions,
          history = _this$props.history;
      var key = id || this.getSelectKeys();
      actions.deleteRoute(key);
    };
    /**
     * [handleFilter 监听过滤方法，即搜索提交]
     * @param  {[object]} value [过滤数据条件对象]
     * @return {[type]}       [无]
     */


    _proto.handleFilter = function handleFilter(value) {
      var actions = this.props.actions;
      actions.listAction(value);
    };
    /**
     * [onChange 表格分页排序发生变化]
     * @param  {[type]} pagination [description]
     * @param  {[type]} filters    [description]
     * @param  {[type]} sorter     [description]
     * @return {[type]}            [description]
     */


    _proto.onChange = function onChange(pagination, filters, sorter) {
      var params = this.props.reduce.params;
      var object = Object.assign({}, params, pagination, sorter);
      this.handleFilter(object);
    };
    /**
     * 渲染搜索组件
     * @return {null} [description]
     */


    _proto.renderSearchBar = function renderSearchBar() {
      return null;
    };

    _proto.render = function render() {
      return null;
    };

    return ListPage;
  }(Page);
  ListPage.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    actionsType: PropTypes.object
  };

  var FormPage =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(FormPage, _Component);

    function FormPage(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        error: null,
        errorInfo: null
      };
      return _this;
    }

    var _proto = FormPage.prototype;

    _proto.goBack = function goBack() {
      var history = this.props.history;
      history.goBack();
    };

    _proto.goAdd = function goAdd() {
      this.goRoutes("add");
    };

    _proto.goEdit = function goEdit(route) {
      this.goRoutes("edit/" + route);
    };

    _proto.goRoutes = function goRoutes(route) {
      var _this$props = this.props,
          history = _this$props.history,
          match = _this$props.match;
      history.push(match.path + "/" + route);
    };

    _proto.componentDidCatch = function componentDidCatch(error, errorInfo) {
      // Display fallback UI
      this.setState({
        error: error,
        errorInfo: errorInfo
      }); // You can also log the error to an error reporting service
      // console.log(error, errorInfo);
    };

    _proto.saveFormRef = function saveFormRef(form) {
      console.log(form);
      this.form = form;
    };

    _proto.onSubmit = function onSubmit(actionType) {
      var _this2 = this;

      // console.log(arguments)
      if (actionType === 'handleSubmit') {
        this.form.validateFieldsAndScroll({
          force: true,
          first: true
        }, function (err, values) {
          if (err) {
            return;
          }

          _this2.handleSubmit(values);
        });
      } else {
        this[actionType].apply(this, [this.form.getFieldsValue()]);
      }
    };

    _proto.handleSubmit = function handleSubmit(values) {
      var actions = this.props.actions;
    };

    _proto.render = function render() {
      // Normally, just render children
      return this.props.children;
    };

    return FormPage;
  }(React.Component);

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var index = (function (ModalAndView) {
    return function (InnerComponent) {
      return (
        /*#__PURE__*/
        function (_Component) {
          _inheritsLoose(_class, _Component);

          function _class() {
            return _Component.apply(this, arguments) || this;
          }

          var _proto = _class.prototype;

          _proto.handleBackRoute = function handleBackRoute() {
            var _this$props = this.props,
                actions = _this$props.actions,
                history = _this$props.history,
                router = _this$props.router;
            console.log("onCancel", this.props); //  actions.backRoute(router)
          };

          _proto.handleSaveRoute = function handleSaveRoute() {
            console.log("onSure", this.props); // let { formView } =this.refs
            //console.log(formView)
            // formView.onSubmit()
          };

          _proto.render = function render() {
            var _this$props2 = this.props,
                children = _this$props2.children,
                otherProps = _objectWithoutPropertiesLoose(_this$props2, ["children"]);

            return React__default.createElement(ModalAndView, _extends({
              title: "titl",
              visible: true,
              maskClosable: false,
              onCancel: this.handleBackRoute.bind(this),
              onOk: this.handleSaveRoute.bind(this)
            }, otherProps), React__default.createElement(InnerComponent, _extends({}, otherProps)));
          };

          return _class;
        }(React.Component)
      );
    };
  });
  /*
  class ModalAndView extends Component {

    handleBackRoute() {
      let {actions, history,router} = this.props
    //  actions.backRoute(router)
    }
    handleSaveRoute(){
      // let { formView } =this.refs
      //console.log(formView)
      // formView.onSubmit()
    }

    render() {
      var {route, children,...otherProps} = this.props
  //	console.log(this.props)
      return (
        <Modal title={"titl"} visible={true} maskClosable={false} onCancel={this.handleBackRoute.bind(this)} onOk={this.handleSaveRoute.bind(this)} {...otherProps}>
          {
            React.cloneElement(children,Object.assign({},otherProps,{
               // ref:"formView"
            }))
          }
        </Modal>
      )
    }
  }
  */
  //export default withRouter(ModalAndView)
  // export default ModalAndView

  exports.ListPage = ListPage;
  exports.FormPage = FormPage;
  exports.ModalAndView = index;
  exports.default = ListPage;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-workBench-finance-deposit-deposit"],{"0e61":function(e,t,i){"use strict";i.r(t);var a=i("817e"),n=i("e862");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("d6a8");var l,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"934cb28c",null,!1,a["a"],l);t["default"]=s.exports},"5b85":function(e,t,i){var a=i("e4b5");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("04af9768",a,!0,{sourceMap:!1,shadowMode:!1})},"817e":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var a={"w-picker":i("e2b1").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"focus-follow-page"},[i("v-uni-view",{staticClass:"filter-btn-group"},[i("v-uni-view",{staticClass:"status",class:{active:2===e.mask},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleOperation(2)}}},[e._v("筛选"),i("v-uni-text",{staticClass:"iconfont icon-arrow-right"})],1),i("v-uni-view",{staticClass:"staff",class:{active:3===e.mask},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectStaff.apply(void 0,arguments)}}},[e._v("员工"),i("v-uni-text",{staticClass:"iconfont icon-arrow-right"})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.mask,expression:"mask"}],staticClass:"mask-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickMask.apply(void 0,arguments)}}},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===e.mask,expression:"mask === 2"}],staticClass:"sort-container",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[i("v-uni-view",{staticClass:"time-select"},[i("v-uni-view",{staticClass:"time-select-label"},[e._v("收支方式")]),i("v-uni-view",{staticClass:"time-select-list"},e._l(e.dateRangeList,(function(t){return i("v-uni-view",{key:t.id,staticClass:"time-select-item",class:{selected:e.selectedId===t.id},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.selectedItem(t)}}},[e._v(e._s(t.label))])})),1)],1),i("v-uni-view",{staticClass:"time-select"},[i("v-uni-view",{staticClass:"time-select-label"},[e._v("记录状态")]),i("v-uni-view",{staticClass:"time-select-list"},e._l(e.recordStatus,(function(t){return i("v-uni-view",{key:t.id,staticClass:"time-select-item",class:{selected:e.recordStatusIndex===t.id},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.recordStatusIndex=t.id}}},[e._v(e._s(t.label))])})),1)],1),i("v-uni-view",{staticClass:"time-select"},[i("v-uni-view",{staticClass:"time-select-label"},[e._v("财务确认")]),i("v-uni-view",{staticClass:"time-select-list"},e._l(e.financeConfirm,(function(t){return i("v-uni-view",{key:t.id,staticClass:"time-select-item",class:{selected:e.financeConfirmIndex===t.id},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.financeConfirmIndex=t.id}}},[e._v(e._s(t.label))])})),1)],1),i("v-uni-view",{staticClass:"filter-bottom"},[i("v-uni-button",{attrs:{type:"primary",size:"mini",plain:"true"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.filterReset.apply(void 0,arguments)}}},[e._v("重置")]),i("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.filterConfirm.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1),i("v-uni-view",{staticClass:"list-container"},[i("v-uni-scroll-view",{staticStyle:{flex:"1"},attrs:{"scroll-y":"true",enableBackToTop:"true"},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.loadMore()}}},[e._l(e.listData,(function(t){return i("v-uni-view",{key:t.id,staticClass:"item"},[i("v-uni-view",{staticClass:"item-right"},[i("v-uni-view",{staticClass:"item-right-top"},[i("v-uni-view",[i("v-uni-text",[e._v(e._s(t.cusName)+" ("+e._s(t.cusId)+")")])],1),i("v-uni-view",[e._v("协议编号：DY110")])],1),i("v-uni-view",{staticClass:"item-right-center"},[i("v-uni-text",[e._v("收支人员：张三")]),i("v-uni-text",[e._v("定金：500")])],1),i("v-uni-view",{staticClass:"item-right-center"},[i("v-uni-text",[e._v("退款金额：500")]),i("v-uni-text",[e._v("收支时间：2020-03-03")])],1),i("v-uni-view",{staticClass:"item-right-center"},[i("v-uni-text",[e._v("录入人员：李四")]),i("v-uni-text",[e._v("状态：退定金")])],1),i("v-uni-view",{staticClass:"item-right-bottom"},[i("v-uni-view",{staticClass:"btn-group"},[e._v("未确认"),i("v-uni-button",{staticClass:"btn-success",attrs:{size:"mini"}},[e._v("财务确认")]),i("v-uni-button",{staticClass:"btn-primary",attrs:{size:"mini"}},[e._v("借款")]),i("v-uni-button",{staticClass:"btn-info",attrs:{size:"mini"}},[e._v("退定")]),i("v-uni-button",{staticClass:"btn-danger",attrs:{size:"mini"}},[e._v("作废")])],1)],1)],1)],1)})),e.isLoading||e.listData.length>10?i("v-uni-view",{staticClass:"loading-more"},[i("v-uni-text",{staticClass:"loading-more-text"},[e._v(e._s(e.loadingText))])],1):e._e()],2)],1),i("w-picker",{ref:"linkage",attrs:{mode:"linkage",level:3,linkList:e.linkList,themeColor:"#007aff"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)}}})],1)},o=[]},"97e1":function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("28a5");var n=a(i("e2b1")),o={components:{wPicker:n.default},data:function(){return{startDateVal:null,endDateVal:null,isLoading:!1,loadingText:"加载更多...",listData:[{id:1,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:2,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:3,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:4,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:5,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:6,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:7,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:8,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:9,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:10,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"}],mask:!1,linkList:[{label:"中心1",value:"10000",children:[{label:"部门1",value:"",children:[{label:"员工1",value:"20"}]}]},{label:"中心2",value:"10000",children:[{label:"部门2",value:"",children:[{label:"员工2",value:"20"}]}]}],dateRangeList:[{id:1,label:"现金"},{id:2,label:"支付宝"},{id:3,label:"微信"},{id:4,label:"网银"},{id:5,label:"代扣"}],selectedId:"",recordStatus:[{id:1,label:"正常"},{id:2,label:"作废"},{id:3,label:"退定"}],recordStatusIndex:"",financeConfirm:[{id:1,label:"未确认"},{id:2,label:"通过"}],financeConfirmIndex:""}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(){},methods:{clickItem:function(){uni.navigateTo({url:"/pages/workBench/yingxiao/sign/detail/detail"})},bindStartDateChange:function(e){console.log(e.target.value),this.timeStr(e.target.value)>this.timeStr(this.endDateVal)?uni.showToast({title:"开始时间不能大于结束时间",icon:"none"}):this.startDateVal=e.target.value},bindEndDateChange:function(e){console.log(e.target.value),this.timeStr(e.target.value)<this.timeStr(this.startDateVal)?uni.showToast({title:"开始时间不能大于结束时间",icon:"none"}):this.endDateVal=e.target.value},timeStr:function(e){if(console.log(e),e)return new Date(e.split("-").join("/")).getTime()},getDate:function(e){var t=new Date,i=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return"start"===e?i-=10:"end"===e&&(i+=10),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(i,"-").concat(a,"-").concat(n)},loadMore:function(e){var t=this;setTimeout((function(){t.getList()}),500)},getList:function(e){var t=[{id:1,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:2,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:3,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:4,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:5,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:6,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:7,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:8,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:9,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"},{id:10,cusName:"胡德兵",cusId:"3837",phone:"1388889999",type:"待审核",manageName:"张三",follow:"2020-03-02"}];this.listData=this.listData.concat(t)},filterConfirm:function(){},filterReset:function(){this.selectedId="",this.recordStatusIndex="",this.financeConfirmIndex=""},selectedItem:function(e){this.selectedId=e.id},selectStaff:function(){this.$refs.linkage.show()},handleOperation:function(e){console.log(this.mask),0===e?(this.isOpenOperationBtn=!this.isOpenOperationBtn,this.mask=0):(this.mask=e,this.isOpenOperationBtn=!1)},clickMask:function(){this.mask=!1}}};t.default=o},d6a8:function(e,t,i){"use strict";var a=i("5b85"),n=i.n(a);n.a},e4b5:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'.focus-follow-page[data-v-934cb28c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%;position:relative}.list-container[data-v-934cb28c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;overflow:hidden}.item[data-v-934cb28c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background-color:#fff;position:relative}.item[data-v-934cb28c]::after{position:absolute;z-index:3;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.item-right[data-v-934cb28c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n  /* margin-left: 20upx; */}.item-right-top[data-v-934cb28c],\n.item-right-center[data-v-934cb28c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.item-right-center[data-v-934cb28c],\n.item-right-bottom[data-v-934cb28c]{font-size:%?24?%}.loading-more[data-v-934cb28c]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading-more-text[data-v-934cb28c]{font-size:%?28?%;color:#999}.filter-btn-group[data-v-934cb28c]{width:100%;height:%?80?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.filter-btn-group .iconfont[data-v-934cb28c]{font-size:%?22?%;vertical-align:middle;margin:0 %?8?%;color:#ccc}.filter-btn-group[data-v-934cb28c]::after{position:absolute;z-index:3;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.filter-btn-group > uni-button[data-v-934cb28c]{margin:0 %?10?%}.status.active[data-v-934cb28c],\n.type.active[data-v-934cb28c],\n.staff.active[data-v-934cb28c]{color:#007aff}.mask-wrap[data-v-934cb28c]{position:absolute;top:40px;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:7}.sort-container[data-v-934cb28c],\n.filter-container[data-v-934cb28c],\n.type-container[data-v-934cb28c]{background-color:#fff}.sort-container > uni-view[data-v-934cb28c],\n.type-container > uni-view[data-v-934cb28c]{line-height:%?80?%;padding:0 %?36?%;border-bottom:1px solid #f2f2f2}.sort-container > uni-view[data-v-934cb28c]:last-child,\n.type-container > uni-view[data-v-934cb28c]:last-child{border:none}.time-select[data-v-934cb28c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?20?% %?30?%;background-color:#fff;border-bottom:%?1?% solid #f1f1f1}.time-select-label[data-v-934cb28c]{line-height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;font-size:%?28?%;color:#999}.time-select-list[data-v-934cb28c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:%?20?%}.time-select-item[data-v-934cb28c]{\n  /* width: 150upx; */\n  /* height: 64upx; */\n  /* line-height: 64upx; */padding:%?10?% %?30?%;margin:%?10?%;background-color:#f4f4f4;border-radius:%?10?%;color:#666;text-align:center;font-size:%?24?%}.time-select-item.selected[data-v-934cb28c]{background-color:#007aff;color:#fff}.filter-bottom[data-v-934cb28c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;padding:0 %?36?%;border-top:1px solid #f2f2f2}.fixed-bottom[data-v-934cb28c]{z-index:10;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%;background-color:#fff;border-top:%?1?% solid #ccc}.fixed-bottom .operation[data-v-934cb28c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.fixed-bottom .operation uni-button[data-v-934cb28c]{padding:0 1em;margin:0;\n  /* margin-left: 20upx; */font-size:%?24?%}.picker-data-container[data-v-934cb28c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.cus-type[data-v-934cb28c]{margin-left:%?20?%;padding:%?4?% %?10?%;font-size:%?20?%;background-color:#19aa8d;border-radius:%?8?%;color:#fff}',""]),e.exports=t},e862:function(e,t,i){"use strict";i.r(t);var a=i("97e1"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a}}]);
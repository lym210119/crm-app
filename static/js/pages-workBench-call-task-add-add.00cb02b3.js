(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-workBench-call-task-add-add"],{3820:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"add-staff-page"},[i("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":"true"}},[i("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label required"},[t._v("任务名称")]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-input",{attrs:{type:"text",name:"taskname",placeholder:"请输入任务名称"}})],1)],1),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label required"},[t._v("日期范围")]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-view",{staticClass:"item-value picker-data-container"},[i("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"dateRange",value:t.startDateVal+"~"+t.endDateVal}}),i("v-uni-picker",{attrs:{mode:"date",value:t.startDateVal,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindStartDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.startDateVal?t.startDateVal:"开始时间"))])],1),i("v-uni-view",{},[t._v("--")]),i("v-uni-picker",{attrs:{mode:"date",value:t.endDateVal,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindEndDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.endDateVal?t.endDateVal:"结束时间"))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label required"},[t._v("上午时段")]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-view",{staticClass:"item-value picker-data-container"},[i("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"timeAM",value:t.startTimeAM+"~"+t.endTimeAM}}),i("v-uni-picker",{attrs:{mode:"time",value:t.startTimeAM},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStartTimeAM.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.startTimeAM))])],1),i("v-uni-view",[t._v("--")]),i("v-uni-picker",{attrs:{mode:"time",value:t.endTimeAM},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeEndTimeAM.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.endTimeAM))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label required"},[t._v("下午时段")]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-view",{staticClass:"item-value picker-data-container"},[i("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"timePM",value:t.startTimePM+"~"+t.endTimePM}}),i("v-uni-picker",{attrs:{mode:"time",value:t.startTimePM},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStartTimePM.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.startTimePM))])],1),i("v-uni-view",[t._v("--")]),i("v-uni-picker",{attrs:{mode:"time",value:t.endTimePM},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeEndTimePM.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.endTimePM))])],1)],1)],1)],1),t.isEdit?t._e():[i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label required"},[t._v("添加方式")]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-view",{staticClass:"item-value"},[i("v-uni-radio-group",{attrs:{name:"addType"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAddType.apply(void 0,arguments)}}},t._l(t.addType,(function(e,a){return i("v-uni-label",{key:e.value},[i("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:e.value,checked:"1"===e.value}}),t._v(t._s(e.name))],1)})),1)],1)],1)],1),t.isEdit||"1"!==t.addTypeIndex?t._e():i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label required"},[t._v("添加条数")]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-view",{staticClass:"item-value"},[i("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"addNum",value:t.addNum[t.addNumIndex]}}),i("v-uni-picker",{attrs:{range:t.addNum,value:t.addNumIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAddNum.apply(void 0,arguments)}}},[i("v-uni-text",{class:{"text-gray":null===t.addNumIndex}},[t._v(t._s(null===t.addNumIndex?"请选择添加条数":t.addNum[t.addNumIndex]))])],1)],1)],1)],1),t.isEdit||"2"!==t.addTypeIndex?t._e():i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label"},[t._v("上传文件")]),i("v-uni-view",{staticClass:"uplaod"},[i("v-uni-button",{staticClass:"btn-success",attrs:{size:"mini"}},[t._v("下载模版")]),i("v-uni-button",{staticClass:"btn-primary",attrs:{size:"mini"}},[t._v("上传文件")])],1)],1)],i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label required"},[t._v("呼叫比率")]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-view",{staticClass:"item-value"},[i("v-uni-radio-group",{attrs:{name:"callRate"}},[i("v-uni-label",[i("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"1",checked:!0}}),t._v("1")],1),i("v-uni-label",[i("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"2"}}),t._v("2")],1),i("v-uni-label",[i("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"3"}}),t._v("3")],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label required"},[t._v("是否智能调节比率")]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-view",{staticClass:"item-value"},[i("v-uni-checkbox-group",{attrs:{name:"isOpenCallRate"}},[i("v-uni-label",[i("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"1"}})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-label required"},[t._v("呼叫频次")]),i("v-uni-view",{staticClass:"item-value"},[i("v-uni-view",{staticClass:"item-value"},[i("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"callNum",value:t.callNum[t.callNumIndex]}}),i("v-uni-picker",{attrs:{range:t.callNum,value:t.callNumIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCallNum.apply(void 0,arguments)}}},[i("v-uni-text",{class:{"text-gray":null===t.callNumIndex}},[t._v(t._s(null===t.callNumIndex?"请选择呼叫频次":t.callNum[t.callNumIndex]))])],1)],1)],1)],1),i("v-uni-button",{ref:"submitBtn",attrs:{"form-type":"submit"}})],2)],1)],1)},s=[]},6584:function(t,e,i){var a=i("b168");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e298d954",a,!0,{sourceMap:!1,shadowMode:!1})},"77ac":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5");var a={onLoad:function(t){t.type?(this.title="修改任务",this.isEdit=!0):this.title="新增任务",uni.setNavigationBarTitle({title:this.title}),console.log(this.isEdit),console.log(!this.isEdit&&"1"===this.addTypeIndex),console.log(!this.isEdit&&"2"===this.addTypeIndex)},data:function(){return{title:"新增任务",startDateVal:null,endDateVal:null,startTimeAM:"00:00",endTimeAM:"00:00",startTimePM:"00:00",endTimePM:"00:00",addTypeIndex:"1",addType:[{value:"1",name:"公海导入"},{value:"2",name:"手动导入"}],addNumIndex:null,addNum:["1000","2000","3000","5000","10000","30000","50000"],callNumIndex:null,callNum:["10","20","30","40","50","60"],isEdit:!1}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onNavigationBarButtonTap:function(t){this.$refs.submitBtn.$dispatch("Form","uni-form-submit",{type:"submit"})},methods:{changeAddType:function(t){this.addTypeIndex=t.target.value},changeCallNum:function(t){this.callNumIndex=t.target.value},changeAddNum:function(t){this.addNumIndex=t.target.value},changeStartTimeAM:function(t){this.startTimeAM=t.target.value},changeEndTimeAM:function(t){this.endTimeAM=t.target.value},changeStartTimePM:function(t){this.startTimePM=t.target.value},changeEndTimePM:function(t){this.endTimePM=t.target.value},bindStartDateChange:function(t){console.log(t.target.value),this.timeStr(t.target.value)>this.timeStr(this.endDateVal)?uni.showToast({title:"开始时间不能大于结束时间",icon:"none"}):this.startDateVal=t.target.value},bindEndDateChange:function(t){console.log(t.target.value),this.timeStr(t.target.value)<this.timeStr(this.startDateVal)?uni.showToast({title:"开始时间不能大于结束时间",icon:"none"}):this.endDateVal=t.target.value},timeStr:function(t){if(console.log(t),t)return new Date(t.split("-").join("/")).getTime()},getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===t?i-=10:"end"===t&&(i+=10),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(i,"-").concat(a,"-").concat(n)},submit:function(t){var e=t.detail.value;console.log(e)}}};e.default=a},"9dad":function(t,e,i){"use strict";var a=i("6584"),n=i.n(a);n.a},b168:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.add-staff-page[data-v-535fda11]{height:100%;background-color:#fff}.list-item[data-v-535fda11]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?94?%;padding:0 %?30?%;border-bottom:%?1?% solid #f2f2f2}.item-label.required[data-v-535fda11]::after{content:"*";color:red}.item-value[data-v-535fda11]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;font-size:%?32?%}.item-value uni-input[data-v-535fda11]{\n  /* padding-right: 20upx; */text-align:right}.text-gray[data-v-535fda11]{color:grey}.list-textarea[data-v-535fda11]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;padding:0 %?30?%;border-bottom:%?1?% solid #f2f2f2}.list-textarea .item-label[data-v-535fda11]{height:%?94?%;line-height:%?94?%}.list-textarea > .item-value[data-v-535fda11]{width:100%}.list-textarea uni-textarea[data-v-535fda11]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?32?%;width:100%;height:%?160?%;text-align:left}.picker-data-container[data-v-535fda11]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end\n  /* margin-left: 150upx; */}.uplaod[data-v-535fda11]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;text-align:right}',""]),t.exports=e},d393:function(t,e,i){"use strict";i.r(e);var a=i("77ac"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},e61a:function(t,e,i){"use strict";i.r(e);var a=i("3820"),n=i("d393");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("9dad");var l,u=i("f0c5"),v=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"535fda11",null,!1,a["a"],l);e["default"]=v.exports}}]);
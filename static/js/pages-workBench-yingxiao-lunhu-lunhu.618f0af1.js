(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-workBench-yingxiao-lunhu-lunhu"],{"099c":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("60bb")),o=n(i("2ba4")),r={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcons:o.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=r},"09d1":function(t,e,i){"use strict";var n=i("ea30"),a=i.n(n);a.a},"0fdc":function(t,e,i){"use strict";i.r(e);var n=i("7f05"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1c89":function(t,e,i){"use strict";i.r(e);var n=i("5fc2"),a=i("f441");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("09d1");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"43ad3046",null,!1,n["a"],r);e["default"]=c.exports},"1e5a":function(t,e,i){var n=i("7ca8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("16066a1f",n,!0,{sourceMap:!1,shadowMode:!1})},"230d":function(t,e,i){"use strict";i.r(e);var n=i("9e80"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},2331:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},o=[]},2769:function(t,e,i){"use strict";var n=i("8513"),a=i.n(n);a.a},"2a5c":function(t,e,i){"use strict";var n=i("1e5a"),a=i.n(n);a.a},"2f91":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={"uni-status-bar":i("60bb").default,"uni-icons":i("2ba4").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-navbar"},[i("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[i("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),i("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?i("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?i("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},o=[]},3200:function(t,e,i){"use strict";i.r(e);var n=i("fcbe"),a=i("e2ca");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2769");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b9fa4e64",null,!1,n["a"],r);e["default"]=c.exports},"40bc":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("3200")),o={name:"UniPopup",components:{uniTransition:a.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0}),50)})),this.$emit("change",{show:!0})},close:function(t){var e=this;this.showTrans=!1,this.$nextTick((function(){clearTimeout(e.timer),e.timer=setTimeout((function(){e.$emit("change",{show:!1}),e.showPopup=!1}),300)}))},onTap:function(){this.maskClick&&this.close()}}};e.default=o},"4a88":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-popup[data-v-43ad3046]{position:fixed;\n\t\ttop:var(--window-top);\n\t\t\n\t\tbottom:0;left:0;right:0;\n\t\tz-index:99\n\t\t}.uni-popup__mask[data-v-43ad3046]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-43ad3046]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-43ad3046]{opacity:1}.uni-bottom-mask[data-v-43ad3046]{opacity:1}.uni-center-mask[data-v-43ad3046]{opacity:1}.uni-popup__wrapper[data-v-43ad3046]{\n\t\tdisplay:block;\n\t\tposition:absolute}.top[data-v-43ad3046]{top:0;left:0;right:0;-webkit-transform:translateY(-500px);transform:translateY(-500px)}.bottom[data-v-43ad3046]{bottom:0;left:0;right:0;-webkit-transform:translateY(500px);transform:translateY(500px)}.center[data-v-43ad3046]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\tbottom:0;left:0;right:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-43ad3046]{\n\t\tdisplay:block;\n\t\tposition:relative}.content-ani[data-v-43ad3046]{\n\t\t/* transition: transform 0.3s;\n */-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-43ad3046]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-43ad3046]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-43ad3046]{-webkit-transform:scale(1);transform:scale(1);opacity:1}",""]),t.exports=e},5474:function(t,e,i){var n=i("aaf6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6d5cc5da",n,!0,{sourceMap:!1,shadowMode:!1})},5911:function(t,e,i){var n=i("a45e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("616378e6",n,!0,{sourceMap:!1,shadowMode:!1})},"5fc2":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={"uni-transition":i("3200").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showPopup?i("v-uni-view",{staticClass:"uni-popup",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}}),i("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[]},"60bb":function(t,e,i){"use strict";i.r(e);var n=i("2331"),a=i("0fdc");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2a5c");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"092bfc27",null,!1,n["a"],r);e["default"]=c.exports},"7ca8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-status-bar[data-v-092bfc27]{width:%?750?%;height:20px\n\t\t/* height: var(--status-bar-height);\n */}",""]),t.exports=e},"7f05":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:n}}};e.default=a},8513:function(t,e,i){var n=i("d405");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("12bf4548",n,!0,{sourceMap:!1,shadowMode:!1})},"9e80":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("6762"),i("2fdb");var a=n(i("f31d")),o=n(i("1c89")),r=n(i("2ba4")),s={components:{uniNavBar:a.default,uniPopup:o.default,uniIcons:r.default},data:function(){return{ageList:["18-24岁","24-55岁","55-65岁","65岁以上"],ageIndex:0,moneyList:["暂不确定","2万元以下","2~5万元","5~10万元","10~30万元","30~50万元","50~100万元","100~300万元","300~500万元","500~1000万元","1000万元以上"],moneyIndex:0,cusTypeList:["潜在","意向","需求"],cusTypeIndex:0,tagList:["开场白","全款房","有预期","有社保","公积金"],tagStaticList:["生意","上班","待业","信用卡","微粒贷","按揭房","全款房","有保单","有社保","公积金","按揭车","全款车","白户","有逾期","黑名单"],followTags:["不需要","无人接","开场挂","需回拨","挂断","停机","关机","空号"],followValue:"heool",followList:[{id:10001,handles:"张山",date:"2020-02-21 14:23:34",followContent:"有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"},{id:10002,handles:"张山",date:"2020-02-21 14:23:34",followContent:"有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"},{id:10003,handles:"张山",date:"2020-02-21 14:23:34",followContent:"有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"},{id:10004,handles:"张山",date:"2020-02-21 14:23:34",followContent:"有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"},{id:10005,handles:"张山",date:"2020-02-21 14:23:34",followContent:"有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；"}]}},onLoad:function(t){var e=JSON.parse(decodeURIComponent(t.data));console.log(e)},methods:{clickStart:function(){uni.showToast({icon:"none",title:"start"})},clickBack:function(){uni.showModal({title:"提示",content:"你还有50人未呼，确定要退出吗？",success:function(t){t.confirm&&uni.navigateBack()}})},startLunHu:function(){uni.showToast({icon:"none",title:"开始轮呼"})},changeAge:function(t){this.ageIndex=t.detail.value},changeMoney:function(t){this.moneyIndex=t.detail.value},changeCusType:function(t){this.cusTypeIndex=t.detail.value},removeTag:function(t){var e=this;uni.showModal({title:"提示",content:"是否删除该客户身上的 “"+t+"” 标签？",success:function(i){i.confirm&&e.tagList.indexOf(t)>-1&&e.tagList.splice(t,1)}})},clickStaticTag:function(t){this.tagList.includes(t)||this.tagList.push(t)},clickFollowTag:function(t){this.followValue=t},showHistoryFollow:function(){this.$refs.popup.open()}}};e.default=s},a45e:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.lunhu-page[data-v-849241ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%;overflow:hidden;background-color:#fff}.navbar-title[data-v-849241ec]{width:100%;text-align:center}.navbar-left[data-v-849241ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;\n  /* margin-left: 16upx; */font-size:%?24?%}.navbar-left .start[data-v-849241ec]{margin-left:%?25?%;background-color:#fff;padding:0 %?16?%;white-space:nowrap;border-radius:%?10?%;color:#333}.navbar-right uni-view[data-v-849241ec]{font-size:%?24?%}.form-item[data-v-849241ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-bottom:1px solid #ccc}.form-item .age[data-v-849241ec],\n.form-item .money[data-v-849241ec],\n.form-item .goHomeStatus[data-v-849241ec],\n.form-item .cus-type[data-v-849241ec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?10?% %?30?%}.picker[data-v-849241ec]{display:inline-block}.picker .icon-bianji[data-v-849241ec]{margin-left:%?20?%;font-size:%?28?%}.form-item-con[data-v-849241ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?20?% %?30?%;border-bottom:%?1?% solid #ccc}.form-item-con .item-left[data-v-849241ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.form-item-con .item-right[data-v-849241ec]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.form-item-con .item-right uni-textarea[data-v-849241ec]{width:100%}.tag-item[data-v-849241ec]{display:inline-block;border-radius:%?10?%;background-color:#f8f8f8;color:#959595;margin-right:%?10?%;padding:0 %?10?%;font-size:%?24?%;white-space:nowrap}.tag-item .iconfont[data-v-849241ec]{margin-left:%?10?%;font-size:%?24?%}.tag-add-btn[data-v-849241ec]{display:inline-block;margin-right:%?10?%;padding:0 %?10?%;font-size:%?24?%;background-color:#19aa8d;border-radius:%?10?%;color:#fff}.tag-add-btn .iconfont[data-v-849241ec]{margin-right:%?10?%;font-size:%?24?%}.tag-list-static[data-v-849241ec]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.tag-list-static .badge[data-v-849241ec]{display:inline-block;border-radius:%?10?%;background-color:#23c6ca;color:#fff;margin-right:%?10?%;margin-bottom:%?10?%;padding:0 %?10?%;font-size:%?24?%;white-space:nowrap}.follow-badge[data-v-849241ec]{display:inline-block;border-radius:%?10?%;background-color:#19aa8d;color:#fff;margin-right:%?10?%;margin-bottom:%?10?%;padding:0 %?10?%;font-size:%?24?%;white-space:nowrap}.btn-group[data-v-849241ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?30?%}.history-follow-container[data-v-849241ec]{\n  /* position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); */width:90%;height:%?1000?%;margin:0 5%;background-color:#fff;border-radius:%?10?%}.follow-steps[data-v-849241ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:0 %?30?%}.follow-steps-left[data-v-849241ec]{padding-right:%?20?%}.steps-left-line[data-v-849241ec]{position:relative;width:%?2?%;height:100%;background-color:#ccc}.steps-left-line[data-v-849241ec]::before{content:"";position:absolute;top:%?20?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?16?%;height:%?16?%;background-color:#0870fe;border-radius:50%;border:%?8?% solid #b3d9e9}.follow-steps-right[data-v-849241ec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.steps-right-head[data-v-849241ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;padding:0 %?20?%;color:#0870fe;font-weight:400}.steps-right-content[data-v-849241ec]{padding:%?20?%;margin-bottom:%?20?%;border-radius:%?10?%;border:%?1?% solid #ccc}.right-content-item[data-v-849241ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.right-content-item > uni-view[data-v-849241ec]{font-size:%?24?%}.right-content-item .icon-play[data-v-849241ec]{height:%?50?%;line-height:%?50?%;font-size:%?50?%;color:#19aa8d}',""]),t.exports=e},aaf6:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-nav-bar-text[data-v-bc197916]{\n\t\t\n\t\tfont-size:%?32?%\n\t\t}.uni-nav-bar-right-text[data-v-bc197916]{font-size:%?28?%}.uni-navbar__content[data-v-bc197916]{position:relative;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-bc197916]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n\t\t/* background-color: #FFFFFF;\n */}.uni-navbar__header[data-v-bc197916]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:44px;line-height:44px;font-size:16px\n\t\t/* background-color: #ffffff;\n */}.uni-navbar__header-btns[data-v-bc197916]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-bc197916]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\twidth:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-bc197916]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\twidth:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-bc197916]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-bc197916]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-bc197916]{height:44px}.uni-navbar--fixed[data-v-bc197916]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-bc197916]{\n\t\tbox-shadow:0 1px 6px #ccc\n\t\t}.uni-navbar--border[data-v-bc197916]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#e5e5e5}",""]),t.exports=e},ae56:function(t,e,i){"use strict";i.r(e);var n=i("099c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},bbf9:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("8e6e"),i("456d"),i("a481"),i("ac6a");var a=n(i("bd86"));function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){(0,a.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}i("c5f6");var s={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=r({},this.styles,{"transition-duration":this.duration/1e3+"s"}),e="";for(var i in t){var n=this.toLine(i);e+=n+":"+t[i]+";"}return e}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var e in this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===e?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[e]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){this._animation(!1)},_animation:function(t){var e=this,i=this.getTranfrom(t);for(var n in this.transform="",i)"opacity"===n?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(i[n]," ");clearTimeout(this.timer),this.timer=setTimeout((function(){t||(e.isShow=!1),e.$emit("change",{detail:e.isShow})}),this.duration)},getTranfrom:function(t){var e={transform:""};return this.modeClass.forEach((function(i){switch(i){case"fade":e.opacity=t?1:0;break;case"slide-top":e.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":e.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":e.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":e.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":e.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":e.transform+="scale(".concat(t?1:1.2,") ");break}})),e},_modeClassArr:function(t){var e=this.modeClass;if("string"!==typeof e){var i="";return e.forEach((function(e){i+=e+"-"+t+","})),i.substr(0,i.length-1)}return e+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=s},d405:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-transition[data-v-b9fa4e64]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-b9fa4e64]{opacity:0}.fade-active[data-v-b9fa4e64]{opacity:1}.slide-top-in[data-v-b9fa4e64]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-b9fa4e64]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-b9fa4e64]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-b9fa4e64]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-b9fa4e64]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-b9fa4e64]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-b9fa4e64]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-b9fa4e64]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-b9fa4e64]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-b9fa4e64]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-b9fa4e64]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=e},d463:function(t,e,i){"use strict";var n=i("5474"),a=i.n(n);a.a},d523:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={"uni-nav-bar":i("f31d").default,"uni-icons":i("2ba4").default,"uni-popup":i("1c89").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"lunhu-page"},[i("uni-nav-bar",{attrs:{statusBar:"true",backgroundColor:"#19aa8d",color:"#fff"}},[i("v-uni-view",{staticClass:"navbar-title"},[i("v-uni-view",[t._v("张三 先生（10086）")]),i("v-uni-view",{staticStyle:{"font-size":"24upx"}},[t._v("剩余 50 人未呼")])],1),i("v-uni-view",{staticClass:"navbar-left",attrs:{slot:"left"},slot:"left"},[i("uni-icons",{attrs:{type:"arrowleft",size:"26",color:"#fff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickBack.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"start",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickStart.apply(void 0,arguments)}}},[t._v("开始")])],1),i("v-uni-view",{staticClass:"navbar-right",attrs:{slot:"right"},slot:"right"},[i("v-uni-view",[t._v("李斯斯")])],1)],1),i("v-uni-scroll-view",{staticStyle:{flex:"1",overflow:"hidden"},attrs:{"scroll-y":"true"}},[i("v-uni-form",{staticClass:"lunhu-form",on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"age"},[t._v("年龄："),i("v-uni-picker",{staticClass:"picker",attrs:{range:t.ageList,value:t.ageIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAge.apply(void 0,arguments)}}},[t._v(t._s(t.ageList[t.ageIndex])),i("v-uni-text",{staticClass:"iconfont icon-bianji"})],1)],1),i("v-uni-view",{staticClass:"money"},[t._v("金额："),i("v-uni-picker",{staticClass:"picker",attrs:{range:t.moneyList,value:t.moneyIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeMoney.apply(void 0,arguments)}}},[t._v(t._s(t.moneyList[t.moneyIndex])),i("v-uni-text",{staticClass:"iconfont icon-bianji"})],1)],1)],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-view",{staticClass:"goHomeStatus"},[t._v("上门状态：暂未到访")]),i("v-uni-view",{staticClass:"cus-type"},[t._v("客户类型："),i("v-uni-picker",{staticClass:"picker",attrs:{range:t.cusTypeList,value:t.cusTypeIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCusType.apply(void 0,arguments)}}},[t._v(t._s(t.cusTypeList[t.cusTypeIndex])),i("v-uni-text",{staticClass:"iconfont icon-bianji"})],1)],1)],1),i("v-uni-view",{staticClass:"form-item-con"},[i("v-uni-view",{staticClass:"item-left"},[i("v-uni-text",[t._v("客户情况：")])],1),i("v-uni-view",{staticClass:"item-right"},[i("v-uni-textarea",{staticStyle:{"font-size":"28upx",color:"#959595",flex:"1",height:"100upx",width:"auto"},attrs:{autoHeight:!1,fixed:!0,placeholder:"请输入客户情况"}})],1)],1),i("v-uni-view",{staticClass:"form-item-con"},[i("v-uni-view",{staticClass:"item-left"},[t._v("客户标签：")]),i("v-uni-view",{staticClass:"item-right"},[i("v-uni-view",{staticClass:"tag-box"},t._l(t.tagList,(function(e,n){return i("v-uni-text",{key:n,staticClass:"tag-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.removeTag(e)}}},[t._v(t._s(e)),i("v-uni-text",{staticClass:"iconfont icon-hebingxingzhuang"})],1)})),1)],1)],1),i("v-uni-view",{staticClass:"form-item-con tag-list-static"},t._l(t.tagStaticList,(function(e,n){return i("v-uni-text",{key:n,staticClass:"badge",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickStaticTag(e)}}},[t._v(t._s(e))])})),1),i("v-uni-view",{staticClass:"form-item-con"},[i("v-uni-view",{staticClass:"item-left"},[i("v-uni-text",[t._v("跟进内容：")])],1),i("v-uni-view",{staticClass:"item-right"},[i("v-uni-textarea",{staticStyle:{"font-size":"28upx",color:"#959595",flex:"1",height:"100upx",width:"auto"},attrs:{autoHeight:!1,fixed:!0,placeholder:"请输入跟进内容",value:t.followValue}})],1),i("v-uni-view",[i("v-uni-button",{staticClass:"item-follow",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showHistoryFollow.apply(void 0,arguments)}}},[t._v("历史跟进")])],1)],1),i("v-uni-view",{staticClass:"form-item-con tag-list-static"},t._l(t.followTags,(function(e,n){return i("v-uni-text",{key:n,staticClass:"follow-badge",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickFollowTag(e)}}},[t._v(t._s(e))])})),1),i("v-uni-view",{staticClass:"btn-group"},[i("v-uni-button",{attrs:{type:"warn",size:"mini"}},[t._v("挂断")]),i("v-uni-button",{attrs:{type:"primary",size:"mini"}},[t._v("保存")]),i("v-uni-button",{attrs:{type:"primary",size:"mini"}},[t._v("抓取保存")])],1)],1)],1),i("uni-popup",{ref:"popup",attrs:{type:"center"}},[i("v-uni-scroll-view",{staticClass:"history-follow-container",attrs:{"scroll-y":"true"}},t._l(t.followList,(function(e,n){return i("v-uni-view",{key:e.id,staticClass:"swiper-item follow-steps"},[i("v-uni-view",{staticClass:"follow-steps-left"},[i("v-uni-view",{staticClass:"steps-left-line"})],1),i("v-uni-view",{staticClass:"follow-steps-right"},[i("v-uni-view",{staticClass:"steps-right-head"},[i("v-uni-view",{staticClass:"right-date"},[t._v(t._s(e.date))])],1),i("v-uni-view",{staticClass:"steps-right-content"},[i("v-uni-view",{staticClass:"right-content-item"},[i("v-uni-view",[t._v("跟进人："+t._s(e.handles))]),i("v-uni-view",[t._v(t._s(e.time))])],1),i("v-uni-view",{staticClass:"right-content-item"},[i("v-uni-view",{staticClass:"genjin"},[t._v("跟进内容：有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；有保单；有社保；")])],1)],1)],1)],1)})),1)],1)],1)},o=[]},e2ca:function(t,e,i){"use strict";i.r(e);var n=i("bbf9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ea30:function(t,e,i){var n=i("4a88");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("615c4bf2",n,!0,{sourceMap:!1,shadowMode:!1})},f31d:function(t,e,i){"use strict";i.r(e);var n=i("2f91"),a=i("ae56");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d463");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"bc197916",null,!1,n["a"],r);e["default"]=c.exports},f347:function(t,e,i){"use strict";var n=i("5911"),a=i.n(n);a.a},f441:function(t,e,i){"use strict";i.r(e);var n=i("40bc"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f6e4:function(t,e,i){"use strict";i.r(e);var n=i("d523"),a=i("230d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f347");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"849241ec",null,!1,n["a"],r);e["default"]=c.exports},fcbe:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[]}}]);
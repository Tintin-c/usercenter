(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[785],{64335:function(Oe,re,l){"use strict";var p=l(67294),z=(0,p.createContext)({});re.Z=z},67265:function(Oe,re,l){"use strict";l.d(re,{ZP:function(){return Ht}});var p=l(38663),z=l(70883),S=l(22122),V=l(96156),H=l(6610),g=l(5991),M=l(10379),q=l(44144),_=l(90484),$=l(94184),F=l.n($),ce=l(48717),Pe=l(98423),r=l(67294),j=l(53124),me=l(85061),te=l(75164);function de(o){var e,a=function(i){return function(){e=null,o.apply(void 0,(0,me.Z)(i))}},t=function(){if(e==null){for(var i=arguments.length,d=new Array(i),f=0;f<i;f++)d[f]=arguments[f];e=(0,te.Z)(a(d))}};return t.cancel=function(){te.Z.cancel(e),e=null},t}function ne(){return function(e,a,t){var n=t.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(a))return n;var f=de(n.bind(this));return i=!0,Object.defineProperty(this,a,{value:f,configurable:!0,writable:!0}),i=!1,f}}}}var ke=l(64019);function he(o){return o!==window?o.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function Se(o,e,a){if(a!==void 0&&e.top>o.top-a)return a+e.top}function Te(o,e,a){if(a!==void 0&&e.bottom<o.bottom+a){var t=window.innerHeight-e.bottom;return a+t}}var Be=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],oe=[];function Qe(){return oe}function we(o,e){if(!!o){var a=oe.find(function(t){return t.target===o});a?a.affixList.push(e):(a={target:o,affixList:[e],eventHandlers:{}},oe.push(a),Be.forEach(function(t){a.eventHandlers[t]=(0,ke.Z)(o,t,function(){a.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function ze(o){var e=oe.find(function(a){var t=a.affixList.some(function(n){return n===o});return t&&(a.affixList=a.affixList.filter(function(n){return n!==o})),t});e&&e.affixList.length===0&&(oe=oe.filter(function(a){return a!==e}),Be.forEach(function(a){var t=e.eventHandlers[a];t&&t.remove&&t.remove()}))}var Me=function(o,e,a,t){var n=arguments.length,i=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,a):t,d;if((typeof Reflect=="undefined"?"undefined":(0,_.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,a,t);else for(var f=o.length-1;f>=0;f--)(d=o[f])&&(i=(n<3?d(i):n>3?d(e,a,i):d(e,a))||i);return n>3&&i&&Object.defineProperty(e,a,i),i};function We(){return typeof window!="undefined"?window:null}var ie;(function(o){o[o.None=0]="None",o[o.Prepare=1]="Prepare"})(ie||(ie={}));var ge=function(o){(0,M.Z)(a,o);var e=(0,q.Z)(a);function a(){var t;return(0,H.Z)(this,a),t=e.apply(this,arguments),t.state={status:ie.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var n=t.props,i=n.offsetBottom,d=n.offsetTop;return i===void 0&&d===void 0?0:d},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(n){t.placeholderNode=n},t.saveFixedNode=function(n){t.fixedNode=n},t.measure=function(){var n=t.state,i=n.status,d=n.lastAffix,f=t.props.onChange,m=t.getTargetFunc();if(!(i!==ie.Prepare||!t.fixedNode||!t.placeholderNode||!m)){var h=t.getOffsetTop(),C=t.getOffsetBottom(),y=m();if(!!y){var c={status:ie.None},R=he(y),u=he(t.placeholderNode),b=Se(u,R,h),w=Te(u,R,C);u.top===0&&u.left===0&&u.width===0&&u.height===0||(b!==void 0?(c.affixStyle={position:"fixed",top:b,width:u.width,height:u.height},c.placeholderStyle={width:u.width,height:u.height}):w!==void 0&&(c.affixStyle={position:"fixed",bottom:w,width:u.width,height:u.height},c.placeholderStyle={width:u.width,height:u.height}),c.lastAffix=!!c.affixStyle,f&&d!==c.lastAffix&&f(c.lastAffix),t.setState(c))}}},t.prepareMeasure=function(){if(t.setState({status:ie.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},t}return(0,g.Z)(a,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:n!=null?n:We}},{key:"componentDidMount",value:function(){var n=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){we(i(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var i=this.state.prevTarget,d=this.getTargetFunc(),f=(d==null?void 0:d())||null;i!==f&&(ze(this),f&&(we(f,this),this.updatePosition()),this.setState({prevTarget:f})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),ze(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),i=this.state.affixStyle;if(n&&i){var d=this.getOffsetTop(),f=this.getOffsetBottom(),m=n();if(m&&this.placeholderNode){var h=he(m),C=he(this.placeholderNode),y=Se(C,h,d),c=Te(C,h,f);if(y!==void 0&&i.top===y||c!==void 0&&i.bottom===c)return}}this.prepareMeasure()}},{key:"render",value:function(){var n=this,i=this.state,d=i.affixStyle,f=i.placeholderStyle,m=this.props,h=m.affixPrefixCls,C=m.children,y=F()((0,V.Z)({},h,!!d)),c=(0,Pe.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return r.createElement(ce.Z,{onResize:function(){n.updatePosition()}},r.createElement("div",(0,S.Z)({},c,{ref:this.savePlaceholderNode}),d&&r.createElement("div",{style:f,"aria-hidden":"true"}),r.createElement("div",{className:y,ref:this.saveFixedNode,style:d},r.createElement(ce.Z,{onResize:function(){n.updatePosition()}},C))))}}]),a}(r.Component);ge.contextType=j.E_,Me([ne()],ge.prototype,"updatePosition",null),Me([ne()],ge.prototype,"lazyUpdatePosition",null);var Ee=r.forwardRef(function(o,e){var a=o.prefixCls,t=r.useContext(j.E_),n=t.getPrefixCls,i=n("affix",a),d=(0,S.Z)((0,S.Z)({},o),{affixPrefixCls:i});return r.createElement(ge,(0,S.Z)({},d,{ref:e}))}),Ue=Ee,qe=l(84305),xe=l(39559),fe=l(59903),_e=l(94233),et=l(81262),A=l(59250),s=l(30887),x=l(49111),N=l(28481),v=l(28991),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},D=I,P=l(27029),E=function(e,a){return r.createElement(P.Z,(0,v.Z)((0,v.Z)({},e),{},{ref:a,icon:D}))};E.displayName="ArrowLeftOutlined";var O=r.forwardRef(E),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},T=L,k=function(e,a){return r.createElement(P.Z,(0,v.Z)((0,v.Z)({},e),{},{ref:a,icon:T}))};k.displayName="ArrowRightOutlined";var ae=r.forwardRef(k),Ze=l(30470),Ae=l(51890),je=l(50344),Ke=l(28682),X=l(96159),le=l(57254),Ce=l(81555),ye=function(o,e){var a={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(a[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(a[t[n]]=o[t[n]]);return a},ue=function(e){var a=e.prefixCls,t=e.separator,n=t===void 0?"/":t,i=e.children,d=e.menu,f=e.overlay,m=e.dropdownProps,h=ye(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),C=r.useContext(j.E_),y=C.getPrefixCls,c=y("breadcrumb",a),R=function(w){return d||f?r.createElement(Ce.Z,(0,S.Z)({menu:d,overlay:f,placement:"bottom"},m),r.createElement("span",{className:"".concat(c,"-overlay-link")},w,r.createElement(le.Z,null))):w},u;return"href"in h?u=r.createElement("a",(0,S.Z)({className:"".concat(c,"-link")},h),i):u=r.createElement("span",(0,S.Z)({className:"".concat(c,"-link")},h),i),u=R(u),i!=null?r.createElement("li",null,u,n&&r.createElement("span",{className:"".concat(c,"-separator")},n)):null};ue.__ANT_BREADCRUMB_ITEM=!0;var pe=ue,De=function(e){var a=e.children,t=r.useContext(j.E_),n=t.getPrefixCls,i=n("breadcrumb");return r.createElement("span",{className:"".concat(i,"-separator")},a||"/")};De.__ANT_BREADCRUMB_SEPARATOR=!0;var Ie=De,$e=function(o,e){var a={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(a[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(a[t[n]]=o[t[n]]);return a};function Ge(o,e){if(!o.breadcrumbName)return null;var a=Object.keys(e).join("|"),t=o.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(n,i){return e[i]||n});return t}function Fe(o,e,a,t){var n=a.indexOf(o)===a.length-1,i=Ge(o,e);return n?r.createElement("span",null,i):r.createElement("a",{href:"#/".concat(t.join("/"))},i)}var Le=function(e,a){return e=(e||"").replace(/^\//,""),Object.keys(a).forEach(function(t){e=e.replace(":".concat(t),a[t])}),e},Ve=function(e,a,t){var n=(0,me.Z)(e),i=Le(a||"",t);return i&&n.push(i),n},Xe=function(e){var a=e.prefixCls,t=e.separator,n=t===void 0?"/":t,i=e.style,d=e.className,f=e.routes,m=e.children,h=e.itemRender,C=h===void 0?Fe:h,y=e.params,c=y===void 0?{}:y,R=$e(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),u=r.useContext(j.E_),b=u.getPrefixCls,w=u.direction,Z,W=b("breadcrumb",a);if(f&&f.length>0){var U=[];Z=f.map(function(B){var Y=Le(B.path,c);Y&&U.push(Y);var G;B.children&&B.children.length&&(G=r.createElement(Ke.Z,{items:B.children.map(function(J){return{key:J.path||J.breadcrumbName,label:C(J,c,f,Ve(U,J.path,c))}})}));var ee={separator:n};return G&&(ee.overlay=G),r.createElement(pe,(0,S.Z)({},ee,{key:Y||B.breadcrumbName}),C(B,c,f,U))})}else m&&(Z=(0,je.Z)(m).map(function(B,Y){return B&&(0,X.Tm)(B,{separator:n,key:Y})}));var Q=F()(W,(0,V.Z)({},"".concat(W,"-rtl"),w==="rtl"),d);return r.createElement("nav",(0,S.Z)({className:Q,style:i},R),r.createElement("ol",null,Z))};Xe.Item=pe,Xe.Separator=Ie;var dt=Xe,ft=dt,ut=l(42051),vt=l(19650),mt=l(34952),ht=function(e,a,t){return!a||!t?null:r.createElement(ut.Z,{componentName:"PageHeader"},function(n){return r.createElement("div",{className:"".concat(e,"-back")},r.createElement(mt.Z,{onClick:function(d){t==null||t(d)},className:"".concat(e,"-back-button"),"aria-label":n.back},a))})},gt=function(e){return r.createElement(ft,(0,S.Z)({},e))},xt=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:a==="rtl"?r.createElement(ae,null):r.createElement(O,null)},Ct=function(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=a.title,i=a.avatar,d=a.subTitle,f=a.tags,m=a.extra,h=a.onBack,C="".concat(e,"-heading"),y=n||d||f||m;if(!y)return null;var c=xt(a,t),R=ht(e,c,h),u=R||i||y;return r.createElement("div",{className:C},u&&r.createElement("div",{className:"".concat(C,"-left")},R,i&&r.createElement(Ae.C,(0,S.Z)({},i)),n&&r.createElement("span",{className:"".concat(C,"-title"),title:typeof n=="string"?n:void 0},n),d&&r.createElement("span",{className:"".concat(C,"-sub-title"),title:typeof d=="string"?d:void 0},d),f&&r.createElement("span",{className:"".concat(C,"-tags")},f)),m&&r.createElement("span",{className:"".concat(C,"-extra")},r.createElement(vt.Z,null,m)))},yt=function(e,a){return a?r.createElement("div",{className:"".concat(e,"-footer")},a):null},bt=function(e,a){return r.createElement("div",{className:"".concat(e,"-content")},a)},Pt=function(e){var a=(0,Ze.Z)(!1),t=(0,N.Z)(a,2),n=t[0],i=t[1],d=function(m){var h=m.width;i(h<768,!0)};return r.createElement(j.C,null,function(f){var m,h=f.getPrefixCls,C=f.pageHeader,y=f.direction,c,R=e.prefixCls,u=e.style,b=e.footer,w=e.children,Z=e.breadcrumb,W=e.breadcrumbRender,U=e.className,Q=!0;"ghost"in e?Q=e.ghost:C&&"ghost"in C&&(Q=C.ghost);var B=h("page-header",R),Y=function(){return(Z==null?void 0:Z.routes)?gt(Z):null},G=Y(),ee=Z&&"props"in Z,J=(c=W==null?void 0:W(e,G))!==null&&c!==void 0?c:G,K=ee?Z:J,be=F()(B,U,(m={"has-breadcrumb":!!K,"has-footer":!!b},(0,V.Z)(m,"".concat(B,"-ghost"),Q),(0,V.Z)(m,"".concat(B,"-rtl"),y==="rtl"),(0,V.Z)(m,"".concat(B,"-compact"),n),m));return r.createElement(ce.Z,{onResize:d},r.createElement("div",{className:be,style:u},K,Ct(B,e,y),w&&bt(B,w),yt(B,b)))})},Et=Pt,Ye=l(81253),ea=l(18106),tt=l(86629),He=l(64335),Zt=l(97435),ta=l(56264),pt=["children","className","extra","style","renderContent"],Nt=function(e){var a=e.children,t=e.className,n=e.extra,i=e.style,d=e.renderContent,f=(0,Ye.Z)(e,pt),m=(0,r.useContext)(xe.ZP.ConfigContext),h=m.getPrefixCls,C=e.prefixCls||h("pro"),y="".concat(C,"-footer-bar"),c=(0,r.useContext)(He.Z),R=(0,r.useMemo)(function(){var b=c.hasSiderMenu,w=c.isMobile,Z=c.siderWidth;if(!!b)return Z?w?"100%":"calc(100% - ".concat(Z,"px)"):"100%"},[c.collapsed,c.hasSiderMenu,c.isMobile,c.siderWidth]),u=r.createElement(r.Fragment,null,r.createElement("div",{className:"".concat(y,"-left")},n),r.createElement("div",{className:"".concat(y,"-right")},a));return(0,r.useEffect)(function(){return!c||!(c==null?void 0:c.setHasFooterToolbar)?function(){}:(c==null||c.setHasFooterToolbar(!0),function(){var b;c==null||(b=c.setHasFooterToolbar)===null||b===void 0||b.call(c,!1)})},[]),r.createElement("div",(0,S.Z)({className:F()(t,"".concat(y)),style:(0,v.Z)({width:R},i)},(0,Zt.Z)(f,["prefixCls"])),d?d((0,v.Z)((0,v.Z)((0,v.Z)({},e),c),{},{leftWidth:R}),u):u)},Rt=Nt,aa=l(53645),Ot=function(e){var a=(0,r.useContext)(He.Z),t=e.children,n=e.contentWidth,i=e.className,d=e.style,f=(0,r.useContext)(xe.ZP.ConfigContext),m=f.getPrefixCls,h=e.prefixCls||m("pro"),C=n||a.contentWidth,y="".concat(h,"-grid-content");return r.createElement("div",{className:F()(y,i,{wide:C==="Fixed"}),style:d},r.createElement("div",{className:"".concat(h,"-grid-content-children")},t))},St=Ot,Tt=l(83832),Bt=function(e){if(!e)return 1;var a=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/a},wt=function(e){var a=e.children,t=e.style,n=e.className,i=e.markStyle,d=e.markClassName,f=e.zIndex,m=f===void 0?9:f,h=e.gapX,C=h===void 0?212:h,y=e.gapY,c=y===void 0?222:y,R=e.width,u=R===void 0?120:R,b=e.height,w=b===void 0?64:b,Z=e.rotate,W=Z===void 0?-22:Z,U=e.image,Q=e.content,B=e.offsetLeft,Y=e.offsetTop,G=e.fontStyle,ee=G===void 0?"normal":G,J=e.fontWeight,K=J===void 0?"normal":J,be=e.fontColor,Je=be===void 0?"rgba(0,0,0,.15)":be,at=e.fontSize,rt=at===void 0?16:at,nt=e.fontFamily,ot=nt===void 0?"sans-serif":nt,kt=e.prefixCls,Wt=(0,r.useContext)(xe.ZP.ConfigContext),Ut=Wt.getPrefixCls,it=Ut("pro-layout-watermark",kt),jt=F()("".concat(it,"-wrapper"),n),Kt=F()(it,d),Gt=(0,r.useState)(""),lt=(0,N.Z)(Gt,2),Vt=lt[0],st=lt[1];return(0,r.useEffect)(function(){var Ne=document.createElement("canvas"),se=Ne.getContext("2d"),ve=Bt(se),Xt="".concat((C+u)*ve,"px"),Yt="".concat((c+w)*ve,"px"),Jt=B||C/2,Qt=Y||c/2;if(Ne.setAttribute("width",Xt),Ne.setAttribute("height",Yt),se){se.translate(Jt*ve,Qt*ve),se.rotate(Math.PI/180*Number(W));var qt=u*ve,ct=w*ve;if(U){var Re=new Image;Re.crossOrigin="anonymous",Re.referrerPolicy="no-referrer",Re.src=U,Re.onload=function(){se.drawImage(Re,0,0,qt,ct),st(Ne.toDataURL())}}else if(Q){var _t=Number(rt)*ve;se.font="".concat(ee," normal ").concat(K," ").concat(_t,"px/").concat(ct,"px ").concat(ot),se.fillStyle=Je,se.fillText(Q,0,0),st(Ne.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[C,c,B,Y,W,ee,K,u,w,ot,Je,U,Q,rt]),r.createElement("div",{style:(0,v.Z)({position:"relative"},t),className:jt},a,r.createElement("div",{className:Kt,style:(0,v.Z)({zIndex:m,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(C+u,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Vt,"')")},i)}))},zt=wt,ra=l(12395),Mt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],At=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Dt(o){return(0,_.Z)(o)==="object"?o:{spinning:o}}var It=function(e){var a=e.tabList,t=e.tabActiveKey,n=e.onTabChange,i=e.tabBarExtraContent,d=e.tabProps,f=e.prefixedClassName;return Array.isArray(a)||i?r.createElement(tt.Z,(0,S.Z)({className:"".concat(f,"-tabs"),activeKey:t,onChange:function(h){n&&n(h)},tabBarExtraContent:i},d),a==null?void 0:a.map(function(m,h){return r.createElement(tt.Z.TabPane,(0,S.Z)({},m,{tab:m.tab,key:m.key||h}))})):null},$t=function(e,a,t){return!e&&!a?null:r.createElement("div",{className:"".concat(t,"-detail")},r.createElement("div",{className:"".concat(t,"-main")},r.createElement("div",{className:"".concat(t,"-row")},e&&r.createElement("div",{className:"".concat(t,"-content")},e),a&&r.createElement("div",{className:"".concat(t,"-extraContent")},a))))},na=function(e){var a=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_extends({},a==null?void 0:a.breadcrumb,a==null?void 0:a.breadcrumbProps,e)))},Ft=function(e){var a,t=(0,r.useContext)(He.Z),n=e.title,i=e.content,d=e.pageHeaderRender,f=e.header,m=e.prefixedClassName,h=e.extraContent,C=e.style,y=e.prefixCls,c=e.breadcrumbRender,R=(0,Ye.Z)(e,Mt),u=(0,r.useMemo)(function(){if(!!c)return c},[c]);if(d===!1)return null;if(d)return r.createElement(r.Fragment,null," ",d((0,v.Z)((0,v.Z)({},e),t)));var b=n;!n&&n!==!1&&(b=t.title);var w=(0,v.Z)((0,v.Z)((0,v.Z)({},t),{},{title:b},R),{},{footer:It((0,v.Z)((0,v.Z)({},R),{},{breadcrumbRender:c,prefixedClassName:m}))},f),Z=w.breadcrumb,W=(!Z||!(Z==null?void 0:Z.itemRender)&&!(Z==null||(a=Z.routes)===null||a===void 0?void 0:a.length))&&!c;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(U){return!w[U]})&&W&&!i&&!h?null:r.createElement("div",{className:"".concat(m,"-warp")},r.createElement(Et,(0,S.Z)({},w,{breadcrumb:c===!1?void 0:(0,v.Z)((0,v.Z)({},w.breadcrumb),t.breadcrumbProps),breadcrumbRender:u,prefixCls:y}),(f==null?void 0:f.children)||$t(i,h,m)))},Lt=function(e){var a,t,n=e.children,i=e.loading,d=i===void 0?!1:i,f=e.className,m=e.style,h=e.footer,C=e.affixProps,y=e.ghost,c=e.fixedHeader,R=e.breadcrumbRender,u=(0,Ye.Z)(e,At),b=(0,r.useContext)(He.Z),w=(0,r.useContext)(xe.ZP.ConfigContext),Z=w.getPrefixCls,W=e.prefixCls||Z("pro"),U="".concat(W,"-page-container"),Q=F()(U,f,(a={},(0,V.Z)(a,"".concat(W,"-page-container-ghost"),y),(0,V.Z)(a,"".concat(W,"-page-container-with-footer"),h),a)),B=(0,r.useMemo)(function(){return n?r.createElement(r.Fragment,null,r.createElement("div",{className:"".concat(U,"-children-content")},n),b.hasFooterToolbar&&r.createElement("div",{style:{height:48,marginTop:24}})):null},[n,U,b.hasFooterToolbar]),Y=(0,r.useMemo)(function(){var K;return R==!1?!1:R||(u==null||(K=u.header)===null||K===void 0?void 0:K.breadcrumbRender)},[R,u==null||(t=u.header)===null||t===void 0?void 0:t.breadcrumbRender]),G=r.createElement(Ft,(0,S.Z)({},u,{breadcrumbRender:Y,ghost:y,prefixCls:void 0,prefixedClassName:U})),ee=(0,r.useMemo)(function(){if(r.isValidElement(d))return d;if(typeof d=="boolean"&&!d)return null;var K=Dt(d);return r.createElement(Tt.Z,K)},[d]),J=(0,r.useMemo)(function(){var K=ee||B;if(e.waterMarkProps||b.waterMarkProps){var be=(0,v.Z)((0,v.Z)({},b.waterMarkProps),e.waterMarkProps);return r.createElement(zt,be,K)}return K},[e.waterMarkProps,b.waterMarkProps,ee,B]);return r.createElement("div",{style:m,className:Q},c&&G?r.createElement(Ue,(0,S.Z)({offsetTop:b.hasHeader&&b.fixedHeader?b.headerHeight:0},C),G):G,J&&r.createElement(St,null,J),h&&r.createElement(Rt,{prefixCls:W},h))},Ht=Lt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},18067:function(){},34952:function(Oe,re,l){"use strict";var p=l(22122),z=l(15105),S=l(67294),V=function(M,q){var _={};for(var $ in M)Object.prototype.hasOwnProperty.call(M,$)&&q.indexOf($)<0&&(_[$]=M[$]);if(M!=null&&typeof Object.getOwnPropertySymbols=="function")for(var F=0,$=Object.getOwnPropertySymbols(M);F<$.length;F++)q.indexOf($[F])<0&&Object.prototype.propertyIsEnumerable.call(M,$[F])&&(_[$[F]]=M[$[F]]);return _},H={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},g=S.forwardRef(function(M,q){var _=function(te){var de=te.keyCode;de===z.Z.ENTER&&te.preventDefault()},$=function(te){var de=te.keyCode,ne=M.onClick;de===z.Z.ENTER&&ne&&ne()},F=M.style,ce=M.noStyle,Pe=M.disabled,r=V(M,["style","noStyle","disabled"]),j={};return ce||(j=(0,p.Z)({},H)),Pe&&(j.pointerEvents="none"),j=(0,p.Z)((0,p.Z)({},j),F),S.createElement("div",(0,p.Z)({role:"button",tabIndex:0,ref:q},r,{onKeyDown:_,onKeyUp:$,style:j}))});re.Z=g},90860:function(Oe,re,l){"use strict";l.d(re,{Z:function(){return et}});var p=l(96156),z=l(22122),S=l(90484),V=l(94184),H=l.n(V),g=l(67294),M=l(53124),q=l(98423),_=function(s){var x,N,v=s.prefixCls,I=s.className,D=s.style,P=s.size,E=s.shape,O=H()((x={},(0,p.Z)(x,"".concat(v,"-lg"),P==="large"),(0,p.Z)(x,"".concat(v,"-sm"),P==="small"),x)),L=H()((N={},(0,p.Z)(N,"".concat(v,"-circle"),E==="circle"),(0,p.Z)(N,"".concat(v,"-square"),E==="square"),(0,p.Z)(N,"".concat(v,"-round"),E==="round"),N)),T=g.useMemo(function(){return typeof P=="number"?{width:P,height:P,lineHeight:"".concat(P,"px")}:{}},[P]);return g.createElement("span",{className:H()(v,O,L,I),style:(0,z.Z)((0,z.Z)({},T),D)})},$=_,F=function(s){var x=s.prefixCls,N=s.className,v=s.active,I=s.shape,D=I===void 0?"circle":I,P=s.size,E=P===void 0?"default":P,O=g.useContext(M.E_),L=O.getPrefixCls,T=L("skeleton",x),k=(0,q.Z)(s,["prefixCls","className"]),ae=H()(T,"".concat(T,"-element"),(0,p.Z)({},"".concat(T,"-active"),v),N);return g.createElement("div",{className:ae},g.createElement($,(0,z.Z)({prefixCls:"".concat(T,"-avatar"),shape:D,size:E},k)))},ce=F,Pe=function(s){var x,N=s.prefixCls,v=s.className,I=s.active,D=s.block,P=D===void 0?!1:D,E=s.size,O=E===void 0?"default":E,L=g.useContext(M.E_),T=L.getPrefixCls,k=T("skeleton",N),ae=(0,q.Z)(s,["prefixCls"]),Ze=H()(k,"".concat(k,"-element"),(x={},(0,p.Z)(x,"".concat(k,"-active"),I),(0,p.Z)(x,"".concat(k,"-block"),P),x),v);return g.createElement("div",{className:Ze},g.createElement($,(0,z.Z)({prefixCls:"".concat(k,"-button"),size:O},ae)))},r=Pe,j=l(28991),me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},te=me,de=l(27029),ne=function(s,x){return g.createElement(de.Z,(0,j.Z)((0,j.Z)({},s),{},{ref:x,icon:te}))};ne.displayName="DotChartOutlined";var ke=g.forwardRef(ne),he=function(s){var x=s.prefixCls,N=s.className,v=s.style,I=s.active,D=s.children,P=g.useContext(M.E_),E=P.getPrefixCls,O=E("skeleton",x),L=H()(O,"".concat(O,"-element"),(0,p.Z)({},"".concat(O,"-active"),I),N),T=D!=null?D:g.createElement(ke,null);return g.createElement("div",{className:L},g.createElement("div",{className:H()("".concat(O,"-image"),N),style:v},T))},Se=he,Te="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",Be=function(s){var x=s.prefixCls,N=s.className,v=s.style,I=s.active,D=g.useContext(M.E_),P=D.getPrefixCls,E=P("skeleton",x),O=H()(E,"".concat(E,"-element"),(0,p.Z)({},"".concat(E,"-active"),I),N);return g.createElement("div",{className:O},g.createElement("div",{className:H()("".concat(E,"-image"),N),style:v},g.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(E,"-image-svg")},g.createElement("path",{d:Te,className:"".concat(E,"-image-path")}))))},oe=Be,Qe=function(s){var x,N=s.prefixCls,v=s.className,I=s.active,D=s.block,P=s.size,E=P===void 0?"default":P,O=g.useContext(M.E_),L=O.getPrefixCls,T=L("skeleton",N),k=(0,q.Z)(s,["prefixCls"]),ae=H()(T,"".concat(T,"-element"),(x={},(0,p.Z)(x,"".concat(T,"-active"),I),(0,p.Z)(x,"".concat(T,"-block"),D),x),v);return g.createElement("div",{className:ae},g.createElement($,(0,z.Z)({prefixCls:"".concat(T,"-input"),size:E},k)))},we=Qe,ze=l(85061),Me=function(s){var x=function(O){var L=s.width,T=s.rows,k=T===void 0?2:T;if(Array.isArray(L))return L[O];if(k-1===O)return L},N=s.prefixCls,v=s.className,I=s.style,D=s.rows,P=(0,ze.Z)(Array(D)).map(function(E,O){return g.createElement("li",{key:O,style:{width:x(O)}})});return g.createElement("ul",{className:H()(N,v),style:I},P)},We=Me,ie=function(s){var x=s.prefixCls,N=s.className,v=s.width,I=s.style;return g.createElement("h3",{className:H()(x,N),style:(0,z.Z)({width:v},I)})},ge=ie;function Ee(A){return A&&(0,S.Z)(A)==="object"?A:{}}function Ue(A,s){return A&&!s?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function qe(A,s){return!A&&s?{width:"38%"}:A&&s?{width:"50%"}:{}}function xe(A,s){var x={};return(!A||!s)&&(x.width="61%"),!A&&s?x.rows=3:x.rows=2,x}var fe=function(s){var x=s.prefixCls,N=s.loading,v=s.className,I=s.style,D=s.children,P=s.avatar,E=P===void 0?!1:P,O=s.title,L=O===void 0?!0:O,T=s.paragraph,k=T===void 0?!0:T,ae=s.active,Ze=s.round,Ae=g.useContext(M.E_),je=Ae.getPrefixCls,Ke=Ae.direction,X=je("skeleton",x);if(N||!("loading"in s)){var le,Ce=!!E,ye=!!L,ue=!!k,pe;if(Ce){var De=(0,z.Z)((0,z.Z)({prefixCls:"".concat(X,"-avatar")},Ue(ye,ue)),Ee(E));pe=g.createElement("div",{className:"".concat(X,"-header")},g.createElement($,(0,z.Z)({},De)))}var Ie;if(ye||ue){var $e;if(ye){var Ge=(0,z.Z)((0,z.Z)({prefixCls:"".concat(X,"-title")},qe(Ce,ue)),Ee(L));$e=g.createElement(ge,(0,z.Z)({},Ge))}var Fe;if(ue){var Le=(0,z.Z)((0,z.Z)({prefixCls:"".concat(X,"-paragraph")},xe(Ce,ye)),Ee(k));Fe=g.createElement(We,(0,z.Z)({},Le))}Ie=g.createElement("div",{className:"".concat(X,"-content")},$e,Fe)}var Ve=H()(X,(le={},(0,p.Z)(le,"".concat(X,"-with-avatar"),Ce),(0,p.Z)(le,"".concat(X,"-active"),ae),(0,p.Z)(le,"".concat(X,"-rtl"),Ke==="rtl"),(0,p.Z)(le,"".concat(X,"-round"),Ze),le),v);return g.createElement("div",{className:Ve,style:I},pe,Ie)}return typeof D!="undefined"?D:null};fe.Button=r,fe.Avatar=ce,fe.Input=we,fe.Image=oe,fe.Node=Se;var _e=fe,et=_e},18446:function(Oe,re,l){"use strict";var p=l(38663),z=l.n(p),S=l(18067),V=l.n(S)}}]);

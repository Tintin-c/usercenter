(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{2603:function(U,P,e){"use strict";e.d(P,{Z:function(){return t}});var g=e(28991),f=e(67294),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},l=O,o=e(27029),i=function(F,h){return f.createElement(o.Z,(0,g.Z)((0,g.Z)({},F),{},{ref:h,icon:l}))};i.displayName="LockOutlined";var t=f.forwardRef(i)},5966:function(U,P,e){"use strict";var g=e(22122),f=e(81253),O=e(67294),l=e(83790),o=["fieldProps","proFieldProps"],i=["fieldProps","proFieldProps"],t="text",L=function(u){var s=u.fieldProps,d=u.proFieldProps,D=(0,f.Z)(u,o);return O.createElement(l.Z,(0,g.Z)({mode:"edit",valueType:t,fieldProps:s,filedConfig:{valueType:t},proFieldProps:d},D))},F=function(u){var s=u.fieldProps,d=u.proFieldProps,D=(0,f.Z)(u,i);return O.createElement(l.Z,(0,g.Z)({mode:"edit",valueType:"password",fieldProps:s,proFieldProps:d,filedConfig:{valueType:t}},D))},h=L;h.Password=F,h.displayName="ProFormComponent",P.Z=h},43504:function(U,P,e){"use strict";e.d(P,{U:function(){return u}});var g=e(22122),f=e(84305),O=e(39559),l=e(28991),o=e(81253),i=e(41420),t=e(67294),L=e(5894),F=e(32384),h=e.n(F),A=["logo","message","contentStyle","title","subTitle","actions","children"];function u(s){var d=s.logo,D=s.message,J=s.contentStyle,B=s.title,N=s.subTitle,z=s.actions,Q=s.children,r=(0,o.Z)(s,A),X=(0,i.YB)(),k=r.submitter===!1?!1:(0,l.Z)((0,l.Z)({searchConfig:{submitText:X.getMessage("loginForm.submitText","\u767B\u5F55")},submitButtonProps:{size:"large",style:{width:"100%"}}},r.submitter),{},{render:function(R,G){var j,p,V=G.pop();if((r==null||(j=r.submitter)===null||j===void 0?void 0:j.render)===void 0)return V;if(typeof(r==null||(p=r.submitter)===null||p===void 0?void 0:p.render)=="function"){var S,E;return r==null||(S=r.submitter)===null||S===void 0||(E=S.render)===null||E===void 0?void 0:E.call(S,R,G)}return V}}),w=(0,t.useContext)(O.ZP.ConfigContext),q=w.getPrefixCls("pro-form-login"),c=function(R){return"".concat(q,"-").concat(R)},W=(0,t.useMemo)(function(){return d?typeof d=="string"?t.createElement("img",{src:d}):d:null},[d]);return t.createElement("div",{className:c("container")},t.createElement("div",{className:c("top")},B||W?t.createElement("div",{className:c("header")},W?t.createElement("span",{className:c("logo")},W):null,B?t.createElement("span",{className:c("title")},B):null):null,N?t.createElement("div",{className:c("desc")},N):null),t.createElement("div",{className:c("main"),style:(0,l.Z)({width:328},J)},t.createElement(L.A,(0,g.Z)({isKeyPressSubmit:!0},r,{submitter:k}),D,Q),z?t.createElement("div",{className:c("other")},z):null))}},34687:function(U){U.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",icon:"icon___rzGKO"}},32384:function(){},11436:function(U,P,e){"use strict";e.r(P),e.d(P,{default:function(){return le}});var g=e(18106),f=e(86629),O=e(34792),l=e(48086),o=e(90636),i=e(11849),t=e(3182),L=e(2824),F=e(17462),h=e(76772),A=e(71390),u=e(9766),s=e(89366),d=e(2603),D=e(63185),J=e(9676),B=e(22122),N=e(28991),z=e(81253),Q=e(22270),r=e(67294),X=e(64893),k=e(83790),w=["options","fieldProps","proFieldProps","valueEnum"],q=r.forwardRef(function(v,T){var Z=v.options,I=v.fieldProps,_=v.proFieldProps,ee=v.valueEnum,H=(0,z.Z)(v,w);return r.createElement(k.Z,(0,B.Z)({ref:T,valueType:"checkbox",mode:"edit",valueEnum:(0,Q.h)(ee,void 0),fieldProps:(0,N.Z)({options:Z},I),proFieldProps:_},H))}),c=r.forwardRef(function(v,T){var Z=v.fieldProps,I=v.children;return r.createElement(J.Z,(0,B.Z)({ref:T},Z),I)}),W=(0,X.G)(c,{valuePropName:"checked"}),b=W;b.Group=q;var R=b,G=e(43504),j=e(5966),p=e(70719),V=e(73727),S=e(34687),E=e.n(S),n=e(85893),se=function(T){var Z=T.content;return(0,n.jsx)(h.Z,{style:{marginBottom:24},message:Z,type:"error",showIcon:!0})},oe=function(){var T=(0,r.useState)({}),Z=(0,L.Z)(T,2),I=Z[0],_=Z[1],ee=(0,r.useState)("account"),H=(0,L.Z)(ee,2),te=H[0],ie=H[1],re=(0,p.tT)("@@initialState"),Y=re.initialState,ue=re.setInitialState,de=function(){var K=(0,t.Z)((0,o.Z)().mark(function x(){var y,C;return(0,o.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Y==null||(y=Y.fetchUserInfo)===null||y===void 0?void 0:y.call(Y);case 2:if(C=m.sent,!C){m.next=6;break}return m.next=6,ue(function($){return(0,i.Z)((0,i.Z)({},$),{},{currentUser:C})});case 6:case"end":return m.stop()}},x)}));return function(){return K.apply(this,arguments)}}(),ce=function(){var K=(0,t.Z)((0,o.Z)().mark(function x(y){var C,M,m,$,ne,ae;return(0,o.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,u.x4)((0,i.Z)((0,i.Z)({},y),{},{type:te}));case 3:if(C=a.sent,!(C.id>0)){a.next=15;break}return M="\u767B\u5F55\u6210\u529F\uFF01",l.ZP.success(M),a.next=9,de();case 9:if(p.m8){a.next=11;break}return a.abrupt("return");case 11:return m=p.m8.location.query,$=m,ne=$.redirect,p.m8.push(ne||"/welcome"),a.abrupt("return");case 15:_(C),a.next=22;break;case 18:a.prev=18,a.t0=a.catch(0),ae="\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01",l.ZP.error(ae);case 22:case"end":return a.stop()}},x,null,[[0,18]])}));return function(y){return K.apply(this,arguments)}}(),ve=I.status,me=I.type;return(0,n.jsxs)("div",{className:E().container,children:[(0,n.jsx)("div",{className:E().content,children:(0,n.jsxs)(G.U,{title:"Tintin",subTitle:"\u7528\u6237\u4E2D\u5FC3",initialValues:{autoLogin:!0},onFinish:function(){var K=(0,t.Z)((0,o.Z)().mark(function x(y){return(0,o.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,ce(y);case 2:case"end":return M.stop()}},x)}));return function(x){return K.apply(this,arguments)}}(),children:[(0,n.jsx)(f.Z,{activeKey:te,onChange:ie,children:(0,n.jsx)(f.Z.TabPane,{tab:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"},"account")}),ve==="error"&&me==="account"&&(0,n.jsx)(se,{content:"\u9519\u8BEF\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801(admin/ant.design)"}),te==="account"&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.Z,{name:"userAccount",fieldProps:{size:"large",prefix:(0,n.jsx)(s.Z,{className:E().prefixIcon})},placeholder:"\u7528\u6237\u540D: admin or user",rules:[{required:!0,message:"\u7528\u6237\u540D\u662F\u5FC5\u586B\u9879\uFF01"}]}),(0,n.jsx)(j.Z.Password,{name:"userPassword",fieldProps:{size:"large",prefix:(0,n.jsx)(d.Z,{className:E().prefixIcon})},placeholder:"\u5BC6\u7801: ant.design",rules:[{required:!0,message:"\u5BC6\u7801\u662F\u5FC5\u586B\u9879\uFF01"},{min:8,message:"\u5BC6\u7801\u662F\u5FC5\u586B\u9879\uFF01"}]})]}),(0,n.jsxs)("div",{style:{marginBottom:24},children:[(0,n.jsx)(R,{noStyle:!0,name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"}),(0,n.jsx)(V.rU,{to:"/user/register",children:"\u65B0\u7528\u6237\u6CE8\u518C"}),(0,n.jsx)("a",{style:{float:"right"},children:"\u5FD8\u8BB0\u5BC6\u7801\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"})]})]})}),(0,n.jsx)(A.Z,{})]})},le=oe}}]);

"use strict";(self.webpackChunkgrabber_hrm=self.webpackChunkgrabber_hrm||[]).push([[781],{8106:function(e,l,i){i.r(l),i.d(l,{sortCust:function(){return T}});var a=i(4165),s=i(5861),n=i(1413),o=i(4942),r=i(9439),d=i(2791),c=(i(4629),i(2647)),t=i(7689),v=i(1087),u=i(2735),m=i(5945),h=i(5408),x=i(9752),p=i(1213),j=i(8575),b=i(9760),f=(i(899),i(2908)),g=(i(3569),i(3505)),_=i(7677),k=i(5232),N=i(184),y=(0,c.YZ)(),S=(0,c.A5)(),z=(0,c.PU)(),w=(0,c.tW)();l.default=function(e){e.data,e.confirm,e.label,e.item;var l,i,c,T,B,C,A,I,Z,L,W,R,V,E,K,D=(0,d.useState)(1),O=(0,r.Z)(D,2)[1],G=(0,d.useState)(1),H=(0,r.Z)(G,2),U=H[0],q=H[1],P=(0,h.Z)("firebaseObs"),Y=(0,d.useState)(!1),Q=(0,r.Z)(Y,2),$=Q[0],J=Q[1];console.log(P);var X=null===(l=(0,t.TH)().search)||void 0===l||null===(i=l.split("?"))||void 0===i?void 0:i[1],ee=(0,u.mB)(X),le=(null===(c=(0,u.bh)((0,u.nc)()))||void 0===c?void 0:c.isAdmin)&&$,ie=le&&(0,u.bh)("user2Show")||(null===ee||void 0===ee?void 0:ee.cId)||(null===(T=(0,u.bh)((0,u.nc)()))||void 0===T?void 0:T.grabberId),ae=(null===(B=(0,u.bh)((0,u.nc)()))||void 0===B?void 0:B.flexRegionId)||"01551827-aabe-4692-b386-86ab5e0e8653";(0,d.useEffect)((function(){var e;(0,u.wt)("firebaseObs"),ie&&(0,m.hW)(ae),null!==(e=(0,u.bh)((0,u.nc)()))&&void 0!==e&&e.isAdmin&&!(0,u.bh)("usersGbList")&&(0,m.Y2)(),setTimeout((function(){O((0,u.M5)())}),450)}),[ie]);var se=function(e,l){re((0,o.Z)({},e,l)),O((0,u.M5)())},ne=function(e){var l=(0,n.Z)({},e);l.actionType="schedule",!le&&(0,k.sz)((0,u.bh)((0,u.nc)()).grabberId,l,(function(){}))},oe=null===(C=(0,u.bh)("grabberAcc"))||void 0===C?void 0:C[ie],re=function(e){(0,m.K1)(ae,ie,e),O((0,u.M5)())},de=null!==oe&&void 0!==oe&&oe.filters?(0,u._2)(oe.filters).sort():[],ce=function(){var e=["dom","lun","mar","mie","jue","vie","sab"],l=[];return(0,u._2)(null===oe||void 0===oe?void 0:oe.schedule).map((function(i){var a;null!==oe&&void 0!==oe&&null!==(a=oe.schedule[i])&&void 0!==a&&a.active&&l.push(e[i])})),{activesDays:l.join(", "),hasAlert:l.length<7}},te=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var l,i,s,o,r,d,c,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(2),(i=(0,n.Z)({},null===(l=(0,u.bh)((0,u.hQ)()))||void 0===l?void 0:l.scan_grb_flx)).params={flexId:ie,":search0":"success"},s=(0,u.I7)(i),e.next=6,s;case 6:(o=e.sent)&&!o.error&&(r={},d=(0,u.Ei)(),c=null===oe||void 0===oe?void 0:oe.earningsBlock,(0,u._2)(o).map((function(e){var l=o[e];10===l.startTime.toString().length&&(l.startTime=1e3*l.startTime,l.endTime=1e3*l.endTime);var i=Math.floor(l.startTime/1e3)+"_"+l.pay,a=c[i],s=l.endTime<(0,u.Ei)()&&a,n=l.endTime<(0,u.Ei)()&&!a||"9"===l.isRejected,t=(0,u.qt)(l.startTime),v=t.stWk+"_"+t.endWk,m=s&&s.tip?1*s.tip:0;l.tip=m,l.isRejected=n,r[v]||(r[v]={blocks:{},total:0}),r[v].blocks[l.startTime]||(r[v].blocks[l.startTime]={}),r[v].blocks[l.startTime]=l,!n&&l.endTime<d&&(r[v].total+=1*l.pay+m)})),(0,u.Rz)("blockWkList",r),t=(0,u.bh)("blockWkList")?(0,u._2)(r).sort().reverse():[],(0,u.Rz)("blockWkSorted",t),O((0,u.M5)()));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){(null===oe||void 0===oe?void 0:oe.puzzleNeedBeSolved)&&(null===oe||void 0===oe?void 0:oe.puzzleUrl)&&window.open(null===oe||void 0===oe?void 0:oe.puzzleUrl)},ue=function(){(0,m.K1)(ae,ie,{running:!0,allowGrabbing:!0,puzzleNeedBeSolved:!1})},me={1:{color:"limegreen",msg:"Velocidad decente ( 5~7 sec )"},2:{color:"yellow",msg:"Velocidad Discreta ( 2.8~3.3 sec )"},3:{color:"orange_clown_fish",msg:"Velocidad agresiva ( 1.3~1.7 sec )"},4:{color:"red_orangered",msg:"Peligro estas al reventar la cuenta"}};return null!==oe&&void 0!==oe&&oe.email?(0,N.jsxs)("div",{style:{width:"100%"},children:[(0,N.jsxs)("div",{className:"ebEwoI",children:[(0,N.jsx)("div",{className:"jKZvHt ",children:(0,N.jsx)(v.OL,{className:"",to:"/",children:(0,N.jsx)("div",{className:" header_mobile ",children:(0,N.jsx)(z,{name:"arrowBack",color:"#AAABC5",size:28})})})}),(0,N.jsxs)("div",{className:"_dsplFlx ",children:[le?(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{className:"_dsplFlx centerBx",children:(0,N.jsx)(S,{init:(0,u.bh)("user2Show"),lbl_empty:"Users",list:(0,u.bh)("usersGbList")||[],onSelect:function(e){return l=e.id,(0,u.Rz)("user2Show",l),(0,u.Rz)("blockWkList",null),void(1===U?O((0,u.M5)()):q(1));var l},background:"var(--dark-900)",color:"var(--light-200)",direction:"right",width:"290px"})})}):(0,N.jsx)("div",{className:"_dsplFlx centerBx",children:null===oe||void 0===oe?void 0:oe.email}),null!==(A=(0,u.bh)((0,u.nc)()))&&void 0!==A&&A.isAdmin?(0,N.jsx)("div",{className:"_dsplFlx centerBx",style:{marginLeft:15},children:(0,N.jsx)(y,{initvalue:$,keyCode:89,updChange:J,color:"#30BEFF"})}):null]})]}),(0,N.jsx)("div",{className:"card_wrpp",style:{marginTop:90},children:(0,N.jsx)(x.he,{title:(0,N.jsx)("div",{className:"_dsplFlx  ",children:null!==oe&&void 0!==oe&&oe.puzzleNeedBeSolved?(0,N.jsx)("div",{className:"lh-default indianred",style:{marginBottom:20},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){var e={zIndex:480,props:{minHeight:"1vh",overlay:!0}};e.content=(0,N.jsx)(f.Z,{confirm:ue,openUrl:ve}),(0,b.OpenModal)(e)},children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(z,{name:"puzzle-outline",color:"var(--lighten-color)",size:20}),"Necesita Resolver el Rompecabeza"]})})}):(0,N.jsx)("div",{className:"lh-default hrm_themecolor limegreen ",style:{marginBottom:20},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){le&&(0,m.K1)(ae,ie,{isValidToken:!(null!==oe&&void 0!==oe&&oe.isValidToken)})},children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(z,{name:"thumb_up_ntflx",color:"var(--lighten-color)",size:20}),"Todo funcionando bien"]})})})}),description:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"_dsplFlx information_detail ",style:{minWidth:320}}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ".concat(null!==oe&&void 0!==oe&&oe.puzzleNeedBeSolved?"indianred hrm_themecolor ":"","  "),children:[(0,N.jsx)("div",{children:(0,N.jsx)("div",{style:{width:"20px"},children:(0,N.jsxs)("svg",{"aria-label":"currently running",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 16",className:null!==oe&&void 0!==oe&&oe.running?"anim-rotate":"",xmlns:"http://www.w3.org/2000/svg",children:[(0,N.jsx)("path",{stroke:null!==oe&&void 0!==oe&&oe.puzzleNeedBeSolved?"var(--lighten-color)":"#60EF40",strokeWidth:"2",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z",opacity:".5"}),(0,N.jsx)("path",{fill:null!==oe&&void 0!==oe&&oe.puzzleNeedBeSolved?"var(--lighten-color)":"#60EF40",fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",clipRule:"evenodd"}),(0,N.jsx)("path",{fill:null!==oe&&void 0!==oe&&oe.puzzleNeedBeSolved?"var(--lighten-color)":"#60EF40",d:"M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"})]})})}),(0,N.jsx)("span",{className:"checklabel",children:"Activo"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(y,{initvalue:!(null===oe||void 0===oe||!oe.running),keyCode:89,updChange:function(e){return se("running",e)},color:"var(--primary-blue--backg-30)"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},onClick:function(e,l){var i=null!==oe&&void 0!==oe&&oe.schedule?(0,u._2)(oe.schedule).sort():[],a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,N.jsx)(j.Z,{confirm:ne,sortedSch:i,schedule:null===oe||void 0===oe?void 0:oe.schedule,updFb:re,email:null===oe||void 0===oe?void 0:oe.email,showAdminView:le}),(0,b.OpenModal)(a)},children:[(0,N.jsx)("div",{children:(0,N.jsx)(z,{name:"calendar",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Horarios"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("span",{className:"checklabel",children:null===(I=ce())||void 0===I?void 0:I.activesDays}),null!==(Z=ce())&&void 0!==Z&&Z.hasAlert?(0,N.jsx)("div",{style:{marginLeft:7},children:(0,N.jsx)(z,{name:"alert",color:"#DBAB0A",size:20})}):null]}),null!==oe&&void 0!==oe&&oe.showManualSpeedMode?(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{children:(0,N.jsx)(z,{name:"car-shift-pattern",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Velocidad Manual"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(y,{initvalue:null===oe||void 0===oe||!oe.turtleMode,keyCode:89,updChange:function(e){return function(e){(0,m.K1)(ae,ie,{turtleMode:e,manualSpeedMode:1})}(!e)},color:"var(--primary-blue--backg-30)"})]}),null!==oe&&void 0!==oe&&oe.turtleMode?null:(0,N.jsxs)("div",{children:[null!==oe&&void 0!==oe&&oe.manualSpeedMode?(0,N.jsx)("div",{className:"lh-default hrm_themecolor ".concat(null===(L=me[null===oe||void 0===oe?void 0:oe.manualSpeedMode])||void 0===L?void 0:L.color," "),style:{margin:"14px 2px"},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",children:(0,N.jsx)("div",{className:"_dsplFlx keyToken ",children:(0,N.jsx)("p",{className:"xSWrp ",children:null===(W=me[null===oe||void 0===oe?void 0:oe.manualSpeedMode])||void 0===W?void 0:W.msg})})})}):null,(0,N.jsxs)("div",{className:"_dsplFlx ",style:{padding:"7px 2px"},children:[(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(4===(null===oe||void 0===oe?void 0:oe.manualSpeedMode)?null===(R=me[null===oe||void 0===oe?void 0:oe.manualSpeedMode])||void 0===R?void 0:R.color:"lightgrey"),onClick:function(){return se("manualSpeedMode",4)},children:(0,N.jsx)(z,{name:"lightning_bolt_outline",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(3===(null===oe||void 0===oe?void 0:oe.manualSpeedMode)?null===(V=me[null===oe||void 0===oe?void 0:oe.manualSpeedMode])||void 0===V?void 0:V.color:"lightgrey"),onClick:function(){return se("manualSpeedMode",3)},children:(0,N.jsx)(z,{name:"airplane",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(2===(null===oe||void 0===oe?void 0:oe.manualSpeedMode)?null===(E=me[null===oe||void 0===oe?void 0:oe.manualSpeedMode])||void 0===E?void 0:E.color:"lightgrey"),onClick:function(){return se("manualSpeedMode",2)},children:(0,N.jsx)(z,{name:"car-hatchback",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(1===(null===oe||void 0===oe?void 0:oe.manualSpeedMode)?null===(K=me[null===oe||void 0===oe?void 0:oe.manualSpeedMode])||void 0===K?void 0:K.color:"lightgrey"),onClick:function(){return se("manualSpeedMode",1)},children:(0,N.jsx)(z,{name:"moped",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"})]}),(0,N.jsx)("div",{className:"lh-default hrm_themecolor indianred darkred",style:{margin:"14px 2px"},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",children:(0,N.jsx)("div",{className:"_dsplFlx keyToken ",children:(0,N.jsx)("p",{className:"xSWrp ",children:"Acelerar las peticiones puede causar errores y verificaciones de la cuenta por parte de amazon, el uso de esta opcion es totalmente bajo su responsabilidad"})})})})]})]}):null]})})}),(0,N.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{padding:9},children:[(0,N.jsx)("div",{className:"lh-default blue_30",style:{margin:"20px 0"},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){return q(1)},children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(z,{name:"market",color:"#30BEFF",size:20}),"Estaciones"]})})}),(0,N.jsx)("div",{className:"lh-default hrm_themecolor darkcyan_green",style:{marginTop:20},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:te,children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(z,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Bloques"]})})})]}),(0,N.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{padding:9},children:null!==oe&&void 0!==oe&&oe.showAvailablesBlocks?(0,N.jsx)("div",{className:"lh-default hrm_themecolor yellow",style:{marginTop:2},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){q(3),setTimeout((0,s.Z)((0,a.Z)().mark((function e(){var l,i,s,o,r,d,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=(0,n.Z)({},null===(l=(0,u.bh)((0,u.hQ)()))||void 0===l?void 0:l.grb_ava_tmSt_flx)).params={date:M(),":search0":"available",":search1":ie},s=(0,u.I7)(i),e.next=5,s;case 5:(o=e.sent)&&!o.error&&((0,u.Rz)("availableBlocksList",o),r=(0,u._2)(o).sort().reverse(),d={},c={},r.map((function(e){var l=e.split("_"),i=1*l[3]/l[4]*1,a=new Date(1e3*l[0]),s=(0,u.kj)(a);d[s]||(d[s]=[]),d[s].push(e),c[s]||(c[s]=[]),i>18&&c[s].push(e)})),(0,u.Rz)("availableBlocksPriceIncrease",c),(0,u.Rz)("availableBlocksGroupsSorted",d),O((0,u.M5)()));case 7:case"end":return e.stop()}}),e)}))),320)},children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(z,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Bloques Disponibles"]})})}):null}),(0,N.jsx)(F,{viewId:1,activeView:U,children:de&&de.map((function(e){var l,i;return(0,N.jsx)(p.Z,{icon:"market",data:null===(l=oe.filters)||void 0===l?void 0:l[e],advanceFilters:null===(i=oe.advanceFilters)||void 0===i?void 0:i[e],sA:e,updSArea:function(l){return function(e,l){var i=null===oe||void 0===oe?void 0:oe.filters;i[l]=Object.assign({},i[l],e),(0,m.K1)(ae,ie,{filters:i});var a=(0,n.Z)({},i[l]);a.actionType="filters",!le&&(0,k.sz)((0,u.bh)((0,u.nc)()).grabberId,a,(function(){}))}(l,e)},updAdvFlt:function(l){return function(e,l){var i=(null===oe||void 0===oe?void 0:oe.advanceFilters)||{};i[l]=Object.assign({},i[l],e),(0,m.K1)(ae,ie,{advanceFilters:i});var a=(0,n.Z)({},i[l]);a.actionType="advanceFilters",!le&&(0,k.sz)((0,u.bh)((0,u.nc)()).grabberId,a,(function(){}))}(l,e)},rmvAdvFlt:function(l){return function(e,l){var i=(null===oe||void 0===oe?void 0:oe.advanceFilters)||{};i[l]=Object.assign({},i[l],e),(0,m.Fv)(ae,ie,"advanceFilters"),(0,m.K1)(ae,ie,{advanceFilters:i})}(l,e)}},e)}))}),(0,N.jsx)(F,{viewId:2,activeView:U,children:(0,u.bh)("blockWkList")&&(0,u.bh)("blockWkSorted").map((function(e){var l,i,a,s,n=1*e.split("_")[0],o=1*e.split("_")[1]-867e5,r=null===(l=(0,u.bh)("blockWkList"))||void 0===l||null===(i=l[e])||void 0===i?void 0:i.blocks;return(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:"lh-default ",children:(0,u.sG)(n)+" - "+(0,u.sG)(o)}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsxs)("div",{className:" payments hrm_themecolor darkcyan_green centerBx",children:[(0,N.jsx)(z,{name:"money",size:22,color:"var(--lighten-color)"}),(0,N.jsxs)("span",{className:"total_week",children:["$",(null===(a=(0,u.bh)("blockWkList"))||void 0===a||null===(s=a[e])||void 0===s?void 0:s.total).toFixed(2)]})]}),(0,N.jsx)("div",{className:"flexSpace"})]}),(0,N.jsx)(_.Z,{refresh:te,cId:ie,blocks:r,wK:e})]},e)}))}),(0,N.jsx)(F,{viewId:3,activeView:U,children:(0,N.jsx)(g.Z,{cId:ie})}),(0,N.jsx)("div",{className:"_dsplFlx ",style:{padding:9,marginBottom:149}})]}):(0,N.jsx)("div",{className:"loading_app centerBx",children:(0,N.jsx)(w,{stroke:"var(--primary-blue--backg-30)",size:94,strokeW:3})})};var F=function(e){var l=e.viewId,i=e.activeView,a=e.children;return(0,N.jsx)("div",{className:"opacityView",style:{opacity:l===i?1:0,marginTop:29},children:l===i?a:null})};function M(e){var l=e||new Date,i=l.getMonth()+1,a=l.getDate();return"".concat(l.getFullYear(),"_").concat(i>9?i:"0"+i,"_").concat(a>9?a:"0"+a)}var T=function(e,l){return e&&e.sort((function(e,i){var a=l(e),s=l(i);return a<s?1:a>s?-1:0}))}}}]);
//# sourceMappingURL=781.49065f9f.chunk.js.map
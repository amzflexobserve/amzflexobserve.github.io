"use strict";(self.webpackChunkgrabber_hrm=self.webpackChunkgrabber_hrm||[]).push([[333],{9697:function(e,l,s){s.r(l),s.d(l,{default:function(){return T},sortCust:function(){return Z}});var a=s(4165),i=s(1413),n=s(5861),c=s(4942),o=s(9439),r=s(2791),d=(s(4629),s(2647)),t=s(7689),m=s(1087),v=s(2735),u=s(5945),h=s(5408),x=s(9752),p=s(1213),j=s(8575),f=s(9760),k=(s(899),s(2908),s(3569)),b=s(3505),_=s(7677),N=s(184),g=((0,d.Np)(),(0,d.PU)()),y=function(e){e.data;var l,s=(0,r.useState)(1),a=(0,o.Z)(s,2)[1],i=null===(l=(0,v.bh)("globalCarrousel"))||void 0===l?void 0:l.brakeHours;return(0,N.jsxs)("div",{style:{maxHeight:"84vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,N.jsx)("div",{className:"_dsplFlx ",children:(0,N.jsx)("p",{className:"form_title",children:"Break Hours"})}),i&&(0,v._2)(i).map((function(e){return(0,N.jsx)(A,{data:i[e],sA:e,updSArea:function(l){return function(e,l){i[e]=l,(0,u.q)({brakeHours:i}),a((0,v.M5)()),setTimeout((function(){a((0,v.M5)())}),400)}(e,l)}},e)}))]})},A=function(e){var l=e.data,s=e.sA,a=e.updSArea,i=(0,r.useState)(1);(0,o.Z)(i,2)[1];return(0,N.jsx)("div",{className:" _dsplFlx dtls minhh card_dark",children:(0,N.jsx)("div",{className:" sa_detail ",children:(0,N.jsx)("div",{className:"lbl_h_dtls hrm_themecolor",style:{marginTop:8,textAlign:"left"},children:(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{className:"lbl_dtls  centerBx brkhrsLbl",style:{textAlign:"left"},children:s}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsxs)("div",{className:"_dsplFlx ",children:[(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(0===l?"limegreen":"lightgrey"),onClick:function(){return a(0)},children:(0,N.jsx)(g,{name:"lightning_bolt_outline",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(2===l?"skyblue":"lightgrey"),onClick:function(){return a(2)},children:(0,N.jsx)(g,{name:"car-hatchback",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(3===l?"yellow":"lightgrey"),onClick:function(){return a(3)},children:(0,N.jsx)(g,{name:"moped",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"})]})]})})})})},S=s(5232),w=(0,d.YZ)(),B=(0,d.A5)(),C=(0,d.PU)(),F=(0,d.tW)(),z=(0,d.Np)(),T=function(e){e.data,e.confirm,e.label,e.item;var l,s,d,g,A,T,Z,W=(0,r.useState)(1),L=(0,o.Z)(W,2)[1],R=(0,r.useState)(1),D=(0,o.Z)(R,2),V=D[0],H=D[1],O=(0,h.Z)("firebaseObs");console.log(O);var q=null===(l=(0,t.TH)().search)||void 0===l||null===(s=l.split("?"))||void 0===s?void 0:s[1],E=(0,v.mB)(q),G=!0,K=(0,v.bh)("user2Show")||(null===E||void 0===E?void 0:E.cId)||(null===(d=(0,v.bh)((0,v.nc)()))||void 0===d?void 0:d.grabberId),P=(null===(g=(0,v.bh)((0,v.nc)()))||void 0===g?void 0:g.flexRegionId)||"01551827-aabe-4692-b386-86ab5e0e8653";(0,r.useEffect)((function(){var e;(0,v.wt)("firebaseObs"),K&&(0,u.hW)(P),null!==(e=(0,v.bh)((0,v.nc)()))&&void 0!==e&&e.isAdmin&&!(0,v.bh)("usersGbList")&&(0,u.Y2)(),setTimeout((function(){L((0,v.M5)())}),450)}),[K]);var U=function(e,l){X((0,c.Z)({},e,l)),L((0,v.M5)())},Y=function(e){},Q=null===(A=(0,v.bh)("grabberAcc"))||void 0===A?void 0:A[K],X=function(e){(0,u.K1)(P,K,e),L((0,v.M5)())},$=null!==Q&&void 0!==Q&&Q.filters?(0,v._2)(Q.filters).sort():[],J=function(){var e=["dom","lun","mar","mie","jue","vie","sab"],l=[];return(0,v._2)(null===Q||void 0===Q?void 0:Q.schedule).map((function(s){var a;null!==Q&&void 0!==Q&&null!==(a=Q.schedule[s])&&void 0!==a&&a.active&&l.push(e[s])})),{activesDays:l.join(", "),hasAlert:l.length<7}},ee=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var l,s,i,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H(4),l=null===Q||void 0===Q?void 0:Q.pendingBlocks,s={},i=(0,v.Ei)(),(0,v._2)(l).map((function(e){var a,n=l[e],c={startTime:e.split("_")[0],endTime:e.split("_")[1],pay:1*n.split("_")[0],hrs:1*n.split("_")[1],serviceAreaId:n.split("_")[2],tip:0};10===c.startTime.toString().length&&(c.startTime=1e3*c.startTime,c.endTime=1e3*c.endTime);var o=new Date(c.startTime),r=new Date(c.endTime),d="".concat((0,v.__)(o)," -  ").concat((0,v.__)(r)),t="".concat((0,v.gX)(o));c.hourly=d,c.date=t,c.serviceAreaName=null===Q||void 0===Q||null===(a=Q.filters[c.serviceAreaId])||void 0===a?void 0:a.name;var m=(0,v.qt)(c.startTime),u=m.stWk+"_"+m.endWk;s[u]||(s[u]={blocks:{},total:0}),s[u].blocks[c.startTime]||(s[u].blocks[c.startTime]={}),s[u].blocks[c.startTime]=c,c.endTime<i&&(s[u].total+=1*c.pay)})),(0,v.Rz)("pendingBlocksWkList",s),n=(0,v.bh)("pendingBlocksWkList")?(0,v._2)(s).sort().reverse():[],(0,v.Rz)("pendingBlocksSorted",n),L((0,v.M5)());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var l,s,n,c,o,r,d,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(2),(s=(0,i.Z)({},null===(l=(0,v.bh)((0,v.hQ)()))||void 0===l?void 0:l.scan_grb_flx)).params={flexId:K,":search0":"success"},n=(0,v.I7)(s),e.next=6,n;case 6:(c=e.sent)&&!c.error&&(o={},r=(0,v.Ei)(),d=null===Q||void 0===Q?void 0:Q.earningsBlock,(0,v._2)(c).map((function(e){var l=c[e];10===l.startTime.toString().length&&(l.startTime=1e3*l.startTime,l.endTime=1e3*l.endTime);var s=Math.floor(l.startTime/1e3)+"_"+l.pay,a=d[s],i=l.endTime<(0,v.Ei)()&&a,n=l.endTime<(0,v.Ei)()&&!a||"9"===l.isRejected,t=(0,v.qt)(l.startTime),m=t.stWk+"_"+t.endWk,u=i&&i.tip?1*i.tip:0;l.tip=u,l.isRejected=n,o[m]||(o[m]={blocks:{},total:0}),o[m].blocks[l.startTime]||(o[m].blocks[l.startTime]={}),o[m].blocks[l.startTime]=l,!n&&l.endTime<r&&(o[m].total+=1*l.pay+u)})),(0,v.Rz)("blockWkList",o),t=(0,v.bh)("blockWkList")?(0,v._2)(o).sort().reverse():[],(0,v.Rz)("blockWkSorted",t),L((0,v.M5)()));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){(0,u.K1)(P,K,{running:!0,allowGrabbing:!0,puzzleNeedBeSolved:!1})},ae=(0,v.bh)("globalCarrousel");return null!==Q&&void 0!==Q&&Q.email?(0,N.jsxs)("div",{style:{width:"100%"},children:[(0,N.jsxs)("div",{className:"ebEwoI",children:[(0,N.jsx)("div",{className:"jKZvHt ",children:(0,N.jsx)(m.OL,{className:"",to:"/",children:(0,N.jsx)("div",{className:" header_mobile ",children:(0,N.jsx)(C,{name:"arrowBack",color:"#AAABC5",size:28})})})}),(0,N.jsx)("div",{className:"_dsplFlx ",children:(0,N.jsx)("div",{className:"_dsplFlx centerBx",children:(0,N.jsx)(B,{init:(0,v.bh)("user2Show"),lbl_empty:"Users",list:(0,v.bh)("usersGbList")||[],onSelect:function(e){return l=e.id,(0,v.Rz)("user2Show",l),(0,v.Rz)("blockWkList",null),(0,S.yO)(l,(function(){console.log((0,v.bh)("logsFlex"))})),void(1===V?L((0,v.M5)()):H(1));var l},background:"var(--dark-900)",color:"var(--light-200)",direction:"right",width:"290px"})})})]}),(0,N.jsx)("div",{className:"card_wrpp",style:{marginTop:90},children:(0,N.jsx)(x.he,{title:(0,N.jsx)("div",{className:"lh-default darkcyan_green",style:{marginBottom:20},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(C,{name:"profile",color:"#03AA8E",size:20}),"AdminDash"]})})}),description:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"key",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:K}),(0,N.jsx)("div",{className:"flexSpace"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"email",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:null===Q||void 0===Q?void 0:Q.email}),(0,N.jsx)("div",{className:"flexSpace"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{children:(0,N.jsx)("div",{style:{width:"20px"},children:(0,N.jsxs)("svg",{"aria-label":"currently running",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 16",className:"anim-rotate",xmlns:"http://www.w3.org/2000/svg",children:[(0,N.jsx)("path",{stroke:"#DBAB0A",strokeWidth:"2",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z",opacity:".5"}),(0,N.jsx)("path",{fill:"#DBAB0A",fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",clipRule:"evenodd"}),(0,N.jsx)("path",{fill:"#DBAB0A",d:"M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"})]})})}),(0,N.jsx)("span",{className:"checklabel",children:"Is in Roulette"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:!(null===Q||void 0===Q||!Q.turtleMode),keyCode:89,updChange:function(e){return U("turtleMode",e)},color:"var(--primary-blue--backg-30)"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"incognito",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Observer"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:!(null===Q||void 0===Q||!Q.onlyObserver),keyCode:89,updChange:function(e){return U("onlyObserver",e)},color:"var(--primary-blue--backg-30)"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"lock-outline",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"On Hold"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:!(null===Q||void 0===Q||!Q.onHold),keyCode:89,updChange:function(e){return U("onHold",e)},color:"var(--primary-blue--backg-30)"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"progress-upload",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Allow Request on Roulette"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:!(null===Q||void 0===Q||!Q.allowRequest),keyCode:89,updChange:function(e){return U("allowRequest",e)},color:"var(--primary-blue--backg-30)"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"open_package_file_outline",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Availables Blocks"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:!(null===Q||void 0===Q||!Q.showAvailablesBlocks),keyCode:89,updChange:function(e){return U("showAvailablesBlocks",e)},color:"var(--primary-blue--backg-30)"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"wizard-hat",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Show Manual Speed Mode"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:!(null===Q||void 0===Q||!Q.showManualSpeedMode),keyCode:89,updChange:function(e){return U("showManualSpeedMode",e)},color:"var(--primary-blue--backg-30)"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"send",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Notification Available Blocks"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:!(null===Q||void 0===Q||!Q.availableBlocksNotification),keyCode:89,updChange:function(e){return U("availableBlocksNotification",e)},color:"var(--primary-blue--backg-30)"})]}),null!==Q&&void 0!==Q&&Q.availableBlocksNotification?(0,N.jsxs)("div",{className:"_dsplFlx ",style:{padding:"7px 2px"},children:[(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments",onClick:function(){return U("telegramNotification",!(null!==Q&&void 0!==Q&&Q.telegramNotification))},children:(0,N.jsx)(C,{name:"telegram",size:22,color:null!==Q&&void 0!==Q&&Q.telegramNotification?"#229ED9":"#AAABC5"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments ",onClick:function(){return U("smsNotification",!(null!==Q&&void 0!==Q&&Q.smsNotification))},children:(0,N.jsx)(C,{name:"android-messages",size:22,color:null!==Q&&void 0!==Q&&Q.smsNotification?"#303f9f":"#AAABC5"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments ",onClick:function(){return U("emailNotification",!(null!==Q&&void 0!==Q&&Q.emailNotification))},children:(0,N.jsx)(C,{name:"email",size:22,color:null!==Q&&void 0!==Q&&Q.emailNotification?"#fff":"#AAABC5"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments ",onClick:function(){return U("whatsappNotification",!(null!==Q&&void 0!==Q&&Q.whatsappNotification))},children:(0,N.jsx)(C,{name:"whatsapp",size:22,color:null!==Q&&void 0!==Q&&Q.whatsappNotification?"#25D366":"#AAABC5"})}),(0,N.jsx)("div",{className:"flexSpace"})]}):null,(0,N.jsxs)("div",{className:"_dsplFlx centerBx information_detail hrm_themecolor yellow bisque",children:[(0,N.jsx)(C,{name:"android_phone",color:"#AAABC5",size:20}),(0,N.jsx)("span",{className:"checklabel",children:"Device"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:"deviceSpot centerBx",children:(0,N.jsx)("span",{children:null===Q||void 0===Q?void 0:Q.deviceId})})]}),(0,N.jsxs)("div",{className:"_dsplFlx centerBx information_detail hrm_themecolor yellow bisque",children:[(0,N.jsx)(C,{name:"car-cruise-control",color:"#AAABC5",size:20}),(0,N.jsx)("span",{className:"checklabel",children:"Speed (min)"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:"centerBx",children:(0,N.jsx)(z,{init:null===Q||void 0===Q?void 0:Q.turtleSpeed,width:100,updChanges:function(e){return X({turtleSpeed:1*e})},type:"number"})})]}),(0,N.jsxs)("div",{className:"_dsplFlx centerBx information_detail hrm_themecolor yellow bisque",children:[(0,N.jsx)(C,{name:"outline_renew",color:"#AAABC5",size:20}),(0,N.jsx)("span",{className:"checklabel",children:"Interation 2 Refresh"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:"centerBx",children:(0,N.jsx)(z,{init:null===ae||void 0===ae?void 0:ae.interaction,width:100,updChanges:function(e){return(0,u.q)({interaction:1*e})},type:"number"})})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},onClick:function(e,l){var s={zIndex:480,props:{minHeight:"1vh",overlay:!0}};s.content=(0,N.jsx)(y,{confirm:Y}),(0,f.OpenModal)(s)},children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"calendar",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Brake Hours"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("span",{className:"checklabel"})]}),(0,N.jsxs)("div",{className:"_dsplFlx  spaceAround flxWrp ",children:[(0,v._2)(null===Q||void 0===Q?void 0:Q.pendingBlocks).length>0?(0,N.jsx)("div",{className:"lh-default hrm_themecolor darkcyan_green",style:{marginTop:20},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:ee,children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(C,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Pendings Block"]})})}):null,(0,N.jsx)("div",{className:"lh-default hrm_themecolor thistle_purple",style:{marginTop:20},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){var e={zIndex:480,props:{minHeight:"1vh",overlay:!0}};e.content=(0,N.jsx)(k.Z,{confirm:se,cId:K}),(0,f.OpenModal)(e)},children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(C,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Add Block"]})})})]})]})})}),(0,N.jsx)("div",{className:"card_wrpp",style:{marginTop:30},children:(0,N.jsx)(x.he,{title:(0,N.jsx)("div",{className:"_dsplFlx  ",children:(0,N.jsx)("div",{className:"lh-default hrm_themecolor ".concat(null!==Q&&void 0!==Q&&Q.isValidToken?"limegreen":"darkred peachpuff indianred"),style:{marginBottom:20},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){(0,u.K1)(P,K,{isValidToken:!(null!==Q&&void 0!==Q&&Q.isValidToken)})},children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(C,{name:null!==Q&&void 0!==Q&&Q.isValidToken?"thumb_up_ntflx":"info",color:"var(--lighten-color)",size:20}),null!==Q&&void 0!==Q&&Q.isValidToken?"Todo funcionando bien":"Hubo un error contactenos"]})})})}),description:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"_dsplFlx information_detail ",style:{minWidth:320}}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ".concat(null!==Q&&void 0!==Q&&Q.puzzleNeedBeSolved?"indianred hrm_themecolor ":"","  "),children:[(0,N.jsx)("div",{children:(0,N.jsx)("div",{style:{width:"20px"},children:(0,N.jsxs)("svg",{"aria-label":"currently running",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 16",className:null!==Q&&void 0!==Q&&Q.running?"anim-rotate":"",xmlns:"http://www.w3.org/2000/svg",children:[(0,N.jsx)("path",{stroke:null!==Q&&void 0!==Q&&Q.puzzleNeedBeSolved?"var(--lighten-color)":null!==Q&&void 0!==Q&&Q.isValidToken?"#60EF40":"#F9D0C4",strokeWidth:"2",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z",opacity:".5"}),(0,N.jsx)("path",{fill:null!==Q&&void 0!==Q&&Q.puzzleNeedBeSolved?"var(--lighten-color)":null!==Q&&void 0!==Q&&Q.isValidToken?"#60EF40":"#F9D0C4",fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",clipRule:"evenodd"}),(0,N.jsx)("path",{fill:null!==Q&&void 0!==Q&&Q.puzzleNeedBeSolved?"var(--lighten-color)":null!==Q&&void 0!==Q&&Q.isValidToken?"#60EF40":"#F9D0C4",d:"M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"})]})})}),(0,N.jsx)("span",{className:"checklabel",children:"Activo"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:!(null===Q||void 0===Q||!Q.running),keyCode:89,updChange:function(e){return U("running",e)},color:"var(--primary-blue--backg-30)"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"open_package_file_outline",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Aceptar Bloques"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:!(null===Q||void 0===Q||!Q.allowGrabbing),keyCode:89,updChange:function(e){return U("allowGrabbing",e)},color:"var(--primary-blue--backg-30)"})]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},onClick:function(e,l){var s=null!==Q&&void 0!==Q&&Q.schedule?(0,v._2)(Q.schedule).sort():[],a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,N.jsx)(j.Z,{confirm:Y,sortedSch:s,schedule:null===Q||void 0===Q?void 0:Q.schedule,updFb:X,email:null===Q||void 0===Q?void 0:Q.email}),(0,f.OpenModal)(a)},children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"calendar",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Horarios"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("span",{className:"checklabel",children:null===(T=J())||void 0===T?void 0:T.activesDays}),null!==(Z=J())&&void 0!==Z&&Z.hasAlert?(0,N.jsx)("div",{style:{marginLeft:7},children:(0,N.jsx)(C,{name:"alert",color:"#DBAB0A",size:20})}):null]}),(0,N.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,N.jsx)("div",{children:(0,N.jsx)(C,{name:"car-shift-pattern",color:"#AAABC5",size:20})}),(0,N.jsx)("span",{className:"checklabel",children:"Velocidades Manual"}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)(w,{initvalue:null===Q||void 0===Q||!Q.turtleMode,keyCode:89,updChange:function(e){return function(e){(0,u.K1)(P,K,{turtleMode:e,manualSpeedMode:1})}(!e)},color:"var(--primary-blue--backg-30)"})]}),null!==Q&&void 0!==Q&&Q.turtleMode?null:(0,N.jsxs)("div",{className:"_dsplFlx ",style:{padding:"7px 2px"},children:[(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(4===(null===Q||void 0===Q?void 0:Q.manualSpeedMode)?"limegreen":"lightgrey"),onClick:function(){return U("manualSpeedMode",4)},children:(0,N.jsx)(C,{name:"lightning_bolt_outline",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(3===(null===Q||void 0===Q?void 0:Q.manualSpeedMode)?"skyblue":"lightgrey"),onClick:function(){return U("manualSpeedMode",3)},children:(0,N.jsx)(C,{name:"airplane",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(2===(null===Q||void 0===Q?void 0:Q.manualSpeedMode)?"yellow":"lightgrey"),onClick:function(){return U("manualSpeedMode",2)},children:(0,N.jsx)(C,{name:"car-hatchback",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"}),"|",(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:" payments hrm_themecolor ".concat(1===(null===Q||void 0===Q?void 0:Q.manualSpeedMode)?"yellow":"lightgrey"),onClick:function(){return U("manualSpeedMode",1)},children:(0,N.jsx)(C,{name:"moped",size:22,color:"var(--lighten-color)"})}),(0,N.jsx)("div",{className:"flexSpace"})]})]})})}),(0,N.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{padding:9},children:[(0,N.jsx)("div",{className:"lh-default blue_30",style:{margin:"20px 0"},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){return H(1)},children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(C,{name:"market",color:"#30BEFF",size:20}),"Estaciones"]})})}),(0,N.jsx)("div",{className:"lh-default hrm_themecolor darkcyan_green",style:{marginTop:20},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:le,children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(C,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Bloques"]})})})]}),(0,N.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{padding:9},children:null!==Q&&void 0!==Q&&Q.showAvailablesBlocks?(0,N.jsx)("div",{className:"lh-default hrm_themecolor yellow",style:{marginTop:2},children:(0,N.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){H(3),setTimeout((0,n.Z)((0,a.Z)().mark((function e(){var l,s,n,c,o,r,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,i.Z)({},null===(l=(0,v.bh)((0,v.hQ)()))||void 0===l?void 0:l.grb_ava_tmSt_flx)).params={date:I(),":search0":"available"},n=(0,v.I7)(s),e.next=5,n;case 5:(c=e.sent)&&!c.error&&((0,v.Rz)("availableBlocksList",c),o=(0,v._2)(c).sort().reverse(),r={},d={},o.map((function(e){var l=e.split("_"),s=1*l[3]/l[4]*1,a=new Date(1e3*l[0]),i=(0,v.kj)(a);r[i]||(r[i]=[]),r[i].push(e),d[i]||(d[i]=[]),s>18&&d[i].push(e)})),(0,v.Rz)("availableBlocksPriceIncrease",d),(0,v.Rz)("availableBlocksGroupsSorted",r),L((0,v.M5)()));case 7:case"end":return e.stop()}}),e)}))),320)},children:(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)(C,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Bloques Disponibles"]})})}):null}),(0,N.jsx)(M,{viewId:1,activeView:V,children:$&&$.map((function(e){var l,s;return(0,N.jsx)(p.Z,{adminTools:G,icon:"market",data:null===(l=Q.filters)||void 0===l?void 0:l[e],advanceFilters:null===(s=Q.advanceFilters)||void 0===s?void 0:s[e],sA:e,updSArea:function(l){return function(e,l){var s=null===Q||void 0===Q?void 0:Q.filters;s[l]=Object.assign({},s[l],e),(0,u.K1)(P,K,{filters:s})}(l,e)},updAdvFlt:function(l){return function(e,l){var s=(null===Q||void 0===Q?void 0:Q.advanceFilters)||{};s[l]=Object.assign({},s[l],e),(0,u.K1)(P,K,{advanceFilters:s})}(l,e)},rmvAdvFlt:function(l){return function(e,l){var s=(null===Q||void 0===Q?void 0:Q.advanceFilters)||{};s[l]=Object.assign({},s[l],e),(0,u.Fv)(P,K,"advanceFilters"),(0,u.K1)(P,K,{advanceFilters:s})}(l,e)}},e)}))}),(0,N.jsx)(M,{viewId:2,activeView:V,children:(0,v.bh)("blockWkList")&&(0,v.bh)("blockWkSorted").map((function(e){var l,s,a,i,n=1*e.split("_")[0],c=1*e.split("_")[1]-867e5,o=null===(l=(0,v.bh)("blockWkList"))||void 0===l||null===(s=l[e])||void 0===s?void 0:s.blocks;return(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:"lh-default ",children:(0,v.sG)(n)+" - "+(0,v.sG)(c)}),(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsxs)("div",{className:" payments hrm_themecolor darkcyan_green centerBx",children:[(0,N.jsx)(C,{name:"money",size:22,color:"var(--lighten-color)"}),(0,N.jsxs)("span",{className:"total_week",children:["$",(null===(a=(0,v.bh)("blockWkList"))||void 0===a||null===(i=a[e])||void 0===i?void 0:i.total).toFixed(2)]})]}),(0,N.jsx)("div",{className:"flexSpace"})]}),(0,N.jsx)(_.Z,{refresh:le,adminTools:G,cId:K,blocks:o,wK:e})]},e)}))}),(0,N.jsx)(M,{viewId:3,activeView:V,children:(0,N.jsx)(b.Z,{adminTools:G,cId:K})}),(0,N.jsx)(M,{viewId:4,activeView:V,children:(0,v.bh)("pendingBlocksWkList")&&(0,v.bh)("pendingBlocksSorted").map((function(e){var l,s,a=1*e.split("_")[0],i=1*e.split("_")[1]-867e5,n=null===(l=(0,v.bh)("pendingBlocksWkList"))||void 0===l||null===(s=l[e])||void 0===s?void 0:s.blocks;return(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,N.jsx)("div",{className:"flexSpace"}),(0,N.jsx)("div",{className:"lh-default ",children:(0,v.sG)(a)+" - "+(0,v.sG)(i)}),(0,N.jsx)("div",{className:"flexSpace"})]}),(0,N.jsx)(_.Z,{refresh:ee,cId:K,blocks:n,wK:e})]},e)}))}),(0,N.jsx)("div",{className:"_dsplFlx ",style:{padding:9,marginBottom:149}})]}):(0,N.jsx)("div",{className:"loading_app centerBx",children:(0,N.jsx)(F,{stroke:"var(--primary-blue--backg-30)",size:94,strokeW:3})})},M=function(e){var l=e.viewId,s=e.activeView,a=e.children;return(0,N.jsx)("div",{className:"opacityView",style:{opacity:l===s?1:0,marginTop:29},children:l===s?a:null})};function I(e){var l=e||new Date,s=l.getMonth()+1,a=l.getDate();return"".concat(l.getFullYear(),"_").concat(s>9?s:"0"+s,"_").concat(a>9?a:"0"+a)}var Z=function(e,l){return e&&e.sort((function(e,s){var a=l(e),i=l(s);return a<i?1:a>i?-1:0}))}}}]);
//# sourceMappingURL=333.a4ef65d0.chunk.js.map
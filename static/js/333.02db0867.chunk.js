"use strict";(self.webpackChunkgrabber_hrm=self.webpackChunkgrabber_hrm||[]).push([[333],{9697:function(e,l,s){s.r(l),s.d(l,{default:function(){return F},sortCust:function(){return I}});var a=s(4165),i=s(1413),n=s(5861),r=s(4942),c=s(9439),o=s(2791),d=(s(4629),s(2647)),t=s(7689),m=s(1087),v=s(2735),h=s(5945),u=s(5408),x=s(9752),p=s(8457),j=s(8575),f=s(9760),k=(s(899),s(2908),s(3569)),b=s(3505),_=s(7677),g=s(184),N=((0,d.Np)(),(0,d.PU)()),y=function(e){e.data;var l,s=(0,o.useState)(1),a=(0,c.Z)(s,2)[1],i=null===(l=(0,v.bh)("globalCarrousel"))||void 0===l?void 0:l.brakeHours;return(0,g.jsxs)("div",{style:{maxHeight:"84vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,g.jsx)("div",{className:"_dsplFlx ",children:(0,g.jsx)("p",{className:"form_title",children:"Break Hours"})}),i&&(0,v._2)(i).map((function(e){return(0,g.jsx)(A,{data:i[e],sA:e,updSArea:function(l){return function(e,l){i[e]=l,(0,h.q)({brakeHours:i}),a((0,v.M5)()),setTimeout((function(){a((0,v.M5)())}),400)}(e,l)}},e)}))]})},A=function(e){var l=e.data,s=e.sA,a=e.updSArea,i=(0,o.useState)(1);(0,c.Z)(i,2)[1];return(0,g.jsx)("div",{className:" _dsplFlx dtls minhh card_dark",children:(0,g.jsx)("div",{className:" sa_detail ",children:(0,g.jsx)("div",{className:"lbl_h_dtls hrm_themecolor",style:{marginTop:8,textAlign:"left"},children:(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,g.jsx)("div",{className:"lbl_dtls  centerBx brkhrsLbl",style:{textAlign:"left"},children:s}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsxs)("div",{className:"_dsplFlx ",children:[(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:" payments hrm_themecolor ".concat(0===l?"limegreen":"lightgrey"),onClick:function(){return a(0)},children:(0,g.jsx)(N,{name:"lightning_bolt_outline",size:22,color:"var(--lighten-color)"})}),(0,g.jsx)("div",{className:"flexSpace"}),"|",(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:" payments hrm_themecolor ".concat(2===l?"skyblue":"lightgrey"),onClick:function(){return a(2)},children:(0,g.jsx)(N,{name:"car-hatchback",size:22,color:"var(--lighten-color)"})}),(0,g.jsx)("div",{className:"flexSpace"}),"|",(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:" payments hrm_themecolor ".concat(3===l?"yellow":"lightgrey"),onClick:function(){return a(3)},children:(0,g.jsx)(N,{name:"moped",size:22,color:"var(--lighten-color)"})}),(0,g.jsx)("div",{className:"flexSpace"})]})]})})})})},S=(0,d.YZ)(),w=(0,d.A5)(),B=(0,d.PU)(),C=(0,d.tW)(),T=(0,d.Np)(),F=function(e){e.data,e.confirm,e.label,e.item;var l,s,d,N,A,F,I=(0,o.useState)(1),Z=(0,c.Z)(I,2)[1],W=(0,o.useState)(1),L=(0,c.Z)(W,2),R=L[0],D=L[1],V=(0,u.Z)("firebaseObs");console.log(V);var H=null===(l=(0,t.TH)().search)||void 0===l||null===(s=l.split("?"))||void 0===s?void 0:s[1],q=(0,v.mB)(H),E=!0,O=(0,v.bh)("user2Show")||(null===q||void 0===q?void 0:q.cId)||(null===(d=(0,v.bh)((0,v.nc)()))||void 0===d?void 0:d.grabberId);(0,o.useEffect)((function(){var e;(0,v.wt)("firebaseObs"),O&&(0,h.hW)(O),null!==(e=(0,v.bh)((0,v.nc)()))&&void 0!==e&&e.isAdmin&&!(0,v.bh)("usersGbList")&&(0,h.Y2)(),setTimeout((function(){Z((0,v.M5)())}),450)}),[O]);var G=function(e,l){U((0,r.Z)({},e,l)),Z((0,v.M5)())},K=function(e){},P=null===(N=(0,v.bh)("grabberAcc"))||void 0===N?void 0:N[O],U=function(e){(0,h.K1)(O,e),Z((0,v.M5)())},Y=null!==P&&void 0!==P&&P.filters?(0,v._2)(P.filters).sort():[],Q=function(){var e=["dom","lun","mar","mie","jue","vie","sab"],l=[];return(0,v._2)(null===P||void 0===P?void 0:P.schedule).map((function(s){var a;null!==P&&void 0!==P&&null!==(a=P.schedule[s])&&void 0!==a&&a.active&&l.push(e[s])})),{activesDays:l.join(", "),hasAlert:l.length<7}},X=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var l,s,i,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(4),l=null===P||void 0===P?void 0:P.pendingBlocks,s={},i=(0,v.Ei)(),(0,v._2)(l).map((function(e){var a,n=l[e],r={startTime:e.split("_")[0],endTime:e.split("_")[1],pay:1*n.split("_")[0],hrs:1*n.split("_")[1],serviceAreaId:n.split("_")[2]};10===r.startTime.toString().length&&(r.startTime=1e3*r.startTime,r.endTime=1e3*r.endTime);var c=new Date(r.startTime),o=new Date(r.endTime),d="".concat((0,v.__)(c)," -  ").concat((0,v.__)(o)),t="".concat((0,v.gX)(c));r.hourly=d,r.date=t,r.serviceAreaName=null===P||void 0===P||null===(a=P.filters[r.serviceAreaId])||void 0===a?void 0:a.name;var m=(0,v.qt)(r.startTime),h=m.stWk+"_"+m.endWk;s[h]||(s[h]={blocks:{},total:0}),s[h].blocks[r.startTime]||(s[h].blocks[r.startTime]={}),s[h].blocks[r.startTime]=r,r.endTime<i&&(s[h].total+=1*r.pay)})),(0,v.Rz)("pendingBlocksWkList",s),n=(0,v.bh)("pendingBlocksWkList")?(0,v._2)(s).sort().reverse():[],(0,v.Rz)("pendingBlocksSorted",n),Z((0,v.M5)());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var l,s,n,r,c,o,d,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(2),(s=(0,i.Z)({},null===(l=(0,v.bh)((0,v.hQ)()))||void 0===l?void 0:l.scan_grb_flx)).params={flexId:O,":search0":"success"},n=(0,v.I7)(s),e.next=6,n;case 6:(r=e.sent)&&!r.error&&(c={},o=(0,v.Ei)(),d=null===P||void 0===P?void 0:P.earningsBlock,(0,v._2)(r).map((function(e){var l=r[e];10===l.startTime.toString().length&&(l.startTime=1e3*l.startTime,l.endTime=1e3*l.endTime);var s=Math.floor(l.startTime/1e3)+"_"+l.pay,a=d[s],i=l.endTime<(0,v.Ei)()&&a,n=l.endTime<(0,v.Ei)()&&!a||"9"===l.isRejected,t=(0,v.qt)(l.startTime),m=t.stWk+"_"+t.endWk,h=i&&i.tip?1*i.tip:0;l.tip=h,l.isRejected=n,c[m]||(c[m]={blocks:{},total:0}),c[m].blocks[l.startTime]||(c[m].blocks[l.startTime]={}),c[m].blocks[l.startTime]=l,!n&&l.endTime<o&&(c[m].total+=1*l.pay+h)})),(0,v.Rz)("blockWkList",c),t=(0,v.bh)("blockWkList")?(0,v._2)(c).sort().reverse():[],(0,v.Rz)("blockWkSorted",t),Z((0,v.M5)()));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){(0,h.K1)(O,{running:!0,allowGrabbing:!0,puzzleNeedBeSolved:!1})},ee=(0,v.bh)("globalCarrousel");return null!==P&&void 0!==P&&P.email?(0,g.jsxs)("div",{style:{width:"100%"},children:[(0,g.jsxs)("div",{className:"ebEwoI",children:[(0,g.jsx)("div",{className:"jKZvHt ",children:(0,g.jsx)(m.OL,{className:"",to:"/",children:(0,g.jsx)("div",{className:" header_mobile ",children:(0,g.jsx)(B,{name:"arrowBack",color:"#AAABC5",size:28})})})}),(0,g.jsx)("div",{className:"_dsplFlx ",children:(0,g.jsx)("div",{className:"_dsplFlx centerBx",children:(0,g.jsx)(w,{init:(0,v.bh)("user2Show"),lbl_empty:"Users",list:(0,v.bh)("usersGbList")||[],onSelect:function(e){return l=e.id,(0,v.Rz)("user2Show",l),(0,v.Rz)("blockWkList",null),void(1===R?Z((0,v.M5)()):D(1));var l},background:"var(--dark-900)",color:"var(--light-200)",direction:"right",width:"290px"})})})]}),(0,g.jsx)("div",{className:"card_wrpp",style:{marginTop:90},children:(0,g.jsx)(x.he,{title:(0,g.jsx)("div",{className:"lh-default darkcyan_green",style:{marginBottom:20},children:(0,g.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",children:(0,g.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,g.jsx)(B,{name:"profile",color:"#03AA8E",size:20}),"AdminDash"]})})}),description:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"key",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:O}),(0,g.jsx)("div",{className:"flexSpace"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"email",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:null===P||void 0===P?void 0:P.email}),(0,g.jsx)("div",{className:"flexSpace"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,g.jsx)("div",{children:(0,g.jsx)("div",{style:{width:"20px"},children:(0,g.jsxs)("svg",{"aria-label":"currently running",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 16",className:"anim-rotate",xmlns:"http://www.w3.org/2000/svg",children:[(0,g.jsx)("path",{stroke:"#DBAB0A",strokeWidth:"2",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z",opacity:".5"}),(0,g.jsx)("path",{fill:"#DBAB0A",fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",clipRule:"evenodd"}),(0,g.jsx)("path",{fill:"#DBAB0A",d:"M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"})]})})}),(0,g.jsx)("span",{className:"checklabel",children:"Is in Roulette"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:!(null===P||void 0===P||!P.turtleMode),keyCode:89,updChange:function(e){return G("turtleMode",e)},color:"var(--primary-blue--backg-30)"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"incognito",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"Observer"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:!(null===P||void 0===P||!P.onlyObserver),keyCode:89,updChange:function(e){return G("onlyObserver",e)},color:"var(--primary-blue--backg-30)"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"lock-outline",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"On Hold"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:!(null===P||void 0===P||!P.onHold),keyCode:89,updChange:function(e){return G("onHold",e)},color:"var(--primary-blue--backg-30)"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"progress-upload",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"Allow Request on Roulette"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:!(null===P||void 0===P||!P.allowRequest),keyCode:89,updChange:function(e){return G("allowRequest",e)},color:"var(--primary-blue--backg-30)"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"open_package_file_outline",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"Availables Blocks"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:!(null===P||void 0===P||!P.showAvailablesBlocks),keyCode:89,updChange:function(e){return G("showAvailablesBlocks",e)},color:"var(--primary-blue--backg-30)"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"wizard-hat",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"Show Manual Speed Mode"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:!(null===P||void 0===P||!P.showManualSpeedMode),keyCode:89,updChange:function(e){return G("showManualSpeedMode",e)},color:"var(--primary-blue--backg-30)"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"send",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"Notification Available Blocks"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:!(null===P||void 0===P||!P.availableBlocksNotification),keyCode:89,updChange:function(e){return G("availableBlocksNotification",e)},color:"var(--primary-blue--backg-30)"})]}),(0,g.jsxs)("div",{className:"_dsplFlx centerBx information_detail hrm_themecolor yellow bisque",children:[(0,g.jsx)(B,{name:"android_phone",color:"#AAABC5",size:20}),(0,g.jsx)("span",{className:"checklabel",children:"Device"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:"deviceSpot centerBx",children:(0,g.jsx)("span",{children:null===P||void 0===P?void 0:P.deviceId})})]}),(0,g.jsxs)("div",{className:"_dsplFlx centerBx information_detail hrm_themecolor yellow bisque",children:[(0,g.jsx)(B,{name:"car-cruise-control",color:"#AAABC5",size:20}),(0,g.jsx)("span",{className:"checklabel",children:"Speed (min)"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:"centerBx",children:(0,g.jsx)(T,{init:null===P||void 0===P?void 0:P.turtleSpeed,width:100,updChanges:function(e){return U({turtleSpeed:1*e})},type:"number"})})]}),(0,g.jsxs)("div",{className:"_dsplFlx centerBx information_detail hrm_themecolor yellow bisque",children:[(0,g.jsx)(B,{name:"outline_renew",color:"#AAABC5",size:20}),(0,g.jsx)("span",{className:"checklabel",children:"Interation 2 Refresh"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:"centerBx",children:(0,g.jsx)(T,{init:null===ee||void 0===ee?void 0:ee.interaction,width:100,updChanges:function(e){return(0,h.q)({interaction:1*e})},type:"number"})})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},onClick:function(e,l){var s={zIndex:480,props:{minHeight:"1vh",overlay:!0}};s.content=(0,g.jsx)(y,{confirm:K}),(0,f.OpenModal)(s)},children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"calendar",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"Brake Hours"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("span",{className:"checklabel"})]}),(0,g.jsxs)("div",{className:"_dsplFlx  spaceAround flxWrp ",children:[(0,v._2)(null===P||void 0===P?void 0:P.pendingBlocks).length>0?(0,g.jsx)("div",{className:"lh-default hrm_themecolor darkcyan_green",style:{marginTop:20},children:(0,g.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:X,children:(0,g.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,g.jsx)(B,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Pendings Block"]})})}):null,(0,g.jsx)("div",{className:"lh-default hrm_themecolor thistle_purple",style:{marginTop:20},children:(0,g.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){var e={zIndex:480,props:{minHeight:"1vh",overlay:!0}};e.content=(0,g.jsx)(k.Z,{confirm:J,cId:O}),(0,f.OpenModal)(e)},children:(0,g.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,g.jsx)(B,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Add Block"]})})})]})]})})}),(0,g.jsx)("div",{className:"card_wrpp",style:{marginTop:30},children:(0,g.jsx)(x.he,{title:(0,g.jsx)("div",{className:"_dsplFlx  ",children:(0,g.jsx)("div",{className:"lh-default hrm_themecolor ".concat(null!==P&&void 0!==P&&P.isValidToken?"limegreen":"darkred peachpuff indianred"),style:{marginBottom:20},children:(0,g.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){(0,h.K1)(O,{isValidToken:!(null!==P&&void 0!==P&&P.isValidToken)})},children:(0,g.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,g.jsx)(B,{name:null!==P&&void 0!==P&&P.isValidToken?"thumb_up_ntflx":"info",color:"var(--lighten-color)",size:20}),null!==P&&void 0!==P&&P.isValidToken?"Todo funcionando bien":"Hubo un error contactenos"]})})})}),description:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"_dsplFlx information_detail ",style:{minWidth:320}}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ".concat(null!==P&&void 0!==P&&P.puzzleNeedBeSolved?"indianred hrm_themecolor ":"","  "),children:[(0,g.jsx)("div",{children:(0,g.jsx)("div",{style:{width:"20px"},children:(0,g.jsxs)("svg",{"aria-label":"currently running",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 16",className:null!==P&&void 0!==P&&P.running?"anim-rotate":"",xmlns:"http://www.w3.org/2000/svg",children:[(0,g.jsx)("path",{stroke:null!==P&&void 0!==P&&P.puzzleNeedBeSolved?"var(--lighten-color)":null!==P&&void 0!==P&&P.isValidToken?"#60EF40":"#F9D0C4",strokeWidth:"2",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z",opacity:".5"}),(0,g.jsx)("path",{fill:null!==P&&void 0!==P&&P.puzzleNeedBeSolved?"var(--lighten-color)":null!==P&&void 0!==P&&P.isValidToken?"#60EF40":"#F9D0C4",fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",clipRule:"evenodd"}),(0,g.jsx)("path",{fill:null!==P&&void 0!==P&&P.puzzleNeedBeSolved?"var(--lighten-color)":null!==P&&void 0!==P&&P.isValidToken?"#60EF40":"#F9D0C4",d:"M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"})]})})}),(0,g.jsx)("span",{className:"checklabel",children:"Activo"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:!(null===P||void 0===P||!P.running),keyCode:89,updChange:function(e){return G("running",e)},color:"var(--primary-blue--backg-30)"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"open_package_file_outline",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"Aceptar Bloques"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:!(null===P||void 0===P||!P.allowGrabbing),keyCode:89,updChange:function(e){return G("allowGrabbing",e)},color:"var(--primary-blue--backg-30)"})]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},onClick:function(e,l){var s=null!==P&&void 0!==P&&P.schedule?(0,v._2)(P.schedule).sort():[],a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,g.jsx)(j.Z,{confirm:K,sortedSch:s,schedule:null===P||void 0===P?void 0:P.schedule,updFb:U,email:null===P||void 0===P?void 0:P.email}),(0,f.OpenModal)(a)},children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"calendar",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"Horarios"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("span",{className:"checklabel",children:null===(A=Q())||void 0===A?void 0:A.activesDays}),null!==(F=Q())&&void 0!==F&&F.hasAlert?(0,g.jsx)("div",{style:{marginLeft:7},children:(0,g.jsx)(B,{name:"alert",color:"#DBAB0A",size:20})}):null]}),(0,g.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,g.jsx)("div",{children:(0,g.jsx)(B,{name:"car-shift-pattern",color:"#AAABC5",size:20})}),(0,g.jsx)("span",{className:"checklabel",children:"Velocidades Manual"}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)(S,{initvalue:null===P||void 0===P||!P.turtleMode,keyCode:89,updChange:function(e){return function(e){(0,h.K1)(O,{turtleMode:e,manualSpeedMode:1})}(!e)},color:"var(--primary-blue--backg-30)"})]}),null!==P&&void 0!==P&&P.turtleMode?null:(0,g.jsxs)("div",{className:"_dsplFlx ",style:{padding:"7px 2px"},children:[(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:" payments hrm_themecolor ".concat(4===(null===P||void 0===P?void 0:P.manualSpeedMode)?"limegreen":"lightgrey"),onClick:function(){return G("manualSpeedMode",4)},children:(0,g.jsx)(B,{name:"lightning_bolt_outline",size:22,color:"var(--lighten-color)"})}),(0,g.jsx)("div",{className:"flexSpace"}),"|",(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:" payments hrm_themecolor ".concat(3===(null===P||void 0===P?void 0:P.manualSpeedMode)?"skyblue":"lightgrey"),onClick:function(){return G("manualSpeedMode",3)},children:(0,g.jsx)(B,{name:"airplane",size:22,color:"var(--lighten-color)"})}),(0,g.jsx)("div",{className:"flexSpace"}),"|",(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:" payments hrm_themecolor ".concat(2===(null===P||void 0===P?void 0:P.manualSpeedMode)?"yellow":"lightgrey"),onClick:function(){return G("manualSpeedMode",2)},children:(0,g.jsx)(B,{name:"car-hatchback",size:22,color:"var(--lighten-color)"})}),(0,g.jsx)("div",{className:"flexSpace"}),"|",(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:" payments hrm_themecolor ".concat(1===(null===P||void 0===P?void 0:P.manualSpeedMode)?"yellow":"lightgrey"),onClick:function(){return G("manualSpeedMode",1)},children:(0,g.jsx)(B,{name:"moped",size:22,color:"var(--lighten-color)"})}),(0,g.jsx)("div",{className:"flexSpace"})]})]})})}),(0,g.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{padding:9},children:[(0,g.jsx)("div",{className:"lh-default blue_30",style:{margin:"20px 0"},children:(0,g.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){return D(1)},children:(0,g.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,g.jsx)(B,{name:"market",color:"#30BEFF",size:20}),"Estaciones"]})})}),(0,g.jsx)("div",{className:"lh-default hrm_themecolor darkcyan_green",style:{marginTop:20},children:(0,g.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:$,children:(0,g.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,g.jsx)(B,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Bloques"]})})})]}),(0,g.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{padding:9},children:null!==P&&void 0!==P&&P.showAvailablesBlocks?(0,g.jsx)("div",{className:"lh-default hrm_themecolor yellow",style:{marginTop:2},children:(0,g.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){D(3),setTimeout((0,n.Z)((0,a.Z)().mark((function e(){var l,s,n,r,c,o,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=(0,i.Z)({},null===(l=(0,v.bh)((0,v.hQ)()))||void 0===l?void 0:l.grb_ava_tmSt_flx)).params={date:M(),":search0":"available"},n=(0,v.I7)(s),e.next=5,n;case 5:(r=e.sent)&&!r.error&&((0,v.Rz)("availableBlocksList",r),c=(0,v._2)(r).sort().reverse(),o={},d={},c.map((function(e){var l=e.split("_"),s=1*l[3]/l[4]*1,a=new Date(1e3*l[0]),i=(0,v.kj)(a);o[i]||(o[i]=[]),o[i].push(e),d[i]||(d[i]=[]),s>18&&d[i].push(e)})),(0,v.Rz)("availableBlocksPriceIncrease",d),(0,v.Rz)("availableBlocksGroupsSorted",o),Z((0,v.M5)()));case 7:case"end":return e.stop()}}),e)}))),320)},children:(0,g.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,g.jsx)(B,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Bloques Disponibles"]})})}):null}),(0,g.jsx)(z,{viewId:1,activeView:R,children:Y&&Y.map((function(e){var l,s;return(0,g.jsx)(p.Z,{adminTools:E,icon:"market",data:null===(l=P.filters)||void 0===l?void 0:l[e],advanceFilters:null===(s=P.advanceFilters)||void 0===s?void 0:s[e],sA:e,updSArea:function(l){return function(e,l){var s=null===P||void 0===P?void 0:P.filters;s[l]=Object.assign({},s[l],e),(0,h.K1)(O,{filters:s})}(l,e)},updAdvFlt:function(l){return function(e,l){var s=(null===P||void 0===P?void 0:P.advanceFilters)||{};s[l]=Object.assign({},s[l],e),(0,h.Fv)(O,"advanceFilters"),(0,h.K1)(O,{advanceFilters:s})}(l,e)}},e)}))}),(0,g.jsx)(z,{viewId:2,activeView:R,children:(0,v.bh)("blockWkList")&&(0,v.bh)("blockWkSorted").map((function(e){var l,s,a,i,n=1*e.split("_")[0],r=1*e.split("_")[1]-867e5,c=null===(l=(0,v.bh)("blockWkList"))||void 0===l||null===(s=l[e])||void 0===s?void 0:s.blocks;return(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:"lh-default ",children:(0,v.sG)(n)+" - "+(0,v.sG)(r)}),(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsxs)("div",{className:" payments hrm_themecolor darkcyan_green centerBx",children:[(0,g.jsx)(B,{name:"money",size:22,color:"var(--lighten-color)"}),(0,g.jsxs)("span",{className:"total_week",children:["$",(null===(a=(0,v.bh)("blockWkList"))||void 0===a||null===(i=a[e])||void 0===i?void 0:i.total).toFixed(2)]})]}),(0,g.jsx)("div",{className:"flexSpace"})]}),(0,g.jsx)(_.Z,{refresh:$,adminTools:E,cId:O,blocks:c,wK:e})]},e)}))}),(0,g.jsx)(z,{viewId:3,activeView:R,children:(0,g.jsx)(b.Z,{adminTools:E,cId:O})}),(0,g.jsx)(z,{viewId:4,activeView:R,children:(0,v.bh)("pendingBlocksWkList")&&(0,v.bh)("pendingBlocksSorted").map((function(e){var l,s,a=1*e.split("_")[0],i=1*e.split("_")[1]-867e5,n=null===(l=(0,v.bh)("pendingBlocksWkList"))||void 0===l||null===(s=l[e])||void 0===s?void 0:s.blocks;return(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,g.jsx)("div",{className:"flexSpace"}),(0,g.jsx)("div",{className:"lh-default ",children:(0,v.sG)(a)+" - "+(0,v.sG)(i)}),(0,g.jsx)("div",{className:"flexSpace"})]}),(0,g.jsx)(_.Z,{refresh:X,cId:O,blocks:n,wK:e})]},e)}))}),(0,g.jsx)("div",{className:"_dsplFlx ",style:{padding:9,marginBottom:149}})]}):(0,g.jsx)("div",{className:"loading_app centerBx",children:(0,g.jsx)(C,{stroke:"var(--primary-blue--backg-30)",size:94,strokeW:3})})},z=function(e){var l=e.viewId,s=e.activeView,a=e.children;return(0,g.jsx)("div",{className:"opacityView",style:{opacity:l===s?1:0,marginTop:29},children:l===s?a:null})};function M(e){var l=e||new Date,s=l.getMonth()+1,a=l.getDate();return"".concat(l.getFullYear(),"_").concat(s>9?s:"0"+s,"_").concat(a>9?a:"0"+a)}var I=function(e,l){return e&&e.sort((function(e,s){var a=l(e),i=l(s);return a<i?1:a>i?-1:0}))}}}]);
//# sourceMappingURL=333.02db0867.chunk.js.map
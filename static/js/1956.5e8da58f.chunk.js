"use strict";(self.webpackChunkgrabber_hrm=self.webpackChunkgrabber_hrm||[]).push([[1956],{1956:function(i,l,e){e.r(l),e.d(l,{default:function(){return B}});var a=e(4942),n=e(9439),s=e(2791),d=(e(4629),e(2647)),r=e(7689),o=e(1087),c=e(2350),t=e(5945),v=e(5408),u=e(184),m=function(i){var l=i.title,e=i.description,a=i.navTo,n=(i.icon,i.btnLbl),s=i.handleBtn,d=i.clickHandler;return(0,u.jsxs)(x,{children:[(0,u.jsx)("div",{className:"iMTYiw hiKoiM",children:l}),(0,u.jsx)("div",{className:"igLyC_hrm1 jyoObE_hrm1",style:{width:"99%"},children:e}),a?(0,u.jsx)(h,{label:n||"Ver Detalles",navTo:a}):null,s?(0,u.jsx)(h,{label:n||"Ver Detalles",clickHandler:d}):null]})},h=function(i){var l=i.clickHandler,e=i.label,a=i.navTo;return(0,u.jsx)(o.OL,{className:" jaqJnq_hrm1",to:a,children:(0,u.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:l,children:(0,u.jsx)("span",{className:" jaqJnq_hrm1",children:e})})})},x=function(i){var l=i.children;return(0,u.jsx)("div",{className:"jRutKh",children:(0,u.jsx)("div",{className:"jSvsvz",style:{width:"96%",margin:"0 auto"},children:(0,u.jsx)("div",{className:"jzcvbH_hrm1",children:(0,u.jsx)("div",{className:" kfqEsq_hrm1",style:{minHeight:"225px"},children:l})})})})},p=e(9760),f=(0,d.Np)(),j=function(i){var l,e=i.data,a=i.sA,d=i.field,r=i.value,o=i.confirm,t="paymentUpdateFrm_"+d+"_"+a,v=(0,s.useState)(1),m=(0,n.Z)(v,2)[1];(0,s.useEffect)((function(){j(d,r)}),[d,t]);var x=function(){(null===e||void 0===e?void 0:e.modalID)&&(0,p.CloseModal)({id:null===e||void 0===e?void 0:e.modalID})},j=function(i,l){var e=(0,c.bh)(t)||{};e[i]=l,(0,c.Rz)(t,e),m((0,c.M5)())},g="minimunPay"===d?"Pago Minimo por Bloque":"Pago Minimo por Hora";return(0,u.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("p",{className:"form_title",children:g})}),(0,u.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:(0,u.jsx)(f,{init:null===(l=(0,c.bh)(t))||void 0===l?void 0:l[d],label:g,width:120,updChanges:function(i){return j(d,1*i)},type:"number"})}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"card",children:(0,u.jsx)(h,{label:"Actualizar",clickHandler:function(i,l){o((0,c.bh)(t)),x()}})})]})]})},g=(0,d.YZ)(),b=(0,d.PU)(),N=function(i){var l,e,a,d=i.icon,r=i.iconColor,o=void 0===r?"var(--light-200)":r,t=i.data,v=i.sA,m=i.updSArea,h=(0,s.useState)(1),x=(0,n.Z)(h,2)[1],f=function(i){m(i),x((0,c.M5)())},N=function(i,l){var e={zIndex:480,props:{minHeight:"1vh",overlay:!0}};e.content=(0,u.jsx)(j,{field:i,value:l,confirm:f,sA:v}),(0,p.OpenModal)(e)};return null!==(l=(0,c.bh)((0,c.nc)()))&&void 0!==l&&l.isAdmin||t.operative?(0,u.jsxs)("div",{className:" _dsplFlx dtls minhh card_dark",children:[(0,u.jsxs)("div",{className:" ",children:[(0,u.jsx)("div",{className:"iconBx ",style:{marginBottom:18},onClick:function(){var i,l,e=(null===t||void 0===t||null===(i=t.geocode)||void 0===i?void 0:i.latitude)+","+(null===t||void 0===t||null===(l=t.geocode)||void 0===l?void 0:l.longitude),a="https://www.google.com/maps/place/".concat(e);e&&window.open(a)},children:(0,u.jsx)(b,{name:d,size:32,color:o})}),(0,u.jsx)(g,{initvalue:null===t||void 0===t?void 0:t.active,keyCode:89,updChange:function(i){m({active:i}),x((0,c.M5)())},color:"var(--primary-blue--backg-30)"}),null!==(e=(0,c.bh)((0,c.nc)()))&&void 0!==e&&e.isAdmin?(0,u.jsx)("div",{className:" ",style:{marginTop:18},children:(0,u.jsx)(g,{initvalue:null===t||void 0===t?void 0:t.operative,keyCode:80,updChange:function(i){m({operative:i}),x((0,c.M5)())},color:"#54E5AB"})}):null]}),(0,u.jsxs)("div",{className:" sa_detail ",children:[null!==(a=(0,c.bh)((0,c.nc)()))&&void 0!==a&&a.isAdmin?(0,u.jsx)("div",{className:"_dsplFlx information_detail ",children:(0,u.jsx)("div",{className:"lbl_dtls",style:{marginTop:8,textAlign:"left"},children:v})}):null,(0,u.jsx)("div",{className:"_dsplFlx information_detail ",children:(0,u.jsx)("div",{className:"lbl_dtls",style:{marginTop:8,textAlign:"left"},children:null===t||void 0===t?void 0:t.name})}),(0,u.jsx)("div",{className:"lbl_h_dtls ",style:{marginTop:8,textAlign:"left"},children:(0,u.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:" payments ",onClick:function(){return N("minimunPay",null===t||void 0===t?void 0:t.minimunPay)},children:[(0,u.jsx)(b,{name:"open_package_file_outline",size:22,color:"var(--primary-blue--backg-30)"}),"$",null===t||void 0===t?void 0:t.minimunPay]}),(0,u.jsx)("div",{className:"flexSpace"}),"|",(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:" payments",onClick:function(){return N("minimunPayByHour",null===t||void 0===t?void 0:t.minimunPayByHour)},children:[(0,u.jsx)(b,{name:"timer_outline2",size:22,color:"var(--primary-blue--backg-30)"}),"$",null===t||void 0===t?void 0:t.minimunPayByHour]}),(0,u.jsx)("div",{className:"flexSpace"})]})})]})]}):null},y=(e(724),(0,d.Np)()),_=(0,d.PU)(),k=(0,d.YZ)(),A=function(i){i.data;var l=i.sA,e=i.field,a=i.value,d=(i.confirm,i.schedule),r=i.sortedSch,o=i.updFb,t="scheduleFrm_"+e+"_"+l,v=(0,s.useState)(1),m=(0,n.Z)(v,2)[1];(0,s.useEffect)((function(){h(e,a)}),[e,t]);var h=function(i,l){var e=(0,c.bh)(t)||{};e[i]=l,(0,c.Rz)(t,e),m((0,c.M5)())};return(0,u.jsxs)("div",{style:{maxHeight:"84vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("p",{className:"form_title",children:"Horarios"})}),r&&r.map((function(i){return(0,u.jsx)(w,{icon:"market",data:d[i],sA:i,updSArea:function(l){return function(i,l){var e=d;e[l]=Object.assign({},d[l],i),o({schedule:e}),m((0,c.M5)())}(l,i)}},i)}))]})},w=function(i){var l=i.data,e=i.sA,a=i.updSArea,d=(0,s.useState)(1),r=(0,n.Z)(d,2)[1],o=function(i){a(i)},t=function(i,a){var n={zIndex:480,props:{minHeight:"1vh",overlay:!0}};n.content=(0,u.jsx)(C,{field:i,value:a,confirm:o,dayName:null===l||void 0===l?void 0:l.dayName,sA:e}),(0,p.OpenModal)(n)};return(0,u.jsxs)("div",{className:" _dsplFlx dtls minhh card_dark",children:[(0,u.jsxs)("div",{className:" ",children:[(0,u.jsx)("div",{className:"iconBx ",style:{marginBottom:8}}),(0,u.jsx)(k,{initvalue:null===l||void 0===l?void 0:l.active,keyCode:89,updChange:function(i){a({active:i}),r((0,c.M5)())},color:"var(--primary-blue--backg-30)"})]}),(0,u.jsxs)("div",{className:" sa_detail ",children:[(0,u.jsx)("div",{className:"_dsplFlx information_detail ",children:(0,u.jsx)("div",{className:"lbl_dtls",style:{marginTop:8,textAlign:"left"},children:null===l||void 0===l?void 0:l.dayName})}),(0,u.jsx)("div",{className:"lbl_h_dtls ",style:{marginTop:8,textAlign:"left"},children:(0,u.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:" payments ",onClick:function(){return t("start",null===l||void 0===l?void 0:l.start)},children:[(0,u.jsx)(_,{name:"timer_outline2",size:22,color:"var(--primary-blue--backg-30)"}),null===l||void 0===l?void 0:l.start]}),(0,u.jsx)("div",{className:"flexSpace"}),"|",(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:" payments",onClick:function(){return t("end",null===l||void 0===l?void 0:l.end)},children:[(0,u.jsx)(_,{name:"timer_outline2",size:22,color:"var(--primary-blue--backg-30)"}),null===l||void 0===l?void 0:l.end]}),(0,u.jsx)("div",{className:"flexSpace"})]})})]})]})},C=function(i){var l,e=i.data,a=i.sA,d=i.field,r=i.value,o=i.dayName,t=i.confirm,v="hourUpdateFrm_"+d+"_"+a,m=(0,s.useState)(1),x=(0,n.Z)(m,2)[1];(0,s.useEffect)((function(){j(d,r)}),[d,v]);var f=function(){(null===e||void 0===e?void 0:e.modalID)&&(0,p.CloseModal)({id:null===e||void 0===e?void 0:e.modalID})},j=function(i,l){var e=(0,c.bh)(v)||{};e[i]=l,(0,c.Rz)(v,e),x((0,c.M5)())},g="start"===d?"Comenzar":"Terminar";return(0,u.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsxs)("p",{className:"form_title",children:[o," - ",g]})}),(0,u.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:(0,u.jsx)(y,{init:null===(l=(0,c.bh)(v))||void 0===l?void 0:l[d],label:g,width:120,updChanges:function(i){return j(d,1*i)},type:"number"})}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"card",children:(0,u.jsx)(h,{label:"Actualizar",clickHandler:function(i,l){t((0,c.bh)(v)),f()}})})]})]})},F=(0,d.Np)(),M=function(i){var l,e=i.data,a=(i.sA,i.field),d=i.value,r=i.confirm,o="graceTimeFrm_"+a+"_",t=(0,s.useState)(1),v=(0,n.Z)(t,2)[1];(0,s.useEffect)((function(){x(a,d)}),[a,o]);var m=function(){(null===e||void 0===e?void 0:e.modalID)&&(0,p.CloseModal)({id:null===e||void 0===e?void 0:e.modalID})},x=function(i,l){var e=(0,c.bh)(o)||{};e[i]=l,(0,c.Rz)(o,e),v((0,c.M5)())};return(0,u.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,u.jsx)("div",{className:"_dsplFlx ",children:(0,u.jsx)("p",{className:"form_title",children:"Tiempo de espera"})}),(0,u.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:(0,u.jsx)(F,{init:null===(l=(0,c.bh)(o))||void 0===l?void 0:l[a],label:"Minutos",width:120,updChanges:function(i){return x(a,1*i)},type:"number"})}),(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"card",children:(0,u.jsx)(h,{label:"Actualizar",clickHandler:function(i,l){r((0,c.bh)(o)),m()}})})]})]})},S=(0,d.YZ)(),T=(0,d.A5)(),Z=(0,d.PU)(),B=function(i){i.data,i.confirm,i.label,i.item;var l,e,d,h,x,f,j,g=(0,s.useState)(1),b=(0,n.Z)(g,2)[1],y=(0,v.Z)("firebaseObs");console.log(y);var _=null===(l=(0,r.TH)().search)||void 0===l||null===(e=l.split("?"))||void 0===e?void 0:e[1],k=(0,c.mB)(_),w=(null===(d=(0,c.bh)((0,c.nc)()))||void 0===d?void 0:d.isAdmin)&&(0,c.bh)("user2Show")||(null===k||void 0===k?void 0:k.cId)||(null===(h=(0,c.bh)((0,c.nc)()))||void 0===h?void 0:h.grabberId);null===k||void 0===k||k.view;(0,s.useEffect)((function(){w&&(0,t.hW)(w)}),[w]);var C=function(i,l){H((0,a.Z)({},i,l)),b((0,c.M5)())},F=function(i){},B=null===(x=(0,c.bh)("grabberAcc"))||void 0===x?void 0:x[w],H=function(i){(0,t.K1)(w,i),b((0,c.M5)())},I=null!==B&&void 0!==B&&B.filters?(0,c._2)(B.filters).sort():[];return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"ebEwoI",children:[(0,u.jsx)("div",{className:"jKZvHt ",children:(0,u.jsx)(o.OL,{className:"",to:"/",children:(0,u.jsx)("div",{className:"nav_title_header header_mobile ",children:(0,u.jsx)(Z,{name:"arrowBack",color:"#AAABC5",size:28})})})}),null!==(f=(0,c.bh)((0,c.nc)()))&&void 0!==f&&f.isAdmin?(0,u.jsx)("div",{style:{margin:"9px 1px 0 25px"},children:(0,u.jsx)(T,{init:(0,c.bh)("user2Show"),lbl_empty:"Users",list:[{label:"yudithpm82@gmail.com",id:"AEL45TREIXBUL4NXKKMNSBVSGCPA"},{label:"jorgepowell76@gmail.com",id:"AGYKUBRCM7OR6PZKEYLPMV4J3W3A"},{label:"framny86@gmail.com",id:"AF4MZJSYFBESW7ORZUGQZL2TIBOA"},{label:"liaframny96@gmail.com",id:"AG54I4LLSDIKOXJ2LQP7VZBC2V2Q"}],onSelect:function(i){return l=i.id,(0,c.Rz)("user2Show",l),void b((0,c.M5)());var l},background:"var(--dark-900)",color:"var(--light-200)",direction:"right",width:"290px"})}):null===B||void 0===B?void 0:B.email]}),(0,u.jsx)("div",{className:"card_wrpp",style:{marginTop:90},children:(0,u.jsx)(m,{title:(0,u.jsx)("div",{className:"lh-default ".concat(null!==B&&void 0!==B&&B.isValidToken?"limegreen":"peachpuff"),style:{marginBottom:20},children:(0,u.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",children:(0,u.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,u.jsx)(Z,{name:"key",color:null!==B&&void 0!==B&&B.isValidToken?"#60EF40":"#F9D0C4",size:20}),null!==B&&void 0!==B&&B.isValidToken?"Llave activa":"Llave expirada"]})})}),description:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"_dsplFlx information_detail ",style:{minWidth:320}}),(0,u.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,u.jsx)("div",{children:(0,u.jsx)("div",{style:{width:"20px"},children:(0,u.jsxs)("svg",{"aria-label":"currently running",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 16",className:"anim-rotate",xmlns:"http://www.w3.org/2000/svg",children:[(0,u.jsx)("path",{stroke:null!==B&&void 0!==B&&B.isValidToken?"#60EF40":"#F9D0C4",strokeWidth:"2",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z",opacity:".5"}),(0,u.jsx)("path",{fill:null!==B&&void 0!==B&&B.isValidToken?"#60EF40":"#F9D0C4",fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",clipRule:"evenodd"}),(0,u.jsx)("path",{fill:null!==B&&void 0!==B&&B.isValidToken?"#60EF40":"#F9D0C4",d:"M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"})]})})}),(0,u.jsx)("span",{className:"checklabel",children:"Activo"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(S,{initvalue:!(null===B||void 0===B||!B.running),keyCode:89,updChange:function(i){return C("running",i)},color:"var(--primary-blue--backg-30)"})]}),(0,u.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},children:[(0,u.jsx)("div",{children:(0,u.jsx)(Z,{name:"open_package_file_outline",color:"#AAABC5",size:20})}),(0,u.jsx)("span",{className:"checklabel",children:"Aceptar Bloques"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(S,{initvalue:!(null===B||void 0===B||!B.grabbing),keyCode:89,updChange:function(i){return C("grabbing",i)},color:"var(--primary-blue--backg-30)"})]}),(0,u.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},onClick:function(i,l){var e=null!==B&&void 0!==B&&B.schedule?(0,c._2)(B.schedule).sort():[],a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,u.jsx)(A,{confirm:F,sortedSch:e,schedule:null===B||void 0===B?void 0:B.schedule,updFb:H}),(0,p.OpenModal)(a)},children:[(0,u.jsx)("div",{children:(0,u.jsx)(Z,{name:"calendar",color:"#AAABC5",size:20})}),(0,u.jsx)("span",{className:"checklabel",children:"Horarios"}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},onClick:function(i,l){var e={zIndex:480,props:{minHeight:"1vh",overlay:!0}};e.content=(0,u.jsx)(M,{value:null===B||void 0===B?void 0:B.graceTime,field:"graceTime",confirm:H}),(0,p.OpenModal)(e)},children:[(0,u.jsx)("div",{children:(0,u.jsx)(Z,{name:"timer_outline2",color:"#AAABC5",size:20})}),(0,u.jsx)("span",{className:"checklabel",children:"Tiempo de espera"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("span",{className:"checklabel",children:[null===B||void 0===B?void 0:B.graceTime,"min"]})]}),null!==(j=(0,c.bh)((0,c.nc)()))&&void 0!==j&&j.isAdmin?(0,u.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,u.jsx)("div",{children:(0,u.jsx)("div",{style:{width:"20px"},children:(0,u.jsxs)("svg",{"aria-label":"currently running",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 16",className:"anim-rotate",xmlns:"http://www.w3.org/2000/svg",children:[(0,u.jsx)("path",{stroke:"#DBAB0A",strokeWidth:"2",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z",opacity:".5"}),(0,u.jsx)("path",{fill:"#DBAB0A",fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",clipRule:"evenodd"}),(0,u.jsx)("path",{fill:"#DBAB0A",d:"M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"})]})})}),(0,u.jsx)("span",{className:"checklabel",children:"Is in Roulette"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(S,{initvalue:!(null===B||void 0===B||!B.turtleMode),keyCode:89,updChange:function(i){return C("turtleMode",i)},color:"var(--primary-blue--backg-30)"})]}):null]})})}),I&&I.map((function(i){return(0,u.jsx)(N,{icon:"market",data:B.filters[i],sA:i,updSArea:function(l){return function(i,l){var e=null===B||void 0===B?void 0:B.filters;e[l]=Object.assign({},e[l],i),(0,t.K1)(w,{filters:e})}(l,i)}},i)})),(0,u.jsx)("div",{className:"_dsplFlx ",style:{padding:9,marginBottom:90}})]})}},5945:function(i,l,e){e.d(l,{Fv:function(){return x},K1:function(){return h},hW:function(){return u}});var a=e(4942),n=e(4702),s=e(6321),d=e(2350);var r=JSON.parse((0,d.yX)("eyJhcGlLZXkiOiJBSXphU3lDeDBFcnFmbENVdXZpRlRqald4SEFITWpvQjBsd2xGX00iLCJhdXRoRG9tYWluIjoiaHJtLTExMjguZmlyZWJhc2VhcHAuY29tIiwiZGF0YWJhc2VVUkwiOiJodHRwczovL2hybS0xMTI4LmZpcmViYXNlaW8uY29tIiwicHJvamVjdElkIjoiaHJtLTExMjgiLCJzdG9yYWdlQnVja2V0IjoiaHJtLTExMjguYXBwc3BvdC5jb20iLCJtZXNzYWdpbmdTZW5kZXJJZCI6IjEwNDkyNTA1ODUyNDUiLCJhcHBJZCI6IjE6MTA0OTI1MDU4NTI0NTp3ZWI6OGI0ZTA3NGI5Yzg4MDA1ZiJ9")),o={},c=(0,n.ZF)(r),t=(0,s.ad)(c),v=null,u=function(i){v&&v(),m(i)},m=function(i){var l=(0,s.hJ)(t,"hhh",i,"params");return v=(0,s.cf)(l,(function(i){i.docChanges().forEach((function(i){var l=i.doc.id,e=i.doc.data();o[l]=e,(0,d.Rz)("grabberAcc",o),(0,d.wt)("firebaseObs"),setTimeout((function(){(0,d.wt)("firebaseObs")}),250)}))})),null},h=function(i,l){var e=(0,s.JU)(t,"hhh",i,"params",i);(0,s.pl)(e,l,{merge:!0})},x=function(i,l){var e=(0,s.JU)(t,"hhh",i,"params",i);(0,s.r7)(e,(0,a.Z)({},l,(0,s.AK)()))}},4629:function(){}}]);
//# sourceMappingURL=1956.5e8da58f.chunk.js.map
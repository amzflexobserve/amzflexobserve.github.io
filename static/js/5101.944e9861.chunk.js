"use strict";(self.webpackChunkgrabber_hrm=self.webpackChunkgrabber_hrm||[]).push([[5101,1964],{1964:function(e,l,a){a.r(l),a.d(l,{default:function(){return n}});a(2791);var i=a(9760),s=a(184),n=function(e){var l=e.data,a=e.confirm,n=e.lbl_p,r=e.lbl_span,d=l.modalID,c=function(e){(0,i.CloseModal)({id:d})};return(0,s.jsxs)("div",{style:{maxHeight:"40vh",minHeight:"28vh",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,s.jsxs)("div",{className:"_dsplFlx ",children:[(0,s.jsx)("p",{className:"form_title",children:n}),(0,s.jsx)("div",{className:"flexSpace"})]}),(0,s.jsx)("div",{className:"_dsplFlx ",children:(0,s.jsx)("span",{children:r})}),(0,s.jsxs)("div",{className:"_dsplFlx ",style:{padding:"15px 10px"},children:[(0,s.jsx)("div",{className:"flexSpace"}),(0,s.jsx)("p",{className:"group_title addBtn",onClick:c,children:"Cancelar"}),(0,s.jsx)("p",{className:"group_title addBtn red",onClick:function(){a(),c()},children:"Eliminar"})]})]})}},6349:function(e,l,a){var i=a(9760),s=a(2647),n=a(2350),r=a(184),d=(0,s.LA)();l.Z=function(e){var l=e.init,a=e.label,s=e.updDate,c=function(e){s(e.initDate+800)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"label",children:a||"Fecha"}),(0,r.jsx)("div",{className:"date2Upd",onClick:function(){var e={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,r.jsx)(d,{onConfirm:c,init:l}),(0,i.OpenModal)(e)},children:l?(0,n.sG)(l):(0,n.sG)((new Date).getTime())})]})}},5101:function(e,l,a){a.r(l),a.d(l,{default:function(){return P}});var i=a(4165),s=a(1413),n=a(5861),r=a(4942),d=a(9439),c=a(2791),o=(a(4629),a(2647)),t=a(7689),v=a(1087),u=a(2350),m=a(5945),h=a(5408),x=a(184),p=function(e){var l=e.title,a=e.description,i=e.navTo,s=(e.icon,e.btnLbl),n=e.handleBtn,r=e.clickHandler;return(0,x.jsxs)(f,{children:[(0,x.jsx)("div",{className:"iMTYiw hiKoiM",children:l}),(0,x.jsx)("div",{className:"igLyC_hrm1 jyoObE_hrm1",style:{width:"99%"},children:a}),i?(0,x.jsx)(j,{label:s||"Ver Detalles",navTo:i}):null,n?(0,x.jsx)(j,{label:s||"Ver Detalles",clickHandler:r}):null]})},j=function(e){var l=e.clickHandler,a=e.label,i=e.navTo;return(0,x.jsx)(v.OL,{className:" jaqJnq_hrm1",to:i,children:(0,x.jsx)("button",{className:"gHAsFI_hrm1 dqnOfN jUrKkb",onClick:l,children:(0,x.jsx)("span",{className:" jaqJnq_hrm1",children:a})})})},f=function(e){var l=e.children;return(0,x.jsx)("div",{className:"",children:(0,x.jsx)("div",{className:"jSvsvz",style:{width:"96%",margin:"0 auto"},children:(0,x.jsx)("div",{className:"jzcvbH_hrm1",children:(0,x.jsx)("div",{className:" kfqEsq_hrm1",style:{minHeight:"225px"},children:l})})})})},b=a(9760),N=(0,o.Np)(),_=function(e){var l,a=e.data,i=e.sA,s=e.field,n=e.value,r=e.confirm,o="paymentUpdateFrm_"+s+"_"+i,t=(0,c.useState)(1),v=(0,d.Z)(t,2)[1];(0,c.useEffect)((function(){h(s,n)}),[s,o]);var m=function(){(null===a||void 0===a?void 0:a.modalID)&&(0,b.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})},h=function(e,l){var a=(0,u.bh)(o)||{};a[e]=l,(0,u.Rz)(o,a),v((0,u.M5)())},p={minimunPay:"Pago Minimo por Bloque",minimunPayByHour:"Pago Minimo por Hora",delayTime:"Tiempo de Espera"}[s];return(0,x.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsx)("div",{className:"_dsplFlx ",children:(0,x.jsx)("p",{className:"form_title",children:p})}),(0,x.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:(0,x.jsx)(N,{init:null===(l=(0,u.bh)(o))||void 0===l?void 0:l[s],label:p,width:120,updChanges:function(e){return h(s,1*e)},type:"number"})}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)(j,{label:"Actualizar",clickHandler:function(e,l){r((0,u.bh)(o)),m()}})})]})]})},g=(0,o.YZ)(),k=(0,o.PU)(),y=function(e){var l,a=e.icon,i=e.iconColor,s=void 0===i?"var(--light-200)":i,n=e.data,r=e.sA,o=e.updSArea,t=e.adminTools,v=(0,c.useState)(1),m=(0,d.Z)(v,2)[1],h=(null===(l=(0,u.bh)((0,u.nc)()))||void 0===l?void 0:l.isAdmin)&&t,p=function(e){o(e),m((0,u.M5)())},j=function(e,l){var a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,x.jsx)(_,{field:e,value:l,confirm:p,sA:r}),(0,b.OpenModal)(a)};return h||n.operative?(0,x.jsxs)("div",{className:" _dsplFlx minhh card_dark",children:[(0,x.jsxs)("div",{className:" ",children:[(0,x.jsx)("div",{className:"iconBx ",style:{marginBottom:18},onClick:function(){var e,l,a=(null===n||void 0===n||null===(e=n.geocode)||void 0===e?void 0:e.latitude)+","+(null===n||void 0===n||null===(l=n.geocode)||void 0===l?void 0:l.longitude),i="https://www.google.com/maps/place/".concat(a);a&&window.open(i)},children:(0,x.jsx)(k,{name:a,size:32,color:s})}),(0,x.jsx)(g,{initvalue:null===n||void 0===n?void 0:n.active,keyCode:89,updChange:function(e){o({active:e}),m((0,u.M5)())},color:"var(--primary-blue--backg-30)"}),h?(0,x.jsx)("div",{className:" ",style:{marginTop:18},children:(0,x.jsx)(g,{initvalue:null===n||void 0===n?void 0:n.operative,keyCode:80,updChange:function(e){o({operative:e}),m((0,u.M5)())},color:"#54E5AB"})}):null]}),(0,x.jsxs)("div",{className:" sa_detail ",children:[h?(0,x.jsx)("div",{className:"_dsplFlx information_detail ",children:(0,x.jsx)("div",{className:"lbl_dtls",style:{marginTop:8,textAlign:"left"},children:r})}):null,(0,x.jsx)("div",{className:"_dsplFlx information_detail a4W",children:(0,x.jsx)("div",{className:"lbl_dtls_sA xS",children:null===n||void 0===n?void 0:n.name})}),(0,x.jsx)("div",{className:"lbl_h_dtls ",style:{marginTop:8,textAlign:"left"},children:(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments ",onClick:function(){return j("minimunPay",null===n||void 0===n?void 0:n.minimunPay)},children:[(0,x.jsx)(k,{name:"open_package_file_outline",size:22,color:"var(--primary-blue--backg-30)"}),"$",null===n||void 0===n?void 0:n.minimunPay]}),(0,x.jsx)("div",{className:"flexSpace"}),"|",(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments",onClick:function(){return j("minimunPayByHour",null===n||void 0===n?void 0:n.minimunPayByHour)},children:[(0,x.jsx)(k,{name:"timer_outline2",size:22,color:"var(--primary-blue--backg-30)"}),"$",null===n||void 0===n?void 0:n.minimunPayByHour]}),(0,x.jsx)("div",{className:"flexSpace"}),"|",(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments",onClick:function(){return j("delayTime",null===n||void 0===n?void 0:n.delayTime)},children:[(0,x.jsx)(k,{name:"restore_clock",size:22,color:"var(--primary-blue--backg-30)"}),null===n||void 0===n?void 0:n.delayTime,"min"]}),(0,x.jsx)("div",{className:"flexSpace"})]})})]})]}):null},w=(0,o.Np)(),A=(0,o.PU)(),F=(0,o.YZ)(),z=function(e){e.data;var l=e.sA,a=e.field,i=e.value,s=(e.confirm,e.schedule),n=e.sortedSch,r=e.updFb,o="scheduleFrm_"+a+"_"+l,t=(0,c.useState)(1),v=(0,d.Z)(t,2)[1];(0,c.useEffect)((function(){m(a,i)}),[a,o]);var m=function(e,l){var a=(0,u.bh)(o)||{};a[e]=l,(0,u.Rz)(o,a),v((0,u.M5)())};return(0,x.jsxs)("div",{style:{maxHeight:"84vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsx)("div",{className:"_dsplFlx ",children:(0,x.jsx)("p",{className:"form_title",children:"Horarios"})}),n&&n.map((function(e){return(0,x.jsx)(C,{icon:"market",data:s[e],sA:e,updSArea:function(l){return function(e,l){var a=s;a[l]=Object.assign({},s[l],e),r({schedule:a}),v((0,u.M5)())}(l,e)}},e)}))]})},C=function(e){var l=e.data,a=e.sA,i=e.updSArea,s=(0,c.useState)(1),n=(0,d.Z)(s,2)[1],r=function(e){i(e)},o=function(e,i){var s={zIndex:480,props:{minHeight:"1vh",overlay:!0}};s.content=(0,x.jsx)(S,{field:e,value:i,confirm:r,dayName:null===l||void 0===l?void 0:l.dayName,sA:a}),(0,b.OpenModal)(s)};return(0,x.jsxs)("div",{className:" _dsplFlx dtls minhh card_dark",children:[(0,x.jsxs)("div",{className:" ",children:[(0,x.jsx)("div",{className:"iconBx ",style:{marginBottom:8}}),(0,x.jsx)(F,{initvalue:null===l||void 0===l?void 0:l.active,keyCode:89,updChange:function(e){i({active:e}),n((0,u.M5)())},color:"var(--primary-blue--backg-30)"})]}),(0,x.jsxs)("div",{className:" sa_detail ",children:[(0,x.jsx)("div",{className:"_dsplFlx information_detail ",children:(0,x.jsx)("div",{className:"lbl_dtls",style:{marginTop:8,textAlign:"left"},children:null===l||void 0===l?void 0:l.dayName})}),(0,x.jsx)("div",{className:"lbl_h_dtls ",style:{marginTop:8,textAlign:"left"},children:(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments ",onClick:function(){return o("start",null===l||void 0===l?void 0:l.start)},children:[(0,x.jsx)(A,{name:"timer_outline2",size:22,color:"var(--primary-blue--backg-30)"}),null===l||void 0===l?void 0:l.start]}),(0,x.jsx)("div",{className:"flexSpace"}),"|",(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments",onClick:function(){return o("end",null===l||void 0===l?void 0:l.end)},children:[(0,x.jsx)(A,{name:"timer_outline2",size:22,color:"var(--primary-blue--backg-30)"}),null===l||void 0===l?void 0:l.end]}),(0,x.jsx)("div",{className:"flexSpace"})]})})]})]})},S=function(e){var l,a=e.data,i=e.sA,s=e.field,n=e.value,r=e.dayName,o=e.confirm,t="hourUpdateFrm_"+s+"_"+i,v=(0,c.useState)(1),m=(0,d.Z)(v,2)[1];(0,c.useEffect)((function(){p(s,n)}),[s,t]);var h=function(){(null===a||void 0===a?void 0:a.modalID)&&(0,b.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})},p=function(e,l){var a=(0,u.bh)(t)||{};a[e]=l,(0,u.Rz)(t,a),m((0,u.M5)())},f="start"===s?"Comenzar":"Terminar";return(0,x.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsx)("div",{className:"_dsplFlx ",children:(0,x.jsxs)("p",{className:"form_title",children:[r," - ",f]})}),(0,x.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:(0,x.jsx)(w,{init:null===(l=(0,u.bh)(t))||void 0===l?void 0:l[s],label:f,width:120,updChanges:function(e){return p(s,1*e)},type:"number"})}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)(j,{label:"Actualizar",clickHandler:function(e,l){o((0,u.bh)(t)),h()}})})]})]})},T=(0,o.Np)(),B=function(e){var l,a=e.data,i=(e.sA,e.field),s=e.value,n=e.confirm,r="graceTimeFrm_"+i+"_",o=(0,c.useState)(1),t=(0,d.Z)(o,2)[1];(0,c.useEffect)((function(){m(i,s)}),[i,r]);var v=function(){(null===a||void 0===a?void 0:a.modalID)&&(0,b.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})},m=function(e,l){var a=(0,u.bh)(r)||{};a[e]=l,(0,u.Rz)(r,a),t((0,u.M5)())};return(0,x.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsx)("div",{className:"_dsplFlx ",children:(0,x.jsx)("p",{className:"form_title",children:"Tiempo de espera"})}),(0,x.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:(0,x.jsx)(T,{init:null===(l=(0,u.bh)(r))||void 0===l?void 0:l[i],label:"Minutos",width:120,updChanges:function(e){return m(i,1*e)},type:"number"})}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)(j,{label:"Actualizar",clickHandler:function(e,l){n((0,u.bh)(r)),v()}})})]})]})},I=((0,o.Np)(),(0,o.PU)()),Z=function(e){var l=e.data,a=e.openUrl,i=e.confirm,s=function(){(null===l||void 0===l?void 0:l.modalID)&&(0,b.CloseModal)({id:null===l||void 0===l?void 0:l.modalID})};return(0,x.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"10vh",width:"80vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsx)("div",{className:"_dsplFlx ",children:(0,x.jsx)("p",{className:"form_title",children:"Resolver el Rompecabeza"})}),(0,x.jsxs)("div",{className:" ",children:[(0,x.jsx)("div",{}),(0,x.jsx)("div",{className:"lh-default indianred",style:{margin:40},children:(0,x.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:a,children:(0,x.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,x.jsx)(I,{name:"puzzle-outline",color:"var(--lighten-color)",size:32}),(0,x.jsx)("span",{className:"centerBx",children:"Ir al Rompecabeza"})]})})}),(0,x.jsx)("div",{className:"lh-default limegreen",style:{marginBottom:40},children:(0,x.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(e,l){i(),s()},children:(0,x.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,x.jsx)(I,{name:"puzzle-check-outline",color:"var(--lighten-color)",size:32}),(0,x.jsx)("span",{className:"centerBx",children:"Ya lo resolvi"})]})})})]})]})},H=a(1964),M=((0,o.YZ)(),(0,o.PU)()),D=function(e){var l,a=e.cId,r=e.data,o=e.adminTools,t=e.refresh,v=(0,c.useState)(1),m=((0,d.Z)(v,2)[1],(null===(l=(0,u.bh)((0,u.nc)()))||void 0===l?void 0:l.isAdmin)&&o),h=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(l){var n,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(d=(0,s.Z)({},null===(n=(0,u.bh)((0,u.hQ)()))||void 0===n?void 0:n.delete_grb_flx)).params={flexId:a,blockId:null===r||void 0===r?void 0:r.blockId},m&&p(d);case 3:case"end":return e.stop()}}),e)})));return function(l){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(l){var a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,u.I7)(l),e.next=3,a;case 3:(s=e.sent)&&!s.error&&t();case 5:case"end":return e.stop()}}),e)})));return function(l){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:"  minhh card_dark hrm_themecolor yellow darkcyan_green",children:[(0,x.jsx)("div",{className:"  ",children:(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"iconBx centerBx",onClick:function(e){var l=(0,u.bh)("lastTimeCallModal")||0;if(m&&Date.now()>l){(0,u.Rz)("lastTimeCallModal",Date.now()+320);var a={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:function(){}}};a.content=(0,x.jsx)(H.default,{confirm:h,lbl_p:"Eliminar Bloque",lbl_span:"una vez eliminado no podra ser recuperado"}),(0,b.OpenModal)(a)}},children:(0,x.jsx)(M,{name:m?"outline_delete":"open_package_file_outline",size:32,color:m?"#D73A4A":"var(--lighten-color)"})}),(0,x.jsx)("div",{className:"_dsplFlx information_detail a4W centerBx",children:(0,x.jsx)("div",{className:"lbl_dtls_sA xS",children:null===r||void 0===r?void 0:r.serviceAreaName})})]})}),(0,x.jsx)("div",{className:" sa_detail ",children:(0,x.jsx)("div",{className:"lbl_h_dtls ",style:{marginTop:8,textAlign:"left"},children:(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments ",children:[(0,x.jsx)(M,{name:"calendar",size:22,color:"var(--lighten-color)"}),(0,x.jsx)("span",{children:null===r||void 0===r?void 0:r.date})]}),(0,x.jsx)("div",{className:"flexSpace"}),"|",(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments ",children:[(0,x.jsx)(M,{name:"timer_outline2",size:22,color:"var(--lighten-color)"}),(0,x.jsx)("span",{children:null===r||void 0===r?void 0:r.hourly})]}),(0,x.jsx)("div",{className:"flexSpace"})]})})}),(0,x.jsx)("div",{className:" sa_detail ",children:(0,x.jsx)("div",{className:"lbl_h_dtls ",style:{marginTop:8,textAlign:"left"},children:(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments ",children:[(0,x.jsx)(M,{name:"clock-outline",size:22,color:"var(--lighten-color)"}),(0,x.jsxs)("span",{children:[null===r||void 0===r?void 0:r.hrs," hrs"]})]}),(0,x.jsx)("div",{className:"flexSpace"}),"|",(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments ",children:[(0,x.jsx)(M,{name:"money",size:22,color:"var(--lighten-color)"}),(0,x.jsxs)("span",{children:["$",(1*(null===r||void 0===r?void 0:r.pay)).toFixed(2)]})]}),(0,x.jsx)("div",{className:"flexSpace"})]})})})]})},L=a(6349),R=(0,o.Np)(),E=(0,o.YZ)(),W=(0,o.A5)(),O=((0,o.PU)(),function(e){var l,a,r,o,t,v,m,h=e.data,p=(e.sA,e.field),f=(e.value,e.cId),N=(e.confirm,(0,c.useState)(1)),_=(0,d.Z)(N,2)[1],g="addBlock_"+f,k=null===(l=(0,u.bh)("grabberAcc"))||void 0===l?void 0:l[f];(0,c.useEffect)((function(){}),[p,g]);var y=function(e,l){var a=(0,u.bh)(g)||{};a[e]=l,(0,u.Rz)(g,a),_((0,u.M5)())},w=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(l,a){var n,r,d,c,o,t,v,m,h,x,p,j;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,u.Ei)(),d=(0,u.bh)(g)||{},c=new Date(d.startDate),o=1*d.startHr.split(":")[0],t=1*d.startHr.split(":")[1]+60*o,v=1*d.hrs,m=c.setMinutes(t),h=new Date(m),x=60*v,p=h.setMinutes(h.getMinutes()+x),d.startTime=m,d.endTime=p,d.hourly="".concat(J(m)," - ").concat(J(p)),d.date="".concat(V(m)),d.timeStamp=r,d.createdDate=r,d.blockId=(0,u.M5)(),d.status="success",delete d.startDate,delete d.startHr,delete d.hourlyy,(j=(0,s.Z)({},null===(n=(0,u.bh)((0,u.hQ)()))||void 0===n?void 0:n.add_grb_flx)).params={flexId:f},j.form=d,A(j);case 25:case"end":return e.stop()}}),e)})));return function(l,a){return e.apply(this,arguments)}}(),A=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(l){var a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,u.I7)(l),e.next=3,a;case 3:(s=e.sent)&&!s.error&&((0,u.Rz)(g,null),(null===h||void 0===h?void 0:h.modalID)&&(0,b.CloseModal)({id:null===h||void 0===h?void 0:h.modalID}));case 5:case"end":return e.stop()}}),e)})));return function(l){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{style:{maxHeight:"80vh",minHeight:"60vh",width:"92vw",overflow:"auto",background:"var(--dark-700)",borderRadius:13,padding:"10px 19px"},children:[(0,x.jsx)("div",{className:"_dsplFlx ",children:(0,x.jsx)("p",{className:"form_title",children:"Add Block"})}),(0,x.jsxs)("div",{className:"_dsplFlx centerBx",style:{margin:"19px auto"},children:[(0,x.jsx)(W,{init:null===(a=(0,u.bh)(g))||void 0===a?void 0:a.serviceAreaId,lbl_empty:"Estaciones",list:function(){var e=[];return(0,u._2)(k.filters).map((function(l){var a={id:l,label:k.filters[l].name};k.filters[l].operative&&e.push(a)})),e}()||[],onSelect:function(e){return y("serviceAreaId",(l=e).id),y("serviceAreaName",l.label),void _((0,u.M5)());var l},background:"var(--dark-900)",color:"var(--light-200)",width:"80vw"}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:"_dsplFlx centerBx",children:[(0,x.jsx)("span",{className:"checklabel",style:{marginRight:8},children:"Exclusive"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(E,{initvalue:!(null===(r=(0,u.bh)(g))||void 0===r||!r.offerType),keyCode:89,updChange:function(e){return y("offerType",e)},color:"var(--primary-blue--backg-30)"})]}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"19px auto"},children:[(0,x.jsx)(R,{init:null===(o=(0,u.bh)(g))||void 0===o?void 0:o.hrs,label:"hrs",width:120,updChanges:function(e){return y("hrs",1*e)},type:"number"}),(0,x.jsx)(R,{init:null===(t=(0,u.bh)(g))||void 0===t?void 0:t.pay,label:"pay",width:120,updChanges:function(e){return y("pay",1*e)},type:"number"}),(0,x.jsx)("div",{style:{margin:"10px 10px 0 0"},children:(0,x.jsx)(L.Z,{init:null===(v=(0,u.bh)(g))||void 0===v?void 0:v.startDate,label:"Fecha",updDate:function(e){return y("startDate",e)}})}),(0,x.jsx)(R,{init:null===(m=(0,u.bh)(g))||void 0===m?void 0:m.startHr,label:"start Hour",width:120,updChanges:function(e){return y("startHr",e)}})]}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)(j,{label:"Actualizar",clickHandler:w})})]})]})});function J(e,l){var a=new Date(e),i=a.getMinutes(),s=a.getSeconds(),n=l?":".concat(s>9?s:"0".concat(s)):"";return"".concat(a.getHours(),":").concat(i>9?i:"0".concat(i)).concat(n)}function V(e){var l=new Date(e);return"".concat(u.Vy[l.getMonth()+1]," ").concat(l.getDate(),", ").concat(l.getFullYear())}var U=(0,o.YZ)(),G=(0,o.A5)(),Y=(0,o.PU)(),P=function(e){e.data,e.confirm,e.label,e.item;var l,a,o,j,f,N,_,g,k=(0,c.useState)(1),w=(0,d.Z)(k,2)[1],A=(0,c.useState)(1),F=(0,d.Z)(A,2),C=F[0],S=F[1],T=(0,h.Z)("firebaseObs"),I=(0,c.useState)(!1),H=(0,d.Z)(I,2),M=H[0],L=H[1];console.log(T);var R=null===(l=(0,t.TH)().search)||void 0===l||null===(a=l.split("?"))||void 0===a?void 0:a[1],E=(0,u.mB)(R),W=(null===(o=(0,u.bh)((0,u.nc)()))||void 0===o?void 0:o.isAdmin)&&M,J=W&&(0,u.bh)("user2Show")||(null===E||void 0===E?void 0:E.cId)||(null===(j=(0,u.bh)((0,u.nc)()))||void 0===j?void 0:j.grabberId);(0,c.useEffect)((function(){var e;null!==(e=(0,u.bh)((0,u.nc)()))&&void 0!==e&&e.isAdmin&&!(0,u.bh)("usersGbList")&&ee(),J&&(0,m.hW)(J)}),[J]);var V=function(e,l){K((0,r.Z)({},e,l)),w((0,u.M5)())},P=function(e){},X=null===(f=(0,u.bh)("grabberAcc"))||void 0===f?void 0:f[J],K=function(e){(0,m.K1)(J,e),w((0,u.M5)())},Q=null!==X&&void 0!==X&&X.filters?(0,u._2)(X.filters).sort():[],$=(0,u.bh)("blockWkList")?(0,u._2)((0,u.bh)("blockWkList")).sort():[],ee=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var l,a,n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,s.Z)({},null===(l=(0,u.bh)((0,u.hQ)()))||void 0===l?void 0:l.grb_actv_uss),n=(0,u.I7)(a),e.next=4,n;case 4:(r=e.sent)&&!r.error&&(0,u.Rz)("usersGbList",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=["dom","lun","mar","mie","jue","vie","sab"],l=[];return(0,u._2)(null===X||void 0===X?void 0:X.schedule).map((function(a){var i;null!==X&&void 0!==X&&null!==(i=X.schedule[a])&&void 0!==i&&i.active&&l.push(e[a])})),{activesDays:l.join(", "),hasAlert:l.length<7}},ae=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var l,a,n,r,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(2),(a=(0,s.Z)({},null===(l=(0,u.bh)((0,u.hQ)()))||void 0===l?void 0:l.scan_grb_flx)).params={flexId:J,":search0":"success"},n=(0,u.I7)(a),e.next=6,n;case 6:(r=e.sent)&&!r.error&&(d={},(0,u._2)(r).map((function(e){var l=r[e],a=(0,u.qt)(l.startTime),i=a.stWk+"_"+a.endWk;d[i]||(d[i]={blocks:{},total:0}),d[i].blocks[l.startTime]||(d[i].blocks[l.startTime]={}),d[i].blocks[l.startTime]=l,d[i].total+=1*l.pay})),(0,u.Rz)("blockWkList",d),w((0,u.M5)()));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){(null===X||void 0===X?void 0:X.puzzleNeedBeSolved)&&(null===X||void 0===X?void 0:X.puzzleUrl)&&window.open(null===X||void 0===X?void 0:X.puzzleUrl)},se=function(){(0,m.K1)(J,{running:!0,allowGrabbing:!0,puzzleNeedBeSolved:!1})};return(0,x.jsxs)("div",{style:{width:"100%"},children:[(0,x.jsxs)("div",{className:"ebEwoI",children:[(0,x.jsx)("div",{className:"jKZvHt ",children:(0,x.jsx)(v.OL,{className:"",to:"/",children:(0,x.jsx)("div",{className:" header_mobile ",children:(0,x.jsx)(Y,{name:"arrowBack",color:"#AAABC5",size:28})})})}),(0,x.jsxs)("div",{className:"_dsplFlx ",children:[W?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"_dsplFlx centerBx",children:(0,x.jsx)(G,{init:(0,u.bh)("user2Show"),lbl_empty:"Users",list:(0,u.bh)("usersGbList")||[],onSelect:function(e){return l=e.id,(0,u.Rz)("user2Show",l),(0,u.Rz)("blockWkList",null),void(1===C?w((0,u.M5)()):S(1));var l},background:"var(--dark-900)",color:"var(--light-200)",direction:"right",width:"290px"})})}):(0,x.jsx)("div",{className:"_dsplFlx centerBx",children:null===X||void 0===X?void 0:X.email}),null!==(N=(0,u.bh)((0,u.nc)()))&&void 0!==N&&N.isAdmin?(0,x.jsx)("div",{className:"_dsplFlx centerBx",style:{marginLeft:15},children:(0,x.jsx)(U,{initvalue:M,keyCode:89,updChange:L,color:"#30BEFF"})}):null]})]}),(0,x.jsx)("div",{className:"card_wrpp",style:{marginTop:90},children:(0,x.jsx)(p,{title:(0,x.jsx)("div",{className:"_dsplFlx  ",children:null!==X&&void 0!==X&&X.puzzleNeedBeSolved?(0,x.jsx)("div",{className:"lh-default indianred",style:{marginBottom:20},children:(0,x.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){var e={zIndex:480,props:{minHeight:"1vh",overlay:!0}};e.content=(0,x.jsx)(Z,{confirm:se,openUrl:ie}),(0,b.OpenModal)(e)},children:(0,x.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,x.jsx)(Y,{name:"puzzle-outline",color:"var(--lighten-color)",size:20}),"Necesita Resolver el Rompecabeza"]})})}):(0,x.jsx)("div",{className:"lh-default ".concat(null!==X&&void 0!==X&&X.isValidToken?"limegreen":"peachpuff"),style:{marginBottom:20},children:(0,x.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",children:(0,x.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,x.jsx)(Y,{name:"key",color:null!==X&&void 0!==X&&X.isValidToken?"#60EF40":"#F9D0C4",size:20}),null!==X&&void 0!==X&&X.isValidToken?"Llave activa":"Llave expirada"]})})})}),description:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"_dsplFlx information_detail ",style:{minWidth:320}}),(0,x.jsxs)("div",{className:"_dsplFlx information_detail ".concat(null!==X&&void 0!==X&&X.puzzleNeedBeSolved?"indianred hrm_themecolor ":"","  "),children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{style:{width:"20px"},children:(0,x.jsxs)("svg",{"aria-label":"currently running",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 16",className:null!==X&&void 0!==X&&X.running?"anim-rotate":"",xmlns:"http://www.w3.org/2000/svg",children:[(0,x.jsx)("path",{stroke:null!==X&&void 0!==X&&X.puzzleNeedBeSolved?"var(--lighten-color)":null!==X&&void 0!==X&&X.isValidToken?"#60EF40":"#F9D0C4",strokeWidth:"2",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z",opacity:".5"}),(0,x.jsx)("path",{fill:null!==X&&void 0!==X&&X.puzzleNeedBeSolved?"var(--lighten-color)":null!==X&&void 0!==X&&X.isValidToken?"#60EF40":"#F9D0C4",fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",clipRule:"evenodd"}),(0,x.jsx)("path",{fill:null!==X&&void 0!==X&&X.puzzleNeedBeSolved?"var(--lighten-color)":null!==X&&void 0!==X&&X.isValidToken?"#60EF40":"#F9D0C4",d:"M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"})]})})}),(0,x.jsx)("span",{className:"checklabel",children:"Activo"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(U,{initvalue:!(null===X||void 0===X||!X.running),keyCode:89,updChange:function(e){return V("running",e)},color:"var(--primary-blue--backg-30)"})]}),(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},children:[(0,x.jsx)("div",{children:(0,x.jsx)(Y,{name:"open_package_file_outline",color:"#AAABC5",size:20})}),(0,x.jsx)("span",{className:"checklabel",children:"Aceptar Bloques"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(U,{initvalue:!(null===X||void 0===X||!X.allowGrabbing),keyCode:89,updChange:function(e){return V("allowGrabbing",e)},color:"var(--primary-blue--backg-30)"})]}),(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},onClick:function(e,l){var a=null!==X&&void 0!==X&&X.schedule?(0,u._2)(X.schedule).sort():[],i={zIndex:480,props:{minHeight:"1vh",overlay:!0}};i.content=(0,x.jsx)(z,{confirm:P,sortedSch:a,schedule:null===X||void 0===X?void 0:X.schedule,updFb:K}),(0,b.OpenModal)(i)},children:[(0,x.jsx)("div",{children:(0,x.jsx)(Y,{name:"calendar",color:"#AAABC5",size:20})}),(0,x.jsx)("span",{className:"checklabel",children:"Horarios"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("span",{className:"checklabel",children:null===(_=le())||void 0===_?void 0:_.activesDays}),null!==(g=le())&&void 0!==g&&g.hasAlert?(0,x.jsx)("div",{style:{marginLeft:7},children:(0,x.jsx)(Y,{name:"alert",color:"#DBAB0A",size:20})}):null]}),(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",style:{margin:"13px 0"},onClick:function(e,l){var a={zIndex:480,props:{minHeight:"1vh",overlay:!0}};a.content=(0,x.jsx)(B,{value:null===X||void 0===X?void 0:X.graceTime,field:"graceTime",confirm:K}),(0,b.OpenModal)(a)},children:[(0,x.jsx)("div",{children:(0,x.jsx)(Y,{name:"restore_clock",color:"#AAABC5",size:20})}),(0,x.jsx)("span",{className:"checklabel",children:"Tiempo de espera"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("span",{className:"checklabel",children:[null===X||void 0===X?void 0:X.graceTime,"min"]})]})]})})}),W?(0,x.jsx)("div",{className:"card_wrpp",style:{marginTop:30},children:(0,x.jsx)(p,{title:(0,x.jsx)("div",{className:"lh-default darkcyan_green",style:{marginBottom:20},children:(0,x.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",children:(0,x.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,x.jsx)(Y,{name:"profile",color:"#03AA8E",size:20}),"AdminDash"]})})}),description:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,x.jsx)("div",{children:(0,x.jsx)(Y,{name:"key",color:"#AAABC5",size:20})}),(0,x.jsx)("span",{className:"checklabel",children:J}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,x.jsx)("div",{children:(0,x.jsx)(Y,{name:"email",color:"#AAABC5",size:20})}),(0,x.jsx)("span",{className:"checklabel",children:null===X||void 0===X?void 0:X.email}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{style:{width:"20px"},children:(0,x.jsxs)("svg",{"aria-label":"currently running",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 16",className:"anim-rotate",xmlns:"http://www.w3.org/2000/svg",children:[(0,x.jsx)("path",{stroke:"#DBAB0A",strokeWidth:"2",d:"M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z",opacity:".5"}),(0,x.jsx)("path",{fill:"#DBAB0A",fillRule:"evenodd",d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",clipRule:"evenodd"}),(0,x.jsx)("path",{fill:"#DBAB0A",d:"M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"})]})})}),(0,x.jsx)("span",{className:"checklabel",children:"Is in Roulette"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(U,{initvalue:!(null===X||void 0===X||!X.turtleMode),keyCode:89,updChange:function(e){return V("turtleMode",e)},color:"var(--primary-blue--backg-30)"})]}),(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,x.jsx)("div",{children:(0,x.jsx)(Y,{name:"incognito",color:"#AAABC5",size:20})}),(0,x.jsx)("span",{className:"checklabel",children:"Observer"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(U,{initvalue:!(null===X||void 0===X||!X.onlyObserver),keyCode:89,updChange:function(e){return V("onlyObserver",e)},color:"var(--primary-blue--backg-30)"})]}),(0,x.jsxs)("div",{className:"_dsplFlx information_detail ",children:[(0,x.jsx)("div",{children:(0,x.jsx)(Y,{name:"lock-outline",color:"#AAABC5",size:20})}),(0,x.jsx)("span",{className:"checklabel",children:"On Hold"}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)(U,{initvalue:!(null===X||void 0===X||!X.onHold),keyCode:89,updChange:function(e){return V("onHold",e)},color:"var(--primary-blue--backg-30)"})]}),(0,x.jsx)("div",{className:"lh-default hrm_themecolor darkcyan_green",style:{marginTop:20},children:(0,x.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){var e={zIndex:480,props:{minHeight:"1vh",overlay:!0}};e.content=(0,x.jsx)(O,{confirm:se,cId:J}),(0,b.OpenModal)(e)},children:(0,x.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,x.jsx)(Y,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Add Block"]})})})]})})}):null,(0,x.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{padding:9},children:[(0,x.jsx)("div",{className:"lh-default blue_30",style:{margin:"20px 0"},children:(0,x.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:function(){return S(1)},children:(0,x.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,x.jsx)(Y,{name:"market",color:"#30BEFF",size:20}),"Estaciones"]})})}),(0,x.jsx)("div",{className:"lh-default hrm_themecolor darkcyan_green",style:{marginTop:20},children:(0,x.jsx)("div",{className:"IssueLabel hrm_labelColor hrm_label_14lh",onClick:ae,children:(0,x.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,x.jsx)(Y,{name:"open_package_file_outline",color:"var(--lighten-color)",size:20}),"Bloques"]})})})]}),(0,x.jsx)(q,{viewId:1,activeView:C,children:Q&&Q.map((function(e){return(0,x.jsx)(y,{adminTools:M,icon:"market",data:X.filters[e],sA:e,updSArea:function(l){return function(e,l){var a=null===X||void 0===X?void 0:X.filters;a[l]=Object.assign({},a[l],e),(0,m.K1)(J,{filters:a})}(l,e)}},e)}))}),(0,x.jsx)(q,{viewId:2,activeView:C,children:(0,u.bh)("blockWkList")&&$.reverse().map((function(e){var l,a,i,s,n=1*e.split("_")[0],r=1*e.split("_")[1],d=null===(l=(0,u.bh)("blockWkList"))||void 0===l||null===(a=l[e])||void 0===a?void 0:a.blocks;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"_dsplFlx keyToken ",children:[(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsx)("div",{className:"lh-default ",children:(0,u.sG)(n)+" - "+(0,u.sG)(r)}),(0,x.jsx)("div",{className:"flexSpace"}),(0,x.jsxs)("div",{className:" payments hrm_themecolor darkcyan_green centerBx",children:[(0,x.jsx)(Y,{name:"money",size:22,color:"var(--lighten-color)"}),(0,x.jsxs)("span",{className:"total_week",children:["$",(null===(i=(0,u.bh)("blockWkList"))||void 0===i||null===(s=i[e])||void 0===s?void 0:s.total).toFixed(2)]})]}),(0,x.jsx)("div",{className:"flexSpace"})]}),(0,u._2)(d).reverse().map((function(l){return(0,x.jsx)(D,{adminTools:M,icon:"market",data:d[l],cId:J,refresh:ae},e+"_"+l)}))]},e)}))}),(0,x.jsx)("div",{className:"_dsplFlx ",style:{padding:9,marginBottom:149}})]})},q=function(e){var l=e.viewId,a=e.activeView,i=e.children;return(0,x.jsx)("div",{className:"opacityView",style:{opacity:l===a?1:0,marginTop:29},children:l===a?i:null})}},5945:function(e,l,a){a.d(l,{Fv:function(){return x},K1:function(){return h},hW:function(){return u}});var i=a(4942),s=a(4702),n=a(6321),r=a(2350);var d=JSON.parse((0,r.yX)("eyJhcGlLZXkiOiJBSXphU3lDeDBFcnFmbENVdXZpRlRqald4SEFITWpvQjBsd2xGX00iLCJhdXRoRG9tYWluIjoiaHJtLTExMjguZmlyZWJhc2VhcHAuY29tIiwiZGF0YWJhc2VVUkwiOiJodHRwczovL2hybS0xMTI4LmZpcmViYXNlaW8uY29tIiwicHJvamVjdElkIjoiaHJtLTExMjgiLCJzdG9yYWdlQnVja2V0IjoiaHJtLTExMjguYXBwc3BvdC5jb20iLCJtZXNzYWdpbmdTZW5kZXJJZCI6IjEwNDkyNTA1ODUyNDUiLCJhcHBJZCI6IjE6MTA0OTI1MDU4NTI0NTp3ZWI6OGI0ZTA3NGI5Yzg4MDA1ZiJ9")),c={},o=(0,s.ZF)(d),t=(0,n.ad)(o),v=null,u=function(e){v&&v(),m(e)},m=function(e){var l=(0,n.hJ)(t,"hhh",e,"params");return v=(0,n.cf)(l,(function(e){e.docChanges().forEach((function(e){var l=e.doc.id,a=e.doc.data();c[l]=a,(0,r.Rz)("grabberAcc",c),(0,r.wt)("firebaseObs"),setTimeout((function(){(0,r.wt)("firebaseObs")}),250)}))})),null},h=function(e,l){var a=(0,n.JU)(t,"hhh",e,"params",e);(0,n.pl)(a,l,{merge:!0})},x=function(e,l){var a=(0,n.JU)(t,"hhh",e,"params",e);(0,n.r7)(a,(0,i.Z)({},l,(0,n.AK)()))}},4629:function(){}}]);
//# sourceMappingURL=5101.944e9861.chunk.js.map
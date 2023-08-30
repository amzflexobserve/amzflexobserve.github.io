"use strict";(self.webpackChunkgrabber_hrm=self.webpackChunkgrabber_hrm||[]).push([[971],{3649:function(e,t,n){var i=n(1413),o=n(5671),r=n(3144),a=n(136),u=n(9388),s=n(2791),c=n(184);t.Z=function(e){var t;return t=function(t){(0,a.Z)(s,t);var n=(0,u.Z)(s);function s(){var e;(0,o.Z)(this,s);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={Component:s.Component},e}return(0,r.Z)(s,[{key:"componentWillMount",value:function(){var t=this;this.state.Component||e().then((function(e){s.Component=e,t.setState({Component:e})}))}},{key:"render",value:function(){var e=this.state.Component;return e?(0,c.jsx)(e,(0,i.Z)({},this.props)):null}}]),s}(s.Component),t.Component=null,t}},8566:function(e,t,n){var i=n(5671),o=n(3144),r=n(7326),a=n(136),u=n(9388),s=n(2791),c=n(1694),m=n.n(c),l=n(184),h=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var o;return(0,i.Z)(this,n),(o=t.call(this,e)).state={pressed:!1},o.onMouseUp=o.onMouseUp.bind((0,r.Z)(o)),o.onMouseDown=o.onMouseDown.bind((0,r.Z)(o)),o.onMouseEnter=o.onMouseEnter.bind((0,r.Z)(o)),o.onMouseLeave=o.onMouseLeave.bind((0,r.Z)(o)),o}return(0,o.Z)(n,[{key:"onMouseDown",value:function(){this.setState({pressed:!0})}},{key:"onMouseUp",value:function(){this.setState({pressed:!1})}},{key:"onMouseEnter",value:function(){var e=this.props.onMouseEnter;e&&e()}},{key:"onMouseLeave",value:function(){this.onMouseUp();var e=this.props.onMouseLeave;e&&e()}},{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.children,i=e.className,o=this.state.pressed,r=m()("react_times_button",o&&"pressDown",i);return(0,l.jsx)("div",{onClick:t,className:r,onMouseUp:this.onMouseUp,onMouseOut:this.onMouseUp,onMouseDown:this.onMouseDown,onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,children:(0,l.jsx)("div",{className:"wrapper",children:n})})}}]),n}(s.Component);h.defaultProps={text:"button",onClick:Function.prototype,children:null,className:""},t.Z=h},8157:function(e,t,n){n.d(t,{Z:function(){return N}});var i=n(9439),o=n(5671),r=n(3144),a=n(7326),u=n(136),s=n(9388),c=n(2791),m=n(1694),l=n.n(m),h=n(4164),d=n(184),f={children:(0,d.jsx)("span",{}),onOutsideClick:Function.prototype},p=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).hasAction=!1,i.onOutsideClick=i.onOutsideClick.bind((0,a.Z)(i)),i}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.bindActions()}},{key:"componentDidUpdate",value:function(){this.bindActions()}},{key:"componentWillUnmount",value:function(){this.unbindActions()}},{key:"bindActions",value:function(){if(this.props.closeOnOutsideClick){if(this.hasAction)return;document.addEventListener?document.addEventListener("mousedown",this.onOutsideClick,!0):document.attachEvent("onmousedown",this.onOutsideClick),this.hasAction=!0}}},{key:"unbindActions",value:function(){this.hasAction&&(this.props.closeOnOutsideClick&&(document.removeEventListener?document.removeEventListener("mousedown",this.onOutsideClick,!0):document.detachEvent("onmousedown",this.onOutsideClick),this.hasAction=!1))}},{key:"onOutsideClick",value:function(e){var t=e||window.event,n="undefined"!==typeof t.which?t.which:t.button;if(!h.findDOMNode(this.childNode).contains(t.target)&&1===n){var i=this.props.onOutsideClick;i&&i(t)}}},{key:"render",value:function(){var e=this,t=this.props.focused?"outside_container active":"outside_container";return(0,d.jsx)("div",{ref:function(t){return e.childNode=t},className:t,children:this.props.children})}}]),n}(c.PureComponent);p.defaultProps=f;var v=p,g=n(8566),M=n(5477),C={en:{confirm:"confirm",cancel:"cancel",close:"close",timezonePickerTitle:"Pick a timezone",timezonePickerLabel:"Closest city or timezone",am:"AM",pm:"PM"},"zh-cn":{confirm:"\u786e\u8ba4",cancel:"\u53d6\u6d88",close:"\u5173\u95ed",timezonePickerTitle:"\u9009\u62e9\u65f6\u533a",timezonePickerLabel:"\u6700\u8fd1\u7684\u57ce\u5e02\u6216\u65f6\u533a",am:"\u4e0a\u5348",pm:"\u4e0b\u5348"},"zh-tw":{confirm:"\u78ba\u8a8d",cancel:"\u53d6\u6d88",close:"\u95dc\u9589",timezonePickerTitle:"\u9078\u64c7\u6642\u5340",timezonePickerLabel:"\u6700\u8fd1\u7684\u57ce\u5e02\u6216\u6642\u5340",am:"\u4e0a\u5348",pm:"\u4e0b\u5348"},fr:{confirm:"Confirmer",cancel:"Annul\xe9",close:"Arr\xeater",timezonePickerTitle:"Choisissez un timezone",timezonePickerLabel:"Ville la plus proche ou timezone",am:"AM",pm:"PM"},ja:{confirm:"\u78ba\u8a8d\u3057\u307e\u3059",cancel:"\u30ad\u30e3\u30f3\u30bb\u30eb",close:"\u30af\u30ed\u30fc\u30ba",timezonePickerTitle:"\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3092\u9078\u629e\u3059\u308b",timezonePickerLabel:"\u6700\u3082\u8fd1\u3044\u90fd\u5e02\u307e\u305f\u306fTimezone",am:"AM",pm:"PM"}},k=function(){return C[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en"]},b=n(5130),z=n(7294),y=n(3649),Z={material:(0,y.Z)((function(){return Promise.all([n.e(642),n.e(495)]).then(n.bind(n,5495)).then((function(e){return e.default}))})),classic:(0,y.Z)((function(){return n.e(446).then(n.bind(n,5446)).then((function(e){return e.default}))}))},w=M.Z.time({useTz:!1});w.current=M.Z.current();var T={autoMode:!0,autoClose:!0,colorPalette:"light",draggable:!0,focused:!1,language:"en",meridiem:w.meridiem,onFocusChange:Function.prototype,onTimeChange:Function.prototype,onTimezoneChange:Function.prototype,placeholder:"",showTimezone:!1,theme:"material",time:"",timeMode:w.mode,trigger:null,withoutIcon:!1,minuteStep:5,limitDrag:!1,timeFormat:"",timeFormatter:null,useTz:!0,closeOnOutsideClick:!0,timeConfig:{step:30,unit:"minutes"},disabled:!1,focusDropdownOnTime:!0},A=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;(0,o.Z)(this,n),i=t.call(this,e);var r=e.focused,u=e.timezone,s=e.onTimezoneChange,c=i.timeData(!1),m=M.Z.tzForName(c.timezone);return i.state={focused:r,timezoneData:m,timeChanged:!1},i.onBlur=i.onBlur.bind((0,a.Z)(i)),i.onFocus=i.onFocus.bind((0,a.Z)(i)),i.timeData=i.timeData.bind((0,a.Z)(i)),i.handleTimeChange=i.handleTimeChange.bind((0,a.Z)(i)),i.handleHourChange=i.handleHourChange.bind((0,a.Z)(i)),i.handleMinuteChange=i.handleMinuteChange.bind((0,a.Z)(i)),i.handleMeridiemChange=i.handleMeridiemChange.bind((0,a.Z)(i)),i.handleHourAndMinuteChange=i.handleHourAndMinuteChange.bind((0,a.Z)(i)),u||s(m),i}return(0,r.Z)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.focused;t!==this.props.focused&&this.setState({focused:t})}},{key:"onFocus",value:function(){var e=this.state.focused;e||this.onFocusChange(!e)}},{key:"onBlur",value:function(){var e=this.state.focused;e&&this.onFocusChange(!e)}},{key:"onFocusChange",value:function(e){if(!this.props.disabled){this.setState({focused:e});var t=this.props.onFocusChange;t&&t(e)}}},{key:"timeData",value:function(e){var t=this.props,n=t.time,i=t.useTz,o=t.timeMode,r=t.timezone,a=t.meridiem,u=M.Z.time({time:n,meridiem:a,timeMode:o,tz:r,useTz:!n&&!e&&i});return u}},{key:"languageData",get:function(){var e=this.props,t=e.language,n=e.phrases,i=void 0===n?{}:n;return Object.assign({},k(t),i)}},{key:"hourAndMinute",get:function(){var e=this.props.timeMode,t=this.timeData(this.state.timeChanged);return[12===parseInt(e,10)?12===parseInt(t.hour12,10)?"00":t.hour12:24===parseInt(t.hour24,10)?"00":t.hour24,t.minute]}},{key:"formattedTime",get:function(){var e=this.props,t=e.timeMode,n=e.timeFormat,o=e.timeFormatter,r=(0,i.Z)(this.hourAndMinute,2),a=r[0],u=r[1],s=M.Z.validateTimeMode(t),c="";return o&&z.is.func(o)?c=o({hour:a,minute:u,meridiem:this.meridiem}):n&&z.is.string(n)?(/HH?/.test(c=n)||/MM?/.test(c)?12===s&&console.warn("It seems you are using 12 hours mode with 24 hours time format. Please check your timeMode and timeFormat props"):(/hh?/.test(c)||/mm?/.test(c))&&24===s&&console.warn("It seems you are using 24 hours mode with 12 hours time format. Please check your timeMode and timeFormat props"),c=(c=(c=(c=c.replace(/(HH|hh)/g,a)).replace(/(MM|mm)/g,u)).replace(/(H|h)/g,Number(a))).replace(/(M|m)/g,Number(u))):c=12===s?"".concat(a," : ").concat(u," ").concat(this.meridiem):"".concat(a," : ").concat(u),c}},{key:"meridiem",get:function(){var e=this.props.meridiem,t=this.timeData(this.state.timeChanged),n=this.languageData,i=e||t.meridiem;return i&&i.match(/^am|pm/i)?n[i.toLowerCase()]:i}},{key:"onTimeChanged",value:function(e){this.setState({timeChanged:e})}},{key:"handleHourChange",value:function(e){var t=M.Z.validate(e),n=this.hourAndMinute[1];this.handleTimeChange({hour:t,minute:n,meridiem:this.meridiem})}},{key:"handleMinuteChange",value:function(e){var t=M.Z.validate(e),n=this.hourAndMinute[0];this.handleTimeChange({hour:n,minute:t,meridiem:this.meridiem})}},{key:"handleMeridiemChange",value:function(e){var t=(0,i.Z)(this.hourAndMinute,2),n=t[0],o=t[1];this.handleTimeChange({hour:n,minute:o,meridiem:e})}},{key:"handleTimeChange",value:function(e){var t=this.props.onTimeChange;t&&t(e),this.onTimeChanged(!0)}},{key:"handleHourAndMinuteChange",value:function(e){this.onTimeChanged(!0);var t=this.props,n=t.onTimeChange;return t.autoClose&&this.onBlur(),n&&n(e)}},{key:"renderDialPlate",value:function(){var e=this.props,t=e.theme,n=e.disabled,o=e.timeMode,r=e.autoMode,a=e.autoClose,u=e.draggable,s=e.language,c=e.limitDrag,m=e.minuteStep,l=e.timeConfig,h=e.colorPalette,f=e.showTimezone,p=e.onTimezoneChange,v=e.timezoneIsEditable,g=e.focusDropdownOnTime;if(n)return null;var M=Z["material"===t?t:"classic"],C=this.state.timezoneData,k=(0,i.Z)(this.hourAndMinute,2),b=k[0],z=k[1];return(0,d.jsx)(M,{hour:b,minute:z,autoMode:r,autoClose:a,language:s,draggable:u,limitDrag:c,timezone:C,meridiem:this.meridiem,timeConfig:l,showTimezone:f,phrases:this.languageData,colorPalette:h,clearFocus:this.onBlur,timeMode:parseInt(o,10),onTimezoneChange:p,minuteStep:parseInt(m,10),timezoneIsEditable:v,handleHourChange:this.handleHourChange,handleTimeChange:this.handleTimeChange,handleMinuteChange:this.handleMinuteChange,handleMeridiemChange:this.handleMeridiemChange,focusDropdownOnTime:g})}},{key:"render",value:function(){var e=this.props,t=e.trigger,n=e.disabled,i=e.placeholder,o=e.withoutIcon,r=e.colorPalette,a=e.closeOnOutsideClick,u=this.state.focused,s=this.formattedTime,c=l()("time_picker_preview",u&&"active",n&&"disabled"),m=l()("time_picker_container","dark"===r&&"dark"),h=l()("preview_container",o&&"without_icon");return(0,d.jsxs)("div",{className:m,children:[t||(0,d.jsx)(g.Z,{onClick:this.onFocus,className:c,children:(0,d.jsxs)("div",{className:h,children:[o?"":b.Z.time,i||s]})}),(0,d.jsx)(v,{focused:u,onOutsideClick:this.onBlur,closeOnOutsideClick:!n&&a,children:this.renderDialPlate()})]})}}]),n}(c.PureComponent);A.defaultProps=T;var N=A},7294:function(e,t,n){n.d(t,{YM:function(){return a},Z$:function(){return u},is:function(){return o}});var i=function(e,t){return Object.prototype.toString.call(e)===t},o={object:function(e){return i(e,"[object Object]")},array:function(e){return Array.isArray(e)},func:function(e){return i(e,"[object Function]")},string:function(e){return i(e,"[object String]")},undefined:function(e){return"undefined"===typeof e}},r=function(e){return o.string(e)||o.array(e)},a=function(e){return r(e)?e[0]:null},u=function(e){return r(e)?e[e.length-1]:null}},5130:function(e,t,n){n(2791);var i=n(184),o=(0,i.jsx)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",children:(0,i.jsx)("path",{d:"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zM25 14h-3v12l10.49 6.3L34 29.84l-9-5.34z"})}),r=(0,i.jsx)("svg",{width:"1792",height:"1792",viewBox:"0 0 1792 1792",children:(0,i.jsx)("path",{d:"M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"})});t.Z={time:o,chevronLeft:r}},5477:function(e,t,n){var i=n(9439),o=n(3528),r=n.n(o),a=n(7294);r().tz.load({zones:[],links:[],version:"latest"});var u=function(){var e,t=void 0!==n.g.navigator&&n.g.navigator.userAgent.match(/Mobi/),i=void 0!==n.g.Intl;if(t&&i){var o=n.g.Intl;n.g.Intl=void 0,e=r().tz.guess(),n.g.Intl=o}else e=r().tz.guess();if(!e||"UTC"===e)return C("Etc/Greenwich");try{return C(e)}catch(a){return console.error(a),C("Etc/Greenwich")}},s=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.tz,o=n.time,s=n.timeMode,c=n.useTz,m=void 0===c||c,l=n.meridiem,p=d(void 0===l?null:l),v=p&&!s?12:s||24,g=i||u().zoneName,M=f(v),C=h(o,p),k="hh:mmA",b="HH:mmA",z=12===M?k:b,y=r()("1970-01-01 ".concat(C),"YYYY-MM-DD ".concat(z),"en");return o||!m?(e=(C?y.format(b):r()().format(b)).split(/:/),t=(C?y.format(k):r()().format(k)).split(/:/)):(e=(C?y.tz(g).format(b):r()().tz(g).format(b)).split(/:/),t=(C?y.tz(g).format(k):r()().tz(g).format(k)).split(/:/)),{timezone:g,mode:M,hour24:(0,a.YM)(e),minute:(0,a.Z$)(e).slice(0,2),hour12:(0,a.YM)(t).replace(/^0/,""),meridiem:12===M?(0,a.Z$)(t).slice(2):null}},c=function(){var e=s();return"".concat(e.hour24,":").concat(e.minute)},m=function(e){return isNaN(parseInt(e,10))?0:parseInt(e,10)},l=function(e){var t=e;return a.is.undefined(t)&&(t="00"),isNaN(parseInt(t,10))&&(t="00"),parseInt(t,10)<10&&(t="0".concat(parseInt(t,10))),"".concat(t)},h=function(e,t){if(a.is.string(e)){var n=e&&e.indexOf(":").length>=0?e.split(/:/).map((function(e){return l(e)})).join(":"):e,i=parseInt((0,a.YM)(n.split(/:/)),10);return n=n&&t&&(i>0&&i<=12)?"".concat(n," ").concat(t):n}return e},d=function(e){return a.is.string(e)?e&&e.match(/am|pm/i)?e.toLowerCase():null:e},f=function(e){var t=parseInt(e,10);return isNaN(t)||24!==t&&12!==t?24:t},p=function(){var e=["Antarctica","Arctic","Chile"],t=["ACT","East","Knox_IN","LHI","North","NSW","South","West"];return r().tz.names().filter((function(e){return e.indexOf("/")>=0})).filter((function(t){return!e.indexOf(t.split("/")[0])>=0})).filter((function(e){return!t.indexOf(e.split("/").slice(-1)[0])>=0}))}(),v=p.map((function(e){return["Canada","Mexico","US"].indexOf(e.split("/")[0])>=0?e:e.split("/").slice(-1)[0]})).map((function(e){return e.replace(/_/g," ")})),g=v.map((function(e){var t={},n=p[v.indexOf(e)];return t.city=e,t.zoneName=n,t.zoneAbbr=r()().tz(n).zoneAbbr(),t})),M=function(e){var t=e.split("/");return{country:t[0].toLowerCase(),city:t.slice(-1)[0].toLowerCase()}},C=function(e){var t=g.filter((function(t){return t.zoneName===e}));if(!t.length&&/\//.test(e)&&(t=g.filter((function(t){return t.zoneAbbr===e}))),t.length||(t=g.filter((function(t){return function(e,t){var n=M(e),i=M(t);return n.country===i.country&&n.city===i.city}(t.zoneName,e)}))),!t.length)throw new Error("Can not find target timezone for ".concat(e));return(0,a.YM)(t)},k=function(e){if(!e)return arguments.length>1&&void 0!==arguments[1]?arguments[1]:"00:00";var t="".concat(e).split(/[:|\s]/),n=(0,i.Z)(t,3),o=n[0],r=n[1],a=n[2];return a&&"pm"===a.toLowerCase()&&(a="PM"),a&&"am"===a.toLowerCase()&&(a="AM"),a&&"AM"!==a&&"PM"!==a&&(a="AM"),o&&!isNaN(o)||(o="0"),!a&&Number(o>24)&&(o=Number(o)-24),a&&Number(o>12)&&(o=Number(o)-12),(!r||isNaN(r)||Number(r)>=60)&&(r="0"),Number(o)<10&&(o="0".concat(Number(o))),Number(r)<10&&(r="0".concat(Number(r))),a?"".concat(o,":").concat(r," ").concat(a):"".concat(o,":").concat(r)},b=function(e){return e.replace(/\s[P|A]M$/,"")},z=function(e,t){var n=r()(),i=n.format("YYYY-MM-DD"),o=n.add(1,"day").format("YYYY-MM-DD"),a=k(e,"00:00"),u=k(t,"23:30"),s="".concat(i," ").concat(b(a)),c=b(u),m=r()("".concat(i," ").concat(c))<=r()(s)?"".concat(o," ").concat(c):"".concat(i," ").concat(c);return/PM$/.test(a)&&(s=r()(s).add(12,"hours").format("YYYY-MM-DD HH:mm")),/PM$/.test(u)&&(m=r()(m).add(12,"hours").format("YYYY-MM-DD HH:mm")),{start:s,end:m}};t.Z={tzMaps:g,guessUserTz:u,hourFormatter:k,getStartAndEnd:z,get12ModeTimes:function(e){for(var t=e.from,n=e.to,i=e.step,o=void 0===i?30:i,a=e.unit,u=void 0===a?"minutes":a,s=z(t,n),c=s.start,m=s.end,l=[],h=r()(c);h<=r()(m);){var d=Number(h.format("HH"));l.push("".concat(h.format("hh:mm")," ").concat(d>=12?"PM":"AM")),h=h.add(o,u)}return l},get24ModeTimes:function(e){for(var t=e.from,n=e.to,i=e.step,o=void 0===i?30:i,a=e.unit,u=void 0===a?"minutes":a,s=z(t,n),c=s.start,m=s.end,l=[],h=r()(c);h<=r()(m);)l.push(h.format("HH:mm")),h=h.add(o,u);return l},withoutMeridiem:b,time:s,current:c,tzForCity:function(e){var t=e.toLowerCase(),n=g.filter((function(e){return e.city.toLowerCase()===t}));return(0,a.YM)(n)},tzForName:C,validate:l,validateInt:m,validateMeridiem:function(e,t){var n=e||c(),i=parseInt(t,10),o=n.split(/:/)[0];return o=m(o),12===i?o>12?"PM":"AM":null},validateTimeMode:f}},6646:function(){},3570:function(){},5289:function(){},5194:function(){},6648:function(){}}]);
//# sourceMappingURL=971.704e448c.chunk.js.map
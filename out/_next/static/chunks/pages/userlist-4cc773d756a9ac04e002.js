(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{4142:function(e,i,t){"use strict";t.r(i);var n=t(5893),s=(t(7294),t(4558));i.default=function(e){var i=e.about;return(0,n.jsxs)(s.default,{children:[(0,n.jsx)("a",{href:"/",children:(0,n.jsx)(s.LogoIbav,{src:"../assets/radicaisbco.png"})}),(0,n.jsxs)(s.DivBtn,{children:[(0,n.jsx)(s.BtnLink,{href:"/about.html",children:"Sobre a conven\xe7\xe3o Radicais Livres"}),(0,n.jsx)(s.BtnLink,{href:"/userlist.html",children:"Lista de inscritos"}),1==i&&(0,n.jsx)(s.BtnSign,{onClick:function(){return window.location.href="/"},children:"Inscreva-se"})]})]})}},4558:function(e,i,t){"use strict";t.r(i),t.d(i,{LogoIbav:function(){return r},BtnLink:function(){return a},DivBtn:function(){return o},BtnSign:function(){return d}});var n=t(8804),s=n.ZP.header.withConfig({displayName:"style__Container",componentId:"sc-1nwgdst-0"})(["height:125px;width:100%;display:flex;justify-content:space-between;align-items:center;padding:0px 6%;@media (max-width :800px){height:auto;display:flex;flex-direction:column;padding:0px 69px;}"]),r=n.ZP.img.withConfig({displayName:"style__LogoIbav",componentId:"sc-1nwgdst-1"})(["height:auto;width:auto;margin-top:40PX;cursor:pointer;@media(max-width:800px){width:auto;margin-top:-20px;}"]),a=n.ZP.a.withConfig({displayName:"style__BtnLink",componentId:"sc-1nwgdst-2"})(["font-size:16px;color:#FFF;background:none;border:none;text-transform:uppercase;font-weight:600;cursor:pointer;margin:0px 30px;@media(max-width:800px){margin:10px 0;font-size:16px;text-decoration:underline;text-align:center;margin-bottom:20px;}"]),o=n.ZP.div.withConfig({displayName:"style__DivBtn",componentId:"sc-1nwgdst-3"})(["@media(max-width:800px){display:flex;flex-direction:column;margin-bottom:20px;}"]),d=n.ZP.button.withConfig({displayName:"style__BtnSign",componentId:"sc-1nwgdst-4"})(["font-size:16px;color:white;border:none;background:#4c1568;font-weight:bold;text-transform:uppercase;padding:12px 12px;margin-top:10px;cursor:pointer;@media(max-width:800px){margin-bottom:10px;font-size:18px;}"]);i.default=s},550:function(e,i,t){"use strict";t.r(i);var n=t(5893),s=t(7294),r=t(9669),a=t.n(r),o=t(2148),d=t(4142);i.default=function(e){var i=(0,s.useState)(!0),t=i[0],r=i[1],c=(0,s.useState)([]),l=c[0],p=c[1],x=(0,s.useState)(),u=x[0],m=x[1],f=(0,s.useState)([]),h=f[0],g=f[1],b=(0,s.useState)([]),y=b[0],j=b[1];(0,s.useEffect)((function(){a().get("https://conferencia-radicais-default-rtdb.firebaseio.com/inscritos.json").then((function(e){e.data&&(p(Object.entries(e.data)),r(!1))}))}),[]);var w=encodeURI("https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc&description=Conven\xe7\xe3o Radicais Livres 2022");(0,s.useEffect)((function(){a().get(w,{headers:{Authorization:"Bearer APP_USR-1739479935263753-060921-ebd0e354a27881d9c2444a96b0bdbb80-127832490"}}).then((function(e){m(e.data.results)}))}),[]),(0,s.useEffect)((function(){var e=u&&u.map((function(e){return"approved"===e.status?e.payer.email.toLowerCase():""})),i=e&&e.filter((function(e){return""!==e})),t=u&&u.map((function(e){return e.payer.email}));g(i),j(t)}),[u]);l.map((function(e){return e[1].name}));var v=l.filter((function(e){return"ok"===e[1].status})),L=l.filter((function(e){return"lista-espera"===e[1].status}));null===v||void 0===v||v.sort((function(e,i){return e[1].name<i[1].name?-1:1}));var _=v.filter((function(e){return!this[JSON.stringify(e[1].tel)]&&(this[JSON.stringify(e[1].tel)]=!0)}),Object.create(null));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.default,{about:!0}),(0,n.jsx)(o.default,{children:t?(0,n.jsx)(o.Loading,{children:(0,n.jsx)("img",{src:"../assets/loading-gif.gif"})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.ModalSignUp,{children:[(0,n.jsxs)(o.DivTextInformation,{children:[(0,n.jsxs)(o.TextList,{children:["Lista de inscritos ( ",h&&h.length," )"]}),(0,n.jsx)(o.TextInformation,{children:"Para pagamentos com boleto, espere 3 dias para a confirma\xe7\xe3o"})]}),(0,n.jsxs)(o.DivList,{children:[(0,n.jsxs)(o.DivName,{children:[(0,n.jsx)(o.Describe,{children:"Nome"}),(0,n.jsx)(o.Describe,{children:"Telefone"}),(0,n.jsx)(o.Describe,{display:"none",children:"Cargo"}),(0,n.jsx)(o.Describe,{display:"none",children:"Pastor"}),(0,n.jsx)(o.Describe,{display:"none",children:"Igreja"}),(0,n.jsx)(o.Describe,{display:"none",children:"Cidade"}),(0,n.jsx)(o.Describe,{children:"Pagamento"})]}),_.map((function(e){return(0,n.jsx)(n.Fragment,{children:y&&y.includes(e[1].email)&&(0,n.jsxs)(o.List,{children:[(0,n.jsxs)(o.ListDescribe,{children:[e[1].name," ",e[1].surname]}),(0,n.jsx)(o.ListDescribe,{children:e[1].tel}),(0,n.jsx)(o.ListDescribe,{display:"none",children:e[1].office}),(0,n.jsx)(o.ListDescribe,{display:"none",children:e[1].sheperd}),(0,n.jsx)(o.ListDescribe,{display:"none",children:e[1].church}),(0,n.jsx)(o.ListDescribe,{display:"none",children:e[1].city}),h&&h.includes(e[1].email.toLowerCase())?(0,n.jsx)(o.ListDescribe,{style:{color:"#15F904",fontWeight:"bold"},children:"Pagamento Aprovado"}):(0,n.jsx)(o.ListDescribe,{style:{color:"#FF69B4"},children:"Aguardando Aprova\xe7\xe3o"})]})})}))]})]}),L.length>0&&(0,n.jsxs)(o.ModalSignUp,{children:[(0,n.jsxs)(o.TextList,{children:["Lista de Espera ( ",L.length," )"]}),(0,n.jsxs)(o.DivList,{children:[(0,n.jsxs)(o.DivName,{children:[(0,n.jsx)(o.Describe,{children:"Nome"}),(0,n.jsx)(o.Describe,{children:"Telefone"}),(0,n.jsx)(o.Describe,{display:"none",children:"Cargo"}),(0,n.jsx)(o.Describe,{display:"none",children:"Pastor"}),(0,n.jsx)(o.Describe,{children:"Igreja"}),(0,n.jsx)(o.Describe,{display:"none",children:"Cidade"})]}),null===L||void 0===L?void 0:L.map((function(e){return(0,n.jsxs)(o.List,{children:[(0,n.jsx)(o.ListDescribe,{children:e[1].name}),(0,n.jsx)(o.ListDescribe,{children:e[1].tel}),(0,n.jsx)(o.ListDescribe,{display:"none",children:e[1].office}),(0,n.jsx)(o.ListDescribe,{display:"none",children:e[1].sheperd}),(0,n.jsx)(o.ListDescribe,{children:e[1].church}),(0,n.jsx)(o.ListDescribe,{display:"none",children:e[1].city})]})}))]})]})]})})]})}},2148:function(e,i,t){"use strict";t.r(i),t.d(i,{Loading:function(){return r},DivTextInformation:function(){return a},TextInformation:function(){return o},Describe:function(){return d},ListDescribe:function(){return c},DivName:function(){return l},ModalSignUp:function(){return p},TextList:function(){return x},DivList:function(){return u},ListSign:function(){return m},List:function(){return f}});var n=t(8804),s=n.ZP.div.withConfig({displayName:"userliststyled__DivGeneral",componentId:"sc-1jl00qi-0"})(["display:flex;flex-direction:column;align-items:center;@media (max-width:800px){padding:0 5px;}"]),r=n.ZP.div.withConfig({displayName:"userliststyled__Loading",componentId:"sc-1jl00qi-1"})(["& img{margin:50px 0;width:100px;height:100px;}@media (max-width:800px){margin:190px;margin-top:-100px;}"]),a=n.ZP.div.withConfig({displayName:"userliststyled__DivTextInformation",componentId:"sc-1jl00qi-2"})(["display:flex;text-align:center;align-items:center;justify-content:flex-end;width:87%;margin-left:200px;@media (max-width:768px){display:flex;flex-direction:column;width:100%;margin-left:0;}"]),o=n.ZP.p.withConfig({displayName:"userliststyled__TextInformation",componentId:"sc-1jl00qi-3"})(["color:#FF8C00;border:1px dashed;font-size:14px;padding:10px;margin-left:400px;font-weight:500;border-radius:10px;@media(max-width:768px){margin-left:0}"]),d=n.ZP.td.withConfig({displayName:"userliststyled__Describe",componentId:"sc-1jl00qi-4"})(["width:20%;text-align:left;margin-left:20px;@media (max-width:800px){display:",";margin-left:",";width:25%;}"],(function(e){var i=e.display;return i&&"".concat(i)}),(function(e){var i=e.marginLeft;return i&&"".concat(i)})),c=n.ZP.td.withConfig({displayName:"userliststyled__ListDescribe",componentId:"sc-1jl00qi-5"})(["color:white;text-transform:uppercase;margin-top:7px;margin-bottom:7px;padding-bottom:3px;padding:auto 8px;width:20%;font-size:12px;margin-left:20px;@media (max-width:800px){display:",";width:100%;text-align:center;margin-left:2px;justify-content:space-between;}"],(function(e){var i=e.display;return i&&"".concat(i)})),l=n.ZP.th.withConfig({displayName:"userliststyled__DivName",componentId:"sc-1jl00qi-6"})(["display:flex;font-weight:500;text-transform:uppercase;font-size:20px;background:#4c1568;color:white;margin:0;padding-right:15px;justify-content:space-between;@media (max-width:800px){font-size:15px;}"]),p=n.ZP.div.withConfig({displayName:"userliststyled__ModalSignUp",componentId:"sc-1jl00qi-7"})(["height:auto;display:flex;flex-direction:column;justify-content:space-between;padding:8px 10px;width:100%;@media(max-width:800px){width:100%;padding:30px 0px}"]),x=n.ZP.h2.withConfig({displayName:"userliststyled__TextList",componentId:"sc-1jl00qi-8"})(["color:#FFFFFF;margin-bottom:20px;text-align:center;text-transform:uppercase;margin:0;margin-top:4px;margin-bottom:20px;@media (max-width:768px){margin-bottom:20px;}"]),u=n.ZP.table.withConfig({displayName:"userliststyled__DivList",componentId:"sc-1jl00qi-9"})(["background:#000000;tr:nth-child(odd){background:#292431;}@media (max-width:800px){.mediaMobile{display:none;margin-bottom:20px;}}"]),m=n.ZP.div.withConfig({displayName:"userliststyled__ListSign",componentId:"sc-1jl00qi-10"})(["background:#4c1568;color:white;padding:10px 10px;margin:10px;@media(max-width:800px){padding:0;font-size:14px;margin:20px 0;text-align:center;width:100%;}"]),f=n.ZP.tr.withConfig({displayName:"userliststyled__List",componentId:"sc-1jl00qi-11"})(["margin:0;display:flex;justify-content:space-between;list-style-type:none;"]);i.default=s},461:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userlist",function(){return t(550)}])}},function(e){e.O(0,[804,669,774,888,179],(function(){return i=461,e(e.s=i);var i}));var i=e.O();_N_E=i}]);
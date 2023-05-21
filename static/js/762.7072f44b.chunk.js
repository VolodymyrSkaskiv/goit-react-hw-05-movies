"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[762],{6603:function(n,e,t){t.d(e,{T:function(){return o}});var r=t(1598),a=t(184),o=function(){return(0,a.jsxs)(r.xg,{children:[(0,a.jsx)(r.oT,{delay:"0s"}),(0,a.jsx)(r.oT,{delay:".2s"}),(0,a.jsx)(r.oT,{delay:".4s"})]})}},1598:function(n,e,t){t.d(e,{eb:function(){return p},hX:function(){return l},oT:function(){return h},xg:function(){return f}});var r,a,o,i,c,s=t(168),u=t(6444),d=t(1087),p=u.ZP.header(r||(r=(0,s.Z)(["\n  padding: 20px 30px;\n  text-align: center;\n  box-shadow: 0px 4px 4px #d3d3d3;\n"]))),l=(0,u.ZP)(d.OL)(a||(a=(0,s.Z)(["\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: color 0.2s ease-in-out;\n  color: #000000;\n\n  &:not(:last-child) {\n    margin-right: 40px;\n  }\n\n  &.active,\n  &:hover,\n  &:focus {\n    color: #1c85ff;\n    text-decoration: underline;\n  }\n"]))),x=(0,u.F4)(o||(o=(0,s.Z)(["\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"]))),f=u.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))),h=u.ZP.div(c||(c=(0,s.Z)(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 50%;\n  background-color: #1c85ff;\n  animation: "," 1s infinite ease-in-out;\n  animation-delay: ",";\n"])),x,(function(n){return n.delay}))},6762:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,o,i,c,s,u,d,p,l,x,f,h,v=t(5861),g=t(9439),m=t(7757),Z=t.n(m),b=t(2791),j=t(7689),w=t(1087),y=t(8185),k=t(4390),P=t(168),_=t(6444),S=_.ZP.div(r||(r=(0,P.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 20px;\n"]))),T=_.ZP.img(a||(a=(0,P.Z)(["\n  height: 600px;\n  width: 400px;\n"]))),U=_.ZP.div(o||(o=(0,P.Z)(["\n  padding-top: 20px;\n  max-width: 1100px;\n"]))),z=_.ZP.h2(i||(i=(0,P.Z)(["\n  margin-bottom: 20px;\n"]))),F=_.ZP.p(c||(c=(0,P.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),N=_.ZP.span(s||(s=(0,P.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),C=_.ZP.div(u||(u=(0,P.Z)(["\n  margin-top: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: 1px solid #d3d3d3;\n  border-bottom: 1px solid #d3d3d3;\n"]))),H=_.ZP.h3(d||(d=(0,P.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n"]))),O=_.ZP.ul(p||(p=(0,P.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n  font-size: 18px;\n"]))),A=_.ZP.li(l||(l=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),E=(0,_.ZP)(w.rU)(x||(x=(0,P.Z)(["\n  font-size: 16px;\n  margin-right: 5px;\n  padding: 5px 15px;\n  border: 1px solid #0d57aa;\n  border-radius: 6px;\n  background-color: #b5d1f2;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  color: #0d57aa;\n\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  }\n"]))),G=t(6603),M=t(184),q=function(n){var e,t,r,a,o=n.movie,i=o.title,c=o.release_date,s=o.poster_path,u=o.vote_average,d=o.overview,p=o.genres,l=(0,j.TH)(),x=new Date(c),f=isNaN(x)?"Unknown":x.getFullYear(),h=s?"https://image.tmdb.org/t/p/w400/".concat(s):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",v=u?"".concat((10*u).toFixed(0),"%"):"Not rated yet";return i?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(S,{children:[(0,M.jsx)(T,{src:h,alt:"".concat(i," poster")}),(0,M.jsxs)(U,{children:[(0,M.jsxs)(z,{children:[null!==i&&void 0!==i?i:"Unknown"," (",f,")"]}),(0,M.jsxs)(F,{children:["User Score: ",v]}),(0,M.jsxs)(F,{children:[(0,M.jsx)(N,{children:"Overview:"})," ",d]}),p&&p.length>0&&(0,M.jsxs)(F,{children:[(0,M.jsx)(N,{children:"Genres:"}),p.map((function(n){return n.name})).join(", ")]})]})]}),(0,M.jsxs)(C,{children:[(0,M.jsx)(H,{children:"Additional information"}),(0,M.jsxs)(O,{children:[(0,M.jsx)(A,{children:(0,M.jsx)(E,{to:"cast",state:{from:null!==(e=null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"},children:"Cast"})}),(0,M.jsx)(A,{children:(0,M.jsx)(E,{to:"reviews",state:{from:null!==(r=null===l||void 0===l||null===(a=l.state)||void 0===a?void 0:a.from)&&void 0!==r?r:"/"},children:"Reviews"})})]})]})]}):(0,M.jsx)(G.T,{})},D=_.ZP.div(f||(f=(0,P.Z)(["\n  padding: 20px 40px;\n"]))),I=_.ZP.button(h||(h=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  border: 1px solid #0d57aa;\n  border-radius: 6px;\n  background-color: #b5d1f2;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n  }\n"]))),L=function(){var n,e,t=(0,j.UO)().movieId,r=(0,j.TH)(),a=(0,b.useState)({}),o=(0,g.Z)(a,2),i=o[0],c=o[1],s=(0,b.useState)(!0),u=(0,g.Z)(s,2),d=u[0],p=u[1],l=(0,b.useState)(!1),x=(0,g.Z)(l,2),f=x[0],h=x[1];return(0,b.useEffect)((function(){var n=function(){var n=(0,v.Z)(Z().mark((function n(e){var t;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,k.Mc)(e);case 4:t=n.sent,c(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),h(!0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}();n(t)}),[t]),(0,M.jsx)("main",{children:(0,M.jsxs)(D,{children:[(0,M.jsx)(w.rU,{to:null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,M.jsxs)(I,{type:"button",children:[(0,M.jsx)(y.i1r,{style:{width:"25px",height:"25px",display:"inline-block"}}),"Go back"]})}),!f&&(0,M.jsx)(q,{movie:i}),d&&(0,M.jsx)(G.T,{}),f&&(0,M.jsx)("h2",{children:"Sorry we didn't find this page"}),(0,M.jsx)(b.Suspense,{fallback:(0,M.jsx)(G.T,{}),children:(0,M.jsx)(j.j3,{})})]})})}},4390:function(n,e,t){t.d(e,{E3:function(){return d},Hx:function(){return x},Mc:function(){return p},_k:function(){return u},uV:function(){return l}});var r=t(5861),a=t(7757),o=t.n(a),i=t(1243),c="https://api.themoviedb.org",s="5bfce8d761ea605a18e9b0d713eafd56",u=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"}/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=762.7072f44b.chunk.js.map
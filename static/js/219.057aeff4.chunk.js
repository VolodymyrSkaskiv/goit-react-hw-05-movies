"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[219],{219:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,a,c,i,u,o,s,p=e(861),f=e(439),d=e(757),x=e.n(d),h=e(791),l=e(689),g=e(390),v=e(168),m=e(444),w=m.ZP.div(r||(r=(0,v.Z)(["\n  margin-top: 30px;\n  padding-right: 80px;\n  padding-left: 80px;\n  padding-bottom: 40px;\n"]))),Z=m.ZP.h3(a||(a=(0,v.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n  text-align: center;\n"]))),b=m.ZP.ul(c||(c=(0,v.Z)(["\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  flex-wrap: wrap;\n"]))),k=m.ZP.li(i||(i=(0,v.Z)(["\n  width: calc((100% - 4 * 40px) / 5);\n  height: 400px;\n  word-wrap: break-word;\n"]))),_=m.ZP.div(u||(u=(0,v.Z)(["\n  margin-top: 20px;\n  max-width: 220px;\n"]))),y=m.ZP.h3(o||(o=(0,v.Z)(["\n  margin-bottom: 10px;\n"]))),j=m.ZP.p(s||(s=(0,v.Z)(["\n  margin: 30px auto 0 auto;\n  text-align: center;\n  padding: 20px;\n  background-color: #f8f8f8;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n  max-width: 500px;\n"]))),P=e(603),S=e(184),U=function(){var n=(0,l.UO)().movieId,t=(0,h.useState)([]),e=(0,f.Z)(t,2),r=e[0],a=e[1],c=(0,h.useState)(!1),i=(0,f.Z)(c,2),u=i[0],o=i[1],s=(0,h.useState)(!0),d=(0,f.Z)(s,2),v=d[0],m=d[1];return(0,h.useEffect)((function(){var t=function(){var t=(0,p.Z)(x().mark((function t(){var e,r;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,g.uV)(n);case 3:e=t.sent,r=e.cast,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),o(!0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,S.jsxs)(w,{children:[(0,S.jsx)(Z,{children:"Cast"})," ",!u&&(0,S.jsx)(b,{children:r.map((function(n){return(0,S.jsxs)(k,{className:"cast-card",children:[n.profile_path?(0,S.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name," profile")}):(0,S.jsx)("img",{src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(n.name," profile")}),(0,S.jsxs)(_,{children:[(0,S.jsx)(y,{children:n.name}),(0,S.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))}),(0,S.jsx)(j,{children:u&&(0,S.jsx)("h2",{children:"We don't have any information about the cast yet."})}),v&&(0,S.jsx)(P.T,{})]})}},390:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return x},Mc:function(){return f},_k:function(){return s},uV:function(){return d}});var r=e(861),a=e(757),c=e.n(a),i=e(243),u="https://api.themoviedb.org",o="5bfce8d761ea605a18e9b0d713eafd56",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/3/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/3/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/3/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/3/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/3/movie/").concat(t,"}/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=219.057aeff4.chunk.js.map
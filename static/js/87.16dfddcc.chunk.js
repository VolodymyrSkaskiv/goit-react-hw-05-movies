"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[87],{3225:function(n,t,e){e.d(t,{Fg:function(){return h},HC:function(){return x},NZ:function(){return p},PP:function(){return d},aV:function(){return l}});var r,a,i,c,o,u=e(168),s=e(6444),f=e(1087),d=s.ZP.section(r||(r=(0,u.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),p=s.ZP.h2(a||(a=(0,u.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding-left: 5px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n"]))),l=s.ZP.ul(i||(i=(0,u.Z)(["\n  list-style: disc;\n  color: #0d57aa;\n"]))),x=s.ZP.li(c||(c=(0,u.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),h=(0,s.ZP)(f.rU)(o||(o=(0,u.Z)(["\n  font-size: 20px;\n  color: #0d57aa;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #1c85ff;\n    border-bottom: 2px solid #1c85ff;\n  }\n"])))},6603:function(n,t,e){e.d(t,{T:function(){return i}});var r=e(1598),a=e(184),i=function(){return(0,a.jsxs)(r.xg,{children:[(0,a.jsx)(r.oT,{delay:"0s"}),(0,a.jsx)(r.oT,{delay:".2s"}),(0,a.jsx)(r.oT,{delay:".4s"})]})}},1598:function(n,t,e){e.d(t,{eb:function(){return d},hX:function(){return p},oT:function(){return h},xg:function(){return x}});var r,a,i,c,o,u=e(168),s=e(6444),f=e(1087),d=s.ZP.header(r||(r=(0,u.Z)(["\n  padding: 20px 30px;\n  text-align: center;\n  box-shadow: 0px 4px 4px #d3d3d3;\n"]))),p=(0,s.ZP)(f.OL)(a||(a=(0,u.Z)(["\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: color 0.2s ease-in-out;\n  color: #000000;\n\n  &:not(:last-child) {\n    margin-right: 40px;\n  }\n\n  &.active,\n  &:hover,\n  &:focus {\n    color: #1c85ff;\n    text-decoration: underline;\n  }\n"]))),l=(0,s.F4)(i||(i=(0,u.Z)(["\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"]))),x=s.ZP.div(c||(c=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))),h=s.ZP.div(o||(o=(0,u.Z)(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 50%;\n  background-color: #1c85ff;\n  animation: "," 1s infinite ease-in-out;\n  animation-delay: ",";\n"])),l,(function(n){return n.delay}))},4087:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(5861),a=e(9439),i=e(7757),c=e.n(i),o=e(2791),u=e(4390),s=e(3225),f=e(184),d=function(n){var t=n.trendingMovies;return(0,f.jsxs)(s.PP,{children:[(0,f.jsx)(s.NZ,{children:"Trending today"}),(0,f.jsx)(s.aV,{children:t.map((function(n){return(0,f.jsx)(s.HC,{children:(0,f.jsx)(s.Fg,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})},p=e(6603),l=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1],s=(0,o.useState)(!0),l=(0,a.Z)(s,2),x=l[0],h=l[1],g=(0,o.useState)(!1),v=(0,a.Z)(g,2),Z=v[0],m=v[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!1),h(!0),n.next=5,(0,u._k)();case 5:t=n.sent,e=t.results,i(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),m(!0);case 13:return n.prev=13,h(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)(f.Fragment,{children:[!Z&&(0,f.jsx)(d,{trendingMovies:e}),x&&(0,f.jsx)(p.T,{}),Z&&(0,f.jsx)("h2",{children:"Sorry we didn't find this page"})]})}},4390:function(n,t,e){e.d(t,{E3:function(){return f},Hx:function(){return l},Mc:function(){return d},_k:function(){return s},uV:function(){return p}});var r=e(5861),a=e(7757),i=e.n(a),c=e(1243),o="https://api.themoviedb.org",u="5bfce8d761ea605a18e9b0d713eafd56",s=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/3/trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"/3/movie/").concat(t,"}/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=87.16dfddcc.chunk.js.map
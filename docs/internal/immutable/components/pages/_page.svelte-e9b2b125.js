import{S as G,i as S,s as j,k as h,a as x,q as M,l as _,m as k,c as A,r as q,h as f,n as c,b as w,C as m,u as T,A as C,G as I,L as H,f as E,d as L,t as D,H as P,v as R,w as U,x as X,y as Y,g as z}from"../../chunks/index-ced44c5b.js";function J(o){let e,t,l;return{c(){e=h("div"),t=h("img"),this.h()},l(a){e=_(a,"DIV",{class:!0});var i=k(e);t=_(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(f),this.h()},h(){c(t,"class","grid place-items-center"),I(t.src,l=o[3])||c(t,"src",l),c(t,"alt",o[0]),c(e,"class","flex")},m(a,i){w(a,e,i),m(e,t)},p(a,i){i&8&&!I(t.src,l=a[3])&&c(t,"src",l),i&1&&c(t,"alt",a[0])},d(a){a&&f(e)}}}function K(o){let e,t,l;return{c(){e=h("div"),t=h("iframe"),this.h()},l(a){e=_(a,"DIV",{class:!0});var i=k(e);t=_(i,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),k(t).forEach(f),i.forEach(f),this.h()},h(){c(t,"class","w-full h-full"),I(t.src,l=o[2])||c(t,"src",l),c(t,"title","YouTube video player"),c(t,"frameborder","0"),c(t,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),t.allowFullscreen=!0,c(e,"class","flex-grow")},m(a,i){w(a,e,i),m(e,t)},p(a,i){i&4&&!I(t.src,l=a[2])&&c(t,"src",l)},d(a){a&&f(e)}}}function N(o){let e,t,l,a,i,p,d,b;function g(r,n){return r[3]==null?K:J}let s=g(o),v=s(o);return{c(){e=h("div"),v.c(),t=x(),l=h("div"),a=h("div"),i=M(o[0]),p=x(),d=h("div"),b=M(o[1]),this.h()},l(r){e=_(r,"DIV",{class:!0});var n=k(e);v.l(n),t=A(n),l=_(n,"DIV",{class:!0});var u=k(l);a=_(u,"DIV",{class:!0});var y=k(a);i=q(y,o[0]),y.forEach(f),p=A(u),d=_(u,"DIV",{class:!0});var V=k(d);b=q(V,o[1]),V.forEach(f),u.forEach(f),n.forEach(f),this.h()},h(){c(a,"class","text-xl pl-4 pt-4 text-gray-800 dark:text-gray-100"),c(d,"class","text-sm text-gray-500 dark:text-gray-300 pl-4 pb-4"),c(l,"class","bg-gray-100 dark:bg-gray-600"),c(e,"class","rounded-2xl sm:h-72 shadow-2xl flex flex-col overflow-hidden lg\\:w-96 justify-end")},m(r,n){w(r,e,n),v.m(e,null),m(e,t),m(e,l),m(l,a),m(a,i),m(l,p),m(l,d),m(d,b)},p(r,[n]){s===(s=g(r))&&v?v.p(r,n):(v.d(1),v=s(r),v&&(v.c(),v.m(e,t))),n&1&&T(i,r[0]),n&2&&T(b,r[1])},i:C,o:C,d(r){r&&f(e),v.d()}}}function O(o,e,t){let{title:l,description:a,ytlink:i,thumbnail:p}=e;return o.$$set=d=>{"title"in d&&t(0,l=d.title),"description"in d&&t(1,a=d.description),"ytlink"in d&&t(2,i=d.ytlink),"thumbnail"in d&&t(3,p=d.thumbnail)},[l,a,i,p]}class Q extends G{constructor(e){super(),S(this,e,O,N,j,{title:0,description:1,ytlink:2,thumbnail:3})}}function F(o,e,t){const l=o.slice();return l[1]=e[t],l}function B(o){let e,t;return e=new Q({props:{title:o[1].title,description:o[1].description,ytlink:o[1].url,thumbnail:o[1].thumbnail}}),{c(){R(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,a){X(e,l,a),t=!0},p(l,a){const i={};a&1&&(i.title=l[1].title),a&1&&(i.description=l[1].description),a&1&&(i.ytlink=l[1].url),a&1&&(i.thumbnail=l[1].thumbnail),e.$set(i)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){D(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function W(o){let e,t,l,a,i,p,d,b,g=o[0].data.videos,s=[];for(let r=0;r<g.length;r+=1)s[r]=B(F(o,g,r));const v=r=>D(s[r],1,1,()=>{s[r]=null});return{c(){e=h("meta"),t=h("meta"),l=h("meta"),a=h("meta"),i=h("meta"),p=x(),d=h("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){const n=H('[data-svelte="svelte-11lyun7"]',document.head);e=_(n,"META",{charset:!0}),t=_(n,"META",{"http-equiv":!0,content:!0}),l=_(n,"META",{name:!0,content:!0}),a=_(n,"META",{name:!0,content:!0}),i=_(n,"META",{name:!0,content:!0}),n.forEach(f),p=A(r),d=_(r,"DIV",{id:!0,class:!0});var u=k(d);for(let y=0;y<s.length;y+=1)s[y].l(u);u.forEach(f),this.h()},h(){c(e,"charset","utf-8"),c(t,"http-equiv","X-UA-Compatible"),c(t,"content","IE=edge"),c(l,"name","theme-color"),c(l,"content","#BFDBFE"),document.title="7393 website",c(a,"name","description"),c(a,"content","website go brrrr"),c(i,"name","viewport"),c(i,"content","width=device-width, initial-scale=1"),c(d,"id","feed"),c(d,"class","flex flex-col px-4 sm:px-0 pt-4 sm:mx-6 space-y-2 md:space-y-4 w-full")},m(r,n){m(document.head,e),m(document.head,t),m(document.head,l),m(document.head,a),m(document.head,i),w(r,p,n),w(r,d,n);for(let u=0;u<s.length;u+=1)s[u].m(d,null);b=!0},p(r,[n]){if(n&1){g=r[0].data.videos;let u;for(u=0;u<g.length;u+=1){const y=F(r,g,u);s[u]?(s[u].p(y,n),E(s[u],1)):(s[u]=B(y),s[u].c(),E(s[u],1),s[u].m(d,null))}for(z(),u=g.length;u<s.length;u+=1)v(u);L()}},i(r){if(!b){for(let n=0;n<g.length;n+=1)E(s[n]);b=!0}},o(r){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)D(s[n]);b=!1},d(r){f(e),f(t),f(l),f(a),f(i),r&&f(p),r&&f(d),P(s,r)}}}function Z(o,e,t){let{data:l}=e;return o.$$set=a=>{"data"in a&&t(0,l=a.data)},[l]}class ee extends G{constructor(e){super(),S(this,e,Z,W,j,{data:0})}}export{ee as default};
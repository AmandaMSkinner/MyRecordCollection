(function(){"use strict";var e={4782:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var n=r(144),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}}),t("router-view"),t("router-view",{attrs:{name:"extra"}})],1)},s=[],i={name:"app"},a=i,c=r(1001),l=(0,c.Z)(a,o,s,!1,null,null,null),u=l.exports,f=(r(1539),r(629)),d="bIplSnkEnnCaSkeYTZeVeNSKsvjxtsWCrAKXauxi",p="https://api.discogs.com/users/amandaskinner/collection/folders/6034833/releases?token="+d+"&per_page=250&sort=artist";n.ZP.use(f.ZP);var v=new f.ZP.Store({state:{releases:[]},mutations:{setReleases:function(e,t){e.releases=t}},actions:{fetchAllReleases:function(e){return fetch(p).then((function(e){return e.json()})).then((function(t){e.commit("setReleases",t)}))}},getters:{releases:function(e){return e.releases}}}),h=r(8345),m=function(){var e=this,t=e._self._c;return t("section",[t("h2",[e._v("Amanda's Record Collection")]),t("h3",[e._v("A selection of 100 of my favorites")]),e._m(0),t("div",{staticClass:"record-collection-list"},e._l(e.$store.state.releases.releases,(function(e){return t("record-card",{key:e.id,attrs:{record:e}})})),1)])},_=[function(){var e=this,t=e._self._c;return t("div",[e._v("Powered By "),t("a",{attrs:{href:"https://www.discogs.com/"}},[e._v("Discogs")])])}],b=r(1801),g=(r(8309),function(){var e=this,t=e._self._c;return t("div",{staticClass:"card"},[t("h2",{staticClass:"record-title"},[e._v(e._s(e.record.basic_information.title))]),t("img",{staticClass:"record-image",attrs:{src:e.record.basic_information.cover_image}}),t("h3",{staticClass:"record-artist"},[e._v(e._s(e.record.basic_information.artists[0].name)+" - "+e._s(e.record.basic_information.year))])])}),w=[],Z={name:"record-card",props:{record:Object,enableAdd:{type:Boolean,default:!1}}},y=Z,O=(0,c.Z)(y,g,w,!1,null,null,null),C=O.exports,P={name:"record-collection-list",computed:(0,b.Z)({},(0,f.Se)(["releases"])),components:{RecordCard:C},methods:(0,b.Z)({},(0,f.nv)(["fetchAllReleases"])),created:function(){this.fetchAllReleases()}},k=P,x=(0,c.Z)(k,m,_,!1,null,null,null),j=x.exports;n.ZP.use(h.ZP);var A=[{path:"/",name:"record-list",components:{default:j}}],R=new h.ZP({mode:"hash",routes:A}),S=R;n.ZP.config.productionTip=!1,new n.ZP({store:v,router:S,render:function(e){return e(u)}}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,i=n[0],a=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var u=c(r)}for(t&&t(n);l<i.length;l++)s=i[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self["webpackChunkreading_list_app"]=self["webpackChunkreading_list_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4782)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.392cb5b3.js.map
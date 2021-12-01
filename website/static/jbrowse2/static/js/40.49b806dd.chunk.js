(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[40,56,74],{1149:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(51),c=Object(o.a)((function(e){return{message:{border:"1px solid black",background:"#f88",overflow:"auto",maxHeight:200,margin:e.spacing(1),padding:e.spacing(1)},errorBox:{background:"lightgrey",border:"1px solid black",margin:20}}}));t.default=function(e){var t=e.error,a=c(),n="".concat(t),o="",i=n.match(/.*at path "(.*)" snapshot `(.*)` is not assignable/);return i&&(n="Failed to load element at ".concat(i[1]),o=i[2]),r.a.createElement("div",{className:a.message},n.slice(0,1e4),o?r.a.createElement("div",null,"... Failed element had snapshot:",r.a.createElement("pre",{className:a.errorBox},JSON.stringify(JSON.parse(o),null,2))):null)}},1692:function(e,t,a){"use strict";a.r(t);var n=a(83),r=a(1),o=a.n(r),c=a(86),i=a(82),l=a(51),s=a(89),m=a(1282),d=a.n(m),u=a(1283),p=a.n(u),g=a(1280),b=a.n(g),f=a(1281),v=a.n(f),h=a(1278),y=a.n(h),E=a(1279),k=a.n(E),w=a(2447),j=a(1277),O=Object(l.a)((function(e){return{headerBar:{gridArea:"1/1/auto/span 2",display:"flex"},spacer:{flexGrow:1},emphasis:{background:e.palette.secondary.main,padding:e.spacing(1)},hovered:{background:e.palette.secondary.light},displayName:{background:e.palette.secondary.main,paddingTop:3,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},inputBase:{color:e.palette.secondary.contrastText},inputRoot:{"&:hover":{backgroundColor:e.palette.secondary.light}},inputFocused:{borderColor:e.palette.primary.main,backgroundColor:e.palette.secondary.light}}})),x=Object(c.observer)((function(e){var t=e.model;return o.a.createElement(w.a,{onClick:t.toggleInteract,title:"Toggle interacting with the overlay"},t.interactToggled?o.a.createElement(y.a,null):o.a.createElement(k.a,null))})),C=Object(c.observer)((function(e){var t=e.model;return o.a.createElement(w.a,{onClick:t.toggleLinkViews,title:"Toggle linked scrolls and behavior across views"},t.linkViews?o.a.createElement(b.a,{color:"secondary"}):o.a.createElement(v.a,{color:"secondary"}))})),N=Object(c.observer)((function(e){var t=e.model;return o.a.createElement(w.a,{onClick:t.toggleIntraviewLinks,title:"Toggle rendering intraview links"},t.showIntraviewLinks?o.a.createElement(d.a,{color:"secondary"}):o.a.createElement(p.a,{color:"secondary"}))})),T=Object(c.observer)((function(e){var t=e.model,a=e.size,n=O();return t.setHeaderHeight(a.height),o.a.createElement("div",{className:n.headerBar},o.a.createElement(C,{model:t}),o.a.createElement(x,{model:t}),o.a.createElement(N,{model:t}),o.a.createElement("div",{className:n.spacer}))})),A=Object(j.withSize)({monitorHeight:!0})(T),F=Object(l.a)((function(e){return{root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden"},breakpointMarker:{position:"absolute",top:0,height:"100%",width:"3px",background:"magenta"},viewContainer:{marginTop:"3px"},container:{display:"grid"},overlay:{zIndex:100,gridArea:"1/1"},content:{gridArea:"1/1"}}})),S=Object(c.observer)((function(e){var t=e.model,a=F();return o.a.createElement(o.a.Fragment,null,t.tracks.map((function(e){var t=Object(n.a)(e.displays,1)[0],r=t.RenderingComponent;return r?o.a.createElement("div",{className:a.overlay,key:Object(i.getConf)(e,"trackId"),style:{height:t.height}},o.a.createElement(r,{model:t})):null})))})),P=Object(c.observer)((function(e){var t=e.model,a=F(),n=t.views,r=Object(s.getEnv)(t).pluginManager.getViewType(n[0].type).ReactComponent;return o.a.createElement("div",null,o.a.createElement(A,{model:t}),o.a.createElement("div",{className:a.container},o.a.createElement(r,{model:n[0]}),o.a.createElement("div",{style:{display:"grid"}},o.a.createElement(S,{model:t})),o.a.createElement(r,{model:n[1]})))})),L=Object(c.observer)((function(e){var t=e.model,a=F(),n=t.views,r=Object(s.getEnv)(t).pluginManager;return o.a.createElement("div",null,o.a.createElement(A,{model:t}),o.a.createElement("div",{className:a.container},o.a.createElement("div",{className:a.content},o.a.createElement("div",{style:{position:"relative"}},n.map((function(e){var t=r.getViewType(e.type).ReactComponent;return o.a.createElement(t,{key:e.id,model:e})}))),o.a.createElement(S,{model:t}))))})),I=Object(c.observer)((function(e){var t=e.model;return t.tracks.some((function(e){return e.displays.some((function(e){return Object(i.getConf)(e,"middle")}))}))?o.a.createElement(P,{model:t}):o.a.createElement(L,{model:t})}));t.default=I},2573:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(86),c=a(1692),i=a(87),l=a.n(i),s=a(112),m=a(91),d=a(83),u=a(84),p=a(680),g=a(51),b=a(2485),f=a(2435),v=a(2488),h=a(2443),y=a(2440),E=a(174),k=a(1149),w=Object(g.a)((function(e){return{importFormContainer:{padding:e.spacing(4)},formPaper:{maxWidth:600,margin:"0 auto",padding:12,marginBottom:10}}})),j=Object(o.observer)((function(e){var t=e.model,a=w(),o=Object(u.getSession)(t),c=o.assemblyNames,i=o.assemblyManager,g=Object(n.useState)([c[0],c[0]]),j=Object(d.a)(g,2),O=j[0],x=j[1],C=Object(n.useState)({uri:"",locationType:"UriLocation"}),N=Object(d.a)(C,2),T=N[0],A=N[1],F=Object(n.useState)(2),S=Object(d.a)(F,1)[0],P=Object(n.useState)(),L=Object(d.a)(P,2),I=L[0],B=L[1],R=c.length?O.map((function(e){var t;return null===(t=i.get(e))||void 0===t?void 0:t.error})).filter((function(e){return!!e})).join(", "):"No configured assemblies";function V(){return V=Object(m.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Object(u.isSessionWithAddTracks)(o)){e.next=3;break}return e.abrupt("return");case 3:return e.t0=t,e.next=6,Promise.all(O.map(function(){var e=Object(m.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.waitForAssembly(t);case 2:if(a=e.sent){e.next=5;break}throw new Error("Assembly ".concat(t," failed to load"));case 5:return e.abrupt("return",{type:"LinearGenomeView",bpPerPx:1,offsetPx:0,hideHeader:!0,displayedRegions:a.regions});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:e.t1=e.sent,e.t0.setViews.call(e.t0,e.t1),t.views.forEach((function(e){return e.setWidth(t.width)})),a="uri"in T&&T.uri?T.uri.slice(T.uri.lastIndexOf("/")+1):"MyTrack",n="".concat(a,"-").concat(Date.now()),o.addTrackConf({trackId:n,name:a,assemblyNames:O,type:"SyntenyTrack",adapter:{type:"PAFAdapter",pafLocation:T,assemblyNames:O}}),t.toggleTrack(n),e.next=19;break;case 15:e.prev=15,e.t2=e.catch(0),console.error(e.t2),B(e.t2);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),V.apply(this,arguments)}var H=I||R;return r.a.createElement(b.a,{className:a.importFormContainer},H?r.a.createElement(k.default,{error:H}):null,r.a.createElement(f.a,{className:a.formPaper},r.a.createElement(v.a,{container:!0,item:!0,justifyContent:"center",spacing:4,alignItems:"center"},r.a.createElement(v.a,{item:!0},r.a.createElement(h.a,null,"Select assemblies for synteny view"),Object(s.a)(new Array(S)).map((function(e,t){return r.a.createElement(p.a,{key:"row_".concat(t,"_").concat(O[t]),selected:O[t],onChange:function(e){var a=O.slice(0);a[t]=e,x(a)},session:o})}))))),r.a.createElement(f.a,{className:a.formPaper},r.a.createElement(v.a,{container:!0,justifyContent:"center"},r.a.createElement(h.a,{style:{textAlign:"center"}},r.a.createElement("b",null,"Optional"),": Add a PAF"," ",r.a.createElement("a",{href:"https://github.com/lh3/miniasm/blob/master/PAF.md"},"(pairwise mapping format)")," ","file for the linear synteny view. Note that the first assembly should be the left column of the PAF and the second assembly should be the right column"),r.a.createElement(v.a,{item:!0},r.a.createElement(E.FileSelector,{name:"URL",description:"",location:T,setLocation:function(e){return A(e)}})))),r.a.createElement(v.a,{container:!0,justifyContent:"center"},r.a.createElement(v.a,{item:!0},r.a.createElement(y.a,{disabled:!!R,onClick:function(){return V.apply(this,arguments)},variant:"contained",color:"primary"},"Open"))))})),O=j,x=Object(o.observer)((function(e){var t=e.model;return t.initialized?r.a.createElement(c.default,{model:t}):r.a.createElement(O,{model:t})}));t.default=x}}]);
//# sourceMappingURL=40.49b806dd.chunk.js.map
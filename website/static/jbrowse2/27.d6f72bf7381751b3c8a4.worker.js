this.webpackChunk([27],{1924:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(210),c=Object(o.a)((function(e){return{message:{border:"1px solid black",background:"#f88",overflow:"auto",maxHeight:200,margin:e.spacing(1),padding:e.spacing(1)},errorBox:{background:"lightgrey",border:"1px solid black",margin:20}}}));t.a=function(e){var t=e.error,n=c(),a="".concat(t),o="",i=a.match(/.*at path "(.*)" snapshot `(.*)` is not assignable/);return i&&(a="Failed to load element at ".concat(i[1]),o=i[2]),r.a.createElement("div",{className:n.message},a.slice(0,1e4),o?r.a.createElement("div",null,"... Failed element had snapshot:",r.a.createElement("pre",{className:n.errorBox},JSON.stringify(JSON.parse(o),null,2))):null)}},1925:function(e,t,n){"use strict";var a=n(25),r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),c=(0,a(n(34)).default)(o.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.default=c},2075:function(e,t,n){"use strict";var a=n(25),r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),c=(0,a(n(34)).default)(o.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.default=c},2076:function(e,t,n){"use strict";var a=n(25),r=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),c=(0,a(n(34)).default)(o.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.default=c},2144:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(0),o=n.n(r),c=n(14),i=n(20),l=n(210),s=n(857),u=n(3),m=n(53),f=n(552),d=n.n(f),v=n(854),p=n(855),b=n(139),h=n(159),y=n(6),g=n(1924),x=n(251),E=Object(l.a)((function(e){return{importFormContainer:{padding:e.spacing(4),margin:"0 auto"}}})),k=Object(c.observer)((function(e){var t=e.model,n=E(),c=Object(y.getSession)(t),i=c.assemblyNames,l=c.assemblyManager,s=Object(r.useState)(),u=Object(a.a)(s,2),f=u[0],d=u[1],k=Object(r.useState)(i[0]),w=Object(a.a)(k,2),j=w[0],O=w[1],P=Object(r.useState)(i[0]),N=Object(a.a)(P,2),S=N[0],B=N[1],C=[j,S],M=Object(r.useState)(),T=Object(a.a)(M,2),R=T[0],L=T[1],A=i.length?C.map((function(e){var t;return null===(t=l.get(e))||void 0===t?void 0:t.error})).filter((function(e){return!!e})).join(", "):"No configured assemblies";var z=R||A;return o.a.createElement(v.a,{className:n.importFormContainer},z?o.a.createElement(g.a,{error:z}):null,o.a.createElement(p.a,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",style:{width:"50%",margin:"0 auto"}},o.a.createElement(p.a,{item:!0},o.a.createElement(b.a,{style:{padding:12}},o.a.createElement("p",{style:{textAlign:"center"}},"Select assemblies for dotplot view"),o.a.createElement(x.a,{selected:j,onChange:function(e){return O(e)},session:c}),o.a.createElement(x.a,{selected:S,onChange:function(e){return B(e)},session:c})),o.a.createElement(b.a,{style:{padding:12}},o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("b",null,"Optional"),": Add a PAF"," ",o.a.createElement("a",{href:"https://github.com/lh3/miniasm/blob/master/PAF.md"},"(pairwise mapping format)")," ","file for the dotplot view. Note that the first assembly should be the left column of the PAF and the second assembly should be the right column"),o.a.createElement(p.a,{container:!0,justifyContent:"center"},o.a.createElement(p.a,{item:!0},o.a.createElement(m.FileSelector,{name:"URL",description:"",location:f,setLocation:function(e){return d(e)}}))))),o.a.createElement(p.a,{item:!0},o.a.createElement(h.a,{"data-testid":"submitDotplot",onClick:function(){try{if(!Object(y.isSessionWithAddTracks)(c))return;t.setViews([{bpPerPx:.1,offsetPx:0},{bpPerPx:.1,offsetPx:0}]),t.setAssemblyNames([j,S]);var e=f&&"uri"in f&&f.uri?f.uri.slice(f.uri.lastIndexOf("/")+1):"MyTrack",n="".concat(e,"-").concat(Date.now());c.addTrackConf({trackId:"".concat(e,"-").concat(Date.now()),name:e,assemblyNames:C,type:"SyntenyTrack",adapter:{type:"PAFAdapter",pafLocation:f,assemblyNames:C}}),t.toggleTrack(n)}catch(a){console.error(a),L(a)}},disabled:!!A,variant:"contained",color:"primary"},"Open"))))})),w=n(284),j=n.n(w),O=n(189),P=n.n(O),N=n(1925),S=n.n(N),B=n(432),C=n.n(B),M=n(2075),T=n.n(M),R=n(2076),L=n.n(R),A=n(104),z=n(173),F=Object(l.a)({iconButton:{padding:"4px",margin:"0 2px 0 2px"},controls:{overflow:"hidden",background:"white",whiteSpace:"nowrap",position:"absolute",boxSizing:"border-box",border:"1px solid #a2a2a2",right:0,top:0,zIndex:1001}}),I=Object(c.observer)((function(e){var t=e.model,n=F();return o.a.createElement("div",{className:n.controls},o.a.createElement(z.a,{onClick:function(){t.hview.scroll(-100)},className:n.iconButton,title:"left",color:"secondary"},o.a.createElement(T.a,null)),o.a.createElement(z.a,{onClick:function(){t.hview.scroll(100)},className:n.iconButton,title:"left",color:"secondary"},o.a.createElement(L.a,null)),o.a.createElement(z.a,{onClick:function(){t.vview.scroll(100)},className:n.iconButton,title:"left",color:"secondary"},o.a.createElement(C.a,null)),o.a.createElement(z.a,{onClick:function(){t.vview.scroll(-100)},className:n.iconButton,title:"left",color:"secondary"},o.a.createElement(S.a,null)),o.a.createElement(z.a,{onClick:t.zoomOutButton,className:n.iconButton,color:"secondary"},o.a.createElement(j.a,null)),o.a.createElement(z.a,{onClick:t.zoomInButton,className:n.iconButton,title:"zoom in",color:"secondary"},o.a.createElement(P.a,null)),o.a.createElement(z.a,{onClick:t.activateTrackSelector,title:"Open track selector",value:"track_select","data-testid":"circular_track_select",color:"secondary"},o.a.createElement(A.b,null)))}));function J(e,t){var n=t.pxToBp(e),a=n.refName,r=n.start,o=n.offset,c=n.oob,i=Math.floor(r+o);return c?"out of bounds":"".concat(a,":").concat(i.toLocaleString("en-US"))}function _(e,t,n){var a=[],r=e.slice(0).sort((function(e,t){var n=e.end-e.start;return t.end-t.start-n})),o=new Array(Math.round(t));return r.forEach((function(e){var r=e.key,c=e.offsetPx,i=Math.round(t-c+n),l=[Math.max(i-12,0),i];0===i||o.slice.apply(o,l).some(Boolean)?a.push(r):o.fill.apply(o,[!0].concat(l))})),a}function Y(e,t,n){for(var a=t*(e=Math.abs(e)),r=parseInt(Number(a).toExponential().split(/e/i)[1],10),o=Math.pow(10,r);o<a&&!((o*=2)>=a);)o*=2.5;var c=(o=Math.max(o,5))/e,i=0;return!(o%10)&&c/10>=n?i=o/10:!(o%5)&&c/5>=n?i=o/5:!(o%2)&&c/2>=n&&(i=o/2),{majorPitch:o,minorPitch:i}}function X(e,t){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=[],o=Y(t,60,15),c=o.minorPitch||o.majorPitch,i=0;i<e.length;i++)for(var l=e[i],s=l.start,u=l.end,m=l.refName,f=0,d=s,v=u,p=Math.ceil(d/c)*c;p<v;p+=c)a&&p%o.majorPitch?(r.push({type:"minor",base:p-1,index:f,refName:m}),f+=1):n&&Math.abs(p-l.start)>o.minorPitch&&(r.push({type:"major",base:p-1,index:f,refName:m}),f+=1);return r}var D=Object(l.a)((function(){return{vtext:{gridColumn:"1/2",gridRow:"1/2",pointerEvents:"none"},htext:{gridColumn:"2/2",gridRow:"2/2",pointerEvents:"none"},majorTickLabel:{fontSize:"11px"},majorTick:{stroke:"#555"},minorTick:{stroke:"#999"}}})),U=Object(c.observer)((function(e){var t=e.model,n=D(),a=t.viewWidth,r=t.borderY,c=t.hview,i=t.htextRotation,l=_(c.dynamicBlocks.contentBlocks,a,c.offsetPx),s=X(c.staticBlocks.contentBlocks,c.bpPerPx);return o.a.createElement("svg",{width:a,height:r,className:n.htext},o.a.createElement("g",null,c.dynamicBlocks.contentBlocks.filter((function(e){return!l.includes(e.key)})).map((function(e){var t=e.offsetPx;return o.a.createElement("text",{transform:"rotate(".concat(i,",").concat(t-c.offsetPx,",").concat(0,")"),key:JSON.stringify(e),x:t-c.offsetPx,y:1,fill:"#000000",dominantBaseline:"hanging",textAnchor:"end"},"".concat(e.refName,":").concat(0!==e.start?Math.floor(e.start).toLocaleString("en-US"):""))})),s.map((function(e){var t=(c.bpToPx({refName:e.refName,coord:e.base})||0)-c.offsetPx;return o.a.createElement("line",{key:"line-".concat(JSON.stringify(e)),x1:t,x2:t,y1:0,y2:"major"===e.type?6:4,strokeWidth:1,stroke:"major"===e.type?"#555":"#999",className:"major"===e.type?n.majorTick:n.minorTick,"data-bp":e.base})})),s.filter((function(e){return"major"===e.type})).map((function(e){var t=(c.bpToPx({refName:e.refName,coord:e.base})||0)-c.offsetPx;return o.a.createElement("text",{x:t-7,y:0,transform:"rotate(".concat(i,",").concat(t,",").concat(0,")"),key:"text-".concat(JSON.stringify(e)),style:{fontSize:"11px"},className:n.majorTickLabel,dominantBaseline:"middle",textAnchor:"end"},(e.base+1).toLocaleString("en-US"))}))))})),W=Object(c.observer)((function(e){var t=e.model,n=D(),a=t.borderX,r=t.viewHeight,c=t.vview,i=t.vtextRotation,l=_(c.dynamicBlocks.contentBlocks,r,c.offsetPx),s=X(c.staticBlocks.contentBlocks,c.bpPerPx);return o.a.createElement("svg",{className:n.vtext,width:a,height:r},o.a.createElement("g",null,c.dynamicBlocks.contentBlocks.filter((function(e){return!l.includes(e.key)})).map((function(e){var t=e.offsetPx,n=a;return o.a.createElement("text",{transform:"rotate(".concat(i,",").concat(n,",").concat(t,")"),key:JSON.stringify(e),x:a,y:r-t+c.offsetPx,fill:"#000000",textAnchor:"end"},"".concat(e.refName,":").concat(0!==e.start?Math.floor(e.start):""))})),s.map((function(e){var t=(c.bpToPx({refName:e.refName,coord:e.base})||0)-c.offsetPx;return o.a.createElement("line",{key:"line-".concat(JSON.stringify(e)),y1:r-t,y2:r-t,x1:a,x2:a-("major"===e.type?6:4),strokeWidth:1,stroke:"major"===e.type?"#555":"#999",className:"major"===e.type?n.majorTick:n.minorTick,"data-bp":e.base})})),s.filter((function(e){return"major"===e.type})).map((function(e){var t=(c.bpToPx({refName:e.refName,coord:e.base})||0)-c.offsetPx;return o.a.createElement("text",{y:r-t-3,x:a-7,key:"text-".concat(JSON.stringify(e)),textAnchor:"end",dominantBaseline:"hanging",style:{fontSize:"11px"},className:n.majorTickLabel},(e.base+1).toLocaleString("en-US"))}))))})),H=Object(l.a)((function(e){return{spacer:{gridColumn:"1/2",gridRow:"2/2"},root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden"},viewContainer:{marginTop:"3px"},container:{display:"grid",padding:5,position:"relative"},overlay:{pointerEvents:"none",overflow:"hidden",display:"flex",width:"100%",gridRow:"1/2",gridColumn:"2/2",zIndex:100,"& path":{cursor:"crosshair",fill:"none"}},content:{gridColumn:"2/2",gridRow:"1/2"},popover:{background:"#fff",maxWidth:400,wordBreak:"break-all",zIndex:1e3,border:"1px solid black",pointerEvents:"none",position:"absolute"}}})),K=Object(c.observer)((function(e){var t=e.model,n=e.children,a=e.stroke,r=void 0===a?"#000a":a,c=t.viewWidth,i=t.viewHeight,l=t.hview,s=t.vview,u=l.dynamicBlocks.contentBlocks,m=s.dynamicBlocks.contentBlocks,f=l.displayedRegionsTotalPx-l.offsetPx,d=u[0].offsetPx-l.offsetPx,v=s.displayedRegionsTotalPx-s.offsetPx,p=m[0].offsetPx-s.offsetPx;return o.a.createElement("svg",{style:{background:"rgba(0,0,0,0.12)"},width:c,height:i},o.a.createElement("rect",{x:d,y:i-v,width:f-d,height:v-p,fill:"#fff"}),o.a.createElement("g",null,u.map((function(e){var t=e.offsetPx-l.offsetPx;return o.a.createElement("line",{key:JSON.stringify(e),x1:t,y1:0,x2:t,y2:i,stroke:r})})),m.map((function(e){var t=i-(e.offsetPx-s.offsetPx);return o.a.createElement("line",{key:JSON.stringify(e),x1:0,y1:t,x2:c,y2:t,stroke:r})})),o.a.createElement("line",{x1:f,y1:0,x2:f,y2:i,stroke:r}),o.a.createElement("line",{x1:0,y1:i-v,x2:c,y2:i-v,stroke:r})),n)}));function V(e,t){return e&&[e[0]-t.left,e[1]-t.top]}var q=Object(c.observer)((function(e){var t,n,c,l=e.model,s=l.hview,f=l.vview,v=l.viewHeight,p=H(),b=Object(r.useState)(),h=Object(a.a)(b,2),y=h[0],g=h[1],x=Object(r.useState)(),E=Object(a.a)(x,2),k=E[0],w=E[1],j=Object(r.useState)(),O=Object(a.a)(j,2),P=O[0],N=O[1],S=Object(r.useRef)(null),B=Object(r.useRef)(null),C=Object(r.useRef)(0),M=Object(r.useRef)(0),T=Object(r.useRef)(null),R=Object(r.useRef)(null),L=Object(r.useRef)(),A=Object(r.useRef)(0),z=Object(r.useRef)(!1),F={left:0,top:0,width:0,height:0},_=(null===(t=S.current)||void 0===t?void 0:t.getBoundingClientRect())||F,Y=(null===(n=R.current)||void 0===n?void 0:n.getBoundingClientRect())||F,X=(null===(c=T.current)||void 0===c?void 0:c.getBoundingClientRect())||F,D=V(k,_),q=V(y,_),Z=V(P,_),G=Z||q;return Object(r.useEffect)((function(){function e(e){var t=d()(e);e.preventDefault(),!0===e.ctrlKey?(A.current+=t.pixelY/500,l.vview.setScaleFactor(A.current<0?1-A.current:1/(1+A.current)),l.hview.setScaleFactor(A.current<0?1-A.current:1/(1+A.current)),L.current&&clearTimeout(L.current),L.current=setTimeout((function(){Object(i.transaction)((function(){l.hview.setScaleFactor(1),l.vview.setScaleFactor(1),l.hview.zoomTo(A.current>0?l.hview.bpPerPx*(1+A.current):l.hview.bpPerPx/(1-A.current)),l.vview.zoomTo(A.current>0?l.vview.bpPerPx*(1+A.current):l.vview.bpPerPx/(1-A.current))})),A.current=0}),300)):(C.current+=t.pixelX,M.current-=t.pixelY,z.current||(z.current=!0,window.requestAnimationFrame((function(){Object(i.transaction)((function(){l.hview.scroll(C.current),l.vview.scroll(M.current)})),z.current=!1,C.current=0,M.current=0}))))}if(S.current){var t=S.current;return t.addEventListener("wheel",e),function(){t.removeEventListener("wheel",e)}}return function(){}}),[l.hview,l.vview]),Object(r.useEffect)((function(){function e(e){g([e.clientX,e.clientY])}return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]),Object(r.useEffect)((function(){var e=function(){};function t(e){D&&q&&Math.abs(D[0]-q[0])>3&&Math.abs(D[1]-q[1])>3?N([e.clientX,e.clientY]):w(void 0)}return D&&!Z&&(window.addEventListener("mouseup",t,!0),e=function(){window.removeEventListener("mouseup",t,!0)}),e}),[D,q,Z]),o.a.createElement("div",{ref:B,className:p.root},o.a.createElement(I,{model:l}),o.a.createElement("div",{className:p.container},o.a.createElement("div",{style:{display:"grid",transform:"scaleX(".concat(l.hview.scaleFactor,") scaleY(").concat(l.vview.scaleFactor,")")}},o.a.createElement(W,{model:l}),o.a.createElement(U,{model:l}),o.a.createElement("div",{ref:S,style:{position:"relative"},className:p.content},G?o.a.createElement("div",{ref:T,className:p.popover,style:{left:G[0]-(D&&G[0]-D[0]<0?X.width:0),top:G[1]-(D&&G[1]-D[1]<0?X.height:0)}},"x-".concat(J(G[0],s)),o.a.createElement("br",null),"y-".concat(J(v-G[1],f))):null,D&&G&&Math.abs(D[0]-G[0])>3&&Math.abs(D[1]-G[1])>3?o.a.createElement("div",{ref:R,className:p.popover,style:{left:D[0]-(G[0]-D[0]<0?0:Y.width),top:D[1]-(G[1]-D[1]<0?0:Y.height)}},"x-".concat(J(D[0],s)),o.a.createElement("br",null),"y-".concat(J(v-D[1],f))):null,o.a.createElement("div",{role:"presentation",style:{cursor:"crosshair"},onMouseDown:function(e){0===e.button&&(w([e.clientX,e.clientY]),g([e.clientX,e.clientY]))}},o.a.createElement(K,{model:l},D&&G?o.a.createElement("rect",{fill:"rgba(255,0,0,0.3)",x:Math.min(G[0],D[0]),y:Math.min(G[1],D[1]),width:Math.abs(G[0]-D[0]),height:Math.abs(G[1]-D[1])}):null)),o.a.createElement("div",{className:p.spacer})),o.a.createElement("div",{className:p.overlay},l.tracks.map((function(e){var t=Object(a.a)(e.displays,1)[0],n=t.RenderingComponent;return n?o.a.createElement(n,{key:Object(u.getConf)(e,"trackId"),model:t}):null}))),o.a.createElement(m.Menu,{open:Boolean(Z),onMenuItemClick:function(e,t){t(),N(void 0),w(void 0)},onClose:function(){N(void 0),w(void 0)},anchorReference:"anchorPosition",anchorPosition:P?{top:P[1]+30,left:P[0]+30}:void 0,style:{zIndex:1e3},menuItems:[{label:"Zoom in",onClick:function(){D&&Z&&l.zoomIn(D,Z)}},{label:"Open linear synteny view",onClick:function(){D&&Z&&l.onDotplotView(D,Z)}}]}))))})),Z=Object(c.observer)((function(e){var t=e.model,n=t.initialized,a=t.loading,r=t.error;return!n&&!a||r?o.a.createElement(k,{model:t}):a?o.a.createElement("div",null,o.a.createElement("p",null,"Loading..."),o.a.createElement(s.a,null)):o.a.createElement(q,{model:t})}));t.default=Z}});
//# sourceMappingURL=27.d6f72bf7381751b3c8a4.worker.js.map
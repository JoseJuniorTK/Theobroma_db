this.webpackChunk([1,2],{1387:function(e,t,n){"use strict";n.r(t),n.d(t,"bufferToString",(function(){return i})),n.d(t,"parseCsvBuffer",(function(){return d})),n.d(t,"parseTsvBuffer",(function(){return h}));var r=n(5),a=n.n(r),u=n(4),c=n(7),s=n(10),o=n(6);function i(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function m(e){return f.apply(this,arguments)}function f(){return f=Object(s.a)(a.a.mark((function e(t){var r,c,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},e.next=3,n.e(37).then(n.t.bind(null,1733,7)).then((function(e){return e.default}));case 3:return c=e.sent,e.abrupt("return",c(Object(u.a)({noheader:!0,output:"csv"},r)).fromString(i(t)));case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function l(e,t,n){var r,a=e.rows[0].cells[t].text||"",u="Text";try{r=Object(o.parseLocString)(a,n)}catch(c){}return r&&r.refName&&"number"===typeof r.start?u="LocString":/^\d+(\.\d+)?$/.test(a)&&(u="Number"),u}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},n=0,r={isLoaded:!0,rows:e.map((function(e,r){var a=r+(t.hasColumnNameLine?0:1);return e.length>n&&(n=e.length),{id:String(a),cells:e.map((function(e,t){return{columnNumber:t,text:e}}))}}))},a={};if(t.hasColumnNameLine&&void 0!==t.columnNameLineNumber){var u=r.rows.splice(t.columnNameLineNumber-1,1),s=Object(c.a)(u,1),i=s[0];i&&i.cells.forEach((function(e,t){a[t]=e.text||""}))}for(var m=[],f=[],p=function(e){f.push(e);var n=l(r,e,t.isValidRefName);"LocString"===n&&r.rows.forEach((function(n){var r=n.cells[e];r.extendedData=Object(o.parseLocString)(r.text,t.isValidRefName)})),m[e]={name:a[e],dataType:{type:n}}},d=0;d<n;d+=1)p(d);return{rowSet:r,columnDisplayOrder:f,hasColumnNames:!!t.hasColumnNameLine,columns:m,assemblyName:t.selectedAssemblyName}}function d(e){return y.apply(this,arguments)}function y(){return y=Object(s.a)(a.a.mark((function e(t){var n,r,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(t);case 3:return r=e.sent,e.abrupt("return",p(r,n));case 5:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function h(e){return N.apply(this,arguments)}function N(){return N=Object(s.a)(a.a.mark((function e(t){var n,r,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(t,{delimiter:"\t"});case 3:return r=e.sent,e.abrupt("return",p(r,n));case 5:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}},2131:function(e,t,n){"use strict";n.r(t),n.d(t,"removeBedHeaders",(function(){return f})),n.d(t,"parseBedBuffer",(function(){return l})),n.d(t,"parseBedPEBuffer",(function(){return d}));var r=n(5),a=n.n(r),u=n(10),c=n(1387),s="browser ".split("").map((function(e){return e.charCodeAt(0)})),o="track ".split("").map((function(e){return e.charCodeAt(0)})),i="#".split("").map((function(e){return e.charCodeAt(0)}));function m(e,t,n){for(var r=0;r<n.length;r+=1)if(t[e+r]!==n[r])return!1;return!0}function f(e){for(var t=0;t<e.length&&(m(t,e,s)||m(t,e,o)||m(t,e,i));t+=1)do{t+=1}while(10!==e[t]);return t?e.slice(t):e}function l(e,t){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(a.a.mark((function e(t,n){var r,u,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f(t),e.next=3,Object(c.parseTsvBuffer)(r);case 3:return u=e.sent,s=[{name:"chrom",dataType:{type:"LocRef"}},{name:"chromStart",dataType:{type:"LocStart"}},{name:"chromEnd",dataType:{type:"LocEnd"}},{name:"name",dataType:{type:"Text"}},{name:"score",dataType:{type:"Number"}},{name:"strand",dataType:{type:"Text"}}],u.columns.forEach((function(e,t){var n=s[t];n&&(e.name=n.name,e.dataType=n.dataType)})),u.hasColumnNames=!0,u.assemblyName=n.selectedAssemblyName,u.columnDisplayOrder.push(u.columnDisplayOrder.length),u.columns.unshift({name:"Location",dataType:{type:"LocString"},isDerived:!0,derivationFunctionText:"jexl:{text:row.cells[0].text+':'+row.cells[1].text+'..'+row.cells[2].text,\n\n    extendedData: {refName: row.cells.ref.text, start: parseInt(row.cells.start.text,10), end: parseInt(row.cells.end.text,10)}}"}),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(a.a.mark((function e(t,n){var r,u,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f(t),e.next=3,Object(c.parseTsvBuffer)(r);case 3:return u=e.sent,s=[{name:"chrom1",dataType:{type:"Text"},featureField:["refName"]},{name:"start1",dataType:{type:"Number"},featureField:["start"]},{name:"end1",dataType:{type:"Number"},featureField:["end"]},{name:"chrom2",dataType:{type:"Text"},featureField:["mate","refName"]},{name:"start2",dataType:{type:"Number"},featureField:["mate","start"]},{name:"end2",dataType:{type:"Number"},featureField:["mate","end"]},{name:"name",dataType:{type:"Text"},featureField:["name"]},{name:"score",dataType:{type:"Number"},featureField:["score"]},{name:"strand1",dataType:{type:"Text"},featureField:["strand"]},{name:"strand2",dataType:{type:"Text"},featureField:["mate","strand"]}],u.columns.forEach((function(e,t){var n=s[t];n&&(e.name=n.name,e.dataType=n.dataType)})),u.hasColumnNames=!0,u.rowSet.rows.forEach((function(e,t){var n={};e.cells.forEach((function(e,t){var r=e.text,a=s[t],u=a&&"Number"===a.dataType.type&&r?parseFloat(r):r;a?2===a.featureField.length?(n[a.featureField[0]]||(n[a.featureField[0]]={}),n[a.featureField[0]][a.featureField[1]]=u):n[a.featureField[0]]=u:n["column".concat(t+1)]=u})),n.uniqueId="bedpe-".concat(t),e.extendedData={feature:n}})),u.assemblyName=n.selectedAssemblyName,e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}});
//# sourceMappingURL=1.d6f72bf7381751b3c8a4.worker.js.map
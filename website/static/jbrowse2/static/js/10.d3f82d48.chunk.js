(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[10,11],{2538:function(e,t,r){"use strict";r.r(t),r.d(t,"removeBedHeaders",(function(){return p})),r.d(t,"parseBedBuffer",(function(){return f})),r.d(t,"parseBedPEBuffer",(function(){return d}));var n=r(87),a=r.n(n),u=r(91),c=r(697),s="browser ".split("").map((function(e){return e.charCodeAt(0)})),o="track ".split("").map((function(e){return e.charCodeAt(0)})),i="#".split("").map((function(e){return e.charCodeAt(0)}));function m(e,t,r){for(var n=0;n<r.length;n+=1)if(t[e+n]!==r[n])return!1;return!0}function p(e){for(var t=0;t<e.length&&(m(t,e,s)||m(t,e,o)||m(t,e,i));t+=1)do{t+=1}while(10!==e[t]);return t?e.slice(t):e}function f(e,t){return l.apply(this,arguments)}function l(){return(l=Object(u.a)(a.a.mark((function e(t,r){var n,u,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p(t),e.next=3,Object(c.parseTsvBuffer)(n);case 3:return u=e.sent,s=[{name:"chrom",dataType:{type:"LocRef"}},{name:"chromStart",dataType:{type:"LocStart"}},{name:"chromEnd",dataType:{type:"LocEnd"}},{name:"name",dataType:{type:"Text"}},{name:"score",dataType:{type:"Number"}},{name:"strand",dataType:{type:"Text"}}],u.columns.forEach((function(e,t){var r=s[t];r&&(e.name=r.name,e.dataType=r.dataType)})),u.hasColumnNames=!0,u.assemblyName=r.selectedAssemblyName,u.columnDisplayOrder.push(u.columnDisplayOrder.length),u.columns.unshift({name:"Location",dataType:{type:"LocString"},isDerived:!0,derivationFunctionText:"jexl:{text:row.cells[0].text+':'+row.cells[1].text+'..'+row.cells[2].text,\n\n    extendedData: {refName: row.cells.ref.text, start: parseInt(row.cells.start.text,10), end: parseInt(row.cells.end.text,10)}}"}),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(a.a.mark((function e(t,r){var n,u,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p(t),e.next=3,Object(c.parseTsvBuffer)(n);case 3:return u=e.sent,s=[{name:"chrom1",dataType:{type:"Text"},featureField:["refName"]},{name:"start1",dataType:{type:"Number"},featureField:["start"]},{name:"end1",dataType:{type:"Number"},featureField:["end"]},{name:"chrom2",dataType:{type:"Text"},featureField:["mate","refName"]},{name:"start2",dataType:{type:"Number"},featureField:["mate","start"]},{name:"end2",dataType:{type:"Number"},featureField:["mate","end"]},{name:"name",dataType:{type:"Text"},featureField:["name"]},{name:"score",dataType:{type:"Number"},featureField:["score"]},{name:"strand1",dataType:{type:"Text"},featureField:["strand"]},{name:"strand2",dataType:{type:"Text"},featureField:["mate","strand"]}],u.columns.forEach((function(e,t){var r=s[t];r&&(e.name=r.name,e.dataType=r.dataType)})),u.hasColumnNames=!0,u.rowSet.rows.forEach((function(e,t){var r={};e.cells.forEach((function(e,t){var n=e.text,a=s[t],u=a&&"Number"===a.dataType.type&&n?parseFloat(n):n;a?2===a.featureField.length?(r[a.featureField[0]]||(r[a.featureField[0]]={}),r[a.featureField[0]][a.featureField[1]]=u):r[a.featureField[0]]=u:r["column".concat(t+1)]=u})),r.uniqueId="bedpe-".concat(t),e.extendedData={feature:r}})),u.assemblyName=r.selectedAssemblyName,e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},697:function(e,t,r){"use strict";r.r(t),r.d(t,"bufferToString",(function(){return i})),r.d(t,"parseCsvBuffer",(function(){return d})),r.d(t,"parseTsvBuffer",(function(){return h}));var n=r(87),a=r.n(n),u=r(93),c=r(83),s=r(91),o=r(84);function i(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function m(e){return p.apply(this,arguments)}function p(){return p=Object(s.a)(a.a.mark((function e(t){var n,c,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},e.next=3,r.e(54).then(r.t.bind(null,1174,7)).then((function(e){return e.default}));case 3:return c=e.sent,e.abrupt("return",c(Object(u.a)({noheader:!0,output:"csv"},n)).fromString(i(t)));case 5:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e,t,r){var n,a=e.rows[0].cells[t].text||"",u="Text";try{n=Object(o.parseLocString)(a,r)}catch(c){}return n&&n.refName&&"number"===typeof n.start?u="LocString":/^\d+(\.\d+)?$/.test(a)&&(u="Number"),u}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},r=0,n={isLoaded:!0,rows:e.map((function(e,n){var a=n+(t.hasColumnNameLine?0:1);return e.length>r&&(r=e.length),{id:String(a),cells:e.map((function(e,t){return{columnNumber:t,text:e}}))}}))},a={};if(t.hasColumnNameLine&&void 0!==t.columnNameLineNumber){var u=n.rows.splice(t.columnNameLineNumber-1,1),s=Object(c.a)(u,1),i=s[0];i&&i.cells.forEach((function(e,t){a[t]=e.text||""}))}for(var m=[],p=[],l=function(e){p.push(e);var r=f(n,e,t.isValidRefName);"LocString"===r&&n.rows.forEach((function(r){var n=r.cells[e];n.extendedData=Object(o.parseLocString)(n.text,t.isValidRefName)})),m[e]={name:a[e],dataType:{type:r}}},d=0;d<r;d+=1)l(d);return{rowSet:n,columnDisplayOrder:p,hasColumnNames:!!t.hasColumnNameLine,columns:m,assemblyName:t.selectedAssemblyName}}function d(e){return y.apply(this,arguments)}function y(){return y=Object(s.a)(a.a.mark((function e(t){var r,n,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(t);case 3:return n=e.sent,e.abrupt("return",l(n,r));case 5:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return b=Object(s.a)(a.a.mark((function e(t){var r,n,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(t,{delimiter:"\t"});case 3:return n=e.sent,e.abrupt("return",l(n,r));case 5:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}}}]);
//# sourceMappingURL=10.d3f82d48.chunk.js.map
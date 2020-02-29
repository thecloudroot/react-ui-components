(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[33],{296:function(e,t,l){"use strict";l.r(t);var n=l(1),a=l(0),i=l.n(a),o=l(3),r=l(297),s=l(266),p=["property","description","default","type","value"],u=[{property:"onChange",description:"Handle files values",default:"",type:"function",value:"Return array of files"},{property:"value",description:"State value that holds uploaded file(-s)",default:"",type:"File[]",value:""},{property:"lifted",description:"Lift up the uploader",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color from list",default:"",type:"string",value:"primary | info | success | error"},{property:"disabled",description:"Make uploader disabled",default:"false",type:"boolean",value:"true | false"},{property:"borderType",description:"Set borders type",default:"",type:"string",value:"tile | smooth | rounded"},{property:"size",description:"Set input field size",default:"",type:"string",value:"medium | large"},{property:"multiple",description:"Allow choosing multiple files",default:"false",type:"boolean",value:"true | false"},{property:"accept",description:"Set accepted MIME types for files",default:"",type:"string",value:""},{property:"width",description:"Set Uploader width",default:"",type:"string | number",value:""},{property:"required",description:"Set Uploader required",default:"false",type:"boolean",value:"true | false"},{property:"title",description:"Set Uploader title",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];t.default=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),l=t[0],d=t[1],c=Object(a.createRef)(),f=Object(a.createRef)(),m=function(e){d((function(t){return t.filter((function(t){return t.name!==e}))}))};return i.a.createElement("div",{className:"rui-page",ref:f},i.a.createElement("div",{className:"row align-center space-between"},i.a.createElement("div",{className:"rui-page-title"},"Uploader Components"),i.a.createElement("div",{onClick:function(){c.current&&c.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold mr-10"},"API")),i.a.createElement(o.e,{outlined:!0,title:"Uploader"},i.a.createElement(o.C,{label:"File upload",value:l,title:"\u0421hoose a file please",color:"info",multiple:!0,onDelete:m,width:300,onChange:function(e){return d(e)}}),i.a.createElement("br",null),i.a.createElement(o.C,{label:"File upload",value:l,borderType:"rounded",title:"\u0421hoose a file please",color:"primary",multiple:!0,onDelete:m,width:300,onChange:function(e){return d(e)}}),i.a.createElement("br",null),i.a.createElement(o.C,{label:"File upload",value:l,title:"\u0421hoose a file please",size:"medium",borderType:"tile",color:"info",multiple:!0,onDelete:m,width:300,onChange:function(e){return d(e)}}),i.a.createElement("br",null),i.a.createElement(o.C,{label:"File upload",value:l,title:"\u0421hoose a file please",color:"info",disabled:!0,lifted:!0,onDelete:m,width:300,onChange:function(e){return d(e)}}),i.a.createElement(o.g,{icon:"code",iconSize:18,tooltip:"Code"},i.a.createElement(r.a,{language:"jsx",style:s.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Uploader } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [files, setFiles] = useState(\'\');\n\n    return (\n        <div>\n            <Uploader\n                label="File upload"\n                value={files}\n                title="\u0421hoose a file please"\n                color="info"\n                multiple\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n            <br/>\n            <Uploader\n                label="File upload"\n                value={files}\n                borderType="rounded"\n                title="\u0421hoose a file please"\n                color="primary"\n                multiple\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n            <br/>\n            <Uploader\n                label="File upload"\n                value={files}\n                title="\u0421hoose a file please"\n                size="medium"\n                borderType="tile"\n                color="info"\n                multiple\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n            <br/>\n            <Uploader\n                label="File upload"\n                value={files}\n                title="\u0421hoose a file please"\n                color="info"\n                disabled\n                lifted\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n        </div>\n    )\n}'))),i.a.createElement(o.a,{setRef:f,dark:!0,size:"medium"}),i.a.createElement("h2",{ref:c},"API"),i.a.createElement(o.y,{bordered:!0,headers:p,items:u,index:!0,itemTitles:p}))}}}]);
//# sourceMappingURL=33.chunk.js.map
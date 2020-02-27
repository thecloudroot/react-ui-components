(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[31],{292:function(e,l,t){"use strict";t.r(l);var a=t(2),n=t(0),i=t.n(n),o=t(4),r=t(293),s=t(265),d=["property","description","default","type","value"],p=[{property:"onChange",description:"Handle files values",default:"",type:"function",value:"Return array of files"},{property:"value",description:"State value that holds uploaded file(-s)",default:"",type:"File[]",value:""},{property:"lifted",description:"Lift up the uploader",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color from list",default:"",type:"string",value:"primary | info | success | error"},{property:"disabled",description:"Make uploader disabled",default:"false",type:"boolean",value:"true | false"},{property:"rounded",description:"Make border radius rounded",default:"false",type:"boolean",value:"true | false"},{property:"smooth",description:"Set input field borders more smooth",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set input field size",default:"",type:"string",value:"medium | large"},{property:"multiple",description:"Allow choosing multiple files",default:"false",type:"boolean",value:"true | false"},{property:"accept",description:"Set accepted MIME types for files",default:"",type:"string",value:""},{property:"width",description:"Set Uploader width",default:"",type:"string | number",value:""},{property:"required",description:"Set Uploader required",default:"false",type:"boolean",value:"true | false"},{property:"title",description:"Set Uploader title",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];l.default=function(){var e=Object(n.useState)(""),l=Object(a.a)(e,2),t=l[0],u=l[1],c=Object(n.createRef)(),f=Object(n.createRef)(),m=function(e){u((function(l){return l.filter((function(l){return l.name!==e}))}))};return i.a.createElement("div",{className:"rui-page",ref:f},i.a.createElement("div",{className:"row align-center space-between"},i.a.createElement("div",{className:"rui-page-title"},"Uploader Components"),i.a.createElement("div",{onClick:function(){c.current&&c.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold mr-10"},"API")),i.a.createElement(o.e,{outlined:!0,color:"primary",title:"Uploader"},i.a.createElement("span",{className:"fz-8 text-dark"},"Rounded Uploader"),i.a.createElement(o.z,{label:"File upload",value:t,rounded:!0,title:"\u0421hoose a file please",color:"info",multiple:!0,onDelete:m,width:300,onChange:function(e){return u(e)}}),i.a.createElement("br",null),i.a.createElement(o.z,{label:"File upload",value:t,rounded:!0,title:"\u0421hoose a file please",color:"success",multiple:!0,onDelete:m,width:300,onChange:function(e){return u(e)}}),i.a.createElement("br",null),i.a.createElement("span",{className:"fz-8 text-dark"},"Medium size Uploader"),i.a.createElement(o.z,{label:"File upload",value:t,title:"\u0421hoose a file please",size:"medium",color:"info",multiple:!0,onDelete:m,width:300,onChange:function(e){return u(e)}}),i.a.createElement("br",null),i.a.createElement("span",{className:"fz-8 text-dark"},"Disabled lifted Uploader"),i.a.createElement(o.z,{label:"File upload",value:t,title:"\u0421hoose a file please",color:"info",disabled:!0,lifted:!0,onDelete:m,width:300,onChange:function(e){return u(e)}}),i.a.createElement(o.g,{icon:"code",iconSize:18,tooltip:"Code"},i.a.createElement(r.a,{language:"jsx",style:s.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { InputField } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [files, setFiles] = useState(\'\');\n\n    return (\n        <div>\n            <span className="fz-8 text-dark">Rounded Uploader</span>\n            <Uploader\n                label="File upload"\n                value={files}\n                rounded\n                title="\u0421hoose a file please"\n                color="info"\n                multiple\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n            <br/>\n            <Uploader\n                label="File upload"\n                value={files}\n                rounded\n                title="\u0421hoose a file please"\n                color="success"\n                multiple\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n            <br/>\n            <span className="fz-8 text-dark">Medium size Uploader</span>\n            <Uploader\n                label="File upload"\n                value={files}\n                title="\u0421hoose a file please"\n                size="medium"\n                color="info"\n                multiple\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n            <br/>\n            <span className="fz-8 text-dark">Disabled lifted Uploader</span>\n            <Uploader\n                label="File upload"\n                value={files}\n                title="\u0421hoose a file please"\n                color="info"\n                disabled\n                lifted\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n        </div>\n    )\n}'))),i.a.createElement(o.a,{setRef:f,dark:!0,size:"medium"}),i.a.createElement("h2",{ref:c},"API"),i.a.createElement(o.v,{bordered:!0,headers:d,items:p,index:!0,itemTitles:d}))}}}]);
//# sourceMappingURL=31.chunk.js.map
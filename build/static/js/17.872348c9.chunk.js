(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[17],{339:function(e,a,t){"use strict";t.r(a);var r=t(2),n=t(0),l=t.n(n),c=t(3),s=t(50),o=t.n(s),i=t(47),m=[{property:"color",description:"Set divider color",default:"",type:"string",value:"primary | info | success | error | secondary"},{property:"dark",description:"Set dark theme",default:"false",type:"boolean",value:"true | false"},{property:"vertical",description:"Set vertical divider",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u=["primary","info","success","error","secondary"];a.default=function(){var e=Object(n.useState)(u[4]),a=Object(r.a)(e,2),t=a[0],s=a[1];return(l.a.createElement(c.T.Consumer,null,(function(e){return l.a.createElement(i.a,{usage:"// Usage examples\nimport React from 'react';\nimport { Divider } from '@assenti/react-ui-components';\n\nfunction Example() {\n    return (\n        <>\n            <Divider/>\n        </>\n    )\n}",apiDescItems:m,componentName:"<Divider/>"},l.a.createElement(c.K,{items:u,prefix:l.a.createElement(c.z,{name:"brush"}),width:200,dark:e,label:"Color",color:"primary",value:t,className:"mb-20",onChange:function(e){return s(e)}}),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement(c.c,{img:o.a,dark:e,height:100}),l.a.createElement(c.r,{vertical:!0,color:t}),l.a.createElement("div",null,l.a.createElement("h2",{className:"text-primary"},"John Doe"),l.a.createElement("p",{className:"text-dark"},"jdoe@awesome.mail"))),l.a.createElement(c.r,{color:t}),l.a.createElement("p",null,"Age: 33"),l.a.createElement("p",null,"Birth date: 1987/1/1"),l.a.createElement("p",null,"Address: 13, Friday str., NYC"))})))}},47:function(e,a,t){"use strict";var r=t(2),n=t(0),l=t.n(n),c=t(3),s=t(343),o=t(291),i=t(292),m=["property","description","default","type","value"];a.a=function(e){var a=Object(n.useRef)(),t=Object(n.useState)(!1),u=Object(r.a)(t,2),p=u[0],d=u[1];return l.a.createElement(c.T.Consumer,null,(function(t){return l.a.createElement("div",{className:"rui-page",ref:a},l.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),l.a.createElement(c.k,{dark:t,header:l.a.createElement("h4",null,"Usage")},e.children,l.a.createElement(c.n,{className:"mt-10",extra:l.a.createElement(c.o,{defaultText:"Copy code",text:e.usage,dark:t}),onChange:function(e){return d(e)},customToggler:l.a.createElement(c.h,{className:"ml-20",name:p?"Close":"Open",icon:"code",color:"info"}),dark:t},l.a.createElement(s.a,{language:"jsx",style:t?o.a:i.a},e.usage))),e.backTopBtn?l.a.createElement(c.e,{dark:!0,setRef:a,size:"medium",tooltip:"Up"}):null,l.a.createElement(c.k,{className:"mt-10"},l.a.createElement(c.P,{tableTitle:l.a.createElement("h2",null,"API"),dark:t,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:m})))}))}},50:function(e,a,t){e.exports=t.p+"static/media/man.e941ef11.png"}}]);
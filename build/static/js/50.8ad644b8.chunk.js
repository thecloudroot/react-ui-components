(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[50],{324:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(0),i=a.n(l),o=a(3),r=a(47),s=[{property:"items",description:"Timeline data array",default:"",type:"object[]",value:""},{property:"date",description:"Set timeline date key",default:"",type:"string",value:""},{property:"title",description:"Set timeline title key",default:"",type:"string",value:""},{property:"subtitle",description:"Set timeline subtitle key",default:"",type:"string",value:""},{property:"data",description:"Set timeline custom data",default:"",type:"any",value:""},{property:"centered",description:"Set timeline position to center",default:"false",type:"boolean",value:"true | false"},{property:"flatCard",description:"Set timeline data card flat",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set timeline color",default:"",type:"string",value:"primary | info | success | error | yellow | dark"},{property:"tagColor",description:"Set date Tag color",default:"",type:"string",value:"primary | info | success | error | yellow | dark"},{property:"tagOutlined",description:"Set timeline date Tag outlined",default:"",type:"boolean",value:"true | false"},{property:"icon",description:"Set icon",default:"",type:"string",value:"home | search | etc. (see icon names list in docs)"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],u=[{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"},{date:"2020-02-29",title:"Some event on Feb 29th",subtitle:"Some subtitle"}],c=["primary","info","success","error","dark","yellow"];t.default=function(){var e=Object(l.useState)(!1),t=Object(n.a)(e,2),a=t[0],m=t[1],b=Object(l.useState)(!1),p=Object(n.a)(b,2),d=p[0],S=p[1],y=Object(l.useState)(c[0]),f=Object(n.a)(y,2),h=f[0],v=f[1],g=Object(l.useState)(c[1]),E=Object(n.a)(g,2),k=E[0],F=E[1];return i.a.createElement(o.T.Consumer,null,(function(e){return i.a.createElement(r.a,{usage:"// Usage examples\nimport React from 'react';\nimport { Timeline } from '@assenti/react-ui-components';\nconst colors = ['primary', 'info', 'success', 'error', 'dark', 'yellow'];\nconst items = [\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },\n    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' }\n]\n\nfunction Example() {\n    return (\n        <>\n            <Timeline \n                items={items} \n                date=\"date\"\n                centered\n                color=\"primary\"\n                title=\"title\"\n                subtitle=\"subtitle\"/>\n        </>\n    )\n}",apiDescItems:s,backTopBtn:!0,componentName:"<Timeline/>"},i.a.createElement(o.O,{color:"primary",check:a,rightLabel:"Icon",className:"my-10",onChange:function(){return m(!a)}}),i.a.createElement("br",null),i.a.createElement(o.O,{color:"primary",check:d,className:"my-10",rightLabel:"Tag outlined",onChange:function(){return S(!d)}}),i.a.createElement("div",null,i.a.createElement(o.K,{items:c,prefix:i.a.createElement(o.z,{name:"brush"}),width:200,label:"Timeline color",color:"primary",className:"mr-10",dark:e,value:h,onChange:function(e){return v(e)}}),i.a.createElement(o.K,{items:c,prefix:i.a.createElement(o.z,{name:"brush"}),width:200,color:"primary",label:"Tag color",value:k,dark:e,onChange:function(e){return F(e)}})),i.a.createElement(o.r,null),i.a.createElement(o.V,{items:u,date:"date",centered:!0,color:h,tagOutlined:d,tagColor:k,icon:a?"star":"",title:"title",subtitle:"subtitle"}))}))}},47:function(e,t,a){"use strict";var n=a(2),l=a(0),i=a.n(l),o=a(3),r=a(343),s=a(291),u=a(292),c=["property","description","default","type","value"];t.a=function(e){var t=Object(l.useRef)(),a=Object(l.useState)(!1),m=Object(n.a)(a,2),b=m[0],p=m[1];return i.a.createElement(o.T.Consumer,null,(function(a){return i.a.createElement("div",{className:"rui-page",ref:t},i.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),i.a.createElement(o.k,{dark:a,header:i.a.createElement("h4",null,"Usage")},e.children,i.a.createElement(o.n,{className:"mt-10",extra:i.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return p(e)},customToggler:i.a.createElement(o.h,{className:"ml-20",name:b?"Close":"Open",icon:"code",color:"info"}),dark:a},i.a.createElement(r.a,{language:"jsx",style:a?s.a:u.a},e.usage))),e.backTopBtn?i.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,i.a.createElement(o.k,{className:"mt-10"},i.a.createElement(o.P,{tableTitle:i.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:c})))}))}}}]);
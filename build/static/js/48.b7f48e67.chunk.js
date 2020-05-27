(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[48],{334:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),l=a.n(n),o=a(3),c=a(47),u=[{property:"onChange",description:"Handle textarea value change",default:"",type:"function",value:"return an input change event object"},{property:"value",description:"Input value",default:"",type:"string",value:""},{property:"rows",description:"Set textarea rows count",default:"1",type:"number",value:""},{property:"maxRows",description:"Set maximum textarea rows",default:"10",type:"number",value:""},{property:"clearable",description:"Allow clear icon on value inputted",default:"false",type:"boolean",value:"true | false"},{property:"onClear",description:"Invokes on clear icon click",default:"",type:"function",value:""},{property:"label",description:"Set label",default:"",type:"string",value:""},{property:"hint",description:"Set hint",default:"",type:"string",value:""},{property:"hintColor",description:"Set hint color",default:"",type:"string",value:"success | error"},{property:"lifted",description:"Lift up the TextareaField",default:"false",type:"boolean",value:"true | false"},{property:"autoFocus",description:"Set focus on component mounted",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color",default:"",type:"string",value:"primary | info | success | error"},{property:"disabled",description:"Set disabled flag",default:"false",type:"boolean",value:"true | false"},{property:"borderType",description:"Set borders type",default:"",type:"string",value:"tile | smooth"},{property:"uppercase",description:"Transform text to upper case",default:"false",type:"boolean",value:"true | false"},{property:"prefix",description:"Set prefix",default:"",type:"any",value:""},{property:"suffix",description:"Set suffix",default:"",type:"any",value:""},{property:"width",description:"Set width",default:"",type:"string | number",value:""},{property:"required",description:"Set required",default:"false",type:"boolean",value:"true | false"},{property:"readOnly",description:"Set readOnly",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"whiteBackground",description:"Set background color to white",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],i=["primary","info","success","error"],s=["default","smooth","tile"];t.default=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],p=t[1],m=Object(n.useState)(i[0]),d=Object(r.a)(m,2),f=d[0],y=d[1],b=Object(n.useState)(s[0]),h=Object(r.a)(b,2),g=h[0],v=h[1],E=Object(n.useState)(!1),O=Object(r.a)(E,2),S=O[0],x=O[1],k=Object(n.useState)(!1),j=Object(r.a)(k,2),C=j[0],w=j[1],T=Object(n.useState)(!0),N=Object(r.a)(T,2),L=N[0],R=N[1],I=Object(n.useState)(!1),F=Object(r.a)(I,2),P=F[0],q=F[1],z=Object(n.useState)(!1),B=Object(r.a)(z,2),D=B[0],U=B[1],K=Object(n.useState)(!1),A=Object(r.a)(K,2),H=A[0],J=A[1],V=Object(n.useState)(!1),W=Object(r.a)(V,2),G=W[0],M=W[1],Q=Object(n.useState)(!0),X=Object(r.a)(Q,2),Y=X[0],Z=X[1];return l.a.createElement(o.T.Consumer,null,(function(e){return l.a.createElement(c.a,{usage:"// Usage examples\nimport React, { useState } from 'react';\nimport { TextareaField } from '@assenti/react-ui-components';\n\nfunction Example() {\n    const [text, setText] = useState('');\n\n    return (\n        <>\n            <TextareaField\n                value={text}\n                maxRows={20}\n                color=\"primary\"\n                rows={4}\n                width={300}\n                onChange={e => setText(e.target.value)}/>\n        </>\n    )\n}",apiSearchable:!0,componentName:"<TextareaField/>",apiDescItems:u},l.a.createElement(o.K,{items:i,prefix:l.a.createElement(o.z,{name:"brush"}),width:200,dark:e,label:"Color",color:"primary",className:"ml-5",value:f,onChange:function(e){return y(e)}}),l.a.createElement("br",null),l.a.createElement(o.K,{items:s,prefix:l.a.createElement(o.z,{name:"shape"}),width:200,dark:e,label:"Border type",color:"primary",className:"ml-5",value:g,onChange:function(e){return v(e)}}),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:S,rightLabel:"Required",className:"my-10 ml-5",onChange:function(){return x(!S)}}),l.a.createElement(o.O,{color:"primary",check:L,rightLabel:"Label",className:"my-10 ml-5",onChange:function(){return R(!L)}}),l.a.createElement("br",null),l.a.createElement(o.O,{color:"primary",check:C,rightLabel:"Hint",className:"my-10 ml-5",onChange:function(){return w(!C)}}),l.a.createElement(o.O,{color:"primary",check:P,rightLabel:"White background",className:"my-10 ml-5",onChange:function(){return q(!P)}}),l.a.createElement("br",null),l.a.createElement(o.O,{check:H,color:"primary",rightLabel:"Uppercase",className:"my-10 ml-5",onChange:function(){return J(!H)}}),l.a.createElement(o.O,{check:D,color:"primary",rightLabel:"Lifted",className:"my-10 ml-5",onChange:function(){return U(!D)}}),l.a.createElement("br",null),l.a.createElement(o.O,{check:G,color:"primary",rightLabel:"Prefix",className:"my-10 ml-5",onChange:function(){return M(!G)}}),l.a.createElement(o.O,{check:Y,color:"primary",rightLabel:"Placeholder",className:"my-10 ml-5",onChange:function(){return Z(!Y)}}),l.a.createElement(o.r,null),l.a.createElement("br",null),l.a.createElement(o.S,{prefix:G?l.a.createElement(o.z,{name:"edit"}):null,label:L?"Textarea field":null,placeholder:Y?"Textarea field":null,hint:C?"I am a hint":null,value:a,dark:e,lifted:D,whiteBackground:P,required:S,maxRows:20,borderType:g,color:f,rows:4,width:300,onChange:function(e){return p(e.target.value)}}))}))}},47:function(e,t,a){"use strict";var r=a(2),n=a(0),l=a.n(n),o=a(3),c=a(343),u=a(291),i=a(292),s=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),p=Object(r.a)(a,2),m=p[0],d=p[1];return l.a.createElement(o.T.Consumer,null,(function(a){return l.a.createElement("div",{className:"rui-page",ref:t},l.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),l.a.createElement(o.k,{dark:a,header:l.a.createElement("h4",null,"Usage")},e.children,l.a.createElement(o.n,{className:"mt-10",extra:l.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return d(e)},customToggler:l.a.createElement(o.h,{className:"ml-20",name:m?"Close":"Open",icon:"code",color:"info"}),dark:a},l.a.createElement(c.a,{language:"jsx",style:a?u.a:i.a},e.usage))),e.backTopBtn?l.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,l.a.createElement(o.k,{className:"mt-10"},l.a.createElement(o.P,{tableTitle:l.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:s})))}))}}}]);
(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[15],{285:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(3),l=a(313),s=a(271),i=["property","description","default","type","value"],u=[{property:"checked",description:"define the checkbox state",default:"",type:"boolean",value:"true | false"},{property:"onChange",description:"handle checkbox change",default:"",type:"function",value:""},{property:"disable",description:"Make checkbox disabled",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color of checkbox from list",default:"",type:"string",value:"primary | info | success | error"},{property:"size",description:"Set checkbox size",default:"",type:"string",value:"medium | large"},{property:"label",description:"Set checkbox label",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],m="// Usage examples\nimport React, { useState } from 'react';\nimport { Checkbox, Select, Icon, Switch } from '@assenti/rui-components';\nconst colors = ['secondary', 'primary', 'info', 'success', 'error'];\nconst sizes = ['default', 'medium', 'large'];\n\nfunction Example() {\n    const [check, setCheck] = useState(true);\n    const [label, setLabel] = useState(false);\n    const [color, setColor] = useState(colors[1]);\n    const [size, setSize] = useState(sizes[0]);\n\n    return (\n        <div>\n            <Select\n                items={colors}\n                prefix={<Icon name=\"brush\"/>}\n                width={200}\n                label=\"Checkbox color\"\n                color=\"primary\"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <Select\n                items={sizes}\n                prefix={<Icon name=\"format-size\"/>}\n                width={200}\n                label=\"Checkbox size\"\n                color=\"primary\"\n                value={size}\n                onChange={v => setSize(v)}/>\n            <br/>\n            <Switch \n                color=\"primary\" \n                check={label}\n                rightLabel=\"Label\"\n                className=\"my-10\"\n                onChange={() => setLabel(!label)}/>\n            <br/>\n            <div className=\"pa-10\">\n                <Checkbox\n                    checked={check}\n                    color={color}\n                    size={size}\n                    label={label ? 'Checkbox' : null} \n                    onChange={() => setCheck(!check)}/>\n            </div>\n        </div>\n    )\n}",p=["secondary","primary","info","success","error"],b=["default","medium","large"];t.default=function(){var e=Object(r.useState)(!0),t=Object(n.a)(e,2),a=t[0],h=t[1],d=Object(r.useState)(!1),f=Object(n.a)(d,2),y=f[0],k=f[1],C=Object(r.useState)(p[1]),x=Object(n.a)(C,2),g=x[0],v=x[1],S=Object(r.useState)(b[0]),E=Object(n.a)(S,2),z=E[0],j=E[1];return c.a.createElement("div",{className:"rui-page"},c.a.createElement("div",{className:"rui-page-title"},"Checkbox Component"),c.a.createElement(o.h,{outlined:!0,title:"Checkbox usage"},c.a.createElement(o.C,{items:p,prefix:c.a.createElement(o.q,{name:"brush"}),width:200,label:"Checkbox color",color:"primary",value:g,onChange:function(e){return v(e)}}),c.a.createElement("br",null),c.a.createElement(o.C,{items:b,prefix:c.a.createElement(o.q,{name:"format-size"}),width:200,label:"Checkbox size",color:"primary",value:z,onChange:function(e){return j(e)}}),c.a.createElement("br",null),c.a.createElement(o.D,{color:"primary",check:y,rightLabel:"Label",className:"my-10",onChange:function(){return k(!y)}}),c.a.createElement("br",null),c.a.createElement("div",{className:"pa-10"},c.a.createElement(o.i,{checked:a,color:g,size:z,label:y?"Checkbox":null,onChange:function(){return h(!a)}})),c.a.createElement(o.j,{icon:"code",iconSize:18,extra:c.a.createElement(o.k,{defaultText:"Copy code",text:m,className:"mr-10"}),tooltip:"Show/Hide Code"},c.a.createElement(l.a,{language:"jsx",style:s.a},m))),c.a.createElement("h2",null,"API"),c.a.createElement(o.E,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:u,index:!0,itemTitles:i}))}}}]);
//# sourceMappingURL=15.chunk.js.map
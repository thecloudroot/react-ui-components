(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[27],{280:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),o=n.n(i),l=n(3),r=n(297),c=n(266),s=["Nur-Sultan","Almaty","Shymkent"],u=["Washington, D.C.","New York City","Chicago"],d=["property","description","default","type","value"],p=[{property:"onChange",description:"Handle radio change",default:"",type:"function",value:"return a radio value"},{property:"name",description:"Set radio group name",default:"",type:"string",value:""},{property:"value",description:"Chosen value",default:"",type:"string",value:""},{property:"disabled",description:"Make button disabled",default:"false",type:"boolean",value:"true | false"},{property:"vertical",description:"Make position vertical",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];t.default=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],m=t[1],y=Object(i.useState)(""),v=Object(a.a)(y,2),g=v[0],f=v[1],h=Object(i.useState)(!0),C=Object(a.a)(h,2),S=C[0],b=C[1];return o.a.createElement("div",{className:"rui-page"},o.a.createElement("div",{className:"rui-page-title"},"Radio Group"),o.a.createElement(l.e,{outlined:!0,title:"Horizontal position with label"},o.a.createElement(l.v,{value:g,name:"town",onChange:function(e){return f(e)},options:s}),o.a.createElement(l.n,{value:g,placeholder:"Choose a city",readOnly:!0,color:"info",prefix:o.a.createElement(l.m,{name:"city"}),width:270}),o.a.createElement(l.g,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(r.a,{language:"jsx",style:c.a},"// Usage examples\nimport React, { useState } from 'react';\nimport { InputField, RadioGroup } from '@assenti/rui-components';\nconst cities = ['Nur-Sultan', 'Almaty', 'Shymkent'];\n\nfunction Example() {\n    const [city, setCity] = useState('');\n\n    return (\n        <div>\n            <RadioGroup \n                value={city}\n                name=\"town\" \n                onChange={(value) => setCity(value)}\n                options={cities}/>\n            <InputField \n                value={city} \n                placeholder=\"Choose a city\" \n                readOnly\n                color=\"info\"\n                prefix={<Icon name=\"city\"/>}\n                width={270}/>\n        </div>\n    )\n}"))),o.a.createElement("br",null),o.a.createElement(l.e,{outlined:!0,title:"Vertical position with label"},o.a.createElement(l.v,{value:n,vertical:!0,name:"city",onChange:function(e){return m(e)},options:u}),o.a.createElement(l.n,{value:n,placeholder:"Choose a city",readOnly:!0,color:"info",rounded:!0,prefix:o.a.createElement(l.m,{name:"city"}),width:270}),o.a.createElement(l.g,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(r.a,{language:"jsx",style:c.a},"// Usage examples\nimport React, { useState } from 'react';\nimport { InputField, RadioGroup } from '@assenti/rui-components';\nconst citiesUS = ['Washington, D.C.', 'New York City', 'Chicago'];\n\nfunction Example() {\n    const [cityUS, setCityUS] = useState('');\n\n    return (\n        <div>\n            <RadioGroup \n                value={cityUS} \n                vertical\n                name=\"city\"\n                onChange={(value) => setCityUS(value)}\n                options={citiesUS}/>\n            <InputField \n                value={cityUS} \n                placeholder=\"Choose a city\" \n                readOnly\n                color=\"info\"\n                rounded\n                prefix={<Icon name=\"city\"/>}\n                width={270}/>\n        </div>\n    )\n}"))),o.a.createElement("br",null),o.a.createElement(l.e,{outlined:!0,title:"Disabled"},o.a.createElement("div",{className:"row align-center"},o.a.createElement(l.c,{className:"ml-15",color:"info",name:"Toggle disabling",onClick:function(){return b(!S)}})),o.a.createElement(l.v,{value:n,vertical:!0,name:"city",disabled:S,onChange:function(e){return m(e)},options:u}),o.a.createElement(l.g,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(r.a,{language:"jsx",style:c.a},"// Usage examples\nimport React, { useState } from 'react';\nimport { InputField, RadioGroup } from '@assenti/rui-components';\nconst citiesUS = ['Washington, D.C.', 'New York City', 'Chicago'];\n\nfunction Example() {\n    const [cityUS, setCityUS] = useState('');\n    const [isDisabled, setIsDisabled] = useState(true);\n\n    return (\n        <div>\n            <div className=\"row align-center\">\n                <Button \n                    className=\"ml-15\"\n                    color=\"info\"\n                    name=\"Toggle disabling\" \n                    onClick={() => setIsDisabled(!isDisabled)}/>\n            </div>\n            <RadioGroup \n                value={cityUS} \n                vertical\n                name=\"city\"\n                disabled={isDisabled}\n                onChange={(value) => setCityUS(value)}\n                options={citiesUS}/>\n        </div>\n    )\n}"))),o.a.createElement("h2",null,"API"),o.a.createElement(l.y,{bordered:!0,headers:d,items:p,index:!0,itemTitles:d}))}}}]);
//# sourceMappingURL=27.chunk.js.map
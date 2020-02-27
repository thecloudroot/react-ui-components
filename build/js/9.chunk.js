(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[9],{274:function(e,c,n){"use strict";n.r(c);var a=n(2),t=n(0),o=n.n(t),r=n(4),l=n(293),s=n(265),i=["property","description","default","type","value"],h=[{property:"checked",description:"define the checkbox state",default:"",type:"boolean",value:"true | false"},{property:"onChange",description:"handle checkbox change",default:"",type:"function",value:""},{property:"disable",description:"Make checkbox disabled",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color of checkbox from list",default:"",type:"string",value:"primary | info | success | error"},{property:"label",description:"Set checkbox label",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];c.default=function(){var e=Object(t.useState)(!0),c=Object(a.a)(e,2),n=c[0],m=c[1],k=Object(t.useState)(!0),u=Object(a.a)(k,2),p=u[0],d=u[1];return o.a.createElement("div",{className:"rui-page"},o.a.createElement("div",{className:"rui-page-title"},"Checkbox Component"),o.a.createElement(r.e,{outlined:!0,color:"primary",title:"Simple checkboxes"},o.a.createElement("div",{className:"row"},o.a.createElement(r.f,{className:"mr-20",checked:n,onChange:function(){return m(!n)}}),o.a.createElement(r.f,{className:"mr-20",checked:n,color:"primary",onChange:function(){return m(!n)}}),o.a.createElement(r.f,{className:"mr-20",checked:n,color:"info",onChange:function(){return m(!n)}}),o.a.createElement(r.f,{className:"mr-20",checked:n,color:"error",onChange:function(){return m(!n)}}),o.a.createElement(r.f,{className:"mr-20",checked:n,disabled:!0,onChange:function(){return m(!n)}})),o.a.createElement(r.g,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(l.a,{language:"jsx",style:s.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Checkbox } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [check, setCheck] = useState(true);\n\n    return (\n        <div className="row">\n            <Checkbox\n                className="mr-20" \n                checked={check} \n                onChange={() => setCheck(!check)}/>\n            <Checkbox\n                className="mr-20" \n                checked={check} \n                color="primary" \n                onChange={() => setCheck(!check)}/>\n            <Checkbox \n                className="mr-20"\n                checked={check} \n                color="info" \n                onChange={() => setCheck(!check)}/>\n            <Checkbox \n                className="mr-20"\n                checked={check} \n                color="error" \n                onChange={() => setCheck(!check)}/>\n            <Checkbox \n                className="mr-20"\n                checked={check} \n                disabled\n                onChange={() => setCheck(!check)}/>\n        </div>\n    )\n}\n'))),o.a.createElement("br",null),o.a.createElement(r.e,{outlined:!0,color:"primary",title:"Checkboxes with label"},o.a.createElement("div",{className:"row"},o.a.createElement(r.f,{className:"mr-20",label:"Checkbox",color:"primary",checked:p,onChange:function(){return d(!p)}}),o.a.createElement(r.f,{label:"Checkbox",color:"info",checked:p,onChange:function(){return d(!p)}})),o.a.createElement(r.g,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(l.a,{language:"jsx",style:s.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Checkbox } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [checkLabel, setCheckLabel] = useState(true);\n\n    return (\n        <div className="row">\n            <Checkbox\n                className="mr-20"\n                label="Checkbox"\n                color="primary" \n                checked={checkLabel} \n                onChange={() => setCheckLabel(!checkLabel)}/>\n            <Checkbox\n                label="Checkbox"\n                color="info" \n                checked={checkLabel} \n                onChang e={() => setCheckLabel(!checkLabel)}/>\n        </div>\n    )\n}\n'))),o.a.createElement("h2",null,"API"),o.a.createElement(r.v,{bordered:!0,headers:i,items:h,index:!0,itemTitles:i}))}}}]);
//# sourceMappingURL=9.chunk.js.map
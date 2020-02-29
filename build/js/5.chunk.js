(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[5],{284:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n(0),o=n.n(r),l=n(3),s=n(297),c=n(266),i=["property","description","default","type","value"],m=[{property:"value",description:"Set badge value",default:"",type:"string | number",value:""},{property:"color",description:"Set badge color",default:"",type:"string",value:"primary | info | success | error"},{property:"rounded",description:"Set rounded badge borders",default:"",type:"boolean",value:"true | false"},{property:"parent",description:"Parent component for badge",default:"",type:"any",value:""},{property:"visible",description:"Badge visible state",default:"",type:"boolean",value:"true | false"}];a.default=function(){var e=Object(r.useState)(!0),a=Object(t.a)(e,2),n=a[0],p=a[1];return o.a.createElement("div",{className:"rui-page"},o.a.createElement("div",{className:"rui-page-title"},"Badge Component"),o.a.createElement(l.e,{outlined:!0,title:"Usage"},o.a.createElement("div",{className:"row align-center py-10"},o.a.createElement(l.b,{color:"info",value:100,className:"mr-20",parent:o.a.createElement(l.m,{size:24,name:"account"})}),o.a.createElement(l.b,{color:"error",value:10,rounded:!0,className:"mr-20",parent:o.a.createElement(l.m,{size:24,name:"smartphone"})}),o.a.createElement(l.b,{color:"error",value:10,rounded:!0,visible:n,className:"mr-20",parent:o.a.createElement(l.m,{size:24,name:"smartphone"})}),o.a.createElement(l.c,{name:"Toggle badge",color:"info",onClick:function(){return p(!n)}})),o.a.createElement(l.g,{icon:"code",iconSize:18,tooltip:"Code"},o.a.createElement(s.a,{language:"jsx",style:c.a},'// Usage examples\nimport React from \'react\';\nimport { Badge, Button } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [badge, setBadge] = useState(true);\n\n    return (\n        <div className="row align-center">\n            <Badge \n                color="info" \n                value={100} \n                className="mr-20"\n                parent={<Icon size={24} name="account"/>}/>\n            <Badge \n                color="error" \n                value={10} \n                rounded\n                className="mr-20"\n                parent={<Icon size={24} name="smartphone"/>}/>\n            <Badge \n                color="error" \n                value={10} \n                rounded\n                visible={badge}\n                className="mr-20"\n                parent={<Icon size={24} name="smartphone"/>}/>\n            <Button name="Toggle badge" color="info" onClick={() => setBadge(!badge)}/>\n        </div>\n    )\n}'))),o.a.createElement("h2",null,"API"),o.a.createElement(l.y,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:m,index:!0,itemTitles:i}))}}}]);
//# sourceMappingURL=5.chunk.js.map
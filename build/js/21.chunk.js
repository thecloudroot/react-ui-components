(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[21],{295:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),o=r.n(a),l=r(3),c=r(313),i=r(271),s=["property","description","default","type","value"],u=[{property:"title",description:"Set Header title",default:"",type:"any",value:""},{property:"height",description:"Set Header height",default:"50px",type:"string | number",value:""},{property:"color",description:"Set Header background color",default:"",type:"string",value:"primary | info | success | info | black"},{property:"sticky",description:"Set Header position sticky",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"leftControl",description:"Set control button on left side",default:"false",type:"boolean",value:"true | false"},{property:"leftControlIcon",description:"Set control button icon (see icons list)",default:"menu",type:"string",value:""},{property:"onLeftControl",description:"Invokes on left control click",default:"",type:"function",value:""},{property:"rightSide",description:"Set right side elements",default:"",type:"any",value:""},{property:"smooth",description:"Make header borders smooth",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],m='// Usage examples\nimport React, { useState } from \'react\';\nimport { Header, Button, Select, Icon, Switch } from \'@assenti/react-ui-components\';\nconst colors = [\'default\', \'primary\', \'info\', \'success\', \'error\', \'black\'];\n\nfunction Example() {\n    const [color, setColor] = useState(colors[0]);\n    const [dark, setDark] = useState(false);\n    const [smooth, setSmooth] = useState(false);\n    const [leftControl, setLeftControl] = useState(true);\n    const [rightSide, setRightSide] = useState(false);\n\n    return (\n        <div>\n            <Select\n                items={colors}\n                prefix={<Icon name="brush"/>}\n                width={200}\n                label="Color theme"\n                color="primary"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={dark}\n                rightLabel="Dark"\n                className="my-10"\n                onChange={() => setDark(!dark)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={smooth}\n                rightLabel="Smooth borders"\n                className="my-10"\n                onChange={() => setSmooth(!smooth)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={rightSide}\n                rightLabel="Right side"\n                className="my-10"\n                onChange={() => setRightSide(!rightSide)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={leftControl}\n                rightLabel="Left control"\n                className="my-10"\n                onChange={() => setLeftControl(!leftControl)}/>\n            <br/>\n            <Header\n                color={!dark ? color : null}\n                smooth={smooth}\n                dark={dark}\n                title="Header light" \n                leftControl={leftControl}\n                rightSide={rightSide ?\n                    <Button \n                        dark={dark || (color && color !== \'default\')}\n                        light={color === \'default\' && !dark}\n                        icon="account"/> : null}/>\n        </div>\n    )\n}',d=["default","primary","info","success","error","black"];t.default=function(){var e=Object(a.useState)(d[0]),t=Object(n.a)(e,2),r=t[0],p=t[1],h=Object(a.useState)(!1),f=Object(n.a)(h,2),y=f[0],b=f[1],g=Object(a.useState)(!1),S=Object(n.a)(g,2),k=S[0],C=S[1],E=Object(a.useState)(!0),v=Object(n.a)(E,2),L=v[0],N=v[1],j=Object(a.useState)(!1),w=Object(n.a)(j,2),H=w[0],x=w[1];return o.a.createElement("div",{className:"rui-page"},o.a.createElement("div",{className:"row align-center space-between"},o.a.createElement("div",{className:"rui-page-title"},"Header Component")),o.a.createElement(l.h,{outlined:!0,title:"Header usage"},o.a.createElement(l.C,{items:d,prefix:o.a.createElement(l.q,{name:"brush"}),width:200,label:"Color theme",color:"primary",value:r,onChange:function(e){return p(e)}}),o.a.createElement("br",null),o.a.createElement(l.D,{color:"primary",check:y,rightLabel:"Dark",className:"my-10",onChange:function(){return b(!y)}}),o.a.createElement("br",null),o.a.createElement(l.D,{color:"primary",check:k,rightLabel:"Smooth borders",className:"my-10",onChange:function(){return C(!k)}}),o.a.createElement("br",null),o.a.createElement(l.D,{color:"primary",check:H,rightLabel:"Right side",className:"my-10",onChange:function(){return x(!H)}}),o.a.createElement("br",null),o.a.createElement(l.D,{color:"primary",check:L,rightLabel:"Left control",className:"my-10",onChange:function(){return N(!L)}}),o.a.createElement("br",null),o.a.createElement(l.p,{color:y?null:r,smooth:k,dark:y,title:"Header light",leftControl:L,rightSide:H?o.a.createElement(l.e,{dark:y||r&&"default"!==r,light:"default"===r&&!y,icon:"account"}):null}),o.a.createElement("br",null),o.a.createElement(l.j,{icon:"code",iconSize:18,extra:o.a.createElement(l.k,{defaultText:"Copy code",text:m,className:"mr-10"}),contentStyles:{padding:0},tooltip:"Show/Hide Code"},o.a.createElement(c.a,{language:"jsx",style:i.a},m))),o.a.createElement("h2",null,"API"),o.a.createElement(l.E,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:u,index:!0,itemTitles:s}))}}}]);
//# sourceMappingURL=21.chunk.js.map
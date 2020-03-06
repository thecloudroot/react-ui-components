(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[37],{287:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),l=a.n(r),o=a(3),c=a(312),s=a(271),i=["property","description","default","type","value"],u=[{property:"value",description:"Tag value",default:"",type:"string",value:""},{property:"lifted",description:"Lift up the Tag",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color of Tag from list",default:"",type:"string",value:"primary | info | success | error | dark | yellow"},{property:"borderType",description:"Set Tag borders",default:"",type:"string",value:"tile | smooth | rounded"},{property:"uppercase",description:"Transform text to upper case",default:"false",type:"boolean",value:"true | false"},{property:"small",description:"Set tag size",default:"",type:"boolean",value:"true | false"},{property:"iconLeft",description:"Set icon before the value",default:"",type:"string",value:"home | search | etc. (see icon names list in docs)"},{property:"iconRight",description:"Set icon after the value",default:"",type:"string",value:"home | search | etc. (see icon names list in docs)"},{property:"width",description:"Set a tag width",default:"",type:"string | number",value:""},{property:"setRef",description:"Set ref",default:"",type:"React.RefObject",value:""},{property:"closable",description:"Enable close function",default:"false",type:"boolean",value:"true | false"},{property:"visible",description:"Set Tag visible state",default:"true",type:"boolean",value:"true | false"},{property:"onClose",description:"Invokes on close icon click (has effect with closable prop)",default:"",type:"function",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],m='// Usage examples\nimport React, { useState } from \'react\';\nimport { Tag, Switch, Select, Icon } from \'@assenti/react-ui-components\';\n\nconst colors = [\'primary\', \'info\', \'success\', \'error\', \'dark\', \'yellow\'];\nconst borders = [\'default\', \'smooth\', \'rounded\', \'tile\'];\n\nfunction Example() {\n    const [visible, setVisible] = useState(true);\n    const [outlined, setOutlined] = useState(false);\n    const [small, setSmall] = useState(false);\n    const [closable, setClosable] = useState(false);\n    const [lifted, setLifted] = useState(false);\n    const [icon, setIcon] = useState(false);\n    const [color, setColor] = useState(colors[0]);\n    const [borderType, setBorderType] = useState(borders[0]);\n\n    return (\n        <div className="row column py-10">\n            <Switch \n                color="primary" \n                check={outlined}\n                rightLabel="Outlined" \n                className="my-10"\n                onChange={() => setOutlined(!outlined)}/>\n            <Switch \n                color="primary" \n                check={small}\n                rightLabel="Small" \n                className="my-10"\n                onChange={() => setSmall(!small)}/>\n            <Switch \n                color="primary" \n                check={closable}\n                rightLabel="Closable" \n                className="my-10"\n                onChange={() => setClosable(!closable)}/>\n            <Switch \n                color="primary" \n                check={icon}\n                rightLabel="Icon" \n                className="my-10"\n                onChange={() => setIcon(!icon)}/>\n            <Switch \n                color="primary" \n                check={lifted}\n                rightLabel="Lifted" \n                className="my-10"\n                onChange={() => setLifted(!lifted)}/>\n        </div>\n        <div className="row align-center pb-10">\n            <Select\n                items={colors}\n                prefix={<Icon name="brush"/>}\n                width={200}\n                label="Color"\n                color="primary"\n                value={color}\n                className="mr-10"\n                onChange={v => setColor(v)}/>\n            <Select\n                items={borders}\n                prefix={<Icon name="shape"/>}\n                width={200}\n                label="Border type"\n                color="primary"\n                value={borderType}\n                onChange={v => setBorderType(v)}/>\n        </div>\n        <div className="row align-center">\n            <Tag \n                value="Price: 1000"\n                outlined={outlined} \n                color={color}\n                small={small}\n                borderType={borderType}\n                iconLeft={icon ? \'tenge\' : \'\'}\n                closable={closable}\n                visible={visible}\n                lifted={lifted}\n                onClose={() => setVisible(false)}/>\n            {closable ? <Button \n                name="Return Tag" \n                color="info" \n                className="ml-20" \n                onClick={() => setVisible(true)}/> : \'\'}\n        </div>\n    )\n}',p=["primary","info","success","error","dark","yellow"],d=["default","smooth","rounded","tile"];t.default=function(){var e=Object(r.createRef)(),t=Object(r.createRef)(),a=Object(r.useState)(!0),f=Object(n.a)(a,2),b=f[0],y=f[1],h=Object(r.useState)(!1),g=Object(n.a)(h,2),v=g[0],S=g[1],C=Object(r.useState)(!1),w=Object(n.a)(C,2),E=w[0],N=w[1],k=Object(r.useState)(!1),O=Object(n.a)(k,2),T=O[0],j=O[1],L=Object(r.useState)(!1),x=Object(n.a)(L,2),I=x[0],R=x[1],B=Object(r.useState)(!1),P=Object(n.a)(B,2),V=P[0],z=P[1],D=Object(r.useState)(p[0]),A=Object(n.a)(D,2),J=A[0],F=A[1],H=Object(r.useState)(d[0]),U=Object(n.a)(H,2),q=U[0],G=U[1];return l.a.createElement("div",{className:"rui-page",ref:e},l.a.createElement("div",{className:"row align-center space-between"},l.a.createElement("div",{className:"rui-page-title"},"Tag Component"),l.a.createElement("div",{onClick:function(){t.current&&t.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold mr-10"},"API")),l.a.createElement(o.g,{outlined:!0,title:"Tag usage"},l.a.createElement("div",{className:"row column py-10"},l.a.createElement(o.C,{color:"primary",check:v,rightLabel:"Outlined",className:"my-10",onChange:function(){return S(!v)}}),l.a.createElement(o.C,{color:"primary",check:E,rightLabel:"Small",className:"my-10",onChange:function(){return N(!E)}}),l.a.createElement(o.C,{color:"primary",check:T,rightLabel:"Closable",className:"my-10",onChange:function(){return j(!T)}}),l.a.createElement(o.C,{color:"primary",check:I,rightLabel:"Icon",className:"my-10",onChange:function(){return R(!I)}}),l.a.createElement(o.C,{color:"primary",check:V,rightLabel:"Lifted",className:"my-10",onChange:function(){return z(!V)}})),l.a.createElement("div",{className:"row align-center pb-10"},l.a.createElement(o.B,{items:p,prefix:l.a.createElement(o.p,{name:"brush"}),width:200,label:"Color",color:"primary",value:J,className:"mr-10",onChange:function(e){return F(e)}}),l.a.createElement(o.B,{items:d,prefix:l.a.createElement(o.p,{name:"shape"}),width:200,label:"Border type",color:"primary",value:q,onChange:function(e){return G(e)}})),l.a.createElement("div",{className:"row align-center"},l.a.createElement(o.F,{value:"Price: 1000",outlined:v,color:J,small:E,borderType:q,iconLeft:I?"tenge":"",closable:T,lifted:V,visible:b,onClose:function(){return y(!1)}}),T?l.a.createElement(o.e,{name:"Return Tag",color:"info",className:"ml-20",onClick:function(){return y(!0)}}):""),l.a.createElement(o.i,{icon:"code",iconSize:18,extra:l.a.createElement(o.j,{defaultText:"Copy code",text:m,className:"mr-10"}),tooltip:"Show/Hide Code"},l.a.createElement(c.a,{language:"jsx",style:s.a},m))),l.a.createElement("h2",{ref:t},"API"),l.a.createElement(o.b,{setRef:e,dark:!0,size:"medium"}),l.a.createElement(o.D,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:u,index:!0,itemTitles:i}))}}}]);
//# sourceMappingURL=37.chunk.js.map
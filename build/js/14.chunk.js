(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[14],{272:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),o=n(3),l=n(297),s=n(266),c=["property","description","default","type","value"],d=[{property:"drawer",description:"Drawer visibilty state",default:"",type:"boolean",value:"true | false"},{property:"collapsable",description:"Make drawer collapsable",default:"false",type:"boolean",value:"true | false"},{property:"min",description:"Set drawer width to minimum size",default:"",type:"boolean",value:"true | false"},{property:"onResize",description:"Handle drawer min prop toggling",default:"",type:"function",value:""},{property:"onClose",description:"Handle drawer state",default:"",type:"function",value:""},{property:"fullHeight",description:"Set drawer height to full screen height",default:"",type:"boolean",value:"true | false"},{property:"header",description:"Set drawer header",default:"",type:"any",value:""},{property:"headerCentered",description:"Set drawer header content position to center",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"absolute",description:"Set drawer position to absolute",default:"false",type:"boolean",value:"true | false"}],p=[{name:"JavaScript",icon:"code"},{name:"TypeScript",icon:"code"},{name:"React",icon:"code"},{name:"React Router",icon:"code"},{name:"React Redux",icon:"code"}];t.default=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],m=t[1],u=Object(r.useState)(!1),f=Object(a.a)(u,2),v=f[0],w=f[1],y=Object(r.useState)(p[0].name),g=Object(a.a)(y,2),h=g[0],b=g[1];return i.a.createElement("div",{className:"rui-page"},i.a.createElement("div",{className:"rui-page-title"},"Drawer Component"),i.a.createElement(o.e,{flat:!0,className:"overflow-y pa-0"},i.a.createElement("div",{className:"rui-app",style:{minHeight:260}},i.a.createElement(o.j,{drawer:n,min:v,onClose:function(){return m(!1)},header:v?i.a.createElement(o.m,{name:"react"}):"Drawer",collapsable:!0,headerCentered:!0,onResize:function(){return w(!v)}},v?i.a.createElement(o.p,null,p.map((function(e,t){var n=e.name,a=e.icon;return i.a.createElement(o.q,{key:t,noDivider:!0,render:i.a.createElement(o.B,{tooltip:n},i.a.createElement(o.c,{light:!0,onClick:function(){return b(n)},icon:a}))})}))):i.a.createElement(o.p,{size:"medium"},p.map((function(e,t){return i.a.createElement(o.q,{key:t,noDivider:!0,icon:e.icon,isActiveItem:e.name===h,onClick:function(){return b(e.name)},item:e.name,hover:!0})})))),i.a.createElement("div",{className:"rui-page"},i.a.createElement(o.l,{title:"Header",leftControl:!0,onLeftControl:function(){return m(!n)}}),i.a.createElement("div",{className:"pa-20 fz-12"},h," Page"))),i.a.createElement(o.g,{icon:"code",className:"mx-10",iconSize:18,contentStyles:{padding:0},tooltip:"Code"},i.a.createElement(l.a,{language:"jsx",style:s.a},'// Usage examples\nimport React, { useState } from \'react\';\nimport { Drawer, List, ListItem, Header, Icon } from \'@assenti/react-ui-components\';\n\nfunction Example() {\n    const [drawer, setDrawer] = useState(true);\n    const [drawerMin, setDrawerMin] = useState(false);\n    const [page, setPage] = useState(stack[0].name)\n\n    return (\n        <div className="app" style={{ minHeight: 260 }}>\n            <Drawer\n                drawer={drawer}\n                min={drawerMin}\n                onClose={() => setDrawer(false)}\n                header={drawerMin ? <Icon name="react" /> : \'Drawer\'}\n                collapsable\n                headerCentered\n                onResize={() => setDrawerMin(!drawerMin)}>\n                {drawerMin ? \n                    <List>\n                        {stack.map(({name, icon}, index) => \n                            <ListItem\n                                key={index}\n                                noDivider\n                                render={\n                                    <Tooltip \n                                        tooltip={name}>\n                                        <Button\n                                            light \n                                            onClick={() => setPage(name)} \n                                            icon={icon}/>\n                                    </Tooltip>\n                                }\n                                />\n                        )}\n                    </List> : \n                    <List size="medium">\n                        {stack.map((item, index) => \n                            <ListItem \n                                key={index}\n                                noDivider\n                                icon={item.icon} \n                                isActiveItem={item.name === page}\n                                onClick={() => setPage(item.name)}   \n                                item={item.name}\n                                hover/>\n                        )}\n                    </List>\n                }\n            </Drawer>\n            <div className="page">\n                <Header \n                    title="Header" \n                    leftControl\n                    onLeftControl={() => setDrawer(!drawer)}/>\n                <div className="pa-20 fz-12">\n                    {page} Page\n                </div>\n            </div>\n        </div>\n    )\n)'))),i.a.createElement("h2",null,"API"),i.a.createElement(o.y,{bordered:!0,headers:c,items:d,index:!0,itemTitles:c}))}}}]);
//# sourceMappingURL=14.chunk.js.map
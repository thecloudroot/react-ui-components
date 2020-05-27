(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[5],{319:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),o=a.n(r),c=a(3),i=a(50),m=a.n(i),s=a(53),l=a.n(s),p=a(56),u=a.n(p),d=a(68),h=a.n(d),f=a(47),y=a(67),g=[{property:"header",description:"Set card header",default:"",type:"any",value:""},{property:"footer",description:"Set card footer",default:"",type:"any",value:""},{property:"flat",description:"Remove card box shadow",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"hover",description:"Lift up the card on hover",default:"false",type:"boolean",value:"true | false"},{property:"ref",description:"Set ref to Card component",default:"",type:"React ref object",value:""},{property:"onClick",description:"Invokes on Card component click (return an event object)",default:"",type:"function",value:""},{property:"style",description:"Set a custom inline styles",default:"",type:"object",value:""},{property:"id",description:"Set a custom html id to component",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],s=Object(r.useState)(!1),p=Object(n.a)(s,2),d=p[0],v=p[1];return o.a.createElement(c.T.Consumer,null,(function(e){return o.a.createElement(f.a,{usage:"// Usage examples\nimport React from 'react';\nimport { Card, List } from '@assenti/rui-components';\n\nconst heroes = [\n    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, \n    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, \n    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, \n    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }\n];\n\nfunction Example() {\n    return (\n        <>\n            <Card header=\"Marvel heroes\">\n                <List dark={theme}>\n                    {heroes.map((item, index) => \n                        <List.Item \n                            key={index}\n                            icon={item.icon}\n                            item={item.name}\n                            subTitle={item.hero}\n                            hover/>\n                    )}\n                </List>\n            </Card>\n        </>\n    )\n}",apiDescItems:g,componentName:"<Card/>"},o.a.createElement(c.O,{color:"primary",check:a,rightLabel:"Flat",className:"my-10",onChange:function(){return i(!a)}}),o.a.createElement(c.O,{color:"primary",check:d,rightLabel:"Hover",className:"my-10",onChange:function(){return v(!d)}}),o.a.createElement(c.r,{className:"my-20"}),o.a.createElement(c.k,{dark:e,flat:a,hover:d,header:"Marvel heroes"},o.a.createElement(c.C,{dark:e},y.a.map((function(e,t){return o.a.createElement(c.C.Item,{key:t,icon:e.icon,item:e.name,subTitle:e.hero,hover:!0})})))),o.a.createElement("br",null),o.a.createElement("h4",null,"Cards with image and hover"),function(e){var t=[{img:m.a,name:"John Doe"},{img:l.a,name:"John Smith"},{img:u.a,name:"Jane Doe"},{img:h.a,name:"Jane Smith"}];return(o.a.createElement("div",{className:"row wrap"},t.map((function(t,a){return o.a.createElement(c.k,{key:a,hover:!0,dark:e,className:"ma-5",style:{width:200},footer:o.a.createElement("h4",{className:"text-center"},t.name)},o.a.createElement("img",{src:t.img,style:{width:"100%"},alt:"example"}),o.a.createElement("p",{className:"text-center"},"Hey there!"))}))))}(e))}))}},47:function(e,t,a){"use strict";var n=a(2),r=a(0),o=a.n(r),c=a(3),i=a(343),m=a(291),s=a(292),l=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),p=Object(n.a)(a,2),u=p[0],d=p[1];return o.a.createElement(c.T.Consumer,null,(function(a){return o.a.createElement("div",{className:"rui-page",ref:t},o.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),o.a.createElement(c.k,{dark:a,header:o.a.createElement("h4",null,"Usage")},e.children,o.a.createElement(c.n,{className:"mt-10",extra:o.a.createElement(c.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return d(e)},customToggler:o.a.createElement(c.h,{className:"ml-20",name:u?"Close":"Open",icon:"code",color:"info"}),dark:a},o.a.createElement(i.a,{language:"jsx",style:a?m.a:s.a},e.usage))),e.backTopBtn?o.a.createElement(c.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,o.a.createElement(c.k,{className:"mt-10"},o.a.createElement(c.P,{tableTitle:o.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:l})))}))}},50:function(e,t,a){e.exports=a.p+"static/media/man.e941ef11.png"},53:function(e,t,a){e.exports=a.p+"static/media/hipster.4ca6ae2f.png"},54:function(e,t,a){e.exports=a.p+"static/media/man_.1a05fb23.png"},56:function(e,t,a){e.exports=a.p+"static/media/girl.465a6768.png"},58:function(e,t,a){e.exports=a.p+"static/media/old.21fd9a1f.png"},67:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(50),r=a.n(n),o=a(53),c=a.n(o),i=a(54),m=a.n(i),s=a(58),l=a.n(s),p=a(56),u=a.n(p),d=[{name:"Steve Rogers",hero:"Captain America",phone:"1234567890",icon:"shield-account",img:r.a,check:!1,active:!1},{name:"Peter Parker",hero:"Spider man",phone:"1234567890",icon:"shield-account",img:c.a,check:!1,active:!0},{name:"Tony Stark",hero:"Iron man",phone:"1234567890",icon:"shield-account",img:m.a,check:!1,active:!1},{name:"Bruce Benner",hero:"Hulk",phone:"1234567890",icon:"shield-account",img:l.a,check:!1,active:!1},{name:"Natasha Romanoff",hero:"Black Widow",phone:"1234567890",icon:"shield-account",img:u.a,check:!1,active:!1},{name:"Stephen Strange",hero:"Doctor Strange",phone:"1234567890",icon:"shield-account",img:l.a,check:!1,active:!1}]},68:function(e,t,a){e.exports=a.p+"static/media/girl_.f2dc0133.png"}}]);
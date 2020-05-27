(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[10],{317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a(52),s=a(47),c=[{property:"setRef",description:"Pass the reference of parent element to component",default:"",type:"",value:""},{property:"breakpoint",description:"Set scrollY breakpoint when button should appear",default:"60px",type:"number",value:""},{property:"size",description:"Set button size",default:"",type:"string",value:"medium | large"},{property:"tooltip",description:"Set button tooltip",default:"",type:"string",value:""},{property:"offsetX",description:"Set offset from right",default:"25px",type:"number | string",value:""},{property:"offsetY",description:"Set offset from bottom",default:"25px",type:"number | string",value:""},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}];t.default=function(){for(var e=[],t=0;t<20;t++)e.push(t);return(r.a.createElement(i.T.Consumer,null,(function(e){return r.a.createElement(s.a,{usage:"// Usage examples\nimport React, { useRef } from 'react';\nimport { BackTopBtn } from '@assenti/rui-components';\n\nfunction Example() {\n    const parentRef = useRef();\n\n    return (\n        <div ref={parentRef}>\n            <BackTopBtn setRef={parentRef} dark/>\n        </div>\n    )\n}",componentName:"<BackTopBtn/>",backTopBtn:!0,apiDescItems:c},r.a.createElement(i.C,{header:"Countries",dark:e},o.a.map((function(e,t){return r.a.createElement(i.C.Item,{key:t,hover:!0,noDivider:!0,icon:"flag",item:e.country,subTitle:e.cities[0]})}))))})))}},47:function(e,t,a){"use strict";var n=a(2),r=a(0),i=a.n(r),o=a(3),s=a(343),c=a(291),u=a(292),l=["property","description","default","type","value"];t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),p=Object(n.a)(a,2),m=p[0],d=p[1];return i.a.createElement(o.T.Consumer,null,(function(a){return i.a.createElement("div",{className:"rui-page",ref:t},i.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),i.a.createElement(o.k,{dark:a,header:i.a.createElement("h4",null,"Usage")},e.children,i.a.createElement(o.n,{className:"mt-10",extra:i.a.createElement(o.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return d(e)},customToggler:i.a.createElement(o.h,{className:"ml-20",name:m?"Close":"Open",icon:"code",color:"info"}),dark:a},i.a.createElement(s.a,{language:"jsx",style:a?c.a:u.a},e.usage))),e.backTopBtn?i.a.createElement(o.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,i.a.createElement(o.k,{className:"mt-10"},i.a.createElement(o.P,{tableTitle:i.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:l})))}))}},52:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=[{country:"Kazakhstan",cities:["Nur-Sultan","Almaty","Shymkent"],icon:"flag",url:"https://en.wikipedia.org/wiki/Kazakhstan"},{country:"Russia",cities:["Moscow","St. Petersburg","Krasnodar"],icon:"flag",url:"https://en.wikipedia.org/wiki/Russia"},{country:"USA",cities:["Washington, D.C.","New York City","San Francisco"],icon:"flag",url:"https://en.wikipedia.org/wiki/United_States"},{country:"United Kingdom",cities:["London","York","Manchester"],icon:"flag",url:"https://en.wikipedia.org/wiki/United_Kingdom"},{country:"Canada",cities:["Ottawa","Toronto","Vancouver"],icon:"flag",url:"https://en.wikipedia.org/wiki/Canada"},{country:"Germany",cities:["Berlin","Munich","Hamburg"],icon:"flag",url:"https://en.wikipedia.org/wiki/Germany"},{country:"France",cities:["Paris","Nice","Marselle"],icon:"flag",url:"https://en.wikipedia.org/wiki/France"},{country:"China",cities:["Beijing","Shanghai","Shenzhen"],icon:"flag",url:"https://en.wikipedia.org/wiki/China"},{country:"Japan",cities:["Tokyo","Osaka","Kyoto"],icon:"flag",url:"https://en.wikipedia.org/wiki/Japan"},{country:"South Korea",cities:["Seoul","Busan","Daegu"],icon:"flag",url:"https://en.wikipedia.org/wiki/South_Korea"}]}}]);
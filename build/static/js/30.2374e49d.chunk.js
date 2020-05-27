(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[30],{295:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n.n(r),o=n(20),i=n(2),l=n(0),c=n.n(l),s=n(3),u=n(47),p=[{property:"visible",description:"Set Dialog visible state",default:"",type:"boolean",value:"true | false"},{property:"onConfirm",description:"Ivokes on confirm button click",default:"",type:"promised function",value:""},{property:"onCancel",description:"Ivokes on cancel button click",default:"",type:"function",value:""},{property:"confirmText",description:"Set confirm text",default:"Confirm",type:"string",value:""},{property:"confirmBtnColor",description:"Set confirm button color",default:"primary",type:"string",value:""},{property:"confirmOnly",description:"Set confirm button only",default:"false",type:"boolean",value:"true | false"},{property:"cancelText",description:"Set cancel text",default:"Cancel",type:"string",value:""},{property:"cancelBtnColor",description:"Set cancel button color",default:"secondary",type:"string",value:""},{property:"title",description:"Set Dialog title",default:"",type:"string",value:""},{property:"description",description:"Set Dialog description",default:"",type:"string",value:""},{property:"icon",description:"Set Dialog icon",default:"",type:"string",value:""},{property:"titleColor",description:"Set title color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"iconColor",description:"Set icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"dark",description:"Set modal dark mode",default:"false",type:"boolean",value:"true | false"}];t.default=function(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],m=Object(l.useState)(!1),f=Object(i.a)(m,2),d=f[0],y=f[1],g=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t()}),1500);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(s.T.Consumer,null,(function(e){return c.a.createElement(u.a,{usage:'// Usage examples\nimport React, { useState } from \'react\';\nimport { Button, Dialog } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [dialog, setDialog] = useState(false);\n\n    const actionImitation = async () => {\n        return new Promise(async (resolve) => {\n            setTimeout(() => {\n                resolve()\n            }, 1500)\n        })\n    }\n\n    return (\n        <>\n            <Button\n                color="error"\n                name="Delete account"\n                onClick={() => setDialog(true)}/>\n            <Dialog\n                onCancel={() => setDialog(false)}\n                onConfirm={actionImitation}\n                icon="alert"\n                iconColor="red"\n                titleColor="red" \n                visible={dialog} \n                title="Delete"\n                description="Are you sure?"/>\n        </>\n    )\n}',apiDescItems:p,componentName:"<Dialog/>"},c.a.createElement(s.O,{color:"primary",check:d,rightLabel:"Confirm only",className:"my-10",onChange:function(){return y(!d)}}),c.a.createElement("br",null),c.a.createElement(s.r,null),c.a.createElement(s.h,{color:"error",name:"Delete account",onClick:function(){return r(!0)}}),c.a.createElement(s.q,{onCancel:function(){return r(!1)},onConfirm:g,icon:"alert",dark:e,confirmOnly:d,confirmText:d?"OK":"",iconColor:"red",titleColor:"red",visible:n,title:"Delete",description:"Are you sure?"}))}))}},47:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),i=n(3),l=n(343),c=n(291),s=n(292),u=["property","description","default","type","value"];t.a=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(!1),p=Object(r.a)(n,2),m=p[0],f=p[1];return o.a.createElement(i.T.Consumer,null,(function(n){return o.a.createElement("div",{className:"rui-page",ref:t},o.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),o.a.createElement(i.k,{dark:n,header:o.a.createElement("h4",null,"Usage")},e.children,o.a.createElement(i.n,{className:"mt-10",extra:o.a.createElement(i.o,{defaultText:"Copy code",text:e.usage,dark:n}),onChange:function(e){return f(e)},customToggler:o.a.createElement(i.h,{className:"ml-20",name:m?"Close":"Open",icon:"code",color:"info"}),dark:n},o.a.createElement(l.a,{language:"jsx",style:n?c.a:s.a},e.usage))),e.backTopBtn?o.a.createElement(i.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,o.a.createElement(i.k,{className:"mt-10"},o.a.createElement(i.P,{tableTitle:o.a.createElement("h2",null,"API"),dark:n,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:u})))}))}}}]);
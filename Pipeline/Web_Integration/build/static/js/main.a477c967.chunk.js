(this.webpackJsonpanprmodelpage=this.webpackJsonpanprmodelpage||[]).push([[0],{23:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(14),l=s.n(i),a=(s(23),s(5)),r=s.n(a),j=s(15),o=s(3),d=s(18),b=s(0),h=function(e){var t=e.msg;return Object(b.jsxs)("div",{className:"alert alert-info alert-dismissible fade show",role:"alert",children:[t,Object(b.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(b.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},O=function(e){var t=e.percentage;return Object(b.jsx)("div",{className:"progress",children:Object(b.jsxs)("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:"".concat(t,"%")},children:[t,"%"]})})},x=s(16),u=s.n(x),m=s(17),p=s.n(m),f=u()((function(e){return Object(b.jsx)("img",Object(d.a)({alt:""},e))})),g=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)("Choose File"),l=Object(o.a)(i,2),a=l[0],d=l[1],x=Object(c.useState)({}),u=Object(o.a)(x,2),m=u[0],g=u[1],v=Object(c.useState)(""),y=Object(o.a)(v,2),N=y[0],k=y[1],w=Object(c.useState)(0),S=Object(o.a)(w,2),V=S[0],C=S[1],F=Object(c.useState)(0),R=Object(o.a)(F,2),P=(R[0],R[1]),A=Object(c.useState)([]),D=Object(o.a)(A,2),J=(D[0],D[1]),T=Object(c.useState)([]),U=Object(o.a)(T,2),I=U[0],W=U[1],_=function(){var e=Object(j.a)(r.a.mark((function e(t){var c,n,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(c=new FormData).append("files",s),e.prev=3,e.next=6,p.a.post("http://18.189.209.60:5000/image/",c,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){C(parseInt(Math.round(100*e.loaded/e.total)))}});case 6:n=e.sent,W(n.data.result),i=n.data.result[0].Url,l=JSON.parse(JSON.stringify(n.data.result)),J({output_data:l}),C(0),P(1),k("Uploaded"),g({filePath:i}),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0),C(0);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(c.Fragment,{children:[N?Object(b.jsx)(h,{msg:N}):null,Object(b.jsxs)("form",{onSubmit:_,children:[Object(b.jsxs)("div",{className:"custom-file mb-4",children:[Object(b.jsx)("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){n(e.target.files[0]),d(e.target.files[0].name)}}),Object(b.jsx)("label",{className:"custom-file-label",htmlFor:"customFile",children:a})]}),Object(b.jsx)(O,{percentage:V}),Object(b.jsx)("input",{type:"submit",value:"Upload",className:"btn btn-primary btn-block mt-4"})]}),m?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"row mt-5",children:Object(b.jsxs)("div",{className:"col-md-6 m-auto",children:[Object(b.jsx)("h3",{className:"text-center",children:m.fileName}),Object(b.jsx)(f,{src:m.filePath,width:"100%"})]})}),Object(b.jsx)("section",{id:"count-box",className:"counts section-bg",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:I.map((function(e,t){return console.log(I[t].Violation),Object(b.jsx)("div",{className:"col-lg-3 col-md-mr-6",children:Object(b.jsx)("div",{className:"count-box",children:Object(b.jsxs)("h4",{children:[Object(b.jsxs)("span",{children:["Ocr: ",I[t].OCR]}),Object(b.jsxs)("h3",{children:[" Vehicle Type: ",I[t].Vehicle_Type]}),Object(b.jsx)("br",{}),Object(b.jsx)("h5",{children:"Violations:"}),I[t].Violation.map((function(e){return Object(b.jsx)("p",{children:Object(b.jsx)("li",{children:e})})}))]},e)})})}))})})})]}):null]})},v=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("header",{id:"header",class:"fixed-top ",children:Object(b.jsxs)("div",{class:"container d-flex align-items-center justify-content-between",children:[Object(b.jsxs)("a",{href:"index.html",class:"logo",children:[" ",Object(b.jsx)("img",{src:"assets/img/Logo_P.png",alt:"",class:"img-fluid"})]}),Object(b.jsxs)("nav",{id:"navbar",class:"navbar",children:[Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{class:"nav-link scrollto active",href:"http://vergai.in/#hero",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{class:"nav-link scrollto",href:"http://vergai.in/#about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{class:"nav-link scrollto",href:"http://vergai.in/course-details.html",children:"DataeBook"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{class:"nav-link scrollto",href:"http://vergai.in/#portfolio",children:"Gallery"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{class:"nav-link scrollto",href:"http://vergai.in/#contact",children:"Contact"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{class:"getstarted scrollto",href:"http://18.116.148.191:3000/",children:"Try Now"})})]}),Object(b.jsx)("i",{class:"bi bi-list mobile-nav-toggle"})]})]})}),Object(b.jsxs)("main",{id:"main",children:[Object(b.jsx)("section",{class:"breadcrumbs",children:Object(b.jsx)("div",{class:"container",children:Object(b.jsx)("div",{class:"d-flex justify-content-between align-items-center"})})}),Object(b.jsx)("section",{class:"inner-page",children:Object(b.jsxs)("div",{class:"container",children:[Object(b.jsxs)("h5",{className:"display-4 text-center mb-4",children:[" ",Object(b.jsx)("b",{style:{color:"#5a5af3"},children:"Verg"})," ",Object(b.jsxs)("em",{style:{fontSize:"45px"},children:[Object(b.jsx)("b",{style:{fontWeight:400},children:"Numberplate "}),Object(b.jsx)("em",{style:{color:"#d63384"},children:"Recogniser"})," & ",Object(b.jsx)("b",{style:{fontWeight:400},children:"Violation"})," ",Object(b.jsx)("b",{style:{color:"#5a5af3"},children:" Detection "})," "]}),"(",Object(b.jsx)("b",{style:{fontWeight:400},children:"VNPR"}),") "]}),Object(b.jsx)(g,{})]})})]}),Object(b.jsx)("footer",{id:"footer",children:Object(b.jsxs)("div",{class:"container d-md-flex py-4",children:[Object(b.jsxs)("div",{class:"me-md-auto text-center text-md-start",children:[Object(b.jsxs)("div",{class:"copyright",children:["\xa9 Copyright ",Object(b.jsx)("strong",{children:Object(b.jsx)("span",{children:"VERG-AI"})}),". All Rights Reserved"]}),Object(b.jsx)("div",{class:"credits"})]}),Object(b.jsx)("div",{class:"social-links text-center text-md-right pt-3 pt-md-0",children:Object(b.jsx)("a",{href:"https://linkedin.com/company/vergai/",class:"linkedin",children:Object(b.jsx)("i",{class:"bx bxl-linkedin"})})})]})}),Object(b.jsx)("a",{href:"#/",class:"back-to-top d-flex align-items-center justify-content-center",children:Object(b.jsx)("i",{class:"bi bi-arrow-up-short"})})]})};var y=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(v,{})})};l.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a477c967.chunk.js.map
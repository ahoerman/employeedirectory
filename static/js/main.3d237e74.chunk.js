(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],[,,function(e,a,n){},,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Leslie Knope","image":"./images/LeslieKnope.png","occupation":"Deputy Director","phone":"555-5740","email":"leslie@pawnee.org"},{"id":2,"name":"Andy Dwyer","image":"./images/AndyDwyer.jpg","occupation":"Shoe Shiner","phone":"555-2328","email":"andy@pawnee.org"},{"id":3,"name":"Ann Perkins","image":"./images/AnnPerkins.jpg","occupation":"Registered Nurse","phone":"555-2393","email":"ann@pawnee.org"},{"id":4,"name":"April Ludgate","image":"./images/AprilLudgate.png","occupation":"Intern","phone":"555-2039","email":"april@pawnee.org"},{"id":5,"name":"Ben Wyatt","image":"./images/BenWyatt.jpg","occupation":"State Auditor","phone":"555-0245","email":"ben@pawnee.org"},{"id":6,"name":"Chris Traeger","image":"./images/ChrisTraeger.jpg","occupation":"State Auditor","phone":"555-8957","email":"chris@pawnee.org"},{"id":7,"name":"Donna Meagle","image":"./images/DonnaMeagle.jpg","occupation":"Office Manager","phone":"555-8596","email":"donna@pawnee.org"},{"id":8,"name":"Jean-Ralphio Saperstein","image":"./images/JeanRalphio.jpeg","occupation":"Entrepeneur","phone":"555-1928","email":"jeanralphio@pawnee.org"},{"id":9,"name":"Jerry Gergich","image":"./images/JerryGergich.jpg","occupation":"Junior Director","phone":"555-8428","email":"Jerry@pawnee.org"},{"id":10,"name":"Ron Swanson","image":"./images/RonSwanson.jpg","occupation":"Director","phone":"555-9453","email":"ron@pawnee.org"},{"id":11,"name":"Tom Haverford","image":"./images/TomHaverford.jpg","occupation":"Office Administrator","phone":"555-8569","email":"tom@pawnee.org"}]')},,,function(e,a,n){e.exports=n(18)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(3),o=n.n(i),l=n(4),c=n(5),m=n(8),p=n(7);n(14);var u=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Name:")," ",e.name),r.a.createElement("li",null,r.a.createElement("strong",null,"Occupation:")," ",e.occupation),r.a.createElement("li",null,r.a.createElement("strong",null,"Phone:")," ",e.phone),r.a.createElement("li",null,r.a.createElement("strong",null,"Email:")," ",e.email))))};n(15);var s=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};n(16);var d=function(e){return r.a.createElement("h1",{className:"title"},e.children)},g=(n(2),function(e){var a=e.userinput,n=e.handler;return r.a.createElement("nav",{className:"searchbar"},r.a.createElement("label",null,r.a.createElement("h3",null,"Search Employees:")),r.a.createElement("input",{name:"userinput",onChange:n,value:a}))}),h=function(e){e.userinput,e.handler;return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort By"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},r.a.createElement("li",{className:"dropdown-item"},"Name"),r.a.createElement("li",{className:"dropdown-item"},"Occupation"),r.a.createElement("li",{className:"dropdown-item"},"Email")))},E=n(6),y=function(e){Object(m.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={employees:E},e.handleUserInput=function(a){var n=e.state.employees.filter((function(e){return e===a}));e.setState({employees:n})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(s,null,r.a.createElement(d,null,"Employee Directory"),r.a.createElement(g,{userinput:this.state.userinput,handler:this.handleUserInput}),r.a.createElement(h,null),this.state.employees.map((function(e){return r.a.createElement(u,{id:e.id,key:e.id,name:e.name,image:e.image,occupation:e.occupation,phone:e.phone,email:e.email})})))}}]),n}(t.Component);n(17);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3d237e74.chunk.js.map
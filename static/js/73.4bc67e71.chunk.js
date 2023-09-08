"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[73],{6073:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,o,i,d,p,x,s,c=t(9439),l=t(2791),u=t(9434),b=t(6929),h=function(n){return n.contacts.items},f=function(n){return n.contacts.filter},g=t(168),m=t(5706),Z=m.Z.form(r||(r=(0,g.Z)(["\n  padding-bottom: 30px;\n  border-bottom: 3px solid #aaa;\n"]))),w=m.Z.div(a||(a=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"]))),j=m.Z.label(o||(o=(0,g.Z)(["\n  font-size: 18px;\n  font-weight: 20px;\n"]))),v=m.Z.input(i||(i=(0,g.Z)(["\n  width: 160px;\n  height: 20px;\n  padding: 5px;\n  border: 1px solid #555;\n  border-radius: 6px;\n"]))),k=m.Z.button(d||(d=(0,g.Z)(["\n  display: block;\n  padding: 8px 20px;\n  margin: 0 auto;\n  margin-top: 30px;\n\n  background-image: linear-gradient(\n    45deg,\n    #4158d0 0%,\n    #c850c0 40%,\n    #ffcc70 90%\n  );\n\n  border: 2px solid #747474;\n  border-radius: 10px;\n  font-weight: 700;\n  color: #ffffff;\n  cursor: pointer;\n  box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #000;\n    background: #9370db;\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);\n  }\n"]))),y=t(5264),C=t(184);function z(){var n=(0,l.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),o=(0,c.Z)(a,2),i=o[0],d=o[1],p=(0,u.v9)(h),x=(0,u.I0)(),s=function(){r(""),d("")};return(0,C.jsxs)(Z,{onSubmit:function(n){n.preventDefault();var e={name:t,number:i};p.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?y.Notify.warning("".concat(t," : ").concat(i," is already in contacts")):x((0,b.je)(e)),s()},children:[(0,C.jsxs)(w,{children:[(0,C.jsxs)(j,{children:["Name",(0,C.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(n){return r(n.target.value)},placeholder:"Enter name",autoComplete:"off"})]}),(0,C.jsxs)(j,{children:["Number",(0,C.jsx)(v,{type:"tel",name:"number",phonePattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:function(n){return d(n.target.value)},placeholder:"Enter phone number",autoComplete:"off"})]})]}),(0,C.jsx)(k,{type:"submit",children:"Add contact"})]})}var _,I,A=m.Z.li(p||(p=(0,g.Z)(["\n  margin-bottom: 10px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),N=m.Z.div(x||(x=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),L=m.Z.button(s||(s=(0,g.Z)(["\n  &:last-child {\n    margin-bottom: 10px;\n  }\n\n  display: block;\n  padding: 4px 14px;\n\n  background-image: linear-gradient(\n    45deg,\n    #4158d0 0%,\n    #c850c0 40%,\n    #ffcc70 90%\n  );\n  border: 2px solid #747474;\n  border-radius: 10px;\n  font-weight: 700;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #000;\n    background: #9370db;\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);\n  }\n"])));function E(n){var e=n.name,t=n.number,r=n.contactId,a=(0,u.I0)(),o={contactId:r,name:e};return(0,C.jsx)(A,{children:(0,C.jsxs)(N,{children:[(0,C.jsxs)("span",{children:[e,": "]}),(0,C.jsx)("span",{children:t}),(0,C.jsx)(L,{type:"button",onClick:function(){return a((0,b.xX)(o))},children:"Delete"})]})})}var S=m.Z.ul(_||(_=(0,g.Z)(["\n  margin: 20px 0 0;\n  padding-left: 20px;\n"]))),q=m.Z.li(I||(I=(0,g.Z)(["\n  text-align: center;\n  color: #5db09d;\n  list-style: none;\n"])));function D(){var n=(0,u.v9)(h),e=(0,u.v9)(f),t=(0,u.I0)();(0,l.useEffect)((function(){t((0,b.m$)())}),[t]);var r=function(){var t=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}();return(0,C.jsx)(S,{children:r.length>0?r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,C.jsx)(E,{name:t,number:r,contactId:e},e)})):(0,C.jsx)(q,{children:(0,C.jsx)("strong",{children:"Oops, nothing"})})})}var F,P,$,B,J,M,O=t(9652),W=m.Z.div(F||(F=(0,g.Z)(["\n  width: 388px;\n"]))),X=m.Z.input(P||(P=(0,g.Z)(["\n  width: 100%;\n  height: 20px;\n  padding: 5px;\n  border: 1px solid #555;\n  border-radius: 6px;\n"]))),G=m.Z.p($||($=(0,g.Z)(["\n  margin: 0 0 10px;\n"])));function H(){var n=(0,u.I0)();return(0,C.jsxs)(W,{children:[(0,C.jsx)(G,{children:"Find contacts by name"}),(0,C.jsx)(X,{type:"text",name:"filter",onChange:function(e){return n((0,O.W)(e.target.value))},placeholder:"Name"})]})}var K=m.Z.div(B||(B=(0,g.Z)(["\n  width: 400px;\n  margin: 40px auto 0;\n  padding: 30px;\n  background-color: #fff;\n  padding-bottom: 30px;\n  border-bottom: 3px solid #aaa;\n  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);\n  border-radius: 6px;\n"]))),Q=m.Z.h1(J||(J=(0,g.Z)(["\n  text-align: center;\n  color: #353535;\n  text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;\n"]))),R=m.Z.h2(M||(M=(0,g.Z)(["\n  margin-top: 30px;\n  text-align: center;\n  color: #353535;\n  text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;\n"])));function T(){return(0,C.jsxs)(K,{children:[(0,C.jsx)(Q,{children:"Contacts book"}),(0,C.jsx)(z,{}),(0,C.jsx)(R,{children:"Contacts"}),(0,C.jsx)(H,{}),(0,C.jsx)(D,{})]})}}}]);
//# sourceMappingURL=73.4bc67e71.chunk.js.map
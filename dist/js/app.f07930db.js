(function(){"use strict";var e={6453:function(e,t,o){var n=o(5130),r=o(6768),a=o.p+"img/Eric_Pineda_Photo.892a5b1f.jpg";function i(e,t){const o=(0,r.g2)("router-link"),n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[t[3]||(t[3]=(0,r.Lk)("img",{src:a,alt:"Eric Pineda Photo",class:"profile-photo"},null,-1)),(0,r.Lk)("nav",null,[(0,r.bF)(o,{to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Home")]))),_:1}),(0,r.bF)(o,{to:"/Portfolio"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("Portfolio")]))),_:1}),(0,r.bF)(o,{to:"/Contactme"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("Contact Me")]))),_:1})]),(0,r.bF)(n)],64)}var l=o(1241);const u={},s=(0,l.A)(u,[["render",i]]);var c=s,d=o(1387);const f={class:"about-box"};function m(e,t,o,n,a,i){return(0,r.uX)(),(0,r.CE)("div",f,t[0]||(t[0]=[(0,r.Lk)("h1",null,"About Me",-1),(0,r.Lk)("p",null," Hello! My name is Eric Pineda and I'm currently pursuing an associate's degree in Software Development online at CCC in Nebraska, expecting to graduate in 2026. I'm passionate about coding and constantly eager to learn new technologies. I have experience with Vue.js, C#, Java, and more. ",-1),(0,r.Lk)("h2",null,"My Aspirations",-1),(0,r.Lk)("p",null," I aspire to become a proficient software developer, creating impactful applications and tools that solve real-world problems. My goal is to work in a dynamic environment that challenges me to grow and innovate. ",-1)]))}var p={};const g=(0,l.A)(p,[["render",m],["__scopeId","data-v-b88426d8"]]);var v=g,b=o(4232);const h={class:"portfolio-box"},k={key:0},y={key:1},L={key:2},_=["href"];function C(e,t,o,n,a,i){const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",h,[t[3]||(t[3]=(0,r.Lk)("h1",{class:"text-4x1"},"My Portfolio",-1)),a.loading?((0,r.uX)(),(0,r.CE)("div",k,"Loading...")):(0,r.Q3)("",!0),a.error?((0,r.uX)(),(0,r.CE)("div",y,(0,b.v_)(a.error),1)):(0,r.Q3)("",!0),Array.isArray(a.repositories)&&a.repositories.length>0?((0,r.uX)(),(0,r.CE)("ul",L,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.repositories,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id},[(0,r.Lk)("a",{href:e.html_url,target:"_blank"},(0,b.v_)(e.name),9,_),(0,r.Lk)("p",null,[t[0]||(t[0]=(0,r.Lk)("strong",null,"Created On: ",-1)),(0,r.eW)((0,b.v_)(new Date(e.created_at).toLocaleDateString()),1)]),(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,(0,b.v_)(e.description),1)]),(0,r.Lk)("p",null,[t[1]||(t[1]=(0,r.Lk)("strong",null,"Language Type: ",-1)),(0,r.eW)((0,b.v_)(e.language),1)]),(0,r.Lk)("p",null,[t[2]||(t[2]=(0,r.Lk)("strong",null,"Last updated: ",-1)),(0,r.eW)((0,b.v_)(new Date(e.updated_at).toLocaleDateString()),1)])])))),128))])):(0,r.Q3)("",!0)]),(0,r.bF)(l)],64)}var E=o(4373),w={data(){return{repositories:[],loading:!0,error:null}},async created(){try{const e=await E.A.get("https://api.github.com/users/PinedaE11658/repos");this.repositories=e.data}catch(e){this.error="Failed to load repositories"}finally{this.loading=!1}}};const P=(0,l.A)(w,[["render",C],["__scopeId","data-v-3d49a9b0"]]);var D=P;const x={class:"contact-page",style:{"background-image":"url('Site_Background.jpg')"}},F={class:"contact-box"},O={class:"form-group"},M={class:"form-group"},j={class:"form-group"};function S(e,t,o,a,i,l){return(0,r.uX)(),(0,r.CE)("div",x,[(0,r.Lk)("div",F,[t[8]||(t[8]=(0,r.Lk)("h1",null,"Contact Me",-1)),t[9]||(t[9]=(0,r.Lk)("p",null,"(Work in Progress)",-1)),(0,r.Lk)("form",{class:"contact-form",onSubmit:t[3]||(t[3]=(0,n.D$)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",O,[t[4]||(t[4]=(0,r.Lk)("label",{for:"name"},"Name:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>i.formData.name=e),placeholder:"Enter your name",required:""},null,512),[[n.Jo,i.formData.name]])]),(0,r.Lk)("div",M,[t[5]||(t[5]=(0,r.Lk)("label",{for:"email"},"Email:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>i.formData.email=e),placeholder:"Enter your email",required:""},null,512),[[n.Jo,i.formData.email]])]),(0,r.Lk)("div",j,[t[6]||(t[6]=(0,r.Lk)("label",{for:"message"},"Message:",-1)),(0,r.bo)((0,r.Lk)("textarea",{id:"message","onUpdate:modelValue":t[2]||(t[2]=e=>i.formData.message=e),rows:"5",placeholder:"Enter your message",required:""},null,512),[[n.Jo,i.formData.message]])]),t[7]||(t[7]=(0,r.Lk)("button",{type:"submit",class:"submit-button"},"Send",-1))],32)])])}var A={name:"ContactPage",data(){return{formData:{name:"",email:"",message:""}}},methods:{submitForm(){console.log("Form submitted:",this.formData),alert(`Thank you, ${this.formData.name}! Your message has been sent!`),this.formData.name="",this.formData.email="",this.formData.message=""}}};const W=(0,l.A)(A,[["render",S],["__scopeId","data-v-5f893b8b"]]);var X=W;const I=[{path:"/",name:"home",component:v},{path:"/Portfolio",name:"Portfolio",component:D},{path:"/Contactme",name:"/Contact_Me",component:X}],T=(0,d.aE)({history:(0,d.LA)("/Portfolio-Website-Eric-Pineda/"),routes:I});var J=T;(0,n.Ef)(c).use(J).mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],a=e[c][2];for(var l=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/Portfolio-Website-Eric-Pineda/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],l=n[1],u=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(u)var c=u(o)}for(t&&t(n);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunkeric_pineda_portfolio"]=self["webpackChunkeric_pineda_portfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(6453)}));n=o.O(n)})();
//# sourceMappingURL=app.f07930db.js.map
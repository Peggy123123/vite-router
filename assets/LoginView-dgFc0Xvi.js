import{T as _}from"./bootstrap.esm-l9cKv-78.js";import{_ as h,c as g,b as f,w as b,d as t,f as d,B as c,C as m,t as u,F as v,r as w,o as y}from"./index-Yfs5rdVQ.js";import{_ as T}from"./icon-t1Ce2sCx.js";var x={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:V}=x;let a=null;const E={data(){return{user:{username:"",password:""},toastTitle:"",toastContent:"",isLoading:!1,fallPage:!1}},methods:{login(){const n=`${V}/admin/signin`;this.isLoading=!0,this.$http.post(n,this.user).then(s=>{this.toastTitle="登入成功",this.toastContent="已登入成功",a.show();const{token:l,expired:r}=s.data;document.cookie=`hexToken=${l}; expires=${new Date(r)}`,this.$router.push("admin/adminhome")}).catch(()=>{this.toastTitle="登入失敗",this.toastContent="帳號或密碼錯誤，請重新登入",a.show(),this.user.password=""}).finally(()=>{this.isLoading=!1})}},mounted(){a=new _(document.getElementById("toast"))}},L=t("div",{class:"loading-img-bg"},[t("img",{class:"loading-img",src:T,alt:""})],-1),C={class:"container"},k={class:"row py-30 justify-content-center align-items-center"},B=t("div",{class:"col-12 col-md-6 col-lg-5 d-flex justify-content-center"},[t("img",{class:"login-image",src:"https://i.imgur.com/lowirph.png",alt:""})],-1),D={class:"col-12 col-md-6 col-lg-5"},R=t("h2",{class:"h3 mb-8 border-bottom border-yellow-200 border-5 d-inline-block pb-3 text-secondary"}," 登入後台 ",-1),S={class:"form-floating mb-3"},I=t("label",{for:"username"},"Email",-1),U={class:"form-floating"},M=t("label",{for:"password"},"密碼",-1),P={id:"toast",class:"toast hide toast-container position-fixed toast-placement",role:"alert","aria-live":"assertive","aria-atomic":"true"},j={class:"toast-header mb-0"},q={class:"me-auto"},A=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),F={class:"toast-body"};function N(n,s,l,r,o,i){const p=w("VueLoading");return y(),g(v,null,[f(p,{active:o.isLoading},{default:b(()=>[L]),_:1},8,["active"]),t("div",C,[t("div",k,[B,t("div",D,[R,t("form",{id:"form",class:"login-form text-secondary",onSubmit:s[3]||(s[3]=d((...e)=>i.login&&i.login(...e),["prevent"]))},[t("div",S,[c(t("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=e=>o.user.username=e),required:"",autofocus:""},null,512),[[m,o.user.username]]),I]),t("div",U,[c(t("input",{type:"password",class:"form-control",id:"password",placeholder:"password","onUpdate:modelValue":s[1]||(s[1]=e=>o.user.password=e),required:""},null,512),[[m,o.user.password]]),M]),t("button",{class:"btn btn-secondary w-100 py-2 mt-10",type:"submit",onSubmit:s[2]||(s[2]=d((...e)=>i.login&&i.login(...e),["prevent"]))}," 登入 ",32)],32)])])]),t("div",P,[t("div",j,[t("strong",q,u(o.toastTitle),1),A]),t("div",F,u(o.toastContent),1)])],64)}const z=h(E,[["render",N]]);export{z as default};
import{T as _}from"./bootstrap.esm-l9cKv-78.js";import{_ as h,c as f,b as g,a as t,k as d,j as c,v as u,t as m,F as v,r as b,o as w}from"./index-_1_u0yST.js";var T={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/vite-router/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:y}=T;let n=null;const V={data(){return{user:{username:"",password:""},toastTitle:"",toastContent:"",isLoading:!1,fallPage:!1}},methods:{login(){const i=`${y}/admin/signin`;this.isLoading=!0,this.$http.post(i,this.user).then(s=>{this.toastTitle="登入成功",this.toastContent="已登入成功",n.show();const{token:r,expired:l}=s.data;document.cookie=`hexToken=${r}; expires=${new Date(l)}`,this.$router.push("/adminproduct")}).catch(s=>{this.toastTitle="登入失敗",this.toastContent="帳號或密碼錯誤，請重新登入",n.show(),this.user.password=""}).finally(()=>{this.isLoading=!1})}},mounted(){n=new _(document.getElementById("toast"))}},x={class:"container"},E={class:"row justify-content-center py-30"},L=t("h2",{class:"h3 mb-8 font-weight-normal text-center my-auto"}," 登入後台 ",-1),k={class:"col-3"},C={class:"form-floating mb-3"},D=t("label",{for:"username"},"Email address",-1),S={class:"form-floating"},B=t("label",{for:"password"},"Password",-1),I={id:"toast",class:"toast hide toast-container position-fixed toast-placement",role:"alert","aria-live":"assertive","aria-atomic":"true"},P={class:"toast-header mb-0"},R={class:"me-auto"},U=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),M={class:"toast-body"};function j(i,s,r,l,e,a){const p=b("VueLoading");return w(),f(v,null,[g(p,{active:e.isLoading},null,8,["active"]),t("div",x,[t("div",E,[L,t("div",k,[t("form",{id:"form",class:"form-signin",onSubmit:s[3]||(s[3]=d((...o)=>a.login&&a.login(...o),["prevent"]))},[t("div",C,[c(t("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=o=>e.user.username=o),required:"",autofocus:""},null,512),[[u,e.user.username]]),D]),t("div",S,[c(t("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=o=>e.user.password=o),required:""},null,512),[[u,e.user.password]]),B]),t("button",{class:"btn button mt-10",type:"submit",onSubmit:s[2]||(s[2]=d((...o)=>a.login&&a.login(...o),["prevent"]))}," 登入 ",32)],32)])])]),t("div",I,[t("div",P,[t("strong",R,m(e.toastTitle),1),U]),t("div",M,m(e.toastContent),1)])],64)}const F=h(V,[["render",j]]);export{F as default};

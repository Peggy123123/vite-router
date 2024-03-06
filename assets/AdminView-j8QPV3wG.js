import{T,M as E}from"./bootstrap.esm-l9cKv-78.js";import{_ as h,o as p,c as f,b as o,a as t,w as i,d as a,A as V,F as b,r as d}from"./index-qXln98fC.js";var $={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:x}=$;let m=null,u=null;const y={data(){return{toastTitle:"",toastContent:"",isLoading:!1,fallPage:!1}},methods:{openModal(){u.show()},logout(){const e=`${x}/logout`;this.isLoading=!0,u.hide(),this.$http.post(e).then(s=>{this.$router.push("/login")}).catch(s=>{this.toastTitle="登出",this.toastContent="請重新操作",m.show()}).finally(()=>{this.isLoading=!1})}},mounted(){m=new T(document.getElementById("toast")),u=new E(document.getElementById("logoutModal"))}},L={class:"nav d-flex flex-column bg-dark justify-content-between"},R=t("div",{class:"d-flex justify-content-center text-white pt-10"},[t("img",{width:"150",src:"https://i.imgur.com/pFJdiRb.png",alt:"logo"})],-1),w={class:"list-unstyled mt-10"},I=t("div",{class:"text-white fw-bold d-flex align-items-center justify-content-center pb-5"},[t("i",{class:"bi bi-person-circle fs-1"}),t("p",{class:"mb-0 ms-2"},[a("歡迎回來！ "),t("span",null,"管理者1")])],-1),M={class:"border-top border-white pt-5"},A={class:"ps-0"},U={class:"modal fade",id:"logoutModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},B={class:"modal-dialog modal-dialog-centered"},C={class:"modal-content"},D=t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"登出"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N=t("div",{class:"modal-body"},[t("p",null,"是否確定要登出")],-1),P={class:"modal-footer"},S=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function O(e,s,g,v,_,l){const c=d("VueLoading"),n=d("RouterLink"),k=d("router-link");return p(),f(b,null,[o(c,{active:_.isLoading},null,8,["active"]),t("header",null,[t("div",L,[t("div",null,[R,t("ul",w,[t("li",null,[o(n,{to:"adminhome",class:"admin-link"},{default:i(()=>[a("後台總覽")]),_:1})]),t("li",null,[o(n,{to:"adminproduct",class:"admin-link"},{default:i(()=>[a("商品管理")]),_:1})]),t("li",null,[o(n,{to:"adminorder",class:"admin-link"},{default:i(()=>[a("訂單管理")]),_:1})]),t("li",null,[o(n,{to:"admincoupon",class:"admin-link"},{default:i(()=>[a("優惠券管理")]),_:1})])])]),t("div",null,[I,t("div",M,[t("ul",A,[t("li",null,[o(k,{to:"/",class:"admin-link"},{default:i(()=>[a("回前台")]),_:1})]),t("li",null,[t("a",{href:"#",class:"admin-link",onClick:s[0]||(s[0]=V((...r)=>l.openModal&&l.openModal(...r),["prevent"]))},"登出")])])])])])]),t("div",U,[t("div",B,[t("div",C,[D,N,t("div",P,[S,t("button",{type:"button",class:"btn btn-danger",onClick:s[1]||(s[1]=(...r)=>l.logout&&l.logout(...r))},"確定")])])])])],64)}const j=h(y,[["render",O]]);var F={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:H,VITE_PATH:X}=F,z={data(){return{api:H,api_path:X}},components:{AdminNavbarLayout:j},methods:{checkUser(){this.$http.post(`${this.api}/api/user/check`).then(e=>{}).catch(e=>{console.log(e),alert("登入失敗，請重新登入"),this.$router.push("/login")})}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.checkUser()}},J={class:"main"},q={class:"container"},G=t("footer",{class:"bg-light py-15 admin-footer"},[t("p",{class:"text-center mb-0"},"Raiko 休日製作所"),t("p",{class:"text-center mb-0"},"本網站不提供商業用途")],-1);function K(e,s,g,v,_,l){const c=d("AdminNavbarLayout"),n=d("RouterView");return p(),f(b,null,[o(c),t("div",J,[t("div",q,[o(n)])]),G],64)}const Y=h(z,[["render",K]]);export{Y as default};

import{p as k}from"./PaginationMode-3FIncoGC.js";import{M as g,T as x}from"./bootstrap.esm-l9cKv-78.js";import{_ as T,c as d,b as f,a as t,F as v,f as P,t as i,j as c,v as m,l as L,d as M,r as y,o as h}from"./index-G1GnYj3j.js";var D={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p,VITE_PATH:r}=D;let _=null,b=null,u=null;const E={components:{pagination:k},data(){return{data:[],tempItem:{},currentPage:1,perPage:10,totalPage:"",date:"",title:"",toastTitle:"",toastContent:"",isLoading:!0,fallPage:!1}},methods:{getData(o=1){this.isLoading=!0;const e=`${p}/api/${r}/admin/coupons?page=${o}`;this.$http.get(e).then(a=>{this.data=a.data.coupons,console.log(a.data.pagination),this.totalPage=a.data.pagination.total_pages,console.log(this.totalPage),this.currentPage=o}).catch(a=>{this.toastTitle="取得商品",this.toastContent=a.response.data.message,this.toast.show()}).finally(()=>{this.isLoading=!1})},openModal(o,e){if(e==="edit"){this.title="編輯優惠券",this.tempItem={...o};const a=new Date(this.tempItem.due_date*1e3).toISOString().split("T");[this.date]=a,_.show()}else if(e==="new"){this.title="新增優惠券",o={title:"",is_enabled:0,percent:"",due_date:"",code:""},this.tempItem={...o};const a=new Date().toISOString().split("T");[this.date]=a,_.show()}else e==="delete"&&(this.tempItem={...o},b.show())},updateCoupon(){this.isLoading=!0;let o=`${p}/api/${r}/admin/coupon/${this.tempItem.id}`,e="put";this.toastTitle="更新優惠券",this.toastContent="優惠券已更新成功",this.title==="新增優惠券"&&(o=`${p}/api/${r}/admin/coupon`,e="post",this.toastTitle="新增優惠券",this.toastContent="優惠券已新增成功"),this.$http[e](o,{data:this.tempItem}).then(a=>{this.getData(),_.hide(),u.show()}).catch(a=>{this.toastContent=a.response.data.message,u.show()}).finally(()=>{this.isLoading=!1})},deleteCoupon(){this.isLoading=!0;const o=`${p}/api/${r}/admin/coupon/${this.tempItem.id}`;this.$http.delete(o).then(e=>{this.getData(),b.hide(),this.toastTitle="刪除優惠券",this.toastContent="優惠券已刪除成功",u.show()}).catch(e=>{this.toastContent=e.response.data.message,u.show()}).finally(()=>{this.isLoading=!1})},swichPage(o){const e=`${p}/api/${r}/admin/coupons?page=${o}`;this.isLoading=!0,this.$http.get(e).then(a=>{this.data=a.data.coupons,this.currentPage=o}).catch(a=>{alert(a.response.data.message)}).finally(()=>{this.isLoading=!1})}},watch:{date(){this.tempItem.due_date=Math.floor(new Date(this.date)/1e3)}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=o,_=new g(document.getElementById("couponEditModal"),{keyboard:!1,backdrop:"static"}),b=new g(document.getElementById("couponDeleteModal"),{keyboard:!1,backdrop:"static"}),u=new x(document.getElementById("toast")),this.getData()}},V={class:"container"},S=t("h2",{class:"py-8 mb-0"},"優惠券管理",-1),U={class:"row"},B={class:"text-end mb-2"},A={class:"table mt-4 align-middle text-center table-striped"},R=t("thead",null,[t("tr",{class:"table-dark"},[t("th",{scope:"col",width:"120"}," 名稱 "),t("th",{scope:"col",width:"250"}," 折扣百分比 "),t("th",{scope:"col",width:"120"}," 到期日 "),t("th",{scope:"col",width:"120"}," 狀態 "),t("th",{scope:"col",width:"100"}),t("th",{scope:"col",width:"100"})])],-1),O={class:"fw-bold"},$={key:0,class:"text-success fw-bold"},N={key:1,class:"text-secondary"},j=["onClick"],F=t("i",{class:"bi bi-pencil me-2"},null,-1),H=t("span",null,"編輯",-1),q=[F,H],z=["onClick"],X=t("i",{class:"bi bi-x-lg"},null,-1),G=[X],J={class:"modal fade",id:"couponEditModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},K={class:"modal-dialog modal-dialog-centered"},Q={class:"modal-content"},W={class:"modal-header"},Y={class:"modal-title",id:"exampleModalLabel"},Z=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),tt={class:"modal-body"},et={class:"mb-3"},st=t("label",{for:"title",class:"form-label"},"優惠卷名稱",-1),ot={class:"mb-3"},at=t("label",{for:"code",class:"form-label"},"優惠碼",-1),lt={class:"mb-3"},nt=t("label",{for:"date",class:"form-label"},"到期日",-1),it={class:"mb-3"},dt=t("label",{for:"percent",class:"form-label"},"折扣百分比",-1),ct={class:"form-check d-flex justify-content-end"},ht=t("label",{for:"abled",class:"form-lable mx-3"},"啟用",-1),pt={class:"modal-footer"},rt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),ut={class:"modal fade",id:"couponDeleteModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},mt={class:"modal-dialog modal-dialog-centered"},_t={class:"modal-content"},bt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"刪除優惠券"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),gt={class:"modal-body"},ft={class:"text-danger fw-bold"},vt={class:"modal-footer"},yt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),wt={id:"toast",class:"toast hide toast-container position-fixed toast-placement",role:"alert","aria-live":"assertive","aria-atomic":"true"},It={class:"toast-header mb-0"},Ct={class:"me-auto"},kt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),xt={class:"toast-body"};function Tt(o,e,a,Pt,l,n){const w=y("VueLoading"),I=y("pagination");return h(),d(v,null,[f(w,{active:l.isLoading},null,8,["active"]),t("div",V,[S,t("div",U,[t("div",B,[t("button",{class:"btn btn-dark fw-bold",onClick:e[0]||(e[0]=s=>n.openModal(o.item={},"new"))}," 建立優惠券 ")]),t("table",A,[R,t("tbody",null,[(h(!0),d(v,null,P(l.data,s=>(h(),d("tr",{key:s.id},[t("td",O,i(s.title),1),t("td",null,i(s.percent)+" %",1),t("td",null,i(new Date(s.due_date*1e3).toLocaleDateString()),1),t("td",null,[s.is_enabled?(h(),d("span",$,"已啟用")):(h(),d("span",N,"尚未啟用"))]),t("td",null,[t("button",{type:"button",class:"btn btn-dark btn-sm",onClick:C=>n.openModal(s,"edit")},q,8,j)]),t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:C=>n.openModal(s,"delete")},G,8,z)])]))),128))])])])]),t("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("h5",Y,i(l.title),1),Z]),t("div",tt,[t("div",et,[st,c(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入優惠卷名稱","onUpdate:modelValue":e[1]||(e[1]=s=>l.tempItem.title=s)},null,512),[[m,l.tempItem.title]])]),t("div",ot,[at,c(t("input",{id:"code",type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[2]||(e[2]=s=>l.tempItem.code=s)},null,512),[[m,l.tempItem.code]])]),t("div",lt,[nt,c(t("input",{type:"date",class:"form-control",id:"date","onUpdate:modelValue":e[3]||(e[3]=s=>l.date=s)},null,512),[[m,l.date]])]),t("div",it,[dt,c(t("input",{id:"percent",type:"text",class:"form-control",placeholder:"請輸入折扣百分比","onUpdate:modelValue":e[4]||(e[4]=s=>l.tempItem.percent=s)},null,512),[[m,l.tempItem.percent,void 0,{number:!0}]])]),t("div",ct,[c(t("input",{type:"checkbox",id:"abled",class:"form-check-input","true-value":1,"false-value":0,"onUpdate:modelValue":e[5]||(e[5]=s=>l.tempItem.is_enabled=s)},null,512),[[L,l.tempItem.is_enabled]]),ht])]),t("div",pt,[rt,t("button",{type:"button",class:"btn btn-success",onClick:e[6]||(e[6]=(...s)=>n.updateCoupon&&n.updateCoupon(...s))},"確定")])])])]),t("div",ut,[t("div",mt,[t("div",_t,[bt,t("div",gt,[t("p",null,[M("是否確定刪除"),t("span",ft,i(this.tempItem.title)+"優惠券(刪除後將無法恢復)",1)])]),t("div",vt,[yt,t("button",{type:"button",class:"btn btn-danger",onClick:e[7]||(e[7]=(...s)=>n.deleteCoupon&&n.deleteCoupon(...s))},"確定")])])])]),t("div",wt,[t("div",It,[t("strong",Ct,i(l.toastTitle),1),kt]),t("div",xt,i(l.toastContent),1)]),f(I,{"total-Page":l.totalPage,"current-Page":l.currentPage,onSwichPage:n.swichPage,class:"my-15"},null,8,["total-Page","current-Page","onSwichPage"])],64)}const Et=T(E,[["render",Tt]]);export{Et as default};

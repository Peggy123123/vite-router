import{p as k}from"./PaginationMode-5ZjKHgu6.js";import{M as g,T as x}from"./bootstrap.esm-l9cKv-78.js";import{_ as T,c as d,b as f,w as P,d as t,F as v,z as L,t as i,B as c,C as u,G as M,g as D,r as y,o as h}from"./index-cUJmH-yp.js";import{_ as E}from"./icon-t1Ce2sCx.js";var V={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:r,VITE_PATH:p}=V;let _=null,b=null,m=null;const S={components:{pagination:k},data(){return{data:[],tempItem:{},currentPage:1,perPage:10,totalPage:"",date:"",title:"",toastTitle:"",toastContent:"",isLoading:!0,fallPage:!1}},methods:{getData(o=1){this.isLoading=!0;const e=`${r}/api/${p}/admin/coupons?page=${o}`;this.$http.get(e).then(a=>{this.data=a.data.coupons,console.log(a.data.pagination),this.totalPage=a.data.pagination.total_pages,console.log(this.totalPage),this.currentPage=o}).catch(a=>{this.toastTitle="取得商品",this.toastContent=a.response.data.message,this.toast.show()}).finally(()=>{this.isLoading=!1})},openModal(o,e){if(e==="edit"){this.title="編輯優惠券",this.tempItem={...o};const a=new Date(this.tempItem.due_date*1e3).toISOString().split("T");[this.date]=a,_.show()}else if(e==="new"){this.title="新增優惠券",o={title:"",is_enabled:0,percent:"",due_date:"",code:""},this.tempItem={...o};const a=new Date().toISOString().split("T");[this.date]=a,_.show()}else e==="delete"&&(this.tempItem={...o},b.show())},updateCoupon(){this.isLoading=!0;let o=`${r}/api/${p}/admin/coupon/${this.tempItem.id}`,e="put";this.toastTitle="更新優惠券",this.toastContent="優惠券已更新成功",this.title==="新增優惠券"&&(o=`${r}/api/${p}/admin/coupon`,e="post",this.toastTitle="新增優惠券",this.toastContent="優惠券已新增成功"),this.$http[e](o,{data:this.tempItem}).then(a=>{this.getData(),_.hide(),m.show()}).catch(a=>{this.toastContent=a.response.data.message,m.show()}).finally(()=>{this.isLoading=!1})},deleteCoupon(){this.isLoading=!0;const o=`${r}/api/${p}/admin/coupon/${this.tempItem.id}`;this.$http.delete(o).then(e=>{this.getData(),b.hide(),this.toastTitle="刪除優惠券",this.toastContent="優惠券已刪除成功",m.show()}).catch(e=>{this.toastContent=e.response.data.message,m.show()}).finally(()=>{this.isLoading=!1})},swichPage(o){const e=`${r}/api/${p}/admin/coupons?page=${o}`;this.isLoading=!0,this.$http.get(e).then(a=>{this.data=a.data.coupons,this.currentPage=o}).catch(a=>{alert(a.response.data.message)}).finally(()=>{this.isLoading=!1})}},watch:{date(){this.tempItem.due_date=Math.floor(new Date(this.date)/1e3)}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=o,_=new g(document.getElementById("couponEditModal"),{keyboard:!1,backdrop:"static"}),b=new g(document.getElementById("couponDeleteModal"),{keyboard:!1,backdrop:"static"}),m=new x(document.getElementById("toast")),this.getData()}},B=t("div",{class:"loading-img-bg"},[t("img",{class:"loading-img",src:E,alt:""})],-1),U={class:"container"},R=t("h2",{class:"py-8 mb-0"},"優惠券管理",-1),A={class:"row"},O={class:"text-end bg-light py-5 border rounded-3 d-flex justify-content-between"},$={class:"table mt-4 align-middle text-center table-striped"},N=t("thead",null,[t("tr",{class:"table-dark"},[t("th",{scope:"col",width:"120"}," 名稱 "),t("th",{scope:"col",width:"250"}," 折扣百分比 "),t("th",{scope:"col",width:"120"}," 到期日 "),t("th",{scope:"col",width:"120"}," 狀態 "),t("th",{scope:"col",width:"100"}),t("th",{scope:"col",width:"100"})])],-1),j={class:"fw-bold"},z={key:0,class:"text-success fw-bold"},F={key:1,class:"text-secondary"},H=["onClick"],q=t("i",{class:"bi bi-pencil me-2"},null,-1),G=t("span",null,"編輯",-1),X=[q,G],J=["onClick"],K=t("i",{class:"bi bi-x-lg"},null,-1),Q=[K],W={class:"modal fade",id:"couponEditModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Y={class:"modal-dialog modal-dialog-centered"},Z={class:"modal-content"},tt={class:"modal-header"},et={class:"modal-title",id:"exampleModalLabel"},st=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ot={class:"modal-body"},at={class:"mb-3"},lt=t("label",{for:"title",class:"form-label"},"優惠卷名稱",-1),nt={class:"mb-3"},it=t("label",{for:"code",class:"form-label"},"優惠碼",-1),dt={class:"mb-3"},ct=t("label",{for:"date",class:"form-label"},"到期日",-1),ht={class:"mb-3"},rt=t("label",{for:"percent",class:"form-label"},"折扣百分比",-1),pt={class:"form-check d-flex justify-content-end"},mt=t("label",{for:"abled",class:"form-lable mx-3"},"啟用",-1),ut={class:"modal-footer"},_t=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),bt={class:"modal fade",id:"couponDeleteModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},gt={class:"modal-dialog modal-dialog-centered"},ft={class:"modal-content"},vt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"刪除優惠券"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),yt={class:"modal-body"},wt={class:"text-danger fw-bold"},Ct={class:"modal-footer"},It=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),kt={id:"toast",class:"toast hide toast-container position-fixed toast-placement",role:"alert","aria-live":"assertive","aria-atomic":"true"},xt={class:"toast-header mb-0"},Tt={class:"me-auto"},Pt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),Lt={class:"toast-body"};function Mt(o,e,a,Dt,l,n){const w=y("VueLoading"),C=y("pagination");return h(),d(v,null,[f(w,{active:l.isLoading},{default:P(()=>[B]),_:1},8,["active"]),t("div",U,[R,t("div",A,[t("div",O,[t("button",{class:"btn btn-dark fw-bold",onClick:e[0]||(e[0]=s=>n.openModal(o.item={},"new"))}," 建立優惠券 ")]),t("table",$,[N,t("tbody",null,[(h(!0),d(v,null,L(l.data,s=>(h(),d("tr",{key:s.id},[t("td",j,i(s.title),1),t("td",null,i(s.percent)+" %",1),t("td",null,i(new Date(s.due_date*1e3).toLocaleDateString()),1),t("td",null,[s.is_enabled?(h(),d("span",z,"已啟用")):(h(),d("span",F,"尚未啟用"))]),t("td",null,[t("button",{type:"button",class:"btn btn-dark btn-sm",onClick:I=>n.openModal(s,"edit")},X,8,H)]),t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:I=>n.openModal(s,"delete")},Q,8,J)])]))),128))])])])]),t("div",W,[t("div",Y,[t("div",Z,[t("div",tt,[t("h5",et,i(l.title),1),st]),t("div",ot,[t("div",at,[lt,c(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入優惠卷名稱","onUpdate:modelValue":e[1]||(e[1]=s=>l.tempItem.title=s)},null,512),[[u,l.tempItem.title]])]),t("div",nt,[it,c(t("input",{id:"code",type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[2]||(e[2]=s=>l.tempItem.code=s)},null,512),[[u,l.tempItem.code]])]),t("div",dt,[ct,c(t("input",{type:"date",class:"form-control",id:"date","onUpdate:modelValue":e[3]||(e[3]=s=>l.date=s)},null,512),[[u,l.date]])]),t("div",ht,[rt,c(t("input",{id:"percent",type:"text",class:"form-control",placeholder:"請輸入折扣百分比","onUpdate:modelValue":e[4]||(e[4]=s=>l.tempItem.percent=s)},null,512),[[u,l.tempItem.percent,void 0,{number:!0}]])]),t("div",pt,[c(t("input",{type:"checkbox",id:"abled",class:"form-check-input","true-value":1,"false-value":0,"onUpdate:modelValue":e[5]||(e[5]=s=>l.tempItem.is_enabled=s)},null,512),[[M,l.tempItem.is_enabled]]),mt])]),t("div",ut,[_t,t("button",{type:"button",class:"btn btn-success",onClick:e[6]||(e[6]=(...s)=>n.updateCoupon&&n.updateCoupon(...s))},"確定")])])])]),t("div",bt,[t("div",gt,[t("div",ft,[vt,t("div",yt,[t("p",null,[D("是否確定刪除"),t("span",wt,i(this.tempItem.title)+"優惠券(刪除後將無法恢復)",1)])]),t("div",Ct,[It,t("button",{type:"button",class:"btn btn-danger",onClick:e[7]||(e[7]=(...s)=>n.deleteCoupon&&n.deleteCoupon(...s))},"確定")])])])]),t("div",kt,[t("div",xt,[t("strong",Tt,i(l.toastTitle),1),Pt]),t("div",Lt,i(l.toastContent),1)]),f(C,{"total-Page":l.totalPage,"current-Page":l.currentPage,onSwichPage:n.swichPage,class:"my-15"},null,8,["total-Page","current-Page","onSwichPage"])],64)}const Ut=T(S,[["render",Mt]]);export{Ut as default};

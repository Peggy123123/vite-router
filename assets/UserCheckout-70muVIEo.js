import{_ as D,c as d,b as a,w as f,d as e,F as b,z as S,A as v,t as i,e as y,g as E,r as c,o as r,n as p,B as T,C as U}from"./index-8z0lRxi9.js";import{_ as C}from"./icon-t1Ce2sCx.js";var N={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:x,VITE_PATH:V}=N,I={data(){return{user:{name:"",email:"",tel:"",address:""},message:"",cartData:[],addCartQty:1,final_total:0,total:0,isLoading:!0}},methods:{isPhone(n){return/^(09)[0-9]{8}$/.test(n)?!0:"需要正確的電話號碼"},showCart(){this.isLoading=!0;const n=`${x}/api/${V}/cart`;this.$http.get(n).then(t=>{this.cartData=t.data.data.carts,this.final_total=t.data.data.final_total,this.total=t.data.data.total}).catch(t=>{alert(t.response.data.message)}).finally(()=>{this.isLoading=!1})},sentOrder(){let n=this.user,t=this.message;this.isLoading=!0;const g=`${x}/api/${V}/order`;this.$http.post(g,{data:{user:n},message:t}).then(m=>{this.cartData=[],this.$refs.form.resetForm(),localStorage.setItem("orderId",m.data.orderId),this.$router.push("order_complete")}).catch(m=>{alert(m.response.data.message)}).finally(()=>{this.isLoading=!1})}},mounted(){this.showCart()}},P=e("div",{class:"loading-img-bg"},[e("img",{class:"loading-img",src:C,alt:""})],-1),O={class:"container my-35"},R=e("i",{class:"bi bi-arrow-left me-2"},null,-1),q=e("p",{class:"text-center"},[e("a",{class:"text-secondary","data-bs-toggle":"collapse",href:"#cart",role:"button","aria-expanded":"false","aria-controls":"collapseExample"},[e("i",{class:"bi bi-chevron-down me-3"}),y("購物車資訊")])],-1),B={class:"collapse",id:"cart"},A={class:""},F={class:"table align-middle"},z=e("thead",null,[e("tr",null,[e("th",{class:"thead-text"},"商品"),e("th",{class:"text-center thead-text"},"數量"),e("th",{class:"text-end thead-text"},"單價"),e("th",{class:"text-end thead-text"},"小計")])],-1),H={height:"100"},M=["src","alt"],Q=e("br",{class:"d-md-none"},null,-1),X={class:"text-center"},j={class:"text-end"},G={class:"fs-12 text-decoration-line-through"},J={class:"fs-14"},K={class:"text-end fs-14"},W={key:0},Y=e("p",{class:"text-center mb-0"},"購物車內還沒有商品",-1),Z=[Y],$={class:"row"},ee=e("h2",{class:"h5 mb-5"},"填寫顧客資料",-1),te={class:"col-lg-4"},se=E('<div class="bg-light p-5 mb-8"><h3 class="fs-14 mb-3">寄送地點</h3><select class="form-select form-select-sm pad-width-change-50 mb-8" aria-label="Default select example"><option selected value="台灣本島">台灣本島</option><option value="台灣離島">台灣離島</option></select><h3 class="fs-14 mb-3">收貨方式</h3><select class="form-select form-select-sm pad-width-change-50 mb-8" aria-label="Default select example"><option selected value="宅配">宅配</option><option value="超商取貨(7-11)">超商取貨(7-11)</option><option value="超商取貨(全家)">超商取貨(全家)</option></select><h3 class="fs-14 mb-3">付款資料</h3><select class="form-select form-select-sm pad-width-change-50" aria-label="Default select example"><option selected value="信用卡">信用卡</option><option value="LinePay">LinePay</option><option value="宅配取貨付款">宅配取貨付款</option><option value="超商代碼">超商代碼</option></select></div>',1),le={class:"table table-borderless mb-10 mb-md-5"},oe=e("thead",null,[e("tr",{class:"thead-text border-bottom"},[e("th",null,"訂單小計"),e("td")])],-1),ae={class:"fs-14"},ie=e("td",null,"合計金額",-1),ne={class:"border-bottom fs-14"},de=e("td",null,"優惠折抵",-1),ce={class:"fw-bold"},re=e("td",{class:"text-primary"},"總金額",-1),me={class:"text-primary"},_e={class:"col-lg-8"},he={class:"bg-light p-5"},ue={class:"mb-3"},pe=e("label",{for:"email",class:"form-label thead-text"},"Email",-1),fe={class:"mb-3"},be=e("label",{for:"name",class:"form-label form-label-text thead-text"},"收件人姓名",-1),ge={class:"mb-3"},ve=e("label",{for:"tel",class:"form-label thead-text"},"收件人電話",-1),xe={class:"mb-3"},Ve=e("label",{for:"address",class:"form-label thead-text"},"收件人地址",-1),ye={class:"mb-3"},Le=e("label",{for:"message",class:"form-label thead-text"},"訂單備註",-1),ke={class:"text-end mt-8"};function we(n,t,g,m,s,_){const L=c("VueLoading"),k=c("router-link"),h=c("v-field"),u=c("error-message"),w=c("v-form");return r(),d(b,null,[a(L,{active:s.isLoading},{default:f(()=>[P]),_:1},8,["active"]),e("div",O,[a(k,{class:"d-inline-block my-8 link-secondary",to:"/cart"},{default:f(()=>[R,y("返回購物車")]),_:1}),q,e("div",B,[e("div",A,[e("table",F,[z,e("tbody",null,[s.cartData?(r(),d(b,{key:0},[(r(!0),d(b,null,S(s.cartData,l=>(r(),d("tr",{key:l.id},[e("td",H,[e("img",{src:l.product.imageUrl,alt:l.product.title,width:"100",class:"rounded-2 me-5 mb-3 mb-md-0"},null,8,M),Q,e("span",null,i(l.product.title),1)]),e("td",null,[e("div",X,i(l.qty),1)]),e("td",j,[e("div",G,i(l.product.origin_price.toLocaleString()),1),e("div",J,"NT."+i(l.product.price.toLocaleString()),1)]),e("td",K,"NT."+i((l.product.price*l.qty).toLocaleString()),1)]))),128)),s.cartData.length<1?(r(),d("div",W,Z)):v("",!0)],64)):v("",!0)])])])]),e("div",$,[ee,e("div",te,[se,e("table",le,[oe,e("tbody",null,[e("tr",ae,[ie,e("td",null,i(s.total.toLocaleString())+" 元",1)]),e("tr",ne,[de,e("td",null,i(s.total-s.final_total)+" 元",1)]),e("tr",ce,[re,e("td",me,i(s.final_total.toLocaleString())+" 元",1)])])])]),e("div",_e,[e("div",he,[a(w,{ref:"form",onSubmit:_.sentOrder},{default:f(({errors:l})=>[e("div",ue,[pe,a(h,{id:"email",name:"email",type:"email",class:p(["form-control",{"is-invalid":l.email}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:s.user.email,"onUpdate:modelValue":t[0]||(t[0]=o=>s.user.email=o)},null,8,["class","modelValue"]),a(u,{name:"email",class:"invalid-feedback"})]),e("div",fe,[be,a(h,{id:"name",name:"姓名",type:"text",class:p(["form-control",{"is-invalid":l.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.user.name,"onUpdate:modelValue":t[1]||(t[1]=o=>s.user.name=o)},null,8,["class","modelValue"]),a(u,{name:"姓名",class:"invalid-feedback"})]),e("div",ge,[ve,a(h,{id:"tel",name:"電話",type:"text",class:p(["form-control",{"is-invalid":l.電話}]),placeholder:"請輸入電話",rules:_.isPhone,modelValue:s.user.tel,"onUpdate:modelValue":t[2]||(t[2]=o=>s.user.tel=o)},null,8,["class","rules","modelValue"]),a(u,{name:"電話",class:"invalid-feedback"})]),e("div",xe,[Ve,a(h,{id:"address",name:"地址",type:"text",class:p(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.user.address,"onUpdate:modelValue":t[3]||(t[3]=o=>s.user.address=o)},null,8,["class","modelValue"]),a(u,{name:"地址",class:"invalid-feedback"})]),e("div",ye,[Le,T(e("textarea",{id:"message",class:"form-control",placeholder:"有什麼想告訴賣家的嗎？",cols:"30",rows:"3","onUpdate:modelValue":t[4]||(t[4]=o=>s.message=o)},null,512),[[U,s.message]])]),e("div",ke,[e("button",{type:"submit",class:"addcart-btn-hover pad-width-change-25",onSubmit:t[5]||(t[5]=(...o)=>_.sentOrder&&_.sentOrder(...o))},"確認訂購",32)])]),_:1},8,["onSubmit"])])])])])],64)}const Ee=D(I,[["render",we]]);export{Ee as default};
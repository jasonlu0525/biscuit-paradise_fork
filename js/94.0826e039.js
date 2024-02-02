"use strict";(self["webpackChunkbiscuit_paradise"]=self["webpackChunkbiscuit_paradise"]||[]).push([[94],{94:function(o,t,e){e.r(t),e.d(t,{default:function(){return K}});var n=e(3396),a=e(7139);const l={class:"text-end mt-4"},s={class:"table mt-3"},d=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),i={key:0,class:"text-success"},p={key:1,class:"text-muted"},u={class:"btn-group"},c=["onClick"],r=["onClick"];function m(o,t,e,m,h,_){const b=(0,n.up)("LoadingComp"),C=(0,n.up)("CouponModal"),f=(0,n.up)("DelModal");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(b,{active:h.isLoading},null,8,["active"]),(0,n._)("div",l,[(0,n._)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=o=>_.openCouponModal(!0))},"建立新的優惠券")]),(0,n._)("table",s,[d,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.coupons,((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("td",null,(0,a.zw)(t.title),1),(0,n._)("td",null,(0,a.zw)(t.percent)+"%",1),(0,n._)("td",null,(0,a.zw)(o.$formatFilters.date(t.due_date)),1),(0,n._)("td",null,[1===t.is_enabled?((0,n.wg)(),(0,n.iD)("span",i,"啟用")):((0,n.wg)(),(0,n.iD)("span",p,"未啟用"))]),(0,n._)("td",null,[(0,n._)("div",u,[(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:o=>_.openCouponModal(!1,t)},"編輯",8,c),(0,n._)("button",{class:"btn btn-outline-danger btn-sm",onClick:o=>_.openDelCouponModal(t)},"刪除",8,r)])])])))),128))])]),(0,n.Wm)(C,{coupon:h.tempCoupon,ref:"couponModal",onUpdateCoupon:_.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,n.Wm)(f,{item:h.tempCoupon,ref:"delModal",onDelItem:_.delCoupon},null,8,["item","onDelItem"])])}var h=e(9242);const _={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},b={class:"modal-dialog",role:"document"},C={class:"modal-content"},f=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠劵"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},v={class:"mb-3"},M=(0,n._)("label",{for:"title"},"標題",-1),y={class:"mb-3"},w=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),k={class:"mb-3"},$=(0,n._)("label",{for:"due_date"},"到期日",-1),D={class:"mb-3"},x=(0,n._)("label",{for:"price"},"折扣百分比",-1),L={class:"mb-3"},U={class:"form-check"},S=(0,n._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),V={class:"modal-footer"},N=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function Z(o,t,e,a,l,s){return(0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("div",b,[(0,n._)("div",C,[f,(0,n._)("div",g,[(0,n._)("div",v,[M,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=o=>l.tempCoupon.title=o),placeholder:"請輸入標題"},null,512),[[h.nr,l.tempCoupon.title]])]),(0,n._)("div",y,[w,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=o=>l.tempCoupon.code=o),placeholder:"請輸入優惠碼"},null,512),[[h.nr,l.tempCoupon.code]])]),(0,n._)("div",k,[$,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=o=>l.due_date=o)},null,512),[[h.nr,l.due_date]])]),(0,n._)("div",D,[x,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[3]||(t[3]=o=>l.tempCoupon.percent=o),placeholder:"請輸入折扣百分比"},null,512),[[h.nr,l.tempCoupon.percent,void 0,{number:!0}]])]),(0,n._)("div",L,[(0,n._)("div",U,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=o=>l.tempCoupon.is_enabled=o),id:"is_enabled"},null,512),[[h.e8,l.tempCoupon.is_enabled]]),S])])]),(0,n._)("div",V,[N,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>o.$emit("update-coupon",l.tempCoupon))},"更新優惠券")])])])],512)}var z=e(1339),I={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const o=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=o},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[z.Z]},W=e(89);const O=(0,W.Z)(I,[["render",Z]]);var T=O,j=e(8783),F={components:{CouponModal:T,DelModal:j.Z},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{openCouponModal(o,t){this.isNew=o,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...t},this.$refs.couponModal.showModal()},openDelCouponModal(o){this.tempCoupon={...o};const t=this.$refs.delModal;t.showModal()},getCoupons(){this.isLoading=!0;const o="https://vue3-course-api.hexschool.io/api/samtgy-api/admin/coupons";this.$http.get(o).then((o=>{this.coupons=o.data.coupons,this.isLoading=!1}))},updateCoupon(o){if(this.isNew){const t="https://vue3-course-api.hexschool.io/api/samtgy-api/admin/coupon";this.$http.post(t,{data:o}).then((o=>{this.$httpMessageState(o,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}else{const o=`https://vue3-course-api.hexschool.io/api/samtgy-api/admin/coupon/${this.tempCoupon.id}`;this.$http.put(o,{data:this.tempCoupon}).then((o=>{this.$httpMessageState(o,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}},delCoupon(){const o=`https://vue3-course-api.hexschool.io/api/samtgy-api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(o).then((o=>{this.$httpMessageState(o,"刪除優惠券");const t=this.$refs.delModal;t.hideModal(),this.getCoupons()}))}},created(){this.getCoupons()}};const H=(0,W.Z)(F,[["render",m]]);var K=H}}]);
//# sourceMappingURL=94.0826e039.js.map
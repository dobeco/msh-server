webpackJsonp([4],{ZtLn:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Dd8w"),r=e.n(a),i=e("NYxO"),n=e("3Zko"),o={data:function(){return{keyword:"",imgBaseUrl:"http://cangdu.org:8001/img/",noSearchShops:!1}},computed:r()({},Object(i.d)(["searchShops"])),methods:{search:function(){var t=this.keyword.trim();t&&this.$store.dispatch("searchShops",t)}},watch:{searchShops:function(t){t.length?this.noSearchShops=!1:this.noSearchShops=!0}},components:{HeaderTop:n.a}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"search"},[e("HeaderTop",{attrs:{title:"搜索"}}),t._v(" "),e("form",{staticClass:"search_form",on:{submit:function(s){s.preventDefault(),t.search(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search_input",attrs:{type:"search",placeholder:"请输入商家名称"},domProps:{value:t.keyword},on:{input:function(s){s.target.composing||(t.keyword=s.target.value)}}}),t._v(" "),e("input",{staticClass:"search_submit",attrs:{type:"submit"}})]),t._v(" "),t.noSearchShops?e("div",{staticClass:"search_none"},[t._v("很抱歉！无搜索结果")]):e("section",{staticClass:"list"},[e("ul",{staticClass:"list_container"},t._l(t.searchShops,function(s){return e("router-link",{key:s.id,staticClass:"list_li",attrs:{to:{path:"/shop",query:{id:s.id}},tag:"li"}},[e("section",{staticClass:"item_left"},[e("img",{staticClass:"restaurant_img",attrs:{src:t.imgBaseUrl+s.image_path}})]),t._v(" "),e("section",{staticClass:"item_right"},[e("div",{staticClass:"item_right_text"},[e("p",[e("span",[t._v(t._s(s.name))])]),t._v(" "),e("p",[t._v("月售 "+t._s(s.month_sales||s.recent_order_num)+" 单")]),t._v(" "),e("p",[t._v(t._s(s.delivery_fee||s.float_minimum_order_amount)+" 元起送 / 距离"+t._s(s.distance))])])])])}))])],1)},staticRenderFns:[]};var l=e("VU/8")(o,c,!1,function(t){e("gR7d")},"data-v-23cc0760",null);s.default=l.exports},gR7d:function(t,s){}});
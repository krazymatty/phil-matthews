import{u as Q}from"./index.20192476.js";import{n as U}from"./numbers.b55b32c5.js";import{C as X,b as Y,d as Z}from"./Caret.662da1f3.js";import"./translations.12335a6a.js";import{o as l,c as n,F as h,J as f,a as u,t as b,Q as O,_ as x,k as g,l as y,x as P,G as _,E as N,q as R,S as D,H as W,v as p,C as A,b as r,m as F,j as $,B as ee,$ as q}from"./runtime-dom.esm-bundler.6789c400.js";import{_ as B}from"./_plugin-vue_export-helper.249dac1d.js";import{_ as v}from"./default-i18n.54b5d8cd.js";import{C as te}from"./Tooltip.b6b45c85.js";import{T as se}from"./Slide.d0517fb0.js";import{S as le}from"./Download.6a0d8455.js";const ae=t=>t.map(function(s){return typeof s=="object"?JSON.stringify(Object.values(s)):s}).join(`
`).replace(/(^\[)|(\]$)/mg,""),oe=(t,s)=>{const e=new Blob([t]),d=document.createElement("a");d.href=URL.createObjectURL(e),d.download=s,d.click(),URL.revokeObjectURL(d.href)},ne="all-in-one-seo-pack",ie={emits:["process-additional-filters","change"],props:{additionalFilters:{type:Array,required:!0},selectedFilters:{type:Object,default(){return{}}}},data(){return{strings:{filter:v("Filter",ne)}}},methods:{setInitialOptions(){this.additionalFilters.forEach(t=>{this.selectedFilters[t.name]||(this.selectedFilters[t.name]=t.options[0].value)})}},beforeMount(){this.setInitialOptions()},updated(){this.setInitialOptions()}},re={class:"aioseo-wp-additional-filters alignleft actions"},ue={class:"screen-reader-text"},ce=["name","onUpdate:modelValue","onChange"],de=["value","innerHTML"];function be(t,s,e,d,o,i){return l(),n("div",re,[(l(!0),n(h,null,f(e.additionalFilters,(c,w)=>(l(),n(h,{key:w},[u("label",ue,b(c.label),1),O(u("select",{name:c.name,"onUpdate:modelValue":T=>e.selectedFilters[c.name]=T,onChange:T=>t.$emit("change",{name:c.name,selectedValue:T.target.value})},[(l(!0),n(h,null,f(c.options,(T,L)=>(l(),n("option",{key:L,value:T.value,innerHTML:T.label},null,8,de))),128))],40,ce),[[x,e.selectedFilters[c.name]]])],64))),128)),u("button",{class:"button action",onClick:s[0]||(s[0]=c=>t.$emit("process-additional-filters",e.selectedFilters))},b(o.strings.filter),1)])}const me=B(ie,[["render",be]]),E="all-in-one-seo-pack",he={emits:["process-bulk-action"],props:{bulkOptions:{type:Array,required:!0},disableTable:Boolean},data(){return{bulkAction:"-1",strings:{bulkActions:v("Bulk Actions",E),apply:v("Apply",E)}}},watch:{bulkOptions(t){t.find(s=>s.value===this.bulkAction)===void 0&&(this.bulkAction="-1")}}},ge={class:"aioseo-wp-bulk-actions alignleft actions bulkactions"},pe=["disabled"],_e={value:"-1"},ke=["value"],fe=["disabled"];function ye(t,s,e,d,o,i){return l(),n("div",ge,[O(u("select",{"onUpdate:modelValue":s[0]||(s[0]=c=>o.bulkAction=c),disabled:e.disableTable},[u("option",_e,b(o.strings.bulkActions),1),(l(!0),n(h,null,f(e.bulkOptions,(c,w)=>(l(),n("option",{key:w,value:c.value},b(c.label),9,ke))),128))],8,pe),[[x,o.bulkAction]]),u("button",{class:"button action",onClick:s[1]||(s[1]=c=>o.bulkAction!=="-1"?t.$emit("process-bulk-action",o.bulkAction):null),disabled:e.disableTable},b(o.strings.apply),9,fe)])}const ve=B(he,[["render",ye]]),we="all-in-one-seo-pack",Pe={props:{modelValue:Number,disableTable:Boolean},data(){return{items:[5,10,20,25,50,100],itemsPerPage:20,strings:{itemsPerPage:v("items per page",we)}}},watch:{itemsPerPage(t){this.$emit("update:modelValue",t)}},mounted(){this.itemsPerPage=this.modelValue}},Ne={class:"aioseo-wp-items-per-page alignleft"},Te=["disabled"],Ce=["value"];function Fe(t,s,e,d,o,i){return l(),n("div",Ne,[u("label",null,[O(u("select",{"onUpdate:modelValue":s[0]||(s[0]=c=>o.itemsPerPage=c),disabled:e.disableTable},[(l(!0),n(h,null,f(o.items,(c,w)=>(l(),n("option",{key:w,value:c},b(c),9,Ce))),128))],8,Te),[[x,o.itemsPerPage]]),u("span",null,b(o.strings.itemsPerPage),1)])])}const Ae=B(Pe,[["render",Fe]]),M="all-in-one-seo-pack",Se={emits:["paginate"],props:{totals:{type:Object,required:!0},initialPageNumber:{type:Number,default(){return 1}},disableTable:Boolean},data(){return{numbers:U,pageNumber:1,strings:{of:v("of",M),items:v("items",M)}}},watch:{initialPageNumber(t){t!==this.pageNumber&&(this.pageNumber=t)}},methods:{toPage(t){this.pageNumber=t,this.$emit("paginate",parseInt(t))}},created(){this.pageNumber=this.initialPageNumber}},Be={class:"tablenav-pages pagination"},Re={class:"displaying-num"},Oe={class:"pagination-links"},Ie={class:"paging-input"},Le=["max","disabled"],xe={class:"tablenav-paging-text"};function He(t,s,e,d,o,i){return l(),n("div",Be,[u("span",Re,b(o.numbers.numberFormat(e.totals.total))+" "+b(o.strings.items),1),u("span",Oe,[(l(),g(R(o.pageNumber===1?"span":"a"),{href:"#",class:_(o.pageNumber===1?"tablenav-pages-navspan button disabled":"first-page button"),onClick:s[0]||(s[0]=N(c=>o.pageNumber===1?null:i.toPage(1),["prevent"]))},{default:y(()=>[P(" « ")]),_:1},8,["class"])),(l(),g(R(o.pageNumber===1?"span":"a"),{href:"#",class:_(o.pageNumber===1?"tablenav-pages-navspan button disabled":"prev-page button"),onClick:s[1]||(s[1]=N(c=>o.pageNumber===1?null:i.toPage(o.pageNumber-1),["prevent"]))},{default:y(()=>[P(" ‹ ")]),_:1},8,["class"])),u("span",Ie,[O(u("input",{class:"current-page",type:"number",name:"paged","onUpdate:modelValue":s[2]||(s[2]=c=>o.pageNumber=c),size:"2",min:1,max:e.totals.pages||1,step:1,"aria-describedby":"table-paging",onKeyup:s[3]||(s[3]=W(c=>i.toPage(o.pageNumber),["enter"])),disabled:!e.totals.pages||e.disableTable},null,40,Le),[[D,o.pageNumber]]),u("span",xe,b(o.strings.of)+" "+b(e.totals.pages||0),1)]),(l(),g(R(o.pageNumber===e.totals.pages||!e.totals.pages?"span":"a"),{href:"#",class:_(o.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"next-page button"),onClick:s[4]||(s[4]=N(c=>o.pageNumber===e.totals.pages||!e.totals.pages?null:i.toPage(o.pageNumber+1),["prevent"]))},{default:y(()=>[P(" › ")]),_:1},8,["class"])),(l(),g(R(o.pageNumber===e.totals.pages||!e.totals.pages?"span":"a"),{href:"#",class:_(o.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"last-page button"),onClick:s[5]||(s[5]=N(c=>o.pageNumber===e.totals.pages||!e.totals.pages?null:i.toPage(e.totals.pages),["prevent"]))},{default:y(()=>[P(" » ")]),_:1},8,["class"]))])])}const Ve=B(Se,[["render",He]]),je={emits:["sort-column"],components:{CoreTooltip:te},props:{column:{type:Object,required:!0},disableTable:Boolean,allowTooltipIcon:Boolean}},qe={key:0,class:"aioseo-table-header-tooltip-icon"},Ee=u("span",{class:"sorting-indicator"},null,-1);function Me(t,s,e,d,o,i){const c=p("core-tooltip");return l(),n("th",{scope:"col",style:$({width:e.column.width}),class:_(["aioseo-manage-column manage-column",[{sortable:!e.disableTable&&e.column.sortable,asc:e.column.sortDir==="asc"&&e.column.sortable,desc:e.column.sortDir==="desc"&&e.column.sortable,sorted:e.column.sortable&&e.column.sorted},e.column.slug]])},[e.allowTooltipIcon&&e.column.tooltipIcon?(l(),n("div",qe,[A(c,{class:"action",type:"action"},{tooltip:y(()=>[P(b(e.column.label),1)]),default:y(()=>[(l(),g(R(e.column.tooltipIcon)))]),_:1})])):r("",!0),!e.allowTooltipIcon||!e.column.tooltipIcon?(l(),n(h,{key:1},[e.column.sortable?(l(),n("a",{key:0,href:"#",onClick:s[0]||(s[0]=N(w=>t.$emit("sort-column",e.column,w),["prevent"]))},[u("span",null,b(e.column.label),1),Ee])):r("",!0),e.column.sortable?r("",!0):(l(),n(h,{key:1},[t.$slots.headerFooter?F(t.$slots,"headerFooter",{key:0}):r("",!0),t.$slots.headerFooter?r("",!0):(l(),n(h,{key:1},[P(b(e.column.label),1)],64))],64))],64)):r("",!0)],6)}const Ue=B(je,[["render",Me]]),I="all-in-one-seo-pack",De={emits:["sort-column","process-bulk-action","paginate","search","filter-table","process-change-items-per-page","process-additional-filters","additional-filter-option-selected"],setup(){return{rootStore:Q()}},components:{CoreAlert:X,CoreLoader:Y,CoreWpAdditionalFilters:me,CoreWpBulkActions:ve,CoreWpItemsPerPage:Ae,CoreWpPagination:Ve,CoreWpTableHeaderFooter:Ue,TransitionSlide:se,SvgDownload:le},props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},filters:{type:Array,required:!1},totals:{type:Object,required:!1},loading:Boolean,showSearch:{type:Boolean,default(){return!0}},showBulkActions:{type:Boolean,default(){return!0}},showPagination:{type:Boolean,default(){return!0}},showTableFooter:{type:Boolean,default(){return!0}},showHeader:{type:Boolean,default(){return!0}},searchLabel:{type:String,default(){return v("Search",I)}},initialPageNumber:{type:Number,default(){return 1}},initialItemsPerPage:{type:Number,default(){return 20}},initialSearchTerm:{type:String,default(){return""}},noResultsLabel:{type:String},bulkOptions:Array,additionalFilters:Array,selectedFilters:Object,itemsPerPageFilter:String,blurRows:Boolean,disableTable:Boolean,showItemsPerPage:Boolean,exportColumns:{type:Array,default(){return[]}},exportData:{type:Array,default(){return[]}},exportFileName:String},data(){return{numbers:U,itemsPerPage:null,searchTerm:"",pageNumber:1,activeRow:null,strings:{items:v("items",I),noResults:v("No items found.",I),csv:v("CSV",I)}}},watch:{initialPageNumber(t){this.pageNumber=t},pageNumber(t){if(Math.abs(t)!==t){this.pageNumber=Math.floor(t);return}if(this.totals&&t>this.totals.pages){this.pageNumber=this.totals.pages;return}1>t&&(this.pageNumber=1)},itemsPerPage(t,s){s!==null&&this.processChangeItemsPerPage()}},computed:{filteredColumns(){return this.columns.filter(t=>"show"in t?t.show:!0)},noResults(){return this.noResultsLabel||this.strings.noResults},shouldHideCheckbox(){var t,s,e,d,o,i;return((e=(s=(t=this.rootStore)==null?void 0:t.aioseo)==null?void 0:s.screen)==null?void 0:e.blockEditor)||((i=(o=(d=this.rootStore)==null?void 0:d.aioseoBrokenLinkChecker)==null?void 0:o.screen)==null?void 0:i.blockEditor)},getExportFileName(){return(this.exportFileName||"entries.csv").replace("/.csv$|$/",".csv")}},methods:{showFilterCount(t){return Object.prototype.hasOwnProperty.call(t,"count")},editRow(t){if(t===null||this.activeRow===t){this.activeRow=null;return}this.activeRow=t},processSearch(){Z(()=>{this.pageNumber=1,this.editRow(-1),this.$emit("search",this.searchTerm)},100)},processChangeItemsPerPage(){this.$emit("process-change-items-per-page",this.itemsPerPage)},processBulkAction(t){this.$emit("process-bulk-action",{action:t,selectedRows:this.selectedItems()}),this.editRow(-1),!this.bulkOptions.find(s=>s.value===t&&(s==null?void 0:s.resetSelection)===!1)&&this.resetSelectedItems()},processPaginate(t){this.pageNumber=t,this.editRow(-1),this.$emit("paginate",t,this.searchTerm)},processFilter(t){this.pageNumber=1,this.searchTerm="",this.editRow(-1),this.$emit("filter-table",t)},processAdditionalFilters(t){this.pageNumber=1,this.searchTerm="",this.editRow(-1),this.$emit("process-additional-filters",{filters:t,searchTerm:this.searchTerm,pageNumber:this.pageNumber})},selectedItems(){const t=this.$refs.table.querySelectorAll("tbody tr.main-row"),s=[];return t.forEach(e=>{const d=e.querySelector("th.check-column input");d&&d.checked&&s.push(e.dataset.rowId)}),s},resetSelectedItems(){const t=this.$refs.table.querySelectorAll(".check-column input:checked");t&&t.forEach(s=>s.checked=!1)},exportCsv(){const t=this.exportColumns||this.columns;let s=this.exportData.length?this.exportData:this.rows;s=s.map(d=>{const o=[];return t.forEach(i=>{o[i.slug]=i!=null&&i.value?i.value(d):d[i.slug]}),o}),s=[t.map(d=>d.label)].concat(s),oe(ae(s),this.getExportFileName)}},created(){this.pageNumber=this.initialPageNumber,this.searchTerm=this.initialSearchTerm,this.itemsPerPage=this.initialItemsPerPage}},We={class:"aioseo-wp-table"},ze={key:0,class:"aioseo-wp-table-header"},Ke={key:0,class:"subsubsub"},Je=["onClick"],Ge={key:0},Qe={key:0},Xe={key:0,class:"separator"},Ye={key:1,class:"search-box"},Ze=["disabled"],$e=["value","disabled"],et={class:"tablenav top"},tt={key:2,class:"export"},st={key:3,class:"alignleft"},lt=["onClick","tabindex"],at=u("br",{class:"clear"},null,-1),ot={class:"wp-table"},nt={key:0,class:"manage-column column-cb check-column"},it=["disabled"],rt={key:0},ut={key:0,class:"loader-overlay-table"},ct={key:0},dt=["colspan"],bt=["data-row-id","data-row-index"],mt={key:0,scope:"row",class:"check-column"},ht=["disabled"],gt=["colspan"],pt={key:1},_t=["colspan"],kt={class:"border"},ft={key:1},yt=["colspan"],vt=["colspan"],wt={class:"no-results"},Pt={key:0},Nt={key:1},Tt={key:0,class:"manage-column column-cb check-column"},Ct=["disabled"],Ft={key:1,class:"tablenav bottom"},At=u("div",{class:"alignleft actions"},null,-1),St=u("br",{class:"clear"},null,-1);function Bt(t,s,e,d,o,i){const c=p("core-wp-bulk-actions"),w=p("core-wp-additional-filters"),T=p("svg-download"),L=p("base-button"),H=p("core-wp-pagination"),V=p("core-wp-table-header-footer"),z=p("core-loader"),j=p("core-alert"),K=p("transition-slide"),J=p("core-wp-items-per-page");return l(),n("div",We,[e.showHeader?(l(),n("div",ze,[t.$slots.filters?r("",!0):(l(),n("ul",Ke,[(l(!0),n(h,null,f(e.filters,(a,m)=>(l(),n("li",{key:m,class:_(a.slug)},[u("span",{class:_(["name",{active:a.active}])},[!a.active&&!e.disableTable?(l(),n("a",{key:0,href:"#",onClick:N(C=>i.processFilter(a),["prevent"])},[P(b(a.name)+" ",1),i.showFilterCount(a)?(l(),n("span",Ge," ("+b(o.numbers.numberFormat(a.count))+")",1)):r("",!0)],8,Je)):r("",!0),a.active||e.disableTable?(l(),n(h,{key:1},[P(b(a.name)+" ",1),i.showFilterCount(a)?(l(),n("span",Qe," ("+b(o.numbers.numberFormat(a.count))+")",1)):r("",!0)],64)):r("",!0)],2),m+1<e.filters.length?(l(),n("span",Xe,"|")):r("",!0)],2))),128))])),e.showSearch?(l(),n("p",Ye,[O(u("input",{type:"search",id:"post-search-input",name:"s","onUpdate:modelValue":s[0]||(s[0]=a=>o.searchTerm=a),onKeyup:s[1]||(s[1]=W((...a)=>i.processSearch&&i.processSearch(...a),["enter"])),onSearch:s[2]||(s[2]=(...a)=>i.processSearch&&i.processSearch(...a)),disabled:e.disableTable},null,40,Ze),[[D,o.searchTerm]]),u("input",{type:"submit",id:"search-submit",class:"button",value:e.searchLabel,onClick:s[3]||(s[3]=N((...a)=>i.processSearch&&i.processSearch(...a),["prevent"])),disabled:e.disableTable},null,8,$e)])):r("",!0),u("div",et,[F(t.$slots,"tablenav"),e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?(l(),g(c,{key:0,"bulk-options":e.bulkOptions,onProcessBulkAction:i.processBulkAction,"disable-table":e.disableTable},null,8,["bulk-options","onProcessBulkAction","disable-table"])):r("",!0),e.additionalFilters&&e.additionalFilters.length?(l(),g(w,{key:1,"additional-filters":e.additionalFilters,"selected-filters":e.selectedFilters,onChange:s[4]||(s[4]=a=>t.$emit("additional-filter-option-selected",a)),onProcessAdditionalFilters:i.processAdditionalFilters},null,8,["additional-filters","selected-filters","onProcessAdditionalFilters"])):r("",!0),e.exportColumns.length?(l(),n("span",tt,[A(L,{size:"small",type:"gray",onClick:s[5]||(s[5]=N(a=>i.exportCsv(),["prevent"]))},{default:y(()=>[A(T),P(" "+b(o.strings.csv),1)]),_:1})])):r("",!0),t.$slots.filters&&e.filters.length?(l(),n("div",st,[(l(!0),n(h,null,f(e.filters,(a,m)=>(l(),n("a",{key:m,onClick:N(C=>i.processFilter(a),["prevent"]),href:"#",tabindex:a.active?-1:0},[F(t.$slots,"filters",ee({ref_for:!0},a))],8,lt))),128))])):r("",!0),e.showPagination?(l(),g(H,{key:4,totals:e.totals,"initial-page-number":o.pageNumber,"disable-table":e.disableTable,onPaginate:i.processPaginate},null,8,["totals","initial-page-number","disable-table","onPaginate"])):r("",!0),at])])):r("",!0),u("div",ot,[u("table",{class:_(["wp-list-table widefat fixed",{blurred:e.blurRows}]),ref:"table",cellpadding:"0",cellspacing:"0","aria-label":"Paginated Table"},[u("thead",null,[u("tr",null,[e.showBulkActions?(l(),n("td",nt,[i.shouldHideCheckbox?r("",!0):(l(),n("input",{key:0,type:"checkbox",disabled:e.loading||e.disableTable},null,8,it))])):r("",!0),(l(!0),n(h,null,f(e.columns,(a,m)=>(l(),g(V,{key:m,column:a,"disable-table":e.disableTable,onSortColumn:(C,S)=>t.$emit("sort-column",C,S),"allow-tooltip-icon":""},q({_:2},[t.$slots[a.slug+"HeaderFooter"]?{name:"headerFooter",fn:y(()=>[F(t.$slots,a.slug+"HeaderFooter",{area:"header"})]),key:"0"}:void 0]),1032,["column","disable-table","onSortColumn"]))),128))])]),e.rows?(l(),n("tbody",rt,[e.loading?(l(),n("div",ut,[A(z)])):r("",!0),(l(!0),n(h,null,f(e.rows,(a,m)=>{var C,S;return l(),n(h,{key:m},[a.alert&&((C=a.alert)==null?void 0:C.position)==="top"?(l(),n("tr",ct,[u("td",{colspan:i.filteredColumns.length+1},[A(j,{type:a.alert.color||"blue",innerHTML:a.alert.description},null,8,["type","innerHTML"])],8,dt)])):r("",!0),u("tr",{class:_(["main-row",{even:m%2===0,enabled:a.enabled||!a.hasOwnProperty("enabled")}]),"data-row-id":a.rowIndex&&a[a.rowIndex]||a.id||a.url||m,"data-row-index":m},[e.showBulkActions?(l(),n("th",mt,[a.preventBulkAction?r("",!0):(l(),n("input",{key:0,type:"checkbox",disabled:e.disableTable},null,8,ht))])):r("",!0),(l(!0),n(h,null,f(i.filteredColumns,(k,G)=>(l(),n("td",{class:_(["manage-column",k.slug]),key:G,colspan:k!=null&&k.colspan?k.colspan:1},[t.$slots[k.slug]?F(t.$slots,k.slug,{key:0,row:a,column:a[k.slug],editRow:i.editRow,index:m,editRowActive:o.activeRow===m}):r("",!0),t.$slots[k.slug]?r("",!0):(l(),n("span",pt,b(a[k.slug]),1))],10,gt))),128))],10,bt),u("tr",{class:_(["edit-row",{even:m%2===0}])},[u("td",{colspan:e.showBulkActions?e.columns.length+1:e.columns.length,class:"edit-row-content"},[A(K,{tag:"div",class:"wrapper",active:m===o.activeRow},{default:y(()=>[u("div",kt,[F(t.$slots,"edit-row",{row:a,index:m,editRow:i.editRow})])]),_:2},1032,["active"])],8,_t)],2),a.alert&&((S=a.alert)==null?void 0:S.position)==="bottom"?(l(),n("tr",ft,[u("td",{colspan:i.filteredColumns.length+1},[A(j,{type:a.alert.color||"blue",innerHTML:a.alert.description},null,8,["type","innerHTML"])],8,yt)])):r("",!0)],64)}),128)),e.rows.length?r("",!0):(l(),n("td",{key:1,colspan:e.showBulkActions?e.columns.length+1:e.columns.length},[u("div",wt,[e.loading?r("",!0):(l(),n("span",Pt,b(i.noResults),1))])],8,vt))])):r("",!0),e.showTableFooter?(l(),n("tfoot",Nt,[u("tr",null,[e.showBulkActions?(l(),n("td",Tt,[u("input",{type:"checkbox",disabled:e.loading||e.disableTable},null,8,Ct)])):r("",!0),(l(!0),n(h,null,f(e.columns,(a,m)=>(l(),g(V,{key:m,column:a,"disable-table":e.disableTable,onSortColumn:(C,S)=>t.$emit("sort-column",C,S)},q({_:2},[t.$slots[a.slug+"HeaderFooter"]?{name:"headerFooter",fn:y(()=>[F(t.$slots,a.slug+"HeaderFooter",{area:"footer"})]),key:"0"}:void 0]),1032,["column","disable-table","onSortColumn"]))),128))])])):r("",!0)],2),F(t.$slots,"cta")]),e.showTableFooter?(l(),n("div",Ft,[e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?(l(),g(c,{key:0,"bulk-options":e.bulkOptions,onProcessBulkAction:i.processBulkAction,"disable-table":e.disableTable},null,8,["bulk-options","onProcessBulkAction","disable-table"])):r("",!0),e.showItemsPerPage?(l(),g(J,{key:1,modelValue:o.itemsPerPage,"onUpdate:modelValue":s[6]||(s[6]=a=>o.itemsPerPage=a),"disable-table":e.disableTable},null,8,["modelValue","disable-table"])):r("",!0),At,e.showPagination?(l(),g(H,{key:2,totals:e.totals,"initial-page-number":o.pageNumber,"disable-table":e.disableTable,onPaginate:i.processPaginate},null,8,["totals","initial-page-number","disable-table","onPaginate"])):r("",!0),St])):r("",!0)])}const Mt=B(De,[["render",Bt]]);export{Mt as C};
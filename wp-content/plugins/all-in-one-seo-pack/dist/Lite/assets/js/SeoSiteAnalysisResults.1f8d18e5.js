import{u as C}from"./Tags.45075d79.js";import{S as v}from"./AnalyzerStore.bc71b50e.js";import{C as I}from"./GoogleSearchPreview.2f81905c.js";import{a as P,c as A,e as L}from"./Caret.662da1f3.js";import{S as x}from"./Information.82968754.js";import{S as G}from"./Gear.1433c8c3.js";import{T as H}from"./Slide.d0517fb0.js";import{_ as T}from"./_plugin-vue_export-helper.249dac1d.js";import{v as y,o as s,c as n,a as d,k as h,G as b,q as O,t as _,C as B,b as l,l as R,x as g,F as f,J as w}from"./runtime-dom.esm-bundler.6789c400.js";import"./translations.12335a6a.js";import{_ as p}from"./default-i18n.54b5d8cd.js";const j={components:{SvgCaret:P,SvgCircleCheck:A,SvgCircleClose:L,SvgCircleInformation:x,SvgGear:G,TransitionSlide:H},props:{test:{type:String,required:!0},result:{type:Object,required:!0},showInstructions:Boolean},data(){return{active:!1,loading:!1}},computed:{getIcon(){return this.result.status==="passed"?"svg-circle-check":this.result.status==="error"?"svg-circle-close":this.result.status==="warning"?"svg-gear":"svg-circle-information"},getTestTitle(){return v.personalize=this.showInstructions,v.head(this.test,this.result)},getBody(){return v.personalize=this.showInstructions,v.body(this.test,this.result)}}},q={class:"aioseo-seo-site-analysis-result"},E={class:"result-header"},M={class:"result-icon"},U={class:"result-content"},z={class:"result-body"},V={key:0,class:"result-code"},D=["innerHTML"],F={key:1,class:"result-code-alt"},J=["innerHTML"],N={key:3,class:"result-action"};function K(a,o,t,i,r,e){const S=y("svg-caret"),m=y("base-button"),u=y("transition-slide");return s(),n("div",q,[d("div",E,[d("div",M,[(s(),h(O(e.getIcon),{class:b(t.result.status)},null,8,["class"]))]),d("div",U,_(e.getTestTitle),1),t.showInstructions||e.getBody.code||e.getBody.codeAlt?(s(),n("div",{key:0,class:b(["result-toggle",{active:r.active}]),onClick:o[0]||(o[0]=c=>r.active=!r.active)},[B(S)],2)):l("",!0)]),t.showInstructions||e.getBody.code||e.getBody.codeAlt?(s(),h(u,{key:0,active:r.active},{default:R(()=>[d("div",z,[e.getBody.code?(s(),n("div",V,[d("pre",null,[g("						"),d("code",{innerHTML:e.getBody.code.trim()},null,8,D),g(`
					`)])])):l("",!0),e.getBody.codeAlt?(s(),n("div",F,[d("pre",null,[g("						"),d("code",null,_(e.getBody.codeAlt.trim()),1),g(`
					`)])])):l("",!0),e.getBody.message&&t.showInstructions?(s(),n("div",{key:2,class:"result-message",innerHTML:e.getBody.message},null,8,J)):l("",!0),e.getBody.buttonLink&&t.showInstructions?(s(),n("div",N,[B(m,{href:e.getBody.buttonLink,tag:"a",target:"_blank",type:"blue",size:"medium",loading:r.loading},{default:R(()=>[g(_(e.getBody.buttonText),1)]),_:1},8,["href","loading"])])):l("",!0)])]),_:1},8,["active"])):l("",!0)])}const Q=T(j,[["render",K]]),k="all-in-one-seo-pack",W={setup(){const{parseTags:a}=C({separator:void 0});return{parseTags:a}},components:{CoreGoogleSearchPreview:I,CoreSeoSiteAnalysisResult:Q},props:{section:{type:String,required:!0},allResults:{type:Object,required:!0},showGooglePreview:Boolean,showInstructions:Boolean},data(){return{searchPreviewHostname:"",searchPreviewUrl:"",strings:{basic:p("Basic SEO",k),advanced:p("Advanced SEO",k),performance:p("Performance",k),security:p("Security",k)}}},methods:{filterResults(a){const o={...a};if(Object.keys(o).forEach(i=>{const r=o[i];v.head(i,r)||["keywords","keywordsInTitleDescription","searchPreview","mobileSearchPreview","mobileSnapshot"].includes(i)&&delete o[i]}),this.section==="all-items")return o;const t={passed:"good-results",warning:"recommended-improvements",error:"critical"};return Object.keys(o).forEach(i=>{const r=o[i];t[r.status]!==this.section&&delete o[i]}),o},shouldShowGroup(a){return Object.keys(this.filterResults(this.allResults[a])).length}},mounted(){var t,i;if(!((i=(t=this.allResults)==null?void 0:t.advanced)!=null&&i.searchPreview))return;const a=document.createElement("div");a.innerHTML=this.allResults.advanced.searchPreview;const o=a.querySelector(".domain");if(o){const r=new URL(o.innerText);this.searchPreviewUrl=r.href,this.searchPreviewHostname=r.host}}},X={class:"aioseo-seo-site-analysis-results"},Y={key:1,class:"group-header"},Z={key:2,class:"group-header"},$={key:3,class:"group-header"},ee={key:4,class:"group-header"};function te(a,o,t,i,r,e){const S=y("core-google-search-preview"),m=y("core-seo-site-analysis-result");return s(),n("div",X,[t.showGooglePreview&&t.section==="all-items"?(s(),h(S,{key:0,hostname:r.searchPreviewHostname,url:r.searchPreviewUrl,title:i.parseTags(t.allResults.basic.title.value),description:i.parseTags(t.allResults.basic.description.value)},null,8,["hostname","url","title","description"])):l("",!0),e.shouldShowGroup("basic")?(s(),n("div",Y,_(r.strings.basic),1)):l("",!0),(s(!0),n(f,null,w(e.filterResults(t.allResults.basic),(u,c)=>(s(),h(m,{key:c,test:c,result:u,"show-instructions":t.showInstructions},null,8,["test","result","show-instructions"]))),128)),e.shouldShowGroup("advanced")?(s(),n("div",Z,_(r.strings.advanced),1)):l("",!0),(s(!0),n(f,null,w(e.filterResults(t.allResults.advanced),(u,c)=>(s(),h(m,{key:c,test:c,result:u,"show-instructions":t.showInstructions},null,8,["test","result","show-instructions"]))),128)),e.shouldShowGroup("performance")?(s(),n("div",$,_(r.strings.performance),1)):l("",!0),(s(!0),n(f,null,w(e.filterResults(t.allResults.performance),(u,c)=>(s(),h(m,{key:c,test:c,result:u,"show-instructions":t.showInstructions},null,8,["test","result","show-instructions"]))),128)),e.shouldShowGroup("security")?(s(),n("div",ee,_(r.strings.security),1)):l("",!0),(s(!0),n(f,null,w(e.filterResults(t.allResults.security),(u,c)=>(s(),h(m,{key:c,test:c,result:u,"show-instructions":t.showInstructions},null,8,["test","result","show-instructions"]))),128))])}const _e=T(W,[["render",te]]);export{_e as C};

import{g as k,o as s,c,a as y,C as u,G as h,u as n,E as f,t as M,b as p,Y as C,X as R,k as g,l as $,Q as V,h as F}from"./js/runtime-dom.esm-bundler.6789c400.js";import{c as T,b as U}from"./js/vue-router.fc4966b9.js";import{e as P,l as x}from"./js/index.3eb8f806.js";import{l as B}from"./js/index.ee8124c6.js";import{e as v,y as j,c as D,J as q}from"./js/index.20192476.js";import{d as w,a as W}from"./js/Caret.662da1f3.js";import{o as N,m as O,i as z}from"./js/postTitle.d67eb903.js";import{i as G}from"./js/isEqual.51bf23f5.js";import"./js/translations.12335a6a.js";import{l as I}from"./js/index.1ca84f0e.js";import{_ as Q}from"./js/default-i18n.54b5d8cd.js";import{M as H}from"./js/Modal.40f1581a.js";import{_ as J}from"./js/ScoreButton.e2a31604.js";import{S as b}from"./js/LogoGear.29bd352d.js";import"./js/_plugin-vue_export-helper.249dac1d.js";import"./js/helpers.f95d5840.js";import"./js/metabox.dc73facf.js";import"./js/cleanForSlug.f9ffe7db.js";import"./js/toString.1401d490.js";import"./js/_baseTrim.940c51cf.js";import"./js/_stringToArray.08127ca9.js";import"./js/_baseSet.32e7a763.js";import"./js/regex.f8017116.js";import"./js/_baseIsEqual.6bc92395.js";import"./js/_getTag.8dc22eac.js";import"./js/App.01f2e941.js";/* empty css                */import"./js/LicenseKeyBar.4ba21094.js";import"./js/ScrollTo.97c9805f.js";import"./js/params.764403f6.js";import"./js/allowed.f428d9c9.js";import"./js/constants.2019bcb3.js";import"./js/SettingsRow.1934f141.js";import"./js/Row.f01f32cd.js";import"./js/Checkbox.e983780b.js";import"./js/Checkmark.32f79576.js";import"./js/Tabs.2fd33524.js";import"./js/ProBadge.7733ac87.js";import"./js/Information.82968754.js";import"./js/Slide.d0517fb0.js";import"./js/Index.de83b4aa.js";import"./js/MaxCounts.d28a6cb7.js";import"./js/Tags.45075d79.js";import"./js/Ellipse.c57f22ea.js";import"./js/debounce.40834200.js";import"./js/toNumber.30f8b529.js";import"./js/toFinite.bbcc0565.js";import"./js/TruSeoScore.c8bdf339.js";import"./js/Tooltip.b6b45c85.js";import"./js/Statistics.324b239a.js";import"./js/Plus.c3a1a43f.js";import"./js/Eye.902c8763.js";import"./js/RadioToggle.64619d6b.js";import"./js/GoogleSearchPreview.2f81905c.js";import"./js/HtmlTagsEditor.4c8f78eb.js";import"./js/Editor.5a453aa4.js";import"./js/_baseClone.e959332d.js";import"./js/_arrayEach.f4f00336.js";import"./js/UnfilteredHtml.4ebe3c5f.js";import"./js/popup.001b1125.js";import"./js/SetupWizardStore.f902c357.js";import"./js/datetime.cb3980ce.js";import"./js/license.37048367.js";import"./js/upperFirst.96c04516.js";import"./js/Mobile.3fcac169.js";import"./js/Settings.0254ae9c.js";import"./js/TableOfContentsStore.62cf580e.js";import"./js/vue3-apexcharts.8b5abfad.js";import"./js/ConnectCta.444a26a5.js";import"./js/GoogleSearchConsole.9e8ca525.js";import"./js/Index.c0a0a208.js";import"./js/Blur.31bfcf06.js";import"./js/Graph.266090de.js";import"./js/numbers.b55b32c5.js";import"./js/WpTable.46584896.js";import"./js/Table.963c11c7.js";import"./js/Download.6a0d8455.js";import"./js/RequiredPlans.7629fd28.js";import"./js/addons.9d0af6ad.js";import"./js/PostTypes.d6c1987b.js";import"./js/External.b3b0805d.js";import"./js/InternalOutbound.b4a71286.js";import"./js/Image.47bc8de9.js";import"./js/FacebookPreview.8edcde79.js";import"./js/Img.2fc40874.js";import"./js/Profile.19fffd1c.js";import"./js/ImageUploader.82ab8ffd.js";import"./js/TwitterPreview.09956aa1.js";import"./js/Book.e7bb6a80.js";import"./js/Build.828bd995.js";import"./js/Redirects.921e33df.js";import"./js/Index.4759371c.js";import"./js/JsonValues.892a7505.js";import"./js/Url.0ccd8549.js";import"./js/External.c84e4310.js";import"./js/escapeRegExp.d673186c.js";import"./js/Exclamation.bf79561a.js";import"./js/Gear.1433c8c3.js";import"./js/date.839db266.js";import"./js/DatePicker.fd6399b7.js";import"./js/Calendar.4686ac3f.js";import"./js/pick.231724a9.js";import"./js/Card.46af096e.js";import"./js/Upsell.beb53fd9.js";let S={};const X=()=>{const o={...S},t=N();G(o,t)||(S=t,O())},Y=()=>{const o=v();o.saveCurrentPost(o.currentPost).then(()=>{j().fetch()})},K=()=>{var e;const{vc:o,vc_mode:t}=window;return t==="admin_frontend_editor"?o.builder.getContent():((e=document.querySelector("#content"))==null?void 0:e.value)||""},l=async()=>{v().processContent({content:K()}).finally(()=>{X()})},Z=({vc:o})=>{l(),o.events.on("shortcodeView:updated",()=>{w(l,1e3)}),o.shortcodes.on("sync",()=>{w(l,1e3)}),["#vc_button-update","#vc_button-save-draft","#vc_button-save-as-pending"].forEach(t=>{var e;(e=document.querySelector(t))==null||e.addEventListener("click",Y)})},tt={class:"aioseo-limit-modified-date-wpbakery"},ot={key:0,class:"aioseo-limit-modified-date-wpbakery__options"},et={__name:"App",props:{buttonTitle:String,buttonEvent:String},setup(o){const t=k(!1),e=o,a=()=>{t.value=!1,P.emit(e.buttonEvent)};return(r,m)=>(s(),c("div",tt,[y("div",{class:"aioseo-limit-modified-date-wpbakery__toggle",onClick:m[0]||(m[0]=f(d=>t.value=!t.value,["prevent"]))},[u(n(W),{class:h({rotated:t.value})},null,8,["class"])]),t.value?(s(),c("div",ot,[y("div",{class:"aioseo-limit-modified-date-wpbakery__option",onClick:f(a,["prevent"])},M(e.buttonTitle),1)])):p("",!0)]))}},i={id:"aioseo-limit-modified-date-wpbakery",param:"aioseo_limit_modified_date",event:"save-limit-modified-date",title:Q("Update (Don't Modify Date)","all-in-one-seo-pack"),flag:!1},_=()=>document.getElementById("vc_button-update"),it=()=>{if(document.getElementById(i.id))return;const o=document.createElement("div");o.id=i.id,_().insertAdjacentElement("afterend",o);let t=C({...et,name:"Standalone/WPBakery/LimitModifiedDate"},{buttonTitle:i.title,buttonEvent:i.event});t=x(t),t=B(t),t=I(t),D(t),t.mount(`#${i.id}`)},rt=o=>{o(document).on("ajaxSend",function(t,e,a){const r=new URLSearchParams(a.data);r.get("action")!=="vc_save"||!i.flag||(r.set(i.param,!0),a.data=r.toString())}),P.on(i.event,()=>{i.flag=!0,_().click(),setTimeout(()=>{i.flag=!1})})},nt=({jQuery:o})=>{_()&&(it(),rt(o))},st={class:"aioseo-wpbakery-integration"},at={key:2,class:"aioseo-gear-icon"},E={__name:"App",props:{isFrontendEditor:Boolean},setup(o){const t=k(!1),{currentPost:e}=q(v());return(a,r)=>{const m=R("scroll-to");return s(),c("div",st,[o.isFrontendEditor?(s(),g(n(J),{key:0,"show-score":n(z)(),score:n(e).seo_score,class:h([t.value?"aioseo-score-button--active":""]),onClick:r[0]||(r[0]=f(d=>t.value=!t.value,["prevent"]))},{icon:$(()=>[u(n(b))]),_:1},8,["show-score","score","class"])):p("",!0),o.isFrontendEditor?(s(),g(n(H),{key:1,score:n(e).seo_score,"is-open":t.value,"onUpdate:isOpen":r[1]||(r[1]=d=>t.value=d)},null,8,["score","is-open"])):p("",!0),o.isFrontendEditor?p("",!0):V((s(),c("div",at,[u(n(b))])),[[m,{el:"#aioseo-settings",offset:-150}]])])}}},{vc:mt}=window,pt=()=>{const{vc_mode:o}=window,t=T({history:U(),routes:[{path:"/",component:E}]});let e=C({name:"Standalone/WPBakery",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>F(E)},{isFrontendEditor:o==="admin_frontend_editor"});e=x(e),e=B(e),e.use(t),t.app=e,D(e,t),e.mount("#aioseo-wpbakery")},A=()=>{pt(),Z(window),nt(window)};let L=!1;mt.events.on("app.render",()=>{A(),L=!0});window.addEventListener("load",()=>{L||A()});

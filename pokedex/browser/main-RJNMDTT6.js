import{A as _e,g as he}from"./chunk-JG43WHEB.js";import{M as Ce,N as ye,P as ve,T as Te,W as j,b as ae,c as le,d as de,e as pe,f as ce,ka as Me,la as Se,q as ue,s as me,u as ge,v as fe,z as ze}from"./chunk-GDWB4B5T.js";import{$ as k,$b as u,Aa as Q,Ba as H,Eb as c,Ec as re,Fb as h,Gb as C,Ha as L,Ia as U,Ka as S,Kb as te,Kc as oe,Nb as ne,Ob as p,Pa as q,Pb as y,Qb as v,Rb as F,Tb as B,Tc as se,Ub as I,Vb as P,Wb as E,cb as x,da as Z,db as a,eb as X,ec as W,ga as $,gb as Y,ha as m,i as D,ib as G,jb as _,kb as K,ma as V,qb as ee,ra as d,rc as ie,sa as g,tb as f,ua as J,vb as z,wb as b,wc as N,xb as w,za as R,zb as T}from"./chunk-PJCX3T7S.js";function We(t){let e=t,r=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return r===1&&n===0?1:5}var we=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",We];var je="@",Oe=(()=>{let e=class e{constructor(n,i,o,s,l){this.doc=n,this.delegate=i,this.zone=o,this.animationType=s,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=V(Y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-FH77RZAA.js").then(i=>i)).catch(i=>{throw new Z(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(n,i){let o=this.delegate.createRenderer(n,i);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let s=new O(o);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let Ee=l.createRenderer(n,i);s.use(Ee),this.scheduler?.notify(9)}).catch(l=>{s.use(o)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){X()},e.\u0275prov=$({token:e,factory:e.\u0275fac});let t=e;return t})(),O=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,n,i){this.delegate.insertBefore(e,r,n,i)}removeChild(e,r,n){this.delegate.removeChild(e,r,n)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,n,i){this.delegate.setAttribute(e,r,n,i)}removeAttribute(e,r,n){this.delegate.removeAttribute(e,r,n)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,n,i){this.delegate.setStyle(e,r,n,i)}removeStyle(e,r,n){this.delegate.removeStyle(e,r,n)}setProperty(e,r,n){this.shouldReplay(r)&&this.replay.push(i=>i.setProperty(e,r,n)),this.delegate.setProperty(e,r,n)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,n){return this.shouldReplay(r)&&this.replay.push(i=>i.listen(e,r,n)),this.delegate.listen(e,r,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(je)}};function Ne(t="animations"){return K("NgAsyncAnimations"),J([{provide:G,useFactory:(e,r,n)=>new Oe(e,r,n,t),deps:[re,de,U]},{provide:q,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var M=["*"],Ze=["nz-sider-trigger",""];function $e(t,e){}function Ve(t,e){if(t&1&&f(0,$e,0,0,"ng-template",2),t&2){let r=p(),n=P(5);z("ngTemplateOutlet",r.nzZeroTrigger||n)}}function Je(t,e){}function Qe(t,e){if(t&1&&f(0,Je,0,0,"ng-template",2),t&2){let r=p(),n=P(3);z("ngTemplateOutlet",r.nzTrigger||n)}}function He(t,e){if(t&1&&C(0,"span",3),t&2){let r=p(2);z("nzType",r.nzCollapsed?"left":"right")}}function Le(t,e){if(t&1&&C(0,"span",3),t&2){let r=p(2);z("nzType",r.nzCollapsed?"right":"left")}}function Ue(t,e){if(t&1&&f(0,He,1,1,"span",3)(1,Le,1,1,"span",3),t&2){let r=p();T(r.nzReverseArrow?0:1)}}function qe(t,e){t&1&&C(0,"span",4)}function Xe(t,e){if(t&1){let r=te();c(0,"div",2),ne("click",function(){Q(r);let i=p();return H(i.setCollapsed(!i.nzCollapsed))}),h()}if(t&2){let r=p();z("matchBreakPoint",r.matchBreakPoint)("nzCollapsedWidth",r.nzCollapsedWidth)("nzCollapsed",r.nzCollapsed)("nzBreakpoint",r.nzBreakpoint)("nzReverseArrow",r.nzReverseArrow)("nzTrigger",r.nzTrigger)("nzZeroTrigger",r.nzZeroTrigger)("siderWidth",r.widthSetting)}}var Ae=(()=>{let e=class e{constructor(n,i){this.elementRef=n,this.renderer=i,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}};e.\u0275fac=function(i){return new(i||e)(a(S),a(_))},e.\u0275cmp=d({type:e,selectors:[["nz-content"]],exportAs:["nzContent"],standalone:!0,features:[u],ngContentSelectors:M,decls:1,vars:0,template:function(i,o){i&1&&(y(),v(0))},encapsulation:2,changeDetection:0});let t=e;return t})(),De=(()=>{let e=class e{constructor(n,i){this.elementRef=n,this.renderer=i,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-footer")}};e.\u0275fac=function(i){return new(i||e)(a(S),a(_))},e.\u0275cmp=d({type:e,selectors:[["nz-footer"]],exportAs:["nzFooter"],standalone:!0,features:[u],ngContentSelectors:M,decls:1,vars:0,template:function(i,o){i&1&&(y(),v(0))},encapsulation:2,changeDetection:0});let t=e;return t})(),ke=(()=>{let e=class e{constructor(n,i){this.elementRef=n,this.renderer=i,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}};e.\u0275fac=function(i){return new(i||e)(a(S),a(_))},e.\u0275cmp=d({type:e,selectors:[["nz-header"]],exportAs:["nzHeader"],standalone:!0,features:[u],ngContentSelectors:M,decls:1,vars:0,template:function(i,o){i&1&&(y(),v(0))},encapsulation:2,changeDetection:0});let t=e;return t})(),Re=(()=>{let e=class e{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=this.nzCollapsedWidth===0&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=this.nzCollapsedWidth!==0}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(i,o){i&2&&(b("width",o.isNormalTrigger?o.siderWidth:null),w("ant-layout-sider-trigger",o.isNormalTrigger)("ant-layout-sider-zero-width-trigger",o.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",o.isZeroTrigger&&o.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",o.isZeroTrigger&&!o.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],standalone:!0,features:[R,u],attrs:Ze,decls:6,vars:2,consts:[["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(i,o){i&1&&f(0,Ve,1,1,null,2)(1,Qe,1,1,null,2)(2,Ue,2,1,"ng-template",null,0,W)(4,qe,1,0,"ng-template",null,1,W),i&2&&(T(o.isZeroTrigger?0:-1),x(),T(o.isNormalTrigger?1:-1))},dependencies:[se,Se,Me],encapsulation:2,changeDetection:0});let t=e;return t})(),xe=(()=>{let e=class e{updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:ue(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&this.nzMenuDirective.nzMode==="inline"&&this.nzCollapsedWidth!==0&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(n){n!==this.nzCollapsed&&(this.nzCollapsed=n,this.nzCollapsedChange.emit(n),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}constructor(n,i,o){this.platform=n,this.cdr=i,this.breakpointService=o,this.destroy$=new D,this.nzMenuDirective=null,this.nzCollapsedChange=new L,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(Ce,!0).pipe(k(this.destroy$)).subscribe(n=>{let i=this.nzBreakpoint;i&&me().subscribe(()=>{this.matchBreakPoint=!n[i],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(n){let{nzCollapsed:i,nzCollapsedWidth:o,nzWidth:s}=n;(i||o||s)&&this.updateStyleMap(),i&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};e.\u0275fac=function(i){return new(i||e)(a(ze),a(ie),a(ye))},e.\u0275cmp=d({type:e,selectors:[["nz-sider"]],contentQueries:function(i,o,s){if(i&1&&F(s,_e,5),i&2){let l;B(l=I())&&(o.nzMenuDirective=l.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(i,o){i&2&&(b("flex",o.flexSetting)("max-width",o.widthSetting)("min-width",o.widthSetting)("width",o.widthSetting),w("ant-layout-sider-zero-width",o.nzCollapsed&&o.nzCollapsedWidth===0)("ant-layout-sider-light",o.nzTheme==="light")("ant-layout-sider-dark",o.nzTheme==="dark")("ant-layout-sider-collapsed",o.nzCollapsed)("ant-layout-sider-has-trigger",o.nzCollapsible&&o.nzTrigger!==null))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:[2,"nzReverseArrow","nzReverseArrow",N],nzCollapsible:[2,"nzCollapsible","nzCollapsible",N],nzCollapsed:[2,"nzCollapsed","nzCollapsed",N]},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],standalone:!0,features:[ee,R,u],ngContentSelectors:M,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"],["nz-sider-trigger","",3,"click","matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"]],template:function(i,o){i&1&&(y(),c(0,"div",0),v(1),h(),f(2,Xe,1,8,"div",1)),i&2&&(x(2),T(o.nzCollapsible&&o.nzTrigger!==null?2:-1))},dependencies:[Re],encapsulation:2,changeDetection:0});let t=e;return t})(),be=(()=>{let e=class e{constructor(n){this.directionality=n,this.dir="ltr",this.destroy$=new D}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(k(this.destroy$)).subscribe(n=>{this.dir=n})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(i){return new(i||e)(a(ve))},e.\u0275cmp=d({type:e,selectors:[["nz-layout"]],contentQueries:function(i,o,s){if(i&1&&F(s,xe,4),i&2){let l;B(l=I())&&(o.listOfNzSiderComponent=l)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(i,o){i&2&&w("ant-layout-rtl",o.dir==="rtl")("ant-layout-has-sider",o.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],standalone:!0,features:[u],ngContentSelectors:M,decls:1,vars:0,template:function(i,o){i&1&&(y(),v(0))},encapsulation:2,changeDetection:0});let t=e;return t})(),Fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=m({imports:[xe,Re]});let t=e;return t})();var Ge=[{path:"",redirectTo:"pokemon",pathMatch:"full"},{path:"pokemon/:id",loadChildren:()=>import("./chunk-EOPXQF6C.js").then(t=>t.PokeDetailModule)},{path:"pokemon",loadChildren:()=>import("./chunk-5U5HAOB4.js").then(t=>t.PokeListModule)},{path:"**",redirectTo:"pokemon"}],Be=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=g({type:t});static \u0275inj=m({imports:[j.forRoot(Ge),j]})}return t})();var Ie=(()=>{class t{title="pokedex";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["app-root"]],decls:9,vars:0,consts:[[1,"inner-content"]],template:function(n,i){n&1&&(c(0,"nz-layout")(1,"nz-header")(2,"h1"),E(3,"NgPok\xE9dex"),h()(),c(4,"nz-content")(5,"div",0),C(6,"router-outlet"),h()(),c(7,"nz-footer"),E(8,"NgPok\xE9dex"),h()())},dependencies:[be,ke,Ae,De,Te],styles:["h1[_ngcontent-%COMP%]{color:#fff}nz-footer[_ngcontent-%COMP%]{text-align:center}.inner-content[_ngcontent-%COMP%]{background:#fff;padding:24px;min-height:calc(100vh - 134px);position:relative}"]})}return t})();oe(we);var Pe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=g({type:t,bootstrap:[Ie]});static \u0275inj=m({providers:[ae(le()),Ne(),{provide:fe,useValue:ge}],imports:[he,ce,Fe,Be]})}return t})();pe().bootstrapModule(Pe,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));

"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2413],{2413:(w,d,a)=>{a.r(d),a.d(d,{AuthModule:()=>M});var m=a(6814),r=a(95),p=a(7243),c=a(7027),t=a(9468);let h=(()=>{var n;class s{constructor(o){this.viewContainerRef=o}}return(n=s).\u0275fac=function(o){return new(o||n)(t.Y36(t.s_b))},n.\u0275dir=t.lG2({type:n,selectors:[["","appPlaceholder",""]]}),s})();var u=a(3281),g=a(7494);function f(n,s){1&n&&t._UZ(0,"div",3)}function v(n,s){if(1&n&&(t.TgZ(0,"div",4)(1,"p"),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.errorMessage)}}function b(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"form",5,6),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.MAs(1),l=t.oxw();return t.KtG(l.onSubmit(i))}),t.TgZ(2,"ion-list")(3,"ion-item")(4,"div",7)(5,"label",8),t._uU(6,"E-Mail"),t.qZA(),t._UZ(7,"input",9),t.qZA()(),t.TgZ(8,"ion-item")(9,"div",7)(10,"label",10),t._uU(11,"Password"),t.qZA(),t._UZ(12,"input",11),t.qZA()()(),t.TgZ(13,"div")(14,"ion-button",12),t._uU(15),t.qZA(),t._uU(16," | "),t.TgZ(17,"ion-button",13),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSwitchMode())}),t._uU(18),t.qZA()()()}if(2&n){const e=t.MAs(1),o=t.oxw();t.xp6(14),t.Q6J("disabled",!e.valid),t.xp6(1),t.hij(" ",o.isLoginMode?"Login":"Sign Up"," "),t.xp6(3),t.hij(" Switch to ",o.isLoginMode?"Sign Up":"Login"," ")}}let A=(()=>{var n;class s{constructor(o){this.store=o,this.isLoginMode=!0,this.isLoading=!1,this.errorMessage=null}ngOnInit(){this.storeSub=this.store.select("auth").subscribe(o=>{this.isLoading=o.loading,this.errorMessage=o.authError,console.log(o.authError)})}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(o){if(!o.valid)return;const i=o.value.email,l=o.value.password;this.store.dispatch(this.isLoginMode?new u.IR({email:i,password:l}):new u.mm({email:i,password:l})),o.reset()}onHandleError(){this.store.dispatch(new u.PH)}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe(),this.storeSub&&this.storeSub.unsubscribe()}}return(n=s).\u0275fac=function(o){return new(o||n)(t.Y36(g.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],viewQuery:function(o,i){if(1&o&&t.Gf(h,5),2&o){let l;t.iGM(l=t.CRH())&&(i.alertHost=l.first)}},decls:4,vars:3,consts:[["style","text-align: center;","class","loader",4,"ngIf"],["class","alert",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[1,"loader",2,"text-align","center"],[1,"alert"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(o,i){1&o&&(t.YNc(0,f,1,0,"div",0),t.YNc(1,v,3,1,"div",1),t.TgZ(2,"ion-content"),t.YNc(3,b,19,3,"form",2),t.qZA()),2&o&&(t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngIf",i.errorMessage),t.xp6(2),t.Q6J("ngIf",!i.isLoading))},dependencies:[c.YG,c.W2,c.Ie,c.q_,m.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.wO,r.on,r.On,r.F],encapsulation:2}),s})(),M=(()=>{var n;class s{}return(n=s).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Pc,m.ez,r.u5,p.Bz.forChild([{path:"",component:A}])]}),s})()}}]);
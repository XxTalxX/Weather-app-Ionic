"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4589],{4589:(Z,u,n)=>{n.r(u),n.d(u,{LibraryPageModule:()=>f});var c=n(7243),i=n(7027),a=n(6814),g=n(3117),p=n(3281),t=n(9468),h=n(7494);function m(o,s){if(1&o&&(t.TgZ(0,"ion-item"),t._UZ(1,"div",3),t.TgZ(2,"ion-label",4)(3,"h2"),t._uU(4),t.TgZ(5,"span",5)(6,"ion-note"),t._uU(7),t.qZA()()(),t.TgZ(8,"h3"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA()()()),2&o){const e=s.$implicit;t.xp6(4),t.hij(" ",e.hourly.time[0].substring(e.hourly.time[0].indexOf("T")+1)," "),t.xp6(3),t.hij(" ",e.hourly.temperature_2m[0],"\xb0 "),t.xp6(2),t.AsE(" ",e.hourly.relativehumidity_2m[0],"% | ",e.hourly.windspeed_10m[0],"\u0138m/h "),t.xp6(2),t.AsE(" ",e.latitude,", ",e.longitude,"")}}function d(o,s){if(1&o&&(t.TgZ(0,"div",6)(1,"p"),t._uU(2),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(e.errorMessage.error)}}let y=(()=>{var o;class s{constructor(r){this.store=r}ngAfterViewInit(){this.store.dispatch(new g.q8)}ngOnInit(){this.weatherSubscription=this.store.select("weather").subscribe(r=>{this.errorMessage=r.error,this.weatherHistory=r.history})}onLogout(){this.store.dispatch(new p.RD)}ngOnDestroy(){throw new Error("Method not implemented.")}}return(o=s).\u0275fac=function(r){return new(r||o)(t.Y36(h.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-history-page"]],decls:9,vars:2,consts:[[2,"cursor","pointer","float","right",3,"click"],[4,"ngFor","ngForOf"],["class","alert",4,"ngIf"],["slot","start"],[1,"ion-text-wrap"],[1,"date"],[1,"alert"]],template:function(r,l){1&r&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"History"),t.qZA(),t.TgZ(4,"a",0),t.NdJ("click",function(){return l.onLogout()}),t._uU(5,"Logout"),t.qZA()()(),t.TgZ(6,"ion-content"),t.YNc(7,m,12,6,"ion-item",1),t.qZA(),t.YNc(8,d,3,1,"div",2)),2&r&&(t.xp6(7),t.Q6J("ngForOf",l.weatherHistory),t.xp6(1),t.Q6J("ngIf",l.errorMessage))},dependencies:[a.sg,a.O5,i.W2,i.Gu,i.Ie,i.Q$,i.uN,i.wd,i.sr]}),s})(),f=(()=>{var o;class s{}return(o=s).\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.ez,i.Pc,c.Bz.forChild([{path:"",component:y}])]}),s})()}}]);
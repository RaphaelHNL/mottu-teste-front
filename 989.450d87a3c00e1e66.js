"use strict";(self.webpackChunkmottu_challenge=self.webpackChunkmottu_challenge||[]).push([[989],{4989:(T,v,c)=>{c.r(v),c.d(v,{FavoritesModule:()=>x});var s=c(6895),l=c(433),f=c(3708),t=c(1571),p=c(9709);function d(i,e){1&i&&t._UZ(0,"div",14)}const u=function(i){return{"favorited-filter":i}};function g(i,e){if(1&i){const r=t.EpF();t.TgZ(0,"div",7)(1,"div",8),t._UZ(2,"img",9),t.TgZ(3,"div",10),t.NdJ("click",function(){const n=t.CHM(r).$implicit,F=t.oxw(2);return t.KtG(F.removeFavorite(n))}),t.YNc(4,d,1,0,"div",11),t._UZ(5,"img",12),t.qZA()(),t.TgZ(6,"div",13)(7,"h2"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA()()()}if(2&i){const r=e.$implicit;t.xp6(2),t.s9C("alt",r.name),t.Q6J("src",r.image,t.LSH),t.xp6(2),t.Q6J("ngIf",r.isFavorite),t.xp6(1),t.Q6J("src",r.isFavorite?"/assets/favoritefull.svg":"/assets/favorempty.svg",t.LSH)("ngClass",t.VKq(8,u,r.isFavorite)),t.xp6(3),t.Oqu(r.name),t.xp6(2),t.Oqu(r.species),t.xp6(2),t.Oqu(r.type)}}function m(i,e){if(1&i&&(t.TgZ(0,"div",5),t.YNc(1,g,13,10,"div",6),t.qZA()),2&i){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",r.favoriteCharacters)}}function h(i,e){if(1&i){const r=t.EpF();t.TgZ(0,"div",15)(1,"h1"),t._uU(2,"Parece que voc\xea ainda n\xe3o tem favoritos"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Volte \xe0 p\xe1gina inicial e escolha os melhores para voc\xea."),t.qZA(),t.TgZ(5,"button",16),t.NdJ("click",function(){t.CHM(r);const a=t.oxw();return t.KtG(a.navigatePage())}),t._uU(6,"Voltar ao in\xedcio"),t.qZA()()}}const C=[{path:"",component:(()=>{const e=class{constructor(o,a){this.favoriteService=o,this.router=a,this.favoriteCharacters=[],this.favoriteService.favoriteCharacters$.subscribe(n=>{this.favoriteCharacters=n})}navigatePage(){this.router.navigate(["/search"])}removeFavorite(o){this.favoriteService.toggleFavorite(o)}};let i=e;return e.\u0275fac=function(a){return new(a||e)(t.Y36(p.e),t.Y36(f.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-favorites"]],decls:5,vars:2,consts:[[1,"container"],[1,"container-search"],["src","/assets/titlefavorites.svg"],["class","container-card",4,"ngIf"],["class","container-error",4,"ngIf"],[1,"container-card"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"image-container"],[1,"character-image",3,"src","alt"],[1,"favorite-icon-container",3,"click"],["class","icon-background",4,"ngIf"],[1,"favorite-icon",3,"src","ngClass"],[1,"content-card"],[1,"icon-background"],[1,"container-error"],[3,"click"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.YNc(3,m,2,1,"div",3),t.YNc(4,h,7,0,"div",4),t.qZA()),2&a&&(t.xp6(3),t.Q6J("ngIf",n.favoriteCharacters.length>0),t.xp6(1),t.Q6J("ngIf",0===n.favoriteCharacters.length))},dependencies:[s.mk,s.sg,s.O5],styles:["button[_ngcontent-%COMP%]{width:139px;height:40px;color:#0a0a0a;background-color:#fff;padding:4px 16px;border-radius:12px}"]}),i})()}];let Z=(()=>{const e=class{};let i=e;return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(C)]}),i})(),x=(()=>{const e=class{};let i=e;return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,Z,l.u5]}),i})()}}]);
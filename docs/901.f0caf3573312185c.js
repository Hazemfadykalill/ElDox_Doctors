"use strict";(self.webpackChunkVeseeta=self.webpackChunkVeseeta||[]).push([[901],{4901:(E,g,l)=>{l.r(g),l.d(g,{LoginComponent:()=>C});var u=l(6814),o=l(95),t=l(9468),c=l(1120),p=l(2425),d=l(9410);function f(e,s){1&e&&(t.TgZ(0,"p"),t._uU(1,"Email Required"),t.qZA())}function h(e,s){1&e&&(t.TgZ(0,"p"),t._uU(1,"Email Must be example123@gmail|Yahoo.com"),t.qZA())}function A(e,s){if(1&e&&(t.TgZ(0,"div",11),t.YNc(1,f,2,0,"p",12),t.YNc(2,h,2,0,"p",12),t.qZA()),2&e){const n=t.oxw();let i,r;t.xp6(1),t.Q6J("ngIf",null==(i=n.loginAdminForm.get("email"))?null:i.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(r=n.loginAdminForm.get("email"))?null:r.getError("email"))}}function v(e,s){1&e&&(t.TgZ(0,"p"),t._uU(1,"Password Required"),t.qZA())}function T(e,s){if(1&e&&(t.TgZ(0,"div",11),t.YNc(1,v,2,0,"p",12),t.qZA()),2&e){const n=t.oxw();let i;t.xp6(1),t.Q6J("ngIf",null==(i=n.loginAdminForm.get("password"))?null:i.getError("required"))}}let C=(()=>{class e{constructor(n,i,r){this._router=n,this._toast=i,this.auth=r,this.loginAdminForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.email]),password:new o.NI("",[o.kI.required])})}handleForm(){this.auth.loginAdmin(this.loginAdminForm.value).subscribe({next:n=>{this.auth.decodeToken2(n.token),null!=localStorage.getItem("tokenAdmin")?(this._router.navigate(["/dashboard"]),this._toast.success("Login Admin Success")):"Patient"==this.auth.adminInformation.Role?(this._router.navigate(["/Home"]),this._toast.success("Login Patient Success")):"Doctor"==this.auth.adminInformation.Role?(this._router.navigate(["/welcome"]),this._toast.success("Login Doctor successfully")):this._toast.error("Login Failed")},error:n=>{console.log(n),this._toast.error("Login Failed ....")}})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(c.F0),t.Y36(p._W),t.Y36(d.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[t.jDz],decls:18,vars:3,consts:[[1,"form-container","shadow","mt-5"],[1,"form",3,"formGroup","ngSubmit"],[1,"title"],[1,"form-group","mx-auto"],["formControlName","email","required","","type","email",1,"form-input"],["email",""],["class","error ",4,"ngIf"],[1,"form-group"],["formControlName","password","required","","type","password",1,"form-input"],["password",""],["class","error",4,"ngIf"],[1,"error"],[4,"ngIf"]],template:function(i,r){if(1&i&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return r.handleForm()}),t.TgZ(2,"p",2),t._uU(3,"Welcome To Login"),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"input",4,5),t.TgZ(7,"label"),t._uU(8,"Email"),t.qZA()(),t.YNc(9,A,3,2,"div",6),t.TgZ(10,"div",7),t._UZ(11,"input",8,9),t.TgZ(13,"label"),t._uU(14,"Password"),t.qZA()(),t.YNc(15,T,2,1,"div",10),t.TgZ(16,"button"),t._uU(17,"SUBMIT"),t.qZA()()()),2&i){const _=t.MAs(6),x=t.MAs(12);let a,m;t.xp6(1),t.Q6J("formGroup",r.loginAdminForm),t.xp6(8),t.Q6J("ngIf",(null==(a=r.loginAdminForm.get("email"))?null:a.errors)&&(_.value.length>0||(null==(a=r.loginAdminForm.get("email"))?null:a.touched))),t.xp6(6),t.Q6J("ngIf",(null==(m=r.loginAdminForm.get("password"))?null:m.errors)&&(x.value.length>0||(null==(m=r.loginAdminForm.get("password"))?null:m.touched)))}},dependencies:[u.ez,u.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u],styles:['.title[_ngcontent-%COMP%]{font-size:28px;letter-spacing:-1px;position:relative;display:flex;font-weight:600;text-transform:capitalize;align-items:center;padding-left:30px;color:#f9b17a}.title[_ngcontent-%COMP%]:before{width:18px;height:18px}.title[_ngcontent-%COMP%]:after{width:18px;height:18px;animation:_ngcontent-%COMP%_pulse 1s linear infinite}.title[_ngcontent-%COMP%]:before, .title[_ngcontent-%COMP%]:after{position:absolute;content:"";height:16px;width:16px;border-radius:50%;left:0;background-color:#f9b17a}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(.9);opacity:1}to{transform:scale(1.8);opacity:0}}']})}return e})()}}]);
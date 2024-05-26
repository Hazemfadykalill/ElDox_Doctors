"use strict";(self.webpackChunkVeseeta=self.webpackChunkVeseeta||[]).push([[288],{9288:(Q,h,s)=>{s.r(h),s.d(h,{RegisterComponent:()=>D});var r=s(95),Z=s(6814),a=s(4219),e=s(9468),M=s(1120),q=s(2425),x=s(9410);function C(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," first name required "),e.qZA())}function T(t,l){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,C,2,0,"p",26),e.qZA()),2&t){const o=e.oxw();let i;e.xp6(1),e.Q6J("ngIf",null==(i=o.registerForm.get("firstName"))?null:i.getError("required"))}}function v(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," first name required "),e.qZA())}function O(t,l){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,v,2,0,"p",26),e.qZA()),2&t){const o=e.oxw();let i;e.xp6(1),e.Q6J("ngIf",null==(i=o.registerForm.get("lastName"))?null:i.getError("required"))}}function P(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," email required "),e.qZA())}function b(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," email must example123@gmail.com "),e.qZA())}function A(t,l){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,P,2,0,"p",26),e.YNc(2,b,2,0,"p",26),e.qZA()),2&t){const o=e.oxw();let i,n;e.xp6(1),e.Q6J("ngIf",null==(i=o.registerForm.get("email"))?null:i.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("email"))}}function N(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," password required "),e.qZA())}function w(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," password must min length 8 char "),e.qZA())}function V(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: "),e.qZA())}function F(t,l){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,N,2,0,"p",26),e.YNc(2,w,2,0,"p",26),e.YNc(3,V,2,0,"p",26),e.qZA()),2&t){const o=e.oxw();let i,n,p;e.xp6(1),e.Q6J("ngIf",null==(i=o.registerForm.get("password"))?null:i.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(p=o.registerForm.get("password"))?null:p.getError("pattern"))}}function I(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," phone required "),e.qZA())}function E(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," Phone must 01(1,2,5,0) and eight number "),e.qZA())}function U(t,l){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,I,2,0,"p",26),e.YNc(2,E,2,0,"p",26),e.qZA()),2&t){const o=e.oxw();let i,n;e.xp6(1),e.Q6J("ngIf",null==(i=o.registerForm.get("phone"))?null:i.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("pattern"))}}function R(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1," Date of Birth required "),e.qZA())}function y(t,l){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,R,2,0,"p",26),e.qZA()),2&t){const o=e.oxw();let i;e.xp6(1),e.Q6J("ngIf",null==(i=o.registerForm.get("dateOfBirth"))?null:i.getError("required"))}}let D=(()=>{class t{constructor(o,i,n){this._router=o,this._toast=i,this._auth=n,this.registerForm=new r.cw({firstName:new r.NI("",[r.kI.required]),lastName:new r.NI("",[r.kI.required]),email:new r.NI("",[r.kI.required,r.kI.email]),gender:new r.NI("",[r.kI.required]),dateOfBirth:new r.NI("",[r.kI.required]),phone:new r.NI("",[r.kI.required,r.kI.pattern(/^01[0125][0-9]{8}$/)]),password:new r.NI("",[r.kI.required,r.kI.minLength(8),r.kI.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])})}change(o){this.file=o.target.files[0]}handleForm(){console.log(this.registerForm.value);const o=new FormData;o.append("firstName",this.registerForm.value.firstName),o.append("lastName",this.registerForm.value.lastName),o.append("email",this.registerForm.value.email),o.append("phone",this.registerForm.value.phone),o.append("gender",this.registerForm.value.gender),o.append("dateOfBirth",this.registerForm.value.dateOfBirth),o.append("password",this.registerForm.value.password),o.append("image",this.file,this.file.name),console.log(this.registerForm.value),this._auth.registerPatients(o).subscribe({next:i=>{console.log(i),this._router.navigate(["/auth/loginAdmin"]);const n=new a.s5;n.setTitle(" Attention!!"),n.setMessage("Patients Add Successfully! "),n.setConfig({autoCloseDelay:2e3,textPosition:"left",layoutType:a.nM.SUCCESS,progressBar:a.T5.INCREASE,toastUserViewType:a.r0.STANDARD,animationIn:a.AF.ZOOM_IN_ROTATE,animationOut:a.HP.FLIP_OUT,toastPosition:a.ht.TOP_CENTER,allowHtmlMessage:!0}),n.openToastNotification$()},error:i=>{console.log(i);const n=new a.s5;n.setTitle("Attention!!"),n.setMessage("Patients Add Something Wrong!"),n.setConfig({autoCloseDelay:2e3,textPosition:"left",layoutType:a.nM.DANGER,progressBar:a.T5.INCREASE,toastUserViewType:a.r0.STANDARD,animationIn:a.AF.ZOOM_IN_ROTATE,animationOut:a.HP.FLIP_OUT,toastPosition:a.ht.TOP_CENTER,allowHtmlMessage:!0}),n.openToastNotification$()}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(M.F0),e.Y36(q._W),e.Y36(x.e))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:56,vars:7,consts:[[1,"form","mt-5",3,"formGroup","ngSubmit"],[1,"title"],[1,"flex"],["formControlName","firstName","type","text","placeholder","",1,"input"],["FirstName",""],["class","error w-100",4,"ngIf"],["formControlName","lastName","type","text","placeholder","",1,"input"],["LastName",""],[1,"w-75","mx-auto"],["formControlName","email","type","email","placeholder","",1,"input"],["Email",""],["formControlName","password","type","password","placeholder","",1,"input"],["input","","Password",""],["formControlName","phone","type","tel","placeholder","",1,"input"],["Phone",""],[1,"w-75","mx-auto","position-relative"],["type","text","placeholder","",1,"input"],["formControlName","gender","id","gender",1,"input","position-absolute","start-0","end-0","bottom-0","top-0"],["gender",""],["value","male"],["value","female"],["type","file","placeholder","",1,"input",3,"change"],["formControlName","dateOfBirth","type","date","placeholder","",1,"input"],["DateOfBirth",""],[1,"submit","text-capitalize","my-3","fw-bold"],[1,"error","w-100"],[4,"ngIf"]],template:function(i,n){if(1&i&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.handleForm()}),e.TgZ(1,"p",1),e._uU(2,"Welcome Patient"),e.qZA(),e.TgZ(3,"div",2)(4,"label"),e._UZ(5,"input",3,4),e.TgZ(7,"span"),e._uU(8,"First Name"),e.qZA(),e.YNc(9,T,2,1,"div",5),e.qZA(),e.TgZ(10,"label"),e._UZ(11,"input",6,7),e.TgZ(13,"span"),e._uU(14,"Lastname"),e.qZA(),e.YNc(15,O,2,1,"div",5),e.qZA()(),e.TgZ(16,"label",8),e._UZ(17,"input",9,10),e.TgZ(19,"span"),e._uU(20,"Email"),e.qZA(),e.YNc(21,A,3,2,"div",5),e.qZA(),e.TgZ(22,"label",8),e._UZ(23,"input",11,12),e.TgZ(26,"span"),e._uU(27,"Password"),e.qZA(),e.YNc(28,F,4,3,"div",5),e.qZA(),e.TgZ(29,"div",2)(30,"label",8),e._UZ(31,"input",13,14),e.TgZ(33,"span"),e._uU(34,"Phone"),e.qZA(),e.YNc(35,U,3,2,"div",5),e.qZA(),e.TgZ(36,"label",15),e._UZ(37,"input",16),e.TgZ(38,"select",17,18)(40,"option",19),e._uU(41,"Male"),e.qZA(),e.TgZ(42,"option",20),e._uU(43,"Female"),e.qZA(),e.TgZ(44,"span"),e._uU(45,"Gender"),e.qZA()()()(),e.TgZ(46,"label",15)(47,"input",21),e.NdJ("change",function(f){return n.change(f)}),e.qZA()(),e.TgZ(48,"label",8),e._UZ(49,"input",22,23),e.TgZ(51,"span"),e._uU(52,"Date"),e.qZA(),e.YNc(53,y,2,1,"div",5),e.qZA(),e.TgZ(54,"button",24),e._uU(55,"SignUP"),e.qZA()()),2&i){const p=e.MAs(6),f=e.MAs(12),k=e.MAs(18),J=e.MAs(25),Y=e.MAs(32),B=e.MAs(50);let g,u,_,m,c,d;e.Q6J("formGroup",n.registerForm),e.xp6(9),e.Q6J("ngIf",(null==(g=n.registerForm.get("firstName"))?null:g.errors)&&((null==(g=n.registerForm.get("firstName"))?null:g.touched)||p.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(u=n.registerForm.get("lastName"))?null:u.errors)&&((null==(u=n.registerForm.get("lastName"))?null:u.touched)||f.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(_=n.registerForm.get("email"))?null:_.errors)&&((null==(_=n.registerForm.get("email"))?null:_.touched)||k.value.length>0)),e.xp6(7),e.Q6J("ngIf",(null==(m=n.registerForm.get("password"))?null:m.errors)&&((null==(m=n.registerForm.get("password"))?null:m.touched)||J.value.length>0)),e.xp6(7),e.Q6J("ngIf",(null==(c=n.registerForm.get("phone"))?null:c.errors)&&((null==(c=n.registerForm.get("phone"))?null:c.touched)||Y.value.length>0)),e.xp6(18),e.Q6J("ngIf",(null==(d=n.registerForm.get("dateOfBirth"))?null:d.errors)&&((null==(d=n.registerForm.get("dateOfBirth"))?null:d.touched)||B.value.length>0))}},dependencies:[Z.ez,Z.O5,r.UX,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u],styles:['.form[_ngcontent-%COMP%]{display:flex;gap:20px;width:100%;padding:10px 20px;border-radius:20px;position:relative;background-color:#000;color:#fff;border:1px solid #f9b17a}.title[_ngcontent-%COMP%]{font-size:28px;letter-spacing:-1px;position:relative;display:flex;font-weight:600;text-transform:capitalize;align-items:center;padding-left:30px;color:#f9b17a}.title[_ngcontent-%COMP%]:before{width:18px;height:18px}.title[_ngcontent-%COMP%]:after{width:18px;height:18px;animation:_ngcontent-%COMP%_pulse 1s linear infinite}.title[_ngcontent-%COMP%]:before, .title[_ngcontent-%COMP%]:after{position:absolute;content:"";height:16px;width:16px;border-radius:50%;left:0;background-color:#f9b17a}.flex[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;gap:10px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{background-color:transparent;color:#fff;width:100%;padding:20px 5px 5px 10px;outline:0;border:1px solid #f9b17a;border-radius:10px;transition:all .5s}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:hover{transform:translateY(-10px)}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{color:#fff;position:absolute;left:10px;top:0;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:12.5px;font-size:1em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:#fff;top:-10px;font-size:.9em;font-weight:600}.input[_ngcontent-%COMP%]{font-size:medium}.submit[_ngcontent-%COMP%]{border:none;outline:none;padding:10px 15px;border-radius:10px;color:#fff;font-size:16px;margin-top:10px;transform:.3s ease;background-color:#f9b17a}.submit[_ngcontent-%COMP%]:hover{background-color:#2d3250;color:#fff}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(.9);opacity:1}to{transform:scale(1.8);opacity:0}}.input[type=file][_ngcontent-%COMP%]{padding:10px;border:none;background-color:transparent!important;border-radius:5px;width:100%;cursor:pointer}.d[_ngcontent-%COMP%]{background-color:#333;color:#fff;width:100%;padding:20px 5px 5px 10px;outline:0;border:1px solid #f9b17a;border-radius:10px}.magicpattern[_ngcontent-%COMP%]{width:100%;height:100%;background-size:cover;background-position:center center;background-repeat:repeat;background-image:url("data:image/svg+xml;utf8,%3Csvg height=%22auto%22 viewBox=%220 0 2000 1400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d=%22M0 1400h26.23v-399.416q0-13.115-13.115-13.115T0 1000.584ZM32.787 1400h26.23v-294.105q0-13.115-13.115-13.115t-13.115 13.115ZM65.574 1400h26.23V989.903q0-13.115-13.115-13.115t-13.115 13.115ZM98.36 1400h26.23V635.927q0-13.115-13.115-13.115-13.114 0-13.114 13.115ZM131.148 1400h26.229V961.094q0-13.115-13.115-13.115-13.114 0-13.114 13.115ZM163.934 1400h26.23V788.622q0-13.115-13.115-13.115t-13.115 13.115ZM196.721 1400h26.23V279.973q0-13.115-13.115-13.115t-13.115 13.115ZM229.508 1400h26.23V288.484q0-13.115-13.115-13.115t-13.115 13.115ZM262.295 1400h26.23V787.593q0-13.115-13.115-13.115t-13.115 13.115ZM295.082 1400h26.23V972.231q0-13.114-13.115-13.114t-13.115 13.114ZM327.869 1400h26.23V281.06q0-13.115-13.115-13.115t-13.115 13.115ZM360.656 1400h26.23V628.904q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM393.443 1400h26.23V215.703q0-13.114-13.116-13.114-13.114 0-13.114 13.114ZM426.23 1400h26.229V845.75q0-13.114-13.115-13.114-13.114 0-13.114 13.115ZM459.016 1400h26.23V204.175q0-13.115-13.115-13.115t-13.115 13.115ZM491.803 1400h26.23V643.5q0-13.115-13.115-13.115T491.803 643.5ZM524.59 1400h26.23V887.502q0-13.115-13.115-13.115t-13.115 13.115ZM557.377 1400h26.23V806.055q0-13.115-13.115-13.115t-13.115 13.115ZM590.164 1400h26.23V945.559q0-13.115-13.115-13.115t-13.115 13.115ZM622.95 1400h26.23V958.004q0-13.115-13.114-13.115-13.115 0-13.115 13.115ZM655.738 1400h26.23V197.448q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM688.525 1400h26.23V291.297q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM721.311 1400h26.23V193.16q0-13.115-13.115-13.115t-13.115 13.115ZM754.098 1400h26.23V321.435q0-13.114-13.115-13.114t-13.115 13.114ZM786.885 1400h26.23V223.112q0-13.115-13.115-13.115t-13.115 13.115ZM819.672 1400h26.23V881.897q0-13.115-13.115-13.115t-13.115 13.115ZM852.459 1400h26.23V894.19q0-13.115-13.115-13.115t-13.115 13.115ZM885.246 1400h26.23V231.295q0-13.115-13.115-13.115t-13.115 13.115ZM918.033 1400h26.23V920.99q0-13.114-13.115-13.114t-13.115 13.114ZM950.82 1400h26.23V246.755q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM983.607 1400h26.23V205.383q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM1016.393 1400h26.23V408.429q0-13.115-13.115-13.115t-13.115 13.115ZM1049.18 1400h26.23V974.05q0-13.115-13.115-13.115t-13.115 13.115ZM1081.967 1400h26.23V916.657q0-13.115-13.115-13.115t-13.115 13.115ZM1114.754 1400h26.23V680.737q0-13.115-13.115-13.115t-13.115 13.115ZM1147.541 1400h26.23V227.451q0-13.114-13.115-13.114t-13.115 13.114ZM1180.328 1400h26.23V307.4q0-13.114-13.115-13.114t-13.115 13.114ZM1213.115 1400h26.23V265.346q0-13.115-13.115-13.115t-13.115 13.115ZM1245.902 1400h26.23V495.395q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM1278.689 1400h26.229V847.12q0-13.114-13.115-13.114-13.114 0-13.114 13.114ZM1311.475 1400h26.23V766.953q0-13.115-13.115-13.115t-13.115 13.115ZM1344.262 1400h26.23v-392.233q0-13.115-13.115-13.115t-13.115 13.115ZM1377.05 1400h26.229V313.367q0-13.115-13.115-13.115t-13.115 13.115ZM1409.836 1400h26.23V481.908q0-13.115-13.115-13.115t-13.115 13.115ZM1442.623 1400h26.23V257.665q0-13.115-13.115-13.115t-13.115 13.115ZM1475.41 1400h26.23V393.269q0-13.115-13.115-13.115t-13.115 13.115ZM1508.197 1400h26.23v-358.924q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM1540.984 1400h26.23V999.26q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM1573.77 1400H1600V811.58q0-13.115-13.115-13.115t-13.115 13.115ZM1606.557 1400h26.23V710.632q0-13.115-13.115-13.115t-13.115 13.115ZM1639.344 1400h26.23V679.523q0-13.114-13.115-13.114t-13.115 13.114ZM1672.131 1400h26.23V328.535q0-13.115-13.115-13.115t-13.115 13.115ZM1704.918 1400h26.23v-329.122q0-13.115-13.115-13.115t-13.115 13.115ZM1737.705 1400h26.23V162.229q0-13.115-13.115-13.115t-13.115 13.115ZM1770.492 1400h26.23V710.994q0-13.114-13.115-13.114t-13.115 13.114ZM1803.279 1400h26.23V326.887q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM1836.066 1400h26.23v-281.815q0-13.115-13.116-13.115-13.114 0-13.114 13.115ZM1868.852 1400h26.23V507.888q0-13.115-13.115-13.115t-13.115 13.115ZM1901.64 1400h26.229V685.621q0-13.115-13.115-13.115t-13.115 13.115ZM1934.426 1400h26.23V751.727q0-13.115-13.115-13.115t-13.115 13.115ZM1967.213 1400h26.23V530.235q0-13.114-13.115-13.114t-13.115 13.114Z%22 fill=%22%232d3250%22%2F%3E%3C%2Fsvg%3E")}[_ngcontent-%COMP%]::-webkit-file-upload-button{color:#000;background-color:#f9b17a;padding:10px;margin-bottom:10px;border-radius:15px;box-shadow:1px 0 1px 1px #6b4559;outline:none;border:none;margin-right:15px;-webkit-transition:all .5s;transition:all .5s;cursor:pointer}[_ngcontent-%COMP%]::-webkit-file-upload-button:hover{background-color:#2d3250;color:#fff}']})}return t})()}}]);
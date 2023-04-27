"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8611],{68611:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var n=i(97464),s=i.n(n),o=i(77094),r=i.n(o),a=i(96486),l=i.n(a),d=i(67294),h=i(39249),u=i(83355),c=i(8848),p=i(3779),m=i(89101),f=i(82990),g=i(77671),v=i(54642),y=i(5978),S=i(95477),w=i(27210),R=i(28020),C=i(45023),b=i(33846),k=i(72087),Z=i(19748),I=i(28121),x=i(74194),V=i(84076),E=i(63296),B=i(77137),M=i(36360);i(27369);class A extends u.Z{constructor(){super(...arguments),this.searchRef=d.createRef(),this.firstApiRef=d.createRef(),this.apiSectionRefs={find:d.createRef(),pricing:d.createRef(),recovery:d.createRef(),security:d.createRef(),rateLimits:d.createRef(),experiments:d.createRef(),findAdminLogs:d.createRef(),utilities:d.createRef(),integrations:d.createRef(),marketing:d.createRef(),domainClaim:d.createRef(),ai:d.createRef(),spaceConsolidation:d.createRef()},this.storeTypes={searchStore:b.Z,ownershipRequestStore:k.Z},this.performGetOwnershipRequest=async()=>{const e=await v.adminGetOwnership(this.environment,{});if("failed"!==e.type)return e.data},this.scrollToSection=e=>{const t=this.apiSectionRefs[e];t.current&&t.current.scrollIntoView()},this.handleKeyDown=e=>{(0,C.Z)(this.environment,e,"command+/")&&(e.preventDefault(),this.stores.searchStore.reset(),this.searchRef.current&&this.searchRef.current.focusInput())},this.handleLogOut=()=>{g.B(this.environment)},this.filterStore=this.createComputedStore((()=>{const e=this.stores.searchStore.state.inputValue.toLowerCase();if(!(e.length<=1))try{return new RegExp(e,"i")}catch(t){return void console.error(`Can't filter with invalid regex "${e}"`,t)}}))}didMount(){window.addEventListener("keydown",this.handleKeyDown)}willUnmount(){window.removeEventListener("keydown",this.handleKeyDown)}renderComponent(){const e=(0,R.B7)(this.environment),{searchStore:t,ownershipRequestStore:i}=this.stores,n=(0,w.v2)(),o=n?w.Fr:w.AA,a=this.filterStore.state,l=void 0!==a?o.filter((e=>(0,w.H2)(e,a))):o;let u=!0;const g=w.KC.map((e=>{const t=l.filter((t=>t.sectionName===e)).map((e=>{const t=u?this.firstApiRef:void 0,n=i.state.result?i.state.result[e.apiName]:void 0;return u=!1,d.createElement(Z.Z,{style:A.itemStyle,ref:t,key:e.apiName,api:e,owner:n})}));return this.renderSection({key:e,title:w._c[e].title,children:t})})),v={request:{},performRequest:this.performGetOwnershipRequest,render:()=>{}};return r()(M.Z,{title:"Notion Admin Mode"},void 0,r()("div",{style:A.wrapStyle},void 0,r()("div",{style:A.style},void 0,r()("div",{style:A.itemStyle},void 0,r()("div",{style:A.headerStyle},void 0,"Notion ",!n&&"Restricted"," Admin Mode"," ","production"!==S.Z.env?`(${S.Z.env})`:void 0),r()("div",{style:{marginBottom:12}},void 0,r()(V.Z,{href:"https://dev.notion.so/notion/Use-Admin-Mode-05f1e0ad9aa749a4b3dc07410b499465",external:!0,inline:!0,underline:!0},void 0,"Click here")," ","to learn more about how to use Admin Mode."),r()("div",{style:{display:"flex"}},void 0,(null==e?void 0:e.isDefined())&&r()("div",{style:{flex:1}},void 0,"Currently Logged in as: ",e.getEmail()),!(null!=e&&e.isDefined())&&r()("div",{style:A.warningTextStyle},void 0,r()(V.Z,{innerStyle:{textDecoration:"underline"},href:m._j.login},void 0,"Please log in.")),(null==e?void 0:e.isDefined())&&r()(E.Z,{onClick:this.handleLogOut,style:{height:"auto"}},void 0,"Log Out")),n&&r()(I.Z,{}),!n&&r()(E.Z,{onClick:()=>{y.navigate({environment:this.environment,url:"/"})},style:{marginTop:12,display:"flex",alignItems:"center"}},void 0,p.Z.arrowLeft({width:12,height:12,marginRight:12}),"Navigate to user workspace")),r()("div",{style:A.itemStyle},void 0,r()("div",{style:{fontWeight:f.Z.fontWeight.bold,fontSize:18,marginBottom:6}},void 0,"Go to (cmd-/)"),r()("div",{style:{marginBottom:14,display:"flex"}},void 0,d.createElement(x.Z,{showClearButton:!0,placeholder:"Filter, then press enter to jump",ref:this.searchRef,focusInitial:!0,value:this.stores.searchStore.state.inputValue,onChange:e=>{t.setState({...t.state,inputValue:e.target.value})},left:p.Z.searchThick({width:14,height:14,marginRight:6,flexGrow:0,flexShrink:0,fill:c.Vx().mediumIconColor}),onSubmit:()=>{this.firstApiRef.current&&this.firstApiRef.current.focus()}})),w.KC.map((e=>r()("div",{style:{marginTop:6}},e,r()(V.Z,{onClick:()=>this.scrollToSection(e),underline:!0},void 0,w._c[e].title))))),g,l.length<o.length&&r()("div",{style:{opacity:.7,width:"100%",color:c.Vx().lightIconColor,margin:8,fontStyle:"italic"}},void 0,o.length-l.length,' hidden. To show all, press Cmd-/ or click "Clear" above.',r()("br",{}),this.randomQuip())),r()(h.Ix,{hideProgressBar:!0,autoClose:1500,transition:h.Mi})),d.createElement(B.Z,s()({},v,{requestStore:i})))}renderSection(e){const{title:t,children:i,key:n}=e;if(i&&(!Array.isArray(i)||i.length))return d.createElement("div",{ref:this.apiSectionRefs[n],id:n,key:n,style:{...A.style,marginTop:12,marginBottom:12,width:"100%"}},r()("div",{style:{...A.headerStyle,width:"100%",marginLeft:A.itemStyle.margin}},void 0,t),i)}randomQuip(){return l().sample(["Hi, spam duplicate","Your hair is looking so nice today!",'"The faster we are at getting botter, the faster we get botter" - Doug EngelBot',"You're doing a great job, keep it up!!","Computing for everyone","Remember to take a stretch break every once in a while"])}}A.displayName="Admin",A.wrapStyle={height:"100vh",overflow:"auto",background:c.Vx().sidebarBackground,padding:8},A.style={display:"flex",flexWrap:"wrap"},A.headerStyle={fontWeight:f.Z.fontWeight.bold,fontSize:36},A.itemStyle={width:500,padding:18,margin:8,border:`1px solid ${c.Vx().outlineButtonBorder}`,background:"white",position:"relative"},A.warningTextStyle={fontWeight:f.Z.fontWeight.bold,color:"red"};const L=A},19748:(e,t,i)=>{i.d(t,{Z:()=>K});var n=i(97464),s=i.n(n),o=i(77094),r=i.n(o),a=i(96486),l=i.n(a),d=i(67294),h=i(83355),u=i(480),c=i(8848),p=i(4615),m=i(89101),f=i(97880),g=i(82990),v=i(5366),y=i(54642),S=i(92625),w=i(53471),R=i(27210),C=i(77907),b=i(49085);class k extends b.Z{getInitialState(){return{inputValues:{}}}}const Z=k;var I=i(12318),x=i(3104),V=i(52275),E=i(12508),B=i(57770),M=i(74194),A=i(84076),L=i(68785),N=i(22346),T=i(63296),O=i(14871),U=i(64369);function D(e){const{fieldName:t,acceptMultiple:i,store:n}=e,[s,o]=(0,d.useState)((()=>({isUploading:!1,errorMessage:void 0,uploadedFileUrls:[]}))),a=(0,u.O7)();return d.createElement(d.Fragment,null,r()(T.Z,{isLarge:!0,style:{width:"fit-content",backgroundColor:"white"},onClick:()=>{w.cR({multiple:!!i,environment:a,onStart:()=>{o({...s,isUploading:!0,errorMessage:void 0,uploadedFileUrls:[]})},bucket:"public",onError:e=>{o({isUploading:!1,errorMessage:e.message,uploadedFileUrls:[]})},onComplete:e=>{o({isUploading:!1,errorMessage:void 0,uploadedFileUrls:e}),n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:i?e:e[0]}})},accept:"image/*"})}},void 0,i?"Upload images":"Upload image",s.isUploading&&r()(L.Z,{style:{marginLeft:4}})),s.uploadedFileUrls&&r()("div",{},void 0,s.uploadedFileUrls.join(",")),s.errorMessage&&r()("div",{style:{color:c.ZP.red,display:"inline-flex",marginLeft:8}},void 0,s.errorMessage))}const j=(0,v.defineMessages)({loading:{id:"adminAPIRequest.loadingMessage",defaultMessage:"Loading…"}});class F extends h.Z{constructor(){super(...arguments),this.firstInputRef=d.createRef(),this.fileInputRef=d.createRef(),this.storeTypes={store:Z,fileNameStore:I.default.of("")},this.renderKey=(e,t,i)=>{const{store:n}=this.stores,o=n.state.inputValues[t],a=0===i?this.firstInputRef:void 0;let h;if(e.type===R.It.String)h=d.createElement(M.Z,{ref:a,value:"string"==typeof o?o:"",showClearButton:!0,onChange:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:e.target.value}})},onSubmit:this.handleSubmit,onClearButtonClick:()=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:void 0}})}});else if(e.type===R.It.Number)h=d.createElement(M.Z,{ref:a,type:"number",value:"number"==typeof o?o.toString():"",onChange:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:parseInt(e.target.value)}})},onSubmit:this.handleSubmit});else if(e.type===R.It.Options){const i=[F.undefinedKey,...e.options],r={menuTitle:t,items:i,selectedItem:o,onSelect:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:e===F.undefinedKey?void 0:e}})},getKey:e=>e,renderItem:e=>d.createElement(V.Z,s()({},e,{title:e.value===F.undefinedKey?"Empty":e.value})),renderOrigin:e=>d.createElement(T.Z,s()({isLarge:!0,style:{marginBottom:8}},e),o||"Empty"),width:300};h=d.createElement(O.Z,r)}else if(e.type===R.It.Boolean)h=r()(E.Z,{checked:Boolean(o),size:20,onClick:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:!Boolean(o)}})}});else if(e.type===R.It.Csv)h=d.createElement(d.Fragment,null,r()(T.Z,{isLarge:!0,onClick:()=>{var e,t;null===(e=this.fileInputRef)||void 0===e||null===(t=e.current)||void 0===t||t.click()},style:{marginRight:10}},void 0,"Upload"),this.stores.fileNameStore.state,d.createElement("input",{ref:this.fileInputRef,style:{display:"none"},type:"file",name:e.name||"csv file",onChange:e=>this.handleOnChangeCsvFile(t,e)}));else if(e.type===R.It.Image||e.type===R.It.Images){const i=e.type===R.It.Images;h=r()(D,{fieldName:t,acceptMultiple:i,store:n})}else(0,f.t1)(e);return r()("div",{},t,r()("div",{style:{marginTop:12,marginBottom:4}},void 0,l().startCase(t)),e.comment&&r()(U.Z,{isSmall:!0,isMultiline:!0,style:{marginTop:4,marginBottom:8}},void 0,e.comment),h)},this.handleOnChangeCsvFile=async(e,t)=>{const{store:i,fileNameStore:n}=this.stores,s=t.target.files;if(null==s||!s.length)return;const o=s[0],r=await o.text();n.set(o.name),i.setState({response:void 0,inputValues:{...i.state.inputValues,[e]:r}})},this.handleSubmit=()=>{this.props.api.confirmationApiName?this.handleConfirm():this.handleConfirmedSubmit()},this.handleConfirm=()=>{const{store:e}=this.stores,{confirmationApiName:t,schema:i}=this.props.api,{inputValues:n}=e.state;if(!t)throw new Error("Should not have gotten here without a confirmationApiName");const s=this.normalizeInputValues(n,i),o=y[t];if(!o)throw new Error(`Missing api handler for ${t} - likely either a typo in client/helpers/adminHelpers.tsx or missing declaration in client/actions/api.ts`);S.j({message:j.loading}),o(this.environment,s).then((t=>{S.x(),e.setState({...e.state,confirmationResponse:t})}))},this.handleConfirmedSubmit=()=>{const{store:e}=this.stores,{apiName:t,schema:i}=this.props.api,{inputValues:n}=e.state,s=this.normalizeInputValues(n,i);S.j({message:j.loading});const o=y[t];if(!o)throw new Error(`Missing api handler for ${t} - likely either a typo in client/helpers/adminHelpers.tsx or missing declaration in client/actions/api.ts`);o(this.environment,s).then((t=>{S.x(),this.downloadAsCsv(t)||e.setState({...e.state,confirmationResponse:void 0,response:t})}))},this.handleCancel=()=>{const{store:e}=this.stores;e.setState({inputValues:e.state.inputValues})},this.handleModalDismiss=()=>{const{store:e}=this.stores;if(!e.state.response)return;"failed"===e.state.response.type||this.props.api.isReadOnly?e.setState({inputValues:e.state.inputValues}):this.resetStoreState(this.props)}}willMount(e){this.resetStoreState(e)}didMount(){this.shouldShowInline()&&this.handleSubmit()}renderComponent(){const{api:e,owner:t,defaultParams:i,style:n}=this.props,{apiName:s,displayName:o,schema:a,description:h,emoji:u,isDestructive:c}=e,p=(0,R.G0)(s),{confirmationResponse:m,response:f}=this.stores.store.state;return r()("div",{style:n},void 0,r()("div",{style:F.headerStyle},void 0,r()(B.Z,{size:24,emoji:u}),r()("span",{style:{marginLeft:4}},void 0,o||l().startCase(s))),h&&r()(U.Z,{isSmall:!0,isMultiline:!0},void 0,h),!this.shouldShowInline()&&d.createElement(d.Fragment,null,Object.entries(a).map(((e,t)=>{let[n,s]=e;return i&&i[n]?void 0:this.renderKey(s,n,t)})),r()(T.Z,{style:{marginTop:8,marginBottom:8},isLarge:!0,onClick:this.handleSubmit,isRed:c},void 0,"Submit")),this.shouldShowInline()&&!f&&r()("div",{},void 0,r()(L.Z,{style:{width:18,height:18}}),"Loading ..."),this.renderError(m),this.renderConfirmation(m),this.renderError(f),this.renderResponse(f),(p||t)&&r()("div",{style:F.footerStyle},void 0,t&&r()("span",{},void 0,"Owned by"," ",r()("a",{href:`https://notion.slack.com/app_redirect?channel=${t.slackChannel}`},void 0,t.teamName)),p&&t&&r()("span",{},void 0," | "),p&&r()("span",{},void 0,"Full Admin Tool")))}renderConfirmation(e){if(e&&"success"===e.type)return r()(N.Z,{open:!0,innerStyle:F.modalStyle,onDismiss:this.handleCancel,disableAnimation:!0,render:()=>d.createElement(d.Fragment,null,r()(U.Z,{isSmall:!0,isMultiline:!0,style:{marginBottom:8}},void 0,"Does this information about the action you're about to take look good to you? Hit Confirm if it does. Cancel if not."),r()(C.LazyAdminReactJson,{data:e.data}),r()(T.Z,{style:{marginTop:8,marginBottom:8},isLarge:!0,onClick:this.handleConfirmedSubmit},void 0,"Confirm"),r()(T.Z,{style:{marginTop:8,marginBottom:8,marginLeft:8},isLarge:!0,onClick:this.handleCancel},void 0,"Cancel"))})}renderError(e){if(e&&"success"!==e.type)return 401===e.status?r()("div",{style:F.responseErrorStyle},void 0,e.body.message," Likely fixed by"," ",r()(A.Z,{innerStyle:{textDecoration:"underline"},href:m._j.login},void 0,"signing in.")):r()("div",{style:F.responseErrorStyle},void 0,e.body.message)}renderResponse(e){if(!e||"success"!==e.type)return;const t=this.props.api.customResponseRenderer?r()(this.props.api.customResponseRenderer,{data:e.data,environment:this.environment,singleRecordMode:this.props.singleRecordMode}):r()(x.Z,{data:e.data});return this.shouldShowInline()?t:r()(N.Z,{open:Boolean(e&&"success"===e.type),innerStyle:F.modalStyle,onDismiss:this.handleModalDismiss,disableAnimation:!0,render:()=>t})}focus(){this.firstInputRef.current&&this.firstInputRef.current.focusInput()}downloadAsCsv(e){if(n=e,Boolean("success"===n.type&&Array.isArray(null===(s=n.data)||void 0===s?void 0:s.rows)&&(null===(o=n.data)||void 0===o?void 0:o.rows.length)>0&&"string"==typeof(null===(r=n.data)||void 0===r?void 0:r.filename))){const{filename:n,rows:s}=e.data,o=Array.from(s.reduce(((e,t)=>(Object.keys(t).forEach((t=>e.add(t))),e)),new Set)),r=[o];for(const e of s){const t=new Array(o.length);for(let i=0;i<t.length;i++){const n=o[i];t[i]=e[n]}r.push(t)}const a=r.map((e=>e.join(","))).join("\n");var t=new Blob([a],{type:"data:text/csv"}),i=window.URL.createObjectURL(t);const l=document.createElement("a");return l.download=n,l.href=i,l.click(),!0}var n,s,o,r;return!1}shouldShowInline(){const{showByDefault:e,singleRecordMode:t}=this.props;return e&&t}resetStoreState(e){const{defaultParams:t}=e,{store:i}=this.stores,n={};for(const s of Object.keys(e.api.schema)){const i=e.api.schema[s];t&&t[s]?n[s]=t[s]:i&&void 0!==i.defaultValue?n[s]=i.defaultValue:n[s]=void 0}i.setState({inputValues:n})}normalizeInputValues(e,t){const i={};for(const n of Object.keys(e)){const s=e[n];t[n]&&(l().isString(s)&&p.qn(s)?i[n]=p.wr(s):i[n]=s)}return i}}F.undefinedKey="__undefined",F.headerStyle={fontWeight:g.Z.fontWeight.bold,fontSize:20,display:"flex",alignItems:"center",marginBottom:6},F.footerStyle={fontSize:10,position:"absolute",bottom:7,right:20},F.responseErrorStyle={color:c.ZP.red,display:"inline-block",marginLeft:8},F.modalStyle={width:"calc(100% - 120px)",height:"calc(100% - 120px)",padding:24,fontSize:"1.2em",overflow:"scroll"};const K=F},27369:()=>{}}]);
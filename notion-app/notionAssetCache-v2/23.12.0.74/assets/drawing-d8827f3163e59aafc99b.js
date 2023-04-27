"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6991],{85529:(t,e,n)=>{n.r(e),n.d(e,{TldrawAdapter:()=>tt});var o=n(97464),r=n.n(o),s=n(77094),i=n.n(s),a=n(92962),l=n(51315),c=n(20394),d=n(96486),u=n.n(d),p=n(67294),g=n(480),h=n(24405),m=n(88108),f=n(97880);const b={serialize:t=>JSON.stringify(t),deserialize:t=>JSON.parse(t)};function*y(t){for(const[e,n]of(0,f.qP)(t.added))yield[e,[void 0,n]];for(const[e,n]of(0,f.qP)(t.updated))yield[e,n];for(const[e,n]of(0,f.qP)(t.removed))yield[e,[n,void 0]]}class v{constructor(){this.added={},this.removed=new Set}static fromSerializedSnapshot(t){const e=new v;return e.mergeSnapshot(t),e}add(t){this.added[t.id]=t,this.removed.delete(t.id)}remove(t){delete this.added[t],this.removed.add(t)}ignore(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(const o of e)delete this.added[o],this.removed.delete(o)}mergeSnapshot(t){for(const[e,n]of(0,f.qP)(t))n?this.add(b.deserialize(n)):this.remove(e)}hasChanges(){return this.removed.size>0||Object.keys(this.added).length>0}}class w{constructor(){this.pendingChanges=[]}getPendingIds(){if(0===this.pendingChanges.length)return new Set;this.pendingChanges.length>1&&(this.pendingChanges=[this.clear()]);const[t]=this.pendingChanges,e=new Set;for(const[n]of y(t))e.add(n);return e}add(t){this.pendingChanges.push(t)}clear(){const t=(0,c.bs)(this.pendingChanges);return this.pendingChanges=[],t}}var S=n(7406),_=n(4615),k=n(63143),x=n(5366),C=n(47307),I=n(9953),z=n(30149),M=n(8848),E=n(82990);function P(){const t=(0,h.Fg)(),e=(0,p.useMemo)((()=>{const e="3px",n=M.ZP.blueWithAlpha(1),o="dark"===t.mode;return{"--color-text":t.regularTextColor,"--color-text-0":t.regularTextColor,"--color-text-1":t.regularTextColor,"--color-text-2":t.mediumTextColor,"--color-text-3":t.lightTextColor,"--color-accent":t.accentColors.red[800],"--color-focus":M.ZP.blueWithAlpha(.14),"--color-selection-stroke":n,"--color-selection-fill":M.ZP.blueWithAlpha(.025),"--color-brush-stroke":"transparent","--color-brush-fill":M.ZP.blueWithAlpha(.14),"--color-muted-2":t.buttonHoveredBackground,"--color-selected":n,"--color-selected-contrast":t.contentBackground,"--color-text-selection":M.ZP.blueWithAlpha(.28),"--color-primary":t.blueButtonBackground,"--color-warn":M.ZP.red,"--radius-0":e,"--radius-1":e,"--radius-2":e,"--radius-3":e,"--radius-4":e,"--color-low":t.popoverBackground,"--opacity-low":.93,"--radius-5":"6px","--color-panel":t.popoverBackground,"--color-panel-contrast":"transparent","--color-divider":t.regularDividerColor,"--shadow-2":t.mediumBoxShadow,"--color-background":t.contentBackground,"--palette-black":t.accentColors.gray[900],"--palette-blue":o?t.accentColors.blue[800]:t.accentColors.blue[500],"--palette-green":o?t.accentColors.green[800]:t.accentColors.green[500],"--palette-grey":o?t.accentColors.gray[700]:t.accentColors.gray[300],"--palette-light-blue":o?t.accentColors.blue[500]:t.accentColors.blue[200],"--palette-light-green":o?t.accentColors.green[500]:t.accentColors.green[300],"--palette-red":o?t.accentColors.red[800]:t.accentColors.red[500],"--palette-light-red":o?t.accentColors.red[500]:t.accentColors.red[300],"--palette-violet":o?t.accentColors.purple[800]:t.accentColors.purple[500],"--palette-light-violet":o?t.accentColors.purple[500]:t.accentColors.purple[300],"--palette-orange":o?t.accentColors.orange[700]:t.accentColors.orange[500],"--palette-yellow":o?t.accentColors.yellow[800]:t.accentColors.yellow[500],"--palette-white":t.contentBackground}}),[t]),n=(0,p.useMemo)((()=>{let t=".rs-container {";for(const[n,o]of Object.entries(e))void 0!==o&&(t+=`\n  ${n}: ${o};`);return t+="\n}",t+=`\n\t\t.tlui-button {\n\t\t\ttext-shadow: none;\n\t\t}\n\n\t\t.tlui-slider__range {\n\t\t\tbackground: var(--color-selection-stroke);\n\t\t}\n\n\t\t/* Try to make menu items look like Notion menu items */\n\t\t.tlui-menu__button {\n\t\t\theight: 28px;\n\t\t\tline-height: 150%;\n\t\t\tfont-size: ${E.Z.fontSize.UIRegular.desktop}px;\n\t\t\tpadding: 0 12px;\n\t\t}\n\n\t\t.tlui-menu__checkbox-item {\n\t\t\tpadding-left: 28px;\n\t\t}\n\n\t\t.tlui-menu__checkbox-item__check .tlui-icon__small {\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t}\n\n\t\t.tlui-menu__button::after {\n\t\t\twidth: calc(100% - 8px);\n\t\t\theight: 100%;\n\t\t\tleft: 4px;\n\t\t\tright: 4px;\n\t\t\tbottom: 0;\n\t\t\ttop: 0;\n\t\t}\n\n\t\t.tlui-menu__button:nth-child(n + 2) {\n\t\t\tmargin-top: 0;\n\t\t}\n\n\t\t.tlui-menu__button:nth-last-child(n + 2) {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\n\t\t.tlui-menu__group {\n\t\t\tpadding: 4px 0;\n\t\t}\n\n\t\t.tlui-menu__group[data-size='medium'] {\n\t\t\tmin-width: 200px;\n\t\t}\n\n\t\t/* Styling for how keyboard shortcuts are rendered next to menu items */\n\t\t.tlui-kbd {\n\t\t\tfont-size: ${E.Z.fontSize.UISmall.desktop}px;\n\t\t\tcolor: var(--color-text-3);\n\t\t\tdisplay: flex;\n\t\t\tgap: 0;\n\t\t}\n\n\t\t.tlui-kbd > span {\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t.tlui-kbd span + span::before {\n\t\t\tcontent: '+';\n\t\t}\n\n\t\t.rs-error-boundary__content .rs-error-boundary__refresh {\n\t\t\tcolor: var(--color-background);\n\t\t}\n\n\t\t/* Styling for the Tools panel */\n\t\t.tlui-toolbar__tools {\n\t\t\tborder-radius: 999px;\n\t\t\tpadding: 0 8px;\n\t\t}\n\n\t\t.tlui-button {\n\t\t\t--color-selected: transparent;\n\t\t\t--color-selected-contrast: var(--color-selection-stroke);\n\t\t}\n\n\t\t.tlui-button:not(:disabled):hover::after {\n\t\t\tbackground: var(--color-muted-2);\n\t\t}\n\n\t\t/* Styling for "low" toolbars like the top bar and zoom */\n\t\t.tlui-menu-zone::before,\n\t\t.tlui-navigation-zone,\n\t\t.tlui-navigation-zone::before,\n\t\t.tlui-debug-panel {\n\t\t\tborder: none;\n\t\t\tborder-radius: var(--radius-5);\n\t\t\topacity: var(--opacity-low);\n\t\t}\n\n\t\t.tlui-menu-zone::before,\n\t\t.tlui-navigation-zone::before,\n\t\t.tlui-debug-panel\n\t\t{\n\t\t\tinset: 0;\n\t\t\tbox-shadow: var(--shadow-1);\n\t\t}\n\n\t\t.tlui-help-menu__button {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.tlui-help-menu__button::before  {\n\t\t\tbox-shadow: var(--shadow-1);\n\t\t\topacity: var(--opacity-low);\n\t\t}\n\n\t\t/* Styling for extra-small width controls */\n\t\t.tlui-toolbar__extras__controls {\n\t\t\tmargin-left: 20px;\n\t\t}\n\n\t\t.tlui-toolbar__extras__controls,\n\t\t.tlui-toolbar__extras__controls::before\n\t\t{\n\t\t\tborder: none;\n\t\t\tborder-radius: 12px;\n\t\t\tborder-bottom-left-radius: 0px;\n\t\t\tborder-bottom-right-radius: 0px;\n\t\t}\n\n\n\t\t.tlui-toolbar__extras__controls::before {\n\t\t\tinset: 0;\n\t\t\tbox-shadow: var(--shadow-1);\n\t\t}\n\n\t\t/* Make dialogs fit */\n\t\t.tlui-dialog__content {\n\t\t\tmax-height: 80%;\n\t\t}\n\n\t\t/* Hide the "Page" menu */\n\t\t.tlui-popover:has(.tlui-page-menu__trigger) {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.tlui-popover:has(.tlui-page-menu__trigger) + .tlui-menu-zone__divider {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t/* Disable spurious text selection */\n\t\t.rs-container input, *[contenteditable] .rs-container, *[contenteditable] .rs-container * {\n\t\t\tuser-select: none;\n\t\t\t-webkit-user-select: none;\n\t\t}\n\n\t\t/* Style text selection inside text components */\n\t\t.rs-text-input::selection {\n\t\t\tbackground: var(--color-text-selection);\n\t\t\tcolor: currentColor;\n\t\t\ttext-shadow: none;\n\t\t}\n\t\t`,{__html:t}}),[e]);return i()("style",{dangerouslySetInnerHTML:n})}var A=n(87333),F=n(81954),V=n(44615),O=n(19889),Z=n(36054),R=n(74487),K=n(41641),N=n(2688),$=n(3815);const T=3*k.hM,D=1*k.C0,H=R.literal(0),j=R.record(R.string(),R.union([H,R.string()])),B=R.record(R.string(),R.union([H,j]));function U(t){const{blockStore:e,app:n}=t,o=(0,g.O7)(),r=(0,x.useIntl)(),s=e.userId,i=e.id,a=(0,V.e7)(i),l=null==n?void 0:n.instanceId,c=null==n?void 0:n.store,d=(0,F.VK)((()=>Boolean(n&&l&&s&&i&&(0,K.Z)(a)&&e.canEdit())),[n,i,e,a,l,s]);(0,p.useEffect)((()=>{if(!(d&&n&&l&&s&&c))return;const t=new w,i=N.Z.addListener(a,(function(n,o){!function(t){const{blockStore:e,tldrawStore:n,maybePresenceData:o,pendingChanges:r,intl:s}=t;let i;try{i=(0,Z.XS)(B,o)}catch(c){return}const a=new v;for(const[d,u]of(0,f.qP)(i))d!==e.userId&&u&&a.mergeSnapshot(u);if(a.ignore(...r.getPendingIds()),!a.hasChanges())return;const l=Object.values(a.added);for(const d of l)if(A.Anc.isInstance(d)){const{userId:t}=d,n=t.split(":",2)[1];if(n&&(0,_.e)(n)){const o=$.t1.createChildStore(e,{table:O.KJ,id:n}).getDisplayName(s);a.add(A.bKH.create({id:t,name:o}))}}n.mergeRemoteChanges((()=>{n.put(Object.values(a.added)),n.remove(Array.from(a.removed))}))}({blockStore:e,tldrawStore:c,maybePresenceData:o,pendingChanges:t,intl:r})}),l,o),p=u().throttle((()=>{const n=t.clear();!function(t){const{environment:e,blockStore:n,diff:o}=t,{userId:r}=n;if(!r)return;const s=(0,V.e7)(n.id),i={};let a=!1;for(const[l,[,c]]of y(o))if(L(l)){a=!0;const t=c?b.serialize(c):0;i[l]=t}if(!a)return;N.Z.updateField(s,r,i,T,e)}({environment:o,blockStore:e,diff:n})}),D),g=c.listen((function(e){let{changes:n,source:o}=e;"user"===o&&(t.add(n),p())}));return N.Z.onDisconnect(a,[{operation:"setField",key:a,field:s,value:0,ttl:T}],l,o),()=>{g(),i&&N.Z.removeListener(i,o),N.Z.setField(a,s,0,T,o),N.Z.clearOnDisconnect(a,l,o)}}),[d,e.id,a,l,o,e,r,n,s,c])}const q=[A.Anc,A.wwX,A.KjH];function L(t){return q.some((e=>e.isId(t)))}const W=2*k.C0,X=l.bKH.createId(),J=(0,a.F)({format:t=>t}),G=(0,m.exposeDebugValue)("drawings",{});function Q(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]}function Y(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]}function tt(t){const{store:e}=t,n="dark"===(0,h.Fg)().mode,[o,s]=(0,p.useState)(void 0),a=(0,p.useCallback)((t=>{s(t)}),[]);(0,p.useEffect)((()=>{o&&(t.disabled?o.enableReadOnlyMode():o.updateUserDocumentSettings({isReadOnly:!1}))}),[o,t.disabled]);const d=(0,p.useRef)();(0,p.useEffect)((()=>{var e,n;t.isEditing?(null==o||o.focus(),null==o||o.updateInstanceState({isFocusMode:(null===(e=d.current)||void 0===e?void 0:e.isFocusMode)??!1}),null==o||o.setSelectedIds((null===(n=d.current)||void 0===n?void 0:n.shapeIds)??[])):o&&(d.current={shapeIds:o.selectedIds,isFocusMode:o.instanceState.isFocusMode},o.blur(),o.updateInstanceState({isFocusMode:!0}),o.setSelectedTool("hand"),o.selectNone())}),[o,t.isEditing]);const m=(0,p.useCallback)((t=>{throw C.showErrorMessage(i()(x.FormattedMessage,{id:"drawing.images-not-supported",defaultMessage:"Images are not supported in drawings yet",description:"Shown when a user tries to copy-paste or upload an image into a drawing."})),new Error("Image assets are not supported yet.")}),[]),v=l.WqU.default,{syncedStore:_,userId:k,instanceId:M}=function(t){let{store:e,config:n}=t;const o=(0,g.O7)(),[r]=(0,p.useState)((()=>et)),s=(0,p.useMemo)((()=>{const t=e.userId;return t?l.bKH.createCustomId(t):X}),[e.userId]),i=(0,p.useMemo)((()=>{const t=`tab/${r}/store/${e.key}`;return l.KjH.createCustomId(t)}),[r,e.key]),[a,d]=(0,p.useState)(null);(0,p.useEffect)((()=>{const t=`block/${e.id}/store/${e.key}/effect/${nt++}`;d({id:t,syncedStore:{status:"loading"}});const r=e=>{d((n=>(null==n?void 0:n.id)===t?{id:t,syncedStore:e}:n))},a=n.createStore({userId:s,instanceId:i}),l=t=>{const e=(0,c.$F)(a.schema.serialize(),t);if(0===e)return;const n=new Error(e<0?"This drawing is from a newer version of Notion. Update Notion to edit it.":"This drawing is from an older version of Notion. Reload to edit it.");throw Q("schema mismatch",{error:n,incomingSchema:t,ourSchema:a.schema.serialize()}),r({status:"error",error:n}),n},p=e.getDrawingStore(),g=e.getKeyStore("version"),h={drawingStore:p,schemaStore:p.getKeyStore("schema"),snapshotStore:p.getKeyStore("snapshot"),typeStore:p.getKeyStore("type"),getLastVersion:()=>g.isReady()?g.getValue()??-1:-1};let m=!1;const v=new w,_=()=>{if(m)return void Q("skip update: ignoreNotionUpdates");const t=h.drawingStore.getValue();t?(t.schema&&l(t.schema),a.mergeRemoteChanges((()=>{const e=v.getPendingIds(),n=[],o=[];for(const[r,s]of(0,f.qP)(t.snapshot||{}))e.has(r)?Q("skip record: ahead:",{id:r}):s?o.push(b.deserialize(s)):n.push(r);Q("apply updates",{removedIds:n,updatedRecords:o,pendingDiffIds:e}),a.remove(n),a.put(o)}))):Q("skip update: no Notion drawingValue")},k=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const n=v.clear(),s=h.getLastVersion();z.createAndCommit({environment:o,userAction:"drawing.persist",userId:e.userId,perform(e){try{m=!0,Y("begin persist",{squashed:n,initialVersion:s});const o=p.getValue();if(o&&"tldraw"!==o.type){const t=Error(`Unknown drawing value type: ${o.type}`);throw r({status:"error",error:t}),t}if(h.typeStore.isReady()&&!h.typeStore.getValue()){const t="tldraw";Y("persist type:",t),I.sO({store:h.drawingStore,value:{type:t},transaction:e})}const i=h.schemaStore.getValue(),c=t||h.schemaStore.isReady()&&!i;if(c){const t=a.schema.serialize();Y("persist schema:",t),I.sO({value:t,store:h.schemaStore,transaction:e})}i&&!t&&l(i);let d={},u=!1;const g=c||h.snapshotStore.isReady()&&!h.snapshotStore.getValue();g&&(u=!0,d=Object.fromEntries(Object.entries(a.serialize()).filter((t=>{let[e]=t;return ot(e)})).map((t=>{let[e,n]=t;return[e,b.serialize(n)]}))));for(const[t,[,e]]of y(n))ot(t)&&(u=!0,d[t]=e?b.serialize(e):0);u&&(Y("persist snapshot update:",d,g),I.sW({store:h.snapshotStore,transaction:e,data:d}))}finally{m=!1,Y("end persist",{initialVersion:s,finalVersion:h.getLastVersion()})}}})},x=u().throttle(k,W),C=t=>{let{changes:e,source:n}=t;Y("changes:",n,e),"user"===n&&(v.add(e),x())};let M=!1;(async()=>{try{if(await p.load(),M)return;const t=p.getValue();if(t){const e={};for(const[r,s]of(0,f.qP)(t.snapshot||{}))s&&(e[r]=b.deserialize(s));const n=t.schema?(0,c.$F)(t.schema,a.schema.serialize()):0,o=a.schema.migrateStoreSnapshot(e,t.schema??a.schema.serializeEarliestVersion());if("error"===o.type)throw Q("migration error:",o),new Error(`This version of Notion isn't compatible with this drawing (${o.reason})`);a.mergeRemoteChanges((()=>{a.put(Object.values(e),"initialize")})),0!==n&&k(!0)}p.addListener(_),r({status:"synced",store:a})}catch(t){throw r({status:"error",error:(0,S.tg)(t)}),t}})();const E=a.listen(C);return()=>{M=!0,d((e=>(null==e?void 0:e.id)===t?null:e)),p.removeListener(_),E()}}),[i,n,s,e,o]);const h=(null==a?void 0:a.syncedStore)??{status:"loading"};return{userId:s,instanceId:i,syncedStore:h}}({store:e,config:v});U({blockStore:e,app:o}),(0,p.useEffect)((()=>{if(o)return G[M]=o,()=>{delete G[M]}}),[M,o]);const E=(0,p.useMemo)((()=>{let t=null;return[{helpMenu(e,n,o){const r=n.find((t=>"top"===t.id));return t=(0,l.$5f)("help",...r.children),[]}},{menu(e,n,o){n.push(t);for(const{item:t,parent:r,index:s}of function*(t){const e=[];function*n(t){for(let o=0;o<t.length;o++){const r=t[o];yield{index:o,item:r,path:e,parent:e.at(-1)},"group"!==r.type&&"submenu"!==r.type||(e.push(r),yield*n(r.children),e.pop())}}yield*n(t)}(n))"toggle-dark-mode"===t.id&&r&&r.children.splice(s,1),"LANGUAGE_MENU"===t.id&&r&&r.children.splice(s,1),"insert-media"===t.id&&r&&r.children.splice(s,1);return n},toolbar:(t,e,n)=>e.filter((t=>"asset"!==t.id)),actions(t,e,n){const o=e["toggle-dark-mode"];return o&&(o.kbd=void 0),e}}]}),[]),A={isDarkMode:n,config:v,assetUrls:J,overrides:E};return p.createElement(p.Fragment,null,i()(P,{}),p.createElement(l.gRN,r()({onMount:a,instanceId:M,userId:k,store:_},A,{onCreateAssetFromFile:m}),p.createElement(l.p4C,A,i()(l.xVl,{},void 0,i()(l.Xz7,{})))))}const et=(0,_.ZP)();let nt=0;function ot(t){return![l.F7R,l.iHI,l.bKH,l.Anc,l.luK,l.KjH,l.wwX].some((e=>e.isId(t)))}}}]);
"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2293],{92660:(e,n,i)=>{i.d(n,{Z:()=>l});var o=i(77094),t=i.n(o),a=(i(67294),i(83355)),r=i(22346),s=i(44532);class l extends a.Z{renderComponent(){const{render:e}=this.props,{device:n}=this.environment,i=this.props.modalStore.state;return n.isMobile?t()(s.ZP,{open:i.open,popupType:s.ZP.PopupType.SlideUp,origin:this.props.origin,onDismiss:this.props.onDismiss,render:e,style:this.props.style}):t()(r.Z,{open:i.open,preventHideChildrenWhileOpening:!0,render:e,onDismiss:this.props.onDismiss,style:this.props.style,innerStyle:this.props.innerStyle})}}l.displayName="DefaultPopupOrModal"},50744:(e,n,i)=>{i.r(n),i.d(n,{default:()=>w});var o=i(77094),t=i.n(o),a=i(67294),r=i(81954),s=i(24405),l=i(3779),d=i(97880),p=i(82990),c=i(5366),m=i(24690),h=i(42922),g=i(85740),u=i(92660),f=i(29551);function w(e){let{}=e;window.__c={n:"ConfirmPrivilegedActionModal"};const n=(0,r.VK)((()=>m.Z.state),[]),i=(0,a.useCallback)((()=>{n.open&&(n.onAccept(),m.Z.setState({open:!1}))}),[n]),o=(0,a.useCallback)((()=>{n.open&&(n.onCancel(),m.Z.setState({open:!1}))}),[n]),w=(0,s.yK)((e=>({innerModal:{borderRadius:8,padding:20,width:300},shieldIcon:{color:e.accentColors.yellow[500],width:21,height:21},title:{marginTop:8,color:e.regularTextColor,fontWeight:p.Z.fontWeight.semibold,fontSize:17},description:{color:e.mediumTextColor,textAlign:"center",fontSize:p.Z.fontSize.UIRegular.desktop,marginTop:8,marginBottom:24},button:{width:"100%",justifyContent:"center"},buttonGap:{paddingTop:5}})),[]);if(!n.open)return null;let v;switch(n.type){case"joinTeamAsOwner":case"upgradeToOwner":v=t()(c.FormattedMessage,{id:"confirmPrivilegedActionModal.becomeOwnerConfirmation.description",description:"Description in confirmation modal that shows when an enterprise admin takes the privileged action of becoming an owner on a team, whether by joining the team or upgrading themselves from member -> owner.",defaultMessage:"Becoming an owner in a Teamspace is a privileged action, which appears in your workspace’s audit log."});break;case"joinClosedOrPrivateTeamAsMember":v=t()(c.FormattedMessage,{id:"confirmPrivilegedActionModal.joinPrivateOrClosedTeamConfirmation.description",description:"Description in confirmation modal that shows when an enterprise admin takes the privileged action of joining a closed or private team.",defaultMessage:"Joining a private or closed Teamspace is a privileged action, which appears in your workspace’s audit log."});break;default:(0,d.t1)(n.type)}return t()(u.Z,{innerStyle:w.innerModal,onDismiss:o,render:()=>t()(f.gq,{flexDirection:"column",justifyContent:"center",alignItems:"center"},void 0,l.Z.infoShield(w.shieldIcon),t()("div",{style:w.title},void 0,t()(c.FormattedMessage,{id:"confirmPrivilegedActionModal.title",defaultMessage:"This is a privileged action",description:"Title of the modal shown when taking a privileged enterprise-admin only action from the manage teamspaces table. For example, when an enterprise admin upgrades themselves to be an owner of a teamspace."})),t()("div",{style:w.description},void 0,v),t()(h.Z,{style:w.button,onClick:i},void 0,t()(c.FormattedMessage,{id:"confirmPrivilegedActionModal.continueAnyway",description:"Confirmation button on the modal shown when taking a privileged enterprise-admin only action from the manage teamspaces table. For example, when an enterprise admin upgrades themselves to be an owner of a teamspace.",defaultMessage:"Continue anyway"})),t()("div",{style:w.buttonGap}),t()(g.Z,{style:w.button,isGray:!0,onClick:o},void 0,t()(c.FormattedMessage,{id:"confirmPrivilegedActionModal.cancel",description:"Cancel button on the modal shown when taking a privileged enterprise-admin only action from the manage teamspaces table. For example, when an enterprise admin upgrades themselves to be an owner of a teamspace.",defaultMessage:"Cancel"}))),requireOnline:!0,modalStore:m.Z})}}}]);
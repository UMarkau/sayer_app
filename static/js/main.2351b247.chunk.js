(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n(268)},110:function(e,t,n){},172:function(e,t,n){},266:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(15),l=n.n(i),o=(n(110),n(43)),c=n(35),m=n(36),u=n(44),s=n(37),d=n(45),h=n(18),f=n(38),v=n.n(f),p=n(63),w=n.n(p),E=n(27),b=n.n(E),C=function(e){var t=e.comment;return r.a.createElement(b.a,{style:{wordWrap:"break-word"},align:"left",variant:"h6",component:"h3"},t)},g=n(103),O=n.n(g),y=n(39),j=n.n(y),k=n(64),S=n.n(k),I=n(100),N=n.n(I),A=n(101),T=n.n(A),D=n(102),J=n.n(D),W=n(40),x=n.n(W),z=n(41),B=n.n(z),F=n(104),M=n.n(F),$=n(42),q=n.n($),G=n(98),H=n.n(G),K=n(99),L=n.n(K),P=window.localStorage,Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=JSON.parse(P.getItem("data"));return n&&e&&t?Object(h.find)(n,function(n){return n[e]===t}):!n||e||t?void 0:n},R=function(e){return P.setItem("data",JSON.stringify(e))},U=(n(172),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,newComment:""},n.handleClick=function(){n.setState(function(e){return{open:!e.open,newComment:""}})},n.handleChangeNewComment=function(e){var t=e.target.value;n.setState({newComment:t})},n.handleAddNewComment=function(e){var t=n.state.newComment,a=n.props.refreshState,r=e.currentTarget.dataset.itemId;if(t){var i=Object(o.a)(Q());Object(h.find)(i,function(e){return e.id===r}).comments.push(t),R(i),n.setState({newComment:"",commentId:null},function(){return a()})}},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.open,n=e.newComment,a=this.props,i=a.item,l=a.onDeleteItem;return r.a.createElement(w.a,{className:"item-container"},r.a.createElement(b.a,{className:"title-container",align:"center",variant:"h5",component:"h3"},i.title),r.a.createElement(H.a,{style:{position:"absolute",top:0,right:0},"data-item-id":i.id,onClick:l,"aria-label":"Delete",color:"secondary"},r.a.createElement(L.a,null)),r.a.createElement(j.a,null,r.a.createElement(S.a,{button:!0,onClick:this.handleClick},r.a.createElement(N.a,{primary:"Comments"}),t?r.a.createElement(T.a,null):r.a.createElement(J.a,null)),r.a.createElement(O.a,{in:t,timeout:"auto",unmountOnExit:!0},r.a.createElement(j.a,null,Object(h.map)(i.comments,function(e){return r.a.createElement("div",{key:v()(),className:"comments-container"},r.a.createElement(C,{comment:e}),r.a.createElement(M.a,null))}),r.a.createElement(S.a,null,r.a.createElement(x.a,{autoFocus:!0,value:n,onChange:this.handleChangeNewComment,label:"New comment title..."}),r.a.createElement(B.a,{color:"primary",title:"Add new comment",size:"small","aria-label":"Add"},r.a.createElement(q.a,{"data-item-id":i.id,onClick:this.handleAddNewComment})))))))}}]),t}(r.a.Component)),V=(n(266),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],itemTitle:""},n.handleChangeItemTitle=function(e){var t=e.target.value;n.setState({itemTitle:t})},n.handleAddItem=function(){var e=n.state,t=e.data,a=e.itemTitle;if(a){var r=[].concat(Object(o.a)(t),[{id:v()(),title:a,comments:[]}]);n.setState({data:r,itemTitle:""},function(){return R(r)})}},n.handleDeleteItem=function(e){var t=n.state.data,a=e.currentTarget.dataset.itemId,r=Object(h.filter)(t,function(e){return e.id!==a});n.setState({data:r},function(){return R(r)})},n.refreshState=function(){return n.setState({data:Q()?Q():[]})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.refreshState()}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.itemTitle;return r.a.createElement("div",null,r.a.createElement("div",{className:"new-item-container"},r.a.createElement(x.a,{autoFocus:!0,value:a,onChange:this.handleChangeItemTitle,label:"New item title..."}),r.a.createElement(B.a,{color:"primary",title:"Add new item",size:"small","aria-label":"Add"},r.a.createElement(q.a,{onClick:this.handleAddItem}))),r.a.createElement("section",{className:"container-items"},Object(h.map)(n,function(t){return r.a.createElement(U,{refreshState:e.refreshState,key:t.id,item:t,onDeleteItem:e.handleDeleteItem})})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[105,2,1]]]);
//# sourceMappingURL=main.2351b247.chunk.js.map
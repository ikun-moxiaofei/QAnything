import{a as Te,u as G,p as me}from"./icon-loading-DmogqWCf.js";import{g as ie,u as uo}from"./index-BuoR8LFG.js";import{d as ee,A as c,B as h,C as t,J as f,G as s,L as ue,M as de,N as oe,r as I,c as d,R as k,z as B,E as L,W as S,H as $,F as X,D as be,X as x,a2 as W,a as ho,o as $e,b as po,O as Z,T as N,U as Q,K as A,a3 as _o,S as ye,Q as vo,a4 as fo}from"./index-BmCpu3aX.js";import{u as Be,a as go,b as mo,r as yo,C as bo}from"./utils-QvmHLhCR.js";import{_ as ko,C as Co}from"./HighLightMarkDown.vue_vue_type_style_index_0_lang-CoQFcd4t.js";import{u as wo,b as So,_ as Do,a as Ao}from"./useChatSource-Ct8ZfR7q.js";import{u as Io,a as qo,b as Oe,D as Lo,f as xo,h as To,_ as Oo,T as $o}from"./html2canvas.esm-tBO9NWBt.js";import{u as re,C as Bo,F as Eo,O as Fo}from"./OptionList-Crrjmppv.js";import{u as No}from"./useChatSetting-L4m0xpHA.js";import{B as Qo}from"./RightOutlined-vt2WRkOT.js";import"./slide-CMPzkUn6.js";import"./collapseMotion-ftRCz4Z8.js";import"./index-GBhCQPyN.js";import"./index-BNxGScwJ.js";import"./injectionKey-DGYNie3Z.js";const Ro="/qanything/assets/icon-file-Bxz0aRpP.png",Uo=v=>(ue("data-v-ec2d7664"),v=v(),de(),v),Ho={class:"upload-box"},Mo=Uo(()=>t("img",{class:"icon-file",src:Ro,alt:"图标"},null,-1)),Po={class:"title"},jo={class:"desc-content"},zo={class:"desc"},Vo={class:"desc"},Ko=ee({__name:"UploadDom",props:{acceptList:{require:!0,type:Array,default:()=>[]}},emits:["update"],setup(v,{emit:u}){const p=ie().home,g=u,C=()=>{g("update")};return(l,y)=>(c(),h("div",Ho,[t("div",{class:"tips",onClick:C},[Mo,t("p",Po,f(s(p).startDec),1),t("div",jo,[t("p",zo,f(s(p).updesc2),1),t("p",Vo,f(s(p).require1),1)])])]))}}),Yo=oe(Ko,[["__scopeId","data-v-ec2d7664"]]),Jo=v=>(ue("data-v-0587b9b1"),v=v(),de(),v),Xo={class:"default"},Wo={class:"box"},Zo={class:"title"},Go=Jo(()=>t("span",null," ",-1)),es={class:"color"},os={class:"desc"},ss=ee({__name:"Defaultpage",setup(v){const u=ie().home,{setFileList:p}=Te(),{setModalVisible:g}=Te(),{setCurrentId:C,getList:l,setCurrentKbName:y}=G(),U=[".doc",".docx",".ppt",".pptx",".xls",".xlsx",".pdf",".md",".jpg",".jpeg",".png",".bmp",".txt",".eml"],H=I(""),M=async()=>{console.log("updata");try{const i=await Be.createKb({kb_name:u.defaultName});+i.code==200&&(H.value=i.data.kb_id,C(i.data.kb_id),y(i.kb_name),g(!0),l())}catch(i){p([]),k.error(i.msg)}};return(i,se)=>(c(),h("div",Xo,[t("div",Wo,[t("p",Zo,[t("span",null,f(s(u).homeTitle1),1),Go,t("span",es,f(s(u).homeTitle2),1)]),t("p",os,f(s(u).defaultDec),1),d(Yo,{"accept-list":U,onUpdate:M})])]))}}),ts=oe(ss,[["__scopeId","data-v-0587b9b1"]]),as="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEgSURBVFiF7ZaxDcJADEVt0lAyQkaAKzIHI0BxkmeKCxiFAaKDDRAdJQvkQpNIEeQu9gVoyK8SXZz/ZPssA8ya9e/KYofW2nVRFMuqqh4pP5fEL0IHRJQj4tl7f7XW7hLMd734tRqgrutV94yIBw1Ea37o3rMsC2YgWALn3N0Yc0PEbQuxNcbcnHMXjXnTNPuyLE9qgBbiooEYMmfmY8wjCqCBSDEXAUggUs0BAFDyUachoxYoyVwNMATRl9YcQFiCvl7LMcUcIDIHfiV1BkIlkM6Jt7gp5p9oQnEGQldNO6ySAMbu+RSIUQDpkEmFGNsHVBMuBSLYhESUe++vUvMR8A0zD0KI9gFtZzPzsbshAPF9ICoiymPbzLfjZ836Dz0BusANDR+zFvgAAAAASUVORK5CYII=",ns=v=>(ue("data-v-52b8d98c"),v=v(),de(),v),ls={class:"history-chat"},cs={class:"history-chat-content"},rs={class:"list"},is=ns(()=>t("div",{class:"line"},null,-1)),us=["onClick"],ds=["onClick"],hs=ee({__name:"HistoryChat",props:{observer:{type:Object,required:!0},observeDom:{type:Object,default:null},qaObserver:{type:Object,required:!0},qaObserveDom:{type:Object,default:null},showLoading:{type:Boolean,require:!0}},emits:["scrollBottom","setObserveDom","setQaObserverDom","clearHistory"],setup(v,{emit:u}){const p=v,{chatList:g,chatId:C,QA_List:l,qaPageId:y,pageId:U,historyList:H}=B(re()),{deleteHistoryList:M,getChatById:i}=re(),{setSelectList:se}=G(),q=u;function he(w){l.value.push({question:w,type:"user"})}function P(w,D,r,z,b){l.value.push({answer:D,question:w,type:"ai",qaId:z,copied:!1,like:!1,unlike:!1,source:b||[],showTools:!0,picList:r})}async function pe(w){if(!p.showLoading){C.value=w.historyId,l.value=[],y.value=1,se([...w.kbIds]),q("clearHistory");try{const D=i(C.value);p.qaObserveDom!==null&&(p.qaObserver.unobserve(p.qaObserveDom),q("setQaObserverDom",null)),D.list.forEach(r=>{r.type==="user"?he(r.question):r.type==="ai"&&P(r.question,r.answer,r.picList,r.qaId,r.source)}),q("scrollBottom"),D.list.length>=50&&await W(()=>{const r=document.getElementsByClassName("chat-li");r.length&&(p.qaObserver.observe(r[0]),q("setQaObserverDom",r[0]))})}catch(D){k.error(D.msg||"获取问答历史失败")}}}function j(){if(!p.showLoading){if(C.value===null){k.info("已切换最新对话");return}C.value=null,l.value=[],y.value=1,U.value=1,q("clearHistory")}}async function _e(w,D){if(!p.showLoading)try{M(w.historyId),w.historyId===C.value&&j(),k.success("删除成功"),g.value.splice(D,1),await W(()=>{te()})}catch(r){k.error(r.msg||"删除失败")}}function te(){if(p.qaObserveDom!==null){p.qaObserver.unobserve(p.qaObserveDom),q("setQaObserverDom",null);const w=document.getElementsByClassName("chat-li");w.length&&(p.qaObserver.observe(w[0]),q("setQaObserverDom",w[0]))}}return(w,D)=>(c(),h("div",ls,[t("div",cs,[t("div",rs,[t("div",{class:L(["new-chat",[v.showLoading?"disabled":"",s(C)===null?"new-active":""]]),onClick:j},[d(S,{name:"new-chat"}),$(" "+f(s(ie)().home.newConversation),1)],2),(c(!0),h(X,null,be(s(H),(r,z)=>(c(),h("div",{key:r.historyId,class:L(["chat-item",s(C)===r.historyId?"item-active":"",v.showLoading?"disabled":""])},[is,t("span",{onClick:b=>pe(r)},f(r.title),9,us),s(C)===r.historyId?(c(),h("img",{key:0,src:as,class:"close-icon",alt:"close",onClick:b=>_e(r,z)},null,8,ds)):x("",!0)],2))),128))])])]))}}),ps=oe(hs,[["__scopeId","data-v-52b8d98c"]]),Ee=v=>(ue("data-v-d27eb64e"),v=v(),de(),v),_s={class:"container showSider"},vs={class:"my-page"},fs={key:0,class:"user"},gs=Ee(()=>t("img",{class:"avatar",src:Ao,alt:"头像"},null,-1)),ms={class:"question-text"},ys={key:1,class:"ai"},bs=Ee(()=>t("img",{class:"avatar",src:Oo,alt:"头像"},null,-1)),ks={class:"ai-content"},Cs={class:"ai-right"},ws={key:1},Ss={key:0},Ds={key:1},As={key:0},Is={key:0},qs={key:1},Ls={key:0},xs={class:"source-list"},Ts={class:"control"},Os={class:"tips"},$s=["href"],Bs=["onClick"],Es={class:"source-content"},Fs=["innerHTML"],Ns={class:"score"},Qs={class:"tips"},Rs={key:3,class:"feed-back"},Us=["onClick"],Hs={class:"reload-text"},Ms={class:"tools"},Ps={key:0,class:"stop-btn"},js={class:"question-box"},zs={class:"question"},Vs={class:"send-box"},Ks={class:"send-action"},Ys=ee({__name:"Chat",setup(v){const u=ie().common,p=new $o(e=>{e&&(l.value[l.value.length-1].answer+=e||"",console.log(l.value))}),{selectList:g,knowledgeBaseList:C}=B(G()),{QA_List:l,chatId:y,pageId:U,qaPageId:H,historyList:M}=B(re()),{chatSettingFormActive:i}=B(No()),{copy:se}=Io(),{addHistoryList:q,updateHistoryList:he,addChatList:P,clearChatList:pe}=re(),{setChatSourceVisible:j,setSourceType:_e,setSourceUrl:te,setTextContent:w}=wo(),{language:D}=B(uo()),r=I(""),z=ho(()=>{const e=i.value.context;if(e===0)return[];const o=l.value.filter(_=>_.type==="ai");return(e===11?o:o.slice(-e)).map(_=>[_.question,_.answer])}),b=I(!1),E=I([]),ae=I(null),ne=I(null);let T;const Fe=I(null),ke=I(null),O=()=>{W(()=>{var e;(e=ke.value)==null||e.scrollIntoView({behavior:"smooth",block:"end"})})},Ce=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(console.log("entry.isIntersecting"),U.value++)})}),we=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(console.log("qa entry.isIntersecting"),H.value++)})});$e(()=>{console.log("------chatId",y.value),O()}),po(()=>{ae.value&&Ce.unobserve(ae.value),ne.value&&we.unobserve(ne.value)});const Ne=qo((e,o)=>{if(e.like=!e.like,e.unlike=!1,_czc.push(["_trackEvent","qanything","问答页面","点赞","",""]),e.like){o.target.parentNode.style.animation="shake ease-in .5s";const n=setTimeout(()=>{clearTimeout(n),o.target.parentNode.style.animation=""},600)}},800),Qe=e=>{e.unlike=!e.unlike,e.like=!1,_czc.push(["_trackEvent","qanything","问答页面","点踩","",""])},Re=e=>{se(e.answer).then(()=>{e.copied=!e.copied,k.success(u.copySuccess,1);const o=setTimeout(()=>{clearTimeout(o),e.copied=!e.copied},1e3)}).catch(()=>{k.error(u.copyFailed,1)})},Ue=e=>{l.value.push({question:e,type:"user"}),console.log("QALIST------",l.value),O()},Se=e=>{l.value.push({answer:"",question:e,onlySearch:i.value.capabilities.onlySearch,type:"ai",copied:!1,like:!1,unlike:!1,source:[],showTools:!1})},V=new bo,He=e=>{ae.value=e},Me=e=>{ne.value=e},De=(e,o,n)=>{try{he(e,o,n)}catch(_){k.error(_.msg||"更新对话失败")}};function Pe(){if(!g.value.length)return;const e=[];g.value.forEach(o=>{C.value.some(n=>n.kb_id===o)&&e.push(o)}),g.value=e,M.value.forEach(o=>{y.value!==null&&o.historyId===y.value&&o.kbIds.join("")!==g.value.join("")&&De(o.title,o.historyId,g.value)})}const je=()=>{T&&T.abort(),p.done(),b.value=!1,l.value[l.value.length-1].showTools=!0},ze=e=>{try{if(console.log("chat-title=",e),y.value!==null)return;e.length>100&&(e=e.substring(0,100)),y.value=q(e),De(e,y.value,g.value)}catch(o){k.error(o.msg||"创建对话失败")}},ve=()=>{if(!r.value.trim().length)return;if(b.value){k.warn("正在聊天中...请等待结束");return}if(!so()){k.error("模型设置错误，请先检查模型配置");return}if(Pe(),g.value.length)k.info({content:u.type==="zh"?`已选择 ${g.value.length} 个知识库进行问答`:` ${g.value.length} knowledge base has been selected`,icon:" "});else return k.warning(u.chooseError);const e=r.value;ze(e),r.value="",Ue(e),P(y.value,l.value),b.value=!0,T=new AbortController,xo(mo+"/local_doc_qa/local_doc_chat",{method:"POST",headers:{"Content-Type":"application/json",Accept:["text/event-stream","application/json"]},openWhenHidden:!0,body:JSON.stringify({user_id:go,kb_ids:g.value,history:z.value,question:e,streaming:i.value.capabilities.onlySearch===!1,networking:i.value.capabilities.networkSearch,product_source:"saas",rerank:i.value.capabilities.rerank,only_need_search_results:i.value.capabilities.onlySearch,hybrid_search:i.value.capabilities.mixedSearch,max_token:i.value.maxToken,api_base:i.value.apiBase,api_key:i.value.apiKey,model:i.value.apiModelName,api_context_length:i.value.apiContextLength,chunk_size:i.value.chunkSize,top_p:i.value.top_P,temperature:i.value.temperature}),signal:T.signal,onopen(o){console.log("open",o),V.addChatSetting(i.value),o.ok&&o.headers.get("content-type")==="text/event-stream"?(Se(e),p.start()):o.headers.get("content-type")==="application/json"&&Se(e)},onmessage(o){var _;console.log("message",o);const n=JSON.parse(o.data);if((n==null?void 0:n.code)==200&&(n!=null&&n.response)&&n.msg==="success")p.add(n==null?void 0:n.response),O();else{const Y=n.time_record.time_usage;delete Y.retriever_search_by_milvus,V.addTime(n.time_record.time_usage),V.addToken(n.time_record.token_usage),V.addDate(Date.now())}(_=n==null?void 0:n.source_documents)!=null&&_.length&&(l.value[l.value.length-1].source=n==null?void 0:n.source_documents)},onclose(o){console.log("close",o),console.log(o),p.done(),T.abort(),b.value=!1,l.value[l.value.length-1].showTools=!0,l.value.at(-1).itemInfo=V.getChatInfo(),P(y.value,l.value),W(()=>{O()}),console.log(l.value)},onerror(o){throw console.log("error",o),p==null||p.done(),T==null||T.abort(),b.value=!1,l.value[l.value.length-1].showTools=!0,k.error(o.msg||"出错了"),P(y.value,l.value),W(()=>{O()}),o}})},Ve=e=>{console.log("reAnswer"),r.value=e.question,ve()},Ke=(e,o)=>{e.source[o].showDetailDataSource=!e.source[o].showDetailDataSource},Ye=(e,o)=>{e.source[o].showDetailDataSource=!1},Je=e=>{E.value.push(e)},Xe=e=>{E.value=E.value.filter(o=>o!==e)},{showModal:fe}=B(Oe()),ge=I(!1),le=I(""),K=I(""),We=()=>{b.value||(K.value="download",fe.value=!0,le.value=u.saveTip)},Ze=()=>{b.value||(K.value="delete",fe.value=!0,le.value=u.clearTip)},Ge=async()=>{if(ge.value=!0,K.value==="download"){console.log("download");try{const e=document.getElementById("chat-ul"),n=(await To(e,{useCORS:!0})).toDataURL("image/png"),_=document.createElement("a");_.style.display="none",_.href=n,_.setAttribute("download","chat-shot.png"),typeof _.download>"u"&&_.setAttribute("target","_blank"),document.body.appendChild(_),_.click(),document.body.removeChild(_),window.URL.revokeObjectURL(n),k.success("下载成功"),Promise.resolve()}catch(e){console.log(e),k.error(e.message||e.msg||"出错了")}}else K.value==="delete"&&(console.log("delete"),pe(y.value),y.value=null,l.value=[]);K.value="",le.value="",ge.value=!1,fe.value=!1},{showSettingModal:eo}=B(Oe()),oo=e=>{eo.value=e},so=()=>!!(i.value.apiKey&&i.value.apiBase&&i.value.apiModelName);let Ae=["pdf","docx","xlsx","txt","jpg","png","jpeg"];const Ie=e=>{if(!e)return!1;const o=e.split(".");if(o.length){const n=o.pop();return!!Ae.includes(n)}else return!1},to=e=>{console.log("handleChatSource",e),Ie(e.file_name)&&ao(e)};async function ao(e){try{te(null);const o=await yo(await Be.getFile({file_id:e.file_id}));console.log("queryFile",o);const n=e.file_name.split(".").pop(),_=lo(n);if(console.log("b64Type",_),_e(n),te(`data:${_};base64,${o.base64_content}`),n==="txt"){const Y=atob(o.base64_content),R=decodeURIComponent(escape(Y));console.log("decodedTxt",R),w(R),j(!0)}else j(!0)}catch(o){k.error(o.msg||"获取文件失败")}}let no=["application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","text/plain","image/jpeg","image/png","image/jpeg"];function lo(e){const o=Ae.indexOf(e);return no[o]}function co(){console.log("清空")}return O(),(e,o)=>{const n=Co,_=Qo,Y=So,R=Do,ro=Eo,io=fo;return c(),h(X,null,[d(ps,{observer:s(Ce),"observe-dom":s(ae),"qa-observe-dom":s(ne),"qa-observer":s(we),"show-loading":s(b),onScrollBottom:O,onSetObserveDom:He,onSetQaObserverDom:Me,onClearHistory:co},null,8,["observer","observe-dom","qa-observe-dom","qa-observer","show-loading"]),t("div",_s,[t("div",vs,[t("div",{id:"chat",ref_key:"chatContainer",ref:Fe,class:"chat showSider"},[t("ul",{id:"chat-ul",ref_key:"scrollDom",ref:ke},[(c(!0),h(X,null,be(s(l),(a,F)=>{var qe,Le,xe;return c(),h("li",{key:F},[a.type==="user"?(c(),h("div",fs,[gs,t("p",ms,f(a.question),1)])):(c(),h("div",ys,[bs,t("div",ks,[t("div",Cs,[a.onlySearch?a.onlySearch&&!a.source.length?(c(),h("p",{key:1,class:L(["question-text",[!a.source.length&&!((xe=a==null?void 0:a.picList)!=null&&xe.length)?"change-radius":"",a.showTools?"":"flashing"]])},[s(D)==="zh"?(c(),h("span",Ss,"未找到信息来源")):(c(),h("span",Ds,"Information source not found"))],2)):x("",!0):(c(),h("p",{key:0,class:L(["question-text",[!a.source.length&&!((qe=a==null?void 0:a.picList)!=null&&qe.length)?"change-radius":"",a.showTools?"":"flashing"]])},[a.answer?(c(),Z(ko,{key:0,content:a.answer},null,8,["content"])):(c(),h("span",ws,f(a.answer),1)),Object.keys(((Le=a==null?void 0:a.itemInfo)==null?void 0:Le.tokenInfo)||{}).length?(c(),Z(n,{key:2,"chat-item-info":a.itemInfo},null,8,["chat-item-info"])):x("",!0)],2)),a.source.length?(c(),h(X,{key:2},[t("div",{class:L(["source-total",s(E).includes(F)?"":"source-total-last"])},[s(D)==="zh"?(c(),h("span",As,[a.onlySearch?(c(),h("span",Is,"检索完成，")):x("",!0),$(" 找到了"+f(a.source.length)+"个信息来源： ",1)])):(c(),h("span",qs,[a.onlySearch?(c(),h("span",Ls,"Search completed，")):x("",!0),$(" Found "+f(a.source.length)+" source of information ",1)])),N(d(S,{name:"down",onClick:m=>Je(F)},null,8,["onClick"]),[[Q,!s(E).includes(F)]]),N(d(S,{name:"up",onClick:m=>Xe(F)},null,8,["onClick"]),[[Q,s(E).includes(F)]])],2),N(t("div",xs,[(c(!0),h(X,null,be(a.source,(m,ce)=>(c(),h("div",{key:ce,class:"data-source"},[N(t("p",Ts,[t("span",Os,f(s(u).dataSource)+f(ce+1)+":",1),m.file_id.startsWith("http")?(c(),h("a",{key:0,href:m.file_id,target:"_blank"},f(m.file_name),9,$s)):(c(),h("span",{key:1,class:L(["file",Ie(m.file_name)?"filename-active":""]),onClick:J=>to(m)},f(m.file_name),11,Bs)),N(d(S,{name:"iconup",onClick:J=>Ye(a,ce)},null,8,["onClick"]),[[Q,m.showDetailDataSource]]),N(d(S,{name:"icondown",onClick:J=>Ke(a,ce)},null,8,["onClick"]),[[Q,!m.showDetailDataSource]])],512),[[Q,m.file_name]]),d(_o,{name:"sourceitem"},{default:A(()=>{var J;return[N(t("div",Es,[t("p",{innerHTML:(J=m.content)==null?void 0:J.replaceAll(`
`,"<br/>")},null,8,Fs),t("p",Ns,[t("span",Qs,f(s(u).correlation),1),$(f(m.score),1)])],512),[[Q,m.showDetailDataSource]])]}),_:2},1024)]))),128))],512),[[Q,s(E).includes(F)]])],64)):x("",!0),a.showTools?(c(),h("div",Rs,[t("div",{class:"reload-box",onClick:m=>Ve(a)},[d(S,{name:"reload"}),t("span",Hs,f(s(u).regenerate),1)],8,Us),t("div",Ms,[d(S,{style:ye({color:a.copied?"#4D71FF":""}),name:"copy",onClick:m=>Re(a)},null,8,["style","onClick"]),d(S,{style:ye({color:a.like?"#4D71FF":""}),name:"like",onClick:m=>s(Ne)(a,m)},null,8,["style","onClick"]),d(S,{style:ye({color:a.unlike?"#4D71FF":""}),name:"unlike",onClick:m=>Qe(a)},null,8,["style","onClick"])])])):x("",!0)])])]))])}),128))],512)],512),s(b)?(c(),h("div",Ps,[d(_,{onClick:je},{icon:A(()=>[d(S,{name:"stop",class:L(s(b)?"loading":"")},null,8,["class"])]),default:A(()=>[$(" "+f(s(u).stop),1)]),_:1})])):x("",!0),t("div",js,[t("div",zs,[t("div",Vs,[d(Y,{value:s(r),"onUpdate:value":o[0]||(o[0]=a=>vo(r)?r.value=a:null),class:"send-textarea","max-length":"200",bordered:!1,placeholder:s(u).problemPlaceholder,"auto-size":{minRows:4,maxRows:8},onPressEnter:ve},null,8,["value","placeholder"]),t("div",Ks,[d(R,{placement:"topLeft"},{content:A(()=>[$(f(s(u).chatToPic),1)]),default:A(()=>[t("span",{class:L(["download",s(b)?"isPreventClick":""]),onClick:We},[d(S,{name:"chat-download"})],2)]),_:1}),d(R,null,{content:A(()=>[$(f(s(u).clearChat),1)]),default:A(()=>[t("span",{class:L(["delete",s(b)?"isPreventClick":""]),onClick:Ze},[d(S,{name:"chat-delete"})],2)]),_:1}),d(R,null,{content:A(()=>[$(f(s(u).modelSettingTitle),1)]),default:A(()=>[t("span",{class:"setting",onClick:o[1]||(o[1]=a=>oo(!0))},[d(S,{name:"chat-setting"})])]),_:1}),d(_,{type:"primary",disabled:s(b),shape:"circle",onClick:ve},{default:A(()=>[d(S,{name:"sendplane"})]),_:1},8,["disabled"])])])])])])]),d(Bo),d(Lo,{content:s(le),"confirm-loading":s(ge),onOk:Ge},null,8,["content","confirm-loading"]),d(io,{theme:{token:{colorPrimary:"#5a47e5"}}},{default:A(()=>[d(ro,{class:"scroll-btn",type:"primary",onClick:O},{icon:A(()=>[d(S,{name:"scroll"})]),_:1})]),_:1})],64)}}}),Js=oe(Ys,[["__scopeId","data-v-d27eb64e"]]),Xs={class:"page"},Ws={class:"container"},Zs=ee({__name:"Home",setup(v){const{showDefault:u}=B(G()),{setDefault:p,getList:g}=G(),C=l=>{p(l),g()};return $e(()=>{console.log(u.value),g()}),(l,y)=>(c(),h("div",Xs,[t("div",Ws,[s(u)===s(me).default?(c(),Z(ts,{key:0,onChange:C})):s(u)===s(me).normal?(c(),Z(Js,{key:1})):s(u)===s(me).optionlist?(c(),Z(Fo,{key:2})):x("",!0)])]))}}),_t=oe(Zs,[["__scopeId","data-v-994038ad"]]);export{_t as default};
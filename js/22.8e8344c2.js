"use strict";(self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[]).push([[22],{3022:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var s=n(3396);const c={class:"section animate"},i={class:"general d-flex jc-center"},a={class:"container d-flex m-col first-screen m-jc-center fd-row ai-end jc-center mp-tb-3"},o={class:"d-flex fd-column ai-center jc-center p-1 p-relative"},r={class:"container d-flex fd-column p-1 pm-0"},l={class:"d-flex fd-column jc-space ai-center z-index-1"},d=(0,s._)("section",{class:"d-flex fd-column ai-center jc-center p-1 p-relative"},[(0,s._)("div",{class:"d-flex fd-column p-1 ai-center z-index-1"})],-1);function h(e,t,n,h,m,p){const I=(0,s.up)("ArchiveItems"),u=(0,s.up)("StatisticsForm");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",i,[(0,s._)("div",a,[(0,s.Wm)(I)])]),(0,s._)("section",o,[(0,s._)("div",r,[(0,s._)("div",l,[(0,s.Wm)(u)])])]),d])}var m=n(4870),p=n(7139);const I=e=>((0,s.dD)("data-v-23d3c4e5"),e=e(),(0,s.Cn)(),e),u={class:"catalog"},_=I((()=>(0,s._)("h1",{class:"m-b-2"},"Сделки компании",-1))),f={class:"ads-list"},k=["src"],g={class:"ad-details"};function N(e,t,n,c,i,a){return(0,s.wg)(),(0,s.iD)("div",u,[_,(0,s._)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.deals,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id,class:"ad-item"},[(0,s._)("img",{src:e.photos?e.photos[0]:"https://via.placeholder.com/150",alt:"Фото сделки",class:"ad-photo"},null,8,k),(0,s._)("div",g,[(0,s._)("h3",null,(0,p.zw)(e.name),1),(0,s._)("p",null,"Бюджет: "+(0,p.zw)(e.price)+" ₽",1)])])))),128))])])}const j={client_id:"a5a49978-60b4-45e5-9fac-8af6887d9602",client_secret:"1pWapg0P0mww8j08HCOo4nMpsgg69WGFB36UppRUY8J5lsCAveSFS0UTxatFTt8X",grant_type:"authorization_code",code:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY1ZjJjY2FjMTgzNWIxYjk1NzA3N2VjM2ZlNDhiOWI0YjZhMmVmZTZiYzllMjViNDBiODg4MmI5MDAwNmVmMjFmZjViNmY2YzllY2RiZGYxIn0.eyJhdWQiOiJhNWE0OTk3OC02MGI0LTQ1ZTUtOWZhYy04YWY2ODg3ZDk2MDIiLCJqdGkiOiI2NWYyY2NhYzE4MzViMWI5NTcwNzdlYzNmZTQ4YjliNGI2YTJlZmU2YmM5ZTI1YjQwYjg4ODJiOTAwMDZlZjIxZmY1YjZmNmM5ZWNkYmRmMSIsImlhdCI6MTcyNTg4NjI1MiwibmJmIjoxNzI1ODg2MjUyLCJleHAiOjE3MjYwMTI4MDAsInN1YiI6IjExNDkyNDU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM5ODk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNzkxOGUxNGItOTgwNS00MTZiLTkwMGUtY2I0YTZhNGE3ZThlIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.U6FdcvJlQuSkgkaKgswpMOEPSLxhs2CYqyeP7zIOqWTtH9mztt40pp1IJ6WVEm-GiyRg_WbWjtH8FiBda3R4aq7TR3upPresJk3diWE-eOULtL1MR-Kt38tSr_aEzEIJgZHZMU2G6LIZhn165mSB7l85boJtjWyTZ946M42Y-YisuhmZRVifl90ZfzPTTvKfyTHx4ES1Q_pNK-IyRx5j0EdAN0lc7iof72sN6QXoDSZtKMzQyUBXN3WQB4vASLh0bS8jNyC6NaKqgjNCeArDn3t6J49UKmNM15zf7NGqFwmUUnER39SiEMduI3oXULFdOGqyyqW-teowcye0E01eLg",redirect_uri:"https://digitalbankger.github.io/amocrm_integrations/#/",refresh_token:"",async fetchAccessToken(){const e=await fetch("https://cors-anywhere.herokuapp.com/https://bkmzenbkmzen.amocrm.ru/oauth2/access_token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:this.client_id,client_secret:this.client_secret,grant_type:"refresh_token",redirect_url:"https://digitalbankger.github.io/amocrm_integrations/#/",refresh_token:this.code})});if(!e.ok)throw new Error("Failed to get access token");const t=await e.json();return this.tokenInfo={access_token:t.access_token,refresh_token:t.refresh_token,expires_in:t.expires_in,token_type:t.token_type},localStorage.setItem("access_token",t.access_token),localStorage.setItem("refresh_token",t.refresh_token),t.access_token},getStoredAccessToken(){return localStorage.getItem("access_token")},async ensureTokenIsValid(){const e=this.getStoredAccessToken();return e||await this.fetchAccessToken()}};var y=j;const v="https://cors-anywhere.herokuapp.com/https://bkmzenbkmzen.amocrm.ru/api";async function w(e,t={}){const n=await y.ensureTokenIsValid();t.headers={...t.headers,Authorization:`Bearer ${n}`,"Content-Type":"application/json"};const s=await fetch(`${v}${e}`,t);if(!s.ok)throw new Error(`Ошибка: ${s.statusText}`);const c=s.headers.get("Content-Type");return c&&c.includes("application/json")?await s.json():await s.text()}function b(){return w("/v4/leads").then((e=>(console.log("Ответ от API (сделки):",e),e))).catch((e=>{console.error("Ошибка при получении сделок:",e)}))}function T(e){return w(`/v4/leads/${e}`)}function Y(){return{fetchDeals:b,fetchDealById:T}}var M={setup(){const e=(0,m.iH)([]),{fetchDeals:t}=Y(),n=async()=>{try{console.log("Отправляю запрос на получение сделок...");const n=await t();console.log("Ответ от API:",n),e.value=n.data}catch(n){console.error("Ошибка загрузки сделок:",n)}};return(0,s.bv)(n),{deals:e}}},Z=n(89);const S=(0,Z.Z)(M,[["render",N],["__scopeId","data-v-23d3c4e5"]]);var x=S,z={components:{ArchiveItems:x},setup(){const e=(0,m.iH)(!1),t=(0,m.iH)(""),n=n=>{e.value=!0,t.value=n},s=()=>{e.value=!1,t.value=""};return{isLightboxOpen:e,lightboxImageSrc:t,openLightbox:n,closeLightbox:s}}};const W=(0,Z.Z)(z,[["render",h]]);var O=W}}]);
//# sourceMappingURL=22.8e8344c2.js.map
import{j as y,r as p,R as b,a as B}from"./vendor.9e60b2bb.js";const L=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};L();const O=s=>[[...s[0]],[...s[1]],[...s[2]]],g=[[0,0,0],[0,0,0],[0,0,0]],w=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]]],c=y.exports.jsx,N=y.exports.jsxs;function R(){var h;const[s,i]=p.exports.useState([]),[d,u]=p.exports.useState(!1),[e,t]=p.exports.useState(1),a=r=>r===0?" ":r===1?"X":"O";p.exports.useEffect(()=>{i(r=>[...r,g])},[]);const v=()=>{i([g]),t(1),u(!1)},x=r=>{for(let o of w){const n=o.map(([f,m])=>r[f][m]).join("");if(n==="111"||n==="222")return n[0]}return r.every(o=>o.every(n=>n))?!1:null},j=(r,l)=>{const o=s.slice(-1)[0];if(d||o[l][r]!==0)return;const n=O(o);n[l][r]=e,i(m=>[...m,n]);const f=x(n);f&&(alert(`Ganador: ${a(e)}`),u(!0)),f===!1&&alert("Empate"),t(e===1?2:1)};return N("section",{className:"board-container",children:[c("div",{className:`board ${d?"won":""}`,children:(h=s.slice(-1)[0])==null?void 0:h.map((r,l)=>r.map((o,n)=>c("button",{onClick:()=>j(n,l),children:a(o)},`${n}-${l}`)))}),c("div",{children:c("button",{onClick:v,children:"Reiniciar juego"})})]})}function S(){return c(R,{})}b.render(c(B.StrictMode,{children:c(S,{})}),document.getElementById("root"));
import{j as p,r as f,R as b,a as w}from"./vendor.9e60b2bb.js";const B=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};B();const L=s=>[[...s[0]],[...s[1]],[...s[2]]],g=[[0,0,0],[0,0,0],[0,0,0]],O=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]]],a=p.exports.jsx,R=p.exports.jsxs,S=p.exports.Fragment;function k(){var m;const[s,i]=f.exports.useState([]),[d,u]=f.exports.useState(!1),[e,t]=f.exports.useState(1),l=r=>r===0?" ":r===1?"X":"O";f.exports.useEffect(()=>{i(r=>[...r,g])},[]);const x=()=>{i([g]),t(1),u(!1)},y=r=>{for(let c of O){const n=c.map(([o,h])=>r[o][h]).join("");if(n==="111"||n==="222")return n[0]}return null},j=(r,c)=>{const n=s.slice(-1)[0];if(d||n[c][r]!==0)return;const o=L(n);o[c][r]=e,i(v=>[...v,o]),y(o)&&(alert(`Ganador: ${l(e)}`),u(!0)),t(e===1?2:1)};return R(S,{children:[a("div",{className:`board ${d?"won":""}`,children:(m=s.slice(-1)[0])==null?void 0:m.map((r,c)=>r.map((n,o)=>a("button",{onClick:()=>j(o,c),children:l(n)},`${o}-${c}`)))}),a("div",{children:a("button",{onClick:x,children:"Reiniciar juego"})})]})}function M(){return a(k,{})}b.render(a(w.StrictMode,{children:a(M,{})}),document.getElementById("root"));
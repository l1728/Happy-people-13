(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();let s=document.querySelector(".burger-btn"),o=document.querySelector(".mobile-menu"),n=document.querySelector(".mobile-menu-backdrop"),d=document.querySelectorAll(".close-menu");s&&(s.addEventListener("click",function(){o.classList.toggle("active"),n.style.display=o.classList.contains("active")?"block":"none"}),d.forEach(function(c){c.addEventListener("click",function(){o.classList.toggle("active"),n.style.display="none"})}),n.addEventListener("click",function(){o.classList.remove("active"),n.style.display="none"}));
//# sourceMappingURL=commonHelpers.js.map
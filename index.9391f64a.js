!function(){var e=document.querySelector(".slider-line"),t=document.querySelectorAll(".line-item"),l=document.querySelector(".img-line"),n=(document.querySelector(".arch"),document.querySelector(".imgSlWhy")),r=document.querySelectorAll(".line-img"),o=document.querySelector(".slider-line-name"),c=document.querySelectorAll(".line-name"),i=document.querySelector(".btn-prev"),a=document.querySelector(".btn-next"),u=document.querySelectorAll(".dot"),y=document.querySelectorAll(".nav-tab-btn"),d=document.querySelector(".btnR"),s=0,v=t[1].getBoundingClientRect().width,f=0,m=n.getBoundingClientRect().width,h=0,g=0;console.log(m,"imgWhy"),console.log(v,"lineItemWhy");var S=function(){s<(u.length-1)*v?(s+=v,g++):(s=0,g=0),e.style.left=-s+"px",f<(u.length-1)*m?f+=m:f=0,l.style.left=-f+"px",h<115*(u.length-1)?h+=115:h=0,o.style.left=-h+"px",x(g)},x=function(e){var l=!0,n=!1,o=void 0;try{for(var i,a=u[Symbol.iterator]();!(l=(i=a.next()).done);l=!0){i.value.classList.remove("activeDot")}}catch(e){n=!0,o=e}finally{try{l||null==a.return||a.return()}finally{if(n)throw o}}u[e].classList.add("activeDot");var d=!0,s=!1,v=void 0;try{for(var f,m=y[Symbol.iterator]();!(d=(f=m.next()).done);d=!0){f.value.classList.remove("active")}}catch(e){s=!0,v=e}finally{try{d||null==m.return||m.return()}finally{if(s)throw v}}y[e].classList.add("active");var h=!0,g=!1,S=void 0;try{for(var x,L=t[Symbol.iterator]();!(h=(x=L.next()).done);h=!0){x.value.classList.remove("change")}}catch(e){g=!0,S=e}finally{try{h||null==L.return||L.return()}finally{if(g)throw S}}t[e].classList.add("change");var q=!0,b=!1,p=void 0;try{for(var w,A=c[Symbol.iterator]();!(q=(w=A.next()).done);q=!0){w.value.classList.remove("change")}}catch(e){b=!0,p=e}finally{try{q||null==A.return||A.return()}finally{if(b)throw p}}c[e].classList.add("change");var E=!0,k=!1,R=void 0;try{for(var W,B=r[Symbol.iterator]();!(E=(W=B.next()).done);E=!0){W.value.classList.remove("change")}}catch(e){k=!0,R=e}finally{try{E||null==B.return||B.return()}finally{if(k)throw R}}r[e].classList.add("change")};a.addEventListener("click",S),d.addEventListener("click",S),i.addEventListener("click",(function(){s>0?(s-=v,g--):(s=(u.length-1)*v,g=u.length-1),e.style.left=-s+"px",f>0?f-=m:f=(u.length-1)*m,l.style.left=-f+"px",h>0?h-=115:h=115*(u.length-1),o.style.left=-h+"px",x(g)})),y.forEach((function(t,n){t.addEventListener("click",(function(){s=v*n,h=115*n,f=m*n,e.style.left=-s+"px",o.style.left=-h+"px",l.style.left=-f+"px",x(g=n)}))}))}();
//# sourceMappingURL=index.9391f64a.js.map

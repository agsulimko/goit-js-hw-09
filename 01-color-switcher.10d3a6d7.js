const t=document.querySelector("body");console.log(t),t.classList.add("body-color");const e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(a=>{setInterval((()=>{console.log("Hallo"),t.style.backgroundColor=`rgb(${Math.round(255*Math.random(0,1))},${Math.round(255*Math.random(0,1))},${Math.round(255*Math.random(0,1))})`}),1e3);e.setAttribute("disabled",""),o.removeAttribute("disabled")})),o.addEventListener("click",(a=>{console.log("Buy"),t.style.backgroundColor="#fafafa",o.setAttribute("disabled",""),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.10d3a6d7.js.map

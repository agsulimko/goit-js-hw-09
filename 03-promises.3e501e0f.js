!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),i={position:"center-bottom",distance:"15px",borderRadius:"15px",timeout:1e4,clickToClose:!0,cssAnimationStyle:"from-right"};document.querySelector("body").style.backgroundColor="#f7eff4";document.querySelector(".form");var u=document.querySelector('button[type="submit"]'),c=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');function d(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}c.addEventListener("input",(function(e){c.textContent=Number(e.currentTarget.value),console.dir(c.textContent)})),a.addEventListener("input",(function(e){a.textContent=Number(e.currentTarget.value),console.log(a.textContent)})),l.addEventListener("input",(function(e){l.textContent=Number(e.currentTarget.value),console.log(l.textContent)})),u.addEventListener("click",(function(e){if(e.preventDefault(),c.textContent<0||a.textContent<0||l.textContent<=0)return void r.Notify.failure("❌Please choose a value greater than  0",i);console.log(e.currentTarget);for(var t=Number(c.textContent),n=1;n<=l.textContent;n+=1)d(n,t).then((function(e){var t=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"),i)})).catch((function(e){var t=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"),i)})),t+=Number(a.textContent)}))}();
//# sourceMappingURL=03-promises.3e501e0f.js.map
var transitionSpeed$$module$Input_0=300;function createDiv$$module$Input_0(a){var b=document.createElement("div");b.classList=a;return b}var Modal$$module$Input_0=function(a){var b=this;a=void 0===a?!1:a;this.wrapper=createDiv$$module$Input_0("modal center");this.inner=createDiv$$module$Input_0("inner");a&&(this.appendHeader(a),this.wrapper.addEventListener("click",function(c){return b.close(c)}));this.wrapper.close=function(){return b.close()}};
Modal$$module$Input_0.prototype.append=function(a){var b;a=null!=(b=a.outerHTML)?b:a;this.inner.insertAdjacentHTML("beforeend",a)};
Modal$$module$Input_0.prototype.appendHeader=function(a){var b=createDiv$$module$Input_0("header center");b.appendChild(function(){var c=document.createElement("h1");c.innerText=a;return c}());b.appendChild(function(){var c=createDiv$$module$Input_0("close center");c.setAttribute("onclick","this.closest('.modal').close()");c.appendChild(createDiv$$module$Input_0("line"));c.appendChild(createDiv$$module$Input_0("line"));return c}());this.append(b)};
Modal$$module$Input_0.prototype.open=function(a){var b=this;(a=void 0===a?!1:a)&&this.append(a);this.wrapper.appendChild(this.inner);document.body.appendChild(this.wrapper);setTimeout(function(){return b.wrapper.classList.add("active")},0)};Modal$$module$Input_0.prototype.close=function(a){var b=this;if(a&&a.target!=this.wrapper)return!1;this.wrapper.classList.remove("active");setTimeout(function(){return b.wrapper.remove()},transitionSpeed$$module$Input_0)};var module$Input_0={};
module$Input_0.Modal=Modal$$module$Input_0;
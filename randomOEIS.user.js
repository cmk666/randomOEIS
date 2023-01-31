// ==UserScript==
// @name         Random OEIS
// @version      0.1
// @description  Random OEIS
// @author       cmk666
// @match        https://oeis.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=oeis.org
// @grant        none
// ==/UserScript==

(() => {
	var b = document.createElement('div');
	var l = document.getElementsByTagName('font');
	var t = l[l.length - 1].innerText;
	var n = parseInt(t.substr(9 + t.indexOf('Contains ')));
	b.style.position = 'fixed';
	b.style.left = 'calc(100% - 150px)';
	b.style.top = 'calc(100% - 90px)';
	b.style.width = '65px';
	b.style.height = '25px';
	b.style.border = '1px solid black';
	b.style.borderRadius = '5px';
	b.style.fontSize = '17px';
	b.style.textAlign = 'center';
	b.style.backgroundColor = 'white';
	b.style.cursor = 'pointer';
	b.onclick = () => location.href = 'A' + parseInt(Math.random() * n + 1);
	b.innerText = "随机跳";
	document.body.appendChild(b);
})();
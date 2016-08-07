//<![CDATA[
function showhidechat() {
  var o = document.getElementById("chat");
  "0px" !== o.style.bottom ? o.style.bottom = "0px" : o.style.bottom = "-400px";
  var o = document.getElementById("maxi-chatfb");
  "none" !== o.style.display ? o.style.display = "none" : o.style.display = "block";
  var o = document.getElementById("mini-chatfb");
  "block" !== o.style.display ? o.style.display = "block" : o.style.display = "none";
};
function hidechatfb() {
  var e = document.getElementById("chat").style.display = "none";
};
function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;
//]]>
http://bloggereklentileri.blogspot.com.tr/
http://cizgifilmhikayeleri.blogspot.com.tr/
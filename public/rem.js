function resetRootFZ (){
    var oHtml = document.querySelector('html');
    var w = oHtml.getBoundingClientRect().width
    oHtml.style.fontSize = w/10+'px'
}
resetRootFZ();
window.addEventListener('resize',function(){
    resetRootFZ();
})
//dpr = 屏幕像素/物理像素
//二倍频 ：dpr = 2
//三倍频 ：dpr = 3

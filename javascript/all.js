//获取topnav和html元素
var cat = document.querySelector("#cat");
var topnav = document.getElementById("topnav");
var html = document.getElementById("html");
//当浏览器滚动条滚动时发生事件
window.onscroll = function () {
    topnav.style.top = html.scrollTop; //跟随滚动条移动
    //滚动高度大于等于270像素的时候显示topnav，小于270隐藏topnav
    // console.log(html.scrollTop+"px");
    if (html.scrollTop >= 40) {
        topnav.style.background = "linear-gradient(to right, #ffccff 0%, #ff99ff 20%, #ff66cc 40%, #ff33cc 60%, #ff00cc 100%)";
        cat.style.display = "block"
    } else {
        topnav.style.background = "none";
        cat.style.display = "none"
    }
    var footerLine = document.querySelector("#footerLine");
        var aaa = Number(html.scrollTop / html.scrollHeight) * 130;
        aaa += "%";
        footerLine.style.width = aaa;
}


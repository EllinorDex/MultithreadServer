// RSDN.Forum.js
// requires jQuery.js, rsdn.js
// Message.aspx
function searchMsdn() {
    return false;
}
function OpenWindow(url, name, size) {
    var opts = "menubar=no,status=no,toolbar=no,resizable=yes,scrollbars=yes";
    if (size) {
        opts = opts + ",height=" + size.height;
        opts = opts + ",width=" + size.width;
        if ('object' == typeof (window.screen)) {
            var top_1 = (window.screen.height - size.height) / 2;
            var left = (window.screen.width - size.width) / 2;
            opts = "left=" + left + ",top=" + top_1 + "," + opts;
        }
    }
    window.windows[name] = window.open(url, name, opts);
    return window.windows[name];
}
// Message.aspx
function RateMsg(url) {
    OpenWindow(url, "RateWindow", { width: 350, height: 170 });
    return false;
}
function SubMsg(url) {
    OpenWindow(url, "SubWindow", { width: 400, height: 180 });
    return false;
}
function AddFav(url) {
    OpenWindow(url, "FavWindow", { width: 380, height: 130 });
    return false;
}
function FileUpload(url) {
    OpenWindow(url, "UploadWindow", { width: 450, height: 300 });
    return false;
}
function NewMsg(url) {
    if ($.browser.msie) {
        window.open(url, "_blank", "menubar=no,status=no,toolbar=no,resizable=yes,scrollbars=yes");
        return false;
    }
    else
        return true;
}
window.windows = {};
window.onunload = CloseMsgWindow;
// Message.aspx
function CloseMsgWindow() {
    for (var win in window.windows) {
        if (window.windows[win] != null)
            window.windows[win].close();
    }
}
// MsgList.aspx
function toggleExpand(_this) {
    var tab = _this.parentNode;
    var hid = tab.tBodies[1].style.display === 'none';
    var clsName = '';
    if (hid) {
        clsName = 'hidden_Minus';
        tab.tBodies[1].style.display = '';
    }
    else {
        clsName = 'hidden_Plus';
        tab.tBodies[1].style.display = 'none';
    }
    var td = tab.tBodies[0].rows[0].cells[0];
    td.className = clsName;
}
function getWndPosition(wndWidth, wndHeight, anchor) {
    var offset = $(anchor).offset();
    var vpBottom = $(window).scrollTop() + $(window).height();
    var downY = offset.top + 28;
    var x = offset.left - wndWidth;
    var y = downY + wndHeight < vpBottom ? downY : offset.top - wndHeight;
    return {
        x: x < 0 ? 0 : x,
        y: y < 0 ? 0 : y
    };
}
//# sourceMappingURL=Forum.js.map
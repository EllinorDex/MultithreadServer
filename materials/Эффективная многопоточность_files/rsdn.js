/**
 * Set the local time offset to display time values in the users local time
 */
function setTimeOffset() {
    // Create all the dates necessary
    var now = new Date();
    var later = now;
    var offset = -now.getTimezoneOffset();
    // Set time for how long the cookie should be saved - 1 year
    later.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = "tz=" + offset + "; expires=" + later + "; path=/";
}
// Trigger the time offset cookie creation
setTimeOffset();
function OpenBlock(name) {
    var el = document.getElementById(name);
    if (el._state === 'hide') {
        el._state = 'show';
        el.style.display = 'block';
    }
    else {
        el._state = 'hide';
        el.style.display = 'none';
    }
}
function GetCookie(name) {
    var nm = name + '=';
    var beg = document.cookie.indexOf(nm);
    if (beg === -1)
        return null;
    beg = beg + nm.length;
    var end = document.cookie.indexOf(';', beg);
    if (end === -1)
        end = document.cookie.length;
    return unescape(document.cookie.substring(beg, end));
}
function SetCookie(name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : 'rsdn.org';
    var secure = (argc > 5) ? argv[5] : false;
    if (expires == null) {
        expires = new Date();
        expires.setFullYear(2020, 1, 1);
        expires.setHours(0, 0, 0, 0);
    }
    if (path == null) {
        path = '/';
    }
    document.cookie =
        name + '=' + escape(value)
            + ((expires == null) ? '' : ('; expires=' + expires.toUTCString())) +
            ((path == null) ? '' : ('; path=' + path)) +
            ((domain == null) ? '' : ('; domain=' + domain)) +
            ((secure == true) ? '; secure' : '');
}
function DeleteCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = GetCookie(name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toUTCString();
}
function GetOptions() {
    var opt = GetCookie('opt');
    return opt == null ? 0x00000001 : parseInt(opt);
}
function IsOptions(opt) {
    opt = 1 << (opt - 1);
    return (GetOptions() & opt) == opt;
}
function SetOption(opt, val) {
    var gopt = GetOptions();
    opt = 1 << (opt - 1);
    opt = (gopt & ~opt) | (val ? opt : 0);
    SetCookie("opt", opt);
}
var elm;
function FitWindowSize(objname, rw, rh) {
    if (self === top) {
        var ww = void 0;
        var wh = void 0;
        if (self.innerWidth) {
            ww = self.innerWidth;
            wh = self.innerHeight;
        }
        else if (document.documentElement && document.documentElement.clientWidth) {
            ww = document.documentElement.clientWidth;
            wh = document.documentElement.clientHeight;
        }
        else if (document.body) {
            ww = document.body.offsetWidth;
            wh = document.body.offsetHeight;
        }
        else
            return;
        elm = document.getElementById(objname);
        if (elm) {
            var fw = elm.clientWidth;
            var fh = elm.clientHeight;
            if (fw === 0)
                fw = 500;
            if (fh === 0)
                fh = 250;
            var dw = fw + rw - ww;
            var dh = fh + rh - wh;
            if (dw < 0)
                dw = 0;
            if (dh < 0)
                dh = 0;
            if (dw !== 0 || dh !== 0)
                window.resizeBy(dw, dh);
        }
    }
}
//# sourceMappingURL=rsdn.js.map
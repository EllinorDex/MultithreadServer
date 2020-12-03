!function(a, b, c) {
    function j(a) {
        var b = {}
          , d = /^jQuery\d+$/;
        return c.each(a.attributes, function(a, c) {
            c.specified && !d.test(c.name) && (b[c.name] = c.value)
        }),
        b
    }
    function k(a, d) {
        var e = this
          , f = c(e);
        if (e.value == f.attr("placeholder") && f.hasClass("placeholder"))
            if (f.data("placeholder-password")) {
                if (f = f.hide().next().show().attr("id", f.removeAttr("id").data("placeholder-id")),
                !0 === a)
                    return f[0].value = d;
                f.focus()
            } else
                e.value = "",
                f.removeClass("placeholder"),
                e == b.activeElement && e.select()
    }
    function l() {
        var a, b = this, d = c(b), f = this.id;
        if ("" == b.value) {
            if ("password" == b.type) {
                if (!d.data("placeholder-textinput")) {
                    try {
                        a = d.clone().attr({
                            type: "text"
                        })
                    } catch (b) {
                        a = c("<input>").attr(c.extend(j(this), {
                            type: "text"
                        }))
                    }
                    a.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": f
                    }).bind("focus.placeholder", k),
                    d.data({
                        "placeholder-textinput": a,
                        "placeholder-id": f
                    }).before(a)
                }
                d = d.removeAttr("id").hide().prev().attr("id", f).show()
            }
            d.addClass("placeholder"),
            d[0].value = d.attr("placeholder")
        } else
            d.removeClass("placeholder")
    }
    var h, i, d = "placeholder"in b.createElement("input"), e = "placeholder"in b.createElement("textarea"), f = c.fn, g = c.valHooks;
    d && e ? (i = f.placeholder = function() {
        return this
    }
    ,
    i.input = i.textarea = !0) : (i = f.placeholder = function() {
        var a = this;
        return a.filter((d ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": k,
            "blur.placeholder": l
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"),
        a
    }
    ,
    i.input = d,
    i.textarea = e,
    h = {
        get: function(a) {
            var b = c(a);
            return b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
        },
        set: function(a, d) {
            var e = c(a);
            return e.data("placeholder-enabled") ? ("" == d ? (a.value = d,
            a != b.activeElement && l.call(a)) : e.hasClass("placeholder") ? k.call(a, !0, d) || (a.value = d) : a.value = d,
            e) : a.value = d
        }
    },
    d || (g.input = h),
    e || (g.textarea = h),
    c(function() {
        c(b).delegate("form", "submit.placeholder", function() {
            var a = c(".placeholder", this).each(k);
            setTimeout(function() {
                a.each(l)
            }, 10)
        })
    }),
    c(a).bind("beforeunload.placeholder", function() {
        c(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function(a) {
    var b = {}
      , c = {
        method: "click",
        box: null,
        close_only_button: !1,
        button: null,
        button_close: ".close",
        effect: null,
        anim_speed: 300,
        auto_close: null,
        delay: 150,
        onBefore: function() {},
        onAfter: function() {},
        onShow: function() {},
        onHide: function() {}
    };
    a.fn.toShowHide = function(d) {
        if (0 == this.length)
            return this;
        if (this.length > 1)
            return this.each(function() {
                a(this).toShowHide(d)
            }),
            this;
        var e = {}
          , f = this;
        b.element = this;
        var g = function() {
            e.settings = a.extend({}, c, d),
            e.box = f.find(e.settings.box),
            e.button = f.find(e.settings.button),
            e.buttonClose = f.find(e.settings.button_close),
            e.rand = Math.floor(900 * Math.random()) + 100,
            e.intID = null,
            e.intervalID,
            "click" == e.settings.method ? e.button.on("click", function(b) {
                e.box.length > 0 && ("block" !== e.box.css("display") ? ("slide" == e.settings.effect ? e.box.slideDown(e.settings.anim_speed, function() {
                    e.settings.onShow(f)
                }) : "fade" == e.settings.effect ? e.box.fadeIn(e.settings.anim_speed, function() {
                    e.settings.onShow(f)
                }) : (e.box.show(),
                e.settings.onShow(f)),
                e.settings.onBefore(f),
                e.settings.auto_close && (e.intID = window.setInterval(function() {
                    h()
                }, e.settings.auto_close)),
                0 == e.settings.close_only_button ? (e.firstClick = !0,
                a(document).bind("click." + e.rand, function(b) {
                    0 != e.firstClick || 0 != a(b.target).closest(e.box).length && 1 != a(b.target).closest(e.button).length && 1 != a(b.target).closest(e.buttonClose).length || h(),
                    e.firstClick = !1
                })) : e.buttonClose.bind("click.close", function() {
                    return h(),
                    !1
                })) : h(),
                b.preventDefault())
            }) : f.hover(function() {
                1 == e.box.length && (e.intervalID = setTimeout(function() {
                    "slide" == e.settings.effect ? e.box.slideDown(e.settings.anim_speed, function() {
                        e.settings.onShow(f)
                    }) : "fade" == e.settings.effect ? e.box.fadeIn(e.settings.anim_speed, function() {
                        e.settings.onShow(f)
                    }) : (e.box.show(),
                    e.settings.onShow(f)),
                    e.settings.onBefore(f)
                }, e.settings.delay))
            }, function() {
                1 == e.box.length && ("slide" == e.settings.effect ? e.box.slideUp(e.settings.anim_speed, function() {
                    e.settings.onHide(f)
                }) : "fade" == e.settings.effect ? e.box.fadeOut(e.settings.anim_speed, function() {
                    e.settings.onHide(f)
                }) : (e.box.hide(),
                e.settings.onHide(f)),
                e.settings.onAfter(f),
                clearInterval(e.intervalID))
            })
        }
          , h = function() {
            "slide" == e.settings.effect ? e.box.slideUp(e.settings.anim_speed, function() {
                e.settings.onHide(f)
            }) : "fade" == e.settings.effect ? e.box.fadeOut(e.settings.anim_speed, function() {
                e.settings.onHide(f)
            }) : (e.box.hide(),
            e.settings.onHide(f)),
            0 == e.settings.close_only_button ? a(document).unbind("click." + e.rand) : e.buttonClose.unbind("click.close"),
            e.intID && window.clearInterval(e.intID),
            e.settings.onAfter(f)
        };
        return g(),
        this
    }
}(jQuery),
$(document).ready(function() {
    $("input[placeholder], textarea[placeholder]").placeholder(),
    $("input, textarea").focus(function() {
        $(this).data("placeholder", $(this).attr("placeholder")),
        $(this).attr("placeholder", "")
    }),
    $("input, textarea").blur(function() {
        $(this).attr("placeholder", $(this).data("placeholder"))
    }),
    $("#showpage").click(function() {
        return $("#page_other").toggle(),
        !1
    }),
    $(".site-sidebar-r > div").each(function() {
        $(this).clone().addClass("hidden").appendTo($(".site-sidebar-l"))
    }),
    $(".site-header .menu").toShowHide({
        button: ".bt",
        box: "#first-menu",
        effect: "slide",
        anim_speed: 200,
        delay: 50,
        close_only_button: !0,
        onBefore: function(a) {
            a.addClass("active");
            $(".shadow-menu").show();
        },
        onAfter: function(a) {
            a.removeClass("active");
            $(".shadow-menu").hide();
        }
        
    }),
    $(".ordermenu").toShowHide({
        button: ".bt",
        box: "div",
        effect: "slide",
        anim_speed: 200,
        delay: 50,
        close_only_button: !0,
        onBefore: function(a) {
            a.addClass("active")
        },
        onAfter: function(a) {
            a.removeClass("active")
        }
    }),
    $(window).width() < 1e3 && $(".widget-cat .item").toShowHide({
        button: ".title",
        box: "ul.tohide",
        effect: "slide",
        anim_speed: 200,
        delay: 50,
        close_only_button: !0,
        onBefore: function(a) {
            a.addClass("active")
        },
        onAfter: function(a) {
            a.removeClass("active")
        }
    });
    var b = $("#file_input").css({
        height: 0,
        width: 0,
        overflow: "hidden"
    })
      , c = $(":file").wrap(b);
    c.change(function() {
        $this = $(this);
        var a = $(this).val();
        a.indexOf("C:\\fakepath\\") + 1 && (a = a.substr(12)),
        $("#upload").text(a)
    }),
    $("#upload").click(function() {
        c.click()
    }).show();
    var d = $("#bookmarkme");
    d.click(function() {
        if (window.sidebar && window.sidebar.addPanel)
            window.sidebar.addPanel(document.title, window.location.href, "");
        else if (window.external && "AddFavorite"in window.external)
            window.external.AddFavorite(location.href, document.title);
        else {
            if (window.opera && window.print || window.sidebar && !(window.sidebar instanceof Node))
                return d.attr("rel", "sidebar").attr("title", document.title),
                !0;
            alert("��� ���������� � ��������� ������� " + (-1 != navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + " + D.")
        }
        return !1
    })
});
/*
document.querySelector('.menu.active #menu__btn').addEventListener('click', function (){  });
*/
document.getElementById("second-menu__btn").onclick =function(e){
   e.preventDefault();
   var firstMenu = document.getElementById("first-menu");
   firstMenu.style.display = "none";
   var secondMenu = document.getElementById("second-menu");
   secondMenu.style.display = "block";
}
document.getElementById("second-menu__back").onclick =function(e){
   e.preventDefault();
   var firstMenu = document.getElementById("second-menu");
   firstMenu.style.display = "none";
   var secondMenu = document.getElementById("first-menu");
   secondMenu.style.display = "block";
}
document.getElementById("third-menu__btn").onclick =function(e){
   e.preventDefault();
   var firstMenu = document.getElementById("first-menu");
   firstMenu.style.display = "none";
   var thirdMenu = document.getElementById("third-menu");
   thirdMenu.style.display = "block";
}
document.getElementById("third-menu__back").onclick =function(e){
   e.preventDefault();
   var firstMenu = document.getElementById("third-menu");
   firstMenu.style.display = "none";
   var thirdMenu = document.getElementById("first-menu");
   thirdMenu.style.display = "block";
}
// document.getElementById("menu__btn").onclick =function(e){
//    e.preventDefault();
//    var firstMenu = document.getElementById("first-menu");
//    var secondMenu = document.getElementById("second-menu");
//    var thirdMenu = document.getElementById("third-menu");
//    firstMenu.style.display = (firstMenu.style.display === "block" ? "none" : "block");
//    secondMenu.style.display = (secondMenu.style.display === "block" ? "none" : "block");
//    thirdMenu.style.display = (thirdMenu.style.display === "block" ? "none" : "block");
// }
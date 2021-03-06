! function (n) {
    "use strict";
    var e, t, a, o = localStorage.getItem("Dason-language"),
        r = "en";

    function d(t) {
        document.getElementById("header-lang-img") && ("en" == t ? document.getElementById("header-lang-img").src = "assets/images/flags/us.jpg" : "sp" == t ? document.getElementById("header-lang-img").src = "assets/images/flags/spain.jpg" : "gr" == t ? document.getElementById("header-lang-img").src = "assets/images/flags/germany.jpg" : "it" == t ? document.getElementById("header-lang-img").src = "assets/images/flags/italy.jpg" : "ru" == t && (document.getElementById("header-lang-img").src = "assets/images/flags/russia.jpg"), localStorage.setItem("Dason-language", t), null == (o = localStorage.getItem("Dason-language")) && d(r), n.getJSON("assets/lang/" + o + ".json", function (t) {
            n("html").attr("lang", o), n.each(t, function (t, e) {
                "head" === t && n(document).attr("title", e.title), n("[data-key='" + t + "']").text(e)
            })
        }))
    }

    function i() {
        var t = document.querySelectorAll(".counter-value");
        t.forEach(function (o) {
            ! function t() {
                var e = +o.getAttribute("data-target"),
                    a = +o.innerText,
                    n = e / 250;
                n < 1 && (n = 1), a < e ? (o.innerText = (a + n).toFixed(0), setTimeout(t, 1)) : o.innerText = e
            }()
        })
    }

    function s() {
        for (var t = document.getElementById("topnav-menu-content").getElementsByTagName("a"), e = 0, a = t.length; e < a; e++) t[e] && t[e].parentElement && "nav-item dropdown active" === t[e].parentElement.getAttribute("class") && (t[e].parentElement.classList.remove("active"), t[e].nextElementSibling && t[e].nextElementSibling.classList.remove("show"))
    }


   
n("#vertical-menu-btn").on("click", function (t) {
        t.preventDefault(), n("body").toggleClass("sidebar-enable"), 992 <= n(window).width() && (null == e ? null == document.body.getAttribute("data-sidebar-size") || "lg" == document.body.getAttribute("data-sidebar-size") ? document.body.setAttribute("data-sidebar-size", "sm") : document.body.setAttribute("data-sidebar-size", "lg") : "md" == e ? "md" == document.body.getAttribute("data-sidebar-size") ? document.body.setAttribute("data-sidebar-size", "sm") : document.body.setAttribute("data-sidebar-size", "md") : "sm" == document.body.getAttribute("data-sidebar-size") ? document.body.setAttribute("data-sidebar-size", "lg") : document.body.setAttribute("data-sidebar-size", "sm"))
    }), n("#sidebar-menu a").each(function () {
        var t = window.location.href.split(/[?#]/)[0];
        this.href == t && (n(this).addClass("active"), n(this).parent().addClass("mm-active"), n(this).parent().parent().addClass("mm-show"), n(this).parent().parent().prev().addClass("mm-active"), n(this).parent().parent().parent().addClass("mm-active"), n(this).parent().parent().parent().parent().addClass("mm-show"), n(this).parent().parent().parent().parent().parent().addClass("mm-active"))
    }), n(document).ready(function () {
        var t;
        0 < n("#sidebar-menu").length && 0 < n("#sidebar-menu .mm-active .active").length && (300 < (t = n("#sidebar-menu .mm-active .active").offset().top) && (t -= 300, n(".vertical-menu .simplebar-content-wrapper").animate({
            scrollTop: t
        }, "slow")))
    }), n(".navbar-nav a").each(function () {
        var t = window.location.href.split(/[?#]/)[0];
        this.href == t && (n(this).addClass("active"), n(this).parent().addClass("active"), n(this).parent().parent().addClass("active"), n(this).parent().parent().parent().addClass("active"), n(this).parent().parent().parent().parent().addClass("active"), n(this).parent().parent().parent().parent().parent().addClass("active"), n(this).parent().parent().parent().parent().parent().parent().addClass("active"))
    }), 
        function () {
            if (document.getElementById("topnav-menu-content")) {
                for (var t = document.getElementById("topnav-menu-content").getElementsByTagName("a"), e = 0, a = t.length; e < a; e++) t[e].onclick = function (t) {
                    t && t.target && "#" === t.target.getAttribute("href") && (t.target.parentElement.classList.toggle("active"), t.target.nextElementSibling && t.target.nextElementSibling.classList.toggle("show"))
                };
                window.addEventListener("resize", s)
            }
        }(), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (t) {
            return new bootstrap.Tooltip(t)
        }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (t) {
            return new bootstrap.Popover(t)
        }), [].slice.call(document.querySelectorAll(".toast")).map(function (t) {
            return new bootstrap.Toast(t)
        }), window.sessionStorage && ((t = sessionStorage.getItem("is_visited")) ? n("#" + t).prop("checked", !0) : sessionStorage.setItem("is_visited", "layout-ltr")), n("#password-addon").on("click", function () {
            0 < n(this).siblings("input").length && ("password" == n(this).siblings("input").attr("type") ? n(this).siblings("input").attr("type", "input") : n(this).siblings("input").attr("type", "password"))
        }), o && "null" != o && o !== r && d(o), n(".language").on("click", function (t) {
            d(n(this).attr("data-lang"))
        }), feather.replace(), n(window).on("load", function () {
            n("#status").fadeOut(), n("#preloader").delay(350).fadeOut("slow")
        }), a = document.getElementsByTagName("body")[0], n(".right-bar-toggle").on("click", function (t) {
            n("body").toggleClass("right-bar-enabled")
        }), n(document).on("click", "body", function (t) {
            0 < n(t.target).closest(".right-bar-toggle, .right-bar").length || n("body").removeClass("right-bar-enabled")
        })



        function enter_task () {
            var text = $('#enter_task').val();
            $('#todo_list').append('<li>'+ text + '<button type="submit" class="done delete" value="Delete"><i class="fas fa-trash-alt"></i></button>' +'</li>');
    };
    
    $('#todo_list').on('click', '.delete',function(){
        $(this).parent().remove();
    });
    
    $(function() {
        $('#add').on('click', enter_task);
    });

    
$(".show-more").click(function () {
    $(".text").toggleClass("show-more-height");
});

$('.viewmore').click(function() {
$(this).parent().parent().next().slideToggle();

});


    
}(jQuery);
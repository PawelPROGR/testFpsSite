// scrollify

$.scrollify({
    section: ".section",
    sectionName: "section-name",
    interstitialSection: "",
    easing: "easeOutCubic",
    scrollSpeed: 2000,
    offset: 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    // touchScroll: true,
    before: function () { },
    after: function () { },
    afterResize: function () { },
    afterRender: function () { }
});

$('.link2').click(function () {
    $.scrollify.next();
});

$('.link3').click(function () {
    $.scrollify.move("#third");
});
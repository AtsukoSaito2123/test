$(function () {

    /* =============================================
    ローディング画面をフェードアウトする
    ============================================= */
    $(function () {
        setTimeout(function () {
            $('#splash').fadeOut();
        }, 5000);
    });

    /* =============================================
    ナビゲーションメニュー スクロール場所にあわせてアイコンが動く
    ============================================= */
    $(window).on("load scroll resize", function () {

        var st = $(window).scrollTop();
        var wh = $(window).height();

        $('.sec-scroll-point').each(function (i) {
            var tg = $(this).offset().top;
            var id = $(this).attr('id');

            if (st > tg - wh + (wh / 2)) {
                $(".header-link").removeClass("is-active");
                var link = $(".header-link[href *= " + id + "]");
                $(link).addClass("is-active");
            }
        });

    });

    /* =============================================
    スクロール制御
    ============================================= */

    $(function ($) {

        // 要素を固定させる位置を取得
        var fixed = $('#obsession').offset().top -20;
        // 要素を解除する位置
        var lineup = $('#line-up').offset().top -50;

        $(window).on('scroll', function () {

            // 以下の条件分岐で使用する位置の状態を取得 
            var windowScrollTop = $(window).scrollTop();
            var lineupArea = windowScrollTop > lineup;
            var beforeFixedArea = windowScrollTop < fixed;

            if (lineupArea || beforeFixedArea) {
                $('.contents').removeClass('js-fixed');
            } else {
                $('.contents').addClass('js-fixed');
            }
        });
    });



    /* =============================================
    mainvisual
    ============================================= */
    //画像の設定
    var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768) {
        var responsiveImage = [//PC用の画像
            { src: './img/img-01.png' },
            { src: './img/img-02.png' },
            { src: './img/img-03.png' },
            { src: './img/img-04.png' }
        ];
    } else {
        var responsiveImage = [//タブレットサイズ（768px）以下用の画像
            { src: './img/img-01.png' },
            { src: './img/img-02.png' },
            { src: './img/img-03.png' },
            { src: './img/img-04.png' }
        ];
    }
    //Vegas全体の設定
    $(function () {
        setTimeout(function () {
            $('#slider').vegas({
                // overlay: './img/img-01.png',
                transition: 'blur',
                transitionDuration: 1000,
                delay: 4000,//スライド間の遅延をミリ秒単位で。
                animationDuration: 5000,//スライドアニメーション時間をミリ秒単位で設定
                animation: 'kenburns',
                slides: responsiveImage,
                timer: false,
            });
        }, 4000);
    });



    /* =============================================
    pc-top-1 ＊円のところ クリック
    ============================================= */

    var clickCount = 0;
    $(".p-image").click(function () {
        clickCount++;
        switch (clickCount) {
            case 1:
                $('.item1').css({
                    'transform': 'translate(-65%, -40%)',
                    'color': '#fff',
                    'background': 'transparent'
                });
                $('.item1 span').css('border-color', '#fff');
                $('.item1 img').css('opacity', '0');
                $('.item1 p').css('background', 'transparent');
                $('.element1').css('opacity', '0');

                $('.item2').css({
                    'transform': 'translate(0%, 70%)',
                    'color': '#000',
                });
                $('.item2 p').css('background', '#fff');
                $('.item2 span').css('border-color', '#000');
                $('.item2 img').css('opacity', '1');
                $('.element2').css('opacity', '1');

                $('.item3').css({
                    'transform': 'translate(65%, -40%)',
                    'color': '#fff',
                    'background': 'transparent'
                });
                $('.item3 span').css('border-color', '#fff');
                $('.item3 img').css('opacity', '0');
                $('.element3').css('opacity', '0');
                $('.mask').css({
                    'background': '#658896',
                });
                break;

            case 2:
                $('.item1').css({
                    'transform': 'translate(65%, -40%)',
                    'color': '#fff',
                    'background': 'transparent'
                });

                $('.item1 span').css('border-color', '#fff');
                $('.item1 img').css('opacity', '0');
                $('.element1').css('opacity', '0');

                $('.item2').css({
                    'transform': 'translate(-65%, -40%)',
                    'color': '#fff',
                    'background': 'transparent'
                });

                $('.item2 span').css('border-color', '#fff');
                $('.item2 img').css('opacity', '0');
                $('.item2 p').css('background', 'transparent');
                $('.element2').css('opacity', '0');

                $('.item3').css({
                    'transform': 'translate(0%, 70%)',
                    'color': '#000',
                });
                $('.item3 p').css('background', '#fff');
                $('.item3 span').css('border-color', '#000');
                $('.item3 img').css('opacity', '1');
                $('.element3').css('opacity', '1');
                $('.mask').css({
                    'background': '#798D8A',
                });

                break;

            case 3:
                $('.item1').css({
                    'transform': 'translate(0%, 70%)',
                    'color': '#000',
                });
                $('.item1 p').css('background', '#fff');
                $('.item1 span').css('border-color', '#000');
                $('.item1 img').css('opacity', '1');
                $('.element1').css('opacity', '1');

                $('.item2').css({
                    'transform': 'translate(65%, -40%)',
                    'color': '#fff',
                    'background': 'transparent'
                });
                $('.item2 span').css('border-color', '#fff');
                $('.item2 img').css('opacity', '0');
                $('.element2').css('opacity', '0');

                $('.item3').css({
                    'transform': 'translate(-65%, -40%)',
                    'color': '#fff',
                    'background': 'transparent'
                });
                $('.item3 span').css('border-color', '#fff');
                $('.item3 img').css('opacity', '0');
                $('.item3 p').css('background', 'transparent');
                $('.element3').css('opacity', '0');
                $('.mask').css({
                    'background': '#395985',
                });
                clickCount = 0;
                break;
        }
    });
    /* =============================================
    pc-top-1 ＊円のところ スクロール 
    ============================================= */

    const TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".obsession",
            scrub: 3,
            start: "top+=100 top",
            end: "bottom-=500 bottom",
        }
    })


    // case1
    TL.to('.element1', {
        opacity: 1,
        y:0,
    })
    .to('.item1', {
        yPercent: -110,
        xPercent: -65,
        color: '#fff',
    }, 'tl1')
        .to('.span1', {
            borderBottomColor: '#fff',
        }, 'tl1')
        .to('.img1', {
            opacity: 0,
        }, 'tl1')
        .to('.circle1', {
            opacity: 0,
        }, 'tl1')
        .to('.bg1', {
            background: 'transparent',
        }, 'tl1')
        .to('.element1', {
            opacity: 0,
        }, 'tl1')



        .to('.mask', {
            background: '#658896',
        }, 'tl1')
        .to('.item2', {
            yPercent: 110,
            xPercent: -65,
            color: '#000',
        }, 'tl1')
        .to('.span2', {
            borderBottomColor: '#000',
        }, 'tl1')
        .to('.img2', {
            opacity: 1,
        }, 'tl1')
        .to('.circle2', {
            opacity: 1,
        }, 'tl1')
        .to('.bg2', {
            background: '#fff',
        }, 'tl1')
        .to('.element2', {
            opacity: 1,
            y: 0,
        }, 'tl1')


        .to('.item3', {
            yPercent: 0,
            xPercent: 130,
        }, 'tl1')
        .to('.span3', {
            borderBottomColor: '#fff',
        }, 'tl1')
        .to('.img3', {
            opacity: 0,
        }, 'tl1')
        .to('.circle3', {
            opacity: 0,
        }, 'tl1')
        .to('.bg3', {
            background: 'transparent',
        }, 'tl1');


    const TL2 = gsap.timeline()
    TL2.to('.item1', {
        yPercent: -110,
        xPercent: 65,
        color: '#fff',
    }, 'tl2')


        .to('.item2', {
            yPercent: 0,
            xPercent: -130,
            color: '#fff',
        }, 'tl2')
        .to('.span2', {
            borderBottomColor: '#fff',
        }, 'tl2')
        .to('.img2', {
            opacity: 0,
        }, 'tl2')
        .to('.circle2', {
            opacity: 0,
        }, 'tl2')
        .to('.bg2', {
            background: 'transparent',
        }, 'tl2')
        .to('.element2', {
            opacity: 0,
        }, 'tl2')


        .to('.item3', {
            yPercent: 110,
            xPercent: 65,
            color: '#000',
        }, 'tl2')
        .to('.element3', {
            opacity: 1,
            y: 0,
        }, 'tl2')
        .to('.mask', {
            background: '#798D8A',
        }, 'tl2')
        .to('.span3', {
            borderBottomColor: '#000',
        }, 'tl2')
        .to('.img3', {
            opacity: 1,
        }, 'tl2')
        .to('.circle3', {
            opacity: 1,
        }, 'tl2')
        .to('.bg3', {
            background: '#fff',
        }, 'tl2')

    TL.add(TL2)



    /* =============================================
    LINE UP スライド *gsap
    // ============================================= */

    const e = gsap.timeline({
        scrollTrigger: {
            trigger: ".line-up",
            scrub: 1,
            start: "top 100%",
            end: "bottom 100%",
            // duration: 0.5,
            // pin: true,
        }
    })
        , t = document.querySelectorAll(".product-inner-item");
    t.forEach((function (t, n) {
        e.addLabel("item_".concat(n)),
            e.fromTo(t, {
                yPercent: 110
            }, {
                yPercent: 0,
                delay: .25
            })
    }
    )),
        t.forEach((function (n, r) {
            for (var i = 0; t.length - r - 1 > i; i++)
                e.to(n, {
                    x: "".concat(9 * (i + 1), "rem"),
                    y: "".concat(-3 * (i + 1), "rem"),
                    delay: .25
                }, "item_".concat(i + 1 + r, "+=30%"))
        }
        ))



    /* =============================================
    コンセプト ボトル背景の動き ＊gsap
    ============================================= */

    gsap.to('.image', {
        y: -30,
        x: -20,// -X軸方向に移動
        ease: "cicr", // アニメーションのイージング(noneは定速)
        duration: 0.5,
        scrollTrigger: {
            trigger: '.video1', // アニメーション開始のトリガー要素
            toggleActions: "play none none reverse",
            scrub: 1, // スクロール量に合わせてアニメーション
            start: "top top", // アニメーションが始まる位置

        },
    });
    /* =============================================
    コンセプト ボトルの動き gsap
    ============================================= */

    gsap.to('.shampoo-img', {
        y: 50,// -X軸方向に移動
        ease: "cicr", // アニメーションのイージング(noneは定速)
        duration: 0.5,
        scrollTrigger: {
            trigger: '.video1', // アニメーション開始のトリガー要素
            toggleActions: "play none none reverse",
            scrub: 1, // スクロール量に合わせてアニメーション
            start: "top top", // アニメーションが始まる位置

        },
    });
    /* =============================================
    コンセプト 雫の動き gsap
    ============================================= */
    gsap.to('.drop-move', {
        y: 200,// -X軸方向に移動
        ease: "expo", // アニメーションのイージング(noneは定速)
        duration: 1,
        scrollTrigger: {
            trigger: '.scroll-trigger', // アニメーション開始のトリガー要素
            toggleActions: "play none none reverse",
            scrub: 1, // スクロール量に合わせてアニメーション
            start: "top top", // アニメーションが始まる位置
            // markers: true,
        },
    });
    gsap.to('.drop-move2', {
        y: 50,// -X軸方向に移動
        ease: "expo", // アニメーションのイージング(noneは定速)
        duration: 5,
        scrollTrigger: {
            trigger: '.video-item', // アニメーション開始のトリガー要素
            toggleActions: "play none none reverse",
            scrub: 1, // スクロール量に合わせてアニメーション
            start: "top top", // アニメーションが始まる位置
            // markers: true,

        },
    });
    gsap.to('.drop-move3', {
        y: 50,// -X軸方向に移動
        ease: "expo", // アニメーションのイージング(noneは定速)
        duration: 5,
        scrollTrigger: {
            trigger: '.video-right', // アニメーション開始のトリガー要素
            toggleActions: "play none none reverse",
            scrub: 1, // スクロール量に合わせてアニメーション
            start: "top top", // アニメーションが始まる位置
            // markers: true,

        },
    });
    gsap.to('.drop-move2', {
        y: 100,// -X軸方向に移動
        ease: "expo", // アニメーションのイージング(noneは定速)
        duration: 5,
        scrollTrigger: {
            trigger: '.video-item', // アニメーション開始のトリガー要素
            toggleActions: "play none none reverse",
            scrub: 1, // スクロール量に合わせてアニメーション
            start: "top top", // アニメーションが始まる位置
            // markers: true,

        },
    });

    /* =============================================
    play btn モーダルウインドウ Modaal
    ============================================= */
    $('.video-open1').modalVideo({
        channel: 'custom',
        url: './video/5938a5ab-510f-4b85-b27f-833068a8bd3b.mp4'
    });
    $('.video-open2').modalVideo({
        channel: 'custom',
        url: './video/【サブリミック  エアリーフロー スパエキスパートインタビュー】　毎日のホームケアでくせ、うねり対策.mp4'
    });


    /* =============================================
    Voice スライド ＊gsap
    ============================================= */
    const area = document.querySelector(".js-area");
    const wrap = document.querySelector(".js-wrap");
    const items = document.querySelectorAll(".js-item");
    const num = items.length;

    gsap.set(wrap, { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });

    gsap.to(items, {
        xPercent: -100 * (num - 1),
        ease: "none",
        scrollTrigger: {
            trigger: area,
            start: "top top",
            end: "bottom+=200 top",
            pin: true,
            scrub: true,
            // markers: true,
        }
    });
});


















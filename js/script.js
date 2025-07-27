$(function () {
  /* ハンバーガーメニュー */
  // ハンバーガーメニューのクリック処理
  $(".hamburger").click(function () {
    $(this).toggleClass("active"); // ハンバーガーアイコンのクラス切り替え
    $(".menu").toggleClass("active"); // メニューのクラス切り替え
    $("header nav").fadeToggle(); // ナビゲーションの表示/非表示を切り替え
  });

  // メニュー内のリンクをクリックしたときの処理
  $(".menu a").click(function () {
    $(".active").removeClass("active"); // すべての"active"クラスを削除
    if (window.innerWidth <= 750) {
      $("header nav").fadeToggle(); // ナビゲーションを非表示にする
    }
  });
  $(window).resize(function () {
    if (window.matchMedia("(max-width: 750px)").matches) {
      $("header nav").hide();
      console.log("SP");
    } else {
      $("header nav").show();
      console.log("PC");
    }
  });

  /* スムーススクロール */
  let headerHeight = $("header").outerHeight(); //pcメニューの高さ
  let hamburgerHeight = $("header").outerHeight(); //hamburgerの高さ
  let windowWidth = $(window).width(); //画面の幅
  //aタグの＃がついているものをクリックしたとき
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href"); //hrefの中の値を取得
    let target = $(href);
    let position = target.offset().top - headerHeight; //スクロールの高さを取得
    $("body,html").animate({ scrollTop: position }, 500);
  });
  /*  モーダルウィンドウ */
  $(".ttl").on("click", function () {
    $(this).toggleClass("show");
    $(this).next(".a").slideToggle();
  });
});


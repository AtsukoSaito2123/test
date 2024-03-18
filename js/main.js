$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle_btn").on("click", function () {
    ($("#header").toggleClass("open"));
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $("#header").toggleClass("open");

  });

  // // リンクをクリックした時にメニューを閉じる
  // $("#nav a").on("click", function () {
  //   // #nav aをクリックしたときに実行する

  //   $("#header").toggleClass("open");
  // });
});
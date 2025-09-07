/*
  main.js
  - このファイルではWebページに「動き」をつけます
  - 初心者向けに、できるだけ分かりやすくコメントを入れています
*/

document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // ① 「もっと知る」ボタンで下にスクロール
  // ========================================
  const btn = document.getElementById("learnBtn");   // ボタンを探す
  const target = document.getElementById("moreInfo"); // 移動先のセクションを探す

  if (btn && target) {
    btn.addEventListener("click", () => {
      // ページ内スクロールを「なめらかに」実行
      target.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ========================================
  // ② テキストを変えるボタン
  // ========================================
  const changeBtn = document.getElementById("changeTextBtn"); // ボタンを探す
  const msg = document.getElementById("message");             // 表示する場所を探す

  if (changeBtn && msg) {
    changeBtn.addEventListener("click", () => {
      // ボタンを押したらテキストを変更
      msg.textContent = "ボタンが押されました！ 🎉";
    });
  }

  // ========================================
  // ③ 背景色をランダムに変える
  // ========================================
  const bgBtn = document.getElementById("bgChangeBtn"); // 背景変更ボタンを探す

  if (bgBtn) {
    bgBtn.addEventListener("click", () => {
      // 用意した色のリスト
      const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ffccff"];
      // 0〜配列の長さ-1の数字をランダムで取得
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      // 背景色を変更
      document.body.style.backgroundColor = randomColor;
    });
  }

  // ========================================
  // ④ 画像をクリックで拡大・縮小
  // ========================================
  const img = document.getElementById("thumbnail"); // 画像を探す

  if (img) {
    img.addEventListener("click", () => {
      // "big" というクラスをつけ外しして拡大・縮小を切り替える
      img.classList.toggle("big");
    });
  }

  // ========================================
  // ⑤ スクロールしたら要素をフェードイン表示
  // ========================================
  const fadeEls = document.querySelectorAll(".fadein"); // フェードイン対象の要素を全部取得

  // 要素が画面に入ったら「show」クラスをつける関数
  const showOnScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect(); // 要素の位置を取得
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("show"); // 表示クラスを追加
      }
    });
  };

  // スクロールするたびにチェックする
  window.addEventListener("scroll", showOnScroll);

  // ページ読み込み時にも一度チェック
  showOnScroll();
});

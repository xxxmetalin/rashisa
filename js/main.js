// ================================
// YouTube IFrame API
// ================================
let player;

// YouTube IFrame API の準備完了時に呼ばれる
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytPlayer', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  console.log('YouTube Player Ready');
}

// 指定秒数にジャンプ
function jumpTo(seconds) {
  if (player && player.seekTo) {
    player.seekTo(seconds, true);
    player.playVideo();
    
    // 動画セクションへスムーズスクロール
    const videoSection = document.getElementById('video');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// ================================
// Video Chapters ボタン
// ================================
document.addEventListener('DOMContentLoaded', function() {
  const chapterButtons = document.querySelectorAll('.video-chapters__btn');
  
  chapterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const time = parseInt(this.getAttribute('data-time'), 10);
      jumpTo(time);
    });
  });
});

// ================================
// YouTube IFrame API スクリプト読み込み
// ================================
(function() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

// ================================
// 追従CTA（固定CTA）※保留中
// ================================
// document.addEventListener('DOMContentLoaded', function() {
//   const fixedCta = document.getElementById('fixedCta');
//   const showTarget = document.querySelector('.cta');      // これが見切れたら表示
//   const hideTarget = document.querySelector('.faq');      // ここで消す

//   window.addEventListener('scroll', function() {
//     const scrollY = window.scrollY;
//     const windowH = window.innerHeight;
    
//     // .ctaの下端が画面上部に消えたら表示
//     const showPoint = showTarget.offsetTop + showTarget.offsetHeight;
//     const hidePoint = hideTarget.offsetTop - windowH;

//     if (scrollY > showPoint && scrollY < hidePoint) {
//       fixedCta.classList.add('is-show');
//     } else {
//       fixedCta.classList.remove('is-show');
//     }
//   });
// });

// ================================
// スムーズスクロール（フッターナビ用）
// ================================
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

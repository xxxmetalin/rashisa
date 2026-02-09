
// 追従CTAの表示制御
// document.addEventListener('DOMContentLoaded', function() {
//     const fixedCta = document.getElementById('fixedCta');
//     const showTarget = document.querySelector('.cta');      // これが見切れたら表示
//     const hideTarget = document.querySelector('.faq');      // ここで消す
  
//     window.addEventListener('scroll', function() {
//       const scrollY = window.scrollY;
//       const windowH = window.innerHeight;
      
//       // .ctaの下端が画面上部に消えたら表示
//       const showPoint = showTarget.offsetTop + showTarget.offsetHeight;
//       const hidePoint = hideTarget.offsetTop - windowH;
  
//       if (scrollY > showPoint && scrollY < hidePoint) {
//         fixedCta.classList.add('is-show');
//       } else {
//         fixedCta.classList.remove('is-show');
//       }
//     });
//   });
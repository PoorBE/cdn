<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/PoorBE/images_b/img/favicon.png");
         document.title = 'ヽ(●-`Д´-)ノ哎呀，我挂掉了';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/PoorBE/images_b/img/favicon.png");
         document.title = 'ヾ(Ő∀Ő3)ノ好哦！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
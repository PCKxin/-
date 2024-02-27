(
    function (a,b) {
        // 监听窗口失焦
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'hidden') {
                document.querySelector('title').innerText = 'Chat挂起';
                document.querySelector('link[rel="icon"]').href = 'img/icon2.png';
            }else{
                document.querySelector('title').innerText = 'YukiChat';
                document.querySelector('link[rel="icon"]').href = 'img/icon3.png';
            }
        });
    }
    (document, window)
)
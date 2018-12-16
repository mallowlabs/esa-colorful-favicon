(() => {

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = (e) => {
        const color = window.getComputedStyle(document.querySelector('.navbar-main')).backgroundColor;

        const canvas = document.createElement("canvas");
        canvas.height = 32;
        canvas.width = 32;

        const c = canvas.getContext('2d');
        c.fillStyle = color;
        c.fillRect(0, 0, 32, 32);
        c.drawImage(img, 0, 0, 32, 32);

        const favicon = document.querySelector('link[rel="shortcut icon"]');
        favicon.setAttribute("href", canvas.toDataURL('image/png'));
    };
    img.src = chrome.runtime.getURL("icons/favicon.png");
})();

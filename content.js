(() => {
    const favicon = $('link[rel="shortcut icon"]');
    const color = $('.navbar-main').css('background-color');

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = (e) => {
        const canvas = document.createElement("canvas");
        canvas.height = 32;
        canvas.width = 32;

        const c = canvas.getContext('2d');
        c.fillStyle = color;
        c.fillRect(0, 0, 32, 32);
        c.drawImage(img, 0, 0, 32, 32);

        favicon.attr("href", canvas.toDataURL('image/png'));
    };
    img.src = favicon.attr('href');
})();

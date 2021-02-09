function kitapsec() {
    var id = Math.floor(Math.random() * 6) + 1;
    $.getJSON('https://my-json-server.typicode.com/nejlasahin/json-server_kitaplar/kitaplar/' + id, function(data) {
        var $content = $('#content');
        var display = '<div class="container2">' +
            '<hr>';

        display += `<h1>${data.ad}</h1>` +
            `<div class='row'>` +
            `<img src='${data.resim}' class='left'>` +
            `<p class='description'>${data.ozet}</p>` +
            `</div>` +
            `<div class='information'>` +
            `<ul>` +
            `<li><b>Yazar :</b> ${data.yazar}</li>` +
            `<li><b>Yayınevi :</b> ${data.yayinevi}</li>` +
            `<li><b>İlk Yayınlanma Tarihi :</b> ${data.tarih}</li>` +
            `<li><b>Türler :</b> ${data.tur}</li>` +
            `<li><b>Sayfa Sayısı :</b> ${data.sayfa}</li>` +
            `<li><b>Özgün Dili :</b> ${data.dil}</li>` +
            `</ul>` +
            `</div>` +
            `</div>`;


        $content.html(display);
    });
}
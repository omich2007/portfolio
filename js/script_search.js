
//jQery запрос на Википедию

$(document).ready(function () {
    $('#search').click(function () {
        var searchTerm = $('#searchTerm').val()
        var url = "http://uk.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        $.ajax({
            type:"GET",
            url:url,
            async:false,
            dataType:"json",
            success: function (data) {
                $('#output').html('');
                for (var i = 0; i < data[1].length; i++) {
                    $('#output').prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>")
                }
            },
            error: function (errorMesage) {
                alert("Помилка")
            }
        });
    });
});

///replace

var elem = document.querySelector('#replace');
elem.addEventListener('click', replacement);

function replacement() {
    var inp = document.querySelector('#replace');
    inp.innerHTML = '<input class="from-control" placeholder="Введіть Ваш запит" id="searchTerm">';
    var btnVsb = document.querySelector('#search');
    btnVsb.style.cssText = 'visibility: visible;'
}

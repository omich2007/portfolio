

//Random fonts
var btnStyle = document.querySelector('.btn');
btnStyle.addEventListener('click', randomFont);

function randomFont() {
    var randomSt = document.body;
    var backgrounds =
        ["https://st.depositphotos.com/1018782/4969/v/950/depositphotos_49698733-stock-illustration-ukrainian-ornament.jpg",
            "http://zoohall.com.ua/uploads/posts/2012-06/1340026527_ukrainskii-ornament-6.jpg",
            "http://mtdata.ru/u5/photoC1EB/20306498144-0/original.png"];
    var randFonts = Math.floor(Math.random() * backgrounds.length);

    randomSt.style.cssText ='article{background-image: url("' + backgrounds[randFonts] + '");}'
    // randomSt.style.cssText = 'article {background: url("' + backgrounds[randFonts] + '")}'
}

//Рандомные фразы


var btn  = document.querySelector('.btn');
btn.addEventListener('click', randomQuotes);


function randomQuotes() {
    var quotes = ['Сьогодні зуби лікував, так зараз поїсти нормально не можу. Грошей немає.',
        'Прибиральниці спортивного комплексу, які мили підлогу, не розібралися в ситуації і випадково виграли чемпіонат світу з керлінгу.' ,
        'Переїхав в нову квартиру. Подумав: “Хороша тут чутність?” - Чудова, – відповів сусід з-за стінки.',
        'Якщо вам треба прочитати книгу, але немає бажання, просто віднесіть її в туалет, а далі справа техніки.',
        'Голова ще працює, але вже зі скрипом. Ночами намагаюсь не думати, щоби жінку не збудити.',
        'Якщо послухати жінку, то чоловіки поділяються на дві категорії: розумні, сексуальні, працьовиті, заможні… І її чоловік.',
        'Повішала оберіг над дверима від всілякої нечисти, вийшла до магазину, вернулась…Ключ у дверях зламався… зайти не можу…'];
    var rand = Math.floor(Math.random() * quotes.length);
    var theElement = document.getElementById("message");
    theElement.innerHTML = quotes [rand] ;
}


//Random fonts
var btnStyle = document.querySelector('.btn');
btnStyle.addEventListener('click', randomFont);

var btnStyle = document.querySelector('.btn');
btnStyle.addEventListener('click', randomFont)

function randomFont() {
    var randomSt = document.body;
    var backgrounds =
        ["https://st.depositphotos.com/1018782/4969/v/950/depositphotos_49698733-stock-illustration-ukrainian-ornament.jpg",
            "http://zoohall.com.ua/uploads/posts/2012-06/1340026527_ukrainskii-ornament-6.jpg",
            "http://mtdata.ru/u5/photoC1EB/20306498144-0/original.png"];
    var randFonts = Math.floor(Math.random() * backgrounds.length);
    randomSt.style.cssText = 'background-image: url("' + backgrounds[randFonts] + '")'
}
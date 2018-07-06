

    // polyfill
    window.requestAnimationFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
    
        var speed = 5000;
        (function currencySlide(){
            var currencyPairWidth = $('.slideItem:first-child').outerWidth();
            $(".slideContainer").animate({marginLeft:-currencyPairWidth},speed, 'linear', function(){
                        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
                });
                requestAnimationFrame(currencySlide);
        })();


function showCurrencies() {

    $.ajax({

        url : 'http://localhost/cryptomap/marquee',
        type : 'POST' ,
        success : function(data) {

            let currencies = JSON.parse(data).currencies;
            console.log(currencies);

            currencies.forEach(currency => {

                //console.log(currency)

                let element1 = document.getElementById(currency.symbol +'-1');

                element1.children[2].innerHTML = currency.price
                element1.children[3].innerHTML = currency.percent


                let element2 = document.getElementById(currency.symbol +'-2');

                element2.children[2].innerHTML = currency.price
                element2.children[3].innerHTML = currency.percent

                 if (currency.percent.substr(0, 1) == '-'){
                    element.children[1].style.color = 'red';
                }else{
                    element.children[1].style.color = 'green';
                }
            })

            /*
            currencies.forEach(currency => {

                //console.log(currency)

                let element2 = document.getElementById(currency.symbol +'-2');

                element2.children[2].innerHTML = currency.price
                element2.children[3].innerHTML = currency.percent


                 if (currency.percent.substr(0, 1) == '-'){
                    element.children[1].style.color = 'red';
                }else{
                    element.children[1].style.color = 'green';
                }
            })
            */


        
        } ,
    
    })

}


// setInterval(() => {

//     showCurrencies();

// }, 2000)
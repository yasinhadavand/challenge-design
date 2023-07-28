let num = {value:20};

function increase(num) {
    num++;
}
increase(num);
console.log(num);



function paragraphCh(){
    const  btn = document.querySelector('#btn'),
           plus = document.querySelector('#add'), 
          randomNumber = Math.floor(Math.random() * 100),
          pContent = 'the random number is :' + randomNumber,
          addsome = randomNumber + 10,
          result = addsome;
          
          


    if (result > 10 && result<30) {
        console.log('true')
        document.querySelector('#add').style.fontSize = "50px";
    }else{
        document.querySelector('#add').style.fontSize = "20px";
        document.querySelector('#add').style.color="black";
    }

    console.log(pContent);
            // document.querySelector("#add").style.transition = "all 1s";
            document.querySelector('#add').innerHTML = result;
            document.querySelector('#text').innerHTML = pContent;

}

btn.onclick = paragraphCh;



$(document).ready(function(){

    // setInterval(function(){
    //     $('ul>li:first').appendTo('ul')
    // }, 1000);
    var myset;
    flag = true;
    $('.start').click(function() {
        if (flag) {
            flag=false
            myset = setInterval(function(){
                $('ul>li:first').appendTo('ul')
              }, 1000);  
        }

    })
    $('.stop').click(function() {
        if (myset!='undefined') {
            flag=true;
            clearInterval(myset);
        }
        // clearInterval(time);
    })




})


// --------------------------


// $(function()){

// }
// $("div").css({
//     background:"red"
// })
// $('div').css('background-color','orange');

// $('div').css({
//     backgroundColor:'black',
//     opacity:'0.5',
//     borderRadius:'20px'
// })

// $('.box').css({
//     backgroundColor:'orange',
// })


//$(function({})) 
$(document).ready(function(){
    // $('div').css({
    //     backgroundColor:'black',
    //     opacity:'0.5',
    //     // borderRadius:'10px'
    // })
    // method :first,:last,:even,:odd,:lt(lessthan),:gt(greaterthan),:not(),contains

    // property: ,.prev,.next,.prevAll,.nextAll,.parent,.parentUntil,.addClass,.removeClass,.toggleClass,.attr,.html,
    // .text,.prepend,.prependTo,.append,.appendTo,after,.insertAfter,.before,.insertBefore

    // $('div:eq(2)').css({
    //     backgroundColor:'orange',
    //     opacity:'1',
    // })
    // $('div:not(:eq(1))').css({
    //     backgroundColor:'orange',
    //     opacity:'1',
    // })
    // $('div:contains(b)').css({
    //     fontSize:'20px'
    // })
    // // chaining: who.what.who.what......
    // $('div:eq(2)').prev().prev().css({
    //     backgroundColor:'blue',
    //     opacity:'1'
    //     // TextDecoder:'25px'
    // })
    // $('div:eq(0)').nextAll().css({
    //     backgroundColor:'red',
    //     // disply:'flex'
    // })
    // $('div').parent().css({
    //     backgroundColor:'gray'
    // })

    // $('div').addClass('circle');
    // $('div').removeClass('circle')  
    // $('div').toggleClass('circle')


    // // attrebiute tags:
    // var name='yasin',number=35;
    // a = 18
    // if (a<20) {
    //     $('p').text(number)
    // }else{
    //     $('p').text(name)
    // }

    // $('input').attr('type','checkbox')
    // $('#btn').html(`<span>change</span>`)
    // $('div').prepend('before content ')
    // $('div').prepend('<p>hello</p>')
    // // $('p').text(name)
    // // $('<span>code challeng :</span>').prependTo('p')
    // $('div').append(' after content ');
    // $('<span>fatemeh</span>').appendTo('div').css({
    //     color:'yellow'
    // }).text('shahabi');
    // $('<span>*****</span>').insertBefore('div')
    // $('div:first').insertAfter('div:last')
    let i=0;
    $('.click').click(function(){
        // $('div').removeClass('circle')
        // $(this).toggleClass('circle')
        if(i>=2){
            $('div').removeClass('circle')
            i=0
        }
        $(this).toggleClass('circle')
        i++;
    })
})


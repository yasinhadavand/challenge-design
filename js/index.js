// let num = {value:20};

// function increase(num) {
//     num++;
// }
// increase(num);
// console.log(num);



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
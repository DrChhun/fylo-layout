let error = document.getElementsByClassName('p-e');

let input = Array.from(document.getElementsByClassName('inputE'));

let submit = Array.from(document.getElementsByClassName('btnE'));

for (let i = 0; i < error.length; i++) {
    console.log(error[i].innerHTML);
}

for (let i = 0; i < input.length; i++) {
    console.log(input[i].innerHTML)
}

for (let i = 0; i < submit.length; i++) {
//    btn1[i].style.background = "red";
    console.log(submit[i].innerHTML)
}

submit.forEach(btnE => {
  btnE.addEventListener('click', function () {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(input.value.toLowerCase())) {
        error.style.display = "block";
        input.style.borderColor = "red";
        error.style.color = "red";
      } else {
        input.style.borderColor = "green";
        error.style.display = "none";
      }

      input.value = "";
    });
});


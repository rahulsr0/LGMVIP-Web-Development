// Gallery Js 

var slIndex = 1;
showSlides(slIndex);

function plus(n) {
showSlides(slIndex += n);
}

function current(n) {
showSlides(slIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slides");
var dot = document.getElementsByClassName("demo");
var captionText = document.getElementById("caption");
    if (n > slides.length) { slIndex = 1 }
    if (n < 1) { slIndex = slides.length }
       for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          }
       for (i = 0; i < dot.length; i++) {
          dot[i].className = dot[i].className.replace(" active", "");
          }
    slides[slIndex - 1].style.display = "block";
    dot[slIndex - 1].className += " active";
    captionText.innerHTML = dot[slIndex - 1].alt;
}


// Contact-Form

function fun()
    {
        var isValid =true;
            var txtUser = document.getElementById('user').value;
                var txtMobile = document.getElementById('mobile').value;

                    if(txtUser=="")
                {   document.getElementById('userError').innerText= "Please enter name";
                    isValid =false;
                }
                var mobileReg = /^[0-9]{10}$/
                    if(!mobileReg.test(txtMobile))
                {   document.getElementById('mobileError').innerText= "Please enter a valid mobile number";
                    isValid =false;
                }

                // gender validation 
                var gender = document.querySelectorAll('input[type=radio]')
                var genderSelected=false;
            
                for(var v=0 ; v<gender.length;v++)
                {
                    if(gender[v].checked)
                    {
                        genderSelected=true;
                    }
                }
                if(!genderSelected)
                {   document.getElementById('genderError').innerText= "Please select a Gender";
                    isValid=false;
                }

                return isValid;
                }

    // Map

function initMap() {
    const raj = { lat: 26.9529, lng: 77.7735 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: raj,
    });
    const marker = new google.maps.Marker({
        position: raj,
        map: map,
    });
}





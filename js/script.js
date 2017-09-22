function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    // random images script
    function randomImg1() {
        $('#find').prop('disabled', true);
        $("#load").fadeIn();
        setTimeout(function(){
            var myImage1 = new Array();
            myImage1[0] = "images/blackbird.png";// "Bush.jpg";
            myImage1[1] = "images/question-mark-face.jpg";// "RiffRaff.jpg";
            myImage1[2] = "images/question-mark.png";// "FredPellerin.jpg";
            myImage1[3] = "images/question-mark.png";
            myImage1[4] = "images/question-mark.png";
            myImage1[5] = "images/question-mark.png";
            myImage1[6] = "images/question-mark.png";
            myImage1[7] = "images/question-mark.png";
            myImage1[8] = "images/question-mark.png";
            myImage1[9] = "images/question-mark.png";
            myImage1[10] = "images/question-mark.png";
            myImage1[11] = "images/question-mark.png";
            myImage1[12] = "images/question-mark.png";
            var random = Math.floor(Math.random() * myImage1.length);
            document.getElementById("image").innerHTML = "<img src='" 
              + myImage1[random] + "' alt='image'></img>";
        }, 5000);
    
  }

  // lotta trolling script
   $(function(){
    $('#checkbox').click(function(){
        $(".lotta").fadeToggle();
    });
});
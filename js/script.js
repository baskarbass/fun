// $('#find').prop('disabled', true);
function readURL(input) {
        $('#find').prop('disabled', false);
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
            myImage1[0] = "images/aarthi.jpg";// "Bush.jpg";
            myImage1[1] = "images/anshika.jpg";// "RiffRaff.jpg";
            myImage1[2] = "images/gayathri.jpg";// "FredPellerin.jpg";
            myImage1[3] = "images/jenilia.jpg";
            myImage1[4] = "images/julie.jpg";
            myImage1[5] = "images/julie2.jpg";
            myImage1[6] = "images/lakshmimenan.jpg";
            myImage1[7] = "images/nayan.jpg";
            myImage1[8] = "images/nazriya.jpg";
            myImage1[9] = "images/oviya.jpg";
            myImage1[10] = "images/pooja.jpg";
            myImage1[11] = "images/pooja2.jpg";
            myImage1[12] = "images/pooja3.jpg";
            myImage1[12] = "images/roy.jpg";
            myImage1[12] = "images/samantha.jpg";
            myImage1[12] = "images/thirisha.jpg";
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
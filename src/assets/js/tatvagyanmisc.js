$("#submitForm").click(function (e) {
    //console.log($('#sendEmail').valid());
    e.preventDefault();
    var formValid = $('#sendEmail').valid();
    if (formValid == true) {
        var dataString = $("#sendEmail").serialize();
        //console.log(dataString);

        $.ajax({
            type: "POST",
            url: "email.php",
            data: dataString,
            success: function (msg) {
                console.log(dataString);
                console.log(msg);
                if (msg == 'true') {
                    //$('#formContainer').show();
                    $('#formContainer').html('<div class="alert alert-info">Thank You! We have received your message. Our team will contact you soon.</div>');
                    alertTimeout(20000); //and here
                    $('#username, #email, #mobile, #message').val('');
                }
                if (msg == 'false') {
                    $('#formContainer').html('<div class="alert alert-danger">Oops! There seems to be some server error. Your message is very important for us. Please try again in some time. You can also email us at <a>info@tatvagyan.in</a></div>');
                    alertTimeout(40000);
                }
            }

        });
    }


});
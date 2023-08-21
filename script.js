$(document).ready(function () {
    $("#contact-form").submit(function (event) {
        event.preventDefault(); 
        
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            mobile: $("#mobile").val(),
            meta: "meta data here"
        };
        
        $.ajax({
            type: "POST",
            url: "https://api.propacity.in/api/v1/webhooks/integration/794d3601-ec97-454f-a3b8-6c5961ff8da8/insertLead",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                if (response.success) {
                    $("#form-message").html("Form submitted successfully!");
                    $("#contact-form")[0].reset(); //--After submit reset the form
                } else {
                    $("#form-message").html("Error submitting form.");
                }
            },
            error: function (error) {
                $("#form-message").html("Error submitting form.");
            }
        });
    });
});

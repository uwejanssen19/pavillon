$(document).ready(function () {
    $.validator.methods.email = function (value, element) {
        return this.optional(element) || /[a-z]+@[a-zA-Z_-]+\.[a-zA-Z]+/.test(value);
    };

    function enable_submit_button(value) {
        if (value) {
            $('#contact_submit').prop('disabled', false);
            $("#contact_submit").css({'background-color': 'lightgreen', 'width': '15%'});
        } else {
            $('#contact_submit').prop('disabled', 'disabled');
            $("#contact_submit").css({'background-color': 'coral', 'width': '15%'});
        }
    }
    function set_submit_button() {
        enable_submit_button($("#contact-form").valid());
    }
    enable_submit_button(false);

    $('input').on('blur keyup mouseleave', function () {
        set_submit_button();
    });
    //$("#contact-form :blank").css("border-color","red"); 
    /*
     $( "#jform_contact_name" ).rules( "add", {
     required: true,
     minlength: 2,
     messages: {
     required: "Required input",
     minlength: jQuery.validator.format("Mindestens {0} Zeichen sind erforderlich")
     }
     });
     $( "#jform_contact_email" ).rules( "add", {
     required: true,
     email: true,
     messages: {
     required: "Required input",
     email: jQuery.validator.format("Bitte eine gültige E-Mail Adresse eingeben")
     }
     });
     $( "#jform_contact_email_subject" ).rules( "add", {
     required: true,
     minlength: 2,
     messages: {
     required: "Required input",
     minlength: jQuery.validator.format("Mindestens {0} Zeichen sind erforderlich")
     }
     });
     */
//     $( "contact_name" ).rules( "add", {
//     required: true,
//     minlength: 5,
//     messages: {
//     required: "Required input",
//     minlength: jQuery.validator.format("Mindestens {0} Zeichen sind erforderlich")
//     }
//     });
//     
     
    $('#contact_submit').on('hover focus mouseover', function () {
        set_submit_button();
    });

    $("#contact-form").validate(
            {
                submitHandler: function (form) {
                    from = $('#jform_contact_email').val();
                    alert("Die Nachricht von " + from + " wurde an Schreibwaren-Pavillon gesendet");
                    form.submit();
                    //$('#message_field').html(" Die Nachricht von " + from + "wurde an Schreibwaren-Pavillon gesendet").fadeOut(now);
                }
            }
    );

});
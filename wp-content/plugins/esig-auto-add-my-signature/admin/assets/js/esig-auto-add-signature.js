(function ($) {

    "use strict";
    //when auto add my signature checked
    $('input[name="add_signature"]').on('change', function () {
        if ($('input[name="add_signature"]').attr('checked')) {
           
            // show tb window of admin signature view
            tb_show('+Terms Of Use','#TB_inline?height=350&inlineId=esig-auto-add-signature-popup');
            esign.tbSize();
            // check mark false untill user click in agree and sign
            $('input[name="add_signature"]').prop('checked', false);

            $('#esig-auto-add-signature-popup').hide();

            $('#esig-terms-condition').show();

            return false;
        }
    });

    $('body').on('click', '#esig-auto-add-confirm', function () {

        if ($('input[name="esign-add-auto-agree"]').attr('checked')) {
            tb_remove();
            $('input[name="add_signature"]').prop('checked', true);
            return true;
        }
        else {
            tb_remove();
            $('input[name="add_signature"]').prop('checked', false);
            return false;
        }

    });

    $('body').on('click', '#esign-goback', function () {

         $('#esign-terms-goback').hide();
        
         $('#esign-terms-content').hide();
        $('#esig-terms-condition').hide();
        $('#auto-add-esign-popup').show();
        $('#esig-terms-condition').hide();
    });

  


    // terms of use 
    // click terms of service . 
    $('body').on('click', '#esig-terms', function (e) {

       e.preventDefault();
        

        jQuery.ajax({
            type: "POST",
            url: esigAjax.ajaxurl + "?action=wp_e_signature_ajax&className=WP_E_Common&method=esig_get_terms_conditions",
            success: function (data, status, jqXHR) {
                $('#esig-terms-condition').show();
                $('#esign-terms-goback').show();
                $('#auto-add-esign-popup').hide();
                
                $('#esign-terms-content').show();
                $('#esign-terms-content').html(data);
                 tb_show('+Terms Of Use','#TB_inline?inlineId=esig-terms-condition');
                 esign.tbResize();
            },
            error: function (xhr, status, error) {
               
                $('.esig-terms-modal-lg .modal-body').html('<h1>No internet connection</h1>');
            }
        });

    });




} (jQuery));
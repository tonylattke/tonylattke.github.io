// Current option
var current_op = "#menu_mail";

function changeEmailInfo (name,email,text) {
  $("#email_name").attr("placeholder", name);
  $("#email_email").attr("placeholder", email);
  $("#email_text").attr("placeholder", text);
}

$(document).ready(function(){

  // Go to the top
  $('#go-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });

  /***************************************************************************/
  /*************************** Options Controller ****************************/
  /***************************************************************************/

  // Mail
  $("#op_mail").click(function(e) {
    $(current_op).hide();
    current_op = "#menu_mail";
    $("#menu_mail").show();
  });

  // Twitter
  $("#op_twitter").click(function(e) {
    $(current_op).hide();
    current_op = "#menu_twitter";
    $("#menu_twitter").show();
  });

  // Linkedin
  $("#op_ln").click(function(e) {
    $(current_op).hide();
    current_op = "#menu_ln";
    $("#menu_ln").show();
  });

  // Facebook
  $("#op_fb").click(function(e) {
    $(current_op).hide();
    current_op = "#menu_fb";
    $("#menu_fb").show();
  });

  // Curriclum Vitae
  $("#op_cv").click(function(e) {
    $(current_op).hide();
    current_op = "#menu_cv";
    $("#menu_cv").show();
  });

  // Github
  $("#op_git").click(function(e) {
    $(current_op).hide();
    current_op = "#menu_git";
    $("#menu_git").show();
  });

  // About me
  $("#op_me").click(function(e) {
    $(current_op).hide();
    current_op = "#menu_me";
    $("#menu_me").show();
  });

  // Blog
  $("#op_blog").click(function(e) {
    $(current_op).hide();
    current_op = "#menu_blog";
    $("#menu_blog").show();
  });

  /***************************************************************************/
  /**************************** Language Controller **************************/
  /***************************************************************************/

  // German
  $("#german").click(function(e) {
    showOnly("de");

    $("#html-tony").attr("lang", "de");

    changeEmailInfo("Name", "Email Adresse", "Nachricht");
  });

  // English
  $("#english").click(function(e) {
    showOnly("en");

    $("#html-tony").attr("lang", "en");

    changeEmailInfo("Name", "Email", "Message");
  });

  // Spanish
  $("#spanish").click(function(e) {
    showOnly("es");

    $("#html-tony").attr("lang", "es");

    changeEmailInfo("Nombre","Correo electrónico","Texto");
  });

  
  /***************************************************************************/
  /***************************** Email Controller ****************************/
  /***************************************************************************/

  $("#email_send").click(function(e) {
    // Initialize error message
    var error_msg_de = "Fehler:\n";
    var error_msg_en = "Error:\n";
    var error_msg_es = "Error:\n";

    var status_err= false;

    // Extract values
    var name_val  = $("#email_name").val();
    var email_val = $("#email_email").val();
    var msg_val   = $("#email_text").val();

    // Validations
    if (!isName(name_val)) {
      status_err = true;

      error_msg_de += " - Kein Name\n";
      error_msg_en += " - No name\n";
      error_msg_es += " - No hay nombre\n";
    }
    if (!isEmail(email_val)){
      status_err = true;

      error_msg_de += " - Keine gültige E-Mail\n";
      error_msg_en += " - No valid E-Mail\n";
      error_msg_es += " - Correo electrónico no válido\n";
    }
    if (!isMsg(msg_val)) {
      status_err = true;

      error_msg_de += " - Kein Nachricht\n";
      error_msg_en += " - No message\n";
      error_msg_es += " - No hay mensaje\n";
    }

    if (status_err){
      // German
      if ($("#html-tony").attr("lang") == "de") {
        alert(error_msg_de);
      } 
      // English
      if ($("#html-tony").attr("lang") == "en") {
        alert(error_msg_en);
      } 
      // Spanish
      if ($("#html-tony").attr("lang") == "es") {
        alert(error_msg_es);
      }
    } else {
      $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': '3ElXq5-qhNALFFOb7BLFrg',
          'message': {
            'from_email': 'tonylattke@hotmail.com',
            'to': [
                {
                  'email': 'tonylattke@gmail.com',
                  'name': email_val,
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': 'Website - from: ' + email_val,
            'html': "Name: " + name_val + " - Message: " + msg_val
          }
        }
      }).done(function(response) {
        // German
        if ($("#html-tony").attr("lang") == "de") {
          alert("Vielen dank für Ihnen Nachricht " + name_val + "!");
        } 
        // English
        else if ($("#html-tony").attr("lang") == "en") {
          alert("Thank you for your message " + name_val + "!");
        } 
        // Spanish
        else {
          alert("Muchas gracias por su mensaje " + name_val + "!");
        }

        // Clear information
        $("#email_name").val("");
        $("#email_email").val("");
        $("#email_text").val("");
      });
    }
  });

  /***************************************************************************/
  /***************************** Default Options *****************************/
  /***************************************************************************/

  // Start
  $("#menu_twitter").hide();
  $("#menu_fb").hide();
  $("#menu_cv").hide();
  $("#menu_blog").hide();
  $("#menu_me").hide();
  $("#menu_git").hide();
  $("#menu_ln").hide();

  // Default language
  showOnly("de");

});
// Current option
var current_op = "#menu_mail";

function changeEmailInfo (name,email,text) {
  $("#email_name").attr("placeholder", name);
  $("#email_email").attr("placeholder", email);
  $("#email_text").attr("placeholder", text);
}

$(document).ready(function(){

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
                'name': $("#email_name").val(),
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Website - from: ' + $("#email_email").val(),
          'html': "Name: " + $("#email_name").val() + " - Message: " + $("#email_text").val()
        }
      }
    }).done(function(response) {
      // German
      if ($("#html-tony").attr("lang") == "de") {
        alert("Vielen dank!");
      } 
      // English
      else if ($("#html-tony").attr("lang") == "en") {
        alert("Thank you!");
      } 
      // Spanish
      else {
        alert("Muchas gracias!");
      }

      $("#email_name").val("");
      $("#email_email").val("");
      $("#email_text").val("");
    });
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
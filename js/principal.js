$(function() {

  

  // $("a[data-toggle=\"tab\"]").click(function(e) {
  //   e.preventDefault();
  //   $(this).tab("show");
  // });
});


$("#ver_mas_acerca").click(function(e) {
  e.preventDefault();
  if($('#div_ver_mas_acerca').is(":visible")){
    $("#div_ver_mas_acerca").fadeOut("slow");
    $(this).html('Ver más...');
  }else{
    $("#div_ver_mas_acerca").fadeIn("slow");
    $(this).html('Ver menos...');
  }
  
});


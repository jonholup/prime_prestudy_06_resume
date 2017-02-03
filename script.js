$(document).ready(function(){
  $("button").click(function(){
    $("#container").toggle();
    $(this).text(function(i, v){
   return v === 'Press On' ? 'Press Off' : 'Press On'
})
});
});

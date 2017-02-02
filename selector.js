$(document).on("change","input[type=checkbox]",function(){ 
  $(this).next().find('input[type=checkbox]').prop('checked',this.checked);
    $(this).parents('ul').prev('input[type=checkbox]').prop('checked',function(){
     return $(this).next().find(':checked').length;
    });
});
$(document).ready(function(){
     $(".add").click(function(){
        $(".inner").append("<div id='abc'><input type='search'><button>browse</button>&nbsp<select><option>secondary image</option></select>&nbsp&nbsp<a id='remove'>remove</a></div></div>");
    });
  $(document).on("click","#remove",function(){
    $("#abc").remove();
  });
});

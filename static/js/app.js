
$( document ).ready(function() {
   
   $("button").click(function(){
      if($(this).text()=='Nạp momo'){
          $('#napmomo').show()
          $('#napthegame').hide()
          $('#napnganhang').hide()
      }
      else if($(this).text()=='Thẻ game'){
        $('#napmomo').hide()
        $('#napthegame').show()
        $('#napnganhang').hide()
      }
      else{
        $('#napmomo').hide()
        $('#napthegame').hide()
        $('#napnganhang').show()
      }
   })
})

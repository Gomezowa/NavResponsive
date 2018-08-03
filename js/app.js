$(function(){
    console.log('read Jquery');
    //je clic la classe shox dans le CSS en display block//
    //on ajoute la class show à UL//
    $('#bt_menu').click(function(){
        console.log('OK');
        $('#banane ul').toggleClass('show');
    });
});
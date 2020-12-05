$(document).ready(function() {

    // toggle sidebar    
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // pagination text 
    $('#DataTables_Table_0_previous a').html("السابق");
    $('#DataTables_Table_0_next a').html("التالي");

    // dark mode 
    $('.switch').on('change', function() {
        console.log('yeah')
        $('body, h5.title-with-border, .form-holder, nav.navbar.bg-white, table.table, #sidebar-wrapper').toggleClass('dark-mode')
    })
})
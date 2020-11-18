$(document).ready(function() {

    // toggle sidebar    
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // chart 
    $('.chart').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 10,
        lineCap: 'butt',
        barColor: '#51CEC2',
        trackColor: "#ecf0f1",
        size: 120,
        animate: 500
    });

    $('.chart2').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 10,
        lineCap: 'butt',
        barColor: '#F65E5D',
        trackColor: "#ecf0f1",
        size: 120,
        animate: 500
    });
    $('.chart3').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 10,
        lineCap: 'butt',
        barColor: '#7FD355',
        trackColor: "#ecf0f1",
        size: 120,
        animate: 500
    });

    // progress animation 
    $(".meter > span").each(function() {
        $(this)
            .data("origWidth", $(this).width())
            .width(0)
            .animate({
                width: $(this).data("origWidth") // or + "%" if fluid
            }, 1200);
    });

    // country code 

})

$(document).ready(function() {
    $('#DataTables_Table_0_previous a').html("السابق");
    $('#DataTables_Table_0_next a').html("التالي");

})
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



})
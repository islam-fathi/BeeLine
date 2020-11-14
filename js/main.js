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

    // datatables
    var customersData = [
        ["1234", ['<img src="images/user.jpg" width="30px" class="profile_pic rounded-circle mx-1" style="border: 2px solid #fff;">',
                'أسامة عسكر'
            ],
            ['<img src="icons/kwait.svg" width="30px" class="profile_pic mx-1">', "+201234567890"],
            "info@website.com",
            '<i class="fas fa-check text-success"></i>',
            '<button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #6788FF;"><i class="fas fa-pen mx-1"></i>تعديل</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FF9391;"><i class="fas fa-trash mx-1"></i>حذف</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FC7438;"><i class="fas fa-lock mx-1"></i>حظر</button>'
        ],
        ["1234", ['<img src="images/user.jpg" width="30px" class="profile_pic rounded-circle mx-1" style="border: 2px solid #fff;">',
                'احمد عسكر'
            ],
            ['<img src="icons/kwait.svg" width="30px" class="profile_pic mx-1">', "+201234567890"],
            "info@website.com",
            '<i class="fas fa-check text-success"></i>',
            '<button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #6788FF;"><i class="fas fa-pen mx-1"></i>تعديل</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FF9391;"><i class="fas fa-trash mx-1"></i>حذف</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FC7438;"><i class="fas fa-lock mx-1"></i>حظر</button>'
        ],
        ["1234", ['<img src="images/user.jpg" width="30px" class="profile_pic rounded-circle mx-1" style="border: 2px solid #fff;">',
                'أسامة عسكر'
            ],
            ['<img src="icons/kwait.svg" width="30px" class="profile_pic mx-1">', "+201234567890"],
            "info@website.com",
            '<i class="fas fa-times text-danger"></i>',
            '<button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #6788FF;"><i class="fas fa-pen mx-1"></i>تعديل</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FF9391;"><i class="fas fa-trash mx-1"></i>حذف</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FC7438;"><i class="fas fa-lock mx-1"></i>حظر</button>'
        ],

    ]
    $('#example').DataTable({

        "scrollCollapse": true,
        "scrollX": true,
        data: customersData,
        columns: [
            { title: "ID" },
            { title: "اسم العميل" },
            { title: "رقم الجوال" },
            { title: "البريد الالكتروني" },
            { title: "صاحب مشروع" },
            { title: "" }
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json"
        }
    });


})

$(document).ready(function() {
    $('#DataTables_Table_0_previous a').html("السابق");
    $('#DataTables_Table_0_next a').html("التالي");

})
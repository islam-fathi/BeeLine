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

    // agents DataTable 
    var agentData = [
        ["1234", ['<img src="images/user.jpg" width="30px" class="profile_pic rounded-circle mx-1" style="border: 2px solid #fff;">',
                'أسامة عسكر'
            ],
            ['<img src="icons/kwait.svg" width="30px" class="profile_pic mx-1">', "+201234567890"],
            '<i class="fas fa-check text-success"></i>',
            'لانسر',
            2020,
            1234567899,
            '<i class="fas fa-check text-success"></i>',
            '2-9-2020',
            '2-9-2020',
            '<i class="fas fa-check text-success"></i>',
            '<button class="small btn-sm btn-primary mx-1 mb-1 bg-transparent border-0" style="color: #6788FF;"><i class="fas fa-pen mx-1"></i></button><button class="small btn-sm btn-primary mx-1 mb-1 bg-transparent border-0" style="color: #FF9391;"><i class="fas fa-trash mx-1"></i></button><button class="small btn-sm btn-primary mx-1 mb-1 bg-transparent border-0" style="color: #FC7438;"><i class="fas fa-lock mx-1"></i></button>'
        ],
    ]
    $('#agent').DataTable({

        "scrollCollapse": true,
        "scrollX": true,
        data: agentData,
        columns: [
            { title: "ID" },
            { title: "اسم المندوب" },
            { title: "رقم الجوال" },
            { title: "مالك لسيارة" },
            { title: "نوع السيارة" },
            { title: "الموديل" },
            { title: "الرقم المدني" },
            { title: "القيادة" },
            { title: "تاريخ انتهاء الرخصة" },
            { title: "تاريخ انتهاء الاقامة" },
            { title: "تفعيل المندوب" },
            { title: " " }
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json"
        }
    });

    // users table 
    var usersData = [
        ["1234", ['<img src="images/user.jpg" width="30px" class="profile_pic rounded-circle mx-1" style="border: 2px solid #fff;">',
                'أسامة عسكر'
            ],
            ['<img src="icons/kwait.svg" width="30px" class="profile_pic mx-1">', "+201234567890"],
            "info@website.com",
            'مدير',
            '<button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #6788FF;"><i class="fas fa-pen mx-1"></i>تعديل</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FF9391;"><i class="fas fa-trash mx-1"></i>حذف</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FC7438;"><i class="fas fa-lock mx-1"></i>حظر</button>'
        ]
    ];
    $('#usersTable').DataTable({

        "scrollCollapse": true,
        "scrollX": true,
        data: usersData,
        columns: [
            { title: "ID" },
            { title: "اسم المستخدم" },
            { title: "رقم الجوال" },
            { title: "البريد الالكتروني" },
            { title: "الصلاحية" },
            { title: "" }
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json"
        }
    });

    // orders table 
    var ordersData = [
        ["1234",
            "توصيل ساعات",
            "2-9-2020",
            "الكويت-عمران-برج البترول", ['<img src="icons/kwait.svg" width="30px" class="profile_pic mx-1">', "+201234567890"],
            "20 دينار",
            'حسام محمود',
            "5 دينار",
            '<i class="fas fa-check text-success"></i>',
            '3:40 AM',
            '<button class="small text-white btn-sm btn-primary border-0 text-center" style="background-color: #6788FF;width:90px;">تم التوصيل </button>',
            '<button class="small btn-sm border-0 mx-1 bg-transparent" style="color: #6788FF;"><i class="fas fa-pen mx-1"></i></button><button class="small btn-sm border-0 mx-1 bg-transparent" style="color: #FF9391;"><i class="fas fa-trash mx-1"></i></button>'
        ],
        ["1234",
            "توصيل ساعات",
            "2-9-2020",
            "الكويت-عمران-برج البترول", ['<img src="icons/kwait.svg" width="30px" class="profile_pic mx-1">', "+201234567890"],
            "20 دينار",
            'حسام محمود',
            "5 دينار",
            '<i class="fas fa-check text-success"></i>',
            '3:40 AM',
            '<button class="small text-white btn-sm btn-primary border-0 text-center" style="background-color: #EF476F;width:90px;">ملغي </button>',
            '<button class="small btn-sm border-0 mx-1 bg-transparent" style="color: #6788FF;"><i class="fas fa-pen mx-1"></i></button><button class="small btn-sm border-0 mx-1 bg-transparent" style="color: #FF9391;"><i class="fas fa-trash mx-1"></i></button>'
        ],
        ["1234",
            "توصيل ساعات",
            "2-9-2020",
            "الكويت-عمران-برج البترول", ['<img src="icons/kwait.svg" width="30px" class="profile_pic mx-1">', "+201234567890"],
            "20 دينار",
            'حسام محمود',
            "5 دينار",
            '<i class="fas fa-check text-success"></i>',
            '3:40 AM',
            '<button class="small text-white btn-sm btn-primary border-0 text-center" style="background-color: #34334A; width:90px;">مرتجع </button>',
            '<button class="small btn-sm border-0 mx-1 bg-transparent" style="color: #6788FF;"><i class="fas fa-pen mx-1"></i></button><button class="small btn-sm border-0 mx-1 bg-transparent" style="color: #FF9391;"><i class="fas fa-trash mx-1"></i></button>'
        ]
    ];
    $('#ordersTable').DataTable({

        "scrollCollapse": true,
        "scrollX": true,
        data: ordersData,
        columns: [
            { title: "ID" },
            { title: "وصف الطلب" },
            { title: "تاريخ الطلب" },
            { title: "عنوان الطلب" },
            { title: "رقم هاتف المستلم" },
            { title: "السعر" },
            { title: "اسم المندوب" },
            { title: "سعر التوصيل" },
            { title: "مدفوع مسبقا" },
            { title: "وقت وصول الطلب" },
            { title: "حالة الطلب" },
            { title: " " }

        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json"
        }
    });

    // permessions table 

    var permessionsData = [
        ["1234", ['<img src="images/user.jpg" width="30px" class="profile_pic rounded-circle mx-1" style="border: 2px solid #fff;">',
                'أسامة عسكر'
            ],
            ['<img src="icons/kwait.svg" width="30px" class="profile_pic mx-1">', "+201234567890"],
            "info@website.com",
            'محاسب',
            '<button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #6788FF;"><i class="fas fa-pen mx-1"></i>تعديل</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FF9391;"><i class="fas fa-trash mx-1"></i>حذف</button><button class="small text-white btn-sm btn-primary border-0 mx-1 mb-1 " style="background-color: #FC7438;"><i class="fas fa-lock mx-1"></i>حظر</button>'
        ]
    ];
    $('#permessionsTable').DataTable({
        "paging": false,
        "scrollCollapse": true,
        "scrollX": true,
        data: permessionsData,
        columns: [
            { title: "ID" },
            { title: "الاسم" },
            { title: "رقم الجوال" },
            { title: "الصلاحية" },
            { title: "" }
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json"
        }
    });

    // prices table 
    var pricesData = [
        ["سوهاج",
            'طهطا',
            'قريبة',
            '2 دينار',
            '3 دينار',
            '3 دينار',
            '<button class="small btn-sm btn-primary mx-1 mb-1 bg-transparent border-0" style="color: #6788FF;"><i class="fas fa-pen mx-1"></i></button><button class="small btn-sm btn-primary mx-1 mb-1 bg-transparent border-0" style="color: #FF9391;"><i class="fas fa-trash mx-1"></i></button>'
        ]
    ];
    $('#pricesTable').DataTable({
        "scrollCollapse": true,
        "scrollX": true,
        dom: 'Bfrtip',
        "searching": true,
        "lengthMenu": [10, 25, 50, "All"],
        buttons: [
            'excelHtml5',
            'pdfHtml5'
        ],
        data: pricesData,
        columns: [
            { title: "المحافظة" },
            { title: "المنطقة" },
            { title: "الفئة" },
            { title: "الداخلية" },
            { title: "الخارجية" },
            { title: "البعيدة" },
            { title: "" }
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Arabic.json"
        }
    });

})
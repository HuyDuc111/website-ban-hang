let items = [
    {
        "name" : "Samsung Galaxy Note 20 Ultra",
        "price" : 10000000,
        "brand": "Samsung",
        "image": "./data/itemsData/product1.jpg",
        "info": {
            "Monitor" :"Dynamic AMOLED 2X, 6.9', Quad HD+ (2K+)",
            "OS" : "Android 10",
            "BackCamera" : "Chính 108 MP & Phụ 12 MP, 12 MP, cảm biến Laser AF",
            "FrontCamera" : "10 MP",
            "CPU" : "Exynos 990 8 nhân",
            "RAM" : "8 GB",
            "Internal memory" : "256 GB",
            "StorageCard":	"MicroSD, hỗ trợ tối đa 1 TB",
            "SIMCard": "2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 4G",
            "Battery":	"4500 mAh, có sạc nhanh"
        },
        "moreInfo":["Giảm giá 5,000,000đ qua quà tặng Galaxy", "Giảm giá 3,000,000đ khi tham gia thu cũ đổi mới Note 20 Series", "Ưu đãi phòng chờ thương gia", "Trả góp 0% thẻ tín dụng", "Tặng suất mua Đồng hồ Samsung Active 2 giảm 35% (riêng Active 2 nhôm 40mm giảm 900.000đ), Watch 3 giảm 25% (không kèm KM khác)", "Pin sạc dự phòng giảm 30% khi mua kèm."]
    },
    {
        "name":"iPhone 11 64GB",
        "price": 15990000,
        "brand" : "IPhone",
        "image" :"./data/itemsData/product2.jpg",
        "info" : {
            "Monitor" : "IPS LCD, 6.1', Liquid Retina",
            "OS" : "iOS 13",
            "BackCamera" :"	Chính 12 MP & Phụ 12 MP",
            "FrontCamera" : "12 MP",
            "CPU":	"Apple A13 Bionic 6 nhân",
            "RAM": "4 GB",
            "StorageCard": "64 GB",
            "SIMCard" :"1 Nano SIM & 1 eSIM, Hỗ trợ 4G",
            "Battery" :"3110 mAh, có sạc nhanh"
        },
        "moreInfo" :["Giảm giá 1,500,000đ", "Mua online thêm quà: Giảm giá 500,000đ (Không áp dụng kèm Thu cũ đổi mới)", "Giảm giá 1,000,000đ khi tham gia thu cũ đổi mới", "Pin sạc dự phòng giảm 30% khi mua kèm."]
    },
    {
        "name": "OPPO A93",
        "price": 7490000,
        "brand": "OPPO",
        "image" : "./data/itemsData/product3.jpg",
        "info": {
            "Monitor": "AMOLED, 6.43', Full HD+",
            "OS": "	Android 10",
            "BackCamera": "	Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP",
            "FrontCamera": "Chính 16 MP & Phụ 2 MP",
            "CPU":	"MediaTek Helio P95 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"128 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "4000 mAh, có sạc nhanh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm."]
    },    
    {
        "name": "Điện thoại iPhone 11 Pro 256GB",
        "price": 31990000,
        "brand": "IPhone",
        "image" : "./data/itemsData/product4.jpg",
        "info": {
            "Monitor": "OLED, 5.8', Super Retina XDR",
            "OS": "iOS 13",
            "BackCamera": "3 camera 12 MP",
            "FrontCamera": "12 MP",
            "CPU":	"Apple A13 Bionic 6 nhân",
            "RAM": "4 GB",
            "StoreCard":"256 GB",
            "SIMCard": "1 Nano SIM & 1 eSIM, Hỗ trợ 4G",
            "Battery": "3046 mAh, có sạc nhanh"
        },
        "moreInfo":["Giảm giá 2,000,000đ","Giảm giá 2,000,000đ khi tham gia thu cũ đổi mới","Pin sạc dự phòng giảm 30% khi mua kèm","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại iPhone 8 Plus 128GB",
        "price": 14990000,
        "brand": "IPhone",
        "image" : "./data/itemsData/product5.jpg",
        "info": {
            "Monitor": "LED-backlit IPS LCD, 5.5', Retina HD",
            "OS": "iOS 13",
            "BackCamera": "2 camera 12 MP",
            "FrontCamera": "7 MP",
            "CPU":	"Apple A11 Bionic 6 nhân",
            "RAM": "3 GB",
            "StoreCard":"128 GB",
            "SIMCard": "1 Nano SIM, Hỗ trợ 4G",
            "Battery": "2691 mAh, có sạc nhanh"
        },
        "moreInfo":["Giảm giá 1,000,000đ","Giảm giá 1,000,000đ khi tham gia thu cũ đổi mới","Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
},
 {
        "name": "Điện thoại iPhone SE 128GB (2020)",
        "price": 14990000,
        "brand": "IPhone",
        "image" : "./data/itemsData/product6.jpg",
        "info": {
            "Monitor": "IPS LCD, 4.7'",
            "OS": "iOS 13",
            "BackCamera": "12 MP",
            "FrontCamera": "7 MP",
            "CPU":	"Apple A13 Bionic 6 nhân",
            "RAM": "3 GB",
            "StoreCard":"128 GB",
            "SIMCard": "1 Nano SIM & 1 eSIM, Hỗ trợ 4G",
            "Battery": "1821 mAh, có sạc nhanh"
        },
        "moreInfo":["Giảm giá 1,500,000đ","Giảm giá 1,000,000đ khi tham gia thu cũ đổi mới","Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại iPhone 11 Pro Max 64GB",
        "price": 30990000,
        "brand": "IPhone",
        "image" : "./data/itemsData/product7.jpg",
        "info": {
            "Monitor": "OLED, 6.5', Super Retina XDR",
            "OS": "iOS 13",
            "BackCamera": "3 camera 12 MP",
            "FrontCamera": "12 MP",
            "CPU":	"Apple A13 Bionic 6 nhân",
            "RAM": "4 GB",
            "StoreCard":"64 GB",
            "SIMCard": "1 Nano SIM & 1 eSIM, Hỗ trợ 4G",
            "Battery": "3969 mAh, có sạc nhanh"
        },
        "moreInfo":["Giảm giá 2,000,000đ","Giảm giá 2,000,000đ khi tham gia thu cũ đổi mới","Pin sạc dự phòng giảm 30% khi mua kèm.","Pin sạc dự phòng giảm 30% khi mua kèm."]
    },
 {
        "name": "Điện thoại Samsung Galaxy Z Flip",
        "price": 36000000,
        "brand": "SamSung",
        "image" : "./data/itemsData/product8.jpg",
        "info": {
            "Monitor": "Chính: Dynamic AMOLED, Phụ: Super AMOLED, 6.7', Quad HD (2K)",
            "OS": "Android 10",
            "BackCamera": "2 camera 12 MP",
            "FrontCamera": "10 MP",
            "CPU":	"Snapdragon 855+ 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"256 GB",
            "SIMCard": "1 Nano SIM & 1 eSIM, Hỗ trợ 4G",
            "Battery": "3300 mAh, có sạc nhanh"
        },
        "moreInfo":["Giảm giá 7,000,000đ","Trả góp 0% thẻ tín dụng","Thu cũ đổi mới - Lên đời tuyệt tác","Tặng suất mua Đồng hồ Samsung Active 2 giảm 35% (riêng Active 2 nhôm 40mm giảm 900.000đ), Watch 3 giảm 25% (không kèm KM khác).","Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại Samsung Galaxy Z Fold2 5G",
        "price": 50000000,
        "brand": "SamSung",
        "image" : "./data/itemsData/product9.jpg",
        "info": {
            "Monitor": "Chính: Dynamic AMOLED, Phụ: Super AMOLED, Chính 7.59' & Phụ 6.23', Full HD+",
            "OS": "Android 10",
            "BackCamera": "3 camera 12 MP",
            "FrontCamera": "10 MP",
            "CPU":	"Snapdragon 865+ 8 nhân",
            "RAM": "12 GB",
            "StoreCard":"256 GB",
            "SIMCard": "1 Nano SIM & 1 eSIM, Hỗ trợ 5G",
            "Battery": "4500 mAh, có sạc nhanh"
        },
        "moreInfo":["Thu cũ đổi mới - Lên đời tuyệt tác","Ưu đãi Galaxy Z Elite qua quà tặng Galaxy", "Gói bảo hành mở rộng Samsung Care+", "Ưu đãi phòng chờ thương gia","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác "]
    },
 {
        "name": "Điện thoại Samsung Galaxy S20+",
        "price": 23990000,
        "brand": "SamSung",
        "image" : "./data/itemsData/product10.jpg",
        "info": {
            "Monitor": "Dynamic AMOLED 2X, 6.7', Quad HD+ (2K+)",
            "OS": "Android 10",
            "BackCamera": "Chính 12 MP & Phụ 64 MP, 12 MP, TOF 3D",
            "FrontCamera": "10 MP",
            "CPU":	"Exynos 990 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"128 GB",
            "SIMCard": "2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 4G",
            "Battery": "4500 mAh, có sạc nhanh"
        },
        "moreInfo":["Trả góp 0% thẻ tín dụng","Thu cũ đổi mới - Lên đời Samsung sành điệu","ặng suất mua Đồng hồ Samsung Active 2 giảm 35% (riêng Active 2 nhôm 40mm giảm 900.000đ), Watch 3 giảm 25% (không kèm KM khác).", "Pin sạc dự phòng giảm 30% khi mua kèm.", "Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại Samsung Galaxy S10 Lite",
        "price": 14990000,
        "brand": "SamSung",
        "image" : "./data/itemsData/product11.jpg",
        "info": {
            "Monitor": "Super AMOLED, 6.7', Full HD+",
            "OS": "Android 10",
            "BackCamera": "Chính 48 MP & Phụ 12 MP, 5 MP",
            "FrontCamera": "32 MP",
            "CPU":	"Snapdragon 855 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"128 GB",
            "SIMCard": "2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G",
            "Battery": "4500 mAh, có sạc nhanh"
        },
        "moreInfo":["Mua online thêm quà: Giảm giá 2,000,000đ (Không áp dụng kèm Thu cũ đổi mới)","Trả góp 0% thẻ tín dụng","Tặng suất mua Đồng hồ Samsung Active 2 giảm 35% (riêng Active 2 nhôm 40mm giảm 900.000đ), Watch 3 giảm 25% (không kèm KM khác).", "Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại OPPO Find X2",
        "price": 19990000 ,
        "brand": "OPPO",
        "image" : "./data/itemsData/product12.jpg",
        "info": {
            "Monitor": "AMOLED, 6.78', Quad HD+ (2K+)",
            "OS": "Android 10",
            "BackCamera": "Chính 48 MP & Phụ 13 MP, 12 MP",
            "FrontCamera": "32 MP",
            "CPU":	"Snapdragon 865 8 nhân",
            "RAM": "12 GB",
            "StoreCard":"256 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 5G",
            "Battery": "4200 mAh, có sạc nhanh"
        },
        "moreInfo":["Giảm giá 2,000,000đ khi tham gia thu cũ đổi mới OPPO Find X2","Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại OPPO Reno4 Pro",
        "price": 11990000,
        "brand": "OPPO",
        "image" : "./data/itemsData/product13.jpg",
        "info": {
            "Monitor": "AMOLED, 6.5', Full HD+",
            "OS": "Android 10",
            "BackCamera": "Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP",
            "FrontCamera": "32 MP",
            "CPU":	"Snapdragon 720G 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"256 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "4000 mAh, có sạc nhanh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Giảm 1,2 triệu khi mua Oppo watch 41mm, 1,6 triệu khi mua Oppo watch 46mm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại OPPO A92",
        "price": 6490000 ,
        "brand": "OPPO",
        "image" : "./data/itemsData/product14.jpg",
        "info": {
            "Monitor": "TFT LCD, 6.5', Full HD+",
            "OS": "Android 10",
            "BackCamera": "Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP",
            "FrontCamera": "16 MP",
            "CPU":	"Snapdragon 665 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"128 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "5000 mAh, có sạc nhanh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại OPPO A52",
        "price": 5690000,
        "brand": "OPPO",
        "image" : "./data/itemsData/product15.jpg",
        "info": {
            "Monitor": "TFT LCD, 6.5', Full HD+",
            "OS": "Android 10",
            "BackCamera": "Chính 12 MP & Phụ 8 MP, 2 MP, 2 MP",
            "FrontCamera": "16 MP",
            "CPU":	"Snapdragon 665 8 nhân",
            "RAM": "6 GB",
            "StoreCard":"128 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "5000 mAh, có sạc nhanh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại Vivo X50 Pro",
        "price": 18990000,
        "brand": "ViVo",
        "image" : "./data/itemsData/product16.jpg",
        "info": {
            "Monitor": "AMOLED, 6.56', Full HD+",
            "OS": "Android 10",
            "BackCamera": "Chính 48 MP & Phụ 13 MP, 8 MP, 8 MP",
            "FrontCamera": "32 MP",
            "CPU":	"Snapdragon 765G 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"256 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 5G",
            "Battery": "4315 mAh"
        },
        "moreInfo":["Bảo hành 18 tháng chính hãng","Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại Vivo V19",
        "price": 8990000,
        "brand": "ViVo",
        "image" : "./data/itemsData/product17.jpg",
        "info": {
            "Monitor": "Super AMOLED, 6.44', Full HD+",
            "OS": "Android 10",
            "BackCamera": "Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP",
            "FrontCamera": "Chính 32 MP & Phụ 8 MP",
            "CPU":	"Snapdragon 712 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"128 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "4500 mAh, có sạc nhanh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại Vivo V20",
        "price": 8490000,
        "brand": "ViVo",
        "image" : "./data/itemsData/product18.jpg",
        "info": {
            "Monitor": "AMOLED, 6.44', Full HD+",
            "OS": "Android 11",
            "BackCamera": "Chính 64 MP & Phụ 8 MP, 2 MP",
            "FrontCamera": "44 MP",
            "CPU":	"Snapdragon 720G 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"128 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "4000 mAh, có sạc nhanh"
        },
        "moreInfo":["Tai nghe Bluetooth TWS Macaron model inpods 12","Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại Vivo Y50",
        "price": 6290000,
        "brand": "ViVo",
        "image" : "./data/itemsData/produc19.jpg",
        "info": {
            "Monitor": "IPS LCD, 6.53', Full HD+",
            "OS": "Android 10",
            "BackCamera": "Chính 13 MP & Phụ 8 MP, 2 MP, 2 MP",
            "FrontCamera": "16 MP",
            "CPU":	"Snapdragon 665 8 nhân",
            "RAM": "8 GB",
            "StoreCard":"128 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "5000 mAh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
    },
 {
        "name": "Điện thoại Vivo Y1s",
        "price": 2490000,
        "brand": "ViVo",
        "image" : "./data/itemsData/product20.jpg",
        "info": {
            "Monitor": "IPS LCD, 6.22', HD+",
            "OS": "Android 10",
            "BackCamera": "13 MP",
            "FrontCamera": "5 MP",
            "CPU":	"MediaTek Helio P35 8 nhân",
            "RAM": "2 GB",
            "StoreCard":"32 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "4030 mAh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
 },
 {
        "name": "Điện thoại Vsmart Aris",
        "price": 7490000,
        "brand": "Vsmart",
        "image" : "./data/itemsData/product21.jpg",
        "info": {
            "Monitor": "AMOLED, 6.39', Full HD+",
            "OS": "Android 10",
            "BackCamera": "Chính 64 MP & Phụ 8 MP, 8 MP, 2 MP",
            "FrontCamera": "20 MP",
            "CPU":	"Snapdragon 730 8 nhân",
            "RAM": "6 GB",
            "StoreCard":"64 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "4000 mAh, có sạc nhanh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
 },
 {
        "name": "Điện thoại Vsmart Live 4 6GB",
        "price": 4790000,
        "brand": "Vsmart",
        "image" : "./data/itemsData/product22.jpg",
        "info": {
            "Monitor": "LTPS IPS LCD, 6.5', Full HD+",
            "OS": "Android 10",
            "BackCamera": "Chính 48 MP & Phụ 8 MP, 5 MP, 2 MP",
            "FrontCamera": "13 MP",
            "CPU":	"Snapdragon 675 8 nhân",
            "RAM": "6 GB",
            "StoreCard":"64 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "5000 mAh, có sạc nhanh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
 },
 {
        "name": "Điện thoại Vsmart Active 3 (6GB/64GB)",
        "price": 399000,
        "brand": "Vsmart",
        "image" : "./data/itemsData/product23.jpg",
        "info": {
            "Monitor": "AMOLED, 6.39', Full HD+",
            "OS": "Android 9 (Pie)",
            "BackCamera": "Chính 48 MP & Phụ 8 MP, 2 MP",
            "FrontCamera": "16 MP",
            "CPU":	"MediaTek Helio P60 8 nhân",
            "RAM": "6 GB",
            "StoreCard":"64 GB",
            "SIMCard": "2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G",
            "Battery": "4020 mAh, có sạc nhanh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
 },
 {
        "name": "Điện thoại Vsmart Bee 3",
        "price": 1590000,
        "brand": "Vsmart",
        "image" : "./data/itemsData/product24.jpg",
        "info": {
            "Monitor": "IPS LCD, 6.0', HD+",
            "OS": "Android 9 (Pie)",
            "BackCamera": "8 MP",
            "FrontCamera": "5 MP",
            "CPU":	"MediaTek MT6739WW 4 nhân",
            "RAM": "2 GB",
            "StoreCard":"8 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "3000 mAh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
 },
 {
        "name": "Điện thoại Vsmart Star 3",
        "price": 1990000,
        "brand": "Vsmart",
        "image" : "./data/itemsData/product25.jpg",
        "info": {
            "Monitor": "IPS LCD, 6.09', HD+",
            "OS": "Android 9 (Pie)",
            "BackCamera": "Chính 8 MP & Phụ 5 MP",
            "FrontCamera": "8 MP",
            "CPU":	"Snapdragon 215 4 nhân",
            "RAM": "2 GB",
            "StoreCard":"16 GB",
            "SIMCard": "2 Nano SIM, Hỗ trợ 4G",
            "Battery": "3500 mAh"
        },
        "moreInfo":["Pin sạc dự phòng giảm 30% khi mua kèm.","Tặng 100.000₫ mua hàng tại website thành viên BachhoaXANH.com, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan Thiết và 1 số khu vực khác"]
 }
];
/**
 * BT 1 : Quản Lý Tuyển Sinh 
 * 
 * input : 
 * 
 *Nhập số điểm 3 môn thi + điểm ưu tiên
 *điểm ưu tiên = điểm ưu tiên khu vực + điểm ưu tiên đối tượng
 *
 *hanlding : 
tạo list thí sinh
Trong list tạo 3 ô điểm môn thi 
tạo 1 ô điểm khu vực ưu tiên
tạo 1 ô điểm đối tương ưu tiên
điểm tổng kết = điểm 3 môn + điểm ưu tiên ( khu vực + đối tượng ) > 0 = đạt
điểm tổng kết = điểm 3 môn + điểm ưu tiên ( khu vực + đối tượng ) < 0 = rớt
 * 
 * output : 
 * hiển thị kết quả 
 */

function tinhDiemThi() {
  /**
   * Anh bị sai như này:
   * Khi anh Dom tới 1 thẻ thì a chỉ được phép . đến value hoặc checked
   * Anh đang vừa chấm cả value cả checked
   */
  var hoTen = document.getElementById("tenThiSinh").value;
  var diemChuan = document.getElementById("diemChuan").value;
  diemChuan = parseInt(diemChuan);
  var diemA = document.getElementById("diemMona").value;
  diemA = parseInt(diemA);
  var diemB = document.getElementById("diemMonb").value;
  diemB = parseInt(diemB);
  var diemC = document.getElementById("diemMonc").value;
  diemC = parseInt(diemC);

  //Khu Vực B1: Dom
  var khuVucA = document.getElementById("khuA");
  var khuVucB = document.getElementById("khuB");
  var khuVucC = document.getElementById("khuC");
  var khuVucKo = document.getElementById("khuKo");
  var chonKV = 0;
  //B2: kiểm tra Checked
  if (khuVucA.checked) {
    //dòng này sẽ còn document.getElementById("khuA").checked nên xử lý đc
    chonKV = khuVucA.value; //dòng này sẽ còn document.getElementById("khuA").value nên xử lý đc
  } else if (khuVucB.checked) {
    chonKV = khuVucB.value;
  } else if (khuVucC.checked) {
    chonKV = khuVucC.value;
  } else if (khuVucKo.checked) {
    chonKV = khuVucKo.value;
  }

  // Đối Tượng
  var doiTuongA = document.getElementById("dTA");
  var doiTuongB = document.getElementById("dTB");
  var doiTuongC = document.getElementById("dTC");
  var doiTuongKo = document.getElementById("dTKo");
  var chonDT = 0;
  if (doiTuongA.checked) {
    chonDT = doiTuongA.value;
  } else if (doiTuongB.checked) {
    chonDT = doiTuongB.value;
  } else if (doiTuongC.checked) {
    chonDT = doiTuongC.value;
  } else if (doiTuongKo.checked) {
    chonDT = doiTuongKo.value;
  }

  var tongDiemThi = diemA + diemB + diemC + parseInt(chonKV) + parseInt(chonDT);

  if (tongDiemThi <= 0 || tongDiemThi < diemChuan) {
    tongDiemThi =
      " Bạn " +
      hoTen +
      " Số Điểm Của Bạn Là : " +
      tongDiemThi +
      "<br>" +
      " Bạn Đã Rớt ";
  } else if (tongDiemThi > 0 && tongDiemThi >= diemChuan) {
    tongDiemThi =
      " Bạn " +
      hoTen +
      " Số Điểm Của Bạn Là : " +
      tongDiemThi +
      "<br>" +
      " Bạn Đã Đạt ";
  } else {
    tongDiemThi = "Vui Lòng Nhập Đầy Đủ";
  }

  document.getElementById("thongBaoDiemThi").innerHTML = tongDiemThi;
  document.getElementById("thongBaoDiemThi").style.display = "block";
  document.getElementById("thongBaoDiemThi").className = "alert alert-success";
}

/**
 * BT 2 : Tính Thuế Thu Nhập Cá Nhân
 *
 * input :
 *
 *tính thuế thu nhập cá nhân

 *
 *hanlding :
tạo ô họ tên
tạo ô tổng thu nhập
tạo ô số người phụ thuộc
tính thuế ( cách tính )
tncn = tổng thu nhập - 4tr - số người phụ thuộc * 1tr6
nếu tncn = 60tr >> thuế = 60tr * 0.05
nếu tncn = 60-120 >> thuế  0.10
nếu tncn = 120-216  >> thuế 0.15
nếu tncn = 216-384 >> thuế 0.20
nếu tncn = 384-624  >> thuế 0.25
nếu tncn = 624-960  >> thuế 0.30
nếu tncn = 960 >> thuế 0.35
 *
 * output :
 * hiển thị lời chào
 */
const tienChiTieu = 4000000;
const heSo = 1600000;
const thue_1 = 60000000;
const thue_2 = 120000000;
const thue_3 = 216000000;
const thue_4 = 384000000;
const thue_5 = 624000000;
const thue_6 = 960000000;

function tinhThue() {
  var tenCaNhan = document.getElementById("tenDongThue").value;
  var tongTn = document.getElementById("tongThuNhap").value;
  tongTn = parseInt(tongTn);
  var tongTn = tongTn * 1000000;
  var soNguoiPt = document.getElementById("soNguoiPt").value;
  soNguoiPt = parseInt(soNguoiPt);
  var thueThuNhap = tongTn - tienChiTieu - soNguoiPt * heSo;

  var dongThue = 0;
  if (0 <= thueThuNhap && thueThuNhap <= thue_1) {
    dongThue = thueThuNhap * 0.05;
  } else if (thue_1 < thueThuNhap && thueThuNhap <= thue_2) {
    dongThue = thue_1 * 0.05 + (thueThuNhap - thue_1) * 0.1;
  } else if (thue_2 < thueThuNhap && thueThuNhap <= thue_3) {
    dongThue =
      thue_1 * 0.05 + (thue_2 - thue_1) * 0.1 + (thueThuNhap - thue_2) * 0.15;
  } else if (thue_3 < thueThuNhap && thueThuNhap <= thue_4) {
    dongThue =
      thue_1 * 0.05 +
      (thue_2 - thue_1) * 0.1 +
      (thue_3 - thue_2) * 0.15 +
      (thueThuNhap - thue_3) * 0.2;
  } else if (thue_4 < thueThuNhap && thueThuNhap <= thue_5) {
    dongThue =
      thue_1 * 0.05 +
      (thue_2 - thue_1) * 0.1 +
      (thue_3 - thue_2) * 0.15 +
      (thue_4 - thue_3) * 0.2 +
      (thueThuNhap - thue_4) * 0.25;
  } else if (thue_5 < thueThuNhap && thueThuNhap <= thue_6) {
    dongThue =
      thue_1 * 0.05 +
      (thue_2 - thue_1) * 0.1 +
      (thue_3 - thue_2) * 0.15 +
      (thue_4 - thue_3) * 0.2 +
      (thue_5 - thue_4) * 0.25 +
      (thueThuNhap - thue_5) * 0.3;
  } else if (thueThuNhap > thue_6) {
    dongThue =
      thue_1 * 0.05 +
      (thue_2 - thue_1) * 0.1 +
      (thue_3 - thue_2) * 0.15 +
      (thue_4 - thue_3) * 0.2 +
      (thue_5 - thue_4) * 0.25 +
      (thue_6 - thue_5) * 0.3 +
      (thueThuNhap - thue_6) * 0.35;
  }
  var currentFormat = new Intl.NumberFormat("vn-VN");
  var tienF = currentFormat.format(dongThue);
  document.getElementById("thongBaoThue").innerHTML = " Bạn " + tenCaNhan + " Phải Đóng Số Tiền Là : " + tienF + " VND ";
  document.getElementById("thongBaoThue").style.display = "block";
  document.getElementById("thongBaoThue").className = "alert alert-success";
}

/**
 * BT 3 : Tính Tiền Điện
 *
 * input :
 *
 *tính và xuất tiền điện theo giá đơn vị
 *
 *
 *hanlding :
 * tạo ô input tên
 * tạo ô input số kw điện
 * tạo biến soDien = 0;
 * nếu soDien = 50kw - bậc 1 >> 500/1kw
 * nếu soDien = 50kw - bậc 2 >> 650/1kw
 * nếu soDien = 100kw - bậc 3 >> 850/1kw
 * nếu soDien = 150kw - bậc 4 >> 1100/1kw
 * nếu soDien =  trên 150kw - bậc 5 >> 1300/1kw
 *
 * output :
 * hiển thị kết quả
 */
const bac_1 = 500;
const bac_2 = 650;
const bac_3 = 850;
const bac_4 = 1100;
const bac_5 = 1300;

function tinhTienDien() {
  var tenDongTien = document.getElementById("tenDongTienDien").value;
  var soKw = document.getElementById("soKwTieuThu").value;
  soKw = parseInt(soKw);

  var tongTienDien = 0;
  if (0 < soKw && soKw <= 50) {
    tongTienDien = soKw * bac_1;
  } else if (50 < soKw && soKw <= 100) {
    tongTienDien = 50 * bac_1 + (soKw - 50) * bac_2;
  } else if (100 < soKw && soKw <= 200) {
    tongTienDien = 50 * bac_1 + 50 * bac_2 + (soKw - 100) * bac_3;
  } else if (200 < soKw && soKw <= 350) {
    tongTienDien = 50 * bac_1 + 50 * bac_2 + 100 * bac_3 + (soKw - 200) * bac_4;
  } else if (350 < soKw) {
    tongTienDien =
      50 * bac_1 +
      50 * bac_2 +
      100 * bac_3 +
      150 * bac_4 +
      (soKw - 350) * bac_5;
  }
  var currentFormat = new Intl.NumberFormat("vn-VN");
  var tienF = currentFormat.format(tongTienDien);
  document.getElementById("thongBaoTienDien").innerHTML =
    " Bạn " + tenDongTien + " Phải Đóng Số Tiền Là : " + tienF + " VND ";
  document.getElementById("thongBaoTienDien").style.display = "block";
  document.getElementById("thongBaoTienDien").className = "alert alert-success";
}

/**
 * BT 4 :Tính Tiền Cáp
 *
 * input :
 *
 *Tính Tiền Cáp cho 2 loại kh : 
 *Nhà Dân  và Doanh Nghiệp
 *
 *hanlding :
    tạo 2 mục : 

    1 nhà dân : 
 * tạo ô input mã khách hàng 
 * tạo ô input số tài khoản
 * tính giá cáp : 
 * phí xử lý hóa đơn : 4,5$
 * Phí dịch vụ cơ bản : 20.5$
 * thuê kênh cao cấp : 7.5$ / kênh
 * 
 *   2 doanh nghiệp : 
 * tạo ô input mã khách hàng 
 * tạo ô input số tài khoản
 * tính giá cáp : 
 * phí xử lý hóa đơn : 15$
 * Phí dịch vụ cơ bản : 75$ / 10 đầu kết nói >> 5$ cho đầu tiếp theo
 * thuê kênh cao cấp : 50$ / kênh

 * 
 * output :
 * hiển thị kết quả số 
 */
const phiHd_Cn = 4.5;
const phiDvCb_Cn = 20.5;
const phiTk_Cn = 7.5;

const phiHd_Dn = 15;
const phiDvCb_Dn = 75;
const phiDvCbthem_Dn = 5;
const phiTk_Dn = 50;

function tinhTienCap() {
  var maKH = document.getElementById("maKhachHang").value;
  // maKH = parseInt(maKH);
  var soDT = document.getElementById("soDauThu").value;
  soDT = parseInt(soDT);
  var kenhT = document.getElementById("kenhThue").value;
  kenhT = parseInt(kenhT);

  // phí thuê kênh cá nhân
  var phiThueKenhCn = kenhT * phiTk_Cn;

  // phí thuê kênh = dịch vụ đầu thu doanh nghiệp :
  var phiThueKenhDn = kenhT * phiTk_Dn;

  var tinhTienCap = 0;

  switch (maKH) {
    case "1": // Cá Nhân = 1
      if (kenhT == 0) {
        tinhTienCap = phiHd_Cn + " $ ";
        thongBaoTienCap = " Đây Là Khách Hàng Cá Nhân" + "<br>" + " Tính Phí Xử Lý Hóa Đơn = 4.5$ ";
      } else if (kenhT > 0) {
        tinhTienCap =
          phiHd_Cn + phiDvCb_Cn + phiThueKenhCn + " $ ";
        thongBaoTienCap = " Đây Là Khách Hàng Cá Nhân"  + "<br>" + " Giá Kênh Thuê Cao Cấp = 1 kênh * 7.5$ ";
      }
      break;

    case "2": // Doanh Nghiệp = 2
      if (soDT == 0 && kenhT == 0) {
        tinhTienCap = phiHd_Dn + " $ ";
        thongBaoTienCap = " Đây Là Khách Hàng Doanh Nghiệp "  + "<br>" + " Tính Phí Xử Lý Hóa Đơn = 15$ " ;
      } else if (soDT == 0 && kenhT <= 10) {
        tinhTienCap = phiHd_Dn + phiThueKenhDn + " $ ";
        thongBaoTienCap = " Đây Là Khách Hàng Doanh Nghiệp "  + "<br>" + " Số Đầu Thu Dưới 10 ";
      }else if (kenhT == 0 && soDT > 0 && soDT <= 10  ) {
        tinhTienCap = phiHd_Dn + phiDvCb_Dn + " $ ";
        thongBaoTienCap = " Đây Là Khách Hàng Doanh Nghiệp "  + "<br>" + " Số Đầu Thu Dưới 10 ";
      }else if (kenhT == 0 && soDT > 10) {
        tinhTienCap = phiHd_Dn + phiDvCb_Dn + (soDT - 10) * phiDvCbthem_Dn  + " $ ";
        thongBaoTienCap = " Đây Là Khách Hàng Doanh Nghiệp "  + "<br>" + " Số Đầu Thu Đã Trên 10 : + 5$ cho mỗi kết nối Đầu Thu ";
      }else if (0 < soDT && soDT <= 10) {
        tinhTienCap = phiHd_Dn + phiDvCb_Dn + phiThueKenhDn + " $ ";
        thongBaoTienCap = " Đây Là Khách Hàng Doanh Nghiệp "  + "<br>" + " Số Đầu Thu Dưới 10 ";
      } else if (0 < soDT && kenhT > 0 && phiDvCb_Dn > 10) {
        tinhTienCap = phiHd_Dn + phiDvCb_Dn + (soDT - 10) * phiDvCbthem_Dn + phiThueKenhDn + " $ ";
        thongBaoTienCap = " Đây Là Khách Hàng Doanh Nghiệp" + "<br>" + " Số Đầu Thu Đã Trên 10 : + 5$ cho mỗi kết nối Đầu Thu ";
      }else{
        thongBaoTienCap = "";
      }
      break;
    default:
      thongBaoTienCap = "Vui Lòng Nhập Đầy Đủ Thông Tin";
  }

  doanhNghiepDongTien.value = tinhTienCap;
  document.getElementById("thongBaoTienCap").innerHTML = "" + thongBaoTienCap;
  document.getElementById("thongBaoTienCap").style.display = "block";
  document.getElementById("thongBaoTienCap").className = "alert alert-success";
}

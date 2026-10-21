# Wireframe: Web booking tour du lịch

> Phiên bản 0.1, 2026-10-21. Khung bố cục thô để thống nhất luồng và nội dung từng màn hình, **không phải thiết kế hình ảnh**. Thiết kế mobile-first: vẽ bản điện thoại trước, desktop mở rộng từ đó.
> Mã `M..` trỏ tới tính năng trong [phạm vi MVP](../01-yeu-cau/pham-vi-mvp.md). API tương ứng ở [kiến trúc, mục 7](kien-truc-thiet-ke.md#7-api).

## Mục lục

1. [Trang chủ](#1-trang-chủ)
2. [Danh sách và tìm kiếm tour](#2-danh-sách-và-tìm-kiếm-tour)
3. [Chi tiết tour](#3-chi-tiết-tour)
4. [Các bước đặt tour](#4-các-bước-đặt-tour)
5. [Kết quả thanh toán](#5-kết-quả-thanh-toán)
6. [Đơn của tôi](#6-đơn-của-tôi)
7. [CMS: tour và lịch khởi hành](#7-cms-tour-và-lịch-khởi-hành)
8. [Vận hành: danh sách đơn và hoàn tiền](#8-vận-hành-danh-sách-đơn-và-hoàn-tiền)

---

## 1. Trang chủ

Tính năng: M2.1. Đường dẫn `/`.

```text
+--------------------------------------+
| Logo        [Tìm tour]   [Đăng nhập] |
+--------------------------------------+
|  Khám phá chuyến đi tiếp theo        |
|  [ Đi đâu?            v ]            |
|  [ Ngày đi            v ] [ Tìm tour]|
+--------------------------------------+
| Điểm đến phổ biến                    |
| [ảnh Đà Nẵng] [ảnh Phú Quốc] [ ... ] |
+--------------------------------------+
| Tour nổi bật                         |
| +----------+ +----------+            |
| | ảnh      | | ảnh      |            |
| | Tên tour | | Tên tour |            |
| | 3N2Đ     | | 4N3Đ     |            |
| | từ 3.2tr | | từ 5.9tr |            |
| +----------+ +----------+            |
+--------------------------------------+
| Vì sao đặt với chúng tôi             |
| Giá rõ ràng · Hủy theo chính sách    |
| Hỗ trợ trong giờ làm việc            |
+--------------------------------------+
| Chân trang: thông tin công ty, giấy  |
| phép lữ hành, điều khoản, chính sách |
+--------------------------------------+
```

Ghi chú: giá "từ" là giá thấp nhất của người lớn trong các lịch khởi hành còn chỗ. Chân trang hiển thị thông tin pháp lý theo [mục 2 của rủi ro & pháp lý](../01-yeu-cau/rui-ro-phap-ly.md#2-website-thương-mại-điện-tử-và-bảo-vệ-người-tiêu-dùng).

## 2. Danh sách và tìm kiếm tour

Tính năng: M2.3, M2.4. Đường dẫn `/tours`, `/diem-den/{slug}`. Bộ lọc nằm trên URL (chia sẻ và quay lại được).

```text
+--------------------------------------+
| < Tour Đà Nẵng        [Lọc] [Sắp xếp]|
+--------------------------------------+
| Bộ lọc (ngăn kéo trên mobile)        |
| Ngày đi:   [ 01/12 - 31/12 ]         |
| Giá:       [ 2tr ====o==== 10tr ]    |
| Số ngày:   (•) Tất cả ( ) 2-3 ( ) 4+ |
| [x] Chỉ hiện tour còn chỗ            |
| [ Áp dụng ]                          |
+--------------------------------------+
| +--------------------------------+   |
| | ảnh | Tên tour                 |   |
| |     | 3 ngày 2 đêm · Đà Nẵng   |   |
| |     | Khởi hành: 05/12, 12/12  |   |
| |     | Còn ít chỗ    từ 3.200.000đ|   |
| +--------------------------------+   |
| ... (các thẻ tour khác)              |
|        [ 1 ] 2 3 ... >               |
+--------------------------------------+
```

Trạng thái: không có kết quả thì gợi ý nới bộ lọc; đang tải hiện khung xương (skeleton); lỗi hiện nút thử lại.

## 3. Chi tiết tour

Tính năng: M2.2, M3.1. Đường dẫn `/tours/{slug}`. Đây là trang quan trọng nhất cho SEO và chuyển đổi.

```text
+--------------------------------------+
| [ảnh lớn, vuốt xem thêm]             |
| Tên tour                             |
| 3 ngày 2 đêm · Đà Nẵng - Hội An      |
| ★ 4,8 (120 đánh giá)  (GĐ2)          |
+--------------------------------------+
| Tab: Tổng quan | Lịch trình | Dịch vụ|
|      | Chính sách | Đánh giá         |
+--------------------------------------+
| Lịch trình                           |
| Ngày 1: Đón khách ...                |
| Ngày 2: ...                          |
| Bao gồm: xe, khách sạn, bữa ăn ...   |
| Không bao gồm: vé máy bay, chi tiêu  |
| Chính sách hủy:                      |
|  Trước 15 ngày: hoàn 100%            |
|  7-14 ngày: hoàn 50%  ...            |
+--------------------------------------+
| (thanh cố định phía dưới trên mobile)|
| từ 3.200.000đ        [ Chọn ngày đi ]|
+--------------------------------------+
```

Bộ chọn lịch khởi hành (hiện khi bấm "Chọn ngày đi", dạng ngăn kéo trên mobile hoặc khung bên phải trên desktop):

```text
+--------------------------------------+
| Chọn ngày đi          Tháng 12/2026  |
| [05/12] còn 8 chỗ   3.200.000đ       |
| [12/12] còn 2 chỗ   3.400.000đ       |
| [19/12] hết chỗ     (làm mờ)         |
+--------------------------------------+
| Số khách                             |
| Người lớn     [-] 2 [+]  3.200.000đ  |
| Trẻ em (5-11) [-] 1 [+]  2.400.000đ  |
| Em bé (<5)    [-] 0 [+]    500.000đ  |
+--------------------------------------+
| Tạm tính (server tính):  8.800.000đ  |
| [ Tiếp tục đặt ]                     |
+--------------------------------------+
```

Ghi chú: số chỗ còn và giá lấy từ server mỗi lần mở bộ chọn; số khách không được vượt số chỗ còn. Chưa đăng nhập thì "Tiếp tục đặt" dẫn tới đăng nhập, xong quay lại đúng bước này (M1.1).

## 4. Các bước đặt tour

Tính năng: M3.2, M3.3, M3.4, M4.1. Đường dẫn `/dat-tour/{bookingId}`. Chỉ ba bước, có thanh tiến trình và **đồng hồ đếm ngược giữ chỗ** từ bước 2.

**Bước 1: Thông tin**

```text
+--------------------------------------+
| Bước 1/3 Thông tin                   |
+--------------------------------------+
| Người liên hệ                        |
| Họ tên [______] SĐT [______]         |
| Email  [______________________]      |
+--------------------------------------+
| Hành khách 1 (người lớn)             |
| Họ tên [______] Ngày sinh [__/__/__] |
| [Chọn từ danh sách đã lưu v]         |
| Hộ chiếu/CCCD [______] (nếu tour cần)|
| Hành khách 2 ...                     |
+--------------------------------------+
| Yêu cầu đặc biệt (không bắt buộc)    |
| [ Tiếp tục ]                         |
+--------------------------------------+
```

**Bước 2: Xác nhận và điều khoản**

```text
+--------------------------------------+
| Bước 2/3 Xác nhận      Giữ chỗ 14:32 |
+--------------------------------------+
| Tour Đà Nẵng - Hội An                |
| Khởi hành 05/12/2026 · 3N2Đ          |
| 2 người lớn x 3.200.000đ  6.400.000đ|
| 1 trẻ em    x 2.400.000đ  2.400.000đ |
| Phụ thu phòng đơn           500.000đ |
| ------------------------------------ |
| Tổng thanh toán           9.300.000đ |
+--------------------------------------+
| Chính sách hủy: (tóm tắt các bậc)    |
| [x] Tôi đã đọc và đồng ý Điều khoản  |
|     đặt tour và Chính sách hủy       |
| [ Thanh toán 9.300.000đ ]            |
+--------------------------------------+
```

**Bước 3: Thanh toán** là trang của cổng thanh toán (chuyển hướng). Hệ thống không hiển thị ô nhập thẻ.

Trạng thái đặc biệt:

- Hết thời gian giữ chỗ: hiện thông báo "Chỗ giữ đã hết hạn", nút "Chọn lại ngày đi", không cho thanh toán tiếp.
- Hết chỗ khi giữ chỗ (người khác nhanh hơn): thông báo rõ và gợi ý lịch khởi hành khác của tour.
- Bấm thanh toán hai lần: chỉ tạo một giao dịch (idempotent).

## 5. Kết quả thanh toán

Tính năng: M4.3, M5.1. Đường dẫn `/dat-tour/{bookingId}/ket-qua`. Trang luôn hỏi lại server trạng thái đơn.

```text
Thành công                Đang xác nhận            Thất bại / hủy
+--------------------+    +--------------------+   +--------------------+
| ✓ Đặt tour thành   |    | Đang xác nhận      |   | Thanh toán chưa    |
|   công             |    | thanh toán...      |   | thành công         |
| Mã đơn: TB-4F7K2Q  |    | Vui lòng không     |   | Chỗ vẫn được giữ   |
| Email xác nhận đã  |    | đóng trang này     |   | thêm 09:12         |
| gửi tới ...        |    | (tự kiểm tra lại)  |   | [ Thử lại ]        |
| [Tải voucher PDF]  |    |                    |   | [ Chọn tour khác ] |
| [Xem đơn của tôi]  |    |                    |   |                    |
+--------------------+    +--------------------+   +--------------------+
```

Nếu "đang xác nhận" kéo dài quá vài phút: hiện hướng dẫn liên hệ hỗ trợ kèm mã đơn, **không** bảo khách thanh toán lại. Hết hạn giữ chỗ mà tiền đã trừ: hiện thông báo hệ thống đang đối chiếu, sẽ xác nhận hoặc hoàn tiền (BR-07).

## 6. Đơn của tôi

Tính năng: M5.1, M5.2, M5.4. Đường dẫn `/tai-khoan/don`.

```text
+--------------------------------------+
| Đơn của tôi                          |
| [Sắp đi] [Đã hoàn thành] [Đã hủy]    |
+--------------------------------------+
| TB-4F7K2Q   [Đã xác nhận]            |
| Tour Đà Nẵng - Hội An                |
| Khởi hành 05/12/2026 · 3 khách       |
| 9.300.000đ                           |
| [Chi tiết] [Tải voucher]             |
+--------------------------------------+
| TB-9X2M1B   [Chờ thanh toán 08:20]   |
| ...                    [Thanh toán]  |
+--------------------------------------+
```

Chi tiết đơn có: thông tin tour và ngày đi, danh sách hành khách, lịch sử thanh toán và hoàn tiền, chính sách hủy đã áp dụng. Nút **Hủy đơn** mở hộp thoại ghi rõ: "Hủy bây giờ, bạn được hoàn X đồng (Y%), dự kiến về tài khoản sau Z ngày", xác nhận hai bước (M5.2).

## 7. CMS: tour và lịch khởi hành

Tính năng: M6.1, M6.2, M6.4, M6.5, M6.7. Đường dẫn `/cms/tours`. Chỉ `admin`.

```text
+---------------------------------------------------------+
| CMS > Tour > Đà Nẵng - Hội An        [Nháp v] [Lưu] [Đăng]|
+---------------------------------------------------------+
| [Thông tin] [Lịch trình] [Ảnh] [Lịch khởi hành] [Chính sách]|
+---------------------------------------------------------+
| Tab Lịch khởi hành                                      |
| [+ Thêm lịch]                                           |
| Ngày đi   Chỗ   Đã giữ  Đã bán  Giá NL / TE / EB  TT    |
| 05/12     20    2       10      3.2tr/2.4tr/0.5tr Đang bán|
| 12/12     20    0       18      3.4tr/2.5tr/0.5tr Đang bán|
| 19/12     20    0       20      3.4tr/2.5tr/0.5tr Hết chỗ |
|                                                         |
| Lưu ý: lịch đã có đơn không xóa được, chỉ "Đóng bán".   |
| Giảm "Chỗ" xuống dưới (đã giữ + đã bán) bị chặn.        |
+---------------------------------------------------------+
```

Tab Ảnh: kéo thả tải lên, hiển thị bản đã xử lý (WebP), ô "Nguồn / bản quyền" bắt buộc (xem [pháp lý, mục 5](../01-yeu-cau/rui-ro-phap-ly.md#5-nội-dung-và-hình-ảnh)). Đổi giá của lịch khởi hành hiện cảnh báo "không ảnh hưởng đơn đã tạo" và ghi audit log.

## 8. Vận hành: danh sách đơn và hoàn tiền

Tính năng: M7.1 đến M7.4, M4.4. Đường dẫn `/ops/don`. Cho `staff` và `admin`.

```text
+---------------------------------------------------------+
| Đơn   Trạng thái [Tất cả v]  Ngày đi [__ - __]  Tour [v]|
+---------------------------------------------------------+
| Mã         Khách        Tour           Ngày đi  Tiền  TT|
| TB-4F7K2Q  Nguyễn A     Đà Nẵng-Hội An 05/12    9.3tr  ✓ |
| TB-9X2M1B  Trần B       Phú Quốc       10/12    6.1tr  ⏳|
| TB-1Q8W3E  Lê C         Đà Nẵng-Hội An 05/12    4.6tr  ↩ |
+---------------------------------------------------------+
| Chi tiết TB-4F7K2Q                                      |
| Trạng thái: Đã xác nhận   [Đổi trạng thái v]            |
| Thanh toán: VNPAY ... 9.300.000đ, thành công 20/10 14:02|
| Hành khách: 3 (xem giấy tờ: ghi nhật ký)                |
| Ghi chú nội bộ: [____________] [Thêm]                    |
| [ Hủy đơn và hoàn tiền ]                                |
+---------------------------------------------------------+
| Hộp thoại hoàn tiền                                     |
| Số tiền gợi ý theo chính sách: 4.650.000đ (50%)          |
| Số tiền hoàn: [4.650.000] Lý do: [__________]            |
| [ Xác nhận hoàn tiền ]  (ghi audit log)                  |
+---------------------------------------------------------+
| Danh sách theo lịch khởi hành: [Xuất Excel hành khách]   |
+---------------------------------------------------------+
```

Ghi chú: đơn có đối soát lệch hoặc hoàn tiền thất bại được đánh dấu nổi bật ở đầu danh sách. Mọi thao tác ở khung này ghi vào lịch sử và audit log (BR-10).

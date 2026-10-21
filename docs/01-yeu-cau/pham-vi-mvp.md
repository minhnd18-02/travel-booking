# Phạm vi & yêu cầu: Web booking tour du lịch

| Mục | Giá trị |
|---|---|
| Phiên bản | 0.2, 2026-10-21 (bỏ yêu cầu go-live, chỉ chạy demo / local) |
| Sản phẩm | Web đặt **tour trọn gói** trực tuyến: khách chọn lịch khởi hành, **thanh toán online ngay** |
| Nguồn hàng | Admin tự nhập tour, lịch khởi hành và giá trong CMS (không lấy từ API bên thứ ba, không có đối tác tự đăng) |
| Stack đã chọn | Backend .NET 10 (ASP.NET Core API), Frontend React Router v8 (render phía server); chi tiết ở [kiến trúc, mục 2](../02-ky-thuat/kien-truc-thiet-ke.md#2-tech-stack-đề-xuất) |
| Trạng thái | Đang lập kế hoạch, chưa có code |

> Đây là tài liệu gốc về phạm vi. Mã tính năng `M<module>.<số>` dùng chung với [roadmap](../03-san-pham/roadmap.md): ở đây ghi **làm gì, cho ai, giai đoạn nào**; roadmap ghi **đã xong hay chưa**.
> Điều chưa chốt ghi ở [mục 9](#9-câu-hỏi-mở). Thiết kế kỹ thuật ở [kiến trúc thiết kế](../02-ky-thuat/kien-truc-thiet-ke.md), rủi ro pháp lý và vận hành ở [rủi ro & pháp lý](rui-ro-phap-ly.md).

## Mục lục

1. [Mục tiêu](#1-mục-tiêu)
2. [Phạm vi MVP](#2-phạm-vi-mvp)
3. [Vai trò](#3-vai-trò)
4. [Từ điển](#4-từ-điển)
5. [Tính năng theo module](#5-tính-năng-theo-module)
6. [Luật nghiệp vụ lõi](#6-luật-nghiệp-vụ-lõi)
7. [Yêu cầu phi chức năng](#7-yêu-cầu-phi-chức-năng)
8. [Rủi ro chính](#8-rủi-ro-chính)
9. [Câu hỏi mở](#9-câu-hỏi-mở)

---

## 1. Mục tiêu

- **Khách** tìm được tour, xem lịch trình và giá rõ ràng, chọn ngày đi và đặt trong vài bước, trả tiền ngay trên điện thoại.
- **Không bao giờ bán quá số chỗ, không bao giờ mất hoặc nhận trùng tiền.** Với hệ thống đặt chỗ có thanh toán, tính đúng đắn quan trọng hơn tốc độ.
- **Nhân viên** xử lý đơn, hoàn tiền, xuất danh sách đoàn ngay trong hệ thống, không phải dùng bảng tính rời.
- **Chỉ chạy demo / local:** thanh toán dùng cổng giả lập (M4.1), chạy ở môi trường dev dựng bằng Aspire. Không triển khai production, không tích hợp cổng thanh toán thật, không nhận khách và tiền thật.

## 2. Phạm vi MVP

MVP = **GĐ0 + GĐ1** trong roadmap.

| Giai đoạn | Mục tiêu | Xong là gì |
|---|---|---|
| **GĐ0** Walking skeleton | Một luồng mỏng xuyên suốt: admin tạo tour và lịch khởi hành; khách đăng nhập, xem tour, đặt và giữ chỗ, thanh toán bằng cổng giả lập; đơn chuyển sang đã thanh toán | Chạy được ở môi trường dev (Aspire), có 1 E2E test xanh gồm cả bước nhận kết quả thanh toán giả lập |
| **GĐ1** Hoàn thiện MVP | Tìm kiếm và lọc, hủy và hoàn tiền (qua cổng giả lập), email, voucher PDF, màn vận hành cho nhân viên, audit log, giám sát, SEO | Chạy trọn luồng tìm, đặt, thanh toán giả lập, hủy và hoàn tiền ở môi trường dev; E2E test xanh |
| **GĐ2** Tăng chuyển đổi | Mã giảm giá, đặt cọc, đánh giá, wishlist, đăng nhập Google, đặt không cần tài khoản, hóa đơn điện tử, dashboard và báo cáo | Đo được tỉ lệ hoàn tất đặt tour |
| **GĐ3** Mở rộng | Gợi ý tour, thông báo SMS / Zalo, và các hệ thống lớn ở roadmap mục 2.4 | Theo số liệu thật từ GĐ2 |

**Ngoài phạm vi:** triển khai staging / production, cổng thanh toán thật, tài khoản dịch vụ production, backup và diễn tập restore, thủ tục pháp lý để mở bán. Để sau (xem roadmap mục 2.4): thêm khách sạn, vé máy bay, hoạt động; cổng đối tác tự đăng tour (marketplace); ứng dụng di động hoặc PWA; đa ngôn ngữ và đa tiền tệ.

## 3. Vai trò

| Vai trò | Khóa | Được làm |
|---|---|---|
| Khách vãng lai | `guest` | Xem trang chủ, danh sách, chi tiết tour, lịch khởi hành, giá, số chỗ còn; đăng ký, đăng nhập. **Chưa đặt được tour** (Q-02) |
| Khách hàng | `customer` | Như khách vãng lai, thêm: đặt tour, thanh toán, xem và hủy **đơn của mình**, lưu hành khách; từ GĐ2: wishlist, đánh giá |
| Nhân viên vận hành | `staff` | Xem và xử lý mọi đơn: đổi trạng thái, ghi chú, hoàn tiền, xuất danh sách hành khách theo lịch khởi hành. **Không** sửa tour, giá, không đổi quyền |
| Quản trị | `admin` | Mọi quyền của nhân viên, thêm: quản lý tour, lịch khởi hành, giá, chính sách hủy (CMS), người dùng và vai trò, cấu hình, xem audit log và báo cáo |
| Hệ thống | `system` | Việc tự chạy: nhả chỗ khi hết hạn giữ, nhận kết quả thanh toán, gửi email, đối soát, nhắc ngày đi |

Quyền do **server quyết định**; ẩn nút trên giao diện chỉ là tiện lợi, không phải bảo mật. `customer` chỉ truy cập được đơn của chính mình (kiểm tra ở server, không chỉ dựa vào mã đơn khó đoán). **Giá luôn do server tính**, không bao giờ nhận giá từ trình duyệt.

## 4. Từ điển

Giữ nguyên các tên này trong code, tài liệu và giao diện để lệnh `/business-flow` và người mới đọc đều hiểu như nhau.

| Từ thường gọi | Tên trong hệ thống | Ý nghĩa |
|---|---|---|
| Tour | `Tour` | Sản phẩm bán: nội dung, lịch trình, ảnh; chưa gắn ngày cụ thể |
| Lịch khởi hành | `Departure` | Một chuyến đi của tour vào một ngày cụ thể, có số chỗ và giá |
| Số chỗ | `capacity / held_seats / sold_seats` | Tổng chỗ, chỗ đang giữ tạm, chỗ đã bán |
| Loại khách, bậc giá | `PriceTier` (`adult`, `child`, `infant`) | Người lớn, trẻ em, em bé, mỗi loại một giá |
| Điểm đến | `Destination` | Nơi tour ghé tới |
| Lịch trình | `ItineraryDay` | Chương trình từng ngày của tour |
| Đơn đặt tour | `Booking` | Một lần đặt của khách cho một lịch khởi hành |
| Hành khách | `Passenger` | Người đi tour, có thể khác người đặt |
| Giữ chỗ | `Hold` | Chỗ được giữ tạm có thời hạn trong lúc chờ thanh toán |
| Thanh toán | `Payment` | Một giao dịch trả tiền qua cổng thanh toán |
| Hoàn tiền | `Refund` | Trả lại một phần hoặc toàn bộ tiền |
| Chính sách hủy | `CancellationPolicy` | Các bậc hoàn tiền theo số ngày trước khởi hành |
| Phụ thu | `Surcharge` | Khoản cộng thêm (phòng đơn, dịp lễ) |
| Mã giảm giá | `Coupon` | Khuyến mãi (GĐ2) |
| Đánh giá | `Review` | Nhận xét của khách đã đi tour (GĐ2) |

Trạng thái đơn: `pending_payment` (đã giữ chỗ, chờ trả tiền), `confirmed` (đã thanh toán), `completed` (tour đã diễn ra), `expired` (hết hạn giữ chỗ), `cancelled` (đã hủy). Chi tiết ở [kiến trúc, mục 5](../02-ky-thuat/kien-truc-thiet-ke.md#5-mô-hình-dữ-liệu).

## 5. Tính năng theo module

Cột **GĐ** là giai đoạn dự kiến. 🔑 = cần tài khoản hoặc khóa của bên thứ ba.

### Module 1. Tài khoản & xác thực

| Mã | Tính năng | App | GĐ | Vai trò | Ghi chú |
|---|---|---|---|---|---|
| M1.1 | Đăng ký và đăng nhập bằng email và mật khẩu, khóa tạm khi sai nhiều lần; đăng nhập xong quay lại đúng trang đang mở | Khách | GĐ0 | `guest` |  |
| M1.2 | Đăng xuất, giữ phiên bằng cookie HttpOnly, thu hồi mọi phiên khi đổi mật khẩu hoặc đăng xuất mọi thiết bị | Khách | GĐ0 | `customer` |  |
| M1.3 | Quên và đặt lại mật khẩu qua email (dev dùng Mailpit) | Khách | GĐ1 | `guest` |  |
| M1.4 | Hồ sơ cá nhân và danh sách hành khách lưu sẵn để lần đặt sau không phải nhập lại | Khách | GĐ1 | `customer` |  |
| M1.5 | Đăng nhập bằng Google | Khách | GĐ2 | `guest` | 🔑 cần credential |
| M1.6 | Đặt tour không cần tài khoản (guest checkout), tra cứu đơn bằng mã đơn và email | Khách | GĐ2 | `guest` |  |

### Module 2. Danh mục & tìm kiếm tour

| Mã | Tính năng | App | GĐ | Vai trò | Ghi chú |
|---|---|---|---|---|---|
| M2.1 | Trang chủ: ô tìm tour, tour nổi bật, điểm đến phổ biến | Khách | GĐ1 | `guest` |  |
| M2.2 | Trang chi tiết tour: ảnh, mô tả, lịch trình theo ngày, bao gồm / không bao gồm, chính sách hủy, lịch khởi hành, giá và số chỗ còn | Khách | GĐ0 | `guest` |  |
| M2.3 | Danh sách tour theo điểm đến và loại tour, có phân trang | Khách | GĐ1 | `guest` |  |
| M2.4 | Tìm kiếm và lọc: điểm đến, ngày đi, khoảng giá, số ngày, còn chỗ; sắp xếp; trạng thái lọc nằm trên URL | Khách | GĐ1 | `guest` |  |
| M2.5 | Gợi ý điểm đến khi đang gõ (autocomplete) | Khách | GĐ2 | `guest` |  |
| M2.6 | Danh sách tour yêu thích (wishlist) | Khách | GĐ2 | `customer` |  |
| M2.7 | Đánh giá và nhận xét tour, chỉ khách có đơn đã hoàn thành mới được đánh giá | Khách | GĐ2 | `customer` |  |
| M2.8 | Tour liên quan và gợi ý | Khách | GĐ3 | `guest` |  |

### Module 3. Đặt tour & giữ chỗ

| Mã | Tính năng | App | GĐ | Vai trò | Ghi chú |
|---|---|---|---|---|---|
| M3.1 | Chọn lịch khởi hành và số khách theo loại (người lớn, trẻ em, em bé), hiện giá tạm tính do server tính | Khách | GĐ0 | `customer` |  |
| M3.2 | Nhập thông tin liên hệ và thông tin từng hành khách | Khách | GĐ0 | `customer` |  |
| M3.3 | Giữ chỗ tạm thời có thời hạn: trừ chỗ nguyên tử (không bán quá số chỗ), tự nhả chỗ khi hết hạn | Hệ thống | GĐ0 | `system` |  |
| M3.4 | Màn tóm tắt đơn: giá chi tiết, chính sách hủy, tích đồng ý điều khoản trước khi thanh toán, đồng hồ đếm ngược giữ chỗ | Khách | GĐ1 | `customer` |  |
| M3.5 | Mã giảm giá và khuyến mãi | Khách | GĐ2 | `customer` |  |
| M3.6 | Phụ thu (phòng đơn, dịp lễ) tính tự động theo cấu hình của lịch khởi hành | Hệ thống | GĐ1 | `system` |  |

### Module 4. Thanh toán

| Mã | Tính năng | App | GĐ | Vai trò | Ghi chú |
|---|---|---|---|---|---|
| M4.1 | Lớp trừu tượng cổng thanh toán và cổng giả lập (mock) để phát triển và test; tạo giao dịch và chuyển khách sang trang thanh toán | Hệ thống | GĐ0 | `system` |  |
| M4.2 | ~~Tích hợp cổng thanh toán thật (môi trường thử, rồi production), xác thực chữ ký~~ (bỏ, 2026-10-21) | Hệ thống | GĐ1 | `system` | Chỉ chạy demo |
| M4.3 | Nhận kết quả thanh toán (webhook / IPN): xác thực chữ ký, xử lý idempotent, đối chiếu số tiền và mã đơn, cập nhật đơn | Hệ thống | GĐ0 | `system` |  |
| M4.4 | Hoàn tiền toàn phần hoặc một phần theo chính sách hủy, theo dõi trạng thái hoàn | Vận hành | GĐ1 | `staff` |  |
| M4.5 | Đối soát giao dịch với cổng hằng ngày, báo cáo chênh lệch | Hệ thống | GĐ1 | `system` |  |
| M4.6 | Xuất hóa đơn điện tử theo yêu cầu của khách | Vận hành | GĐ2 | `staff` | 🔑 cần credential |
| M4.7 | Thanh toán cọc và thanh toán phần còn lại trước ngày khởi hành | Khách | GĐ2 | `customer` |  |
| M4.8 | Thêm phương thức thanh toán: thẻ quốc tế, ví điện tử, QR | Hệ thống | GĐ2 | `system` | 🔑 cần credential |

### Module 5. Đơn của khách & thông báo

| Mã | Tính năng | App | GĐ | Vai trò | Ghi chú |
|---|---|---|---|---|---|
| M5.1 | Danh sách và chi tiết đơn của tôi: trạng thái, thanh toán, hành khách | Khách | GĐ0 | `customer` |  |
| M5.2 | Khách tự hủy đơn theo chính sách, hiện trước số tiền được hoàn | Khách | GĐ1 | `customer` |  |
| M5.3 | Email xác nhận khi đặt và khi thanh toán thành công (dev dùng Mailpit) | Hệ thống | GĐ1 | `system` |  |
| M5.4 | Tải xác nhận đặt tour (voucher) dạng PDF | Khách | GĐ1 | `customer` |  |
| M5.5 | Email nhắc thanh toán và nhắc ngày khởi hành | Hệ thống | GĐ2 | `system` |  |
| M5.6 | Thông báo qua SMS hoặc Zalo | Hệ thống | GĐ3 | `system` | 🔑 cần credential |

### Module 6. CMS sản phẩm (admin)

| Mã | Tính năng | App | GĐ | Vai trò | Ghi chú |
|---|---|---|---|---|---|
| M6.1 | Admin tạo, sửa tour: thông tin, ảnh, lịch trình theo ngày, bao gồm / không bao gồm | CMS | GĐ0 | `admin` |  |
| M6.2 | Quản lý lịch khởi hành: ngày đi, số chỗ, giá theo loại khách; đã có đơn thì đóng bán chứ không xóa | CMS | GĐ0 | `admin` |  |
| M6.3 | Quản lý điểm đến và loại tour (danh mục) | CMS | GĐ1 | `admin` |  |
| M6.4 | Cấu hình chính sách hủy và hoàn tiền theo bậc số ngày trước khởi hành | CMS | GĐ1 | `admin` |  |
| M6.5 | Tải ảnh có xử lý tự động: đổi cỡ, đổi sang WebP, kiểm tra loại file | CMS | GĐ1 | `admin` |  |
| M6.6 | Tạo hàng loạt lịch khởi hành (theo tuần, theo tháng) và nhân bản tour | CMS | GĐ2 | `admin` |  |
| M6.7 | Trạng thái tour: nháp, đang bán, tạm ngưng, ẩn | CMS | GĐ1 | `admin` |  |

### Module 7. Vận hành đơn

| Mã | Tính năng | App | GĐ | Vai trò | Ghi chú |
|---|---|---|---|---|---|
| M7.1 | Danh sách đơn có lọc theo trạng thái, ngày đi, tour; xem chi tiết đơn | Vận hành | GĐ1 | `staff` |  |
| M7.2 | Đổi trạng thái đơn và ghi chú nội bộ, có lịch sử thay đổi | Vận hành | GĐ1 | `staff` |  |
| M7.3 | Theo dõi và xử lý hoàn tiền thủ công khi cổng không tự hoàn | Vận hành | GĐ1 | `staff` |  |
| M7.4 | Danh sách hành khách theo lịch khởi hành, xuất Excel cho điều hành tour | Vận hành | GĐ1 | `staff` |  |
| M7.5 | Điều chỉnh đơn: đổi lịch khởi hành, thêm hoặc bớt khách, tính chênh lệch giá | Vận hành | GĐ2 | `staff` |  |
| M7.6 | Nhân viên đặt hộ khách (khách gọi điện) | Vận hành | GĐ2 | `staff` |  |

### Module 8. Quản trị & báo cáo

| Mã | Tính năng | App | GĐ | Vai trò | Ghi chú |
|---|---|---|---|---|---|
| M8.1 | Quản lý người dùng và vai trò (customer, staff, admin), khóa tài khoản | Admin | GĐ1 | `admin` |  |
| M8.2 | Nhật ký thao tác nhạy cảm (audit log): hoàn tiền, hủy, sửa giá, đổi quyền | Admin | GĐ1 | `admin` |  |
| M8.3 | Dashboard: doanh thu, số đơn, tỉ lệ lấp đầy chỗ, đơn chờ xử lý | Admin | GĐ2 | `admin` |  |
| M8.4 | Báo cáo doanh thu theo kỳ và theo tour, xuất file | Admin | GĐ2 | `admin` |  |
| M8.5 | Cấu hình hệ thống: thời hạn giữ chỗ, thông tin công ty, nội dung điều khoản | Admin | GĐ1 | `admin` |  |

### Module 9. Hạ tầng & vận hành

| Mã | Tính năng | App | GĐ | Vai trò | Ghi chú |
|---|---|---|---|---|---|
| M9.1 | CI (build, test, lint, quét phụ thuộc) và môi trường dev dựng bằng Aspire | Hệ thống | GĐ0 | `system` |  |
| M9.2 | Lưu ảnh tour ra thư mục local qua `IFileStorage` (đổi sang S3 sau nếu cần) | Hệ thống | GĐ0 | `system` |  |
| M9.3 | Giám sát: log có cấu trúc, theo dõi lỗi, health check, cảnh báo riêng cho lỗi thanh toán và webhook | Hệ thống | GĐ1 | `system` |  |
| M9.4 | ~~Backup DB lưu ngoài máy chủ chính và diễn tập restore trước khi mở bán~~ (bỏ, 2026-10-21) | Hệ thống | GĐ1 | `system` | Chỉ chạy demo |
| M9.5 | SEO cho trang công khai: render phía server, sitemap, thẻ meta, dữ liệu có cấu trúc cho tour, giá, đánh giá | Hệ thống | GĐ1 | `system` |  |
| M9.6 | Chống lạm dụng: rate limit, captcha ở đăng ký, chống giữ chỗ hàng loạt để chiếm chỗ | Hệ thống | GĐ1 | `system` |  |
| M9.7 | ~~Tài khoản dịch vụ cho production: email gửi đi, object storage và CDN, tên miền, chứng chỉ~~ (bỏ, 2026-10-21) | Hệ thống | GĐ1 | `system` | Chỉ chạy demo |

## 6. Luật nghiệp vụ lõi

Đây là các luật phải đúng ở **mọi** tầng (giao diện chỉ gợi ý, server và cơ sở dữ liệu mới là nơi bảo đảm). Phần cài đặt nằm ở [kiến trúc](../02-ky-thuat/kien-truc-thiet-ke.md).

| Mã | Luật |
|---|---|
| BR-01 | **Không bán quá số chỗ.** Mỗi lần giữ chỗ phải trừ chỗ trong một giao dịch cơ sở dữ liệu có điều kiện; ràng buộc `held_seats + sold_seats <= capacity` ở DB là lớp bảo vệ cuối |
| BR-02 | Giữ chỗ có thời hạn (đề xuất 15 đến 30 phút, cấu hình ở M8.5). Hết hạn thì tự nhả chỗ và đơn chuyển `expired` |
| BR-03 | Giá do server tính từ dữ liệu lịch khởi hành. Giá được **chụp lại** (snapshot) vào đơn lúc tạo; đổi giá sau không ảnh hưởng đơn cũ |
| BR-04 | Tiền lưu bằng **số nguyên đơn vị đồng (VND)**, không dùng số thực |
| BR-05 | Thanh toán chỉ thành công khi **server** nhận kết quả từ cổng, xác thực được chữ ký, và số tiền cùng mã đơn khớp. Việc trình duyệt được chuyển về trang kết quả **không phải** bằng chứng |
| BR-06 | Kết quả thanh toán (webhook) có thể đến trễ, trùng hoặc sai thứ tự. Xử lý **idempotent**: một giao dịch chỉ được áp dụng một lần |
| BR-07 | Tiền về sau khi giữ chỗ đã hết hạn: còn đủ chỗ thì giữ lại và xác nhận; hết chỗ thì tự tạo hoàn tiền và báo nhân viên (Q-05) |
| BR-08 | Hủy đơn: số tiền hoàn theo bậc chính sách hủy của tour, tính theo số ngày còn lại tới ngày khởi hành (Q-06). Công ty hủy tour thì hoàn đầy đủ |
| BR-09 | **Không lưu số thẻ hay mã bảo mật.** Khách nhập thẻ trên trang của cổng thanh toán |
| BR-10 | Mọi thao tác động đến tiền hoặc quyền (hoàn tiền, hủy, sửa giá, đổi quyền) ghi **audit log** |
| BR-11 | Loại khách (người lớn, trẻ em, em bé) tính theo tuổi tại **ngày khởi hành** |
| BR-12 | Lịch khởi hành đã có đơn không bị xóa, chỉ đóng bán |
| BR-13 | Chỉ khách có đơn `completed` mới được đánh giá tour (GĐ2) |

## 7. Yêu cầu phi chức năng

Chi tiết và con số đề xuất ở [kiến trúc thiết kế](../02-ky-thuat/kien-truc-thiet-ke.md#11-yêu-cầu-phi-chức-năng). Tóm tắt:

- **Đúng đắn trước tốc độ:** không bán quá chỗ, không nhận trùng hay mất tiền; mọi luồng tiền phải truy vết được.
- **Mobile-first:** phần lớn khách đặt tour trên điện thoại; luồng đặt phải gọn.
- **SEO:** trang tour, điểm đến, danh sách có HTML render từ server (D-01), có thẻ meta và sitemap.
- **An toàn thanh toán:** không lưu thẻ, xác thực chữ ký kết quả thanh toán, đối soát hằng ngày.
- **Vận hành:** cảnh báo khi lỗi thanh toán hoặc webhook.

## 8. Rủi ro chính

Xem [rủi ro & pháp lý](rui-ro-phap-ly.md). Với bản demo, hai rủi ro cần xử lý trong code: (1) sai lệch tiền và chỗ (bán quá chỗ, nhận trùng, tiền về mà đơn chưa xác nhận); (2) dữ liệu giấy tờ của hành khách (Q-12). Điều kiện pháp lý (Q-01) chỉ cần khi triển khai thật.

## 9. Câu hỏi mở

| Mã | Câu hỏi | Đề xuất mặc định | Ai trả lời |
|---|---|---|---|
| Q-01 | Công ty đã có hoặc đang xin giấy phép kinh doanh lữ hành chưa? Bán tour nội địa, quốc tế hay cả hai? | Không cần ở bản demo; chỉ chốt nếu sau này triển khai thật | Chủ dự án, luật sư |
| Q-02 | Khách phải có tài khoản mới đặt được? | Có ở MVP; cho đặt không cần tài khoản ở GĐ2 (M1.6) | Chủ dự án |
| Q-03 | Thu toàn bộ tiền hay cho đặt cọc? | Toàn bộ ở MVP; cọc ở GĐ2 (M4.7) | Chủ dự án |
| Q-04 | Dùng cổng thanh toán nào, nhận những hình thức nào (thẻ nội địa, ví, QR, thẻ quốc tế)? | Không cần ở bản demo: dùng cổng giả lập (M4.1); lớp `PaymentProvider` vẫn cho thêm cổng thật sau (D-04) | Chủ dự án |
| Q-05 | Thời hạn giữ chỗ và cách xử lý khi tiền về sau khi hết hạn? | 15 đến 30 phút; còn chỗ thì xác nhận, hết chỗ thì hoàn tự động (BR-07) | Chủ dự án |
| Q-06 | Chính sách hủy và hoàn tiền: các bậc ngày, phần trăm, phí không hoàn? | Chưa chốt; cần có trước khi làm M6.4 và M5.2 | Chủ dự án, pháp chế |
| Q-07 | Quy mô dự kiến (số tour, số lịch khởi hành, số đơn mỗi ngày); chỉ VND và tiếng Việt? | VND, tiếng Việt, chạy local bằng Aspire | Chủ dự án |
| Q-08 | Có xuất hóa đơn điện tử cho mọi đơn không? | Xuất theo yêu cầu ở GĐ2 (M4.6) | Kế toán |
| Q-09 | Ai vận hành: bao nhiêu nhân viên, có kế toán đối soát riêng không? | Một vai trò `staff` ở MVP; tách vai trò kế toán nếu cần | Chủ dự án |
| Q-10 | Hosting và ngân sách hàng tháng; nhóm làm bao nhiêu người? | Không cần hosting ở bản demo; số người làm chưa chốt | Chủ dự án |
| Q-11 | Nội dung tour (ảnh, mô tả, lịch trình) do công ty tự có hay lấy từ nhà cung cấp? | Chỉ dùng nội dung của công ty hoặc có giấy phép sử dụng ảnh và nội dung | Chủ dự án |
| Q-12 | Có thu số hộ chiếu hoặc CCCD của hành khách không? | Chỉ thu cho tour cần (thường là tour quốc tế), mã hóa khi lưu (D-10) | Chủ dự án |

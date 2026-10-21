# Roadmap: Web booking tour du lịch

> **Cập nhật:** 2026-10-21 · **Phiên bản mới nhất:** chưa có (mới có tài liệu kế hoạch, chưa có code) · **Phạm vi:** chỉ chạy demo / local, cổng thanh toán giả lập
> **Ký hiệu:** ✅ xong · 🟡 một phần · ⬜ chưa làm · 🔑 cần credential · 🏗 subsystem lớn
> File này ghi **trạng thái**. Nội dung từng tính năng ở [phạm vi MVP](../01-yeu-cau/pham-vi-mvp.md), dùng chung mã `M<module>.<số>`. Quy tắc cập nhật: [roadmap-sync](../../.claude/rules/docs/roadmap-sync.md).

## Mục lục

1. [Tổng quan tiến độ](#muc-1)
2. [Backlog](#muc-2): [2.1 Làm được ngay](#muc-2-1) · [2.2 Tính năng mới](#muc-2-2) · [2.3 Cần credential](#muc-2-3) · [2.4 Subsystem lớn](#muc-2-4)
3. [Ưu tiên tiếp theo](#muc-3)
4. [Cách thêm tính năng](#muc-4)
5. [Đã xong](#muc-5)

---

<a id="muc-1"></a>
## 1. Tổng quan tiến độ

| # | Module | App | Trạng thái | Còn lại |
|---|---|---|---|---|
| [1](#xong-1) | Tài khoản & xác thực | Khách | ⬜ | [M1.1](#m1-1) [M1.2](#m1-2) [M1.3](#m1-3) [M1.4](#m1-4) [M1.5](#m1-5) [M1.6](#m1-6) |
| [2](#xong-2) | Danh mục & tìm kiếm tour | Khách | ⬜ | [M2.1](#m2-1) [M2.2](#m2-2) [M2.3](#m2-3) [M2.4](#m2-4) [M2.5](#m2-5) [M2.6](#m2-6) [M2.7](#m2-7) [M2.8](#m2-8) |
| [3](#xong-3) | Đặt tour & giữ chỗ | Khách | ⬜ | [M3.1](#m3-1) [M3.2](#m3-2) [M3.3](#m3-3) [M3.4](#m3-4) [M3.5](#m3-5) [M3.6](#m3-6) |
| [4](#xong-4) | Thanh toán | Khách / Hệ thống | ⬜ | [M4.1](#m4-1) [M4.3](#m4-3) [M4.4](#m4-4) [M4.5](#m4-5) [M4.6](#m4-6) [M4.7](#m4-7) [M4.8](#m4-8) |
| [5](#xong-5) | Đơn của khách & thông báo | Khách | ⬜ | [M5.1](#m5-1) [M5.2](#m5-2) [M5.3](#m5-3) [M5.4](#m5-4) [M5.5](#m5-5) [M5.6](#m5-6) |
| [6](#xong-6) | CMS sản phẩm (admin) | CMS | ⬜ | [M6.1](#m6-1) [M6.2](#m6-2) [M6.3](#m6-3) [M6.4](#m6-4) [M6.5](#m6-5) [M6.6](#m6-6) [M6.7](#m6-7) |
| [7](#xong-7) | Vận hành đơn | Vận hành | ⬜ | [M7.1](#m7-1) [M7.2](#m7-2) [M7.3](#m7-3) [M7.4](#m7-4) [M7.5](#m7-5) [M7.6](#m7-6) |
| [8](#xong-8) | Quản trị & báo cáo | Admin | ⬜ | [M8.1](#m8-1) [M8.2](#m8-2) [M8.3](#m8-3) [M8.4](#m8-4) [M8.5](#m8-5) |
| [9](#xong-9) | Hạ tầng & vận hành | Hệ thống | 🟡 | [M9.1](#m9-1) [M9.2](#m9-2) [M9.3](#m9-3) [M9.5](#m9-5) [M9.6](#m9-6) |

| Nhóm | Trạng thái | Còn lại |
|---|---|---|
| N: tính năng mới / subsystem lớn | ⬜ Xong 0/4 | [N1](#n1) [N2](#n2) [N3](#n3) [N4](#n4) |

---

<a id="muc-2"></a>
## 2. Backlog

<a id="muc-2-1"></a>
### 2.1 Làm được ngay

Việc còn lại của các module có sẵn, không cần tài khoản bên thứ ba.

#### Module 1. Tài khoản & xác thực

| Mã | Tính năng | App | GĐ | Trạng thái |
|---|---|---|---|---|
| <a id="m1-1"></a>M1.1 | Đăng ký và đăng nhập bằng email và mật khẩu, khóa tạm khi sai nhiều lần; đăng nhập xong quay lại đúng trang đang mở | Khách | GĐ0 | ⬜ |
| <a id="m1-2"></a>M1.2 | Đăng xuất, giữ phiên bằng cookie HttpOnly, thu hồi mọi phiên khi đổi mật khẩu hoặc đăng xuất mọi thiết bị | Khách | GĐ0 | ⬜ |
| <a id="m1-3"></a>M1.3 | Quên và đặt lại mật khẩu qua email (dev dùng Mailpit) | Khách | GĐ1 | ⬜ |
| <a id="m1-4"></a>M1.4 | Hồ sơ cá nhân và danh sách hành khách lưu sẵn để lần đặt sau không phải nhập lại | Khách | GĐ1 | ⬜ |
| <a id="m1-6"></a>M1.6 | Đặt tour không cần tài khoản (guest checkout), tra cứu đơn bằng mã đơn và email | Khách | GĐ2 | ⬜ |

#### Module 2. Danh mục & tìm kiếm tour

| Mã | Tính năng | App | GĐ | Trạng thái |
|---|---|---|---|---|
| <a id="m2-1"></a>M2.1 | Trang chủ: ô tìm tour, tour nổi bật, điểm đến phổ biến | Khách | GĐ1 | ⬜ |
| <a id="m2-2"></a>M2.2 | Trang chi tiết tour: ảnh, mô tả, lịch trình theo ngày, bao gồm / không bao gồm, chính sách hủy, lịch khởi hành, giá và số chỗ còn | Khách | GĐ0 | ⬜ |
| <a id="m2-3"></a>M2.3 | Danh sách tour theo điểm đến và loại tour, có phân trang | Khách | GĐ1 | ⬜ |
| <a id="m2-4"></a>M2.4 | Tìm kiếm và lọc: điểm đến, ngày đi, khoảng giá, số ngày, còn chỗ; sắp xếp; trạng thái lọc nằm trên URL | Khách | GĐ1 | ⬜ |
| <a id="m2-5"></a>M2.5 | Gợi ý điểm đến khi đang gõ (autocomplete) | Khách | GĐ2 | ⬜ |
| <a id="m2-6"></a>M2.6 | Danh sách tour yêu thích (wishlist) | Khách | GĐ2 | ⬜ |
| <a id="m2-7"></a>M2.7 | Đánh giá và nhận xét tour, chỉ khách có đơn đã hoàn thành mới được đánh giá | Khách | GĐ2 | ⬜ |
| <a id="m2-8"></a>M2.8 | Tour liên quan và gợi ý | Khách | GĐ3 | ⬜ |

#### Module 3. Đặt tour & giữ chỗ

| Mã | Tính năng | App | GĐ | Trạng thái |
|---|---|---|---|---|
| <a id="m3-1"></a>M3.1 | Chọn lịch khởi hành và số khách theo loại (người lớn, trẻ em, em bé), hiện giá tạm tính do server tính | Khách | GĐ0 | ⬜ |
| <a id="m3-2"></a>M3.2 | Nhập thông tin liên hệ và thông tin từng hành khách | Khách | GĐ0 | ⬜ |
| <a id="m3-3"></a>M3.3 | Giữ chỗ tạm thời có thời hạn: trừ chỗ nguyên tử (không bán quá số chỗ), tự nhả chỗ khi hết hạn | Hệ thống | GĐ0 | ⬜ |
| <a id="m3-4"></a>M3.4 | Màn tóm tắt đơn: giá chi tiết, chính sách hủy, tích đồng ý điều khoản trước khi thanh toán, đồng hồ đếm ngược giữ chỗ | Khách | GĐ1 | ⬜ |
| <a id="m3-5"></a>M3.5 | Mã giảm giá và khuyến mãi | Khách | GĐ2 | ⬜ |
| <a id="m3-6"></a>M3.6 | Phụ thu (phòng đơn, dịp lễ) tính tự động theo cấu hình của lịch khởi hành | Hệ thống | GĐ1 | ⬜ |

#### Module 4. Thanh toán

| Mã | Tính năng | App | GĐ | Trạng thái |
|---|---|---|---|---|
| <a id="m4-1"></a>M4.1 | Lớp trừu tượng cổng thanh toán và cổng giả lập (mock) để phát triển và test; tạo giao dịch và chuyển khách sang trang thanh toán | Hệ thống | GĐ0 | ⬜ |
| <a id="m4-3"></a>M4.3 | Nhận kết quả thanh toán (webhook / IPN): xác thực chữ ký, xử lý idempotent, đối chiếu số tiền và mã đơn, cập nhật đơn | Hệ thống | GĐ0 | ⬜ |
| <a id="m4-4"></a>M4.4 | Hoàn tiền toàn phần hoặc một phần theo chính sách hủy, theo dõi trạng thái hoàn | Vận hành | GĐ1 | ⬜ |
| <a id="m4-5"></a>M4.5 | Đối soát giao dịch với cổng hằng ngày, báo cáo chênh lệch | Hệ thống | GĐ1 | ⬜ |
| <a id="m4-7"></a>M4.7 | Thanh toán cọc và thanh toán phần còn lại trước ngày khởi hành | Khách | GĐ2 | ⬜ |

#### Module 5. Đơn của khách & thông báo

| Mã | Tính năng | App | GĐ | Trạng thái |
|---|---|---|---|---|
| <a id="m5-1"></a>M5.1 | Danh sách và chi tiết đơn của tôi: trạng thái, thanh toán, hành khách | Khách | GĐ0 | ⬜ |
| <a id="m5-2"></a>M5.2 | Khách tự hủy đơn theo chính sách, hiện trước số tiền được hoàn | Khách | GĐ1 | ⬜ |
| <a id="m5-3"></a>M5.3 | Email xác nhận khi đặt và khi thanh toán thành công (dev dùng Mailpit) | Hệ thống | GĐ1 | ⬜ |
| <a id="m5-4"></a>M5.4 | Tải xác nhận đặt tour (voucher) dạng PDF | Khách | GĐ1 | ⬜ |
| <a id="m5-5"></a>M5.5 | Email nhắc thanh toán và nhắc ngày khởi hành | Hệ thống | GĐ2 | ⬜ |

#### Module 6. CMS sản phẩm (admin)

| Mã | Tính năng | App | GĐ | Trạng thái |
|---|---|---|---|---|
| <a id="m6-1"></a>M6.1 | Admin tạo, sửa tour: thông tin, ảnh, lịch trình theo ngày, bao gồm / không bao gồm | CMS | GĐ0 | ⬜ |
| <a id="m6-2"></a>M6.2 | Quản lý lịch khởi hành: ngày đi, số chỗ, giá theo loại khách; đã có đơn thì đóng bán chứ không xóa | CMS | GĐ0 | ⬜ |
| <a id="m6-3"></a>M6.3 | Quản lý điểm đến và loại tour (danh mục) | CMS | GĐ1 | ⬜ |
| <a id="m6-4"></a>M6.4 | Cấu hình chính sách hủy và hoàn tiền theo bậc số ngày trước khởi hành | CMS | GĐ1 | ⬜ |
| <a id="m6-5"></a>M6.5 | Tải ảnh có xử lý tự động: đổi cỡ, đổi sang WebP, kiểm tra loại file | CMS | GĐ1 | ⬜ |
| <a id="m6-6"></a>M6.6 | Tạo hàng loạt lịch khởi hành (theo tuần, theo tháng) và nhân bản tour | CMS | GĐ2 | ⬜ |
| <a id="m6-7"></a>M6.7 | Trạng thái tour: nháp, đang bán, tạm ngưng, ẩn | CMS | GĐ1 | ⬜ |

#### Module 7. Vận hành đơn

| Mã | Tính năng | App | GĐ | Trạng thái |
|---|---|---|---|---|
| <a id="m7-1"></a>M7.1 | Danh sách đơn có lọc theo trạng thái, ngày đi, tour; xem chi tiết đơn | Vận hành | GĐ1 | ⬜ |
| <a id="m7-2"></a>M7.2 | Đổi trạng thái đơn và ghi chú nội bộ, có lịch sử thay đổi | Vận hành | GĐ1 | ⬜ |
| <a id="m7-3"></a>M7.3 | Theo dõi và xử lý hoàn tiền thủ công khi cổng không tự hoàn | Vận hành | GĐ1 | ⬜ |
| <a id="m7-4"></a>M7.4 | Danh sách hành khách theo lịch khởi hành, xuất Excel cho điều hành tour | Vận hành | GĐ1 | ⬜ |
| <a id="m7-5"></a>M7.5 | Điều chỉnh đơn: đổi lịch khởi hành, thêm hoặc bớt khách, tính chênh lệch giá | Vận hành | GĐ2 | ⬜ |
| <a id="m7-6"></a>M7.6 | Nhân viên đặt hộ khách (khách gọi điện) | Vận hành | GĐ2 | ⬜ |

#### Module 8. Quản trị & báo cáo

| Mã | Tính năng | App | GĐ | Trạng thái |
|---|---|---|---|---|
| <a id="m8-1"></a>M8.1 | Quản lý người dùng và vai trò (customer, staff, admin), khóa tài khoản | Admin | GĐ1 | ⬜ |
| <a id="m8-2"></a>M8.2 | Nhật ký thao tác nhạy cảm (audit log): hoàn tiền, hủy, sửa giá, đổi quyền | Admin | GĐ1 | ⬜ |
| <a id="m8-3"></a>M8.3 | Dashboard: doanh thu, số đơn, tỉ lệ lấp đầy chỗ, đơn chờ xử lý | Admin | GĐ2 | ⬜ |
| <a id="m8-4"></a>M8.4 | Báo cáo doanh thu theo kỳ và theo tour, xuất file | Admin | GĐ2 | ⬜ |
| <a id="m8-5"></a>M8.5 | Cấu hình hệ thống: thời hạn giữ chỗ, thông tin công ty, nội dung điều khoản | Admin | GĐ1 | ⬜ |

#### Module 9. Hạ tầng & vận hành

| Mã | Tính năng | App | GĐ | Trạng thái |
|---|---|---|---|---|
| <a id="m9-1"></a>M9.1 | CI (build, test, lint, quét phụ thuộc) và môi trường dev dựng bằng Aspire. **Còn thiếu:** solution .NET (AppHost, ServiceDefaults, API có `/health`), Aspire, CI GitHub Actions | Hệ thống | GĐ0 | 🟡 |
| <a id="m9-2"></a>M9.2 | Lưu ảnh tour ra thư mục local qua `IFileStorage` (đổi sang S3 sau nếu cần) | Hệ thống | GĐ0 | ⬜ |
| <a id="m9-3"></a>M9.3 | Giám sát: log có cấu trúc, theo dõi lỗi, health check, cảnh báo riêng cho lỗi thanh toán và webhook | Hệ thống | GĐ1 | ⬜ |
| <a id="m9-4"></a>M9.4 | ~~Backup DB lưu ngoài máy chủ chính và diễn tập restore trước khi mở bán~~ (bỏ, 2026-10-21: chỉ chạy demo) | Hệ thống | GĐ1 | - |
| <a id="m9-5"></a>M9.5 | SEO cho trang công khai: render phía server, sitemap, thẻ meta, dữ liệu có cấu trúc cho tour, giá, đánh giá | Hệ thống | GĐ1 | ⬜ |
| <a id="m9-6"></a>M9.6 | Chống lạm dụng: rate limit, captcha ở đăng ký, chống giữ chỗ hàng loạt để chiếm chỗ | Hệ thống | GĐ1 | ⬜ |

<a id="muc-2-2"></a>
### 2.2 Tính năng mới

Tính năng ngoài phạm vi gốc. Hiện chưa có (mã N tiếp theo: xem [mục 4](#muc-4)).

<a id="muc-2-3"></a>
### 2.3 Cần credential 🔑

Cần tài khoản hoặc khóa của bên thứ ba. Phần có thể làm trước bằng bản giả lập (mock) vẫn nằm ở mục 2.1.

| Mã | Tính năng | App | GĐ | Cần gì | Trạng thái |
|---|---|---|---|---|---|
| <a id="m1-5"></a>M1.5 | Đăng nhập bằng Google | Khách | GĐ2 | Tài khoản và khóa OAuth của Google | 🔑 |
| <a id="m4-2"></a>M4.2 | ~~Tích hợp cổng thanh toán thật (môi trường thử, rồi production), xác thực chữ ký~~ (bỏ, 2026-10-21: chỉ chạy demo, dùng cổng giả lập M4.1) | Hệ thống | GĐ1 | - | - |
| <a id="m4-6"></a>M4.6 | Xuất hóa đơn điện tử theo yêu cầu của khách | Vận hành | GĐ2 | Nhà cung cấp hóa đơn điện tử, xem Q-08 | 🔑 |
| <a id="m4-8"></a>M4.8 | Thêm phương thức thanh toán: thẻ quốc tế, ví điện tử, QR | Hệ thống | GĐ2 | Tài khoản các phương thức thanh toán bổ sung | 🔑 |
| <a id="m5-6"></a>M5.6 | Thông báo qua SMS hoặc Zalo | Hệ thống | GĐ3 | Nhà cung cấp SMS / Zalo | 🔑 |
| <a id="m9-7"></a>M9.7 | ~~Tài khoản dịch vụ cho production: email gửi đi, object storage và CDN, tên miền, chứng chỉ~~ (bỏ, 2026-10-21: chỉ chạy demo) | Hệ thống | GĐ1 | - | - |

<a id="muc-2-4"></a>
### 2.4 Subsystem lớn 🏗

Mỗi cái là một đợt làm riêng, bắt đầu bằng `/architecture-plan`.

| Mã | Tính năng | App | Ghi chú | Trạng thái |
|---|---|---|---|---|
| <a id="n1"></a>N1 | Thêm loại dịch vụ: khách sạn, vé máy bay, hoạt động và vé tham quan | Khách / Hệ thống | Mỗi loại dịch vụ có mô hình tồn kho và giá riêng; vé máy bay thường cần nối API hãng hoặc đại lý | 🏗 |
| <a id="n2"></a>N2 | Cổng đối tác (marketplace): nhà cung cấp tự đăng và quản lý tour, chia hoa hồng, đối soát công nợ | Toàn hệ thống | Cần duyệt nhà cung cấp, vai trò mới, quy trình chi trả | 🏗 |
| <a id="n3"></a>N3 | Ứng dụng di động hoặc PWA | Khách | Cần chiến lược thông báo đẩy và lưu vé offline | 🏗 |
| <a id="n4"></a>N4 | Đa ngôn ngữ và đa tiền tệ | Toàn hệ thống | Hiện toàn bộ tiền lưu bằng VND số nguyên; đổi sang đa tiền tệ cần đổi mô hình giá | 🏗 |

---

<a id="muc-3"></a>
## 3. Ưu tiên tiếp theo

Chỉ chứa việc **chưa xong**. Hết một giai đoạn thì ghi "GĐx: xong" thay vì xóa trắng.

### GĐ0: Walking skeleton

1. [M9.1](#m9-1) CI (build, test, lint, quét phụ thuộc) và môi trường dev dựng bằng Aspire
2. [M1.1](#m1-1) Đăng ký và đăng nhập bằng email và mật khẩu, khóa tạm khi sai nhiều lần; đăng nhập xong quay lại đúng trang đang mở
3. [M1.2](#m1-2) Đăng xuất, giữ phiên bằng cookie HttpOnly, thu hồi mọi phiên khi đổi mật khẩu hoặc đăng xuất mọi thiết bị
4. [M9.2](#m9-2) Lưu ảnh tour ra thư mục local qua `IFileStorage` (đổi sang S3 sau nếu cần)
5. [M6.1](#m6-1) Admin tạo, sửa tour: thông tin, ảnh, lịch trình theo ngày, bao gồm / không bao gồm
6. [M6.2](#m6-2) Quản lý lịch khởi hành: ngày đi, số chỗ, giá theo loại khách; đã có đơn thì đóng bán chứ không xóa
7. [M2.2](#m2-2) Trang chi tiết tour: ảnh, mô tả, lịch trình theo ngày, bao gồm / không bao gồm, chính sách hủy, lịch khởi hành, giá và số chỗ còn
8. [M3.1](#m3-1) Chọn lịch khởi hành và số khách theo loại (người lớn, trẻ em, em bé), hiện giá tạm tính do server tính
9. [M3.2](#m3-2) Nhập thông tin liên hệ và thông tin từng hành khách
10. [M3.3](#m3-3) Giữ chỗ tạm thời có thời hạn: trừ chỗ nguyên tử (không bán quá số chỗ), tự nhả chỗ khi hết hạn
11. [M4.1](#m4-1) Lớp trừu tượng cổng thanh toán và cổng giả lập (mock) để phát triển và test; tạo giao dịch và chuyển khách sang trang thanh toán
12. [M4.3](#m4-3) Nhận kết quả thanh toán (webhook / IPN): xác thực chữ ký, xử lý idempotent, đối chiếu số tiền và mã đơn, cập nhật đơn
13. [M5.1](#m5-1) Danh sách và chi tiết đơn của tôi: trạng thái, thanh toán, hành khách

### GĐ1: Hoàn thiện MVP

**Tìm và chọn tour**

- [M2.1](#m2-1) Trang chủ: ô tìm tour, tour nổi bật, điểm đến phổ biến
- [M2.3](#m2-3) Danh sách tour theo điểm đến và loại tour, có phân trang
- [M2.4](#m2-4) Tìm kiếm và lọc: điểm đến, ngày đi, khoảng giá, số ngày, còn chỗ; sắp xếp; trạng thái lọc nằm trên URL
- [M6.3](#m6-3) Quản lý điểm đến và loại tour (danh mục)
- [M6.5](#m6-5) Tải ảnh có xử lý tự động: đổi cỡ, đổi sang WebP, kiểm tra loại file
- [M6.7](#m6-7) Trạng thái tour: nháp, đang bán, tạm ngưng, ẩn

**Hoàn thiện đặt tour**

- [M3.4](#m3-4) Màn tóm tắt đơn: giá chi tiết, chính sách hủy, tích đồng ý điều khoản trước khi thanh toán, đồng hồ đếm ngược giữ chỗ
- [M3.6](#m3-6) Phụ thu (phòng đơn, dịp lễ) tính tự động theo cấu hình của lịch khởi hành
- [M6.4](#m6-4) Cấu hình chính sách hủy và hoàn tiền theo bậc số ngày trước khởi hành
- [M1.3](#m1-3) Quên và đặt lại mật khẩu qua email (dev dùng Mailpit)
- [M1.4](#m1-4) Hồ sơ cá nhân và danh sách hành khách lưu sẵn để lần đặt sau không phải nhập lại

**Hoàn tiền và đối soát**

- [M4.4](#m4-4) Hoàn tiền toàn phần hoặc một phần theo chính sách hủy, theo dõi trạng thái hoàn
- [M4.5](#m4-5) Đối soát giao dịch với cổng hằng ngày, báo cáo chênh lệch

**Sau khi đặt**

- [M5.2](#m5-2) Khách tự hủy đơn theo chính sách, hiện trước số tiền được hoàn
- [M5.3](#m5-3) Email xác nhận khi đặt và khi thanh toán thành công (dev dùng Mailpit)
- [M5.4](#m5-4) Tải xác nhận đặt tour (voucher) dạng PDF

**Vận hành và quản trị**

- [M7.1](#m7-1) Danh sách đơn có lọc theo trạng thái, ngày đi, tour; xem chi tiết đơn
- [M7.2](#m7-2) Đổi trạng thái đơn và ghi chú nội bộ, có lịch sử thay đổi
- [M7.3](#m7-3) Theo dõi và xử lý hoàn tiền thủ công khi cổng không tự hoàn
- [M7.4](#m7-4) Danh sách hành khách theo lịch khởi hành, xuất Excel cho điều hành tour
- [M8.1](#m8-1) Quản lý người dùng và vai trò (customer, staff, admin), khóa tài khoản
- [M8.2](#m8-2) Nhật ký thao tác nhạy cảm (audit log): hoàn tiền, hủy, sửa giá, đổi quyền
- [M8.5](#m8-5) Cấu hình hệ thống: thời hạn giữ chỗ, thông tin công ty, nội dung điều khoản

**Hệ thống**

- [M9.3](#m9-3) Giám sát: log có cấu trúc, theo dõi lỗi, health check, cảnh báo riêng cho lỗi thanh toán và webhook
- [M9.5](#m9-5) SEO cho trang công khai: render phía server, sitemap, thẻ meta, dữ liệu có cấu trúc cho tour, giá, đánh giá
- [M9.6](#m9-6) Chống lạm dụng: rate limit, captcha ở đăng ký, chống giữ chỗ hàng loạt để chiếm chỗ

### GĐ2: Tăng chuyển đổi

- [M1.5](#m1-5) Đăng nhập bằng Google
- [M1.6](#m1-6) Đặt tour không cần tài khoản (guest checkout), tra cứu đơn bằng mã đơn và email
- [M2.5](#m2-5) Gợi ý điểm đến khi đang gõ (autocomplete)
- [M2.6](#m2-6) Danh sách tour yêu thích (wishlist)
- [M2.7](#m2-7) Đánh giá và nhận xét tour, chỉ khách có đơn đã hoàn thành mới được đánh giá
- [M3.5](#m3-5) Mã giảm giá và khuyến mãi
- [M4.6](#m4-6) Xuất hóa đơn điện tử theo yêu cầu của khách
- [M4.7](#m4-7) Thanh toán cọc và thanh toán phần còn lại trước ngày khởi hành
- [M4.8](#m4-8) Thêm phương thức thanh toán: thẻ quốc tế, ví điện tử, QR
- [M5.5](#m5-5) Email nhắc thanh toán và nhắc ngày khởi hành
- [M6.6](#m6-6) Tạo hàng loạt lịch khởi hành (theo tuần, theo tháng) và nhân bản tour
- [M7.5](#m7-5) Điều chỉnh đơn: đổi lịch khởi hành, thêm hoặc bớt khách, tính chênh lệch giá
- [M7.6](#m7-6) Nhân viên đặt hộ khách (khách gọi điện)
- [M8.3](#m8-3) Dashboard: doanh thu, số đơn, tỉ lệ lấp đầy chỗ, đơn chờ xử lý
- [M8.4](#m8-4) Báo cáo doanh thu theo kỳ và theo tour, xuất file

### GĐ3: Mở rộng

- [M2.8](#m2-8) Tour liên quan và gợi ý
- [M5.6](#m5-6) Thông báo qua SMS hoặc Zalo

### Sau GĐ3

Các subsystem ở [mục 2.4](#muc-2-4): [N1](#n1), [N2](#n2), [N3](#n3), [N4](#n4). Mỗi cái là một đợt làm riêng, bắt đầu bằng `/architecture-plan`.

---

<a id="muc-4"></a>
## 4. Cách thêm tính năng

Mã N tiếp theo (hiện tại: **N5**).

| Module | Mã M tiếp theo |
|---|---|
| 1. Tài khoản & xác thực | M1.7 |
| 2. Danh mục & tìm kiếm tour | M2.9 |
| 3. Đặt tour & giữ chỗ | M3.7 |
| 4. Thanh toán | M4.9 |
| 5. Đơn của khách & thông báo | M5.7 |
| 6. CMS sản phẩm (admin) | M6.8 |
| 7. Vận hành đơn | M7.7 |
| 8. Quản trị & báo cáo | M8.6 |
| 9. Hạ tầng & vận hành | M9.8 |

Quy trình và quy tắc đầy đủ: [roadmap-sync](../../.claude/rules/docs/roadmap-sync.md).

---

<a id="muc-5"></a>
## 5. Đã xong

Mỗi dòng ghi tên tính năng và phiên bản: `- Tên tính năng (v1.x.y)`. Tính năng liên quan tiền (module 4) chỉ ghi ở đây sau khi đã test với cổng giả lập, gồm cả webhook trùng và webhook đến trễ.

<a id="xong-1"></a>
### Module 1. Tài khoản & xác thực

_Chưa có tính năng nào xong._

<a id="xong-2"></a>
### Module 2. Danh mục & tìm kiếm tour

_Chưa có tính năng nào xong._

<a id="xong-3"></a>
### Module 3. Đặt tour & giữ chỗ

_Chưa có tính năng nào xong._

<a id="xong-4"></a>
### Module 4. Thanh toán

_Chưa có tính năng nào xong._

<a id="xong-5"></a>
### Module 5. Đơn của khách & thông báo

_Chưa có tính năng nào xong._

<a id="xong-6"></a>
### Module 6. CMS sản phẩm (admin)

_Chưa có tính năng nào xong._

<a id="xong-7"></a>
### Module 7. Vận hành đơn

_Chưa có tính năng nào xong._

<a id="xong-8"></a>
### Module 8. Quản trị & báo cáo

_Chưa có tính năng nào xong._

<a id="xong-9"></a>
### Module 9. Hạ tầng & vận hành

- Khung web `web/`: React Router v8 render phía server, loader gọi API và chuyển tiếp cookie, Vitest, lệnh lint / test / build (chưa có phiên bản) - 🟡 phần còn lại ở 2.1 ([M9.1](#m9-1))

<a id="xong-n"></a>
### N. Tính năng mới

_Chưa có tính năng nào xong._

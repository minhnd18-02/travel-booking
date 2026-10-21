# Rủi ro & pháp lý: Web booking tour du lịch

> Phiên bản 0.2, 2026-10-21. Đây là danh sách các điểm cần kiểm tra, **không phải tư vấn pháp lý**.
> **Dự án chỉ chạy demo / local, không mở bán.** Mục 1 đến 3 và các phần pháp lý của mục 4, 5 chỉ để tham khảo nếu sau này triển khai thật; không phải yêu cầu của bản demo. Rủi ro kỹ thuật ở mục 6 (bán quá chỗ, webhook, giá, dữ liệu) vẫn phải xử lý trong code.
> Phạm vi và câu hỏi mở: [phạm vi MVP](pham-vi-mvp.md). Thiết kế kỹ thuật: [kiến trúc thiết kế](../02-ky-thuat/kien-truc-thiet-ke.md).

## Mục lục

1. [Điều kiện kinh doanh lữ hành](#1-điều-kiện-kinh-doanh-lữ-hành)
2. [Website thương mại điện tử và bảo vệ người tiêu dùng](#2-website-thương-mại-điện-tử-và-bảo-vệ-người-tiêu-dùng)
3. [Thanh toán](#3-thanh-toán)
4. [Dữ liệu cá nhân](#4-dữ-liệu-cá-nhân)
5. [Nội dung và hình ảnh](#5-nội-dung-và-hình-ảnh)
6. [Rủi ro vận hành và kỹ thuật](#6-rủi-ro-vận-hành-và-kỹ-thuật)
7. [Ma trận rủi ro](#7-ma-trận-rủi-ro)

---

## 1. Điều kiện kinh doanh lữ hành

- Bán **tour trọn gói** là hoạt động kinh doanh lữ hành. Pháp luật Việt Nam yêu cầu doanh nghiệp có giấy phép phù hợp (nội địa hoặc quốc tế). **Cần xác minh** loại giấy phép, điều kiện ký quỹ và hướng dẫn viên theo quy định hiện hành (Q-01).
- Nếu công ty **chưa** có giấy phép mà chỉ làm trang trung gian bán tour của đơn vị khác, mô hình pháp lý khác hẳn (đại lý, sàn thương mại điện tử). Phải chốt mô hình trước, vì nó quyết định ai là bên ký hợp đồng với khách và ai chịu trách nhiệm hoàn tiền.
- Trang chi tiết tour nên hiển thị tên đơn vị tổ chức tour và thông tin pháp lý của công ty.

## 2. Website thương mại điện tử và bảo vệ người tiêu dùng

Website bán hàng cần được **thông báo hoặc đăng ký với cơ quan quản lý thương mại điện tử** (cần xác minh thủ tục hiện hành). Nội dung tối thiểu trên website:

| Hạng mục | Ghi chú |
|---|---|
| Thông tin doanh nghiệp | Tên, địa chỉ, mã số thuế, liên hệ, giấy phép lữ hành |
| Giá | Hiển thị giá cuối (đã gồm thuế, phí, phụ thu), nêu rõ bao gồm và không bao gồm |
| Điều khoản đặt tour | Khách phải **tích đồng ý** trước khi thanh toán (M3.4); lưu thời điểm và phiên bản điều khoản đã đồng ý |
| Chính sách hủy, hoàn tiền | Công khai, trùng khớp với cấu hình ở M6.4; áp dụng cho đơn lúc đặt, không đổi hồi tố |
| Quy trình giải quyết khiếu nại | Kênh liên hệ và thời hạn phản hồi |
| Chính sách bảo mật | Xem mục 4 |

Nên lưu **bản chụp (snapshot) của điều khoản và chính sách hủy** vào đơn lúc đặt, để tranh chấp sau này có bằng chứng khách đã thấy và đồng ý điều gì.

## 3. Thanh toán

- **Chỉ dùng cổng thanh toán được cấp phép tại Việt Nam.** Không tự nhận tiền qua tài khoản cá nhân rồi đối chiếu thủ công. Chọn cổng ở Q-04; cần xác minh phí, thời gian ký hợp đồng, hạn mức và chính sách hoàn tiền của cổng.
- **Không lưu dữ liệu thẻ** (BR-09). Dùng trang thanh toán do cổng cung cấp (chuyển hướng hoặc nhúng của cổng), nhờ đó giảm phạm vi tuân thủ bảo mật thẻ.
- **Hóa đơn điện tử:** cần xác minh nghĩa vụ xuất hóa đơn và nhà cung cấp (Q-08, M4.6).
- **Hoàn tiền:** cổng có thể hoàn về đúng phương thức gốc hoặc yêu cầu xử lý thủ công (M7.3). Thời gian tiền về tài khoản khách do ngân hàng và cổng quyết định, cần nói rõ trong chính sách hủy.
- **Đối soát:** so khớp giao dịch của hệ thống với báo cáo của cổng mỗi ngày (M4.5), vì webhook có thể mất.
- **Chargeback và tranh chấp thẻ** (nếu nhận thẻ quốc tế ở M4.8): cần quy trình và lưu bằng chứng giao dịch.

## 4. Dữ liệu cá nhân

Hệ thống thu thập họ tên, email, số điện thoại, ngày sinh và có thể số hộ chiếu hoặc CCCD của hành khách (Q-12). Cần xác minh yêu cầu của quy định bảo vệ dữ liệu cá nhân hiện hành tại Việt Nam, gồm thông báo mục đích, sự đồng ý, thời hạn lưu trữ và quyền của chủ thể dữ liệu.

Hành động kỹ thuật tương ứng:

- **Thu tối thiểu:** chỉ yêu cầu giấy tờ khi tour cần (D-10); ngày sinh để tính loại khách (BR-11).
- **Mã hóa** số giấy tờ khi lưu; chỉ `staff` và `admin` xem được, mỗi lần xem ghi audit log.
- **Hiển thị che bớt** trên giao diện và trong email (chỉ hiện vài ký tự cuối).
- **Xóa hoặc ẩn danh** dữ liệu hành khách sau thời hạn lưu (đề xuất: sau khi tour kết thúc và qua thời hiệu khiếu nại; cần xác nhận với luật sư).
- **Truy cập đúng chủ:** `customer` chỉ đọc được đơn và hành khách của mình (kiểm tra ở server).
- **Chia sẻ với bên thứ ba:** chỉ chia sẻ phần cần thiết (cổng thanh toán, nhà cung cấp email); ghi rõ trong chính sách bảo mật.

## 5. Nội dung và hình ảnh

- Ảnh, mô tả và lịch trình tour phải là **nội dung của công ty hoặc có giấy phép sử dụng** (Q-11). Không lấy ảnh từ trang khác hoặc từ nhà cung cấp mà chưa có thỏa thuận; ảnh chụp từ Internet có thể thuộc bản quyền của người chụp.
- CMS nên cho ghi **nguồn / người giữ bản quyền** của ảnh để tra lại được.
- **Đánh giá của khách** (GĐ2): chỉ khách có đơn hoàn thành mới được đánh giá (BR-13). Không tạo hoặc mua đánh giá giả; có quy trình báo cáo và gỡ nội dung vi phạm.
- Không dùng nhãn hiệu, logo của hãng khác (hãng bay, khách sạn) theo cách gây hiểu nhầm là đối tác nếu không có thỏa thuận.

## 6. Rủi ro vận hành và kỹ thuật

| Rủi ro | Hậu quả | Biện pháp |
|---|---|---|
| Bán quá số chỗ | Phải hủy tour của khách đã trả tiền, mất uy tín, bồi thường | Trừ chỗ nguyên tử trong DB, ràng buộc CHECK, test đồng thời (BR-01) |
| Giữ chỗ hàng loạt để chiếm chỗ (bot, đối thủ) | Chỗ bị khóa, không bán được | Rate limit, captcha, giới hạn số đơn đang chờ mỗi tài khoản, hạn giữ ngắn (M9.6) |
| Webhook đến trùng, trễ hoặc mất | Đơn thanh toán rồi mà không xác nhận, hoặc xác nhận hai lần | Xử lý idempotent, đối soát hằng ngày, cảnh báo đơn chờ quá lâu (BR-06, M4.5) |
| Tiền về sau khi hết hạn giữ chỗ | Khách trả tiền nhưng không còn chỗ | Còn chỗ thì xác nhận, hết chỗ thì hoàn tự động và báo nhân viên (BR-07) |
| Giả mạo kết quả thanh toán | Đơn được xác nhận mà không có tiền | Xác thực chữ ký, đối chiếu số tiền và mã đơn, không tin trang chuyển hướng (BR-05) |
| Khách sửa giá ở trình duyệt | Bán sai giá | Giá luôn do server tính (mục 3 của phạm vi) |
| Lộ dữ liệu hành khách | Phạt, mất uy tín | Mã hóa, phân quyền, audit log, kiểm tra IDOR |
| Phụ thuộc một cổng thanh toán | Cổng lỗi thì không bán được | Lớp trừu tượng (D-04), cảnh báo, kênh thanh toán dự phòng nếu cần |
| Chính sách hủy mơ hồ | Tranh chấp với khách | Công khai, lưu snapshot vào đơn, tính tự động theo bậc (BR-08) |
| Tour bị hủy bởi công ty | Phải hoàn tiền hàng loạt | Công cụ hủy lịch khởi hành và hoàn tiền hàng loạt (đưa vào M7.x khi cần), thông báo khách |

## 7. Ma trận rủi ro

| Mức | Rủi ro |
|---|---|
| **Cao, xử lý trong code** | Bán quá chỗ; xử lý sai webhook; bảo vệ dữ liệu hành khách |
| **Trung bình** | Giữ chỗ hàng loạt; chênh lệch đối soát; chính sách hủy mơ hồ |
| **Thấp, theo dõi** | Hiệu năng tìm kiếm khi nhiều tour; đánh giá giả (khi bật GĐ2) |
| **Chỉ khi triển khai thật** | Giấy phép lữ hành và mô hình pháp lý (mục 1); website thương mại điện tử (mục 2); cổng thanh toán được cấp phép (mục 3); bản quyền ảnh (mục 5) |

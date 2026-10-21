# Tài liệu dự án: Web booking tour du lịch

Web đặt **tour trọn gói** trực tuyến: admin tự nhập tour và lịch khởi hành, khách chọn ngày đi và **thanh toán online ngay**. Stack: backend .NET 10 (ASP.NET Core API), frontend React Router v8 (render phía server), PostgreSQL; môi trường dev dựng bằng Aspire. Giai đoạn hiện tại: lập kế hoạch, chưa có code. **Phạm vi: chỉ chạy demo / local** với cổng thanh toán giả lập; không triển khai production, không mở bán.

## Đọc theo thứ tự

| Thứ tự | File | Nội dung |
|---|---|---|
| 1 | [01-yeu-cau/pham-vi-mvp.md](01-yeu-cau/pham-vi-mvp.md) | Mục tiêu, phạm vi MVP, vai trò, từ điển, 59 tính năng theo module, luật nghiệp vụ (BR-xx), câu hỏi mở (Q-xx) |
| 2 | [01-yeu-cau/rui-ro-phap-ly.md](01-yeu-cau/rui-ro-phap-ly.md) | Rủi ro kỹ thuật cần xử lý trong code; điều kiện pháp lý (chỉ tham khảo, bản demo không cần) |
| 3 | [02-ky-thuat/kien-truc-thiet-ke.md](02-ky-thuat/kien-truc-thiet-ke.md) | Kiến trúc, mô hình dữ liệu, luồng giữ chỗ và thanh toán, API, bảo mật, quyết định (D-xx) |
| 4 | [02-ky-thuat/wireframe-trang-chinh.md](02-ky-thuat/wireframe-trang-chinh.md) | Khung các màn hình chính |
| 5 | [03-san-pham/roadmap.md](03-san-pham/roadmap.md) | Trạng thái và thứ tự làm |
| 6 | [03-san-pham/changelog.md](03-san-pham/changelog.md) | Lịch sử phiên bản |

## Quy ước

- **Mã tính năng** `M<module>.<số>` dùng chung giữa phạm vi và roadmap; `N<số>` cho tính năng mới hoặc subsystem lớn. Mã đã cấp không đổi, không tái sử dụng.
- **Q-xx** là câu hỏi mở, **D-xx** là quyết định kỹ thuật, **BR-xx** là luật nghiệp vụ lõi.
- **Giai đoạn:** GĐ0 (walking skeleton), GĐ1 (hoàn thiện MVP), GĐ2 (tăng chuyển đổi), GĐ3 (mở rộng). MVP = GĐ0 + GĐ1.
- **Roadmap luôn đúng với code:** quy tắc cập nhật ở [.claude/rules/docs/roadmap-sync.md](../.claude/rules/docs/roadmap-sync.md).
- Các mục pháp lý chỉ để tham khảo nếu sau này triển khai thật.

## Việc cần chốt trước khi bắt đầu code

1. **Q-05, Q-06** Thời hạn giữ chỗ và chính sách hủy, hoàn tiền.

## Dùng với Claude Code

- `/business-flow`: làm rõ một quy trình nghiệp vụ trước khi code.
- `/architecture-plan`: lập thiết kế cho một subsystem lớn (mục 2.4 của roadmap).
- Rule `roadmap-sync` tự áp dụng mỗi khi code xong hoặc thêm tính năng.

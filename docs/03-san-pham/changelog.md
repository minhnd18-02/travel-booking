# Changelog

Mỗi lần ra phiên bản mới, thêm một mục ở đầu danh sách, đồng thời cập nhật [roadmap](roadmap.md) theo quy tắc [roadmap-sync](../../.claude/rules/docs/roadmap-sync.md). Định dạng: `## vX.Y.Z (YYYY-MM-DD)` rồi các nhóm *Thêm*, *Sửa*, *Đổi*, *Bỏ*.

## Chưa phát hành

- Đổi frontend (2026-10-21): bỏ SPA, dùng React Router v8 chế độ framework (render phía server); trình duyệt chỉ gọi server web, loader và action gọi .NET API và chuyển tiếp cookie. M9.5 trở lại SEO đầy đủ.
- Chốt stack (2026-10-21): .NET 10 API + React Vite SPA, Aspire cho môi trường dev, Mailpit, cookie auth (Identity), Hangfire chạy trong API, ảnh lưu thư mục local; bỏ Next.js, Redis, MinIO, Sentry. Đổi mô tả M1.2, M9.1, M9.2, M9.5.
- Tài liệu kế hoạch v0.2 (2026-10-21): bỏ yêu cầu chạy thật, dự án chỉ chạy demo / local với cổng thanh toán giả lập. Bỏ M4.2 (cổng thật), M9.4 (backup, diễn tập restore), M9.7 (tài khoản production), môi trường staging / production và danh sách việc trước khi mở bán.
- Tài liệu kế hoạch v0.1 (2026-10-21): phạm vi, rủi ro pháp lý, kiến trúc, wireframe, roadmap cho web booking tour du lịch. Chưa có code.

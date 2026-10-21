# Roadmap Sync: luôn giữ `docs/03-san-pham/roadmap.md` đúng thực tế

> **Mức độ:** BẮT BUỘC.
> **Quy tắc:** Mỗi khi (1) code xong một tính năng có trong roadmap, hoặc (2) người dùng yêu cầu thêm tính năng mới / ý tưởng mới, **PHẢI** cập nhật [docs/03-san-pham/roadmap.md](../../../docs/03-san-pham/roadmap.md) trong cùng lượt làm việc. Không để roadmap lệch với code.

---

## Cấu trúc roadmap (giữ nguyên, không tự đổi)

| Mục | Nội dung |
|---|---|
| Header | Ngày cập nhật, phiên bản mới nhất, ký hiệu |
| Mục lục | Liên kết tới các mục 1 đến 5 (anchor `muc-...`) |
| 1. Tổng quan tiến độ | Bảng module 1 đến 9 (cột App: Khách / CMS / Vận hành / Admin / Hệ thống) và bảng tóm tắt N: trạng thái + "Còn lại" |
| 2.1 Làm được ngay | Việc còn lại của module có sẵn, mã `M<số module>.<số>`, có cột GĐ |
| 2.2 Tính năng mới | Mã `N<số>`, tính năng ngoài phạm vi gốc |
| 2.3 Cần credential 🔑 | Cần tài khoản / khóa của bên thứ ba |
| 2.4 Subsystem lớn 🏗 | Mỗi cái một đợt làm riêng |
| 3. Ưu tiên tiếp theo | Thứ tự theo giai đoạn GĐ0 đến GĐ3, **chỉ chứa việc CHƯA xong** |
| 4. Cách thêm tính năng | Mã N tiếp theo (`hiện tại: N..`) và bảng mã M tiếp theo của từng module |
| 5. Đã xong | Theo module, mỗi module có anchor `xong-<số>`; tính năng mới có anchor `xong-n` |

Ký hiệu: ✅ xong · 🟡 một phần · ⬜ chưa làm · 🔑 cần credential · 🏗 subsystem lớn.

Phạm vi gốc của từng tính năng nằm ở [pham-vi-mvp.md](../../../docs/01-yeu-cau/pham-vi-mvp.md). Roadmap ghi **trạng thái**, phạm vi ghi **nội dung**; hai bên phải dùng cùng mã `M<module>.<số>`.

---

## Trigger 1: Code xong một tính năng

Chỉ áp dụng khi tính năng **đã chạy được và đã verify** (chạy ứng dụng, gọi API, xem giao diện). Chưa verify thì không đánh ✅.

1. **Xóa dòng** khỏi mục 2.x (backlog).
2. **Thêm một dòng** vào mục 5, đúng module, kèm phiên bản nếu có: `- Tên tính năng (v1.x.y)`.
   Module hoặc N mới xuất hiện ở mục 5 thì thêm anchor `<a id="xong-<số>"></a>` trước tiêu đề và liên kết số module ở mục 1 tới đó.
   Không dùng `<details>` ở mục 5 (liên kết không nhảy vào được khi đang thu gọn).
3. **Mục 1:** cập nhật cột "Còn lại" của module; hết việc thì trạng thái ✅ và "Còn lại" = `-`.
   Với N: cập nhật số "Xong x/y" và danh sách còn lại.
4. **Mục 3:** bỏ tính năng khỏi danh sách ưu tiên. Nếu cả một giai đoạn đã xong, ghi rõ "GĐx: xong" thay vì xóa trắng.
5. **Header:** cập nhật `Cập nhật: YYYY-MM-DD` và phiên bản mới nhất.
6. Ra phiên bản mới thì đồng thời thêm mục vào [changelog.md](../../../docs/03-san-pham/changelog.md).

### Làm một phần

- Giữ dòng ở mục 2.x, đổi trạng thái thành 🟡, ghi rõ phần còn thiếu trong cột tính năng.
- Phần đã xong ghi vào mục 5 với hậu tố `- 🟡 phần còn lại ở 2.x`.
- Mục 1: module chuyển ⬜ thành 🟡.

---

## Trigger 2: Người dùng thêm tính năng mới / ý tưởng mới

Áp dụng khi người dùng nói "thêm tính năng...", "muốn có...", "sau này làm...", hoặc đưa ra yêu cầu chưa có trong roadmap (kể cả khi làm luôn trong lượt đó).

1. **Kiểm tra trùng:** tìm trong roadmap và trong [pham-vi-mvp.md](../../../docs/01-yeu-cau/pham-vi-mvp.md). Đã có thì cập nhật mô tả, không tạo dòng mới.
2. **Chọn mục:**
   - Thuộc module có sẵn (Tài khoản, Danh mục và tìm kiếm tour, Đặt tour và giữ chỗ, Thanh toán, Đơn của khách và thông báo, CMS sản phẩm, Vận hành đơn, Quản trị và báo cáo, Hạ tầng) → **2.1**, mã `M<số module>.<số tiếp theo>` (lấy ở bảng mục 4, rồi tăng số ở bảng đó).
   - Tính năng mới ngoài phạm vi gốc → **2.2**, mã `N<số tiếp theo>` (lấy từ mục 4, rồi tăng số ở mục 4).
   - Cần credential / hạ tầng ngoài → **2.3**. Thêm loại dịch vụ, cổng đối tác, ứng dụng di động, đa tiền tệ, hệ thống cỡ lớn → **2.4**.
3. **Điền đủ cột:** Mã · Tính năng (1 câu cụ thể) · App (Khách / CMS / Vận hành / Admin / Hệ thống) · GĐ (nếu có cột này) · Trạng thái ⬜.
   Ô Mã có anchor: `<a id="m3-7"></a>M3.7` hoặc `<a id="n3"></a>N3` (id viết thường, duy nhất trong file).
4. **Mục 1:** thêm liên kết `[M3.7](#m3-7)` vào cột "Còn lại" của module; module đang ✅ thì đổi 🟡. Với N: cập nhật bảng tóm tắt.
5. Nếu người dùng nói rõ độ ưu tiên thì chèn vào mục 3 đúng vị trí và đúng giai đoạn.
6. Tính năng mới có ảnh hưởng tới phạm vi MVP thì cập nhật cả [pham-vi-mvp.md](../../../docs/01-yeu-cau/pham-vi-mvp.md) (bảng module tương ứng).
7. Làm xong luôn trong lượt thì chạy tiếp Trigger 1.

---

## Quy tắc chung

- **Liên kết:** xóa một dòng có anchor thì sửa hoặc bỏ mọi liên kết `(#id)` trỏ tới nó (mục 1, 3). Không để liên kết chết.
- **Không đổi số mã** đã cấp (M / N). Mã N đã dùng không tái sử dụng, kể cả khi tính năng bị bỏ.
- **Bỏ tính năng** theo yêu cầu người dùng: gạch `~~...~~` và ghi `(bỏ, YYYY-MM-DD)`, không xóa im lặng.
- **Không đánh ✅ khi chưa verify.** Nghi ngờ thì 🟡 kèm ghi chú.
- **Tính năng liên quan tiền (module 4, M3.3, M5.2, M7.3) chỉ đánh ✅** sau khi đã test với cổng thanh toán giả lập (dự án chỉ chạy demo, không có cổng thật), gồm webhook trùng, webhook đến trễ sau khi hết hạn giữ chỗ, sai chữ ký và sai số tiền; test đồng thời chứng minh không bán quá chỗ. Chưa thử đủ thì 🟡.
- **Không tự đổi cấu trúc** mục 1 đến 5. Muốn đổi thì hỏi người dùng.
- Sửa bằng `Edit` từng chỗ, không viết lại toàn file.
- Sau khi cập nhật, báo người dùng **một dòng**: `Roadmap: <mã> -> <trạng thái>`.

---

## Checklist trước khi kết thúc lượt

- [ ] Có tính năng nào vừa code xong và verify trong lượt này? Đã chuyển sang mục 5, cập nhật mục 1 và 3?
- [ ] Người dùng có nhắc tính năng mới? Đã thêm vào 2.x với mã đúng, tăng mã tiếp theo ở mục 4, cập nhật mục 1?
- [ ] Mọi anchor và liên kết `(#...)` vẫn trỏ đúng, không còn liên kết chết?
- [ ] Đã cập nhật ngày ở header?
- [ ] Ra phiên bản mới thì đã thêm mục vào `changelog.md`?

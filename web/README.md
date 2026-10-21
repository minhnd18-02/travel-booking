# web

Frontend React Router (chế độ framework, render phía server). Xem [kiến trúc](../docs/02-ky-thuat/kien-truc-thiet-ke.md).

Chạy cùng API bằng Aspire: `dotnet run --project ../backend/src/AppHost`.

Chạy riêng (API đã chạy sẵn): đặt `API_URL` rồi `npm run dev`.

| Lệnh | Việc |
|---|---|
| `npm run dev` | Server dev có HMR |
| `npm run lint` | Sinh kiểu route và kiểm tra TypeScript |
| `npm test` | Unit test (Vitest) |
| `npm run build` | Build cho server Node |

// Gọi .NET API từ loader / action. Chỉ chạy ở server web (đuôi .server.ts),
// trình duyệt không bao giờ gọi API trực tiếp.

type Env = Record<string, string | undefined>;

// Aspire truyền địa chỉ API qua biến môi trường khi web có WithReference(api).
// Ngoài Aspire thì đặt API_URL.
export function resolveApiBaseUrl(env: Env = process.env): string {
  const url =
    env.API_URL ??
    env.API_HTTPS ??
    env.API_HTTP ??
    env.services__api__https__0 ??
    env.services__api__http__0;
  if (!url) {
    throw new Error(
      "Chưa cấu hình địa chỉ API: chạy qua Aspire AppHost hoặc đặt biến API_URL.",
    );
  }
  return url.replace(/\/+$/, "");
}

// Chuyển tiếp cookie đăng nhập của trình duyệt sang API để API tự quyết định quyền (D-12).
export async function apiFetch(
  request: Request,
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const headers = new Headers(init.headers);
  const cookie = request.headers.get("Cookie");
  if (cookie) headers.set("Cookie", cookie);
  headers.set("Accept", "application/json");

  return fetch(`${resolveApiBaseUrl()}${path}`, { ...init, headers });
}

import { describe, expect, it } from "vitest";

import { resolveApiBaseUrl } from "./api.server";

describe("resolveApiBaseUrl", () => {
  it("ưu tiên API_URL", () => {
    expect(
      resolveApiBaseUrl({
        API_URL: "http://localhost:5000/",
        services__api__http__0: "http://localhost:6000",
      }),
    ).toBe("http://localhost:5000");
  });

  it("dùng biến do Aspire truyền khi không có API_URL", () => {
    expect(
      resolveApiBaseUrl({ services__api__https__0: "https://localhost:7001" }),
    ).toBe("https://localhost:7001");
  });

  it("báo lỗi rõ ràng khi chưa cấu hình", () => {
    expect(() => resolveApiBaseUrl({})).toThrow(/API_URL/);
  });
});

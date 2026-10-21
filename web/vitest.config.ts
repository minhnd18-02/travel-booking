import { defineConfig } from "vitest/config";

// Cấu hình riêng cho test, không nạp plugin React Router của vite.config.ts.
export default defineConfig({
  resolve: { tsconfigPaths: true },
  test: { include: ["app/**/*.test.ts?(x)"], environment: "node" },
});

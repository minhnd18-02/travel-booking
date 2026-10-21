import { apiFetch } from "~/lib/api.server";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Đặt tour du lịch trọn gói" },
    {
      name: "description",
      content: "Chọn tour, chọn ngày khởi hành và thanh toán trực tuyến.",
    },
  ];
}

// Trang tạm của walking skeleton (M9.1): kiểm tra luồng server web -> .NET API.
export async function loader({ request }: Route.LoaderArgs) {
  try {
    const res = await apiFetch(request, "/health");
    return { apiStatus: res.ok ? "ok" : `lỗi ${res.status}` };
  } catch {
    return { apiStatus: "không kết nối được" };
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const ok = loaderData.apiStatus === "ok";
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Đặt tour du lịch</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Khung ứng dụng đang dựng. Trang chủ thật làm ở M2.1.
      </p>
      <p className="mt-6">
        Trạng thái API:{" "}
        <span className={ok ? "text-green-600" : "text-red-600"}>
          {loaderData.apiStatus}
        </span>
      </p>
    </main>
  );
}

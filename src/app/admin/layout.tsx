// app/admin/layout.tsx
export const metadata = {
  title: "Admin Panel",
  description: "Quản trị hệ thống",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "H7-Authentication",
  // description: "Quản trị hệ thống",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="light" lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

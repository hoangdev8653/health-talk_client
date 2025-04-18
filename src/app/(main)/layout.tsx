import Footer from "@/templates/footer/page";
import Header from "@/templates/header/page";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "H7 Life",
  // description: "Quản trị hệ thống",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="light" lang="en">
      <body>
        <Header />
        <div>{children}</div>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}

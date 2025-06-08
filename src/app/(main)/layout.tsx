import Footer from "@/templates/footer/page";
import Header from "@/templates/header/page";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "H7 Life",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-layout">
      <Header />
      <div>{children}</div>
      <BackToTop />
      <Footer />
    </div>
  );
}

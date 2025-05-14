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
    <html className="light" lang="en">
      <body className="antialiased">
        <Header />
        <div>{children}</div>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}

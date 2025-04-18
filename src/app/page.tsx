import Header from "@/templates/header/page";
import Footer from "@/templates/footer/page";
import BackToTop from "@/components/BackToTop";
import Home from "@/app/(main)/home/page";

export default function Index() {
  return (
    <div>
      <Header />
      <Home />
      <BackToTop />
      <Footer />
    </div>
  );
}

import UtilityBar from "@/components/storefront/UtilityBar";
import Header from "@/components/storefront/Header";
import Footer from "@/components/storefront/Footer";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

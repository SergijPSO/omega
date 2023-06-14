// import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/Footer/Footer";
import MainContent from "@/components/MainContent/MainContent";

export default function Home() {
  return (
    <Layout>
      <MainContent />
      <Footer />
    </Layout>
  );
}

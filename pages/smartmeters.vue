<template>
  <div>
    <NavBar />
    <PageHeader title="Our Services" />
    <ServicePage />
    <FooterTwo />
  </div>
</template>

<script>

  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ServicePage from "../components/ServicePage";
  // import NavTwo from "../components/NavTwo";
  import NavBar from "@/components/NavBar";
  export default {
    components: {
      NavBar,
      ServicePage,
      PageHeader,
      FooterTwo,
      // NavTwo
    },
    head(){
      return {
        title: "Gama Inc | Smart Meters"
      }
    }
  }
</script>

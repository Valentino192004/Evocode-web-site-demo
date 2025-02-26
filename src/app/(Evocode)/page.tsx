import { MainHeader, MainHome } from "@/Components"
import { CursoContainer } from "@/Components/home/CursoContainer"
import PricingSection from "@/Components/pricing-card/PlansComponent"


const PageHome = () => {
  return (
    <main className="relative">
        <MainHeader/>
  <MainHome  className="w-[100%]  main-home  mx-auto flex flex-col gap-16">
          <CursoContainer/>
          <PricingSection/>
  </MainHome>
  </main>
  )
}

export default PageHome

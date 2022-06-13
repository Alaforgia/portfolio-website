import HeroStyles from "../../components/ui/HeroStyles";
import Layout from "../../components/layout/Layout";

function HeroPage(): any {
  return (
    <>
      <Layout>
        <HeroStyles>
          <div>
            <h1>HI. I&apos;m Tony. A Software Engineer</h1>
            <h3>Photo?</h3>
          </div>
          <div>
            <h3>Projects/Journey</h3>
          </div>
          <div>
            <h3>Small blurb + link</h3>
          </div>
        </HeroStyles>
      </Layout>
    </>
  );
}

export default HeroPage;

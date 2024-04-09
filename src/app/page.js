import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className=" text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className=" max-w-md mx-auto mt-4 text-gray-500 flex-col gap-4">
        <p >
          @user-id1fh6rr4c 3 months ago You can use class-validators during the
          auth POST to validate the request.body. This would also decouple more
          logic from the Repository/Database layer, which also follows better
          Clean Architecture paradigms.
        </p>
        <p>
          @user-id1fh6rr4c 3 months ago You can use class-validators during the
          auth POST to validate the request.body. This would also decouple more
          logic from the Repository/Database layer, which also follows better
          Clean Architecture paradigms.
        </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={"Don't Hesitate"} mainHeader={"Contact Us"} />
        <a className="text-4xl underline text-gray-500" href="tel:000999000">00 000 888 987</a>
      </section>

    </>
  );
}

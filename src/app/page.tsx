import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { CarouselSize } from "./resources/CarouselSize";
import DoctorImg from "@/app/images/doctor.png";

export default function Home() {

  return (
    <>
      <main className="flex flex-col items-center">
        <section className="footersvg bg-[#00607d] dark:bg-[#002a37] w-full">
          <div className="py-10 sm:py-16 lg:py-24">
            <div className="px-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <p className="text-base font-semibold tracking-wider text-zinc-200">
                    Happy Smile
                  </p>
                  <h1 className="mt-4 text-5xl font-bold text-white lg:mt-8 sm:text-6xl xl:text-8xl">
                    Empowering Happier Days with Reliable Dental Care
                  </h1>
                  <p className="mt-4 text-base text-white lg:mt-8 sm:text-xl">
                    Fast-track your career with guidance from the right mentor
                  </p>

                  <Link
                    href="/about"
                    className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-12 hover:bg-yellow-400 focus:bg-yellow-400"
                    role="button"
                  >
                    Book Appointment
                    <svg
                      className="w-6 h-6 ml-5 -mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </div>

                <div>
                  <Image src={DoctorImg} className="w-full" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 dark:bg-gray-200 mt-10 mb-12 sm:mb-0 z-10 sm:-mt-10 w-[70%] rounded-2xl shadow-xl sm:shadow-2xl px-5 py-6 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                1500
              </span>
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-900">
              Online Appointment
            </p>
          </div>

          <div>
            <h3 className="font-bold text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                120k
              </span>
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-900">
              Recovered Patients
            </p>
          </div>

          <div>
            <h3 className="font-bold text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                96%
              </span>
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-900">
              Satisfaction Rate
            </p>
          </div>
        </section>

        {/* About Section  */}
        <section className="w-full aboutsvg bg-[#FFFFFF] dark:bg-[#c3c3c3]">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 px-5 sm:px-6 lg:px-8 w-full flex-wrap md:flex-nowrap flex items-center justify-between gap-16 ">
          <div className=" flex flex-col gap-5 w-full lg:w-1/2">
            <h1 className="text-4xl text-black sm:5xl lg:text-6xl font-semibold">
              Clrafting Healthy Smiles One Service at a Time
            </h1>
            <p className="sm:w-[400px] text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              saepe vero debitis laboriosam voluptates doloremque provident
              praesentium nostrum? Est fuga quas adipisci totam doloremque quo
              perspiciatis expedita, amet sint enim.
            </p>
            <div>
              <Link href="/about">
                <button className="border-2 border-black px-14 sm:px-20 py-3 sm:py-5 font-semibold text-sm hover:bg-black hover:text-white duration-300 text-black rounded-full">
                  About Clinic
                </button>
              </Link>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://avitahealth.in/wp-content/uploads/2023/07/1-2.png)`,
            }}
            className="bg-cover bg-center bg-white rounded-2xl h-[350px] lg:h-[500px] w-full lg:w-1/2 "
          ></div>
        </div>
        </section>

        {/* services section  */}

        <section className="w-full bg-[#007eff1f]">
          <div className=" mx-auto max-w-7xl py-20 sm:py-28 px-5 sm:px-6 lg:px-8 flex flex-col gap-16">
            <div className="flex-wrap lg:flex-nowrap flex justify-between gap-5 ">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 dark:text-white">
                Elevating Oral Health <br />
                with Personalized <br />
                Service
              </h1>
              <div className="lg:pl-56">
                <p className="text-[11px] sm:text-[12px] text-sky-950 dark:text-white sm:w-[300px] sm:text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  saepe vero debitis laboriosam voluptates doloremque provident
                  praesentium nostrum? Est fuga quas adipisci totam doloremque
                  perspiciatis expedita, amet sint enim.
                </p>

                <Link href="/service">
                  <button className="border-[1px] border-sky-950 px-7 py-2 font-semibold text-[8px] bg-sky-950 dark:bg-white dark:text-sky-950 dark:hover:bg-gray-500 dark:hover:text-white hover:bg-white hover:text-sky-950 duration-300 text-white rounded-full mt-3">
                    All Services
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap px-6 lg:flex-nowrap items-center justify-center gap-5">
              <div className="w-[400px] rounded-xl shadow-xl border-2 border-sky-900  bg-blue-100 p-5 text-center flex flex-col gap-2">
                <h1 className=" text-2xl sm:text-3xl text-sky-950 font-semibold">
                  General Dentistry Services
                </h1>
                <p className="text-[11px] sm:text-[16px]  text-slate-800">
                  Preventive care, cleanings, fillings, extractions and
                  diagnosis for overall oral health.
                </p>
                <Button
                  size="lg"
                  variant="link"
                  className="font-semibold text-blue-600 text-left pl-0"
                >
                  Learn More
                </Button>
              </div>
              <div className="w-[400px] rounded-xl shadow-xl border-2 border-sky-900  bg-blue-100 p-5 text-center flex flex-col gap-2">
                <h1 className=" text-2xl sm:text-3xl text-sky-950 font-semibold">
                  Cosmetic Dentistry Solutions
                </h1>
                <p className="text-[11px] sm:text-[16px]  text-slate-800">
                  Smile makeovers with teeth whitening, veneers, bonding for
                  enhancing your smile’s appearance.
                </p>
                <Button
                  size="lg"
                  variant="link"
                  className="font-semibold text-blue-600 text-left pl-0"
                >
                  Learn More
                </Button>
              </div>
              <div className="w-[400px] rounded-xl shadow-xl border-2 border-sky-900  bg-blue-100 p-5 text-center flex flex-col gap-2">
                <h1 className=" text-2xl sm:text-3xl text-sky-950 font-semibold">
                  Oral & Maxillofacial Surgery
                </h1>
                <p className="text-[11px] sm:text-[16px]  text-slate-800">
                  Surgical treatments for impacted teeth, facial trauma, cysts,
                  tumors and jaw issues.
                </p>
                <Button
                  size="lg"
                  variant="link"
                  className="font-semibold text-blue-600 text-left pl-0"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* review section  */}
        <section className=" bg-[#FFFFFF] dark:bg-[#c3c3c3] aboutsvg w-full dark:text-gray-800">
          <div className="container px-5 py-12 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-5">
              <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 className="text-3xl sm:text-5xl font-bold">
                  What our patients think of us
                </h2>
                <p className="dark:text-gray-600">
                  Pri ex magna scaevola moderatius. Nullam accommodare no vix,
                  est ei diceret alienum, et sit cetero malorum. Et sea iudico
                  consequat, est sanctus adipisci ex.
                </p>
              </div>
              <div className="p-6 xl:col-span-3">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid content-center gap-4 ">
                    <div className="p-6 rounded shadow-md bg-sky-100 dark:bg-gray-200">
                      <p>
                        An audire commodo habemus cum. Ne sed corrumpit
                        repudiandae. Tota aliquip democritum pro in, nec
                        democritum intellegam ne. Propriae volutpat dissentiet
                        ea sit, nec at lorem inani tritani, an ius populo
                        perfecto vituperatoribus. Eu cum case modus salutandi,
                        ut eum vocent sensibus reprehendunt.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?1"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md bg-sky-100 dark:bg-gray-200">
                      <p>
                        Sit wisi sapientem ut, pri civibus temporibus
                        voluptatibus et, ius cu hinc fabulas. Nam meliore
                        minimum et, regione convenire cum id. Ex pro eros mucius
                        consectetuer, pro magna nulla nonumy ne, eam putent
                        iudicabit consulatu cu.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?2"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md bg-sky-100 dark:bg-gray-200">
                      <p>
                        Putant omnium elaboraret per ut. Id dicta tritani
                        nominavi quo, mea id justo errem elaboraret. Agam mollis
                        scripserit ea his, ut nec postea verear persecuti. Ea
                        noster senserit eam, ferri omittantur ei nec. Id mel
                        solet libris efficiantur, commune explicari et eos. Case
                        movet ad est, sed tota vocent appetere ea.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?3"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md bg-sky-100 dark:bg-gray-200">
                      <p>
                        Te omnes virtute volutpat sed. Ei esse eros interesset
                        vel, ei populo denique ocurreret vix, eu cum pertinax
                        mandamus vituperatoribus. Solum nihil luptatum per ex,
                        ei amet viderer eos. Ea illum labitur mnesarchum pro.
                        Eius meis salutandi ei nam, alterum expetenda et nec.
                        Expetenda intellegat at eum, per mazim sanctus
                        honestatis ad. Ei noluisse invenire vix. Te ancillae
                        patrioque qui, probo bonorum vivendum ex vim.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?4"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* call to action section  */}

        <section className="py-8 px-10 calltoaction w-full">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-200 font-bold leading-none text-center">
              Get Your Dental Health Checked—Schedule Now!
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl font-medium text-zinc-400 text-center">
              Begin your journey to a brighter, healthier smile—book your
              tailored consultation with our skilled dental professionals today
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <Link href="/contact">
                <button className="hover:bg-white bg-[#00607d] text-zinc-200 hover:text-black hover:border-black hover:border-2 border-2 border-black px-8 py-3 font-semibold text-sm rounded-full">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Carouser section  */}

        {/* <CarouselSize /> */}

        {/* FAQs Section  */}

        {/* <section className="mt-16 w-full py-10 bg-gray-100 sm:py-16 lg:py-24">
      
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              </p>
            </div>

            <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
              <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {" "}
                    How to create an account?{" "}
                  </span>

                  <svg
                    className="w-6 h-6 text-gray-400 rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {" "}
                    How can I make payment using Paypal?{" "}
                  </span>

                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>

              <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                <div className="">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  >
                    <span className="flex text-lg font-semibold text-black">
                      {" "}
                      Can I cancel my plan?{" "}
                    </span>

                    <svg
                      className="w-6 h-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>
                      Amet minim mollit non deserunt ullamco est sit{" "}
                      <a
                        href="#"
                        title=""
                        className="text-blue-600 transition-all duration-200 hover:underline"
                      >
                        aliqua dolor
                      </a>{" "}
                      do amet sint. Velit officia consequat duis enim velit
                      mollit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {" "}
                    How can I reach to support?{" "}
                  </span>

                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </section> */}
      </main>
    </>
  );
}

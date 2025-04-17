import Contact from "../../layout/contact";
import Navbar from "../../navbar/navbar";
import Footerbio from "../../layout/footerbio";

export default function Contactpage() {
    return (
      <>
        <main className="flex flex-col max-h-screen max-w-screen">
          <Navbar />
          <div className="flex flex-row my-20">
            <Contact />
          </div>
          <Footerbio />
        </main>
      </>
    )
  }
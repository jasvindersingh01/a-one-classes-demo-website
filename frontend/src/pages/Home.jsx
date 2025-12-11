import Hero from "../components/Hero";
import CoursesPreview from "../components/CoursesPreview";
import GalleryPreview from "../components/GalleryPreview";
import AboutPreview from "../components/AboutPreview";
import Achievements from "../components/Achivements";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CoursesPreview />
      <Achievements />
      <Testimonials />
      <GalleryPreview />
    </>
  );
}

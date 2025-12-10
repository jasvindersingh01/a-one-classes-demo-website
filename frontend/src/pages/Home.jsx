import Hero from "../components/Hero";
import CoursesPreview from "../components/CoursesPreview";
import GalleryPreview from "../components/GalleryPreview";
import AboutPreview from "../components/AboutPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CoursesPreview />
      <GalleryPreview />
    </>
  );
}

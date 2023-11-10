import Template from "@/components/Template";
import useEmblaCarousel from "embla-carousel-react";
export default function Home() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <Template>
      <div className="h-[40vh]  w-full mt-8 rounded-lg"></div>
    </Template>
  );
}

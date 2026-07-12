import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";

export default function ResumePage() {
  return (
    <div className="pt-16 min-h-screen">
      <Experience />
      <Skills />
      <Achievements />
    </div>
  );
}

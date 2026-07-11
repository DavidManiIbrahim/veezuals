import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { KenteRule } from "@/components/site/KenteRule";

const imageModules = import.meta.glob("../assets/projects/**/*.{jpg,jpeg,png,webp}", {
  as: "url",
  eager: true,
});

const galleryProjects = Object.entries(imageModules)
  .map(([filePath, url]) => {
    const relativePath = filePath.replace("../assets/projects/", "");
    const segments = relativePath.split("/");
    const folder = segments.length > 1 ? segments[0] : "Other Projects";
    const fileName = segments[segments.length - 1];
    return { folder, fileName, url: url as string };
  })
  .sort((a, b) => {
    if (a.folder !== b.folder) return a.folder.localeCompare(b.folder, undefined, { numeric: true });
    return a.fileName.localeCompare(b.fileName, undefined, { numeric: true });
  })
  .reduce((acc, file) => {
    const section = acc.find((item) => item.name === file.folder);
    if (section) {
      section.images.push(file.url);
    } else {
      acc.push({ name: file.folder, images: [file.url] });
    }
    return acc;
  }, [] as { name: string; images: string[] }[]);

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Veezuals" },
      { name: "description", content: "Showcase of brand identity, social media design, flyer design, and creative work by Veezuals." },
      { property: "og:title", content: "Gallery | Veezuals" },
      { property: "og:description", content: "View all design projects and creative work." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState<{ name: string; images: string[] } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  const imageCount = selectedProject?.images.length ?? 0;

  const handleNext = () => {
    setModalImageLoaded(false);
    setCurrentImageIndex((prev) => (prev + 1) % imageCount);
  };

  const handlePrev = () => {
    setModalImageLoaded(false);
    setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setModalImageLoaded(false);
  };

  return (
    <>
      <section className="container-x py-24">
        <p className="eyebrow text-muted-foreground">Gallery</p>
        <h1 className="display-lg mt-6 max-w-4xl">All <em className="text-blue-900">designs </em> and
          <br />creative <em className="text-blue-900">work. </em></h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          A collection of brand identity, social media design, flyer design, and creative projects. Click any project to preview all images.
        </p>
      </section>

      <KenteRule className="mt-6" />

      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryProjects.map((project) => (
            <button
              key={project.name}
              type="button"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
                setModalImageLoaded(false);
              }}
              className="group text-left"
            >
              <div className="aspect-[4/5] bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-display">{project.name}</p>
                    <p className="text-white/80 text-xs mt-1">{project.images.length} image{project.images.length > 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-background rounded-lg overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-display text-xl">{selectedProject.name}</h2>
              <button
                type="button"
                onClick={handleClose}
                className="p-2 hover:bg-card rounded transition"
                aria-label="Close preview"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image Preview */}
            <div className="flex-1 flex items-center justify-center bg-card overflow-hidden relative min-h-[200px]">
              {!modalImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.name} - ${currentImageIndex + 1}`}
                decoding="async"
                onLoad={() => setModalImageLoaded(true)}
                className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${modalImageLoaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-4 border-t border-border flex-shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                disabled={selectedProject.images.length <= 1}
                className="p-2 hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed rounded transition"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <p className="text-sm text-muted-foreground">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </p>
              <button
                type="button"
                onClick={handleNext}
                disabled={selectedProject.images.length <= 1}
                className="p-2 hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed rounded transition"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <KenteRule className="mt-6" /> */}

      <section className="container-x py-24">
        <div className="border-t border-border pt-16">
          <p className="eyebrow text-muted-foreground">Ready to start?</p>
          <h2 className="display-lg mt-6 max-w-4xl">Have a <em className="text-blue-500">project</em>
            <br /> in <em className="text-blue-500">mind?</em></h2>
          <a href="/contact" className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background text-sm hover:opacity-90">
            Get in touch →
          </a>
        </div>
      </section>
    </>
  );
}

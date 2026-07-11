import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Linkedin, Asterisk } from "lucide-react";
import { KenteRule } from "@/components/site/KenteRule";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Veezuals" },
      { name: "description", content: "Book a design service with Veezuals. Brand identity, social, print, and editorial." },
      { property: "og:title", content: "Contact — Veezuals" },
      { property: "og:description", content: "Get in touch to book a creative project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { loading, setLoading } = useLoadingState();
  return (
    <section className="container-x py-24 bg-[#EDF8FE] text-[#07090A]">
      <p className="eyebrow text-muted-foreground">Contact</p>
      <h1 className="display-lg mt-6 max-w-4xl">Let's build <em className="not-italic p-2 text-transparent bg-clip-text bg-gradient-to-r from-[#07090A] to-[#64AEE0] [-webkit-text-stroke:2px_#07090A]"> something </em>
        <br /> that lasts.</h1>

      <div className="mt-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          <div>
            <p className="eyebrow text-muted-foreground">WhatsApp</p>
            <a href="https://wa.me/2349068716986" target="_blank" rel="noreferrer" className="block mt-3 font-display text-2xl md:text-3xl hover:opacity-70 transition">
              +234 906 871 6986
            </a>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">All messages</p>
            <p className="mt-3 text-muted-foreground max-w-sm">
              Every new brief and inquiry is sent through WhatsApp to keep communication fast and direct.
            </p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Booking</p>
            <p className="mt-3 text-muted-foreground max-w-sm">
              Briefs are reviewed within 48 hours. A 70% non-refundable deposit secures your spot in the studio's schedule.
            </p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="https://www.instagram.com/shedesignerr?igsh=YW9icDB4aDQ4N25x" target="_blank" rel="noreferrer" className="hover:text-[#07090A] text-muted-foreground flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#07090A] text-muted-foreground flex items-center gap-2">
                  <Asterisk className="h-4 w-4" />
                  Behance
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/victoria-edochie-0135a0288?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hover:text-[#07090A] text-muted-foreground flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form
          className="lg:col-span-7 space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const payload = {
              name: String(data.get("name") ?? ""),
              email: String(data.get("email") ?? ""),
              service: String(data.get("service") ?? ""),
              message: String(data.get("message") ?? ""),
            };

            try {
              setLoading(true);
              const whatsappText = encodeURIComponent(`Hi Veezuals,

Name: ${payload.name}
Email: ${payload.email}
Service: ${payload.service}

Message:
${payload.message}`);
              const whatsappUrl = `https://wa.me/2349068716986?text=${whatsappText}`;
              window.open(whatsappUrl, "_blank");
              alert("Opening WhatsApp with your message...");
              form.reset();
            } catch (err) {
              console.error(err);
              alert("Failed to open WhatsApp. Please try again later.");
            } finally {
              setLoading(false);
            }
          }}
        >
          <Field label="Your name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <div>
            <label className="eyebrow text-muted-foreground block mb-3">Service of interest</label>
            <select
              name="service"
              className="w-full bg-[#EDF8FE] border-b border-[#07090A] py-3 text-base focus:outline-none focus:border-foreground"
            >
              <option className="bg-[#EDF8FE]">Social media design</option>
              <option className="bg-[#EDF8FE]">Flyer design</option>
              <option className="bg-[#EDF8FE]">Book interior design</option>
              <option className="bg-[#EDF8FE]">Brand presentation</option>
              <option className="bg-[#EDF8FE]">Creative decoration</option>
              <option className="bg-[#EDF8FE]">Something else</option>
            </select>
          </div>
          <div>
            <label className="eyebrow text-muted-foreground block mb-3">Tell me about your project</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-[#EDF8FE] border-b border-[#07090A] py-3 text-base focus:outline-none focus:border-foreground resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 border border-[#07090A] inline-flex items-center gap-3 px-6 py-4 bg-[#07090A] text-white text-sm hover:opacity-90"
          >
            {loading ? "Opening WhatsApp…" : "Send via WhatsApp →"}
          </button>
        </form>
      </div>
{/* <KenteRule className="mt-6" /> */}
    </section>
  );
}

function useLoadingState() {
  const [loading, setLoading] = useState(false);
  return { loading, setLoading };
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow text-muted-foreground block mb-3">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-[#EDF8FE] border-b border-[#07090A] py-3 text-base focus:outline-none focus:border-foreground"
      />
    </div>
  );
}

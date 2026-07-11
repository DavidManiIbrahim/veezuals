import logo from "@/assets/veezuals-logo.png";

export function Splash() {
  return (
    <div className="splash-screen" aria-hidden="true">
      <div className="splash-content">
        <div className="splash-badge">
          <span />
          <span />
          <span />
        </div>
        <div className="splash-copy">
          <img
            src={logo}
            alt="Veezuals logo"
            className="mx-auto h-28 sm:h-40 md:h-56 w-auto object-contain"
          />
          <p className="splash-eyebrow clash-grotesk-bold">Veezuals</p>
          <h1 className="splash-title">Brand design that feels luminous.</h1>
          
          <p className="splash-note">Crafting Bold Identities.</p>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { QrCode } from "lucide-react";
import Controls from "./Controls";
import Display from "./Display";

const DEFAULTS = {
  url: "https://lovable.dev",
  fgColor: "#00e68a",
  bgColor: "#111827",
};

const QRGenerator = () => {
  const [url, setUrl] = useState(DEFAULTS.url);
  const [fgColor, setFgColor] = useState(DEFAULTS.fgColor);
  const [bgColor, setBgColor] = useState(DEFAULTS.bgColor);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  useEffect(() => {
    if (logoFile) {
      const objectUrl = URL.createObjectURL(logoFile);
      setLogoPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
    setLogoPreview(null);
  }, [logoFile]);

  const handleReset = () => {
    setUrl(DEFAULTS.url);
    setFgColor(DEFAULTS.fgColor);
    setBgColor(DEFAULTS.bgColor);
    setLogoFile(null);
    setLogoPreview(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
              <QrCode size={28} className="text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight">
              <span className="text-gradient">QR</span>{" "}
              <span className="text-foreground">Generator</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Generate custom QR codes with your brand colors and logo. Download or copy instantly.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Controls Panel */}
          <div className="bg-card border border-border rounded-2xl p-6 order-2 md:order-1">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
              Customize
            </h2>
            <Controls
              url={url}
              fgColor={fgColor}
              bgColor={bgColor}
              logoPreview={logoPreview}
              onUrlChange={setUrl}
              onFgColorChange={setFgColor}
              onBgColorChange={setBgColor}
              onLogoChange={setLogoFile}
              onReset={handleReset}
            />
          </div>

          {/* Display Panel */}
          <div className="bg-card border border-border rounded-2xl p-6 order-1 md:order-2">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
              Preview
            </h2>
            <Display
              url={url}
              fgColor={fgColor}
              bgColor={bgColor}
              logoPreview={logoPreview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;

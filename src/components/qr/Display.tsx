import { QRCodeCanvas } from "qrcode.react";
import { Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

interface DisplayProps {
  url: string;
  fgColor: string;
  bgColor: string;
  logoPreview: string | null;
}

const Display = ({ url, fgColor, bgColor, logoPreview }: DisplayProps) => {
  const [copied, setCopied] = useState(false);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const getCanvas = useCallback((): HTMLCanvasElement | null => {
    return canvasWrapperRef.current?.querySelector("canvas") || null;
  }, []);

  const handleDownload = () => {
    const canvas = getCanvas();
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast({ title: "Downloaded!", description: "QR code saved as PNG." });
  };

  const handleCopy = async () => {
    const canvas = getCanvas();
    if (!canvas) return;
    try {
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );
      if (blob) {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        setCopied(true);
        toast({ title: "Copied!", description: "QR code copied to clipboard." });
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      toast({ title: "Error", description: "Could not copy to clipboard.", variant: "destructive" });
    }
  };

  const imageSettings = logoPreview
    ? {
        src: logoPreview,
        height: 40,
        width: 40,
        excavate: true,
      }
    : undefined;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* QR Preview */}
      <div className="gradient-surface rounded-2xl p-8 border border-border animate-pulse-glow">
        <div ref={canvasWrapperRef} className="rounded-xl overflow-hidden">
          <QRCodeCanvas
            value={url || "https://lovable.dev"}
            size={240}
            fgColor={fgColor}
            bgColor={bgColor}
            level="H"
            imageSettings={imageSettings}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 w-full">
        <Button
          onClick={handleDownload}
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all glow-primary"
        >
          <Download size={18} className="mr-2" />
          Download
        </Button>
        <Button
          onClick={handleCopy}
          variant="outline"
          className="flex-1 border-border text-foreground hover:border-primary/50 transition-all"
        >
          {copied ? <Check size={18} className="mr-2" /> : <Copy size={18} className="mr-2" />}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>

      {/* Info */}
      <p className="text-xs text-muted-foreground font-mono text-center">
        Error correction: High (H) • Format: PNG
      </p>
    </div>
  );
};

export default Display;

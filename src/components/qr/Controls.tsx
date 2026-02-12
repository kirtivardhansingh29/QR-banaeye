import { Link, Palette, Image, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface ControlsProps {
  url: string;
  fgColor: string;
  bgColor: string;
  logoPreview: string | null;
  onUrlChange: (url: string) => void;
  onFgColorChange: (color: string) => void;
  onBgColorChange: (color: string) => void;
  onLogoChange: (file: File | null) => void;
  onReset: () => void;
}

const Controls = ({
  url,
  fgColor,
  bgColor,
  logoPreview,
  onUrlChange,
  onFgColorChange,
  onBgColorChange,
  onLogoChange,
  onReset,
}: ControlsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onLogoChange(file);
  };

  return (
    <div className="space-y-6">
      {/* URL Input */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Link size={16} className="text-primary" />
          URL or Text
        </Label>
        <Input
          type="text"
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
          placeholder="https://example.com"
          className="bg-muted border-border font-mono text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        />
      </div>

      {/* Color Controls */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Palette size={16} className="text-primary" />
            Foreground
          </Label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={fgColor}
              onChange={(e) => onFgColorChange(e.target.value)}
              className="w-10 h-10 rounded-lg border border-border cursor-pointer bg-transparent"
            />
            <span className="font-mono text-xs text-muted-foreground uppercase">{fgColor}</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Palette size={16} className="text-accent" />
            Background
          </Label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={bgColor}
              onChange={(e) => onBgColorChange(e.target.value)}
              className="w-10 h-10 rounded-lg border border-border cursor-pointer bg-transparent"
            />
            <span className="font-mono text-xs text-muted-foreground uppercase">{bgColor}</span>
          </div>
        </div>
      </div>

      {/* Logo Upload */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Image size={16} className="text-primary" />
          Logo (optional)
        </Label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors"
        >
          {logoPreview ? (
            <div className="flex items-center justify-center gap-3">
              <img src={logoPreview} alt="Logo" className="w-10 h-10 rounded object-contain" />
              <span className="text-sm text-muted-foreground">Click to change</span>
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">Click to upload a logo</span>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        onClick={onReset}
        className="w-full border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
      >
        <RotateCcw size={16} className="mr-2" />
        Reset to Defaults
      </Button>
    </div>
  );
};

export default Controls;

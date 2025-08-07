import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Platform Digital Pemerintah
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight">
                Satu platform untuk menghubungkan warga dan pemerintah
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-2xl">
                HaloGov memudahkan akses untuk layanan publik dan komunikasi langsung dengan instansi pemerintah — kapan saja, di mana saja.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-government-blue bg-background hover:bg-background/90">
                Coba HaloGov di Aplikasi
                <Badge variant="outline" className="ml-2 text-xs">Coming Soon</Badge>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Coba HaloGov di WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Coba HaloGov di Telegram
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">1.023.169</div>
                <div className="text-sm text-primary-foreground/80">Pesan siar masyarakat terkirim</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">528.409.802</div>
                <div className="text-sm text-primary-foreground/80">Balasan pesan diproses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">92.183.440</div>
                <div className="text-sm text-primary-foreground/80">Tampilan halaman PWA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">112+</div>
                <div className="text-sm text-primary-foreground/80">Juta Pengguna aktif</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="HaloGov Platform"
              className="w-full h-auto rounded-2xl shadow-large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const navigation = {
    main: [
      { name: "Untuk Warga", href: "#warga" },
      { name: "Untuk Pemerintah", href: "#pemerintah" },
      { name: "Mitra Kami", href: "#mitra" },
      { name: "Studi Kasus", href: "#studi-kasus" }
    ],
    support: [
      { name: "Lokasi & Kontak", href: "#kontak" },
      { name: "Kebijakan Privasi", href: "#privacy" },
      { name: "Syarat & Ketentuan", href: "#terms" },
      { name: "FAQ", href: "#faq" }
    ],
    social: [
      { name: "Facebook", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" }
    ]
  };

  return (
    <footer className="bg-government-blue-light border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">H</span>
                </div>
                <span className="text-2xl font-bold text-foreground">HaloGov</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Platform digital yang menghubungkan warga dan pemerintah untuk layanan publik yang lebih mudah, 
                transparan, dan efisien di seluruh Indonesia.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-foreground">Kontak Informasi:</div>
                <div className="text-sm text-muted-foreground">
                  Email: info@halogov.id
                </div>
                <div className="text-sm text-muted-foreground">
                  Telepon: (021) 1234-5678
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Navigasi</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Dukungan</h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-muted-foreground">
                Ikuti perkembangan HaloGov:
              </div>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 HaloGov. Seluruh hak cipta dilindungi.
            </div>
            <div className="text-sm text-muted-foreground">
              Didukung oleh teknologi terdepan untuk pelayanan publik Indonesia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
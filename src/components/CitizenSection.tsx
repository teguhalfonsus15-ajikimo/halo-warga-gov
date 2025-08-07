import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  FileText, 
  CreditCard, 
  AlertTriangle, 
  Bell, 
  MessageSquare,
  Shield
} from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "Ajukan bantuan sosial (PKH, BPNT, BLT) langsung dari ponsel",
  },
  {
    icon: FileText,
    title: "Laporkan masalah layanan publik di puskesmas, sekolah, atau kelurahan",
  },
  {
    icon: Smartphone,
    title: "Cek status NIK, kartu keluarga, atau dokumen kependudukan",
  },
  {
    icon: AlertTriangle,
    title: "Ikuti informasi bencana, vaksinasi, dan program pemerintah terbaru",
  },
  {
    icon: Bell,
    title: "Terima notifikasi langsung dari pemerintah daerah Anda",
  },
  {
    icon: MessageSquare,
    title: "Gunakan WhatsApp atau Telegram untuk komunikasi dua arah",
  },
  {
    icon: Shield,
    title: "Laporkan korupsi atau penyalahgunaan dana publik secara anonim",
  }
];

export const CitizenSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-stats-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Untuk Warga
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                HaloGov memberikan akses mudah dan cepat kepada berbagai layanan publik hanya melalui ponsel Anda. 
                Tidak perlu lagi antre atau datang ke kantor pelayanan. Semua tersedia secara daring, aman, dan gratis.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-card-gradient shadow-soft">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-card-foreground font-medium">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>

            <Button variant="government" size="lg" className="w-full sm:w-auto">
              Mulai Gunakan HaloGov Sekarang
            </Button>
          </div>

          <div className="relative">
            <Card className="bg-card-gradient border-0 shadow-large p-8">
              <CardContent className="text-center space-y-6">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">
                    112+ Juta
                  </div>
                  <div className="text-lg text-card-foreground font-semibold">
                    Pengguna Aktif
                  </div>
                  <div className="text-muted-foreground">
                    di seluruh Indonesia telah merasakan kemudahan HaloGov
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">24/7</div>
                    <div className="text-sm text-muted-foreground">Layanan Tersedia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">Gratis</div>
                    <div className="text-sm text-muted-foreground">Tanpa Biaya</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
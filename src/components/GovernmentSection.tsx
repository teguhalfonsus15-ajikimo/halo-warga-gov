import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  BarChart3, 
  Settings, 
  Database, 
  Megaphone, 
  Users
} from "lucide-react";

const capabilities = [
  {
    icon: Clock,
    title: "Penerimaan dan pemrosesan pengaduan masyarakat secara real-time",
    description: "Sistem otomatis yang memproses keluhan dan aspirasi warga 24/7"
  },
  {
    icon: BarChart3,
    title: "Dashboard analitik untuk pelaporan dan evaluasi kinerja layanan",
    description: "Visualisasi data komprehensif untuk pengambilan keputusan berbasis data"
  },
  {
    icon: Settings,
    title: "Otomatisasi permohonan bantuan dan dokumen kependudukan",
    description: "Proses digital yang mempercepat layanan administrasi pemerintahan"
  },
  {
    icon: Database,
    title: "Integrasi dengan sistem Dukcapil, Kemensos, BPJS, dan lainnya",
    description: "Konektivitas seamless dengan database pemerintah yang ada"
  },
  {
    icon: Megaphone,
    title: "Notifikasi massal berbasis wilayah dan demografi",
    description: "Penyampaian informasi yang tepat sasaran kepada kelompok masyarakat tertentu"
  },
  {
    icon: Users,
    title: "Peningkatan partisipasi publik dan perencanaan berbasis aspirasi warga",
    description: "Platform yang mendorong keterlibatan aktif masyarakat dalam pemerintahan"
  }
];

export const GovernmentSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Untuk Pemerintah
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                HaloGov mendukung instansi pemerintah dalam menyederhanakan layanan publik, meningkatkan transparansi, 
                dan membangun kepercayaan masyarakat melalui teknologi. Platform ini siap diintegrasikan dengan sistem 
                internal dan dapat diakses oleh seluruh lapisan warga.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-card-gradient border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">528M+</div>
                    <div className="text-sm text-muted-foreground">Balasan Pesan Diproses</div>
                  </CardContent>
                </Card>
                <Card className="bg-card-gradient border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">92M+</div>
                    <div className="text-sm text-muted-foreground">Tampilan Halaman PWA</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Button variant="government" size="lg" className="w-full sm:w-auto">
              Hubungi Tim HaloGov Untuk Kolaborasi
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Kemampuan Utama Platform
            </h3>
            
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-card-gradient border-0 shadow-medium hover:shadow-large transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                      <capability.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-card-foreground leading-tight">
                        {capability.title}
                      </h4>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pl-16">
                  <p className="text-muted-foreground">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
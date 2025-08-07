import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Smartphone, 
  AlertTriangle, 
  FileText, 
  BarChart, 
  Heart, 
  Megaphone, 
  AlertCircle,
  Lock,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Akses satu pintu untuk berbagai layanan pemerintah pusat & daerah",
    description: "Semua layanan pemerintah dalam satu platform yang mudah diakses"
  },
  {
    icon: FileText,
    title: "Laporkan dan nilai kualitas layanan publik",
    description: "Evaluasi sekolah, puskesmas, dan fasilitas umum secara langsung"
  },
  {
    icon: BarChart,
    title: "Analitik waktu nyata untuk instansi pemerintah",
    description: "Dashboard komprehensif untuk monitoring dan evaluasi layanan"
  },
  {
    icon: Heart,
    title: "Ajukan bantuan sosial secara digital",
    description: "DTKS, PKH, BPNT tersedia dalam genggaman Anda"
  },
  {
    icon: AlertTriangle,
    title: "Notifikasi dini untuk bencana dan informasi darurat",
    description: "Sistem peringatan cepat untuk keselamatan masyarakat"
  },
  {
    icon: Shield,
    title: "Cek status vaksinasi & hasil tes COVID-19",
    description: "Akses mudah ke data kesehatan dan vaksinasi"
  },
  {
    icon: Megaphone,
    title: "Kirim pesan massal ke warga dalam satu wilayah",
    description: "Komunikasi efektif dari pemerintah ke masyarakat"
  },
  {
    icon: AlertCircle,
    title: "Laporkan dugaan korupsi atau penyalahgunaan dana publik",
    description: "Saluran aman untuk pelaporan transparansi pemerintahan"
  },
  {
    icon: Lock,
    title: "Perlindungan data pribadi dan keamanan terjamin",
    description: "Standar keamanan tinggi untuk melindungi privasi pengguna"
  },
  {
    icon: Zap,
    title: "Gratis dan mudah diakses melalui ponsel",
    description: "Layanan tanpa biaya dengan antarmuka yang user-friendly"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            HaloGov dapat digunakan untuk...
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platform komprehensif yang mendukung berbagai kebutuhan layanan publik dan komunikasi pemerintahan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card-gradient border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
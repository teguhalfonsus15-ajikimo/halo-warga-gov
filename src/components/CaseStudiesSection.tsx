import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Digitalisasi Bantuan Sosial",
    subtitle: "HaloGov membantu Kemensos menyalurkan bantuan kepada jutaan penerima manfaat",
    badge: "PoC",
    link: "/studi-kasus/kemensos",
    category: "Bantuan Sosial"
  },
  {
    title: "Respons Kesehatan Publik",
    subtitle: "Pelacakan dan komunikasi cepat selama pandemi COVID-19 dan vaksinasi nasional",
    badge: "PoC",
    link: "/studi-kasus/kesehatan",
    category: "Kesehatan"
  },
  {
    title: "Administrasi Kependudukan",
    subtitle: "Warga mengajukan KTP/KK secara daring melalui integrasi dengan Dukcapil",
    badge: "PoC",
    link: "/studi-kasus/dukcapil",
    category: "Kependudukan"
  },
  {
    title: "Cek Fakta - Diskominfo Jatim",
    subtitle: "Klinik Hoaks berbasis WhatsApp membantu masyarakat Jawa Timur memverifikasi informasi dan mencegah hoaks",
    badge: "Aktif",
    link: "/studi-kasus/diskominfo-jatim",
    category: "Informasi"
  },
  {
    title: "HaloBupati – Pamekasan",
    subtitle: "Pemkab Pamekasan menggunakan WhatsApp chatbot untuk menjembatani komunikasi warga dan Bupati",
    badge: "Aktif",
    link: "/studi-kasus/halobupati-pamekasan",
    category: "Pemerintahan Daerah"
  },
  {
    title: "Pelaporan Layanan Publik",
    subtitle: "Evaluasi langsung dari masyarakat terhadap layanan di sekolah, puskesmas, dan fasilitas umum",
    badge: "Aktif",
    link: "/studi-kasus/pelayanan-publik",
    category: "Layanan Publik"
  },
  {
    title: "Smart City & Pemerintahan Daerah",
    subtitle: "Pemerintah kota dan kabupaten menggunakan HaloGov untuk menyampaikan info dan menerima aspirasi warga secara real time",
    badge: "PoC",
    link: "/studi-kasus/smartcity",
    category: "Smart City"
  }
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Studi Kasus Penggunaan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai implementasi sukses HaloGov di instansi pemerintah seluruh Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-card-gradient border-0 shadow-medium hover:shadow-large transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant={study.badge === "Aktif" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {study.badge}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {study.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.subtitle}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
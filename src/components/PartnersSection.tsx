import { Button } from "@/components/ui/button";

const partners = [
  { name: "KOMINFO", fullName: "Kementerian Komunikasi dan Informatika" },
  { name: "DJP", fullName: "Direktorat Jenderal Pajak" },
  { name: "KEMENSOS", fullName: "Kementerian Sosial RI" },
  { name: "DUKCAPIL", fullName: "Ditjen Kependudukan dan Catatan Sipil" },
  { name: "DISHUB", fullName: "Dinas Perhubungan" },
  { name: "BPJS Kesehatan", fullName: "Badan Penyelenggara Jaminan Sosial Kesehatan" },
  { name: "BSSN", fullName: "Badan Siber dan Sandi Negara" },
  { name: "Prov. DKI Jakarta", fullName: "Pemerintah Provinsi DKI Jakarta" },
  { name: "Kota Surabaya", fullName: "Pemerintah Kota Surabaya" }
];

export const PartnersSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Mitra Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            HaloGov bekerja sama dengan berbagai lembaga pemerintah nasional dan daerah untuk mendukung transformasi 
            digital layanan publik. Kolaborasi ini memperkuat kepercayaan masyarakat dan memastikan setiap warga 
            dapat mengakses layanan yang adil, transparan, dan efisien.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-card-gradient border border-border rounded-lg p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="space-y-2">
                <div className="text-lg font-bold text-primary group-hover:text-primary-hover transition-colors">
                  {partner.name}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {partner.fullName}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">
              Siap mendigitalisasi layanan publik di daerah Anda?
            </h3>
            <p className="text-muted-foreground">
              Bergabunglah dengan instansi pemerintah lainnya yang telah merasakan manfaat HaloGov
            </p>
          </div>
          <Button variant="government" size="lg">
            Minta Demo Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fish, Users, Award, Heart, Target, Eye, Handshake } from "lucide-react"
import Link from "next/link"

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Mina Julantoro Asri</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link href="/tentang" className="text-primary font-medium">
                Tentang Kami
              </Link>
              <Link href="/program" className="text-foreground hover:text-primary transition-colors">
                Program
              </Link>
              <Link href="/produk" className="text-foreground hover:text-primary transition-colors">
                Produk
              </Link>
              <Link href="/galeri" className="text-foreground hover:text-primary transition-colors">
                Galeri
              </Link>
              <Link href="/kontak" className="text-foreground hover:text-primary transition-colors">
                Kontak
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Kunjungi Kami</Button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Beranda
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Tentang Kami</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-4">Tentang Kami</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Kisah Transformasi <span className="text-primary">Mina Julantoro Asri</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Dari selokan kotor yang diabaikan menjadi pusat wisata edukasi yang menginspirasi. Inilah perjalanan
              komunitas kami dalam menciptakan perubahan nyata.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Sejarah Terbentuknya Komunitas
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pada tahun 2018, selokan di kawasan Julantoro, Yogyakarta, merupakan tempat yang kotor dan tidak
                  terawat. Air keruh, sampah berserakan, dan bau tidak sedap menjadi pemandangan sehari-hari yang
                  membuat warga enggan melewati area tersebut.
                </p>
                <p>
                  Berawal dari keprihatinan sekelompok warga yang dipimpin oleh Pak Suharto dan Bu Siti, mereka mulai
                  mengorganisir gotong royong untuk membersihkan selokan. Dengan semangat kebersamaan dan tekad yang
                  kuat, mereka tidak hanya membersihkan tetapi juga berinovasi mengubah selokan menjadi tempat budidaya
                  ikan.
                </p>
                <p>
                  Dalam waktu 2 tahun, transformasi luar biasa terjadi. Selokan yang dulunya kotor kini menjadi tempat
                  yang asri dengan ratusan ikan nila dan lele yang sehat. Keberhasilan ini menarik perhatian pemerintah
                  daerah dan berbagai institusi pendidikan.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-muted">
                  <img
                    src="/before-photo-of-dirty-polluted-canal-in-indonesia-.png"
                    alt="Kondisi selokan sebelum dibersihkan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center font-medium">2018: Kondisi Awal</p>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-muted">
                  <img
                    src="/after-photo-of-clean-canal-with-fish-farming-and-g.png"
                    alt="Kondisi selokan setelah transformasi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center font-medium">2024: Setelah Transformasi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Visi, Misi & Nilai Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Landasan yang menguatkan setiap langkah perubahan yang kami lakukan
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground text-2xl">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi komunitas percontohan dalam pengelolaan lingkungan berkelanjutan yang menginspirasi
                  transformasi positif di seluruh Indonesia.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground text-2xl">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>• Memberdayakan masyarakat melalui edukasi lingkungan</p>
                  <p>• Mengembangkan budidaya ikan berkelanjutan</p>
                  <p>• Menciptakan wisata edukasi yang bermanfaat</p>
                  <p>• Membangun kemitraan strategis</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-card-foreground text-2xl">Nilai</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    • <strong>Gotong Royong:</strong> Kekuatan kebersamaan
                  </p>
                  <p>
                    • <strong>Kebersihan:</strong> Lingkungan sehat untuk semua
                  </p>
                  <p>
                    • <strong>Inovasi:</strong> Solusi kreatif berkelanjutan
                  </p>
                  <p>
                    • <strong>Edukasi:</strong> Berbagi pengetahuan
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent mb-4">Prestasi & Pengakuan</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Pencapaian yang Membanggakan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Dukungan dan pengakuan dari berbagai pihak atas dedikasi kami dalam transformasi lingkungan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Juara 1 Kampung Bersih</CardTitle>
                <CardDescription>
                  Penghargaan dari Pemerintah Kota Yogyakarta tahun 2020 untuk kategori inovasi pengelolaan lingkungan
                  terbaik.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Kemitraan Universitas</CardTitle>
                <CardDescription>
                  Kerjasama dengan UGM, UNY, dan UII untuk program penelitian dan pengembangan budidaya ikan
                  berkelanjutan.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Program CSR</CardTitle>
                <CardDescription>
                  Dukungan dari berbagai perusahaan untuk pengembangan fasilitas dan program pemberdayaan masyarakat.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Tim Penggerak Komunitas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Orang-orang hebat di balik transformasi Mina Julantoro Asri
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Pak Suharto</CardTitle>
                <CardDescription>Ketua Komunitas & Inisiator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Pencetus ide transformasi selokan dan pemimpin gerakan gotong royong yang menginspirasi seluruh warga.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Bu Siti</CardTitle>
                <CardDescription>Koordinator Program Edukasi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Mengelola program wisata edukasi dan kerjasama dengan sekolah-sekolah di Yogyakarta dan sekitarnya.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Mas Budi</CardTitle>
                <CardDescription>Ahli Budidaya Ikan</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Bertanggung jawab atas teknik budidaya ikan dan pelatihan masyarakat dalam pengelolaan kolam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Bergabunglah dengan Misi Kami
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Jadilah bagian dari komunitas yang peduli lingkungan. Bersama-sama kita bisa menciptakan perubahan positif
              yang lebih besar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Kunjungi Komunitas
              </Button>
              <Link href="/program">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Lihat Program Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Fish className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">Mina Julantoro Asri</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Komunitas lingkungan yang mengubah selokan kotor menjadi wisata edukasi berkelanjutan.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Kontak</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Yogyakarta, Indonesia</p>
                <p>WhatsApp: +62 812-3456-7890</p>
                <p>Email: info@minajulantoro.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Jam Kunjungan</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Senin - Jumat: 08:00 - 16:00</p>
                <p>Sabtu - Minggu: 08:00 - 17:00</p>
                <p>Reservasi diperlukan untuk grup</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Mina Julantoro Asri. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

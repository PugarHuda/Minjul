import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fish, GraduationCap, Users, Sprout, Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function ProgramPage() {
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
              <Link href="/tentang" className="text-foreground hover:text-primary transition-colors">
                Tentang Kami
              </Link>
              <Link href="/program" className="text-primary font-medium">
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
            <span className="text-foreground font-medium">Program & Aktivitas</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent mb-4">Program & Aktivitas</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Program Unggulan <span className="text-primary">Mina Julantoro Asri</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Berbagai program inovatif yang menggabungkan edukasi lingkungan, pemberdayaan masyarakat, dan pelestarian
              berkelanjutan untuk menciptakan dampak positif yang nyata.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src="/fish-swimming-in-clean-canal-water-with-green-plan.png"
                  alt="Budidaya ikan nila dan lele"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Fish className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className="bg-primary/10 text-primary">Program Utama</Badge>
                </div>
                <CardTitle className="text-2xl text-card-foreground">Budidaya Ikan Berkelanjutan</CardTitle>
                <CardDescription className="text-base">
                  Program pemeliharaan ikan nila dan lele dengan teknik modern dan ramah lingkungan yang menjadi tulang
                  punggung transformasi selokan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">500+</p>
                      <p className="text-sm text-muted-foreground">Ikan Dipelihara</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-secondary">2</p>
                      <p className="text-sm text-muted-foreground">Jenis Ikan</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Kegiatan Meliputi:</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Pemeliharaan ikan nila dan lele</li>
                      <li>• Monitoring kualitas air harian</li>
                      <li>• Pemberian pakan teratur</li>
                      <li>• Panen berkala setiap 3-4 bulan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <GraduationCap className="h-16 w-16 text-secondary" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <Badge className="bg-secondary/10 text-secondary">Program Edukasi</Badge>
                </div>
                <CardTitle className="text-2xl text-card-foreground">Wisata Edukasi Lingkungan</CardTitle>
                <CardDescription className="text-base">
                  Program pembelajaran interaktif untuk sekolah, mahasiswa, dan masyarakat umum tentang pengelolaan
                  lingkungan berkelanjutan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-secondary">1000+</p>
                      <p className="text-sm text-muted-foreground">Pengunjung/Tahun</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-accent">50+</p>
                      <p className="text-sm text-muted-foreground">Sekolah Partner</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Target Peserta:</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Siswa SD, SMP, SMA</li>
                      <li>• Mahasiswa dan peneliti</li>
                      <li>• Komunitas lingkungan</li>
                      <li>• Masyarakat umum</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Program Pemberdayaan Masyarakat
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Berbagai inisiatif untuk meningkatkan kesejahteraan dan keterampilan warga sekitar
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Pelatihan Agribisnis</CardTitle>
                <CardDescription>
                  Workshop manajemen usaha budidaya ikan, perhitungan modal, dan strategi pemasaran untuk warga yang
                  ingin memulai usaha serupa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Setiap bulan</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>20-30 peserta</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Pembuatan Pupuk Organik</CardTitle>
                <CardDescription>
                  Pelatihan pembuatan pupuk organik dari limbah ikan dan sampah organik rumah tangga untuk mendukung
                  pertanian berkelanjutan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Setiap 2 minggu</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>15-20 peserta</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Program Vertikultur</CardTitle>
                <CardDescription>
                  Pelatihan bercocok tanam vertikal untuk memaksimalkan lahan terbatas dan meningkatkan ketahanan pangan
                  keluarga.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Setiap minggu</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>10-15 peserta</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-4">Event Rutin</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Kegiatan & Event Berkala
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Berbagai acara yang melibatkan komunitas dan memperkuat ikatan sosial
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className="bg-primary/10 text-primary">Event Besar</Badge>
                </div>
                <CardTitle className="text-xl text-card-foreground">Panen Raya Ikan</CardTitle>
                <CardDescription>
                  Acara panen besar-besaran yang melibatkan seluruh komunitas dan pengunjung. Momen perayaan hasil kerja
                  keras bersama.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Setiap 4 bulan (Maret, Juli, November)</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Area kolam utama</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>200-300 peserta</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-2">Kegiatan:</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Panen ikan bersama-sama</li>
                      <li>• Demo masak ikan segar</li>
                      <li>• Pameran produk olahan</li>
                      <li>• Lomba mancing untuk anak</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <Badge className="bg-secondary/10 text-secondary">Event Mingguan</Badge>
                </div>
                <CardTitle className="text-xl text-card-foreground">Gotong Royong Mingguan</CardTitle>
                <CardDescription>
                  Kegiatan rutin membersihkan area kolam, perawatan tanaman, dan maintenance fasilitas bersama seluruh
                  anggota komunitas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Setiap Minggu pagi (07:00-10:00)</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Seluruh area komunitas</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>30-50 anggota</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-2">Kegiatan:</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Pembersihan kolam dan area</li>
                      <li>• Perawatan tanaman hias</li>
                      <li>• Perbaikan fasilitas</li>
                      <li>• Diskusi program mingguan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Jadwal Program Mingguan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ikuti berbagai kegiatan menarik sepanjang minggu
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold text-foreground">Senin - Rabu</div>
                    <div className="text-muted-foreground">08:00 - 16:00</div>
                    <div className="text-foreground">Kunjungan Wisata Edukasi</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold text-foreground">Kamis</div>
                    <div className="text-muted-foreground">14:00 - 17:00</div>
                    <div className="text-foreground">Pelatihan Agribisnis</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold text-foreground">Jumat</div>
                    <div className="text-muted-foreground">09:00 - 12:00</div>
                    <div className="text-foreground">Workshop Pupuk Organik</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold text-foreground">Sabtu</div>
                    <div className="text-muted-foreground">08:00 - 11:00</div>
                    <div className="text-foreground">Program Vertikultur</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg bg-primary/10">
                    <div className="font-semibold text-foreground">Minggu</div>
                    <div className="text-muted-foreground">07:00 - 10:00</div>
                    <div className="text-primary font-semibold">Gotong Royong Mingguan</div>
                  </div>
                </div>
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
              Bergabung dengan Program Kami
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Daftarkan sekolah, komunitas, atau diri Anda untuk mengikuti program-program inspiratif kami. Mari belajar
              bersama tentang lingkungan berkelanjutan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Daftar Program Edukasi
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Hubungi Koordinator
              </Button>
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

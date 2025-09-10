"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fish, Droplets, Users, GraduationCap, MapPin, Phone, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-primary font-medium">
                Beranda
              </Link>
              <Link href="/tentang" className="text-foreground hover:text-primary transition-colors">
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

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-xs bg-transparent">
                EN
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Kunjungi Kami</Button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-xs bg-transparent">
                EN
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/" className="text-primary font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Beranda
                </Link>
                <Link
                  href="/tentang"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tentang Kami
                </Link>
                <Link
                  href="/program"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Program
                </Link>
                <Link
                  href="/produk"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Produk
                </Link>
                <Link
                  href="/galeri"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Galeri
                </Link>
                <Link
                  href="/kontak"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontak
                </Link>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kunjungi Kami
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground w-fit">Transformasi Lingkungan</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Dari Selokan Kumuh Jadi <span className="text-primary">Wisata Edukasi Asri</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Komunitas Mina Julantoro Asri mengubah selokan kotor menjadi pusat budidaya ikan dan wisata edukasi yang
                menginspirasi. Bergabunglah dengan gerakan lingkungan yang memberdayakan masyarakat Yogyakarta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <MapPin className="mr-2 h-5 w-5" />
                  Kunjungi Kami
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Pesan Paket Edukasi
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/fish-swimming-in-clean-canal-water-with-green-plan.png"
                  alt="Ikan berenang di selokan yang sudah bersih dengan tanaman hijau di sekitarnya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Fish className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">500+ Ikan</p>
                    <p className="text-sm text-muted-foreground">Nila & Lele</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">50+</h3>
              <p className="text-muted-foreground">Anggota Komunitas</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">1000+</h3>
              <p className="text-muted-foreground">Pengunjung Edukasi</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">500+</h3>
              <p className="text-muted-foreground">Ikan Dipelihara</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">100%</h3>
              <p className="text-muted-foreground">Air Bersih</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary/10 text-secondary w-fit">Tentang Kami</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Transformasi Nyata untuk Lingkungan yang Lebih Baik
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Mina Julantoro Asri adalah komunitas lingkungan yang berhasil mengubah selokan kotor menjadi pusat
                budidaya ikan dan wisata edukasi. Dengan semangat gotong royong dan kepedulian lingkungan, kami
                membuktikan bahwa perubahan positif dimulai dari komunitas kecil.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Visi</h4>
                    <p className="text-muted-foreground">
                      Menjadi komunitas percontohan dalam pengelolaan lingkungan berkelanjutan
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Misi</h4>
                    <p className="text-muted-foreground">
                      Memberdayakan masyarakat melalui edukasi lingkungan dan budidaya ikan
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/tentang" className="flex items-center">
                  Pelajari Lebih Lanjut
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <img
                    src="/before-photo-of-dirty-polluted-canal-in-indonesia-.png"
                    alt="Foto sebelum: selokan kotor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Sebelum: Selokan Kotor</p>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <img
                    src="/after-photo-of-clean-canal-with-fish-farming-and-g.png"
                    alt="Foto sesudah: selokan bersih dengan ikan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">Sesudah: Budidaya Ikan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent mb-4">Program & Aktivitas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Program Unggulan Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Berbagai program inovatif yang menggabungkan edukasi, pemberdayaan masyarakat, dan pelestarian lingkungan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Fish className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Budidaya Ikan</CardTitle>
                <CardDescription>
                  Pemeliharaan ikan nila dan lele dengan teknik modern dan ramah lingkungan
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Wisata Edukasi</CardTitle>
                <CardDescription>
                  Program pembelajaran untuk sekolah dan mahasiswa tentang lingkungan berkelanjutan
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Pemberdayaan Masyarakat</CardTitle>
                <CardDescription>
                  Pelatihan agribisnis, pembuatan pupuk organik, dan vertikultur untuk warga
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Bergabunglah dengan Gerakan Lingkungan Kami
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Jadilah bagian dari transformasi lingkungan yang nyata. Kunjungi kami atau pesan paket edukasi untuk
              sekolah dan komunitas Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Pesan Paket Edukasi
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

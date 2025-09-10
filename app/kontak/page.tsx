import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Fish, MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Heart, QrCode, Bell } from "lucide-react"
import Link from "next/link"

export default function KontakPage() {
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
              <Link href="/program" className="text-foreground hover:text-primary transition-colors">
                Program
              </Link>
              <Link href="/produk" className="text-foreground hover:text-primary transition-colors">
                Produk
              </Link>
              <Link href="/galeri" className="text-foreground hover:text-primary transition-colors">
                Galeri
              </Link>
              <Link href="/kontak" className="text-primary font-medium">
                Kontak
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-xs bg-transparent">
                EN
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Kunjungi Kami</Button>
            </div>
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
            <span className="text-foreground font-medium">Kontak</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary mb-4">Hubungi Kami</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Mari <span className="text-primary">Terhubung</span> dengan Kami
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Kami siap membantu Anda merencanakan kunjungan edukasi yang berkesan atau menjawab pertanyaan tentang
              program dan produk kami.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Informasi Kontak</h2>
                <div className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-card-foreground">Alamat Lengkap</CardTitle>
                          <CardDescription>Lokasi komunitas kami</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground font-medium">
                        Jl. Julantoro No. 15, RT 02/RW 05
                        <br />
                        Kelurahan Gedongkiwo, Kecamatan Mantrijeron
                        <br />
                        Kota Yogyakarta, DIY 55142
                      </p>
                      <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        Buka di Google Maps
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="bg-secondary/10 p-2 rounded-lg">
                          <Phone className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-card-foreground">WhatsApp & Telepon</CardTitle>
                          <CardDescription>Untuk reservasi dan informasi</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-foreground">Pak Suharto (Ketua)</p>
                          <p className="text-muted-foreground">+62 812-3456-7890</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Bu Siti (Koordinator Edukasi)</p>
                          <p className="text-muted-foreground">+62 813-4567-8901</p>
                        </div>
                      </div>
                      <Button className="mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat WhatsApp
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="bg-accent/10 p-2 rounded-lg">
                          <Mail className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-card-foreground">Email</CardTitle>
                          <CardDescription>Untuk komunikasi resmi</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground font-medium mb-2">info@minajulantoro.com</p>
                      <p className="text-muted-foreground text-sm mb-4">Respon dalam 24 jam pada hari kerja</p>
                      <Button
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Kirim Email
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Kirim Pesan</h2>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Form Kontak</CardTitle>
                  <CardDescription>Sampaikan pertanyaan atau saran Anda kepada kami</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nama">Nama Lengkap *</Label>
                        <Input id="nama" placeholder="Masukkan nama Anda" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="email@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subjek">Subjek</Label>
                      <Input id="subjek" placeholder="Topik pesan Anda" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pesan">Pesan *</Label>
                      <Textarea id="pesan" placeholder="Tulis pesan Anda di sini..." rows={6} />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours & Social Media */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Operating Hours */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-card-foreground">Jam Operasional</CardTitle>
                    <CardDescription>Waktu terbaik untuk berkunjung</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium text-foreground">Senin - Jumat</span>
                    <span className="text-muted-foreground">08:00 - 16:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium text-foreground">Sabtu - Minggu</span>
                    <span className="text-muted-foreground">08:00 - 17:00 WIB</span>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="text-accent font-medium text-sm">
                      📝 Reservasi diperlukan untuk kunjungan grup (15+ orang)
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <p className="text-secondary font-medium text-sm">
                      🎣 Panen ikan: Setiap hari Minggu pagi (07:00-10:00)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Instagram className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-card-foreground">Media Sosial</CardTitle>
                    <CardDescription>Ikuti update kegiatan kami</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      <div>
                        <p className="font-medium text-foreground">Instagram</p>
                        <p className="text-sm text-muted-foreground">@minajulantoro.asri</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Follow
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Facebook className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-foreground">Facebook</p>
                        <p className="text-sm text-muted-foreground">Mina Julantoro Asri</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Like
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">T</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">TikTok</p>
                        <p className="text-sm text-muted-foreground">@minajulantoro</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Follow
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Lokasi Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Temukan kami di jantung Kota Yogyakarta, mudah diakses dengan berbagai transportasi
            </p>
          </div>
          <Card className="bg-card border-border overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">Google Maps Embed</p>
                <p className="text-muted-foreground text-sm">
                  Jl. Julantoro No. 15, Gedongkiwo, Mantrijeron, Yogyakarta
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-medium text-foreground">Dari Malioboro</p>
                  <p className="text-sm text-muted-foreground">15 menit berkendara</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Dari Stasiun Tugu</p>
                  <p className="text-sm text-muted-foreground">20 menit berkendara</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Dari Bandara YIA</p>
                  <p className="text-sm text-muted-foreground">45 menit berkendara</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Dukung Komunitas Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Berbagai cara untuk mendukung dan tetap terhubung dengan perkembangan komunitas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Donation */}
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Donasi & Dukungan</CardTitle>
                <CardDescription>Bantu kami mengembangkan program dan fasilitas komunitas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <QrCode className="mr-2 h-4 w-4" />
                    Donasi via QRIS
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Transfer Bank
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Donasi akan digunakan untuk pengembangan fasilitas dan program edukasi
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Newsletter</CardTitle>
                <CardDescription>Dapatkan update kegiatan dan program terbaru kami</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input placeholder="Email Anda" type="email" />
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Bell className="mr-2 h-4 w-4" />
                    Berlangganan
                  </Button>
                  <p className="text-xs text-muted-foreground">Kami mengirim update maksimal 2x per bulan</p>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Broadcast */}
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">WhatsApp Broadcast</CardTitle>
                <CardDescription>Terima notifikasi langsung di WhatsApp Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input placeholder="Nomor WhatsApp" type="tel" />
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Gabung Broadcast
                  </Button>
                  <p className="text-xs text-muted-foreground">Info panen, event, dan program khusus</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pertanyaan Umum</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan pengunjung
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Apakah perlu reservasi untuk kunjungan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Untuk kunjungan individu atau keluarga kecil (kurang dari 15 orang), tidak perlu reservasi. Namun
                  untuk grup besar seperti sekolah atau komunitas, reservasi diperlukan minimal 3 hari sebelumnya.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Berapa biaya kunjungan edukasi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Biaya bervariasi: SD (Rp 15.000/siswa), SMP/SMA (Rp 20.000/siswa), Mahasiswa/Umum (Rp 25.000/orang).
                  Sudah termasuk pemandu, materi edukasi, dan snack.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Apakah bisa membeli ikan langsung di lokasi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ya, kami menjual ikan segar (nila dan lele) serta produk olahan seperti kerupuk dan abon ikan. Untuk
                  pembelian dalam jumlah besar, sebaiknya pesan terlebih dahulu.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Fasilitas apa saja yang tersedia?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tersedia area parkir, toilet, mushola, gazebo untuk istirahat, dan area foto. Untuk grup besar, kami
                  sediakan sound system dan tempat duduk tambahan.
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
              Siap Berkunjung ke Mina Julantoro Asri?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Hubungi kami sekarang untuk merencanakan kunjungan edukasi yang berkesan atau untuk mendapatkan informasi
              lebih lanjut tentang program kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Telepon Langsung
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Fish className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">Mina Julantoro Asri</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Komunitas lingkungan yang mengubah selokan kotor menjadi wisata edukasi berkelanjutan.
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Kontak</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Jl. Julantoro No. 15, Yogyakarta</p>
                <p>WhatsApp: +62 812-3456-7890</p>
                <p>Email: info@minajulantoro.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Jam Kunjungan</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Senin - Jumat: 08:00 - 16:00</p>
                <p>Sabtu - Minggu: 08:00 - 17:00</p>
                <p>Reservasi grup: 3 hari sebelumnya</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <Link href="/tentang" className="block hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
                <Link href="/program" className="block hover:text-primary transition-colors">
                  Program
                </Link>
                <Link href="/produk" className="block hover:text-primary transition-colors">
                  Produk
                </Link>
                <Link href="/galeri" className="block hover:text-primary transition-colors">
                  Galeri
                </Link>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>&copy; 2024 Mina Julantoro Asri. Semua hak dilindungi.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span>Kampung Wisata Yogyakarta</span>
              <span>•</span>
              <span>Wisata Edukasi Jogja</span>
              <span>•</span>
              <span>Budidaya Ikan Selokan</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

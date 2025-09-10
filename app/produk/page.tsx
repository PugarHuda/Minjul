import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Fish, GraduationCap, Users, Clock, MapPin, Phone, Mail, ShoppingCart, Calendar, Star } from "lucide-react"
import Link from "next/link"

export default function ProdukPage() {
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
              <Link href="/produk" className="text-primary font-medium">
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
            <span className="text-foreground font-medium">Produk & Layanan</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary mb-4">Produk & Layanan</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Paket Edukasi & <span className="text-primary">Produk Berkualitas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Nikmati pengalaman edukasi yang berkesan dan dapatkan produk segar langsung dari hasil budidaya komunitas
              kami dengan harga terjangkau.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Paket Wisata Edukasi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Pilihan paket pembelajaran yang disesuaikan dengan kebutuhan berbagai kelompok
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-accent/10 text-accent">Populer</Badge>
              </div>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">Paket Sekolah Dasar</CardTitle>
                <CardDescription>
                  Program edukasi khusus untuk siswa SD dengan pendekatan pembelajaran yang menyenangkan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-3xl font-bold text-primary">Rp 15.000</p>
                    <p className="text-sm text-muted-foreground">per siswa</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>2-3 jam kunjungan</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Minimal 20 siswa</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Tour lengkap area</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Fasilitas:</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Pemandu wisata berpengalaman</li>
                      <li>• Materi edukasi interaktif</li>
                      <li>• Aktivitas memberi makan ikan</li>
                      <li>• Sertifikat kunjungan</li>
                      <li>• Snack dan air mineral</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Pesan Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-secondary/10 text-secondary">Rekomendasi</Badge>
              </div>
              <CardHeader>
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">Paket SMP & SMA</CardTitle>
                <CardDescription>
                  Program edukasi mendalam untuk siswa menengah dengan fokus pada sains dan lingkungan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-3xl font-bold text-secondary">Rp 20.000</p>
                    <p className="text-sm text-muted-foreground">per siswa</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>3-4 jam kunjungan</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Minimal 15 siswa</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Tour + workshop</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Fasilitas:</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Pemandu ahli budidaya</li>
                      <li>• Workshop praktik langsung</li>
                      <li>• Materi sains lingkungan</li>
                      <li>• Diskusi interaktif</li>
                      <li>• Makan siang + snack</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Pesan Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border relative overflow-hidden">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">Paket Mahasiswa & Umum</CardTitle>
                <CardDescription>
                  Program komprehensif untuk mahasiswa, peneliti, dan masyarakat umum yang ingin belajar mendalam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-3xl font-bold text-accent">Rp 25.000</p>
                    <p className="text-sm text-muted-foreground">per orang</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>4-5 jam kunjungan</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Minimal 10 orang</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Program lengkap</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Fasilitas:</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Konsultasi dengan ahli</li>
                      <li>• Data penelitian terbuka</li>
                      <li>• Workshop teknik budidaya</li>
                      <li>• Sesi tanya jawab mendalam</li>
                      <li>• Makan siang + dokumentasi</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Pesan Sekarang</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fish Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-4">Produk Segar</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Hasil Panen Berkualitas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ikan segar dan produk olahan langsung dari kolam budidaya kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                <Fish className="h-16 w-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-card-foreground">Ikan Nila Segar</CardTitle>
                <CardDescription>Ikan nila segar hasil budidaya organik, ukuran konsumsi siap masak</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">Rp 18.000</p>
                    <p className="text-sm text-muted-foreground">per kg</p>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Berat rata-rata 300-500g/ekor</p>
                    <p>• Tanpa bahan kimia berbahaya</p>
                    <p>• Dipanen fresh setiap hari</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                <Fish className="h-16 w-16 text-secondary" />
              </div>
              <CardHeader>
                <CardTitle className="text-card-foreground">Ikan Lele Segar</CardTitle>
                <CardDescription>Lele dumbo berkualitas tinggi, daging tebal dan gurih</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary">Rp 16.000</p>
                    <p className="text-sm text-muted-foreground">per kg</p>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Berat rata-rata 200-400g/ekor</p>
                    <p>• Pakan alami berkualitas</p>
                    <p>• Siap kirim dalam kondisi hidup</p>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                <ShoppingCart className="h-16 w-16 text-accent" />
              </div>
              <CardHeader>
                <CardTitle className="text-card-foreground">Kerupuk Ikan</CardTitle>
                <CardDescription>Kerupuk ikan buatan rumahan dari daging ikan nila pilihan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">Rp 25.000</p>
                    <p className="text-sm text-muted-foreground">per pack (500g)</p>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Tanpa pengawet buatan</p>
                    <p>• Rasa gurih dan renyah</p>
                    <p>• Kemasan higienis</p>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                <ShoppingCart className="h-16 w-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-card-foreground">Abon Ikan</CardTitle>
                <CardDescription>Abon ikan nila premium, cocok untuk lauk atau camilan sehat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">Rp 35.000</p>
                    <p className="text-sm text-muted-foreground">per jar (250g)</p>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Tahan hingga 6 bulan</p>
                    <p>• Kaya protein dan omega-3</p>
                    <p>• Kemasan jar kedap udara</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-secondary/10 text-secondary mb-4">Formulir Booking</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Reservasi Online</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Isi formulir di bawah untuk melakukan reservasi kunjungan atau pemesanan produk
              </p>
            </div>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Form Pemesanan</CardTitle>
                <CardDescription>Mohon lengkapi data berikut untuk memproses reservasi Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nama">Nama Lengkap *</Label>
                      <Input id="nama" placeholder="Masukkan nama lengkap" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institusi">Nama Institusi/Sekolah</Label>
                      <Input id="institusi" placeholder="Nama sekolah atau institusi" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor WhatsApp *</Label>
                      <Input id="phone" placeholder="08123456789" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="jenis">Jenis Pemesanan *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis pemesanan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paket-sd">Paket Sekolah Dasar</SelectItem>
                          <SelectItem value="paket-smp-sma">Paket SMP & SMA</SelectItem>
                          <SelectItem value="paket-mahasiswa">Paket Mahasiswa & Umum</SelectItem>
                          <SelectItem value="produk-ikan">Pembelian Produk Ikan</SelectItem>
                          <SelectItem value="kunjungan-individu">Kunjungan Individu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jumlah">Jumlah Peserta/Produk</Label>
                      <Input id="jumlah" type="number" placeholder="Masukkan jumlah" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tanggal">Tanggal Kunjungan</Label>
                      <Input id="tanggal" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="waktu">Waktu Preferensi</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih waktu" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pagi">Pagi (08:00-12:00)</SelectItem>
                          <SelectItem value="siang">Siang (13:00-17:00)</SelectItem>
                          <SelectItem value="fleksibel">Fleksibel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="catatan">Catatan Tambahan</Label>
                    <Textarea
                      id="catatan"
                      placeholder="Permintaan khusus, alergi makanan, atau informasi tambahan lainnya..."
                      rows={4}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      Kirim Reservasi
                    </Button>
                    <Button type="button" variant="outline" className="flex-1 bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      Hubungi via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Informasi Pemesanan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Hubungi kami untuk informasi lebih lanjut atau konfirmasi pemesanan
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">WhatsApp</CardTitle>
                <CardDescription>Hubungi langsung untuk reservasi cepat</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">+62 812-3456-7890</p>
                <p className="text-sm text-muted-foreground mb-4">Aktif 24 jam</p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Chat WhatsApp</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Email</CardTitle>
                <CardDescription>Kirim detail pemesanan via email</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">info@minajulantoro.com</p>
                <p className="text-sm text-muted-foreground mb-4">Respon dalam 24 jam</p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  Kirim Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-card-foreground">Jam Operasional</CardTitle>
                <CardDescription>Waktu terbaik untuk kunjungan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-foreground">Senin - Jumat</p>
                  <p className="text-muted-foreground">08:00 - 16:00 WIB</p>
                  <p className="font-semibold text-foreground">Sabtu - Minggu</p>
                  <p className="text-muted-foreground">08:00 - 17:00 WIB</p>
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
              Siap Merasakan Pengalaman Edukatif?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Jangan lewatkan kesempatan untuk belajar langsung tentang budidaya ikan berkelanjutan dan merasakan produk
              segar dari komunitas kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Pesan Paket Edukasi
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Beli Produk Ikan
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

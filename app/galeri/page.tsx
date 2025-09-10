import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fish, Camera, Video, Users, Calendar, Award, Play, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function GaleriPage() {
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
              <Link href="/galeri" className="text-primary font-medium">
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
            <span className="text-foreground font-medium">Galeri</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent mb-4">Galeri & Media</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Dokumentasi <span className="text-primary">Perjalanan Transformasi</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Saksikan perubahan luar biasa dari selokan kotor menjadi pusat wisata edukasi melalui foto, video, dan
              testimoni yang menginspirasi.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="transformasi" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="transformasi">Transformasi</TabsTrigger>
              <TabsTrigger value="kegiatan">Kegiatan</TabsTrigger>
              <TabsTrigger value="pengunjung">Pengunjung</TabsTrigger>
              <TabsTrigger value="panen">Panen Ikan</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
            </TabsList>

            {/* Transformation Gallery */}
            <TabsContent value="transformasi" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Transformasi Selokan</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Perjalanan luar biasa dari kondisi selokan yang kotor hingga menjadi tempat budidaya ikan yang asri
                </p>
              </div>

              {/* Before After Comparison */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted relative">
                    <img
                      src="/before-photo-of-dirty-polluted-canal-in-indonesia-.png"
                      alt="Kondisi selokan sebelum dibersihkan - kotor dan tercemar"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-destructive text-destructive-foreground">Sebelum 2018</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Kondisi Awal</CardTitle>
                    <CardDescription>
                      Selokan kotor dengan air keruh, sampah berserakan, dan bau tidak sedap yang membuat warga enggan
                      melewati area ini.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted relative">
                    <img
                      src="/after-photo-of-clean-canal-with-fish-farming-and-g.png"
                      alt="Kondisi selokan setelah transformasi - bersih dengan ikan"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">Setelah 2020</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Setelah Transformasi</CardTitle>
                    <CardDescription>
                      Selokan bersih dengan air jernih, ratusan ikan sehat, dan tanaman hijau yang membuat area ini
                      menjadi asri dan nyaman.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Transformation Timeline */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-card border-border text-center">
                  <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                    <Calendar className="h-12 w-12 text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">2018</CardTitle>
                    <CardDescription>Inisiasi pembersihan selokan oleh warga</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-card border-border text-center">
                  <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                    <Users className="h-12 w-12 text-secondary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">2019</CardTitle>
                    <CardDescription>Pembentukan komunitas dan gotong royong rutin</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-card border-border text-center">
                  <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                    <Fish className="h-12 w-12 text-accent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">2020</CardTitle>
                    <CardDescription>Mulai budidaya ikan nila dan lele</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-card border-border text-center">
                  <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">2021</CardTitle>
                    <CardDescription>Penghargaan kampung bersih dari Pemkot</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            {/* Activities Gallery */}
            <TabsContent value="kegiatan" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Kegiatan Komunitas</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Berbagai aktivitas rutin dan event khusus yang melibatkan seluruh anggota komunitas
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Gotong Royong Mingguan</CardTitle>
                    <CardDescription>
                      Kegiatan rutin setiap Minggu pagi untuk membersihkan area kolam dan perawatan fasilitas bersama.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Fish className="h-16 w-16 text-secondary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Pemberian Pakan Ikan</CardTitle>
                    <CardDescription>
                      Aktivitas harian pemberian pakan ikan yang dilakukan secara bergiliran oleh anggota komunitas.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Camera className="h-16 w-16 text-accent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Workshop Pelatihan</CardTitle>
                    <CardDescription>
                      Sesi pelatihan agribisnis, pembuatan pupuk organik, dan teknik budidaya untuk warga sekitar.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Rapat Koordinasi</CardTitle>
                    <CardDescription>
                      Pertemuan rutin untuk membahas program, evaluasi kegiatan, dan perencanaan masa depan komunitas.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-secondary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Event Hari Lingkungan</CardTitle>
                    <CardDescription>
                      Perayaan Hari Lingkungan Hidup dengan berbagai aktivitas edukasi dan kampanye kesadaran
                      lingkungan.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Award className="h-16 w-16 text-accent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Kunjungan Pejabat</CardTitle>
                    <CardDescription>
                      Kunjungan dari pejabat pemerintah daerah dan pusat untuk melihat langsung hasil transformasi
                      komunitas.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            {/* Visitors Gallery */}
            <TabsContent value="pengunjung" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Kunjungan Edukasi</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Dokumentasi kunjungan dari berbagai sekolah, universitas, dan komunitas yang belajar dari pengalaman
                  kami
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Siswa SD Negeri 1 Yogya</CardTitle>
                    <CardDescription>
                      Kunjungan 45 siswa kelas 4-5 untuk belajar tentang pentingnya menjaga kebersihan lingkungan.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-primary/10 text-primary">Maret 2024</Badge>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Users className="h-16 w-16 text-secondary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Mahasiswa UGM</CardTitle>
                    <CardDescription>
                      Kunjungan mahasiswa Fakultas Pertanian untuk penelitian tentang budidaya ikan berkelanjutan.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-secondary/10 text-secondary">Februari 2024</Badge>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Users className="h-16 w-16 text-accent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">SMA Negeri 3 Yogya</CardTitle>
                    <CardDescription>
                      Program field trip siswa kelas XI IPA untuk mempelajari ekosistem air dan budidaya ikan.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-accent/10 text-accent">Januari 2024</Badge>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Komunitas Lingkungan Jakarta</CardTitle>
                    <CardDescription>
                      Studi banding dari komunitas lingkungan Jakarta untuk replikasi program serupa.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-primary/10 text-primary">Desember 2023</Badge>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Users className="h-16 w-16 text-secondary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Wisatawan Mancanegara</CardTitle>
                    <CardDescription>
                      Kunjungan turis dari Belanda dan Australia yang tertarik dengan konsep eco-tourism.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-secondary/10 text-secondary">November 2023</Badge>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <Users className="h-16 w-16 text-accent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Keluarga Wisatawan</CardTitle>
                    <CardDescription>
                      Kunjungan keluarga dengan anak-anak untuk edukasi lingkungan dan rekreasi akhir pekan.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-accent/10 text-accent">Setiap Weekend</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Harvest Gallery */}
            <TabsContent value="panen" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Panen Raya Ikan</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Momen membanggakan saat panen ikan yang melibatkan seluruh komunitas dan pengunjung
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Fish className="h-20 w-20 text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Panen Raya Maret 2024</CardTitle>
                    <CardDescription>
                      Panen terbesar dengan hasil 200kg ikan nila dan 150kg ikan lele. Dihadiri 300+ pengunjung dan
                      warga.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">350kg</p>
                        <p className="text-sm text-muted-foreground">Total Panen</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-secondary">300+</p>
                        <p className="text-sm text-muted-foreground">Pengunjung</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Fish className="h-20 w-20 text-secondary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Panen Raya November 2023</CardTitle>
                    <CardDescription>
                      Event panen yang dikombinasikan dengan festival kuliner ikan dan workshop pengolahan ikan.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-secondary">280kg</p>
                        <p className="text-sm text-muted-foreground">Total Panen</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-accent">250+</p>
                        <p className="text-sm text-muted-foreground">Pengunjung</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card border-border text-center">
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Fish className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-card-foreground">Teknik Panen</CardTitle>
                    <CardDescription>
                      Menggunakan jaring khusus dan teknik yang tidak merusak ekosistem kolam
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border text-center">
                  <CardHeader>
                    <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-card-foreground">Partisipasi Warga</CardTitle>
                    <CardDescription>
                      Seluruh anggota komunitas terlibat dalam proses panen dan pengolahan
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card border-border text-center">
                  <CardHeader>
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-card-foreground">Kualitas Ikan</CardTitle>
                    <CardDescription>
                      Ikan hasil panen berkualitas tinggi, sehat, dan bebas dari bahan kimia berbahaya
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            {/* Media Coverage */}
            <TabsContent value="media" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Liputan Media</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Berbagai media massa yang telah meliput kisah inspiratif transformasi Mina Julantoro Asri
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/10 text-primary">TV</Badge>
                    </div>
                    <CardTitle className="text-card-foreground">TVRI Yogyakarta</CardTitle>
                    <CardDescription>
                      "Transformasi Selokan Jadi Wisata Edukasi" - Feature khusus tentang perjalanan komunitas kami.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">15 Maret 2024</span>
                      <Button size="sm" variant="outline">
                        <Play className="mr-2 h-4 w-4" />
                        Tonton
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-secondary/10 p-2 rounded-lg">
                        <Camera className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/10 text-secondary">Koran</Badge>
                    </div>
                    <CardTitle className="text-card-foreground">Kedaulatan Rakyat</CardTitle>
                    <CardDescription>
                      "Dari Selokan Kumuh Jadi Kampung Wisata" - Artikel lengkap di halaman utama edisi Minggu.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">8 Februari 2024</span>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Baca
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-accent/10 p-2 rounded-lg">
                        <Video className="h-6 w-6 text-accent" />
                      </div>
                      <Badge className="bg-accent/10 text-accent">Online</Badge>
                    </div>
                    <CardTitle className="text-card-foreground">Detik.com</CardTitle>
                    <CardDescription>
                      "Inspiratif! Warga Yogya Sulap Selokan Kotor Jadi Tempat Budidaya Ikan" - Viral di media sosial.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">22 Januari 2024</span>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Baca
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/10 text-primary">Majalah</Badge>
                    </div>
                    <CardTitle className="text-card-foreground">Trubus</CardTitle>
                    <CardDescription>
                      "Budidaya Ikan di Selokan: Inovasi Ramah Lingkungan" - Cover story edisi khusus lingkungan.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Desember 2023</span>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Baca
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-secondary/10 p-2 rounded-lg">
                        <Video className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/10 text-secondary">YouTube</Badge>
                    </div>
                    <CardTitle className="text-card-foreground">Kompas TV</CardTitle>
                    <CardDescription>
                      "Kisah Sukses Komunitas Mina Julantoro Asri" - Dokumenter 30 menit yang menginspirasi.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">November 2023</span>
                      <Button size="sm" variant="outline">
                        <Play className="mr-2 h-4 w-4" />
                        Tonton
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-accent/10 p-2 rounded-lg">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <Badge className="bg-accent/10 text-accent">Penghargaan</Badge>
                    </div>
                    <CardTitle className="text-card-foreground">Anugerah Lingkungan</CardTitle>
                    <CardDescription>
                      Penerima penghargaan "Kampung Bersih Terbaik" dari Kementerian Lingkungan Hidup RI.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Juni 2023</span>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-4">Testimoni</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Kata Mereka Tentang Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Pengalaman dan kesan dari berbagai pengunjung yang telah merasakan program edukasi kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-card-foreground text-base">Bu Sari</CardTitle>
                    <CardDescription>Guru SD Negeri 1 Yogya</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm italic">
                  "Anak-anak sangat antusias belajar di sini. Mereka jadi lebih paham pentingnya menjaga lingkungan.
                  Program edukasinya sangat interaktif dan mudah dipahami."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-card-foreground text-base">Mas Budi</CardTitle>
                    <CardDescription>Mahasiswa UGM</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm italic">
                  "Penelitian saya tentang budidaya ikan berkelanjutan sangat terbantu dengan data dan pengalaman dari
                  komunitas ini. Sangat inspiratif!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-card-foreground text-base">Keluarga Wijaya</CardTitle>
                    <CardDescription>Wisatawan Jakarta</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm italic">
                  "Tempat yang luar biasa untuk edukasi keluarga. Anak-anak belajar sambil bermain, dan kami sebagai
                  orang tua juga mendapat wawasan baru tentang lingkungan."
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
              Jadilah Bagian dari Cerita Kami
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Kunjungi kami dan rasakan sendiri transformasi yang menginspirasi. Dokumentasikan pengalaman Anda dan
              bagikan cerita positif ini!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Camera className="mr-2 h-5 w-5" />
                Kunjungi & Foto
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Video className="mr-2 h-5 w-5" />
                Tonton Video
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

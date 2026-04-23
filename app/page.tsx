import Image from "next/image"
import { Smartphone, Globe, Dumbbell, BarChart3, Zap, History, Moon, AlertTriangle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center gap-8">
            <Image
              src="/logo.png"
              alt="Bonfire Fitness Logo"
              width={160}
              height={160}
              className="rounded-3xl shadow-2xl shadow-primary/30"
              priority
            />
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                <span className="text-primary">Bonfire</span> Fitness
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Tvůj nekompromisní tréninkový deník - Last Update-23.4
                <p>ve Webové verzi jsou aktualizace automatické, při android verzi prosím reinstalujte</p>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jedná se o můj osobní projekt, jakýkoliv feedback je plně vítán, !!! ještě jedou z důvodu bezpečnosti, nejlépe použijte naprosto unikátní heslo které nikde jinde nemáte, nejlépe i email (klidně smyšlený)!!!
              </p>
              <p>Za projektem stojí František Tesařík</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kdo Jsem?
                <p>-Hlavně nadšenec do Silového Trojboje</p>
                <p>-Jako bonus studuju IT na vysoké škole</p>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">

                <h2>POZOR PRO IOS POUZE WEBOVÁ VERZE</h2>
              </p>
            </div>

            {/* Platform Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium">
                <Smartphone className="w-4 h-4 text-primary" />
                Android
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium">
                <Globe className="w-4 h-4 text-primary" />
                Web
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="gap-2 text-lg px-8">
                <a href="https://expo.dev/accounts/gr0nn1x/projects/bonfire-fitness/builds/d59af75c-586c-4eb0-9047-f0febf740874" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-5 h-5" />
                  Stáhnout APK
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="gap-2 text-lg px-8">
                <a href="https://bonfire-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5" />
                  Otevřít Web Verzi
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-destructive/50 bg-destructive/10">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-destructive">Early Access Verze</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tato aplikace je v <strong className="text-foreground">rané fázi vývoje</strong>. Mohou se vyskytnout chyby, neočekávané pády nebo změny v designu a funkcionalitě. Tvoje trpělivost a zpětná vazba jsou velmi ceněny!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4 border-primary/50 bg-primary/10">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">Bezpečnostní doporučení</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Protože jde o early verzi, doporučujeme používat <strong className="text-foreground">vymyšlený email</strong> a <strong className="text-foreground">heslo, které nepoužíváš jinde</strong>. Nepoužívej své osobní nebo pracovní přihlašovací údaje.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Co appka umí?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Dumbbell className="w-8 h-8" />}
              title="Chytré šablony"
              description="Vytvoř si vlastní tréninkové plány a cíle. Vše máš po ruce, připravené na další trénink."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Live Tracking"
              description="Zapisuj si odcvičené váhy, opakování a RPE (náročnost) přímo během série."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Absolutní flexibilita"
              description="Máš dneska extra energii? Přidej si do rozjetého tréninku jakýkoliv cvik navíc na jedno kliknutí."
            />
            <FeatureCard
              icon={<History className="w-8 h-8" />}
              title="Historie"
              description="Každá kapka potu se počítá. Aplikace ukládá tvoji historii, abys přesně věděl, jestli se zlepšuješ."
            />
            <FeatureCard
              icon={<Moon className="w-8 h-8" />}
              title="Dark Mode"
              description="Krásný, agresivní a moderní temný design s oranžovými akcenty, který ti nevypálí oči."
            />
            <FeatureCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Multiplatformní"
              description="Zatím dostupné na Androidu a webu. Soustřeď se na zvedání železa, Bonfire se postará o zbytek."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Postaveno na moderních technologiích
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            React Native & Expo pro mobilní aplikaci, NativeWind pro styling, Supabase pro backend a databázi. Webová verze běží na Vercelu.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React Native", "Expo", "NativeWind", "Supabase", "Vercel"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Připraven na trénink?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stáhni si Bonfire Fitness a začni sledovat své pokroky ještě dnes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="gap-2 text-lg px-8">
              <a href="https://expo.dev/accounts/gr0nn1x/projects/bonfire-fitness/builds/d59af75c-586c-4eb0-9047-f0febf740874" target="_blank" rel="noopener noreferrer">
                <Smartphone className="w-5 h-5" />
                Stáhnout APK
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="gap-2 text-lg px-8">
              <a href="https://bonfire-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5" />
                Otevřít Web Verzi
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Bonfire Fitness"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold">Bonfire Fitness</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Early Access Verze &bull; Android & Web
          </p>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-6 space-y-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

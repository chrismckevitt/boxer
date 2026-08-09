import Hero from "@/components/hero.tsx";
import OnOffGrid from "@/components/on-off-grid.tsx";
import LogoCloud from "@/components/logo-cloud.tsx";
import Intro from "@/components/intro.tsx";
import CookieBanner from "@/components/cookie-banner.tsx";
import StickerWall from "@/components/aicanvas/sticker-wall.tsx";
import InteractiveCardStack from "@/components/aicanvas/interactive-card-stack.tsx";
import SplitImage from "@/components/split-image.tsx";
import ImageGrid from "@/components/image-grid.tsx";
import InteriorGridOne from "@/components/interior-grid-one.tsx";
import InteriorGridTwo from "@/components/interior-grid-two.tsx";
import Footer from "@/components/footer.tsx";

export default function App() {
    return (
        <>
            <Hero/>
            <Intro/>
            <LogoCloud/>
            <InteriorGridOne/>
            <OnOffGrid/>
            <InteractiveCardStack/>
            <SplitImage/>
            <ImageGrid/>
            <InteriorGridTwo/>
            <StickerWall/>
            <CookieBanner/>
            <Footer />
        </>

    )
}

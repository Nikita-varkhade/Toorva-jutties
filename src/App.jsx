import React from 'react';
import { useShop, ShopProvider } from './context/ShopContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollections } from './components/FeaturedCollections';
import { Bestsellers } from './components/Bestsellers';
import { BrandStory } from './components/BrandStory';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerLove } from './components/CustomerLove';
import { InstagramFeed } from './components/InstagramFeed';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

// Pages & Modals
import { ProductDetailPage } from './components/ProductDetailPage';
import { ShopAllPage } from './components/ShopAllPage';
import { CollectionsPage } from './components/CollectionsPage';
import { OurStoryPage } from './components/OurStoryPage';
import { ContactPage } from './components/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { SearchModal } from './components/SearchModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Check } from 'lucide-react';

const MainContent = () => {
  const { currentView, notification } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-ivory selection:bg-gold/25 selection:text-brown">
      
      {/* Global Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 animate-slide-up">
          <div className="bg-brown text-ivory text-xs px-4 py-3 rounded-lg shadow-2xl border border-gold/40 flex items-center gap-2.5 backdrop-blur-md">
            <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold-light">
              <Check className="w-3.5 h-3.5" />
            </span>
            <span className="font-medium tracking-wide">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Luxury Navigation Bar */}
      <Navbar />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero />
            <FeaturedCollections />
            <Bestsellers />
            <BrandStory />
            <WhyChooseUs />
            <CustomerLove />
            <InstagramFeed />
            <Newsletter />
          </>
        )}

        {currentView === 'shop' && <ShopAllPage />}
        {currentView === 'product' && <ProductDetailPage />}
        {currentView === 'collections' && <CollectionsPage />}
        {currentView === 'story' && <OurStoryPage />}
        {currentView === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Drawers & Interactive Overlays */}
      <CartDrawer />
      <WishlistDrawer />
      <QuickViewModal />
      <SizeGuideModal />
      <SearchModal />

      {/* Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp />

    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}

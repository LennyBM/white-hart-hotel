import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveDefault(m: any) {
  return { default: m.default ?? Object.values(m)[0] } as { default: React.ComponentType };
}

const HomePage = lazy(() => import('./components/pages/HomePage').then(resolveDefault));
const DiningPage = lazy(() => import('./components/pages/DiningPage').then(resolveDefault));
const RoomsPage = lazy(() => import('./components/pages/RoomsPage').then(resolveDefault));
const WhatsOnPage = lazy(() => import('./components/pages/WhatsOnPage').then(resolveDefault));
const PopUpBarPage = lazy(() => import('./components/pages/PopUpBarPage').then(resolveDefault));
const OurStoryPage = lazy(() => import('./components/pages/OurStoryPage').then(resolveDefault));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(resolveDefault));
const PrivacyPage = lazy(() => import('./components/pages/PrivacyPage').then(resolveDefault));
const TermsPage = lazy(() => import('./components/pages/TermsPage').then(resolveDefault));
const CookiesPage = lazy(() => import('./components/pages/CookiesPage').then(resolveDefault));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage').then(resolveDefault));
const VinylMenuPage = lazy(() => import('./components/pages/VinylMenuPage').then(resolveDefault));
const MenuPage = lazy(() => import('./components/pages/MenuPage').then(resolveDefault));
const BlackRockGrillPage = lazy(() => import('./components/pages/BlackRockGrillPage').then(resolveDefault));
const TakeawayPage = lazy(() => import('./components/pages/TakeawayPage').then(resolveDefault));
const BlogPage = lazy(() => import('./components/pages/BlogPage').then(resolveDefault));
const PokerPage = lazy(() => import('./components/pages/PokerPage').then(resolveDefault));
const PoolPage = lazy(() => import('./components/pages/PoolPage').then(resolveDefault));
const KaraokePage = lazy(() => import('./components/pages/KaraokePage').then(resolveDefault));
const AccessibilityPage = lazy(() => import('./components/pages/AccessibilityPage').then(resolveDefault));
const FAQPage = lazy(() => import('./components/pages/FAQPage').then(resolveDefault));

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="dining" element={<DiningPage />} />
              <Route path="vinyl-menu" element={<VinylMenuPage />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="black-rock-grill" element={<BlackRockGrillPage />} />
              <Route path="takeaway" element={<TakeawayPage />} />
              <Route path="rooms" element={<RoomsPage />} />
              <Route path="whats-on" element={<WhatsOnPage />} />
              <Route path="whats-on/poker" element={<PokerPage />} />
              <Route path="whats-on/pool" element={<PoolPage />} />
              <Route path="whats-on/karaoke" element={<KaraokePage />} />
              <Route path="pop-up-bar" element={<PopUpBarPage />} />
              <Route path="our-story" element={<OurStoryPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="cookies" element={<CookiesPage />} />
              <Route path="accessibility" element={<AccessibilityPage />} />
              <Route path="faqs" element={<FAQPage />} />
              <Route path="news" element={<BlogPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

import React from 'react';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Apprendre l\'informatique quantique - QuantumCamp',
  description: 'Apprenez les bases de l\'informatique quantique de façon interactive grâce à nos cours d\'introduction.',
  keywords: ['informatique quantique', 'apprendre l\'informatique quantique', 'c\'est quoi l\'informatique quantique?', 'apprendre l\'informatique quantique en ligne'],
  openGraph: {
    title: 'Apprendre l\'informatique quantique - QuantumCamp',
    description: 'Apprenez les bases de l\'informatique quantique de façon interactive grâce à nos cours d\'introduction.',
    url: 'https://quantumcamp.fr',
    siteName: 'QuantumCamp',
    images: [
      {
        url: 'https://www.quantumcamp.fr/_next/image?url=%2Fassets%2FQuantumCamp.png&w=828&q=75',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-creamWhite">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purpleBg via-almostWhite to-blueBg opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purpleBg/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blueBg/30 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purpleBg shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-600">Plateforme d'apprentissage interactive</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {t('homePage.title')}
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t('homePage.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/learn"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {t('homePage.button')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-white hover:border-purple-300 hover:text-purple-600 transition-all duration-300"
                >
                  En savoir plus
                </a>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-500">Gratuit</div>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">FR</div>
                  <div className="text-sm text-gray-500">Français</div>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Quiz</div>
                  <div className="text-sm text-gray-500">Interactif</div>
                </div>
              </div>
            </div>
            
            {/* Right: Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative blobs */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-purpleBg rounded-full blur-3xl opacity-60 animate-pulse" />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blueBg rounded-full blur-3xl opacity-60 animate-pulse" />
                
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-purple-500/10 p-8 border border-white/50">
                  <div className="relative z-10">
                    {/* Quantum circuit illustration */}
                    <svg viewBox="0 0 400 300" className="w-full h-auto max-w-md">
                      {/* Connection lines */}
                      <line x1="80" y1="75" x2="320" y2="75" stroke="#e4d2fc" strokeWidth="2" />
                      <line x1="80" y1="150" x2="320" y2="150" stroke="#BFDBFF" strokeWidth="2" />
                      <line x1="80" y1="225" x2="320" y2="225" stroke="#e4d2fc" strokeWidth="2" />
                      
                      {/* Qubit circles */}
                      <circle cx="80" cy="75" r="30" fill="#e4d2fc" />
                      <circle cx="80" cy="75" r="30" fill="url(#grad1)" />
                      <text x="80" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">|0⟩</text>
                      
                      <circle cx="320" cy="75" r="30" fill="#e4d2fc" />
                      <circle cx="320" cy="75" r="30" fill="url(#grad1)" />
                      <text x="320" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">|1⟩</text>
                      
                      <circle cx="80" cy="150" r="30" fill="#BFDBFF" />
                      <circle cx="80" cy="150" r="30" fill="url(#grad2)" />
                      <text x="80" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">|+⟩</text>
                      
                      <circle cx="320" cy="150" r="30" fill="#BFDBFF" />
                      <circle cx="320" cy="150" r="30" fill="url(#grad2)" />
                      <text x="320" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">|−⟩</text>
                      
                      <circle cx="80" cy="225" r="30" fill="#e4d2fc" />
                      <circle cx="80" cy="225" r="30" fill="url(#grad1)" />
                      <text x="80" y="230" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">H</text>
                      
                      <circle cx="320" cy="225" r="30" fill="#e4d2fc" />
                      <circle cx="320" cy="225" r="30" fill="url(#grad1)" />
                      <text x="320" y="230" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">X</text>
                      
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('homeCardsFullSection.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('homeCardsFullSection.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-gray-100 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-purpleBg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Calcul Quantique</h3>
                <p className="text-gray-600 leading-relaxed">Dépassez les limites des ordinateurs classiques et découvrez les principes fondamentaux de la superposition et de l'intrication.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-blue-500/5 border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-blueBg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Carrières</h3>
                <p className="text-gray-600 leading-relaxed">Les opportunités en informatique quantique sont en pleine expansion. Positionnez-vous pour les métiers de demain.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-purple-500/5 border border-gray-100 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-purpleBg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Avenir Tech</h3>
                <p className="text-gray-600 leading-relaxed">Comprenez le futur de la technologie et participez à la révolution quantique qui transforme notre monde.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-almostWhite to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-600">
              Apprenez l'informatique quantique étape par étape avec notre approche interactive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Inscrivez-vous', desc: 'Créez votre compte gratuit en quelques secondes et accédez immédiatement à tous nos cours.', icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              )},
              { step: '02', title: 'Apprenez', desc: 'Suivez nos chapitres interactifs rédigés par des experts, avec des explications claires en français.', icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )},
              { step: '03', title: 'Pratiquez', desc: 'Testez vos connaissances avec nos quiz interactifs et suivez votre progression en temps réel.', icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )},
            ].map((item) => (
              <div key={item.step} className="relative text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purpleBg to-blueBg rounded-2xl text-purple-600 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/10">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-purple-400 mb-2">ÉTAPE {item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 lg:p-16 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Prêt à commencer l'aventure quantique ?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Rejoignez dès maintenant les apprenants qui découvrent l'informatique quantique avec QuantumCamp
              </p>
              <a
                href="/learn"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {t('homePage.button')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

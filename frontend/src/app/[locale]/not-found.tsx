import React from 'react';
import { Link } from 'next-intl';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-creamWhite">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page non trouvée</h1>
      <p className="text-gray-600 mb-8">La page que vous cherchez n'existe pas.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-orange-200 border border-orange-400 rounded-lg hover:bg-orange-300 transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

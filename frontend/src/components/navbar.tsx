'use client';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations();
  const [user, setUser] = useState<{ id: string; name?: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
        const response = await fetch(`${apiUrl}/users/check-auth`, {
          credentials: "include",
        });

        if (response.ok) {
          setUser({ id: "authenticated" });
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
      await fetch(`${apiUrl}/users/logout`, {
        method: "POST",
        credentials: "include",
      });

      setUser(null);
      closeMenu();
      router.push("/login");
    } catch (error) {
      throw new Error("Erreur lors de la déconnexion.");
    }
  };

  const navLinks = [
    { href: "/learn", label: t('navigation.learn') },
    { href: "/pricing", label: t('navigation.pricing') },
    { href: "/blog", label: t('navigation.blog') },
    { href: "/about", label: t('navigation.about') },
    { href: "/contact", label: t('navigation.contact') },
  ];

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/50'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity" />
              <Image
                src="/assets/QuantumCamp.png"
                alt="QuantumCamp logo"
                width={40}
                height={40}
                loading="eager"
                className="relative"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hidden sm:block">
              QuantumCamp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-purple-600 bg-purpleBg/50'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purpleBg/30'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-xl hover:bg-purpleBg/30 transition-all"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {user.name?.[0]?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  <span>Profil</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  title="Déconnexion"
                >
                  <FontAwesomeIcon icon={faPowerOff} className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-xl hover:bg-purpleBg/30 transition-all"
                >
                  {t('navigation.login')}
                </Link>
                <Link
                  href="/signup"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 transition-all"
                >
                  {t('navigation.signup')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-purpleBg/30 transition-all"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                isActive(link.href)
                  ? 'text-purple-600 bg-purpleBg/50'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purpleBg/30'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-100 space-y-2">
            {user ? (
              <>
                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-purpleBg/30 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {user.name?.[0]?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  <span className="font-medium">Profil</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all"
                >
                  <FontAwesomeIcon icon={faPowerOff} className="w-5 h-5" />
                  <span className="font-medium">Déconnexion</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-xl text-gray-600 hover:bg-purpleBg/30 transition-all font-medium"
                >
                  {t('navigation.login')}
                </Link>
                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 text-center font-semibold"
                >
                  {t('navigation.signup')}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

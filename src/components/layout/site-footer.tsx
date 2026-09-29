import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import {
  footerNav,
  legalNav,
  siteConfig,
  socialLinks,
} from "@/config/site";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime";

export function SiteFooter() {
  return (
    <footer className="bg-brand-blue-dark text-white/70">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Logo className={`text-white ${focusRing}`} />
            <p className="mt-5 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:border-brand-lime hover:text-brand-lime ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12"
          >
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item.label}`}>
                      <Link
                        href={item.href}
                        className={`rounded-sm transition-colors hover:text-brand-lime ${focusRing}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-xs sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legalNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`rounded-sm transition-colors hover:text-brand-lime ${focusRing}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

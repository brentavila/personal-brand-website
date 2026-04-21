"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[340px] bg-bg-secondary border-l border-border flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Link
                href="/"
                onClick={onClose}
                className="font-heading font-bold text-xl text-text-primary"
              >
                B<span className="text-[#E87C0C]">.</span>
              </Link>
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary transition-colors p-1"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="px-6 py-6 flex-1">
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-3 text-base text-text-secondary hover:text-text-primary border-b border-border/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-text-muted leading-relaxed italic">
                Smart campaigns and automations so your growth scales without the guesswork.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="full" variant="default">
                  <Link href="/#projects" onClick={onClose}>
                    View My Work
                  </Link>
                </Button>
                <Button asChild size="full" variant="outline">
                  <Link href="/#contact" onClick={onClose}>
                    Get in Touch
                  </Link>
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-text-muted mb-2 uppercase tracking-wider">Contact</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-[#E87C0C] hover:text-[#FF9520] transition-colors"
                >
                  {siteConfig.email}
                </a>

                <div className="flex items-center gap-4 mt-4">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-[#E87C0C] transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-[#E87C0C] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-[#E87C0C] transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <XIcon size={20} />
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

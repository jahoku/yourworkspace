'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

const sitemap = [
  {
    title: '솔루션',
    links: [
      { name: 'AutoPageAI', href: '/autopageai' },
      { name: 'ConversAI', href: '/conversai' },
      { name: 'IdentiVis', href: '/identivis' },
    ],
  },
  {
    title: '회사',
    links: [
      { name: '소개', href: '/about' },
      { name: '연혁', href: '/history' },
      { name: '채용', href: '/careers' },
    ],
  },
  {
    title: '고객지원',
    links: [
      { name: '문의하기', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: '개인정보처리방침', href: '/privacy' },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/frameout' },
  { icon: Instagram, href: 'https://instagram.com/frameout' },
  { icon: Linkedin, href: 'https://linkedin.com/company/frameout' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">프레임아웃</h3>
            <p className="text-sm mb-4">
              AI 기반 디지털 혁신 솔루션을 제공하는
              <br />
              프레임아웃입니다.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@frameout.co.kr" className="text-sm hover:text-white">
                contact@frameout.co.kr
              </a>
            </div>
          </div>

          {/* Sitemap */}
          {sitemap.map((group) => (
            <div key={group.title}>
              <h3 className="text-white text-lg font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} 프레임아웃. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
'use client';

import React from 'react';
// lucide-react 1.x dropped brand logos (Facebook, Instagram, Twitter, Linkedin),
// so the demo uses generic lucide icons for the social row.
import { AtSign, Camera, Globe, Mail } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  const socialLinks = [
    { icon: Globe, href: '#' },
    { icon: Camera, href: '#' },
    { icon: AtSign, href: '#' },
    { icon: Mail, href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="mnmlst."
      navLinks={navLinks}
      mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
      readMoreLink="#"
      imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
      imageAlt="Portrait of a smiling man with a beard, photographed against a plain background."
      overlayText={{
        part1: 'less is',
        part2: 'more.',
      }}
      socialLinks={socialLinks}
      locationText="Arlington Heights, IL"
    />
  );
};

export default MinimalistHeroDemo;

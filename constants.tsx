
import { PortfolioCategory, ServiceCategory } from './types';

export const SERVICES: ServiceCategory[] = [
  {
    title: "Music Arrangement",
    tiers: [
      {
        title: "Original Music",
        price: "THB 10,000",
        description: "Custom compositions created from scratch for your vision."
      },
      {
        title: "Cover Arrange",
        price: "THB 5,000",
        description: "Re-imagining existing songs in a unique arrangement style."
      },
      {
        title: "BGM (1:00–2:00)",
        price: "THB 2,000",
        description: "Short loops and atmospheric tracks perfect for streaming."
      }
    ]
  },
  {
    title: "Vocal Mixing",
    tiers: [
      {
        title: "Full Song",
        price: "THB 2,000",
        description: "Complete professional mix, effects, and balance."
      },
      {
        title: "Half Song",
        price: "THB 1,000",
        description: "Focused mixing for shorter tracks or simpler arrangements."
      },
      {
        title: "One Hook / Short Part",
        price: "THB 500",
        description: "Quick turnaround for hooks or social media snippets."
      }
    ]
  }
];

export const ORDER_STEPS = [
  "Prepare your audio files (Lossless WAV preferred, MP3 accepted).",
  "Include your Karaoke / Offvocal tracks separately.",
  "Provide clear references (Links to songs with similar vibes).",
  "State your Deadline and Budget clearly.",
  "Send a message with all Required Details via Discord or Twitter."
];

export const generateMockPortfolio = (category: PortfolioCategory) => {
  return Array.from({ length: 200 }).map((_, i) => {
    // Specific items for Music Arrangement
    if (category === PortfolioCategory.ARRANGEMENT) {
      if (i === 0) {
        return {
          id: `${category}-${i}`,
          title: "【ภาษาไทย】Connecting / halyosy【Happy New Year 2026】",
          category: category,
          thumbnail: "https://img.youtube.com/vi/G3QM2tKjhKQ/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/G3QM2tKjhKQ",
          label: "Mix & Instrumental"
        };
      }
      if (i === 1) {
        return {
          id: `${category}-${i}`,
          title: "Empty old City - Daisy Crown (Thai Ver.) / covered by RLanz",
          category: category,
          thumbnail: "https://img.youtube.com/vi/7YKIhGm9av8/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/7YKIhGm9av8"
        };
      }
      if (i === 2) {
        return {
          id: `${category}-${i}`,
          title: "【ORIGINAL SONG】Today Is For You - NEBUEL",
          category: category,
          thumbnail: "https://img.youtube.com/vi/ilvtdVs_VsE/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/ilvtdVs_VsE"
        };
      }
      if (i === 3) {
        return {
          id: `${category}-${i}`,
          title: "NONT TANONT - คืนที่หมาเต็มวัด ft.Singto Numchok Covered by Aki X Bishamon【 Cover Song 】🔥🐈‍⬛",
          category: category,
          thumbnail: "https://img.youtube.com/vi/GHxLr75Wv9U/maxresdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/GHxLr75Wv9U",
          label: "Instrumental"
        };
      }
    }

    // Default mock items for everything else
    return {
      id: `${category}-${i}`,
      title: `${category} Work #${i + 1}`,
      category: category,
      thumbnail: `https://picsum.photos/seed/${category}-${i}/800/450`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    };
  });
};
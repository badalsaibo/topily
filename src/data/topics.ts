import { nanoid } from 'nanoid';

const categories = [
  {
    id: nanoid(),
    title:
      'The importance of establishing a strong online presence for business',
    tags: [
      'online presence',
      'small business',
      'digital marketing',
      'branding',
    ],
    category: 'mission',
  },
  {
    id: nanoid(),
    title: 'Affordable branding solutions for startups and entrepreneurs',
    tags: ['logo design', 'startups', 'enterpreneurs', 'website design'],
    category: 'custom',
  },
  {
    id: nanoid(),
    title:
      'Expert tips for choosing the right digital marketing agency for your business',
    tags: ['tips', 'branding', 'social media management', 'branding'],
    category: 'mission',
  },
  {
    id: nanoid(),
    title: 'Custom Topic',
    tags: ['custom tag', 'hello world'],
    category: 'custom',
  },
  {
    id: nanoid(),
    title: 'Lorem Ipsum',
    tags: ['trance', 'gekko'],
    category: 'product',
  },
];

export default categories;

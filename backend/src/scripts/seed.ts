import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Category from '../models/Category';
import Example from '../models/Example';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/message-gallery';

const seedData = [
  {
    category: 'Professional Emails',
    description: 'Formal templates for workplace communication',
    examples: [
      { title: 'Meeting Request', text: 'Hi [Name], I would like to schedule a brief meeting to discuss [Project]. Are you available on [Day] at [Time]?' },
      { title: 'Follow up', text: 'Dear [Name], It was great meeting you today. I am following up on our discussion regarding [Topic]. Looking forward to your thoughts.' },
      { title: 'Resignation', text: 'Dear [Manager], Please accept this email as formal notification that I am resigning from my position as [Title]. My last day will be [Date].' }
    ]
  },
  {
    category: 'Emergency Messages',
    description: 'Quick responses for urgent situations',
    examples: [
      { title: 'Running Late', text: 'Hi, I am running about 15 minutes late due to unexpected traffic. So sorry for the delay!' },
      { title: 'Sick Day', text: 'Hi [Manager], I woke up feeling unwell today and will need to take a sick day. I will check my emails periodically if anything urgent arises.' },
      { title: 'Oustanding Issue', text: 'URGENT: There is a critical issue with [System]. We are investigating now. Will provide updates every 30 minutes.' }
    ]
  },
  {
    category: 'Social Responses',
    description: 'Polite ways to accept or decline invitations',
    examples: [
      { title: 'Accept Invitation', text: 'Thanks for the invite! I would love to come. See you then!' },
      { title: 'Decline Invitation', text: 'Thank you so much for thinking of me! Unfortunately, I already have plans that day, so I won\'t be able to make it.' },
      { title: 'Birthday Wish', text: 'Happy Birthday! Hope you have a fantastic day and a wonderful year ahead!' }
    ]
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await Category.deleteMany({});
    await Example.deleteMany({});

    for (const item of seedData) {
      const category = await Category.create({
        name: item.category,
        description: item.description
      });

      const examples = item.examples.map(ex => ({
        ...ex,
        categoryId: category._id
      }));

      await Example.insertMany(examples);
      console.log(`Seeded category: ${item.category}`);
    }

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seed();

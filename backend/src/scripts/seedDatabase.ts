import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Category from '../models/Category';
import Example from '../models/Example';
import data from '../data/data';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || '';

if (!MONGO_URL) {
  console.error('Please define the MONGO_URL environment variable in .env file');
  process.exit(1);
}

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');

    // Clear existing data
    console.log('Clearing existing data...');
    await Category.deleteMany({});
    await Example.deleteMany({});
    console.log('Existing data cleared');

    // Seed categories and examples
    console.log('Seeding database...');
    
    for (const categoryData of data) {
      // Create category
      const category = new Category({
        name: categoryData.category,
        description: `Templates for ${categoryData.category}`
      });
      
      await category.save();
      console.log(`Created category: ${category.name}`);

      // Create examples for this category
      for (const exampleData of categoryData.examples) {
        const example = new Example({
          title: exampleData.title,
          text: exampleData.text,
          categoryId: category._id
        });
        
        await example.save();
        console.log(`  - Created example: ${example.title}`);
      }
    }

    console.log('Database seeded successfully!');
    console.log(`Created ${data.length} categories with examples`);
    
    // Count total examples
    const totalExamples = await Example.countDocuments();
    console.log(`Total examples created: ${totalExamples}`);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
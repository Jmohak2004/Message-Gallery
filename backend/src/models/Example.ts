import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
}, {
  timestamps: true
});

const Example = mongoose.model('Example', exampleSchema);
export default Example;
import mongoose, { Schema, Document } from 'mongoose';

export interface IHistory extends Document {
  userId: string;
  prompt: string;
  response: string;
  createdAt: Date;
}

const HistorySchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  prompt: { type: String, required: true },
  response: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.model<IHistory>('History', HistorySchema);

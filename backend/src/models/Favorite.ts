import mongoose, { Schema, Document } from 'mongoose';

export interface IFavorite extends Document {
  userId: string;
  exampleId?: string;
  customText?: string;
  createdAt: Date;
}

const FavoriteSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  exampleId: { type: Schema.Types.ObjectId, ref: 'Example' },
  customText: { type: String }
}, {
  timestamps: true
});

export default mongoose.model<IFavorite>('Favorite', FavoriteSchema);

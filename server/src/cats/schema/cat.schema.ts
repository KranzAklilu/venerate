import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop(raw({ firstName: { type: String }, lastName: { type: String } }))
  tags: Record<string, any>;

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }] })
  // owner: Owner[];
}
export const CatSchema = SchemaFactory.createForClass(Cat);

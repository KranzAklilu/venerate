import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Owner {
  @Prop()
  name: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);

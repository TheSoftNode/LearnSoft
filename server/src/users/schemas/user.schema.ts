import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import validator from 'validator';

export type CatDocument = mongoose.HydratedDocument<User>;


// Create the schema
@Schema({ timestamps: true })
export class User {
  @Prop({ required: [true, 'Please enter your name'] })
  name: string;

  @Prop({
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  })
  email: string;

  @Prop({
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false,
  })
  password: string;

  @Prop({
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (this: User, el: string): boolean {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  })
  confirmPassword: string;

  @Prop({
    type: {
      public_id: String,
      url: String,
    },
    default: {},
  })
  avatar: { public_id?: string; url?: string };

  @Prop({ type: String, default: 'user' })
  role: string;

  @Prop({ type: Boolean, default: false })
  isVerified: boolean;

//   @Prop({ courseId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] })
//   courses: Course[];

  @Prop({ type: Date })
  passwordChangedAt?: Date;

  @Prop({ type: String })
  passwordResetToken?: string;

  @Prop({ type: Date })
  passwordResetExpires?: Date;

  @Prop({ type: Boolean, default: true, select: false })
  active: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);



import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema({timestamps:true})
export class Movies extends Document {


    @Prop()
    name:string;

    @Prop()
    genre:string;

    @Prop()
    year:number;

}

export const MoviesSchema = SchemaFactory.createForClass(Movies);
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({
    timestamps: true
})
export class Task {
    @Prop({
        required: true,
        unique: true,
        trim: true //delete the space in the beginning and at the end
    })
    title: string

    @Prop({
        trim: true
    })
    description: string

    @Prop({
        default: false
    })
    done: boolean
}

export const TaskSchema = SchemaFactory.createForClass(Task)
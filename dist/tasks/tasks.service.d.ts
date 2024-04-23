/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { createTaskDTO } from 'src/dto/create-task.dto';
import { updateTaskDTO } from 'src/dto/update-task.dto';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    findAll(): Promise<Task[]>;
    create(createTask: createTaskDTO): Promise<import("mongoose").Document<unknown, {}, Task> & Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(id: string): Promise<Task>;
    delete(id: string): Promise<Task>;
    update(id: string, updateTask: updateTaskDTO): Promise<Task>;
}

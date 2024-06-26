import { Controller, Get, Post,Put,Delete, Body, Param, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDTO } from '../dto/create-task.dto';
import { updateTaskDTO } from '../dto/update-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private taskService:TasksService) {}

    @Get()
    async findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:string) {
        const task = await this.taskService.findOne(id);
        if (!task) throw new NotFoundException('Task does not exist!');
        return task;
    }

    @Post()
    async create(@Body() body:createTaskDTO) {
        try {
            return await this.taskService.create(body);
          } catch (error) {
            if (error.code === 11000) {
              throw new ConflictException('Task already exists');
            }
            throw error;
          }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id:string) {
        const task = await this.taskService.delete(id);
        if (!task) throw new NotFoundException('Task does not exist!');
        return task;
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() body:updateTaskDTO) {
        const task = await this.taskService.update(id, body);
        if (!task) throw new NotFoundException('Task does not exist!');
        return task
    }
}

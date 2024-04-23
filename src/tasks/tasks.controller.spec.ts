import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { Task } from 'src/schemas/task.schema';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            delete: jest.fn(),
            update: jest.fn()
          }
        }
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

 
  describe('findAll', () => {
    it('should return an array of tasks', async () => {
        const result: Task[] = [
            { title : 'Task One', description: 'Description one', done: false},
            { title: 'Task Two', description: 'Description two', done: true }
          ];
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);
      
      expect(await controller.findAll()).toBe(result);
    });
  });
  
});


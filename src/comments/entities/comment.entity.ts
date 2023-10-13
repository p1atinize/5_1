import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Comment {
  @ApiProperty({
    minimum: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  task_id: number;

  @ManyToOne(() => Task, (task) => task.comments, { eager: true })
  task: Task[];

  @ApiProperty()
  @Column()
  text: string;

  @ApiProperty()
  @Column({
    type: 'datetime',
  })
  changed_at: Date;
}

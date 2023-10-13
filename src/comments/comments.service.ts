import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import * as moment from 'moment';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private repository: Repository<Comment>,
  ) {}

  create(data: CreateCommentDto) {
    return this.repository.save({
      ...data,
      changed_at: moment().format('YYYY-MM-DD HH-mm-ss'),
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, data: UpdateCommentDto) {
    return this.repository.save({ ...data, id });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}

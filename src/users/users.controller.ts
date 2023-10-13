import {Controller, Body, Patch, Param, Delete, UsePipes} from '@nestjs/common';
import { UsersService } from './users.service';
import {UpdateUserDto, updateUserSchema} from './dto/update-user.dto';
import {ZodValidationPipe} from "../pipes/ValidationPipe";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(updateUserSchema))
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

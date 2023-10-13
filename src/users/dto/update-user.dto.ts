import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { z } from 'zod';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name: string;
}

export const updateUserSchema = z
    .object({
        name: z.string().max(20),
        email: z.string().email(),
        password: z.string().min(4).max(24),
    })
    .required();

export type ZodDto = z.infer<typeof updateUserSchema>;

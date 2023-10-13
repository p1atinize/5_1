import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export class CreateUserDto {
    @ApiProperty({ description: 'ФИО' })
    name: string;
    @ApiProperty({ description: 'email' })
    email: string;
    @ApiProperty({ description: 'пароль от 4 до 24 символов' })
    password: string;
}

export const createUserSchema = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(4).max(24),
    }).required();

export type ZodDto = z.infer<typeof createUserSchema>;
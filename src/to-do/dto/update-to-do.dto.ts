import { PartialType } from '@nestjs/mapped-types';
import { CreateToDoDto } from './create-to-do.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateToDoDto extends PartialType(CreateToDoDto) {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  title: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'This is an optional property',
  })
  dueDate: string;

  @ApiProperty({
    required: false,
    type: String,
    description: 'This is an optional property',
  })
  description: string;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateToDoDto } from './create-to-do.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStatusToDoDto extends PartialType(CreateToDoDto) {
  @ApiProperty({
    type: String,
    description: 'This is an optional property',
  })
  pic: string;

  @ApiProperty({
    type: String,
    description: 'This is an optional property',
  })
  status: string;
}

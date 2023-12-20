import { ApiProperty } from '@nestjs/swagger';

export class CreateToDoDto {
  //ApiProperty -> wajib
  // ApiPropertyOptional -> optional

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  title: string;

  @ApiProperty({
    type: String,
    description: 'This is an optional property',
  })
  dueDate: string;

  @ApiProperty({
    type: String,
    description: 'This is an optional property',
  })
  description: string;

  @ApiProperty({
    type: String,
    description: 'This is an optional property',
  })
  status: string;

  @ApiProperty({
    type: String,
    description: 'This is an optional property',
  })
  pic: string;

  //   @ApiPropertyOptional({
  //     type: String,
  //     description: 'This is an optional property',
  //   })
  //   pic: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: '비밀번호',
    example: 'asd123!@#',
  })
  password: string;

  @ApiProperty({ description: '닉네임', example: '최총' })
  nickName: string;
}

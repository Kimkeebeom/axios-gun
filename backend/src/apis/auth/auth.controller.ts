import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { tokenDto } from './dto/token.dto';
import { loginDto } from './dto/login.dto';
@Controller('auth')
@ApiTags('인증 API')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({
    summary: '로그인 API',
    description: '입력받은 데이터와 일치하는 유저 정보로 로그인',
  })
  @ApiCreatedResponse({
    description: '로그인 성공.',
    type: tokenDto,
  })
  login(@Res() res, @Body() loginDto: loginDto) {
    return this.authService.login(loginDto, res).then((accessToken) => {
      res.status(HttpStatus.CREATED).json({ accessToken });
    });
  }
}

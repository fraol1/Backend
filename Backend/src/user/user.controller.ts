import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch('/:Id')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('Id', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }

  @Get('/:Id')
  getUser(@Param('Id', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Delete('/:Id')
  deleteUser(@Param('Id', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}

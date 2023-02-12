import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { WatchListService } from './watchList.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class WatchListController {
  constructor(
    private readonly authService: AuthService,
    private usersService: UsersService,
    private readonly appService: WatchListService,
  ) {}
  @Post('/add')
  adder(@Body() addedData: { first: string }) {
    this.appService.add(addedData.first);
    console.log(addedData.first);
    console.log(this.appService.temp);
  }
  @Get('/refresh')
  refresher() {
    const data = this.appService.refresher();
    console.log(this.appService.temp);
    return {
      watchlist: this.appService.temp,
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): any {
    req.user['watchlist'].push('hello');
    for (let user of this.usersService.users) {
      console.log(user.watchlist);
      if (user.id === req.user['id']) {
        user.watchlist = req.user['watchlist'];
      }
    }
    return req.user;
  }
}

import { Module } from '@nestjs/common';
import { WatchListController } from './watchList.controller';
import { WatchListService } from './watchList.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [WatchListController],
  providers: [WatchListService],
})
export class WatchListModule {}

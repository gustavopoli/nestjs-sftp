import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ScheduleModule } from '@nestjs/schedule';
import { SftpModule } from 'nest-sftp';
import { SiteModule } from './site/site.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SftpModule.forRoot(
      {
        host: 'sftp-url-site',
        port: 22,
        username: 'user_name',
        password: 'password', 
      },
      false,
    ),
    SiteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

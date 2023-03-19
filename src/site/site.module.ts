import { Module } from '@nestjs/common';
import { SiteService } from './site.service';

import { SftpClientService } from 'nest-sftp';

@Module({
  providers: [SiteService]
})
export class SiteModule {}

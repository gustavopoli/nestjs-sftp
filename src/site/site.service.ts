import { Injectable, Logger } from '@nestjs/common';
import { SftpClientService } from 'nest-sftp';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class SiteService {
    private readonly logger = new Logger(SiteService.name);

    constructor(private readonly sftpClient: SftpClientService) {
        this.logger = new Logger();
    }

    @Cron('0 41 10 * * *')
    async downloadFiles() {
        this.logger.debug('Begging download files');
        await this.sftpClient.download('remote-path', 'local-path');
        this.logger.debug('End download files');
    }
}

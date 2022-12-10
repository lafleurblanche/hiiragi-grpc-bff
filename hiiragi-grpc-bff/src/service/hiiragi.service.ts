import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface HiiragiRWOperatingKiloService {
  getHiiragiOperatingKilo(data: {hiiragiRWStaCode: string }): Observable<any>;
}

@Injectable()
export class HiiragiService implements OnModuleInit {

  private hiiragiRWOperatingKiloService: HiiragiRWOperatingKiloService;

  constructor(@Inject('HIIRAGI_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
      this.hiiragiRWOperatingKiloService = this.client.getService<HiiragiRWOperatingKiloService>('HiiragiRWOperatingKiloService');
  }

  getHiiragiOperationKilo(staCode: string): Observable<string> {
    return this.hiiragiRWOperatingKiloService.getHiiragiOperatingKilo({hiiragiRWStaCode: staCode});
  }
}

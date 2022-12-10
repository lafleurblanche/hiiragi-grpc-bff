import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HiiragiService } from 'src/service/hiiragi.service';

@Controller()
export class HiiragiController {
  constructor(private readonly hiiragiService: HiiragiService) {}

  @Get('/hiiragi/:staCode')
  call(@Param("staCode") staCode: string): Observable<any> {
    return this.hiiragiService.getHiiragiOperationKilo(staCode);
  }
}

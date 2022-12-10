/* NestJS(common) */
import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";

/* controller */
import { HiiragiController } from "src/controller/hiiragi.controller";

/* services */
import { HiiragiService } from "src/service/hiiragi.service";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HIIRAGI_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:38065',
          package: 'hiiragi',
          protoPath: join(__dirname, 'proto/hiiragi_operating_kilo.proto'),
        },
      },
    ]),
  ],
  providers: [HiiragiService],
  controllers: [HiiragiController],
})

export class HiiragiModule {}

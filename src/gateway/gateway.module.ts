import { Module } from "@nestjs/common";
import { DsaGateway } from "./gateway";

@Module({
    providers: [DsaGateway]
})
export class GatewayModule {}
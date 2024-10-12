import { Module } from "@nestjs/common";
import { HelloService } from "@/hello.service.ts";
import { HelloController } from "@/hello.controller.ts";

@Module({ providers: [HelloService], controllers: [HelloController] })
export class AppModule {}

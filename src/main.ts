import "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module.ts";

const app = await NestFactory.create(AppModule);

app.listen(3000);

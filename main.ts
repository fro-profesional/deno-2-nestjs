import { NestFactory } from '@nestjs/core';
import { Get, Module, Controller } from '@nestjs/common';
import '@nestjs/platform-express';

class HelloService {
  hello() {
    return 'Hello World!'; // updated to return instead of console.log
  }
}

@Controller()
class HelloController {
  constructor(private helloService: HelloService) {}

  @Get('/')
  hello() {
    return this.helloService.hello();
  }
}

@Module({ providers: [HelloService], controllers: [HelloController] })
class AppModule {}
const app = await NestFactory.create(AppModule);
console.log(Deno)
app.listen(3000);
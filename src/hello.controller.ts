import { Controller, Get } from "@nestjs/common";
import { HelloService } from "@/hello.service.ts";

@Controller()
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get("/")
  hello() {
    return this.helloService.hello();
  }
}

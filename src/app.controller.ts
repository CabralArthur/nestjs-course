import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
    @Get()
    helloWorld() {
        return 'Hello world!';
    }
}
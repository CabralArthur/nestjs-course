import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
    @Get()
    helloWorld() {
        return 'Hello world!';
    }

    @Get('/bye')
    byeWorld() {
        return 'Bye world!';
    }
}
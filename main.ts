import { NestFactory } from '@nestjs/core';
import { Controller, Module, Get } from '@nestjs/common';

@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return 'Hi there!';
    }
}

@Module({
    controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    await app.listen(9128);
}

bootstrap();
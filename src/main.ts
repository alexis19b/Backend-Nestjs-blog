import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //log en consola
  const logger = new Logger();

  //Pipes(Validaciones)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))



  await app.listen(3000);
  logger.log(`Server is running in localhost:3000`)
}
bootstrap();

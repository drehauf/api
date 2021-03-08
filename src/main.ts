import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Load `.env` and assign to `process` as soon as possible
  require('dotenv').config();
  const app = await NestFactory.create(AppModule);
  await app.listen(3009);
}
bootstrap();

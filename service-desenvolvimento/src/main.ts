import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create a Swagger document options
  const config = new DocumentBuilder()
    .setTitle('Trabalho 6 - Desenvolvimento')
    .setDescription(
      'Implementar CRUD Carro, CRUD Modelo, CRUD Marca para o trabalho 6 da matéria de Banco de Dados.',
    )
    .setVersion('1.0')
    .build();

  // Create a Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger UI
  SwaggerModule.setup('api', app, document);

  app.use(cors());

  await app.listen(3010, () => {
    Logger.log(`Server running at http://localhost:3010`);
  });
}
bootstrap();

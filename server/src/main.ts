import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const authOptions = new DocumentBuilder()
    .setTitle('auth API')
    .setDescription('The auth API description')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  // const document = SwaggerModule.createDocument(app, config);
  const authDocument = SwaggerModule.createDocument(app, authOptions, {
    include: [AuthModule],
  });
  SwaggerModule.setup('api/auth', app, authDocument);

  const usersOptions = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('The User API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  // const document = SwaggerModule.createDocument(app, config);
  const usersDocument = SwaggerModule.createDocument(app, usersOptions, {
    include: [UsersModule],
  });
  SwaggerModule.setup('api/user', app, usersDocument);

  await app.listen(3000);
}
bootstrap();

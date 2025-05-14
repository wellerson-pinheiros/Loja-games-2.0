import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Testes dos Módulos Usuário e Auth (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot({
    type: "sqlite",
    database: ":memory:",
    entities: [__dirname + "./../src/**/entities/*.entity.ts"],
    synchronize: true,
	dropSchema: true
}),
        AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

    afterAll(async () => {
	  await app.close();
  });
  
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

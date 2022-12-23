import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await startSwagger(app);
  await app.listen(3000);
}
bootstrap();
async function startSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle(" Manage User Api")
    .setDescription(
      "Manage User Api Test use middelware sofe delete with Prisma Orm ",
    )
    .setVersion("1.0")
    .addBearerAuth({
      type: "http",
      description: "Enter your Assettoken ",
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);
}

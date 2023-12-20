import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnection } from './service/configDB';
import { ToDoModule } from './to-do/to-do.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnection,
    }),
    ToDoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

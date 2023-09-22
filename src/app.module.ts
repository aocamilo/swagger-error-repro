import { Module } from '@nestjs/common';
import { FooController } from './foo.module';

@Module({
  imports: [],
  controllers: [FooController],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';

// Modules
import { CatsModule } from "./cat";
import { DogsModule } from "./dogs"

@Module({
  imports: [CatsModule, DogsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }

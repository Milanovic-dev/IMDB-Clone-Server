import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieController } from './movie.controller';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  exports: [MovieService],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}

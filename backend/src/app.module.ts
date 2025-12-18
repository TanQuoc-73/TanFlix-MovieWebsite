import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';

import {AppController} from './app.controller';
import {AppService } from './app.service';

import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { FavoritesModule } from './favorites/favorites.module';

//


@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env'
    }),

    MongooseModule.forRoot(process.env.MONGO_URI || ''),

    MoviesModule,
    UsersModule,
    FavoritesModule,
    // RatingsModule,
    // CommentsModule,
    // AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule{}








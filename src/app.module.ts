import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { appConfig } from './config/config';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(appConfig),
    DatabaseModule,
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
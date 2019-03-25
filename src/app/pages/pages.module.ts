import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import {
  PaginationModule,
  GithubButtonModule,
  LoadingModule, DialogModule
} from '../component';
import { FileSizePipe } from '../component/file-upload/file-size.pipe';
import { BaseLayoutModule } from '../layouts';

import { PagesRoutingModule } from './pages.routing';
import { UserModule } from './user/user.module';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog/article/article.component';
import { BlogService } from './blog/blog.grahql';

import { ProfileComponent } from './profile/profile.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerFirebase } from './file-manager/file-manager.firebase';
import { FileManagerService } from './file-manager/file-manager.service';
import { BotManagerService } from './bot-manager/bot-manager.service';
import { ProjectComponent } from './project/project.component';

import { GraphQLModule } from '../shared/graphql.module';
import { BotManagerComponent } from './bot-manager/bot-manager.component';

@NgModule({
  imports: [
    SharedModule,
    PaginationModule,
    PagesRoutingModule,
    BaseLayoutModule,
    GithubButtonModule,
    HttpClientModule,
    LoadingModule,
    GraphQLModule,
    UserModule,
    DialogModule
  ],
  declarations: [
    PagesComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    BlogComponent,
    BlogArticleComponent,
    ProfileComponent,
    FileManagerComponent,
    ProjectComponent,
    FileSizePipe,
    BotManagerComponent
  ],
  providers: [FileManagerFirebase, FileManagerService, BlogService, BotManagerService]
})
export class PagesModule {}

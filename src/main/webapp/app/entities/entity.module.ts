import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { BlogCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { BlogLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { BlogDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { BlogTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { BlogEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { BlogJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { BlogJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BlogRegionMySuffixModule,
        BlogCountryMySuffixModule,
        BlogLocationMySuffixModule,
        BlogDepartmentMySuffixModule,
        BlogTaskMySuffixModule,
        BlogEmployeeMySuffixModule,
        BlogJobMySuffixModule,
        BlogJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}

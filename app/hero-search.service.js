// import {Injectable} from '@angular/core';
// import {Http, Response} from '@angular/http';
// import {Observable} from 'rxjs';
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import {Hero} from './hero';
// @Injectable()
// export class HeroSearchService{
// 	constructor(private http : Http){}
// 	search(term : string): Observable<Hero[]>{
// 		return this.http
// 			.get('app/heroes/?name=${term}')
// 			.map((r:Response) => r.json().data as Hero[]);
// 	}
// }
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var HeroSearchService = (function () {
    function HeroSearchService(http) {
        this.http = http;
    }
    HeroSearchService.prototype.search = function (term) {
        return this.http
            .get("app/heroes/?name=" + term)
            .map(function (r) { return r.json().data; });
    };
    HeroSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroSearchService);
    return HeroSearchService;
}());
exports.HeroSearchService = HeroSearchService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-search.service.js.map
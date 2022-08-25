/**
 * @description Паттерн proxy позволяет расширить поведение оригинального класса,
 * предоставляя некоторую "прослойку", реализующую тот же интерфейс, что и оригинальный класс
 */

import { BaseAPI, BaseAPIWithNotifiers } from './implementation';

const baseAPI = new BaseAPI(window);
const baseAPIWithNotifiers = new BaseAPIWithNotifiers(baseAPI);

baseAPIWithNotifiers.requestGet('https://jsonplaceholder.typicode.com/users');

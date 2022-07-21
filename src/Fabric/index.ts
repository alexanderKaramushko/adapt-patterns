/**
 * @description Паттерн фабрика позволяет изолироваться от прямого вызова new
 * Также данный паттерн позволяет реализовать полиморфизм для
 * наследующихся классов, при этом не зная окончательный набор этих наслоедующихся классов
 */

import { UsersV1ServiceCreator } from './implementations';

const usersV1Service = new UsersV1ServiceCreator();

usersV1Service.getUsers();

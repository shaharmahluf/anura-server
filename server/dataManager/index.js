import FileSystem from './FileSystem'
import { DATA_MANAGER } from '../constants/environment'
import * as managerTypes from '../constants/managerTypes'
import MongoManager from './Mongo';

function getDataManger() {
    switch (DATA_MANAGER.toUpperCase()) {
        case (managerTypes.FILE_SYSTEM):
            return new FileSystem();
        case(managerTypes.MONGO):
            return new MongoManager();
        default:
            return new FileSystem();
    }
}
export default getDataManger();
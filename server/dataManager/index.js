import FileSystem from './FileSystem'
import { config } from '../constants/configs'
import * as managerTypes from '../constants/managerTypes'
import MongoManager from './Mongo';

class DataManager {
    constructor() {
        this.manager = undefined
    }
    getDataManager = () => {
        switch (config.DATA_MANAGER.toUpperCase()) {
            case (managerTypes.FILE_SYSTEM):
                return new FileSystem();
            case(managerTypes.MONGO):
                return new MongoManager();
            default:
                return new FileSystem();
        }
    }
    initializeDataManager = () => {
        this.manager = this.getDataManager()
        return this.manager
    }
}

export default new DataManager()

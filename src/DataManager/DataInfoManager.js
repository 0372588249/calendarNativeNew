import { AsyncStorage } from "react-native";

export default class DataInfoManager {
    static DataInfoManagerInstance = null;
    dataInfo = {
        full_name: "",
        dob: "",   
        gender: "",
        address: "",

    };
    Observers = [];
    addObserver(observer) {
        this.Observers[this.Observers.length] = observer
    }
    removeObserver(o) {
        this.Observers = this.Observers.filter((observer) => observer != o);
    }
    static getDataInfoManagerInstance() {
        if (DataInfoManager.DataInfoManagerInstance == null) {
            DataInfoManager.DataInfoManagerInstance = new DataInfoManager();
            this.DataInfoManagerInstance.loadDataFromLocal();
        }
        return this.DataInfoManagerInstance;
    }
    getDataInfo() {
        return this.dataInfo;
    }
    updateDataInfo(DataInfo) {
        this.dataInfo = DataInfo;
        this.updateDataToLocal();
    }

    deleteDataInfo() {
        this.dataInfo = {

        }
        this.updateDataToLocal();
    }
    updateDataToLocal() {
        AsyncStorage.removeItem("DataInfo",(error)=>{
            if(error == null) {
                AsyncStorage.setItem("DataInfo", JSON.stringify(this.dataInfo))
            }
        })
        this.listenChange()
    }
    loadDataFromLocal() {
        AsyncStorage.getItem("DataInfo", (error, result) => {
            if(error == null){
                this.dataInfo = JSON.parse(result)
                this.listenChange()
            }
        })
    }
    listenChange() {
        this.Observers.map(
            (o, index, arr) => {
                if (o.onDataInfoChanged) {
                    o.onDataInfoChanged(this)
                }
            }
        )
    }
}
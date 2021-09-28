/*******************
const db = {}

const addtoDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1
    }
    else {
        db[item] = 1;
    }

    console.log(db);
}
const removeFromDb = item => {
    const db = getDb();
    delete db[item];
}
const getDb = () => {
    return db;
}
********************** */
const input = {};

const addItem = (item) => {
    const name = getInput();
    if (item in name) {
        name[item] = name[item] + 1;
    }
    else {
        name[item] = 1;
    }
    saveToDb(name)
}

const removeItem = item => {
    const name = getInput();
    delete name[item]
    saveToDb(name)
}

const saveToDb = name => {
    const nameJson = JSON.stringify(name)
    localStorage.setItem('friend', nameJson)
}
const getDb = () => {
    let saveDb = localStorage.getItem('friend')
    saveDb = JSON.parse(saveDb);
    return saveDb;
}
const getInput = () => {
    return input;
}
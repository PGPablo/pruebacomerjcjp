import { auth, db } from './setup'

export function watchUserChanges(callback){
    const unsub = auth.onAuthStateChanged((user) =>{
        if(user && !user.isAnonymous){
            callback({
                id: user.uid,
                email: user.email,
                displayName: user.displayName,
            })
        }else{
            callback(null);
        }
    })

    return unsub
}

export function watchNoticias(callback){
    const unsub = db.collection('noticias').onSnapshot((snapshot) => {
        const docs = []
        snapshot.forEach((doc) => {
            const data = doc.data()
            docs.push({
                ...data,
                id: doc.id,
            }) 
        })
        callback(docs)
    })
    return unsub
}

export function watchSliders(callback){
    const unsub = db.collection('sliders').onSnapshot((snapshot) => {
        const docs = []
        snapshot.forEach((doc) => {
            const data = doc.data()
            docs.push({
                ...data,
                id: doc.id,
            }) 
        })
        callback(docs)
    })
    return unsub
}

export function watchActividades(callback){
    const unsub = db.collection('actividades').onSnapshot((snapshot) => {
        const docs = []
        snapshot.forEach((doc) => {
            const data = doc.data()
            docs.push({
                ...data,
                id: doc.id,
            }) 
        })
        callback(docs)
    })
    return unsub
}

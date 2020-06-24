import { db, storage } from './setup'

//Archivos API
export async function createNoticia(data) {
    return await db 
        .collection('noticias')
        .doc()
        .set(data)
}

export async function deleteNoticia(id) {
    return await db 
        .collection('noticias')
        .doc(id)
        .delete()
}

export async function updateNoticia(id, data) {
    return await db 
        .collection('noticias')
        .doc(id)
        .update(data)
}

//Sliders API
export async function createSliders(data) {
    return await db 
        .collection('sliders')
        .doc()
        .set(data)
}

export async function deleteSliders(id) {
    return await db 
        .collection('sliders')
        .doc(id)
        .delete()
}

export async function updateSliders(id, data) {
    return await db 
        .collection('sliders')
        .doc(id)
        .update(data)
}

//Actividades API
export async function createActividades(data) {
    return await db 
        .collection('actividades')
        .doc()
        .set(data)
}

export async function deleteActividades(id) {
    return await db 
        .collection('actividades')
        .doc(id)
        .delete()
}

export async function updateActividades(id, data) {
    return await db 
        .collection('actividades')
        .doc(id)
        .update(data)
}
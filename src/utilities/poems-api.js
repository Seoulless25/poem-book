import sendRequest from "./send-request";
const BASE_URL = '/api/poems';

export function index() {
    console.log('beforesend');
    return sendRequest(BASE_URL);
}

export function create(newPoem, newTitle, newGenre) {
    return sendRequest(BASE_URL, 'POST', { newPoem, newTitle, newGenre });
}

export function deletePoem(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function edit(id, editPoem) {
    console.log(id, editPoem);
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', { text: editPoem });
}
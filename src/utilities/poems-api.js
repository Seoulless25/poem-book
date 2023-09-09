import sendRequest from "./send-request";
const BASE_URL = '/api/poems';

export function index() {
    console.log('beforesend');
    return sendRequest(BASE_URL);
}

export function create(newPoem) {
    return sendRequest(BASE_URL, 'POST', { newPoem });
}

export function deletePoem(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function edit(id, editPoem) {
    return sendRequest(`${BASE_URL}/${id}, 'PUT`, { editPoem });
}
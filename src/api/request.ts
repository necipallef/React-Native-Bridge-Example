import AsyncStorage from '@react-native-community/async-storage';
import {ResponseModel} from './request.model';
import {HttpHeaders} from './http-headers';

const BASE_URL = 'https://httpbin.org/get';

export function get<T>(url: string) {
    return request<T>('GET', url);
}

export function post<T>(url: string, body?: any, options?: any) {
    return request<T>('POST', url, body, options);
}

export function put<T>(url: string, body?: any) {
    return request<T>('PUT', url, body);
}

export function httpDelete(url: string) {
    return request('DELETE', url);
}

export function request<T>(method: string, url: string, body?: any, options?: any): Promise<ResponseModel<T>> {
    return AsyncStorage.getItem('session_id')
        .catch(() => null)
        .then(sessionId => {
            const headers: HttpHeaders = {
                'Content-Type': 'application/json',
            };

            if (sessionId) {
                headers['Session-ID'] = sessionId;
            }

            const args = {headers, method, body: JSON.stringify(body)};
            console.info(`HTTP ${method} ${url} body:${JSON.stringify(body)}`);

            return fetch(BASE_URL + url, args)
                .then(response => {
                    console.log({response});

                    return response.json()
                        .then(content => {
                            console.log({response: content});
                            if (content['status'] === 'failure') {
                                console.log({kaboom: response});
                                if (options && options['returnResponseOnError']) {
                                    return Promise.reject({response, content});
                                }

                                return Promise.reject(content['error_message_human_readable']);
                            }

                            return new ResponseModel<T>(
                                content['data'] as T,
                                response.headers,
                                response.status,
                            );
                        });
                });
        });
}

import {get} from '../request';

export class CounterApiService {
    static get(): Promise<void> {
        return get<void>('')
            .then(response => response.getBody())
            .then(response => {
                    const delay = 1000;
                    return new Promise<void>(resolve => {
                        setTimeout(() => {
                            resolve(response);
                        }, delay);
                    });
                },
            );
    }
}

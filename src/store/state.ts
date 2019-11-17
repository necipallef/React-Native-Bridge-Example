import {UIState} from './ui/state';
import {CounterState} from './count/state';

export interface GlobalState {
    ui: UIState;
    counter: CounterState;
}

import {ReactNode} from 'react';

type ReactNodeOrRenderer = (() => ReactNode);
export const renderIf = (predicate: boolean) =>
    (item: ReactNodeOrRenderer, elseValue: ReactNodeOrRenderer = null) =>
        Boolean(predicate) ? item() : (elseValue ? elseValue() : null);

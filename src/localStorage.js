import { loadStorage, setStorage } from './store'

export const loadState = () => {
    if (loadStorage('obj') || loadStorage('objRates')) {
        try {
            const obj = loadStorage('obj');
            const selectValues = loadStorage('selectValues').split(',');
            const selectedValue1 = loadStorage('selectedValue1');
            const selectedValue2 = loadStorage('selectedValue2');
            const namesNrates = loadStorage('namesNrates');
            const date = loadStorage('date');
            const selectedRates1 = loadStorage('selectedRates1');
            const selectedRates2 = loadStorage('selectedRates2');
            const objRates = loadStorage('objRates');

            if (!obj || !objRates) {
                return undefined;
            }

            return {
                inputValue1: '',
                inputValue2: '',
                obj: JSON.parse(obj),
                selectValues,
                selectedValue1,
                selectedValue2,
                namesNrates: JSON.parse(namesNrates),
                date,
                selectedRates1,
                selectedRates2,
                objRates: JSON.parse(objRates)
            }

        } catch (e) {
            return console.log(e);
        }
    }
};

export const saveState = (...state) => {
    const { obj, namesNrates, objRates, date } = state[0];
    try {
        setStorage('obj', JSON.stringify(obj));
        setStorage('selectValues', Object.keys(obj));
        setStorage('selectedValue1', Object.keys(obj)[0]);
        setStorage('selectedValue2', Object.keys(obj)[0]);
        setStorage('namesNrates', JSON.stringify(namesNrates));
        setStorage('date', date);
        setStorage('selectedRates1', Object.values(namesNrates)[0]);
        setStorage('selectedRates2', Object.values(namesNrates)[0]);
        setStorage('objRates', JSON.stringify(objRates));

    } catch (e) {
        return console.log(e);
    }
};
